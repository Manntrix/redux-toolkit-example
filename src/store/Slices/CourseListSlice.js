import { createSlice } from "@reduxjs/toolkit";
import { getCourseList } from "../Actions/CourseListAction";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  extraReducers: {
    [getCourseList.pending]: (state) => {
      state.isLoading = true;
    },
    [getCourseList.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [getCourseList.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default courseSlice.reducer;
