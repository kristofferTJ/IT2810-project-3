import axios from 'axios';
import { setAlert } from './alert';
import setAuthToken from '../../utils/setAuthToken';

// Types

export type loginAction = {
     type: string;
     payload: any;
};

export type loginType = {
    email: string;
    password: string;
};
 

// Actions

const USER_LOADED = 'USER_LOADED';
const AUTH_ERROR = 'AUTH_ERROR';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';


// Reducer

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

export default function loginReducer(state = initialState, action: loginAction) {
  switch (action.type) {
    case USER_LOADED:
      return{
          ...state,
          isAuthenticated: true,
          loading: false,
          user: action.payload
      }
      case LOGIN_SUCCESS:
          localStorage.setItem('token', action.payload.token)
          return {
              ...state,
              ...action.payload,
              isAuthenticated: true,
              loading: false
          }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
    default:
      return state;
  }
}

// Action creator
export const loadUser = () => async (dispatch: Function) => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    try {
        const response = await axios.get(`http://loaclhost:8000/api/auth`)

        dispatch({
            type: USER_LOADED,
            payload: response.data
        })
    } catch(err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

export const login = ({email, password}: loginType) => async (dispatch: Function) => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    const body = JSON.stringify({email, password})

    try {
        const response = await axios.post(`http://localhost:8000/api/auth`, body, config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        })

        dispatch(loadUser())
    } catch (error) {
        const err = error.response.data.errors

        if(err) {
            err.forEach((value: any) => dispatch(setAlert(value.msg, 'danger')))
        }

        dispatch({
            type: LOGIN_FAIL
        })
    }
}


export const logout = () => ({
    type: LOGOUT
})