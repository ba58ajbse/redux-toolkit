import React, { useState, useEffect, FormEvent } from 'react';
import { auth } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux'
import { selectAuth, setAuthenticate, removeAuthenticate } from './authSlice'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const userState = useSelector(selectAuth)

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setAuthenticated(true)
  //     } else {
  //       setAuthenticated(false)
  //     }
  //   })
  // },[])
  // console.log({userState})

  const logIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await auth.signInWithEmailAndPassword(email, password)
      if (res.user) {
        const payload = {
          user: {
            uid: res.user.uid,
            authenticated: true,
          }
        }
        dispatch(setAuthenticate(payload))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const logOut = async () => {
    await auth
            .signOut()
            .then((res) => dispatch(removeAuthenticate()))
            .catch((error) => console.log(error))

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
    {userState.authenticated &&
      <>
        <button type='button' onClick={logOut}>logout</button>
        <div>
          <p>{userState.uid}</p>
        </div>
      </>
      }
    </>
  )
}

export default Login;
