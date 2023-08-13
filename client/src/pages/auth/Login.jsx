import React, {useContext, useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../UserContext";

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {setUserInfo} = useContext(UserContext)

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault()
    try{
      const URL = 'http://localhost:3001/login'
      const config = {
        method: 'POST',
        headers: {'Content-Type':'Application/json'},
        body: JSON.stringify({email, password}),
        credentials: 'include',
      }

      let response = await fetch(URL, config)

      if (response.ok) {
        response.json().then(userInfo => {
          setUserInfo(userInfo)
          navigate('/')
          console.log('login')
        })
        
      }else{
        console.log('wrong credentials')
      }
    
    }catch(err){
      console.log(err.message)
    }
  }

  return (
    <>
      <form 
        onSubmit={handleLogin}
        className="form bg-primary-subtle"
      >
        <h1 className="h3">LogIn</h1>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to={'/register'}>
          <button className="btn btn-danger">Register</button>
        </Link>
        <button className="btn btn-primary">LogIn</button>

      </form>
    </>
  );
};
