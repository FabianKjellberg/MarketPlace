import React from "react";
import { useState } from "react";
import axios from 'axios';

class GetHistoryManager {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.axiosInstance = axios.create({
            baseURL: apiUrl,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    RetrieveHistoryPurchases(token) {
        const returnData = this.axiosInstance.get('/history/showPurchaseHistory', {headers: {
            Authorization: `Bearer ${token}`
        },})
            .then(response => {
                return response.data; 
            })
            .catch(error => {
                console.error('Error retrieving listings', error);
                return [];
            });
        return returnData;
    }

    RetrieveHistorySales(token) {
        const returnData = this.axiosInstance.get('/history/showSaleHistory', {headers: {
            Authorization: `Bearer ${token}`
        },})
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

export default GetHistoryManager;