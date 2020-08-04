import { createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';
import state from "@/store/state.js"
import actions from "@/store/actions.js"
import axios from 'axios';
jest.mock('axios');

const localVue = createLocalVue()
localVue.use(Vuex)


describe("Store actions", ()=>{

  
      let mutations = {
                        UPDATE_SHOWS: jest.fn(),
                        UPDATE_ACTIVE_SHOW: jest.fn(),
                        UPDATE_SEARCH_RESULTS: jest.fn(),
                        TOGGLE_LOADER: jest.fn()
                      }
      let store = new Vuex.Store({
                                    state,
                                    actions,
                                    mutations
                                  })  
    

      afterAll(()=>{
          mutations = null;
          store = null;
      })


      it('Should call UPDATE_SHOWS mutation on getTopShows with data', done => {         

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
        let expected = { drama:[ 
                                { id: 1, name: "Jack ryan", rating:8.2,  image:{}},
                                { id: 8, name: "Honeywell", rating:0,  image:""}
                                
                              ], action:[
                                { id: 6, name: "Fearful", rating:8.4,  image:{}},
                                { id: 3, name: "Bad boys", rating:8.2,  image:{}}          
                              ], horror:[
                                { id: 5, name: "Walking Dead", rating:8.5,  image:{}},
                                { id: 4, name: "Dont Breath", rating:8.2,  image:{}}          
                              ], comedy:[]}

        axios.get.mockImplementationOnce(() => Promise.resolve({data:apiResult}));     
        store.dispatch('getTopShows')
        setTimeout(()=>{
          expect(mutations.UPDATE_SHOWS).toHaveBeenCalledWith(state,expected)
            done();
        }, 100)

        
      })

      it('Should call UPDATE_ACTIVE_SHOW mutation getShowDetails with data', done => {    

        let showDetails = {id: 4, name:"GodFather", rating: {average: 9.1}, image:{}, language:"english", status:"", type:"", summary:"", _embedded:{}}
        let expected = {"left": { "language": "english",
                                  "name": "GodFather",
                                  "rating": 9.1,
                                  "status": "",
                                  "type": "",
                               }, "right":  {"_embedded": {}, "image": {}, "summary": ""}}
        axios.get.mockImplementationOnce(() => Promise.resolve({data:showDetails}));     
        let _state = {activeShow:""}  
        store.dispatch('getShowDetails')
        setTimeout(()=>{
          expect(mutations.UPDATE_ACTIVE_SHOW).toHaveBeenCalledWith(state, expected)
            done();
        }, 100)
        
      })

      it('Should call UPDATE_SEARCH_RESULTS mutation searchShows with data', done => {    

        let apiResult = [
                          {show:{id:1, image:{}, name: "hanna", rating:{average:9}, summary:"", language:"english", runtime:40}},
                          {show:{id:2, image:null, name: null, rating:{average:""}, language:null, runtime:null}},
                          {show:{id:3, image:{}, name: "panna", rating:{average:7}, summary:"", language:"english", runtime:60}}
                        ];

        let expected = [
                          {id:1, image:{}, name: "hanna", rating:9, desc:"", language:"english", runtime:40},
                          {id:2, image:"", name: "", rating:0, desc: "", language:"", runtime:""},
                          {id:3, image:{}, name: "panna", rating:7, desc:"", language:"english", runtime:60}
                        ];
        
        axios.get.mockImplementationOnce(() => Promise.resolve({data:apiResult}));     
        store.dispatch('searchShows')  
        setTimeout(()=>{
          expect(mutations.UPDATE_SEARCH_RESULTS).toHaveBeenCalledWith(state,expected)
          done();
        }, 100)
        
      })

      it('Should call TOGGLE_LOADER mutation on toggleLoader with true or false', () => {    
        let action = true;
        store.dispatch('toggleLoader', action)  
        expect(mutations.TOGGLE_LOADER).toHaveBeenCalledWith(state, action)
      })

})