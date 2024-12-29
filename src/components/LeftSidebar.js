import { createHTMLNode } from "../framework"

export class LeftSidebar {
    #text = "LeftSidebar";
    constructor() {
        // 
    }

    getComponent() {
        return createHTMLNode({ 
            text: this.#text,
            onclick: () => { console.log(123); },
        });
    }
}