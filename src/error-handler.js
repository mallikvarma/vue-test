import Vue from "vue";
import axios from "axios";
import router from "./router";

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
 * Handling HTTP errors  globally
 * 
 * @param response
 */
axios.interceptors.response.use((response) => {      
    return response;
  }, (error) => {

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