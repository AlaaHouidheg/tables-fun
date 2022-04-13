import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tables: [
    {
      id: Math.random(),
      type: "A2",
      booked: false,
    },
    {
      id: Math.random(),

      type: "A4",
      booked: true,
    },
    {
      id: Math.random(),

      type: "A2",
      booked: false,
    },
    {
      id: Math.random(),

      type: "A4",
      booked: true,
    },
    {
      id: Math.random(),

      type: "A2",
      booked: true,
    },
    {
      id: Math.random(),

      type: "A6",
      booked: false,
    },
    {
      id: Math.random(),

      type: "A6",
      booked: false,
    },
  ],
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addTable: (state, action) => {
      state.tables.push(action.payload);
    },
    clearTables: (state) => {
      state.tables.map((el) => (el.booked = false));
    },
    changeBooked: (state, action) => {
      let i = state.tables.findIndex((el) => el.id == action.payload);

      state.tables[i].booked = !state.tables[i].booked;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTable, clearTables, changeBooked } = tableSlice.actions;

export default tableSlice.reducer;
