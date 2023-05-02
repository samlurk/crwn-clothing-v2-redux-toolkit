import { useFormik } from "formik";
import { SignInSchema } from "../../schemas/SignIn";
import httpService from "../../services/Http/HttpService";
import FormInput from "../FormInput/FormInput";
import "./SignInForm.scss";
import Button from "../Button/Button";
import { useGoogleLogin } from "@react-oauth/google";

const SignInForm = () => {
  const onSubmit = async (values, actions) => {
    try {
      const { ...user } = values;
      console.log(user);
      const data = await httpService.post("auth/login", user);
      console.log(data);
      actions.resetForm();
    } catch (error) {
      alert(error.message);
    }
  };

  const signInWithGoogle = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      try {
        const tokens = await httpService.post("auth/login-google", {
          code: codeResponse.code,
        });
        console.log(tokens);
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
          required
          onChange={handleChange}
          name="username"
          onBlur={handleBlur}
          value={values.username}
        />
        {errors.username && touched.username && <p>{errors.username}</p>}
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
        <div className="sign-in__buttons">
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
