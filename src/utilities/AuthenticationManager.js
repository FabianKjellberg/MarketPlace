import React from "react";
import { useState } from "react";
import axios from "axios";
import { useAuthentication } from "./AuthenticationProvider";


class AuthenticationManager {

    constructor(apiUrl, { logIn, setToken }) {
        
        this.logIn = logIn;
        this.setToken = setToken;
        this.apiUrl = apiUrl;
        this.axiosInstance = axios.create({
            baseURL: apiUrl,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    Authenticate(userDetails) {
        
        
        const returnData = this.axiosInstance.post('/auth/login', userDetails)
            .then(response => {
                if(response.status == 200){
                    console.log(response.status)
                    
                    this.logIn(userDetails.email);
                    this.setToken(response.data);
                    return "success"
                }
                else{
                    return response.data
                }
                return response.data; 
            })
            .catch(error => {
                console.error('', error);
                return [];
            });
        return returnData;
    }
}
export default AuthenticationManager;