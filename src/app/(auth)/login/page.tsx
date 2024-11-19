"use client";

import CombinationTextBtn from "@/components/combinationText/CombinationTextBtn";
import { loginInitialValues } from "@/utils/initialValues/auth.initialValue";
import { loginValidation } from "@/utils/validations/auth.validation";
import PriamryBtn from "@/components/button/PriamryBtn";
import InputComponent from "@/components/input/Input";
import { login } from "@/function/auth/auth.function";
import { useFormik } from "formik";

const Page = () => {
  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidation,
    onSubmit: (values) => {
      login(values);
    },
  });

  return (
    <form className="flex flex-col" onSubmit={formik.handleSubmit}>
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
      <CombinationTextBtn
        btnText="Login"
        text="Don't have an account?"
        href="/signup"
      />
      <PriamryBtn btnText="Login" type="submit" />
    </form>
  );
};

export default Page;
