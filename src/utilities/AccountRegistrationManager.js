class AccountRegistrationManager {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    registerAccount(userDetails) {
        console.log("HEJ")
        
        return fetch(`${this.apiUrl}/auth/addNewUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDetails)
        }).then(response => console.log(response))
        .catch(error => console.error('Error registering account:', error));
    }
}
export default AccountRegistrationManager;