import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../../redux/actions/auth";

const GoogleLogin = ({ text }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) =>
      dispatch(loginWithGoogle(navigate, codeResponse.access_token)),
  });

  return (
    <Button
      type="button"
      size="large"
      variant="contained"
      fullWidth
      onClick={() => login()}
      sx={{
        bgcolor: "white",
        color: "black",
        "&:hover": {
          bgcolor: "lightgray", // Background color on hover
        },
      }}
    >
      {text}
    </Button>
  );
};

GoogleLogin.propTypes = {
  text: PropTypes.string,
};

export default GoogleLogin;
