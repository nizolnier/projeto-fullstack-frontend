import axios from 'axios'
import {baseUrl} from '../constants/urls'
import { goToFeed } from '../router/coordinator'

export const createPost = (body, history) => {
    axios.post(`${baseUrl}/post/create`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        window.alert("Post criado com sucesso!")
        goToFeed(history)
    }).catch((err) => {
        console.log(err.response && err.response.data || err.message)
      window.alert("Ih deu erro!")
    })
}

