import axios from "axios";
import { url } from "../constants";
import { IUser } from "../global.interface";
 

export const baseApi = axios.create({
    baseURL: url
}) 

export const getUsers = async():Promise<IUser[]> =>{
    const {data:{results}} = await baseApi.get('?results=500');
    return results
}