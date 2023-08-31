import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthSlice {
	isAuth: boolean,
}

const initialState: IAuthSlice = {
	isAuth: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload;
		},
	}
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
