
export default {
  /**
   * Get all the shows from API and the filter shows by rating
   * 
   * @param state 
   * @param data - shows data
   */
  UPDATE_SHOWS: function(state, data) {
    state.shows = data;
  },
  /**
   * Sets the active show to be displayed in details screen, by showId
   * 
   * @param  state 
   * @param  showObj - Show details data 
   */
  UPDATE_ACTIVE_SHOW: function(state, showObj) {    
    state.activeShow = showObj;
  },
  /**
   * Gets show details from API by search
   * 
   * @param state 
   * @param showName 
   */
  UPDATE_SEARCH_RESULTS: function(state, searchResultsObj) {
    state.searchResults = searchResultsObj;
  },
  /**
   * determine to show or hide the loader
   * 
   * @param state 
   * @param action - true / false 
   */
  TOGGLE_LOADER: function(state, action){
    state.showLoader = action;
  }
};
