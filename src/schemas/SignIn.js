import * as yup from "yup";

export const SignInSchema = yup.object().shape({
  username: yup.string().required("Email/Username is required"),
  password: yup.string().required("Password is required"),
});
