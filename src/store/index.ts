import { Store, configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-store";
import loadingSlice from "./loading-store";
import filterSlice from "./filter-store";

const store:Store = configureStore({
    reducer: {
        user: userSlice.reducer,
        loading: loadingSlice.reducer,
        filter: filterSlice.reducer
    }
});
export default store;