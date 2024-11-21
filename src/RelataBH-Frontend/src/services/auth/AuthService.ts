import axios from "axios";
import api from "../axiosInstance";
import { ENDPOINTS } from "../Endpoints";
import { TokenService } from "../TokenService";

type LoginResponse = {
    id: string,
    email: string,
    name: string,
    token: string
}

export class AuthService {
    login = async (email: string, password: string): Promise<ApiResponse<LoginResponse>> => {
        try {
            const url = ENDPOINTS.LOGIN();
            const body = JSON.stringify({email: email, password: password, returnSecureToken: true});
            const response = await api.post<LoginResponse>(url, body);
            TokenService.saveUserToken(response.data.token);
            return { success: true, data: response.data }
        } catch (error) {
            if(axios.isAxiosError(error)){
                console.log("ERROR> " + error.response?.data.error.message)
                return { success: false, error: error.response?.data.error.message };
            }
            
            return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
        }
    }

    register = async (
        name:string, 
        email: string, 
        password: string, 
        confirmarPassword: string
    ): Promise<LoginResponse> => {
        const url = ENDPOINTS.REGISTER();
        const body = JSON.stringify({
            name:name, 
            email: email, 
            password: password, 
            confirmarPassword: confirmarPassword, 
            returnSecureToken: true
        });
        const response = (await api.post(url, body)).data
        TokenService.saveUserToken(response.data.token);

        return {
            id: response.id,
            email: response.email,
            name: response.name,
            token: response.token
        };
    }

  static  recoverPassword = async (email:string) :Promise<ApiResponse<boolean>>=> {
        let requestType = "PASSWORD_RESET"
        let body = JSON.stringify({
            email: email,
            requestType: requestType
        })
        let url = ENDPOINTS.RECOVER_PASSWORD()
        const response = (await api.post(url, body)).data
        return{
            success:true,data:true
        }
    }
}