import './CommentCard.css'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
function CommentCard(props) {

    const [date, setDate] = useState("")
    
    useEffect(() => {
        setDate(new Date(props.commentObj.timestamp).toString())
    }, [])

    return (
        <div className="card" id='card-container'>
            <div className="card-header">
                {props.commentObj.user.username}
                <br></br>
                {date}
            </div>
            <div className="card-body">
                {props.commentObj.text}
            </div>
        </div>
    )
}

CommentCard.propTypes = {
    commentObj: PropTypes.object
}

export default CommentCard