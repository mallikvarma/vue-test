export default {
    GET_TOP_SHOWS: function(store) {
      store.commit("updateShows");
    },
  
    GET_SHOW_DETAILS: function(store, params) {
      store.commit("updateActiveShow", params);
    },
  
    GET_SHOW_DETAILS_BY_NAME: function(store, showName) {
      store.commit("updateActiveShowByName", showName);
    }
  };
  