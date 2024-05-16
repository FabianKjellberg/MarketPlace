import React from "react";
import { useState } from "react";
import axios from "axios";
import { useAuthentication } from "./AuthenticationProvider";


class AuthenticationManager {

    constructor(apiUrl) {
        
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
                    return response.data
                }
            })
            .catch(error => {
                console.error('', error);
                return "error";
            });
        return returnData;
    }
}
export default AuthenticationManager;