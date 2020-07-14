import showsService from "../services/shows.service.js";

export default {
  /**
   * get all the shows from API and filters by highest rating
   * 
   * @param state 
   */
  updateShows: function(state) {
    showsService.getTopShows().then(
      result => {
        let tempshows = result.data
          .map(data => {
            return {
              id: data.id,
              images: data.image,
              rating: data.rating.average,
              desc: data.summary,
              name: data.name,
              language: data.language,
              runtime: data.runtime
            };
          })
          .filter(item => item.rating > 8.9);
        state.shows = tempshows;
      }
    );
  },
  /**
   * sets the active show to be displayed in details screen, by showId
   * 
   * @param  state 
   * @param  showId 
   */
  updateActiveShow: function(state, showId) {
    let showsRef = state.shows;
    let activeShow = showsRef.find(
      showObj => String(showObj.id) === String(showId)
    );
    state.activeShow = activeShow;
  },
  /**
   * Gets show details from API by search
   * 
   * @param state 
   * @param showName 
   */
  updateActiveShowByName: function(state, showName) {
    showsService.getShowDetailsByName(showName).then(
      result => {
        let showObj = {
          id: result.data.id,
          images: result.data.image || "",
          rating: result.data.rating.average || "",
          desc: result.data.summary || "",
          name: result.data.name || "",
          language: result.data.language || "",
          runtime: result.data.runtime || ""
        };
        state.activeShow = showObj;
      }
    );
  }
};
