/* eslint-disable no-unused-vars */
import './BlogPost.css'
import CommentForm from '../CommentForm/CommentForm'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Nav from "../Nav/Nav"
function BlogPost(props){

    const [post, setPost] = useState({})

    const params = useParams()

    useEffect(() => {
        findPost()
    }, [])

    async function findPost(){
        const response = await fetch("http://localhost:3000/posts/" + params.id, {
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


 
    return (
        
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center " id="main-container">

            <div className="container-fluid" id='header-container'>
                <Nav />
            </div>

            <div className="container-fluid d-flex flex-column justify-content-center align-items-center" id="body-container">
                <h1>{post.title}</h1>
                {post.blogpic ? <img src={"data:" + post.blogpic.contentType + 
                    ';base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(post.blogpic.data.data)))} alt=""></img>
                                : ""}

                <div className="container-fluid" id="blog-text-container">
                    {post.text}
                </div>

            </div>

            <CommentForm post={post} />

        </div>

    )
}


export default BlogPost