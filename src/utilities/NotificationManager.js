import axios from "axios";

class NotificationManager {

    constructor(apiUrl) {
        
        this.apiUrl = apiUrl;
        this.axiosInstance = axios.create({
            baseURL: apiUrl,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    SendNotifications(product, token) {
        const returnData = this.axiosInstance.post('/notification/notifyUsers', product,{headers: {
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

    GetNotifications(token) {
        const returnData = this.axiosInstance.get('/notification/getNotifications', {headers: {
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
export default NotificationManager;