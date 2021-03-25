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
    setAuthenticate(state, action: PayloadAction<AuthType>) {
      return {
        ...state.user,
        user: {
          uid: action.payload.user.uid,
          authenticated: action.payload.user.authenticated,
        }
      }
    },
    removeAuthenticate(state) {
      return {
        ...state.user,
        user: {
          uid: '',
          authenticated: false,
        }
      }
    }
  }
})

export const { setAuthenticate, removeAuthenticate } = authSlice.actions

export const loginAsync = (email: string, password: string): AppThunk => dispatch => {
  auth.signInWithEmailAndPassword(email, password)
}

export const selectAuth = (state: RootState) => state.auth.user

export default authSlice.reducer
