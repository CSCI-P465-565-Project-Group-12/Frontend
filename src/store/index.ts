import { Store, configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-store";
import loadingSlice from "./loading-store";
import filterSlice from "./filter-store";
import loginSlice from "./login-store";
import googleUserSlice from "./google-user-store";

const store:Store = configureStore({
    reducer: {
        user: userSlice.reducer,
        googleUser: googleUserSlice.reducer,
        loading: loadingSlice.reducer,
        filter: filterSlice.reducer,
        login: loginSlice.reducer,
    }
});
export default store;