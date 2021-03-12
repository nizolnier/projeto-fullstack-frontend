import { useState, useEffect } from 'react'
import axios from 'axios'
import {baseUrl} from '../constants/urls'

export const useRequestData = (urlEnd) => {
    const [data, setData] = useState({})

    useEffect(() => {
        getData()
    }, [urlEnd])
    
    const getData = () => {
        axios.get(`${baseUrl}${urlEnd}`, {
            headers: {
                authorization: localStorage.getItem("token")
            }
        }).then(response => {
            setData(response.data)
        }).catch(err => {
            console.log(err.response && err.response.data || err.message)
        }) 
    }
    
    return [data, getData]  
};