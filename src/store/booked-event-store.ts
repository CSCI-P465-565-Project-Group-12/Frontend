import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IBookedEvent {
    eventId: string;
    coverImg?: string;
    eventName: string;
    eventLocation: string;
    eventTime: string;
    eventDate: string;
    venueName?: string;
}
export interface IBookedEvents {
    bookedEvents: IBookedEvent[];
    recentlyBookedEvent: IBookedEvent;
}
const intialState: IBookedEvents = {
    bookedEvents: [],
    recentlyBookedEvent: {
        eventId: "",
        eventName: "",
        eventLocation: "",
        eventTime: "",
        eventDate: "",
    }
}

const bookedEventSlice = createSlice({
    name: "bookedEvents",
    initialState: intialState,
    reducers: {
        setBookedEvent: (state:IBookedEvents, action:PayloadAction<IBookedEvent[]>) => {
            state.bookedEvents = action.payload;
        },
        resetBookedEvent: (state) => {
            state.bookedEvents = [];
        },
        setRecentlyBookedEvent: (state, action:PayloadAction<IBookedEvent>) => {
            state.recentlyBookedEvent = action.payload;
        },
        resetRecentlyBookedEvent: (state) => {
            state.recentlyBookedEvent = {
                eventId: "",
                eventName: "",
                eventLocation: "",
                eventTime: "",
                eventDate: "",
            }
        }
    }
});
export const { setBookedEvent, resetBookedEvent,setRecentlyBookedEvent,resetRecentlyBookedEvent } = bookedEventSlice.actions;
export default bookedEventSlice;