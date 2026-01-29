// Speedometer UI Script
class Speedometer {
    constructor() {
        this.speedometer = document.getElementById('speedometer');
        this.speedValue = document.getElementById('speed-value');
        this.speedUnit = document.getElementById('speed-unit');
        this.gearValue = document.getElementById('gear-value');
        this.throttleFill = document.getElementById('throttle-fill');
        this.brakeFill = document.getElementById('brake-fill');
        this.isVisible = false;
        this.lastSpeed = 0;
        this.lastGear = 0;

        // Listen for messages from the game
        window.addEventListener('message', (event) => {
            this.handleMessage(event.data);
        });

        console.log('Speedometer UI initialized');
    }

    handleMessage(data) {
        switch (data.type) {
            case 'showSpeedometer':
                this.toggleVisibility(data.show);
                if (data.unit) {
                    this.updateUnit(data.unit);
                }
                if (data.gear !== undefined) {
                    this.updateGear(data.gear);
                }
                break;

            case 'updateSpeed':
                this.updateSpeed(data.speed);
                if (data.unit) {
                    this.updateUnit(data.unit);
                }
                if (data.gear !== undefined) {
                    this.updateGear(data.gear);
                }
                if (data.throttle !== undefined) {
                    this.updateThrottle(data.throttle);
                }
                if (data.brake !== undefined) {
                    this.updateBrake(data.brake);
                }
                break;

            case 'updateUnit':
                this.updateUnit(data.unit);
                this.animateUnitChange();
                break;

            default:
                console.log('Unknown message type:', data.type);
        }
    }

    toggleVisibility(show) {
        this.isVisible = show;

        if (show) {
            this.speedometer.classList.add('show');
            console.log('Speedometer shown');
        } else {
            this.speedometer.classList.remove('show');
            console.log('Speedometer hidden');
        }
    }

    updateSpeed(speed) {
        // Only animate if speed changed significantly
        if (Math.abs(speed - this.lastSpeed) > 1) {
            this.speedValue.classList.add('speed-update');

            // Remove animation class after animation completes
            setTimeout(() => {
                this.speedValue.classList.remove('speed-update');
            }, 200);
        }

        this.speedValue.textContent = speed;
        this.lastSpeed = speed;
    }

    updateGear(gear) {
        // Display gear based on GTA V gear system:
        // 0 = Reverse, 1 = 1st gear, 2 = 2nd gear, etc.
        let gearDisplay = '';
        if (gear === 0) {
            gearDisplay = 'R'; // Reverse
        } else if (gear >= 1) {
            gearDisplay = gear.toString(); // Display actual gear number
        } else {
            gearDisplay = 'N'; // Neutral (shouldn't happen normally)
        }

        // Only animate if gear changed
        if (gear !== this.lastGear) {
            this.gearValue.classList.add('gear-shift');

            setTimeout(() => {
                this.gearValue.classList.remove('gear-shift');
            }, 300);
        }

        this.gearValue.textContent = gearDisplay;
        this.lastGear = gear;
    }

    updateUnit(unit) {
        this.speedUnit.textContent = unit;
    }

    animateUnitChange() {
        this.speedUnit.classList.add('unit-toggle');

        // Remove animation class after animation completes
        setTimeout(() => {
            this.speedUnit.classList.remove('unit-toggle');
        }, 500);
    }

    updateThrottle(throttle) {
        // throttle is a value between 0 and 1
        const percentage = Math.max(0, Math.min(100, throttle * 100));
        this.throttleFill.style.width = percentage + '%';
    }

    updateBrake(brake) {
        // brake is a value between 0 and 1
        const percentage = Math.max(0, Math.min(100, brake * 100));
        this.brakeFill.style.width = percentage + '%';
    }
}

// Initialize speedometer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const speedometer = new Speedometer();

    // Make speedometer globally accessible for debugging
    window.speedometer = speedometer;
});

// Debug functions (can be called from browser console)
window.debugShowSpeedometer = () => {
    window.speedometer.toggleVisibility(true);
    window.speedometer.updateSpeed(75);
    window.speedometer.updateUnit('MPH');
};

window.debugHideSpeedometer = () => {
    window.speedometer.toggleVisibility(false);
};

window.debugToggleUnit = () => {
    const currentUnit = document.getElementById('speed-unit').textContent;
    const newUnit = currentUnit === 'MPH' ? 'KMH' : 'MPH';
    window.speedometer.updateUnit(newUnit);
    window.speedometer.animateUnitChange();
};
