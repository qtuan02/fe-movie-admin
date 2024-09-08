import { IQueryGenre, IResponse } from "@/interfaces/IAction";
import { IGenre } from "@/interfaces/IGenre";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RootState } from "../store";

interface IGenreState {
    loading: boolean;
    status: "pending" | "completed" | "rejected" | "searching" | "limited";
    page?: number;
    limit?: number;
    search?: string;
    data: IGenre[];
    total_pages?: number;
    edit: boolean;
}

const initialState: IGenreState = {
    loading: false,
    status: "completed",
    data: [],
    edit: false,
}

const genreSlice = createSlice({
    name: "genre",
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
        getGenres: (state, action: PayloadAction<IQueryGenre>) => {
            state.status = "pending";
            state.page = action.payload.page;
            state.limit = action.payload.limit;
            state.search = action.payload.name;
            state.loading = true;
        },
        getGenresSuccess: (state, action: PayloadAction<IResponse<IGenre>>) => {
            state.loading = false;
            state.total_pages = Number(action.payload.message);
            state.data = action.payload.data as IGenre[];
        },
        getGenresFail: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.data = [];
            if(action.payload) toast.error(action.payload);
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        createGenre: (state, _action: PayloadAction<IGenre>) => {
            state.edit = true;
        },
        createGenreSuccess: (state, action: PayloadAction<IResponse<IGenre>>) => {
            state.edit = false;
            state.status = "completed";
            toast.success(action.payload.message);
        },
        createGenreFail: (state, action: PayloadAction<string>) => {
            state.edit = false;
            state.status = "rejected";
            if(action.payload) toast.error(action.payload);
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        deleteGenre: (state, _action: PayloadAction<string>) => {
            state.edit = true;
        },
        deleteGenreSuccess: (state, action: PayloadAction<IResponse<string>>) => {
            state.edit = false;
            state.status = "completed";
            toast.success(action.payload.message);
        },
        deleteGenreFail: (state, action: PayloadAction<string>) => {
            state.edit = false;
            state.status = "rejected";
            if(action.payload) toast.error(action.payload);
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        editGenre: (state, _action: PayloadAction<IGenre>) => {
            state.edit = true;
        },
        editGenreSuccess: (state, action: PayloadAction<IResponse<IGenre>>) => {
            state.edit = false;
            state.status = "completed";
            toast.success(action.payload.message);
        },
        editGenreFail: (state, action: PayloadAction<string>) => {
            state.edit = false;
            state.status = "rejected";
            if(action.payload) toast.error(action.payload);
        }
    }
})

export const { setLimit, setSearch,
    getGenres, getGenresSuccess, getGenresFail,
    createGenre, createGenreSuccess, createGenreFail,
    deleteGenre, deleteGenreSuccess, deleteGenreFail,
    editGenre, editGenreSuccess, editGenreFail } = genreSlice.actions;
export const getGenreState = (state: RootState) => state.genre;
export default genreSlice.reducer;