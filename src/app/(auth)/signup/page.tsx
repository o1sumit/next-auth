"use client";

import CombinationTextBtn from "@/components/combinationText/CombinationTextBtn";
import PriamryBtn from "@/components/button/PriamryBtn";
import InputComponent from "@/components/input/Input";
import { signupInitialValues } from "@/utils/initialValues/auth.initialValue";
import { useFormik } from "formik";
import { signupValidation } from "@/utils/validations/auth.validation";
import { signup } from "@/function/auth/auth.function";

const Page = () => {
  const formik = useFormik({
    initialValues: signupInitialValues,
    validationSchema: signupValidation,
    onSubmit: (values) => {
      signup(values);
    },
  });

  return (
    <form className="flex flex-col" onSubmit={formik.handleSubmit}>
      <InputComponent
        placeholder="First Name"
        type="text"
        {...formik.getFieldProps("firstName")}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        errorMessage={formik.errors.firstName}
      />
      <InputComponent
        placeholder="Last Name"
        type="text"
        {...formik.getFieldProps("lastName")}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        errorMessage={formik.errors.lastName}
      />
      <InputComponent
        placeholder="Email"
        type="email"
        {...formik.getFieldProps("email")}
        error={formik.touched.email && Boolean(formik.errors.email)}
        errorMessage={formik.errors.email}
      />
      <InputComponent
        placeholder="Password"
        type="password"
        {...formik.getFieldProps("password")}
        error={formik.touched.password && Boolean(formik.errors.password)}
        errorMessage={formik.errors.password}
      />
      <InputComponent
        placeholder="Confirm Password"
        type="password"
        {...formik.getFieldProps("confirmPassword")}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        errorMessage={formik.errors.confirmPassword}
      />
      <CombinationTextBtn
        btnText="Sign Up"
        text="Already have an account?"
        href="login"
      />
      <PriamryBtn btnText="Sign Up" type="submit" />
    </form>
  );
};

export default Page;
