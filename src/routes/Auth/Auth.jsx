import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";
import "./Auth.scss";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Auth = () => {
  return (
    <div className="auth">
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <SignInForm />
      </GoogleOAuthProvider>

      <SignUpForm />
    </div>
  );
};

export default Auth;
