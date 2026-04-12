
import textReducer from './textReducer';
import { configureStore } from "@reduxjs/toolkit";
const store=configureStore({
    reducer:textReducer,
});
export default store;