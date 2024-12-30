import { updateHTMLNode } from "./updateHTMLNode";

export const createHTMLNode = (props, tagName = "div") => {
    const el = document.createElement(tagName);
    updateHTMLNode(el, props);

    return el;
};