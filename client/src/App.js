import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import './pages/auth/Auth.css'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { UserContextProvider } from './UserContext'
import CreatePost from './components/Blog/CreatePost'
import PostPage from './components/Blog/PostPage'
import EditPost from './components/Blog/EditPost'



export default function App() {
  return (
    <UserContextProvider>
    <Router>

      <NavBar/>

      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/about-me' element={<AboutMe/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />

        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />

        <Route path='/create-post' element={<CreatePost/>} />
        <Route path='/post/:id' element={<PostPage/>} />
        <Route path='/edit/:id' element={<EditPost/>} />

      </Routes>

      <Footer/>

    </Router>
    </UserContextProvider>
  )
}

