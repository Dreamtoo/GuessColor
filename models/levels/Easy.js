import Normal from "./Normal";

export default class Easy extends Normal {
    constructor(mode) {
        super(mode);

        this.BONUS = [3000, 1500, 750, 360, 180, 90, 45, 30, 0];
        this.EXTRA = 10;
    }
}