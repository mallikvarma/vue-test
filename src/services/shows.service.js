import axios from "axios";

class ShowsService {
  allShowsUrl = "https://api.tvmaze.com/shows";
  showLookUpUrl = "https://api.tvmaze.com/singlesearch/shows?q=";

  getTopShows() {
    return axios.get(this.allShowsUrl);
  }

  getShowDetails(id) {
    return axios.get(this.allShowsUrl + "/" + id);
  }

  getShowDetailsByName(showName) {
    return axios.get(this.showLookUpUrl + showName);
  }
}

export default new ShowsService();
