import { Store, configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-store";
import loadingSlice from "./loading-store";

const store:Store = configureStore({
    reducer: {
        user: userSlice.reducer,
        loading: loadingSlice.reducer
    }
});
export default store;