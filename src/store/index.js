import {setCost,setName,formReducer} from "./slice/formSlice"
import {setSearchTerm,addCar,removeCar, tableReducer} from "./slice/tableSlice"
import {configureStore} from "@reduxjs/toolkit"


const store=configureStore(
    {
        reducer:
        {
            form:formReducer,
            table:tableReducer
        }
    }
)

export {setCost,setName,setSearchTerm,addCar,removeCar,store}