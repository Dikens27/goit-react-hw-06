import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload.trim();
    },
  },
});

export default slice.reducer;
export const { changeFilter } = slice.actions;
export const selectFilters = state => state.filters.name;
