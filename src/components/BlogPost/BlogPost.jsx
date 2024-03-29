/* eslint-disable no-unused-vars */
import './BlogPost.css'
import CommentForm from '../CommentForm/CommentForm'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Nav from "../Nav/Nav"
import CommentSection from '../CommentSection/CommentSection'
import { useSelector } from 'react-redux'
function BlogPost(props){

    const [post, setPost] = useState({})

    const params = useParams()

    const isAuthenticated = useSelector((state) => state.userAuth)

    useEffect(() => {
        findPost()
    }, [])

    async function findPost(){
        const response = await fetch("https://blog-api-9r0h.onrender.com/posts/" + params.id, {
            method: "GET",
            mode: "cors",
            credentials: 'include',
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log('blog --- >', data)
            setPost(data)
        })

    }

    const _arrayBufferToBase64 = (buffer) => {
        let binary = ''
        let bytes = new Uint8Array(buffer)
        var len = bytes.byteLength;
        for (let i = 0; i < len; i++){
          binary += String.fromCharCode(bytes[i])
        }
        return window.btoa(binary)
      }


 
    return (
        
        <div className="d-flex flex-column " id="main-container">

            <div className="container-fluid" id='header-container'>
                <Nav />
            </div>

            <div className="container-fluid d-flex flex-column justify-content-center align-items-center" id="body-container">
                <h1>{post.title}</h1>
                {post.blogpic ? <img src={"data:" + post.blogpic.contentType + 
                    ';base64,' + _arrayBufferToBase64(post.blogpic.data.data)} alt=""></img>
                                : ""}

                <div className="container-fluid" id="blog-text-container">
                    {post.text}
                </div>

            </div>

            {isAuthenticated.value ? <CommentForm post={post} /> : "" }
            <CommentSection post={post}/>

        </div>

    )
}


export default BlogPost