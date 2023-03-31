import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogOut: (state) => {
      state.accessToken = null;
    },
    authTokenReducer: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const { authLogOut, authTokenReducer } = authSlice.actions;

export default authSlice.reducer;
