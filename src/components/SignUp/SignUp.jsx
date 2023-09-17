import "./SignUp.css"
import Nav from "../Nav/Nav"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignUp(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    let navigate = useNavigate();
    
    const routeChange = () => {
        let path = `/login`
        navigate(path)
    }

 



    function handleChange(e) {
        if (e.target.id === 'username'){
            setUsername(e.target.value)
        }

        if (e.target.id === 'password'){
            setPassword(e.target.value)
        }
    }

    async function handleSubmit(e){
        // TODO : Display Errors in Form if validation fails
        // server crashes when creating a user that does pass validation?
        e.preventDefault()

        try {
                // eslint-disable-next-line no-unused-vars
                const response = await fetch('http://localhost:3000/user',{
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: `username=${username}&password=${password}`
                })
                    .then(response => response.json())
                    .then((response) => {
                        console.log(JSON.stringify(response))
                        console.log('successfully created user')
                        routeChange()
                    })
        } catch (error) {
                console.log("Error in creating user")
        }

    }



    return (
        <>
            <Nav />
            <h1 className="text-center mt-5">Sign Up</h1>
            <div className="container d-flex justify-content-center align-items-center">
                <form action="" onSubmit={handleSubmit} className="d-flex flex-column justify-content-center" style={{height: "500px"}}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" name="username" id="username" className="form-control" onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" id="password" className="form-control" onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg mb-3">Submit</button>
                </form>
            </div>
        </>
    )
}

export default SignUp