import axios from 'axios'
import {baseUrl} from '../constants/urls'

export const createPost = (body, update) => {
    axios.post(`${baseUrl}/post/create`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        window.alert("Post criado com sucesso!")
        update()
    }).catch((err) => {
        console.log(err.response && err.response.data || err.message)
      window.alert("Ih deu erro!")
    })
}

