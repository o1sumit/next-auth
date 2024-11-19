import * as Yup from "yup";

export const signupValidation = Yup.object({
  firstName: Yup.string()
    .max(20, "Too long")
    .required("First name is required"),
  lastName: Yup.string().max(20, "Too long").required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Too short")
    .max(20, "Too long")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const loginValidation = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});
