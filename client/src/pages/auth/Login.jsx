import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault()
    let config = {
      method: 'POST',
      headers: {'Content-Type':'Application/json'},
      body: JSON.stringify({email, password}),
    }
    const response = await fetch("http://localhost:3001/login", config)
    .then((res) => res.json())
    .catch(err => console.log(err));

    if (response.ok) {
      console.log('ok')
      navigate('/service')
    }else{
      console.log('wrong credentials')
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

        <button className="btn btn-primary">LogIn</button>
      </form>
    </>
  );
};
