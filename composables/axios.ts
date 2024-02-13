import axios from 'axios'
import {useUserAuth} from "~/composables/userAuth";

export const useApi = () => {
    const runtimeConfig = useRuntimeConfig()
    const baseURL = runtimeConfig.public.nuxtAppUrl;
    const user = useUserAuth();

    return axios.create({
        baseURL,
        headers: {
            Authorization: `Bearer ${user.authorization}`
        }
    })
}