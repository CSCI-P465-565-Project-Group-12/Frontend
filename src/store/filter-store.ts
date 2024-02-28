import { createSlice } from "@reduxjs/toolkit";


interface FilterState {
    search: string;
    categoryFilters: string[];
    locationFilters: string[];
    dateFilters: string[];
}
const initialState: FilterState = {
    search: "",
    categoryFilters: [],
    locationFilters: [],
    dateFilters: [],
};
const filterSlice=createSlice({
    name: "filter",
    initialState: initialState,
    reducers:{
        setSearch(state,action){
            state.search=action.payload;
        },
        setCategoryFilters(state,action){
            state.categoryFilters.push(action.payload);
        },
        unSetCategoryFilters(state,action){
            state.categoryFilters=state.categoryFilters.filter((filter)=>filter!==action.payload);
        },
        setLocationFilters(state,action){
            state.locationFilters.push(action.payload);
        },
        unSetLocationFilters(state,action){
            state.locationFilters=state.locationFilters.filter((filter)=>filter!==action.payload);
        },
        setDateFilters(state,action){
            state.dateFilters.push(action.payload);
        },
        unSetDateFilters(state,action){
            state.dateFilters=state.dateFilters.filter((filter)=>filter!==action.payload);
        },
        resetFilters(state){
            state.search="";
            state.categoryFilters=[];
            state.locationFilters=[];
            state.dateFilters=[];
        }
    }
});
export default filterSlice;
export const filterActions = filterSlice.actions;