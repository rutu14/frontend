import axios from 'axios'
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  MERCHANT_LOGIN_FAIL,
  MERCHANT_LOGIN_REQUEST,
  MERCHANT_LOGIN_SUCCESS,
  MERCHANT_LOGOUT,
  MERCHANT_REGISTER_FAIL,
  MERCHANT_REGISTER_REQUEST,
  MERCHANT_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_DETAILS_RESET,
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_REQUEST,
} from './types'
// import { ORDER_LIST_MY_RESET } from '../constants/orderConstants'

const baseURL = 'http://localhost:8088/account/'

export const login = ( email,password ) => async (dispatch) => {
  try {
	  dispatch({ type: MERCHANT_LOGIN_REQUEST })
      const config = { headers: { 'Content-Type': 'application/json' } }
      const { data } = await axios.post( baseURL + 'signIn',{ email,password, role:'Merchant' },config)
      dispatch({ type: MERCHANT_LOGIN_SUCCESS, payload: data })
      localStorage.setItem('merchantInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({ type: MERCHANT_LOGIN_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('merchantInfo')
  // localStorage.removeItem('cartItems')
  // localStorage.removeItem('shippingAddress')
  // localStorage.removeItem('paymentMethod')
  dispatch({ type: MERCHANT_LOGOUT })
//   dispatch({ type: USER_DETAILS_RESET })
  // dispatch({ type: ORDER_LIST_MY_RESET })
//   dispatch({ type: USER_LIST_RESET })
//   document.location.href = '/login'
}

export const register = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: MERCHANT_REGISTER_REQUEST })
	const config = { headers: { 'Content-Type': 'application/json' } }
    const { data } = await axios.post( baseURL + 'createUser',{ email, password,role:'Merchant' },config )
    dispatch({ type: MERCHANT_REGISTER_SUCCESS, payload: data })
    /* 
	dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    localStorage.setItem('userInfo', JSON.stringify(data))
	*/
  } catch (error) {
    dispatch({ type: MERCHANT_REGISTER_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

// export const getUserDetails = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: USER_DETAILS_REQUEST,
//     })

//     const {
//       userLogin: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     const { data } = await axios.get(`/api/users/${id}`, config)

//     dispatch({
//       type: USER_DETAILS_SUCCESS,
//       payload: data,
//     })
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     if (message === 'Not authorized, token failed') {
//       dispatch(logout())
//     }
//     dispatch({
//       type: USER_DETAILS_FAIL,
//       payload: message,
//     })
//   }
// }

// export const updateUserProfile = (user) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: USER_UPDATE_PROFILE_REQUEST,
//     })

//     const {
//       userLogin: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     const { data } = await axios.put(`/api/users/profile`, user, config)

//     dispatch({
//       type: USER_UPDATE_PROFILE_SUCCESS,
//       payload: data,
//     })
//     dispatch({
//       type: USER_LOGIN_SUCCESS,
//       payload: data,
//     })
//     localStorage.setItem('userInfo', JSON.stringify(data))
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     if (message === 'Not authorized, token failed') {
//       dispatch(logout())
//     }
//     dispatch({
//       type: USER_UPDATE_PROFILE_FAIL,
//       payload: message,
//     })
//   }
// }

// export const listUsers = () => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: USER_LIST_REQUEST,
//     })

//     const {
//       userLogin: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     const { data } = await axios.get(`/api/users`, config)

//     dispatch({
//       type: USER_LIST_SUCCESS,
//       payload: data,
//     })
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     if (message === 'Not authorized, token failed') {
//       dispatch(logout())
//     }
//     dispatch({
//       type: USER_LIST_FAIL,
//       payload: message,
//     })
//   }
// }

// export const deleteUser = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: USER_DELETE_REQUEST,
//     })

//     const {
//       userLogin: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     await axios.delete(`/api/users/${id}`, config)

//     dispatch({ type: USER_DELETE_SUCCESS })
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     if (message === 'Not authorized, token failed') {
//       dispatch(logout())
//     }
//     dispatch({
//       type: USER_DELETE_FAIL,
//       payload: message,
//     })
//   }
// }

// export const updateUser = (user) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: USER_UPDATE_REQUEST,
//     })

//     const {
//       userLogin: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     const { data } = await axios.put(`/api/users/${user._id}`, user, config)

//     dispatch({ type: USER_UPDATE_SUCCESS })

//     dispatch({ type: USER_DETAILS_SUCCESS, payload: data })

//     dispatch({ type: USER_DETAILS_RESET })
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     if (message === 'Not authorized, token failed') {
//       dispatch(logout())
//     }
//     dispatch({
//       type: USER_UPDATE_FAIL,
//       payload: message,
//     })
//   }
// }