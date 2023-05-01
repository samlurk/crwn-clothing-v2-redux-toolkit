import { useFormik } from "formik";
import { SignInSchema } from "../../schemas/SignIn";
import httpService from "../../services/Http/HttpService";
import FormInput from "../FormInput/FormInput";
import "./SignInForm.scss";
import Button from "../Button/Button";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const SignInForm = () => {
  const onSubmit = async (values, actions) => {
    try {
      const { confirmPassword, ...formData } = values;
      const data = await httpService.post("auth/signup", formData);
      actions.resetForm();
    } catch (error) {
      alert(error.message);
    }
  };

  const signIn = async (credentialResponse) => {
    try {
      const datos = await httpService.post("auth/login-google", {
        token: credentialResponse.credential,
      });
      console.log(datos);
    } catch (error) {}
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: SignInSchema,
      onSubmit,
    });

  return (
    <div className="sign-in">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email && <p>{errors.email}</p>}
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password && <p>{errors.password}</p>}
        <Button type="submit">Sign In</Button>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <GoogleLogin
            className="google-login-button"
            useOneTap={true}
            onSuccess={signIn}
          ></GoogleLogin>
        </GoogleOAuthProvider>
      </form>
    </div>
  );
};

export default SignInForm;
