import React, { useState } from 'react'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function login(e){
    fetch('http://localhost:4000/login',{
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }, // Corrected typo here
    })
  }
  return (
    <div>
        
        <form className='login'  onSubmit={login}>
        <h1>Log in</h1>
        <input
          type="text"
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LoginPage

