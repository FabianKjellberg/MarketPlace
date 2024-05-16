import React from "react";
import { useState } from "react";
import axios from "axios";

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
                return response.data; 
            })
            .catch(error => {
                console.error('Error retrieving listings', error);
                return [];
            });
        return returnData;
    }
}
export default AuthenticationManager;