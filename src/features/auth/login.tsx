import React, { useState, useEffect, FormEvent } from 'react';
import { auth } from '../../firebase';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true)
      } else {
        setAuthenticated(false)
      }
    })
  })

  const logIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await auth.signInWithEmailAndPassword(email, password)
      console.log({res})
      auth.onAuthStateChanged((user) => {
        console.log({user})
      })
    } catch (error) {
      console.log(error)
    }
  }
  
  const logOut = () => {
    auth.signOut()
  }
  return (
    <>
    <form onSubmit={logIn}>
      <div>
        <label htmlFor="email">Email: </label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
    </form>
    {authenticated &&
      <button type='button' onClick={logOut}>logout</button>}
    </>
  )
}

export default Login;