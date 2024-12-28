export class Person {
    #name = "PersonName";
    constructor({ name }) {
        if (typeof name === "string") {
            this.#name = name;
        }
    }

    getName() {
        return this.#name;
    }
}
