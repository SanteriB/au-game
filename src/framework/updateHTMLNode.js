const elementAttributes = Object.freeze([
    "id",
    "className",
    "style",
]);
const attributesMap = Object.freeze({
    "id": "id",
    "className": "class",
    "style": "style",
});

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
    if (typeof text === "string") {
        el.innerText = text;
    } else if (text === null) {
        el.innerText = "";
    }
    
    if (children && children instanceof HTMLElement) {
        el.appendChild(children);
    }

    const propNames = Object.keys(props);
    for (const prop of propNames) {
        if (elementAttributes.includes(prop)) {
            el.setAttribute(attributesMap[prop], props[prop]);
        }
        if (elementEvents.includes(prop) && typeof props[prop] === "function") {
            el.addEventListener(eventsMap[prop], props[prop]);
        }
    }
};