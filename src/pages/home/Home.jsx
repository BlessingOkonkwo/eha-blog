import React, { useEffect, useState } from 'react'
import "./home.css"
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/SideBar'
import axios from "axios";
import { useLocation } from 'react-router-dom'

const Home = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  console.log(search);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     await axios.get('/posts')
  //     .then((result) => {
  //         setPosts(result.data);
  //         console.log(posts);
  //     })
  //     .catch((error) => {
  //         console.log(error);
  //     })
  //   }
  //   fetchPosts();
  // }, []);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
      console.log(res);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
          <Posts posts={posts}/>
          <SideBar />
      </div>
    </>
    
  )
}

export default Home
