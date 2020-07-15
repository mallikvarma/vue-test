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
        let tempshows = {drama: [], action: [], horror: [], comedy: []}
        result.data.forEach(function (showObj) {
          if(showObj.genres.length > 0 ){
            let genre = showObj.genres[0].toLowerCase();
            if( Object.prototype.hasOwnProperty.call(tempshows, genre)){             
                tempshows[genre].push({ id: showObj.id, name: showObj.name, rating: showObj.rating.average || '',  image: showObj.image || '' });             
            }
          }
        })
        const sortFunc  = (a, b) => b.rating-a.rating;
        tempshows.drama = tempshows.drama.sort(sortFunc).slice(0, 5);
        tempshows.action = tempshows.action.sort(sortFunc).slice(0, 5);
        tempshows.horror = tempshows.horror.sort(sortFunc).slice(0, 5);
        tempshows.comedy = tempshows.comedy.sort(sortFunc).slice(0, 5);
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
