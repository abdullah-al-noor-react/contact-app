import {  createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import axios from 'axios'
import useToken from "../hooks/useToken";
import {useNavigate} from 'react-router-dom'


export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    let navigate = useNavigate();
    const {token,loaded}= useToken()
    const [user,setUser] = useState()
    const saveAuthInfo = (info) => {
        console.log(info);
        localStorage.setItem('contact-app-token',info.jwt);
        setUser({
            id:info.user.id,
            username:info.user.username,
            email:info.user.email,
        })
        
    }
    const loadUser = async () => {
       try {

        let res = await axios
        .get('http://localhost:1337/api/users/me', {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }) 
       
        setUser({
            id:res.data.id,
            username:res.data.username,
            email:res.data.email,
        })
       } catch (error) {
           console.log(error.response);
       }
    }
    useEffect(() => {
        if(loaded){
            loadUser()
        }
        
    },[loaded])


    const removeAuthInfo = ()=> {
        localStorage.removeItem('contact-app-token');
        setUser(null)
        toast.success("Your are logged out successfully...");
        navigate('/')
        
    }



    const value ={
        saveAuthInfo,
        user,
        removeAuthInfo
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}