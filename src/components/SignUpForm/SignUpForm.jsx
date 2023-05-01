import { useFormik } from "formik";
import { SignUpSchema } from "../../schemas/SignUp";
import httpService from "../../services/Http/HttpService";
import FormInput from "../FormInput/FormInput";
import "./SignUpForm.scss";
import Button from "../Button/Button";

const SignUpForm = () => {
  const onSubmit = async (values, actions) => {
    try {
      const { confirmPassword, ...formData } = values;
      const data = await httpService.post("auth/signup", formData);
      actions.resetForm();
    } catch (error) {
      alert(error.message);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: SignUpSchema,
      onSubmit,
    });

  return (
    <div className="sign-up">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="First Name"
          type="text"
          required
          onChange={handleChange}
          name="firstName"
          onBlur={handleBlur}
          value={values.firstName}
        />
        {errors.firstName && touched.firstName && <p>{errors.firstName}</p>}
        <FormInput
          label="Last Name"
          type="text"
          required
          onChange={handleChange}
          name="lastName"
          onBlur={handleBlur}
          value={values.lastName}
        />
        {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}
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
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          onBlur={handleBlur}
          value={values.confirmPassword}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p>{errors.confirmPassword}</p>
        )}
        <Button children="Sign Up" type="submit" />
      </form>
    </div>
  );
};

export default SignUpForm;
