import { Store, configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-store";
import loadingSlice from "./loading-store";
import filterSlice from "./filter-store";
import loginSlice from "./login-store";
import googleUserSlice from "./google-user-store";
import normalUserSlice from "./normal-user-store";
import paymentLoaderSlice from "./payment-loader-store";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import bookedEventSlice from "./booked-event-store";



const persistConfig = {
    key: 'root',
    storage: storage,
}

const store:Store = configureStore({
    reducer: {
        user: userSlice.reducer,
        googleUser: persistReducer(persistConfig,googleUserSlice.reducer),
        loading: loadingSlice.reducer,
        paymentLoader: paymentLoaderSlice.reducer,
        filter: filterSlice.reducer,
        login: persistReducer(persistConfig,loginSlice.reducer),
        normalUser: persistReducer(persistConfig,normalUserSlice.reducer),
        bookedEvent: persistReducer(persistConfig,bookedEventSlice.reducer),
    }
});
export default store;
export const persistor=persistStore(store);