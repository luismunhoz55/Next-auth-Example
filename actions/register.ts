"use server";

import bcrypt from "bcryptjs";
import { Values } from "@/lib/interfaces";
import { PrismaClient } from "@prisma/client";

export const register = async (values: Values) => {
  const db = new PrismaClient();

  console.log("Vai tomar no cu");

  if (!values.email || !values.password) {
    return { error: "Invalid fields" };
  }

  const { email, password } = values;

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { error: "Email already in use" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return { success: "User created!" };
};
