import React from 'react'

const LoginPage = () => {
  return (
    <div>
        
        <form className='login'>
        <h1>Log in</h1>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <button>Login</button>
        </form>
    </div>
  )
}

export default LoginPage