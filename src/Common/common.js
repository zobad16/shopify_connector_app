import axiosInstance from "../axiosInstance";

export function validateToken(){
    if(!axiosInstance.defaults.headers.common['x-access-token']){
        console.log("Token not found. Fetching from local storage");
        const {token} = JSON.parse(localStorage.getItem('user_data'));
        //console.log("TOKEN::",token.token);
        if(token)axiosInstance.defaults.headers.common['x-access-token']= token;
      }
}