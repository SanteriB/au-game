import { renderDOM, Component } from "../../framework";

export class LeftSidebar extends Component {
    #title = "Left sidebar title <";
    #minified = false;

    constructor() {
        super(); 
        this.createComponent({
            className: "left-sidebar",
        }, "aside");
        
        const titleBlock = new Component();
        titleBlock.createComponent({
            text: this.#title,
            className: "left-sidebar__title",
            onclick: () => {
                this.#minified = !this.#minified;
                titleBlock.update({
                    text: this.#minified ? ">" : this.#title,
                });
                this.update({
                    className: this.#minified ? "left-sidebar left-sidebar--minified" : "left-sidebar",
                })
            },
        }, "div")
        renderDOM(this.getNode(), titleBlock);
    }
}