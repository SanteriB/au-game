const elementAttributes = Object.freeze([
    "id",
    "className",
    "style",
]);

const elementEvents = Object.freeze([
    "onclick",
    "onchange",
    "onmouseover",
    "onmouseout",
    "onkeydown",
    "onkeyup",
]);

const eventsMap = Object.freeze({
    "onclick": "click",
    "onchange": "change",
    "onmouseover": "mouseover",
    "onmouseout": "mouseout",
    "onkeydown": "keydown",
    "onkeyup": "keyup",
})

export const updateHTMLNode = (el, {
    children,
    text,
    ...props
}) => {
    if (text) {
        el.innerText = text;
    }
    if (children && children instanceof HTMLElement) {
        el.appendChild(children);
    }

    const propNames = Object.keys(props);
    for (const prop of propNames) {
        if (elementAttributes.includes(prop)) {
            el.setAttribute(prop, props[prop]);
        }
        if (elementEvents.includes(prop) && typeof props[prop] === "function") {
            el.addEventListener(eventsMap[prop], props[prop]);
        }
    }
};