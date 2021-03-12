import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../../components/Loading';
import { baseUrl } from '../../constants/urls';
import { useProtectedPage } from '../../hooks/useProtectedPage';

function PostDetailPage() {
  useProtectedPage()
  const params = useParams()

  const [post, setPost] = useState(undefined)

  useEffect(() => {
    getPostDetails()
  }, [])

  const getPostDetails = () => {
    axios.get(`${baseUrl}/post/${params.id}`, {
      headers: {
        authorization: localStorage.getItem("token")
      }
    }).then(response => {
      console.log(response.data)
      setPost(response.data)
    }).catch(err => {
      console.log(err.response && err.response.data || err.message)
    })
  }
  return (
    <div>
     {!post ? <Loading /> : <div>cansei</div>}
    </div>
  );
}

export default PostDetailPage;