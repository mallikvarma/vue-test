import Vue from "vue";
import axios from "axios";
import router from "./router";
import store from "./store";

/**
 * Handling errors accross the applicaiton here
 * 
 * @param err 
 * @param vm 
 * @param info 
 */
Vue.config.errorHandler = (err, vm, info) => {
  console.log(vm + "/ "+ info + ":: " + err)
};

/**
 * handling http request globally
 * 
 * @param config
 */
axios.interceptors.request.use(function (config) {
  store.dispatch("TOGGLE_LOADER", true)
  return config;
}, function (error) {  
  return Promise.reject(error);
});


/**
 * Handling HTTP errors  globally
 * 
 * @param response
 */
axios.interceptors.response.use((response) => {      
    store.dispatch("TOGGLE_LOADER", false)
    return response;
  }, (error) => {
    store.dispatch("TOGGLE_LOADER", false)
    let errorMsg = 'Ummm..Seems to be Invalid URL OR No Network!';
    if ( error && error.response && error.response.status ){
      switch(error.response.status){
        case 404:
           errorMsg = "Page Not Found";
        break;
        case 401:
          errorMsg = "Unauthorized";
        break;
        case 500:
          errorMsg = "Something wrong with the server. Try later.";
        break;
        default:
          errorMsg = 'Ummm..Seems to be Invalid URL OR No Network!';
        break;
      }
    }
    
    router.push(`/errors?message=${errorMsg}`);
    return Promise.reject(error.message);
  });
  

 /**
 * handling errors coming outside of the vue
 * 
 * @param err 
 */
  window.onerror = (err)=>{
    console.log("window.onerror :: " + err)
  }