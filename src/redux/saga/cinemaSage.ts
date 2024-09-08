import { IQueryCinema } from "@/interfaces/IAction";
import { PayloadAction } from "@reduxjs/toolkit";
import { createCinema, createCinemaFail, createCinemaSuccess, deleteCinema, deleteCinemaFail, deleteCinemaSuccess, editCinema, editCinemaFail, editCinemaSuccess, getCinemas, getCinemasFail, getCinemasSuccess } from "../reducer/cinemaReducer";
import { call, fork, put, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import cinemaApi from "@/api/cinemaApi";
import { ICinema } from "@/interfaces/ICinema";

function* onGetCinemas(action: PayloadAction<IQueryCinema>){
    try {
        const res: AxiosResponse = yield call(cinemaApi.getCinemas, action.payload)
        yield put(getCinemasSuccess(res.data));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        yield put(getCinemasFail(err.response?.data?.message || "An error occurred!"));
    }
}

function* onCreateCinema(action: PayloadAction<ICinema>){
    try {
        const res: AxiosResponse = yield call(cinemaApi.createCinema, action.payload);
        yield put(createCinemaSuccess(res.data));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        yield put(createCinemaFail(err.response?.data?.message || "An error occurred!"));
    }
}

function* onDeleteCinema(action: PayloadAction<string>) {
    try {
        const res: AxiosResponse = yield call(cinemaApi.deleteCinema, action.payload);
        yield put(deleteCinemaSuccess(res.data));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        yield put(deleteCinemaFail(err.response?.data?.message || "An error occurred!"));
    }
}

function* onEditCinema(action: PayloadAction<ICinema>) {
    try {
        const res: AxiosResponse = yield call(cinemaApi.editCinema, action.payload as ICinema);
        yield put(editCinemaSuccess(res.data));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any){
        yield put(editCinemaFail(err.response?.data?.message || "An error occurred!"));
    }
 
}

function* watchGetCinemasFlow() {
    yield takeEvery(getCinemas.type, onGetCinemas);
}

function* watchCreateCinemaFlow() {
    yield takeEvery(createCinema.type, onCreateCinema);
}

function* watchDeleteCinemaFlow() {
    yield takeEvery(deleteCinema.type, onDeleteCinema);
}

function* watchEditCinemaFlow() {
    yield takeEvery(editCinema.type, onEditCinema);
}

export function* CinemaSaga() {
    yield fork(watchGetCinemasFlow)
    yield fork(watchCreateCinemaFlow)
    yield fork(watchDeleteCinemaFlow)
    yield fork(watchEditCinemaFlow)
}