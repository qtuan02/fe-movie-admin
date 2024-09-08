import { IQueryGenre } from "@/interfaces/IAction";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { call, fork, put, takeEvery } from "redux-saga/effects";
import { createGenre, createGenreFail, createGenreSuccess, deleteGenre, deleteGenreFail, deleteGenreSuccess, editGenre, editGenreFail, editGenreSuccess, getGenres, getGenresFail, getGenresSuccess } from "../reducer/genreReducer";
import genreApi from "@/api/genreApi";
import { IGenre } from "@/interfaces/IGenre";


function* onGetGenres(action: PayloadAction<IQueryGenre>) {
    try {
        const res: AxiosResponse = yield call(genreApi.getGenres, action.payload);
        yield put(getGenresSuccess(res.data));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        yield put(getGenresFail(err.response?.data?.message || "An error occurred!"));
    }
}

function* onCreateGenre(action: PayloadAction<IGenre>){
    try {
        const res: AxiosResponse = yield call(genreApi.createGenre, action.payload as IGenre);
        yield put(createGenreSuccess(res.data));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        yield put(createGenreFail(err.response?.data?.message || "An error occurred!"));
    }
}

function* onDeleteGenre(action: PayloadAction<string>) {
    try {
        const res: AxiosResponse = yield call(genreApi.deleteGenre, action.payload);
        yield put(deleteGenreSuccess(res.data));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch(err: any){
        yield put(deleteGenreFail(err.response?.data?.message || "An error occurred!"));
    }
}

function* onEditGenre(action: PayloadAction<IGenre>) {
    try {
        const res: AxiosResponse = yield call(genreApi.editGenre, action.payload as IGenre);
        yield put(editGenreSuccess(res.data));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any){
        yield put(editGenreFail(err.response?.data?.message || "An error occurred!"));
    }
}

function* watchGetGenresFlow(){
    yield takeEvery(getGenres.type, onGetGenres);
}

function* watchCreateGenreFlow(){
    yield takeEvery(createGenre.type, onCreateGenre);
}

function* watchDeleteGenreFlow(){
    yield takeEvery(deleteGenre.type, onDeleteGenre);
}

function* watchEditGenreFlow(){
    yield takeEvery(editGenre.type, onEditGenre);
}

export function* GenreSage() {
    yield fork(watchGetGenresFlow)
    yield fork(watchCreateGenreFlow)
    yield fork(watchDeleteGenreFlow)
    yield fork(watchEditGenreFlow)
}