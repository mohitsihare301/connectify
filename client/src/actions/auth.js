import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';


/* Action creaters are asynchronous , that's why we are using redux thunk 
we have a function that return an asynchronous function with a dispatch */
export const signin = (formData, navigate) => async (dispatch) => {
  try {
    // log in the user .....
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    //sign up the user....
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    navigate('/');
  } catch (error) {
    console.log(error);
  }
};
