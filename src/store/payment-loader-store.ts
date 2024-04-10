import { createSlice } from "@reduxjs/toolkit";

const paymentLoaderSlice = createSlice({
    name: "paymentLoader",
    initialState: {
        loading: false,
    },
    reducers: {
        setLoading: (state) => {
        state.loading = true;
        },
        unSetLoading: (state) => {
        state.loading = false;
        }

    },
    });

export const { setLoading,unSetLoading } = paymentLoaderSlice.actions;
export default paymentLoaderSlice;