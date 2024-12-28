export const createHTMLNode = ({
    children,
    text,
    id,
    className, 
    onClick,
    ...props
}) => {
    const el = document.createElement("div");
    console.log(props);
    if (text) {
        el.innerText = text;
    }
    if (children && children instanceof HTMLElement) {
        el.appendChild(children);
    }

    return el;
};