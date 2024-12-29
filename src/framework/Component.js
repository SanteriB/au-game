import { createHTMLNode } from "."

export class Component {
    #node = null;
    #props = {};
    #tagName;

    constructor(props, tagName = "div") {
        if (typeof props === "object") {
            this.#props = props;
        }
        this.#tagName = tagName;
    }

    getHTMLElement() {
        if (this.#node === null) {
            this.#node = createHTMLNode(this.#props, this.#tagName);
        }

        return this.#node;
    }
}