import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, removeCar, changeSearchTerm } from "./slices/carsSlices";
import {
    formReducer,
    changeName,
    changeCost
} from './slices/formSlices';


const store = configureStore({
    reducer: {
        cars: {
            cars: carsReducer,
            form: formReducer
        }
    }
})

export {
    store, changeName,
    changeCost,
    addCar,
    removeCar,
    changeSearchTerm
};