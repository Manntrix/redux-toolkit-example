import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCourseList = createAsyncThunk(
  "course/getCourseList",
  async (e, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`http://localhost:3030/posts`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
