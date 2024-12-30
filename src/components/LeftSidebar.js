import { Component } from "../framework"

export class LeftSidebar extends Component {
    #style = "padding: 20px; background: green;";
    constructor() {
        super({
            text: "sos",
            style: "padding: 20px; background: red;",
            onclick: () => { this.update({
                text: "sos",
                style: this.#style,
                onclick: () => { console.log(this); }
            }); }
        }, "aside");        
    }
}