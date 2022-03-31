import React, { useEffect, useState } from 'react'

function useToken() {
  
    const [token,setToken] = useState()
    const [loaded,setLoaded] = useState(false)

    const loadToken = () => {
        let jwtToken = localStorage.getItem('contact-app-token')
        setToken(jwtToken)
    }

    useEffect(()=>{
        loadToken()
        setLoaded(true)
    },[])

    return {token,loaded}
    
}

export default useToken