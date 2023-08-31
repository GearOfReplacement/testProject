import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './sliceReducers';


const AppStore = configureStore({
	reducer
});

type RootState = ReturnType<typeof AppStore.getState>;
type AppDispatch = typeof AppStore.dispatch;

export { AppStore }
export type { RootState, AppDispatch }
