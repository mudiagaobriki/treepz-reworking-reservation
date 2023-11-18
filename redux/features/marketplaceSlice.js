import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: [],
  vehiclesListing: [],
  queryResult: [],
  topFilters: [],
};

const marketplaceSlice = createSlice({
  name: 'marketplace',
  initialState,
  reducers: {
    setApplyFilters(state, action) {
      state.filters = {...state.filters, ...action.payload};
    },
    setRemoveFilter(state, action) {
      const indexToRemove = state.filters.index(action.payload)
      if (indexToRemove !== -1){
        state.filters = state.filters.splice(indexToRemove, 1);
      }
    },
    setApplyTopFilters(state, action) {
      state.topFilters = {...state.topFilters, ...action.payload};
    },
    setRemoveTopFilter(state, action) {
      const indexToRemove = state.topFilters.index(action.payload)
      if (indexToRemove !== -1){
        state.topFilters = state.topFilters.splice(indexToRemove, 1);
      }
    },
    setResetFilters(state, action){
      state.filters = [];
    },
    setVehiclesListing(state, action){
      state.vehiclesListing = action.payload;
    },
    setQueryResult(state, action){
      state.queryResult = action.payload;
    },
  },
});

export const { setQueryResult, setApplyFilters,
  setApplyTopFilters, setRemoveTopFilter, setResetFilters,
  setRemoveFilter, setVehiclesListing } = marketplaceSlice.actions;


const marketplaceReducer = marketplaceSlice.reducer;

export default marketplaceReducer;
