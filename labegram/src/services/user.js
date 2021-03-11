import axios from 'axios'
import { baseUrl } from '../constants/urls'
import { goToFeed } from '../router/coordinator'

export const login = (body, setLoading) => {
    setLoading(true)
    axios.post(`${baseUrl}/user/login`, body).then((res) => {
      localStorage.setItem("token", res.data.token)

      setLoading(false)
      
      
    }).catch((err) => {
      setLoading(false)
      window.alert("Email ou senha incorretos!")
      console.log(err.message)
    })
  }

export const signUp = (body, setLoading) => {
    setLoading(true)
    axios.post(`${baseUrl}/user/signup`, body).then((res) => {
      localStorage.setItem("token", res.data.token)
      setLoading(false)
      
      
    }).catch((err) => {
      setLoading(false)
      console.log(err.response.data)
    })

  }