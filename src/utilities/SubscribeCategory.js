import axios from "axios";

class SubscribeCategory {

    constructor(apiUrl) {
        
        this.apiUrl = apiUrl;
        this.axiosInstance = axios.create({
            baseURL: apiUrl,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    SubscribeToCategory(category, token) {
        const returnData = this.axiosInstance.put('/auth/subscribeToCategory', category ,{headers: {
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
export default SubscribeCategory;