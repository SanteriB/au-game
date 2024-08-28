import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { StoreState } from "./types";
import { actions } from "./actions";

const initialState: StoreState = {
    init: false
};

export const appReducer = createReducer(initialState, builder => {
    builder
        .addCase(actions.init, (state: StoreState, action: PayloadAction<boolean>) => {
            state.init = action.payload;
        })
        .addDefaultCase(state => state);
});
