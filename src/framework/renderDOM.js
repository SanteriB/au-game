import { Component } from ".";

export const renderDOM = (parentNode, targetNode) => {
    if (parentNode instanceof HTMLElement && targetNode instanceof Component) {
        parentNode.appendChild(targetNode.getNode());
    } else if (parentNode instanceof Component && targetNode instanceof Component) {
        targetNode.setParent(parentNode);
        parentNode.getNode().appendChild(targetNode.getNode());
    }

    return;
};
