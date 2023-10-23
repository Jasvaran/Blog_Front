/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux/es/hooks/useSelector'
import './App.css'
import Nav from './components/Nav/Nav'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from './components/Card/Card'
import CreatePost from './components/CreatePost/CreatePost'
function App() {
  
  const [posts, setPosts] = useState([])
  const [test, setTest] = useState("")

  const isAuthenticated = useSelector((state) => state.userAuth)

  useEffect(() => {
    findPosts()

  }, [])



  async function findPosts(){
    const posts = await fetch("http://localhost:3000/posts", {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        // console.log(data)
        setPosts(data)

      })
  }

  return (
    <div className="container-fluid" id='main-container'>
      <div className="header" id='header-container'>
        <Nav />
      </div>
      <div className="container-fluid d-flex flex-wrap" id='body-container'>
        {posts.map((obj, index) => {
          return (
            // btoa(String.fromCharCode.apply()) converts buffer data to base64 string 
            <Card key={index} image={btoa(String.fromCharCode.apply(null, new Uint8Array(obj.blogpic.data.data)))} 
                  contentType={obj.blogpic.contentType} title={obj.title} obj={obj} />
          )
        })}
      </div>
      <div className="footer" id='footer-container'> The Odin Project</div>
    </div>
  )
}

export default App
