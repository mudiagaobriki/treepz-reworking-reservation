import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: [],
  vehiclesListing: [],
  filterResult: [],
  topFilters: [],
  selectedRide: {},
  useLocation: null,
};

const marketplaceSlice = createSlice({
  name: 'marketplace',
  initialState,
  reducers: {
    setAddFilters(state, action) {
      state.filters = {...state.filters, ...action.payload};
    },
    setSelectedRide(state, action) {
      state.selectedRide = action.payload;
    },
    setUserLocation(state, action) {
      state.userLocation = action.payload;
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
    setFilterResult(state, action){
      state.filterResult = action.payload;
    },
  },
});

export const { setFilterResult, setSelectedRide, setAddFilters,
  setApplyTopFilters, setRemoveTopFilter, setResetFilters,
  setRemoveFilter, setVehiclesListing } = marketplaceSlice.actions;


const marketplaceReducer = marketplaceSlice.reducer;

export default marketplaceReducer;
