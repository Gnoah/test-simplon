import axios from 'axios';
import { GET_ERRORS,SET_CURRENT_USER } from './type';
import setAuthToken from '../setAuthtoken';
import jwt_decode from 'jwt-decode';

export const registerUser = (user, history) => dispatch => {
    axios.post('https://simplontest04.herokuapp.com/register', user)
            .then(res => {
                history.push('/login');
                localStorage.setItem('login', true)
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const loginUser = (user,history) => dispatch => {
    axios.post('https://simplontest04.herokuapp.com/login', user)
            .then(res => {
                // console.log(res.data);
                const { token } = res.data;
                localStorage.setItem('jwtToken', res.data.nom);
                localStorage.setItem('id', res.data.id);
                localStorage.setItem('login', true)
                console.log(res.data)
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
                if(res.data.password!== 'Incorrect Password')
                {
                  window.location='/admin';
               }
                
            })
}
export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    localStorage.setItem('login', false);
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/login');
}
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}