/* eslint-disable no-unused-vars */
import './CommentForm.css'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
function CommentForm(props) {

    const [comment, setComment] = useState("");




    function handleChange(e){
        e.preventDefault()
        if (e.target.id === 'comment-text'){
            setComment(e.target.value)
        }
    }

    async function createComment(e){

        const response = await fetch("https://blog-api-9r0h.onrender.com/comments", {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                text: comment,
                postId: props.post._id
            })
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
            })
        
    }

    return (

        <div className="container-fluid" id='main-container'>
            <form action="" onSubmit={createComment}>
                <div className="d-flex flex-column mb-3">
                    <label htmlFor="comment-text" className="form-label">Write your Comment In The Box Below</label>
                    <input type="text" className='form-control' name="comment-text" id="comment-text" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary btn-sm">Add Comment</button>
                </div>
            </form>
        </div>

    )
}

CommentForm.propTypes = {
    post: PropTypes.object
}


export default CommentForm