import React from "react";
import { useState } from "react";
import axios from 'axios';

class CurrentListingManager {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.axiosInstance = axios.create({
            baseURL: apiUrl,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    RetrieveListings() {
        const returnData = this.axiosInstance.get('/product/listAll')
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

export default CurrentListingManager;
