import { configureStore } from "@reduxjs/toolkit";
import { courseSlice } from "./Slices/CourseListSlice";
import { enquirySlice } from "./Slices/EnquiryListSlice";

// Creating our store and combining all slices
export const store = configureStore({
  reducer: {
    [courseSlice.name]: courseSlice.reducer,
    [enquirySlice.name]: enquirySlice.reducer,
  },
  devTools: true,
});
