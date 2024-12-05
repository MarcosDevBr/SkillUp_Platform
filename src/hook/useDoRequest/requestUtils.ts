import axios, { AxiosInstance } from 'axios';

export default class RequestUtils {
    static authApi: AxiosInstance;

    static getAuthApiUrl(): string {
        switch (process.env.REACT_APP_ENVIRONMENT) {
        case 'local':
            return 'https://accounts.google.com/o/oauth2/auth';
        case 'development': 
            return 'https://accounts.google.com/o/oauth2/auth';
        case 'staging':
            return 'https://accounts.google.com/o/oauth2/auth';
        case 'production':
            return 'https://accounts.google.com/o/oauth2/auth';
        default:
            throw new Error(`Nao foi definido uma variavel de ambiente com o valor '${process.env.REACT_APP_ENVIRONMENT}'`);
        }
    }

    static setAuthToken(authToken: string) {
        this.authApi = axios.create({
            baseURL: this.getAuthApiUrl(),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
        });
    }
}
