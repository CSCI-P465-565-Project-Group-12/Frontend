import { createSlice } from "@reduxjs/toolkit";

interface IBookedEvent {
    eventName: string;
    eventLocation: string;
    eventTime: string;
    eventDate: string;
}

const intialState: IBookedEvent = {
    eventName: "",
    eventLocation: "",
    eventTime: "",
    eventDate: "",
}
const bookedEventSlice = createSlice({
    name: "bookedEvent",
    initialState: intialState,
    reducers: {
        setBookedEvent: (state, action) => {
            state.eventName = action.payload.eventName;
            state.eventLocation = action.payload.eventLocation;
            state.eventTime = action.payload.eventTime;
            state.eventDate = action.payload.eventDate;
        },
        resetBookedEvent: (state) => {
            state.eventName = "";
            state.eventLocation = "";
            state.eventTime = "";
            state.eventDate = "";
        }
    }
});
export const { setBookedEvent, resetBookedEvent } = bookedEventSlice.actions;
export default bookedEventSlice;