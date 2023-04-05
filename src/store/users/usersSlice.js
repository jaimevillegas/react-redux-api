import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const URL = 'https://randomuser.me/api/?results=5';

export const getUsers = createAsyncThunk('user/getUsers', async () => {
  try {
    const response = await axios.get(URL);
    const { data } = response;
    return data.results;
  } catch (error) {
    return error;
  }
});

const usersSlice = createSlice({
  name: 'test',
  initialState: {
    users: [],
    isLoading: false,
    error: undefined,
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;
