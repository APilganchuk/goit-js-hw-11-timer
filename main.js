class CountdownTimer {
    constructor({ targetDate, selector }) {
        this.targetDate = targetDate;
        this.selector = selector;

        this.refs = {
            timerContainer: document.querySelector(`${this.selector}`),
            days: document.querySelector(
                `${this.selector} [data-value="days"]`,
            ),
            hours: document.querySelector(
                `${this.selector} [data-value="hours"]`,
            ),
            minutes: document.querySelector(
                `${this.selector} [data-value="mins"]`,
            ),
            seconds: document.querySelector(
                `${this.selector} [data-value="secs"]`,
            ),
        };

        this.start();
    }

    start() {
        const startTime = this.targetDate;

        setInterval(() => {
            const currentTime = Date.now();
            const timeLeft = startTime - currentTime;
            const timeComponents = this.getTimeComponents(timeLeft);

            this.showTimerface(timeComponents);
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

    showTimerface({ days, hours, mins, secs }) {
        this.refs.days.textContent = days;
        this.refs.hours.textContent = hours;
        this.refs.minutes.textContent = mins;
        this.refs.seconds.textContent = secs;
    }
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
});
