/// <reference types="@citizenfx/client" />

// Config structure
interface SpeedometerConfig {
    Speedometer: {
        Enabled?: boolean;
        UpdateInterval: number;
        DefaultMPH: boolean;
        HideInAircraft: boolean;
        HideInBoats: boolean;
        ToggleKey: number;
        ToggleKeyLabel?: string;
        Position?: {
            x: number;
            y: number;
        };
        OnlyInVehicle?: boolean;
        ShowBackground?: boolean;
        BackgroundOpacity?: number;
    };
    Debug?: boolean;
}

declare const Config: SpeedometerConfig;

// Config defaults
const DefaultConfig: SpeedometerConfig = {
    Speedometer: {
        UpdateInterval: 100,
        DefaultMPH: true,
        HideInAircraft: true,
        HideInBoats: false,
        ToggleKey: 20, // Z key
        Enabled: true
    },
    Debug: false
};

// Main speedometer manager
class SpeedometerManager {
    private isShowingSpeedometer: boolean = false;
    private useMPH: boolean = true;
    private currentSpeed: number = 0;
    private currentVehicle: number | null = null;
    private config: SpeedometerConfig = DefaultConfig;

    // Convert game speed to MPH or KMH
    private convertSpeed(speed: number): number {
        if (this.useMPH) {
            return Math.floor(speed * 2.236936);
        } else {
            return Math.floor(speed * 3.6);
        }
    }

    // Figure out what type of vehicle we're in
    private getVehicleCategory(vehicle: number): 'ground' | 'aircraft' | 'boat' {
        const vehicleClass = GetVehicleClass(vehicle);

        // Helicopters and planes
        if (vehicleClass === 15 || vehicleClass === 16) {
            return 'aircraft';
        }

        // Boats
        if (vehicleClass === 14) {
            return 'boat';
        }

        return 'ground';
    }

    // Check if we should display the speedometer
    private shouldShowSpeedometer(): { show: boolean; vehicle: number | null } {
        const playerPed = PlayerPedId();
        const vehicle = GetVehiclePedIsIn(playerPed, false);

        if (!vehicle || vehicle === 0) {
            return { show: false, vehicle: null };
        }

        if (!IsPedInAnyVehicle(playerPed, false)) {
            return { show: false, vehicle: null };
        }

        const vehicleCategory = this.getVehicleCategory(vehicle);

        // Check configuration settings
        if (this.config && this.config.Speedometer.HideInAircraft && vehicleCategory === 'aircraft') {
            return { show: false, vehicle };
        }

        if (this.config && this.config.Speedometer.HideInBoats && vehicleCategory === 'boat') {
            return { show: false, vehicle };
        }

        return { show: true, vehicle };
    }

    // Switch between MPH and KMH
    private toggleSpeedUnit(): void {
        this.useMPH = !this.useMPH;
        const unit = this.useMPH ? 'MPH' : 'KMH';

        SendNUIMessage({
            type: 'updateUnit',
            unit: unit
        });
    }

    // Get gear info (works with zendo-transmission if installed)
    private getTransmissionData(vehicle: number): { currentGear: number; maxGears: number } {
        let currentGear = GetVehicleCurrentGear(vehicle);
        let maxGears = GetVehicleHighGear(vehicle);

        // Check if custom transmission resource is running
        if (GetResourceState('zendo-transmission') === 'started') {
            try {
                const transmissionData = exports['zendo-transmission'].GetVehicleTransmission(vehicle);

                if (transmissionData && transmissionData.gearCount) {
                    maxGears = transmissionData.gearCount;
                }
            } catch (error) {
                if (this.config && this.config.Debug) {
                    console.log('[Speedometer] Failed to get transmission data: ' + error);
                }
            }
        }

        return { currentGear, maxGears };
    }

    // Display the speedometer
    private showSpeedometer(): void {
        this.isShowingSpeedometer = true;
        SetNuiFocus(false, false);

        SendNUIMessage({
            type: 'showSpeedometer',
            show: true,
            unit: this.useMPH ? 'MPH' : 'KMH'
        });
    }

    // Hide the speedometer
    private hideSpeedometer(): void {
        if (this.isShowingSpeedometer) {
            this.isShowingSpeedometer = false;
            this.currentVehicle = null;

            SendNUIMessage({
                type: 'showSpeedometer',
                show: false
            });
        }
    }

    // Update the display with current speed and gear
    private updateSpeedometer(speed: number, currentGear: number, maxGears: number, throttle: number, brake: number): void {
        SendNUIMessage({
            type: 'updateSpeed',
            speed: speed,
            gear: currentGear,
            maxGears: maxGears,
            throttle: throttle,
            brake: brake
        });
    }

    // Main loop - runs constantly to update speedometer
    private startUpdateLoop(): void {
        setTick(() => {
            Wait(this.config?.Speedometer.UpdateInterval || 100);

            const { show, vehicle } = this.shouldShowSpeedometer();

            if (show && vehicle) {
                this.currentVehicle = vehicle;
                const speed = GetEntitySpeed(vehicle);
                this.currentSpeed = this.convertSpeed(speed);

                const { currentGear, maxGears } = this.getTransmissionData(vehicle);

                // Get throttle and brake input (0-1 range)
                const throttle = GetVehicleThrottleOffset(vehicle);
                // Use GetControlNormal for brake input (returns 0-1, only when pressed)
                const brake = GetControlNormal(0, 72); // Control 72 is vehicle brake

                if (!this.isShowingSpeedometer) {
                    this.showSpeedometer();
                }

                this.updateSpeedometer(this.currentSpeed, currentGear, maxGears, throttle, brake);
            } else {
                this.hideSpeedometer();
            }
        });
    }

    // Listen for key press to toggle units
    private startKeyListener(): void {
        setTick(() => {
            Wait(0);

            if (this.config && this.isShowingSpeedometer && IsControlJustReleased(0, this.config.Speedometer.ToggleKey)) {
                this.toggleSpeedUnit();
            }
        });
    }

    // Start everything up
    public init(): void {
        console.log('^2[Speedometer] TypeScript version initialized^0');

        this.useMPH = this.config.Speedometer.DefaultMPH;

        if (this.config.Speedometer.Enabled === false) {
            console.log('^3[Speedometer] Disabled in config^0');
            return;
        }

        this.startUpdateLoop();
        this.startKeyListener();
    }
}

// Start it up
const speedometer = new SpeedometerManager();
speedometer.init();

// Let other resources access this if needed
exports('GetCurrentSpeed', () => speedometer['currentSpeed']);
exports('IsSpeedometerVisible', () => speedometer['isShowingSpeedometer']);
