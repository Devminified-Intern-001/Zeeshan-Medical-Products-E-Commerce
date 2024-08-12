import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface searchState {

  searchText: string | null;

}

const initialState: searchState = {
  searchText: null,
};

const searchSlice = createSlice({
  name: 'searchBox',
  initialState,
  reducers: {
    setSearchText: (
      state,
      action: PayloadAction<searchState>
    ) => {
      // console.log("action.payload",action.payload);
      
      const { searchText } = action.payload;
      console.log("searchText",searchText);
      
      state.searchText = searchText;
    },
    clearSearchData:(state)=>{
      state.searchText = null;
    }
  
  },
});

export const { setSearchText,clearSearchData } = searchSlice.actions;
export default searchSlice.reducer;
import { RootState } from '../store/store';
export const selectCurrentSearch = (state: RootState) => state.searchBox.searchText;