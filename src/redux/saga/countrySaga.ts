import { AxiosResponse } from 'axios';
import countryApi from "@/api/countryApi";
import { PayloadAction } from '@reduxjs/toolkit';
import { ICountry } from '@/interfaces/ICountry';
import { IQueryCountry } from '@/interfaces/IAction';
import { put, call, fork, takeEvery } from 'redux-saga/effects';
import { createCountry, createCountryFail, createCountrySuccess,
    deleteCountry, deleteCountryFail, deleteCountrySuccess,
    editCountry, editCountrySuccess, editCoutryFail,
    getCountries, getCountriesFail, getCountriesSuccess } from "../reducer/countryReducer";

function* onGetCountries(action: PayloadAction<IQueryCountry>) {
    try {
        const res: AxiosResponse = yield call(countryApi.getCountries, action.payload);
        yield put(getCountriesSuccess(res.data));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        yield put(getCountriesFail(err.response?.data?.message || "An error occurred!"));
    }
}

function* onCreateCountry(action: PayloadAction<ICountry>) {
    try {
        const res: AxiosResponse = yield call(countryApi.createCountry, action.payload as ICountry);
        yield put(createCountrySuccess(res.data));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        yield put(createCountryFail(err.response?.data?.message || "An error occurred!"));
    }
}

function* onDeleteCountry(action: PayloadAction<string>) {
    try{
        const res: AxiosResponse = yield call(countryApi.deleteCountry, action.payload);
        yield put(deleteCountrySuccess(res.data));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch (err: any) {
        yield put(deleteCountryFail(err.response?.data?.message || "An error occurred!"));
    }
}

function* onEditCountry(action: PayloadAction<ICountry>) {
    try{
        const res: AxiosResponse = yield call(countryApi.editCountry, action.payload);
        yield put(editCountrySuccess(res.data));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch (err: any){
        yield put(editCoutryFail(err.response?.data?.message || "An error occurred!"));
    }
}

function* watchGetCountriesFlow() {
	yield takeEvery(getCountries.type, onGetCountries);
}

function* watchCreateCountryFlow() {
    yield takeEvery(createCountry.type, onCreateCountry);
}

function* watchDeleteCountryFlow() {
    yield takeEvery(deleteCountry.type, onDeleteCountry);
}

function* watchEditCountryFlow() {
    yield takeEvery(editCountry.type, onEditCountry);
}

export function* CountrySaga() {
    yield fork(watchGetCountriesFlow) 
    yield fork(watchCreateCountryFlow)
    yield fork(watchDeleteCountryFlow)
    yield fork(watchEditCountryFlow)
}