import { LoginData, SignupData } from "@/interface/auth/auth.interface";

export const signupInitialValues: SignupData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const loginInitialValues: LoginData = {
  email: "",
  password: "",
};
