const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    minutes: document.querySelector('[data-value="mins"]'),
    seconds: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
    constructor({ targetDate, selector }) {
        this.targetDate = targetDate;
        this.selector = selector;

        this.start();
    }
    start() {
        const startTime = this.targetDate;

        setInterval(() => {
            const currentTime = Date.now();
            const timeLeft = startTime - currentTime;
            const timeComponents = this.getTimeComponents(timeLeft);

            showTimerface(timeComponents);
        }, 1000);
    }
    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(
            Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        );
        const mins = this.pad(
            Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
        );
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs };
    }
    pad(value) {
        return String(value).padStart(2, '0');
    }
}

function showTimerface({ days, hours, mins, secs }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = mins;
    refs.seconds.textContent = secs;
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
});
