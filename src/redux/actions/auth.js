import axios from "axios";
import { toast } from "react-toastify";
import {
  editProfileReducer,
  loginReducer,
  logoutReducer,
} from "../reducers/authSlice";

export const login =
  (navigate, email, password, setIsLoading) => async (dispatch) => {
    // make loading
    setIsLoading(true);

    let data = JSON.stringify({
      email,
      password,
    });

    let config = {
      method: "post",
      url: `${import.meta.env.VITE_BACKEND_API}/api/auth/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      const response = await axios.request(config);

      // get and save the token to local storage
      const { data } = response.data;
      const { token, user } = data;

      // Change the token value in the reducer
      dispatch(loginReducer({ token, user }));

      // redirect to home
      navigate("/"); // it will be not consistent, so alternative we use window until we used the state management
    } catch (error) {
      toast.error(error?.response?.data?.error?.message);

      dispatch(logout());
    }

    setIsLoading(false);
  };

export const loginWithGoogle = (navigate, accessToken) => async (dispatch) => {
  let data = JSON.stringify({
    access_token: accessToken,
  });

  let config = {
    method: "post",
    url: `${import.meta.env.VITE_BACKEND_API}/api/auth/google-login`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios.request(config);

    // get and save the token to local storage
    const { data } = response.data;
    const { token, user } = data;

    // Change the token value in the reducer
    dispatch(loginReducer({ token, user }));

    // redirect to home
    navigate("/"); // it will be not consistent, so alternative we use window until we used the state management
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);

    dispatch(logout());
  }
};

export const register =
  (formData, setIsLoading, navigate) => async (dispatch) => {
    // make loading
    setIsLoading(true);

    let config = {
      method: "post",
      url: `${import.meta.env.VITE_BACKEND_API}/api/auth/register`,
      data: formData,
    };

    try {
      const response = await axios.request(config);

      // get and save the token to local storage
      const { data } = response.data;
      const { token } = data;
      localStorage.setItem("token", token);

      // redirect to home
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.error?.message);

      dispatch(logout());
    }

    setIsLoading(false);
  };

export const getProfile =
  (navigate, successRedirect, errorRedirect) => async (dispatch, getState) => {
    const { token } = getState().auth;

    if (!token) {
      // because token is not valid, we will delete it from local storage
      dispatch(logout());

      //  if there are any error redirection we will redirect it
      if (navigate) {
        if (errorRedirect) {
          navigate(errorRedirect);
        }
      }
      return;
    }

    let config = {
      method: "get",
      url: `${import.meta.env.VITE_BACKEND_API}/api/auth/profile`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.request(config);
      const { data } = response.data;

      // set user by response
      dispatch(loginReducer({ user: data }));

      // if there are any success redirection we will redirect it
      if (navigate) {
        if (successRedirect) {
          navigate(successRedirect);
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);

      // because token is not valid, we will delete it from local storage
      dispatch(logout());

      //  if there are any error redirection we will redirect it
      if (navigate) {
        if (errorRedirect) {
          navigate(errorRedirect);
        }
      }
    }
  };

export const editProfile =
  (formData, setIsLoading, navigate) => async (dispatch, getState) => {
    setIsLoading(true);
    const { token } = getState().auth;

    let config = {
      method: "patch",
      url: `${import.meta.env.VITE_BACKEND_API}/api/auth/edit-profile`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: formData,
    };

    try {
      const response = await axios.request(config);
      const { data } = response.data;
      dispatch(editProfileReducer({ user: data }));
      navigate("/profile");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setIsLoading(false);
      navigate("/profile");
    }
  };

export const logout = () => (dispatch) => {
  dispatch(logoutReducer());
};
