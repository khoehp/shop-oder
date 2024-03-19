import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUserAuth } from "../../api/user";

export const userLogin = createAsyncThunk("user.login", async (account, thunkAPI) => {
  try {
    const user = await loginUserAuth(account);

    localStorage.setItem("token", JSON.stringify(user?.token));
    localStorage.setItem("isAuthenticated", true);
    return user;
  } catch (error) {
    thunkAPI.rejectWithValue(error, "Invalid login credentials");
  }
});

const UserSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default UserSlice.reducer;
