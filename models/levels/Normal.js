const KEYS_LENGTH = 6;

export default class Normal {
    constructor(mode) {
        this.BONUS = [4000, 2000, 1000, 500, 250, 160, 80, 40, 0];
        this.EXTRA = 20;

        this.level = mode;
        this.key = (new Array(mode)).map(u => {
            return Math.floor(Math.random() * KEYS_LENGTH);
        });
        this.cycleTrue = 0;
        this.rewardTrue = 0;
    }

    checkAnswer(guess) {
        let itTrue = 0;

        for (let i = 0; i < this.level; i++) {
            if (guess[i] === this.key[i]) {
                itTrue += 1;
            }
        }

        this.cycleTrue = itTrue;
        this.rewardTrue += this.cycleTrue;

        return itTrue === this.level;
    }

    getScore(cycle) {
        return this.rewardTrue * this.EXTRA + (cycle === -1 ? 0 : this.BONUS[cycle]);
    }
}