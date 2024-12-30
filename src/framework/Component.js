import { createHTMLNode, updateHTMLNode } from "."

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

    update(props) {
        const newProps = Object.keys(props);
        const oldProps = Object.keys(this.#props);
        const propsUpdate = {};
        for (const propName of newProps) {
            if (!oldProps.includes(propName)) {
                this.#props[propName] = props[propName];
                propsUpdate[propName] = props[propName];
                continue;
            }
            if (
                typeof props[propName] === "function" && 
                typeof this.#props[propName] === "function"
            ) {
                if (props[propName].toString() !== this.#props[propName].toString()) {
                    this.#props[propName] = props[propName];
                    propsUpdate[propName] = props[propName];
                }
                continue;
            }
            if (props[propName] !== this.#props[propName]) {
                this.#props[propName] = props[propName];
                propsUpdate[propName] = props[propName];
            }
        }
        updateHTMLNode(this.#node, propsUpdate);
    }

    getHTMLElement() {
        if (this.#node === null) {
            this.#node = createHTMLNode(this.#props, this.#tagName);
        }

        return this.#node;
    }
}