import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

//Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk("users/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((user) => user.id));
});

export const userSlice = createSlice({
  name: "user",
  initialState,
});
