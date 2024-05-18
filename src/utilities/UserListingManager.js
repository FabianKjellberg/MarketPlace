import axios from "axios";

class UserListingManager {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.axiosInstance = axios.create({
            baseURL: apiUrl,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    RetrieveListings(token) {
        const returnData = this.axiosInstance.get('/product/availableProducts', {headers: {
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

export default UserListingManager;