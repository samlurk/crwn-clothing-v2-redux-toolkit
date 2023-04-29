import { GoogleOAuthProvider } from "@react-oauth/google";
import authService from "../../../services/Auth/AuthService";
import userService from "../../../services/User/userService";
import SignInWithGoogle from "./SignInWithGoogle";
import SignUpForm from "../../../components/SignUpForm/SignUpForm";

const SignIn = () => {
  return (
    <div>
      <h1>Sign In Page</h1>
      <SignInWithGoogle />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
