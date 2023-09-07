import { createSlice } from "@reduxjs/toolkit";
import { getEnquiryList } from "../Actions/EnquiryListAction";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const enquirySlice = createSlice({
  name: "enquiry",
  initialState,
  extraReducers: {
    [getEnquiryList.pending]: (state) => {
      state.isLoading = true;
    },
    [getEnquiryList.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [getEnquiryList.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default enquirySlice.reducer;
