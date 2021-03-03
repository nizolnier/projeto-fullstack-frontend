import axios from 'axios'
import { baseUrl } from '../constants/urls'
import { goToFeed } from '../router/coordinator'

export const signUp = (body, history, setLoading) => {
    setLoading(true)
    axios.post(`${baseUrl}/user/signup`, body).then((res) => {
      setLoading(false)
      localStorage.setItem("token", res.data.token)
      goToFeed(history)
    }).catch((err) => {
      setLoading(false)
      console.log(err.response.data)
    })
  }