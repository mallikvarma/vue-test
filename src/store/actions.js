import showsService from "../services/shows.service.js";

export default {
    getTopShows: function(store) {
      showsService.getTopShows().then(
        result => {
          let tempshows = {drama: [], action: [], horror: [], comedy: []}
          result.data.forEach(function (showObj) {
            if(showObj.genres.length > 0 ){
              let genre = showObj.genres[0].toLowerCase();
              if( Object.prototype.hasOwnProperty.call(tempshows, genre)){             
                  tempshows[genre].push({ id: showObj.id, name: showObj.name, rating: showObj.rating.average || 0,  image: showObj.image || '' });             
              }
            }
          })
          const sortFunc  = (a, b) => b.rating-a.rating;
          for (const genre in tempshows) {
            tempshows[genre] = tempshows[genre].sort(sortFunc)
          }
          store.commit("UPDATE_SHOWS", tempshows);          
        }
      );
      
    },
  
    getShowDetails: function(store, showId) {
      showsService.getShowDetails(showId).then( result => {
        const {name, summary, rating:{average: rating}, image, language, status, type, _embedded} = result.data; 
        const tempActiveShow = {left:{ name, rating, language, status, type}, right:{image, summary, _embedded}}
        store.commit("UPDATE_ACTIVE_SHOW", tempActiveShow);
      })      
    },
  
    searchShows: function(store, showName) {
      showsService.searchShows(showName).then(
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
  
          store.commit("UPDATE_SEARCH_RESULTS", tempCol);
        }
      );      
    },

    toggleLoader: function(store, action){
      store.commit("TOGGLE_LOADER", action)
    }
  };
  