import axios from "axios";

class AcceptProductManager {

    constructor(apiUrl) {
        
        this.apiUrl = apiUrl;
        this.axiosInstance = axios.create({
            baseURL: apiUrl,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    AcceptOffer(productID, token) {
        const returnData = this.axiosInstance.put(`/offer/acceptOffer/${productID}`,{headers: {
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
export default AcceptProductManager;