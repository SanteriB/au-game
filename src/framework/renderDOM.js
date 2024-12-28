export const renderDOM = (parentNode, targetNode) => {
    if (parentNode instanceof HTMLElement && targetNode instanceof HTMLElement) {
        parentNode.appendChild(targetNode);
    }

    return;
};
