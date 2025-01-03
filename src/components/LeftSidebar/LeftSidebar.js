import { renderDOM, useSelector, Component } from "../../framework";

export class LeftSidebar extends Component {
    #minified = false;

    constructor() {
        super(); 
        this.createComponent({
            className: this.#minified ? "left-sidebar left-sidebar--minified" : "left-sidebar",
        }, "aside");
        
        const titleBlock = new Component();
        titleBlock.createComponent({
            text: useSelector(this.getParent()?.getState(), state => state.appName),
            className: "left-sidebar__title",
            onclick: () => {
                this.#minified = !this.#minified;
                console.log(this.getParent()?.select(state => state.appName));
            },
        }, "div");
        renderDOM(this, titleBlock);
    }
}