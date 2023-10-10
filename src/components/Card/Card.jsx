import PropTypes from 'prop-types'
import './Card.css'
function Card(props){

    console.log('card --->', props.obj)

    return (
        <>   
            <div className="card">
                <img src={'data:' + props.contentType + ';base64,' + props.image} alt="" className='card-img-top' />
                <div className="card-body">
                    <h1 className="card-title" style={{textAlign: 'center', fontSize: '20px'}}>
                        {props.title}
                    </h1>
                </div>
            </div>
        </>

    )
}

Card.propTypes = {
    contentType: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    obj: PropTypes.object
}


export default Card