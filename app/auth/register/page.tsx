"use client";

import { Values } from "@/lib/interfaces";
import { register } from "@/actions/register";
import { FormEvent, startTransition } from "react";

const Register = () => {
  const handleRegister = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) return null;

    onSubmit({ email, password });
  };

  const onSubmit = (values: Values) => {
    startTransition(() => {
      register(values);
    });
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <span className="text-2xl font-bold">Register</span>
      <form
        onSubmit={handleRegister}
        className="flex flex-col gap-4 bg-gray-100 rounded p-5"
      >
        <input
          className="rounded p-2 border border-gray-400 text-black"
          type="text"
          name="email"
          placeholder="Email:"
        />
        <input
          className="rounded p-2 border border-gray-400 text-black"
          type="password"
          name="password"
          placeholder="Password:"
        />
        <button className="bg-black text-white rounded p-2" type="submit">
          Register
        </button>
      </form>
      <a href="/auth/login">Login</a>
    </div>
  );
};

export default Register;
