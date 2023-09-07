import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Enquire = createAsyncThunk(
  "course/enquire",
  async (e, { rejectWithValue }) => {
    try {
      var config = {
        method: "post",
        url: "http://localhost:3030/query",
        headers: {
          "Content-Type": "application/json",
        },
        data: e,
      };
      const { data } = await axios(config);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
