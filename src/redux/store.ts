import createSagaMiddleware from "@redux-saga/core";
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import rootReducer from "./reducer/rootReducer";
import { rootSaga } from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;