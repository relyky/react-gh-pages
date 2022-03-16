import { createSlice } from '@reduxjs/toolkit'
import { blockUI, unblockUI } from 'store/appInfoSlice'
import t from 'typy'

// resource
const initialState = {
	fieldA: '',
	fieldB: '',
	fieldC: '',
}

const appSlice = createSlice({
	name: 'ap0101',
	initialState: initialState,
	reducers: {
		update: (state, { payload }) => {
			if (!t(payload).isObject) throw new Error('Invalid value type!')
			return { ...state, ...payload }
		},
	}
});

//# export reducer 
export default appSlice.reducer;

//# export actions
export const { update } = appSlice.actions;

////# export thunk as-is action
//export const saveFormData = formData => dispatch => {
//	dispatch(blockUI())

//	// verify...
//	dispatch(error('ERROR', '這是錯誤訊息！'));
//	dispatch(clearError());

//	apiClient.SaveFormData(formData).then(data => {
//		dispatch(update(data))
//	}).finally(() => {
//		dispatch(unblockUI())
//	})
//};
