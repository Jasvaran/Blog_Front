/* eslint-disable no-unused-vars */
import './LogIn.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Nav from '../Nav/Nav'
import { useEffect, useState } from 'react'
function LogIn(props) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isAuthenticated, setIsAuthenticated] = useState(false)


    useEffect(() => {
        console.log(username)
    })

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

        const response = await fetch('http://localhost:3000/user/login', {
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
                console.log('response before .json()------>' , response)

                return response.json()
            })
            .then((response) => {
                console.log(response)
                //TODO: add form validation classes if log in info is incorrect
                // and reroute to home page upon successfull login

                if (response.user){
                    setIsAuthenticated(true)
                    
                }

            })

    }

    return (
        <>
            <Nav />
            <h1 className='text-center mt-5'>Log In</h1>
            <div className="container-fluid d-flex flex-column justify-content-start align-items-center" style={{height: "100vh"}}>
                <form action="" className='d-flex flex-column justify-content-center' style={{height: "500px"}} onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" name="username" id='username' className="form-control" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" id='password' className="form-control" onChange={handleChange} />
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