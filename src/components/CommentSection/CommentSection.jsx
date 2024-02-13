/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from 'react'
import './CommentSection.css'
import PropTypes from 'prop-types'
import CommentCard from '../CommentCard/CommentCard'
function  CommentSection(props){

    const [listOfComments, setListOfComments] = useState([])

    useEffect(() => {


        async function getComments(){

            const response = await fetch('https://blog-api-9r0h.onrender.com/comments', {
                method: "GET",
                mode: 'cors',
                credentials: 'include'
            })
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    let filteredData = data.filter((comment) => comment.post === props.post._id)
                    setListOfComments(filteredData)
                })
        }

        getComments()                   

    }, [props.post._id])



    return (
        <div className="container-fluid" id="main-container">
            {listOfComments.map((comment,index) => {
                return <CommentCard key={index} commentObj={comment}/>
            })}
        </div>
    )
}

CommentSection.propTypes = {
    post: PropTypes.object
}

export default CommentSection