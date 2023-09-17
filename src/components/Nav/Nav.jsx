import { Link } from "react-router-dom"

function Nav(){

    return (
        <>
            <nav className="navbar navbar-expand d-flex justify-content-around">
                    <span className="navbar-brand" style={{width: "500px"}}>Odin Project Blog</span>
                    <ul className="container d-flex flex-row justify-content-evenly" style={{listStyle: "none"}}>
                        <Link to='/'>
                            <li className="nav-item">
                                <button type="button" className="btn btn-primary btn-sm">Home</button>
                            </li>
                        </Link>
                        <Link to='/login'>
                            <li className="nav-item">
                                <button type="button" className="btn btn-primary btn-sm">Log In</button>
                            </li>
                        </Link>
                    </ul>
            </nav>
        </>
    )
}

export default Nav