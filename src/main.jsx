import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LogIn from './components/LogIn/LogIn.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import BlogPost from './components/BlogPost/BlogPost.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from './redux/store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/Blog_Front",
    element: <App />
  },
  {
    path: "/login",
    element: <LogIn/>
  },
  {
    path: "/sign-up",
    element: <SignUp />
  },
  {
    path: "/posts/:id",
    element: <BlogPost />

  }


])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
