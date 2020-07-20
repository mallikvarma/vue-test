import Vue from "vue";
import axios from "axios";

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
    if(response.status === 401) {
         alert("You are not authorized");
    }
    return response;
  }, (error) => {
    alert('Network Error: Please check your Internet connection and VPN')
    console.error("HTTP RESPONSE ERROR: ", error);
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