import { all } from 'redux-saga/effects';
import { CountrySaga } from "./countrySaga";
import { GenreSage } from './genreSaga';
import { CinemaSaga } from './cinemaSage';

export function* rootSaga() {
    yield all([
        CountrySaga(),
        GenreSage(),
        CinemaSaga(),
    ]);
}