"use client";

import { login } from "@/actions/login";
import { Values } from "@/lib/interfaces";
import { FormEvent, startTransition } from "react";

const Login = () => {
  const handleLogin = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) return null;

    onSubmit({ email, password });
  };

  const onSubmit = (values: Values) => {
    startTransition(() => {
      login(values);
    });
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <span className="text-2xl font-bold">Login</span>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 bg-gray-100 rounded p-5"
      >
        <input
          className="rounded p-2 border border-gray-400"
          placeholder="Email: "
          type="text"
          name="email"
        />
        <input
          className="rounded p-2 border border-gray-400 text-black"
          placeholder="Password: "
          type="password"
          name="password"
        />
        <button className="bg-black text-white rounded p-2" type="submit">
          Login
        </button>
      </form>
      <a href="/auth/register">Register</a>
    </div>
  );
};

export default Login;
