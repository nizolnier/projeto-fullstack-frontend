import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import CreatePost from '../../components/CreatePost/CreatePost'
import Loading from '../../components/Loading'
import PostCard from '../../components/PostCard/PostCard'
import { baseUrl } from '../../constants/urls'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { PostsContainer } from './styled'

function FeedPage() {
  useProtectedPage()
  const [posts, setPosts] = useState(undefined)

  useEffect(() => {
    getFeed()
  }, [])

  const getFeed = () => {
    axios.get(`${baseUrl}/post/all`, {
      headers: {
        authorization: localStorage.getItem("token")
      }
    }).then(response => {
      console.log(response.data)
      setPosts(response.data)
    }).catch(err => {
      console.log(err.response && err.response.data || err.message)
    })
  }

  return (
    <PostsContainer>
      <CreatePost />
      {!posts ? <Loading /> : posts.map((item) => {
        return <PostCard id={item.id} key={item.id} nickname={item.nickname} profilePic={item.profilePicture} file={item.file} subtitle={item.subtitle} tags={item.tags} />
      })}

    </PostsContainer>
  )
}

export default FeedPage;