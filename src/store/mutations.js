import showsService from "../services/shows.service.js";

export default {
  /**
   * Get all the shows from API and the filter shows by rating
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
   * Sets the active show to be displayed in details screen, by showId
   * 
   * @param  state 
   * @param  showId 
   */
  updateActiveShow: function(state, showId) {    
    state.activeShow = null;
    showsService.getShowDetails(showId).then( result => {
      const {name, summary, rating:{average: rating}, image, language, status, type, _embedded} = result.data; 
      const tempActiveShow = {left:{ name, rating, language, status, type}, right:{image, summary, _embedded}}
      state.activeShow = tempActiveShow;
    })    
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

        let tempCol = result.data.map( obj => {
          return  {
                    id: obj.show.id,
                    image: obj.show.image || "",
                    rating: obj.show.rating.average || 0,
                    desc: obj.show.summary || "",
                    name: obj.show.name || "",
                    language: obj.show.language || "",
                    runtime: obj.show.runtime || ""
                  };
        })

        state.searchResults = tempCol;
      }
    );
  }
};
