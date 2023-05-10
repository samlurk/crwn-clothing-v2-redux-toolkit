import { useFormik } from "formik";
import { SignInSchema } from "../../schemas/SignIn";
import httpService from "../../services/Http/HttpService";
import FormInput from "../FormInput/FormInput";
import "./SignInForm.scss";
import Button from "../Button/Button";
import { useGoogleLogin } from "@react-oauth/google";
import { UserContext } from "../../contexts/User";
import { AuthContext } from "../../contexts/Auth";
import { useContext } from "react";

const SignInForm = () => {
  const { currentUser } = useContext(UserContext);
  const { login } = useContext(AuthContext);
  console.log(currentUser);

  const onSubmit = async (values, actions) => {
    try {
      const { ...user } = values;
      const { ACCESS_TOKEN } = await httpService.post("auth/login", user);
      login(ACCESS_TOKEN);
      actions.resetForm();
    } catch (error) {
      alert(error.message);
    }
  };

  const signInWithGoogle = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      try {
        const { ACCESS_TOKEN } = await httpService.post("auth/login-google", {
          code: codeResponse.code,
        });
        login(ACCESS_TOKEN);
      } catch (error) {
        if (
          error.message !== "The email/username doesn't exists" ||
          error.message !== "Incorrect password"
        )
          console.log(error);
        alert(error.message);
      }
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: SignInSchema,
      onSubmit,
    });

  return (
    <div className="sign-in">
      <h2>Already have an account?</h2>
      <span>Sign in with your email or username and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email or Username"
          type="text"
          isError={errors.username && touched.username}
          errorMessageResponse={errors.username}
          required
          onChange={handleChange}
          name="username"
          onBlur={handleBlur}
          value={values.username}
        />
        <FormInput
          label="Password"
          type="password"
          isError={errors.password && touched.password}
          errorMessageResponse={errors.password}
          required
          onChange={handleChange}
          name="password"
          onBlur={handleBlur}
          value={values.password}
        />
        <div className="form__buttons">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
