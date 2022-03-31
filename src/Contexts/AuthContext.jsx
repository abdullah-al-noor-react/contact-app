import {  createContext, useEffect, useState } from "react";

import axios from 'axios'
import useToken from "../hooks/useToken";
export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

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
    const value ={
        saveAuthInfo,
        user
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}