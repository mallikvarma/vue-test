export default {
    getTopShows: function(store) {
      store.commit("updateShows");
    },
  
    getShowDetails: function(store, params) {
      store.commit("updateActiveShow", params);
    },
  
    getShowDetailsByName: function(store, showName) {
      store.commit("updateActiveShowByName", showName);
    }
  };
  