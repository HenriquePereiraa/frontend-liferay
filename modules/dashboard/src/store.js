import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import dataReducer from './redux/dataSlice';


export default configureStore({
	middleware: [...getDefaultMiddleware({immutableCheck: false, serializableCheck: false})],
	reducer: {
		data: dataReducer,
	}   
});