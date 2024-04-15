import { IEvent } from "./dummyData";

export interface IVenue{
    name:string;
    state:string;
    city:string;
    street:string;
    zipcode:string;
    venueStatus:string;
    details:string;
    venueType:string;
    images:string[];
    Reservations:any[];
    activities:IEvent[];
}

export interface IVenueDetails{
    description:string;
    price:string;
    venueNotes:string;
    eventOrganizer:string;
}