import Normal from "./Normal";

export default class Hard extends Normal {
    constructor(mode) {
        super(mode);

        this.BONUS = [5000, 2500, 1600, 800, 400, 200, 100, 50, 0];
        this.EXTRA = 30;
    }
}