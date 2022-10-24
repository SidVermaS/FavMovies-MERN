import { combineReducers } from "@reduxjs/toolkit";
import toast from "./toast.reducer";
import user from "./user.reducer";

const reducer = combineReducers({ toast, user });

export default reducer;
