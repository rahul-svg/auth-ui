import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthForm } from "../../types/routerType";

interface AuthState {
  isLoggedIn: boolean;
  user: AuthForm | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<AuthForm>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      console.log(state)
      alert("Submit")
    },
  },
});

export const { register } = authSlice.actions;
export default authSlice.reducer;
