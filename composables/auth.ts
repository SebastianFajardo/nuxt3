import axios from 'axios';
import * as jwtDecode from 'jwt-decode';
import {useApi} from "~/composables/axios";
import {useUserAuth} from "~/composables/userAuth";

interface LoginResponse {
    token: string;
    user: any;
}

export const useAuth = () => {

    const authUser = useUserAuth();
    const api = useApi();

    const setUser = (user: any) => {
        authUser.setUser(user);
    };

    const login = async (email: string, password: string): Promise<axios.AxiosResponse<any>> => {
        try {
            const response =await api({
                method: 'post',
                url: '/api/login',
                data: {email, password}
            })

            if (response.data.user)
                setUser(response.data.user);

            return response;
        } catch (error) {
            console.log(error)
            throw error;
        }
    };

    const logout = async () => {
        try {
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://127.0.0.1:8089/api/logout',
                headers: {
                    'Authorization': `Bearer ${this.user.token}}`
                }
            };
            const response = await axios.request(config);
            setUser(null);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const checkTokenExpiration = (): boolean => {
        const token: string | null = localStorage.getItem('token');
        if (token) {
            const decodedToken: { exp: number } = jwtDecode.jwtDecode(token);
            const expirationTime: number = decodedToken.exp * 1000;
            if (expirationTime > Date.now()) {
                return true;
            } else {
                logout().then(response=> {return false})
            }
        } else {
            return false;
        }
    };

    return {
        login,
        logout,
        checkTokenExpiration,
    };
};
