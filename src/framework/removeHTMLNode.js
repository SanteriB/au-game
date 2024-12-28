export const removeHTMLNode = (node) => {
    if (node && node instanceof HTMLElement) {
        node.remove();
    }
}