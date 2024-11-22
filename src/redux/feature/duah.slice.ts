import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

interface DuahInitialState {
  id: number;
}

// Define the initial state using that type
const initialState: DuahInitialState = {
  id: 0,
};

export const duahSlice = createSlice({
  name: "duahId",
  initialState,
  reducers: {
    updateId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { updateId } = duahSlice.actions;



export default duahSlice.reducer;
