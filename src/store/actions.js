export default {
    GET_TOP_SHOWS: function(store) {
      store.commit("updateShows");
    },
  
    GET_SHOW_DETAILS: function(store, params) {
      store.commit("updateActiveShow", params);
    },
  
    SEARCH_SHOWS: function(store, showName) {
      store.commit("updateSearchResults", showName);
    }
  };
  