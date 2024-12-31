import { Component } from ".";

export const renderDOM = (parentNode, targetNode) => {
    if (parentNode instanceof HTMLElement && targetNode instanceof Component) {
        parentNode.appendChild(targetNode.getNode());
    }

    return;
};
