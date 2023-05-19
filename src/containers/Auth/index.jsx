import SignUpForm from "../../components/SignUpForm";
import SignInForm from "../../components/SignInForm";
import { AuthContainer } from "./index.styles";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Auth = () => {
  return (
    <AuthContainer>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <SignInForm />
      </GoogleOAuthProvider>
      <SignUpForm />
    </AuthContainer>
  );
};

export default Auth;
