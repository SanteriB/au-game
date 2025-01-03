export const useStore = (createStore) => {
    if (typeof createStore === "function") {
        createStore();
    }
};
