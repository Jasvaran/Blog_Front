import "./SignUp.css"
import Nav from "../Nav/Nav"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"




function SignUp(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [userNameError, setUsernameError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [userNameClass, setUserNameClass] = useState("form-control")
    const [passwordClass, setPasswordClass] = useState("form-control")




    useEffect(() => {
        sortErrors(errors)
    }, [errors])



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
        e.preventDefault()

        
        // eslint-disable-next-line no-unused-vars
        const response = await fetch('http://localhost:3000/user',{
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((response) => {
                console.log('before stringify', response)
                console.log(JSON.stringify(response))
                if (response.errors){
                    console.log('response returned errors')
                    setErrors(response.errors)
                }
                if (response.username){
                    console.log('response returned user object')
                    console.log('User created')
                    routeChange()
                }
            })

    }

    function sortErrors(errors){
        errors.forEach((err) => {
            if (err.path === 'username'){
                setUsernameError(err.msg)
                setUserNameClass(prevState => prevState + ' invalid')
            }
            if (err.path === 'password'){
                setPasswordError(err.msg)
                setPasswordClass(prevState => prevState + ' invalid')

            }

        })
    }

    



    return (
        <>
            <Nav />
            <h1 className="text-center mt-5">Sign Up</h1>
            <div className="container d-flex justify-content-center align-items-center">
                <form action="" onSubmit={handleSubmit} className="d-flex flex-column justify-content-center" style={{height: "500px"}}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <span className="ms-3 error">{userNameError}</span>
                        <input type="text" name="username" id="username" className={userNameClass} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <span className="ms-3 error">{passwordError}</span>
                        <input type="password" name="password" id="password" className={passwordClass} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg mb-3">Submit</button>
                </form>
            </div>
        </>
    )
}

export default SignUp