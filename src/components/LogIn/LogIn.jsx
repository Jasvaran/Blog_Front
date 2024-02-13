/* eslint-disable no-unused-vars */
import './LogIn.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Nav from '../Nav/Nav'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authenticate } from '../../redux/userAuthSlice'


function LogIn(props) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [usernameError, setUsernameError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [errors, setErrors] = useState([])
    const [usernameClass, setUsernameClass] = useState("form-control")
    const [passwordClass, setPasswordClass] = useState("form-control")

    useEffect(() => {
        sortErrors(errors)
    }, [errors])



    // redux. set isAuthenticated state to true if user log in is a success
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.userAuth)


    let navigate = useNavigate();

    function routeChange() {
        let path = '/'
        navigate(path)
    }

    function handleChange(e){
        if (e.target.id === 'username'){
            setUsername(e.target.value)
        }
        if (e.target.id === 'password'){
            setPassword(e.target.value)
        }
    }

    async function handleSubmit(e){
        
        e.preventDefault();

        const response = await fetch('https://blog-api-9r0h.onrender.com/user/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
            .then((response) => {
                // console.log('response before .json()------>' , response)

                return response.json()
            })
            .then((response) => {
                // console.log(response)

                if (response.user){
                    dispatch(authenticate(true))
                    routeChange()
                }
                
                if (response.error){
                    console.log('log in failed')
                    setErrors(response.error)
                }

            })

    }

    function sortErrors(err){
        if (err[0] === 'incorrect username'){
            setUsernameError(err[0])
            setUsernameClass(prevState => prevState + ' invalid')
        }
        if (err[0] === 'Incorrect password'){
            setPasswordError(err[0])
            setPasswordClass(prevState => prevState + ' invalid')
        }

    }

    return (
        <>
            <Nav />
            <h1 className='text-center mt-5'>Log In</h1>
            <div className="container-fluid d-flex flex-column justify-content-start align-items-center" style={{height: "100vh"}}>
                <form action="" className='d-flex flex-column justify-content-center' style={{height: "500px"}} onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <span className="ms-3 error">{usernameError}</span>
                        <input type="text" name="username" id='username' className={usernameClass} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" id='password' className={passwordClass} onChange={handleChange} required />
                        <span className="ms-3 error">{passwordError}</span>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg mb-3">Submit</button>
                    <div className="mb-3">
                        Dont Have an account? Click Here to <br></br>
                        <Link to="/sign-up">Sign Up</Link>
                    </div>
                </form>
            </div>
        
        </>
    )
}


export default LogIn