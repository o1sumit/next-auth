import { LoginData, SignupData } from "@/interface/auth/auth.interface";

export const signup = async (data: SignupData) => {
  console.log("signup function called", data);
};

export const login = async (data: LoginData) => {
  console.log("login function called", data);
};
