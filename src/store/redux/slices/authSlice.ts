import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  authenticated: boolean;
}

const initialState: AuthState = {
  authenticated: false,
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
