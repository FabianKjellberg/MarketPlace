import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_KNgq4ZlQc",
    ClientId: "6232trch4tj3vaorkeucht8cem"
}

export default new CognitoUserPool(poolData);