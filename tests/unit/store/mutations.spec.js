import mutations from "@/store/mutations.js";
import axios from 'axios';

jest.mock('axios');


describe("Store actions", ()=>{

      it('Should be able to get show details by id',  done => {  

        let showDetails = {id: 4, name:"GodFather", rating: {average: 9.1}, image:{}, language:"english", status:"", type:"", summary:"", _embedded:{}}
        let expected = {"left": { "language": "english",
                                  "name": "GodFather",
                                  "rating": 9.1,
                                  "status": "",
                                  "type": "",
                               }, "right":  {"_embedded": {}, "image": {}, "summary": ""}}
        axios.get.mockImplementationOnce(() => Promise.resolve({data:showDetails}));     
        let _state = {activeShow:""}  
        mutations.updateActiveShow(_state, 4)
        setTimeout(()=>{
            expect(_state.activeShow).toEqual(expected)
            done();
        }, 500)
        
      })




      it('Should be able to search for shows',  done => {  

        let apiResult = [
          {show:{id:1, image:{}, name: "hanna", rating:{average:9}, summary:"", language:"english", runtime:40}},
          {show:{id:2, image:null, name: null, rating:{average:""}, language:null, runtime:null}},
          {show:{id:3, image:{}, name: "panna", rating:{average:7}, summary:"", language:"english", runtime:60}}
        ]

        let expected = [
          {id:1, image:{}, name: "hanna", rating:9, desc:"", language:"english", runtime:40},
          {id:2, image:"", name: "", rating:0, desc: "", language:"", runtime:""},
          {id:3, image:{}, name: "panna", rating:7, desc:"", language:"english", runtime:60}
        ]
        
        axios.get.mockImplementationOnce(() => Promise.resolve({data:apiResult}));     
        let _state = {searchResults:null}  
        mutations.updateActiveShowByName(_state, "nna")
        setTimeout(()=>{
            expect(_state.searchResults).toEqual(expected)
            done();
        }, 500)
        
      })



      it('Should be able to get all the shows from API',  done => {  

        let apiResult = [
          { id: 1, name: "Jack ryan", rating: {average:8.2},  image:{}, genres:["drama", "action"] },
          { id: 2, name: "hanna", rating: {average:8.4},  image:{}, genres:["tech"] },
          { id: 3, name: "Bad boys", rating: {average:8.2},  image:{}, genres:["action"] },
          { id: 4, name: "Dont Breath", rating: {average:8.2},  image:{}, genres:["horror", "action"] },
          { id: 5, name: "Walking Dead", rating: {average:8.5},  image:{}, genres:["horror", "action"] },
          { id: 6, name: "Fearful", rating: {average:8.4},  image:{}, genres:["action", "comedy"] },
          { id: 7, name: "Anibie", rating: {average:8.7},  image:{}, genres:[] },
          { id: 8, name: "Honeywell", rating: {average:null},  image:null, genres:["drama", "action"] }
        ]
        let expected = {drama:[ 
          // { id: 7, name: "Anibie", rating:8.7,  image:{}},
          // { id: 2, name: "hanna", rating:8.4,  image:{}},
          { id: 1, name: "Jack ryan", rating:8.2,  image:{}},
          { id: 8, name: "Honeywell", rating:'',  image:""}
          
        ], action:[
          { id: 6, name: "Fearful", rating:8.4,  image:{}},
          { id: 3, name: "Bad boys", rating:8.2,  image:{}}          
        ], horror:[
          { id: 5, name: "Walking Dead", rating:8.5,  image:{}},
          { id: 4, name: "Dont Breath", rating:8.2,  image:{}}          
        ], comedy:[]}

        axios.get.mockImplementationOnce(() => Promise.resolve({data:apiResult}));     
        let _state = {shows:{drama:[], action:[], comedy:[],  horror:[] }}  
        mutations.updateShows(_state)
        setTimeout(()=>{
            expect(_state.shows).toEqual(expected)
            done();
        }, 500)
        
      })



})