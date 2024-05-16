import React from "react";
import { useState } from "react";
import axios from "axios";
import { useAuthentication } from "./AuthenticationProvider";


class CreateListingManager {

    constructor(apiUrl) {
        
        this.apiUrl = apiUrl;
        this.axiosInstance = axios.create({
            baseURL: apiUrl,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    CreateListing(product, token) {
        const returnData = this.axiosInstance.post('/product/addNewProduct', product,{headers: {
            Authorization: `Bearer ${token}`
        },})
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
export default CreateListingManager;