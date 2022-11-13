import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface SearchState {
  from: string;
  to: string;
  there: string;
  back: string | null;
}

const initialState: SearchState = {
  from: '',
  to: '',
  there: '',
  back: null
};

export const searchSlice = createSlice({
  name: '@@search',
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<SearchState>) => {
      state.from = action.payload.from;
      state.to = action.payload.to;
      state.there = action.payload.there;
      state.back = action.payload.back;
    },
  }
});

export const { addData } = searchSlice.actions;

export const selectData = (state: RootState) => state.search;
export const selectDateBack = (state: RootState) => state.search.back;

export default searchSlice.reducer;
