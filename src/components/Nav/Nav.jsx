/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { authenticate } from "../../redux/userAuthSlice"

function Nav(){



    const isAuthenticated = useSelector((state) => state.userAuth)
    const dispatch = useDispatch()

    async function logOut(){
        
        const response = await fetch("https://blog-api-9r0h.onrender.com/user/logout", {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: 'include',  
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                dispatch(authenticate(false))
                console.log(data)
            })
    }

    return (
        <>
            <nav className="navbar navbar-expand d-flex justify-content-around">
                    <span className="navbar-brand" style={{width: "500px"}}>Odin Project Blog</span>
                    <ul className="container d-flex flex-row justify-content-evenly" style={{listStyle: "none"}}>
                        <Link to='/Blog_Front'>
                            <li className="nav-item">
                                <button type="button" className="btn btn-primary btn-sm">Home</button>
                            </li>
                        </Link>
                        { isAuthenticated.value ? <button className="btn btn-primary btn-sm" onClick={logOut}>Log Out</button> 
                        
                        :
                        
                        <Link to='/login'>
                            <li className="nav-item">
                                <button type="button" className="btn btn-primary btn-sm">Log In</button>
                            </li>
                        </Link> }
                        
                    </ul>
            </nav>
        </>
    )
}

export default Nav