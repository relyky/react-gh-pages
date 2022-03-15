import { createSlice } from '@reduxjs/toolkit';
import t from 'typy'

// resource
const initialState = {
	loginUserId: '',
	loginUserName: '來賓',
	f_blocking: false,
}

const appInfoSlice = createSlice({
	name: 'appInfo',
	initialState: initialState,
	reducers: {
		assignAppInfo: (state, { payload }) => {
			if (!t(payload).isObject) throw new Error('Invalid value type!')
			return { ...state, ...payload }
		},
		resetAppInfo: (state) => {
			return { ...initialState }
		},
		blockUI: (state) => {
			state.f_blocking = true;
		},
		unblockUI: (state) => {
			state.f_blocking = false;
		},
	}
});

//# export reducer 
export default appInfoSlice.reducer;

//# export actions
export const { blockUI, unblockUI } = appInfoSlice.actions;

//# export thunk as-is action
//export const saveFormData = amount => dispatch => {
//	dispatch(setBlocking(true));
//	setTimeout(() => {
//		dispatch(incrementByAmount(amount));
//		dispatch(setBlocking(false));
//	}, 2000);
//};

