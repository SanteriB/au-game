import { createAction } from "@reduxjs/toolkit";

const init = createAction<boolean>("game/init");

export const actions = {
    init,
};