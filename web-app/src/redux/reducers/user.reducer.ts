import { createSlice } from "@reduxjs/toolkit";
import { StoreE } from "../../utils/constants";

const initialState:any = {
  user: null,
};
const userSlice = createSlice({
  name: StoreE.user,
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
