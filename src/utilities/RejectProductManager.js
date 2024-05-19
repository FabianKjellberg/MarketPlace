import axios from "axios";

class RejectProductManager {

    constructor(apiUrl) {
        
        this.apiUrl = apiUrl;
        this.axiosInstance = axios.create({
            baseURL: apiUrl,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    RejectOffer(productID, token) {
        const returnData = this.axiosInstance.put(`/offer/rejectOffer/${productID}`,{headers: {
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
export default RejectProductManager;