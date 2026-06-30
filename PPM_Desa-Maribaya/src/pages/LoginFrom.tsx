import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  loginSchema,
  type LoginFormData,
} from "../schemas/loginSchema";

export default function LoginForm() {
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // Jika sudah login langsung ke akun
  if (token) {
    return <Navigate to="/akun" replace />;
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
const onSubmit = async (data: LoginFormData) => {
  try {
    setMessage("");

    // Simulasi request API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Login Admin
    if (
      data.email === "admin@gmail.com" &&
      data.password === "admin123"
    ) {
      localStorage.setItem("token", "admin-token");
      localStorage.setItem("role", "admin");
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: "Administrator",
          email: "admin@gmail.com",
          role: "admin123",
        })
      );

      setMessage("Login Admin berhasil");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

      return;
    }

    // Login User
    if (
      data.email === "galuh@gmail.com" &&
      data.password === "galuh123"
    ) {
      localStorage.setItem("token", "user-token");
      localStorage.setItem("role", "user");
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: "Galuh",
          email: "galuh@gmail.com",
          role: "user",
        })
      );

      setMessage("Login User berhasil");

      setTimeout(() => {
        navigate("/");
      }, 1000);

      return;
    }

    setMessage("Email atau password salah.");
  } catch (error) {
    setMessage("Terjadi kesalahan.");
  }
};

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold text-slate-800">
          Login
        </h1>

        <p className="mb-6 text-center text-slate-500">
          Silakan masuk ke akun Anda
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Masukkan email"
              {...register("email")}
              className={`w-full rounded-lg border px-4 py-3 outline-none transition
                ${
                  errors.email
                    ? "border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                }`}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Masukkan password"
              {...register("password")}
              className={`w-full rounded-lg border px-4 py-3 outline-none transition
                ${
                  errors.password
                    ? "border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                }`}
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-green-400"
          >
            {isSubmitting
              ? "Loading..."
              : "Login"}
          </button>
        </form>

        {/* Message */}
        {message && (
          <div
            className={`mt-5 rounded-lg p-3 text-center font-medium ${
              message === "Login berhasil"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}