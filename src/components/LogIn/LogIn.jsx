import './LogIn.css'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import { useState } from 'react'
function LogIn() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleChange(e){
        if (e.target.id === 'username'){
            setUsername(e.target.value)
        }
        if (e.target.id === 'password'){
            setPassword(e.target.value)
        }
    }

    return (
        <>
            <Nav />
            <h1 className='text-center mt-5'>Log In</h1>
            <div className="container-fluid d-flex flex-column justify-content-start align-items-center" style={{height: "100vh"}}>
                <form action="" className='d-flex flex-column justify-content-center' style={{height: "500px"}}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" name="username" id='username' className="form-control" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="text" name="password" id='password' className="form-control" />
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