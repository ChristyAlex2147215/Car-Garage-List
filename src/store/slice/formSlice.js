import { createSlice } from "@reduxjs/toolkit";

const formSlice=createSlice(
    {
        name: "form",
        initialState: { carname:"", carcost:0 },
        reducers: {
            setName(state, action)
            {
                state.carname = action.payload;
            },
            setCost(state, action)
            {
                state.carcost = action.payload;
            },


        },
    }
);

export const { setCost, setName } = formSlice.actions;
export const formReducer = formSlice.reducer;