import { log } from "./decorators";

export default class Decorator {
    name: string
    constructor(name: string) {
        this.name = name;
    }

    @log
    public turn(something: string): string {
        return this.name + ", cel : " + something;
    }
}
