import React from "react";
import { useState } from "react";

class AuthenticationManager {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    Authenticate(userDetails) {
        return fetch(`${this.apiUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDetails)
        }).then(response => console.log(response))
        .catch(error => console.error('Error authenticatings', error));
    }
}
export default AuthenticationManager;