import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import authService from "../../../services/Auth/AuthService";
import userService from "../../../services/User/userService";
import httpService from "../../../services/Http/HttpService";
import { useEffect, useState } from "react";

const SignInWithGoogle = () => {
  const [authData, setAuthData] = useState("");
  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <GoogleLogin
          useOneTap={true}
          onSuccess={async (credentialResponse) => {
            const data = await httpService.post("auth/login-google", {
              token: credentialResponse.credential,
            });
            console.log(data);
            setAuthData(data);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        ></GoogleLogin>
      </GoogleOAuthProvider>
    </>
  );
};

export default SignInWithGoogle;
