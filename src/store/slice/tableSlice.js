import { createSlice, nanoid } from "@reduxjs/toolkit";

const tableSlice=createSlice(
    {
        name: "table",
        initialState: { searchTerm:' ',cars: []},
        reducers: {
            setSearchTerm(state, action)
            {
                state.searchTerm = action.payload;
            },
            addCar(state, action)
            {
                state.cars.push({
                    id: nanoid(),
                    name: action.payload.name,
                    cost: action.payload.cost,
                })

            },
            removeCar(state, action)
            {
                state.cars = state.cars.filter((item) => item.id !== action.payload.id);
            
        },
    },
    },
);

export const { removeCar, addCar, setSearchTerm} = tableSlice.actions;
export const tableReducer = tableSlice.reducer;