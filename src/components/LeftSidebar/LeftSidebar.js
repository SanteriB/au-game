import { renderDOM, Component } from "../../framework";

export class LeftSidebar extends Component {
    #minified = false;

    constructor() {
        super(); 
        this.createComponent({
            className: this.#minified ? "left-sidebar left-sidebar--minified" : "left-sidebar",
        }, "aside");
        
        const titleBlock = new Component();
        console.log(this.getParent())
        titleBlock.createComponent({
            text: this.#minified ? ">" : this.getParent()?.select(state => state.appName) ?? "",
            className: "left-sidebar__title",
            onclick: () => {
                this.#minified = !this.#minified;
            },
        }, "div");
        renderDOM(this.getNode(), titleBlock);
    }
}