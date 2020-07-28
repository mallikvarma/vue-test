import axios from "axios";

axios.defaults.baseURL = "https://api.tvmaze.com";


// handles all the http service calls in the app
class ShowsService {
  allShowsUrl = "/shows";
  showLookUpUrl = "/search/shows?q=";
  

  getTopShows() {
    return axios.get(this.allShowsUrl);
  }

  getShowDetails(id) {
    return axios.get(`${this.allShowsUrl}/${id}?embed=cast`);
  }

  searchShows(showName) {
    return axios.get(this.showLookUpUrl + showName);
  }
}

export default new ShowsService();
