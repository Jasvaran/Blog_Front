import { useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import './App.css'
import Nav from './components/Nav/Nav'
import { useNavigate } from 'react-router-dom'

function App() {

  const isAuthenticated = useSelector((state) => state.userAuth)
  let navigate = useNavigate()

  useEffect(() => {
    // route user to login page if user hasn't logged in yet.
    // TODO: Remove redirection because Anonymous users should be able to comment on blog posts
    if (isAuthenticated.value === false){
      navigate('/login')
    }
  })


  return (
    <div className="container-fluid" id='main-container'>
      <div className="header">
        <Nav />
      </div>
      <div className="body">
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default App
