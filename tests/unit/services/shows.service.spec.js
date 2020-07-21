import ShowService from "@/services/shows.service.js"
import axios from 'axios';

jest.mock('axios');


  describe("shows.service.js", ()=>{

    it("Should call correct URL when called getTopShows()", ()=>{
        const data = '';
        axios.get.mockImplementationOnce(() => Promise.resolve(data));     
        ShowService.getTopShows();
        expect(axios.get).toHaveBeenCalledWith('/shows');
    })


    it("Should call correct URL when called getShowDetails()", ()=>{
        const data = '';
        axios.get.mockImplementationOnce(() => Promise.resolve(data));     
        ShowService.getShowDetails(44);
        expect(axios.get).toHaveBeenCalledWith('/shows/44?embed=cast');
    })

    it("Should call correct URL when called getShowDetailsByName()", ()=>{
        const data = '';
        axios.get.mockImplementationOnce(() => Promise.resolve(data));     
        ShowService.getShowDetailsByName("god");
        expect(axios.get).toHaveBeenCalledWith('/search/shows?q=god');
    })


  })