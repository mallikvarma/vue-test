import mutations from "@/store/mutations.js";


describe("Store actions", ()=>{

      it('Should be able update store with shows',  () => {  
        let _state = {shows:[]}  
        let expected = [
          { id: 1, name: 'GodFather', rating: 8.5,  image: '' },
          { id: 2, name: 'GodFather 2', rating: 8.0,  image: '' },
        ];
        mutations.UPDATE_SHOWS(_state, expected);
        expect(_state.shows).toEqual(expected);
      })

      it('Should be able update store with active show',  () => {  
        let _state = {activeShow:null}  
        let expected = { id: 1, name: 'GodFather', rating: 8.5,  image: ''};
        mutations.UPDATE_ACTIVE_SHOW(_state, expected);
        expect(_state.activeShow).toEqual(expected);
      })

      it('Should be able to update store with search results',  () => {  
        let _state = {searchResults:null}  
        let expected = [
          { id: 1, name: 'GodFather', rating: 8.5,  image: '' },
          { id: 2, name: 'GodFather 2', rating: 8.0,  image: '' },
        ];
        mutations.UPDATE_SEARCH_RESULTS(_state, expected);
        expect(_state.searchResults).toEqual(expected);
      })


      
      it('Should be able to update store with search results',  () => {  
        let _state = {showLoader:false}  
        let expected = true;
        mutations.TOGGLE_LOADER(_state, expected);
        expect(_state.showLoader).toEqual(expected);
      })

})