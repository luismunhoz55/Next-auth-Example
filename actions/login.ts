"use server";

import { signIn } from "@/auth";
import { Values } from "@/lib/interfaces";
import { defaultLoginRedirect } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values: Values) => {
  if (!(values.email && values.password)) {
    return { error: "Invalid fields" };
  }

  const { email, password } = values;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: defaultLoginRedirect,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};
