import { ICountry } from "@/interfaces/ICountry";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { toast } from "react-toastify";
import { IQueryCountry, IResponse } from "@/interfaces/IAction";

interface ICountryState {
    loading: boolean;
    status: "pending" | "completed" | "rejected" | "searching" | "limited";
    page?: number;
    limit?: number;
    search?: string;
    data: ICountry[];
    total_pages?: number;
    edit: boolean;
}

const initialState: ICountryState = {
    loading: false,
    status: "completed",
    data: [],
    edit: false,
}

const countrySlice = createSlice({
    name: "country",
    initialState: initialState,
    reducers: {
        setLimit: (state, action: PayloadAction<number>) => {
            state.page = 1;
            state.limit = action.payload;
            state.status = "limited"
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.page = 1;
            state.search = action.payload;
            state.status = "searching"
        },
        getCountries: (state, action: PayloadAction<IQueryCountry>) => {
            state.status = "pending";
            state.page = action.payload.page;
            state.limit = action.payload.limit;
            state.search = action.payload.name;
            state.loading = true;
        },
        getCountriesSuccess: (state, action: PayloadAction<IResponse<ICountry>>) => {
            state.loading = false;
            state.total_pages = Number(action.payload.message);
            state.data = action.payload.data as ICountry[];
        },
        getCountriesFail: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.data = [];
            if(action.payload) toast.error(action.payload);
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        createCountry: (state, _action: PayloadAction<ICountry>) => {
            state.edit = true;
        },
        createCountrySuccess: (state, action: PayloadAction<IResponse<ICountry>>) => {
            state.edit = false;
            state.status = "completed";
            toast.success(action.payload.message);
        },
        createCountryFail: (state, action: PayloadAction<string>) => {
            state.edit = false;
            state.status = "rejected";
            if(action.payload) toast.error(action.payload);
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        deleteCountry: (state, _action: PayloadAction<string>) => {
            state.edit = true;
        },
        deleteCountrySuccess: (state, action: PayloadAction<IResponse<string>>) => {
            state.edit = false;
            state.status = "completed";
            toast.success(action.payload.message);
        },
        deleteCountryFail: (state, action: PayloadAction<string>) => {
            state.edit = false;
            state.status = "rejected";
            if(action.payload) toast.error(action.payload);
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        editCountry: (state, _action: PayloadAction<ICountry>) => {
            state.edit = true;
        },
        editCountrySuccess: (state, action: PayloadAction<IResponse<ICountry>>) => {
            state.edit = false;
            state.status = "completed";
            toast.success(action.payload.message);
        },
        editCoutryFail: (state, action: PayloadAction<string>) => {
            state.edit = false;
            state.status = "rejected";
            if(action.payload) toast.error(action.payload);
        }
    },
})

export const { setLimit, setSearch, 
    getCountries, getCountriesSuccess, getCountriesFail,
    createCountry, createCountrySuccess, createCountryFail,
    deleteCountry, deleteCountrySuccess, deleteCountryFail,
    editCountry, editCountrySuccess, editCoutryFail } = countrySlice.actions;
export const getCountryState = (state: RootState) => state.country;
export default countrySlice.reducer;