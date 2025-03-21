import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const apiDataSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    setApiData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setApiData } = apiDataSlice.actions;
export default apiDataSlice.reducer;