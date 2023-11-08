import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import ErrorAlert from "./error_alert";
import { useState } from "react";
import Link from "next/link";
export default function LoginTabPanel({ lang, dict }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState();
  const route = useRouter();
  const onSubmit = (data) => {
    if (data.email === "test@gmail.com" && data.password === "test123") {
      setErrorMessage(undefined);
      localStorage.setItem("userLoged", true);
      route.push(`/${lang}/home`);
      return;
    }
    setErrorMessage(dict.login.wrongInputs);
  };
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-lg font-medium leading-6 text-gray-900"
          >
            {dict.login.email.label}
          </label>
          <div className="mt-2">
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="pascali.mustari@gmail.com"
              className="block w-full rounded-lg border-0 py-3 px-6 text-gray-900 shadow-sm ring-0 placeholder:text-gray-400 outline-none sm:text-lg sm:leading-6"
              {...register("email", {
                required: dict.login.email.required,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: dict.login.email.invalid,
                },
              })}
            />
            {errors.email && <ErrorAlert text={errors.email.message} />}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-lg font-medium leading-6 text-gray-900"
            >
              {dict.login.password.label}
            </label>
            <div className="text-lg">
              <Link href="#" className="font-semibold text-black underline">
                {dict.login.forgotPassword}
              </Link>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              {...register("password", {
                required: dict.login.password.required,
                minLength: {
                  value: 5,
                  message: dict.login.password.minLength,
                },
              })}
              type="password"
              autoComplete="current-password"
              placeholder="***********************"
              className="block w-full rounded-lg border-0 py-3 px-6 text-gray-900 shadow-sm ring-0 placeholder:text-gray-400 outline-none sm:text-lg sm:leading-6"
            />
            {errors.password && <ErrorAlert text={errors.password.message} />}
          </div>
        </div>
        {errorMessage && <ErrorAlert text={errorMessage} />}
        <div className="space-y-2">
          <p className="text-gray-500 text-center text-base">
            {dict.login.description}
          </p>
          <button
            type="submit"
            className="flex w-full justify-center rounded-lg bg-white py-3 px-6 text-lg font-semibold leading-6 text-black shadow-sm outline-none outline-offset-0"
          >
            {dict.login.loginButton}
          </button>
        </div>
      </form>
    </div>
  );
}
