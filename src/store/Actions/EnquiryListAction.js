import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getEnquiryList = createAsyncThunk(
  "course/getEnquiryList",
  async (e, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`http://localhost:3030/query`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
