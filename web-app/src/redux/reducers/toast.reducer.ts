import { createSlice } from "@reduxjs/toolkit";
import { StoreE } from "../../utils/constants";

const initialState:any = {
  toast: null,
};
const toastSlice = createSlice({
  name: StoreE.toast,
  initialState,
  reducers: {
    setToast: (state, action) => {
      state.toast = action.payload;
    },
    resetToast: (state) => {
      state.toast = null;
    },
  },
});

export const { setToast, resetToast } = toastSlice.actions;
export default toastSlice.reducer;
