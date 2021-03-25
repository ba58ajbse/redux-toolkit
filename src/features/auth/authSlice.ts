import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../app/store'
import { auth } from '../../firebase'

type AuthType = {
  user: {
    uid: string
    authenticated: boolean
  }
}

const initialState: AuthType = {
  user: {
    uid: '',
    authenticated: false,
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  }
})

// export const {} = authSlice.actions

export const loginAsync = (email: string, password: string): AppThunk => dispatch => {
  auth.signInWithEmailAndPassword(email, password)
}