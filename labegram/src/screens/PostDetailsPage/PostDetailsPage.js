import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../../components/Loading';
import { baseUrl } from '../../constants/urls';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import PostDetailsCard from '../../components/PostDetailsCard/PostDetailsCard'
import { PostContainer } from './styled';

function PostDetailsPage() {
  useProtectedPage()
  const params = useParams()

  const [post, setPost] = useState({})

  useEffect(() => {
    getPostDetails()
  }, [])

  const getPostDetails = () => {
    axios.get(`${baseUrl}/post/${params.id}`, {
      headers: {
        authorization: localStorage.getItem("token")
      }
    }).then(response => {
      setPost(response.data)
      console.log(response.data)
    }).catch(err => {
      console.log(err.response && err.response.data || err.message)
    })
  }
  return (
    <PostContainer>
     {!post ? <Loading /> : <PostDetailsCard subtitle={post.subtitle} tags={post.tags} collection={post.collection} profilePic={post.profilePicture} date={post.date} file={post.file} nickname={post.nickname}  />}
    </PostContainer>
  );
}

export default PostDetailsPage;
