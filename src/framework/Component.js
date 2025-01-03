import { createHTMLNode, updateHTMLNode } from "."

export class Component {
    #parent = null;
    #node = null;
    #props = {};
    #tagName;

    #state = {};

    createComponent(props, tagName = "div") {
        if (typeof props === "object") {
            this.#props = props;
        }
        this.#tagName = tagName;
        this.#node = createHTMLNode(this.#props, this.#tagName);
    }

    // state management
    connect(store) {
        console.log(store);
    }
    
    createState(state) {
        this.#state = state;
    }

    getState() {
        return this.#state;
    }

    select(selector) {
        return selector(this.getState());
    }

    dispatch() {
        //
    }

    // refs
    setParent(parent) {
        this.#parent = parent;
        console.log(this.#props);
    }

    getParent() {
        return this.#parent;
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

    getProperty(name) {
        return this.#props[name];
    }

    getNode() {
        if (this.#node === null) {
            this.#node = createHTMLNode(this.#props, this.#tagName);
        }

        return this.#node;
    }
}