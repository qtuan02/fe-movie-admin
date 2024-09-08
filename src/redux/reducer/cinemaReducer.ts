import { IQueryCinema, IResponse } from "@/interfaces/IAction";
import { ICinema } from "@/interfaces/ICinema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RootState } from "../store";


interface ICinemaState {
    loading: boolean;
    status: "pending" | "completed" | "rejected" | "searching" | "limited";
    page?: number;
    limit?: number;
    search?: string;
    data: ICinema[];
    total_pages?: number;
    edit: boolean;
}

const initialState: ICinemaState = {
    loading: false,
    status: "completed",
    data: [],
    edit: false,
}

const cinemaSlice = createSlice({
    name: "cinema",
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
        getCinemas: (state, action: PayloadAction<IQueryCinema>) => {
            state.status = "pending";
            state.page = action.payload.page;
            state.limit = action.payload.limit;
            state.search = action.payload.name;
            state.loading = true;
        },
        getCinemasSuccess: (state, action: PayloadAction<IResponse<ICinema>>) => {
            state.loading = false;
            state.total_pages = Number(action.payload.message);
            state.data = action.payload.data as ICinema[];
        },
        getCinemasFail: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.data = [];
            if(action.payload) toast.error(action.payload);
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        createCinema: (state, _action: PayloadAction<ICinema>) => {
            state.edit = true;
        },
        createCinemaSuccess: (state, action: PayloadAction<IResponse<ICinema>>) => {
            state.edit = false;
            state.status = "completed";
            toast.success(action.payload.message);
        },
        createCinemaFail: (state, action: PayloadAction<string>) => {
            state.edit = false;
            state.status = "rejected";
            if(action.payload) toast.error(action.payload);
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        deleteCinema: (state, _action: PayloadAction<string>) => {
            state.edit = true;
        },
        deleteCinemaSuccess: (state, action: PayloadAction<IResponse<string>>) => {
            state.edit = false;
            state.status = "completed";
            toast.success(action.payload.message);
        },
        deleteCinemaFail: (state, action: PayloadAction<string>) => {
            state.edit = false;
            state.status = "rejected";
            if(action.payload) toast.error(action.payload);
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        editCinema: (state, _action: PayloadAction<ICinema>) => {
            state.edit = true;
        },
        editCinemaSuccess: (state, action: PayloadAction<IResponse<ICinema>>) => {
            state.edit = false;
            state.status = "completed";
            toast.success(action.payload.message);
        },
        editCinemaFail: (state, action: PayloadAction<string>) => {
            state.edit = false;
            state.status = "rejected";
            if(action.payload) toast.error(action.payload);
        }
    }
})

export const { setLimit, setSearch, 
    getCinemas, getCinemasSuccess, getCinemasFail,
    createCinema, createCinemaSuccess, createCinemaFail,
    deleteCinema, deleteCinemaSuccess, deleteCinemaFail,
    editCinema, editCinemaSuccess, editCinemaFail } = cinemaSlice.actions;
export const getCinemaState = (state: RootState) => state.cinema
export default cinemaSlice.reducer;