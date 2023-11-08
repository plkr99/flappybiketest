import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import ErrorAlert from "./error_alert";
export default function SignupTabPanel({ lang, dict, setDefaultIndex }) {
  const route = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setDefaultIndex(0);
    reset();
    return;
  };
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-lg font-medium leading-6 text-gray-900"
          >
            {dict.signup.email.label}
          </label>
          <div className="mt-2">
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="pascali.mustari@gmail.com"
              className="block w-full rounded-lg border-0 py-3 px-6 text-gray-900 shadow-sm ring-0 placeholder:text-gray-400 outline-none sm:text-lg sm:leading-6"
              {...register("email", {
                required: dict.signup.email.required,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: dict.signup.email.invalid,
                },
              })}
            />
            {errors.email && <ErrorAlert text={errors.email.message} />}
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-lg font-medium leading-6 text-gray-900"
          >
            {dict.signup.password.label}
          </label>
          <div className="mt-2">
            <input
              id="password"
              {...register("password", {
                required: dict.signup.password.required,
                minLength: {
                  value: 5,
                  message: dict.signup.password.minLength,
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
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-lg font-medium leading-6 text-gray-900"
          >
            {dict.signup.confirmPassword.label}
          </label>
          <div className="mt-2">
            <input
              id="confirmPassword"
              {...register("confirmPassword", {
                required: dict.signup.confirmPassword.required,
                minLength: {
                  value: 5,
                  message: dict.signup.confirmPassword.minLength,
                },
                validate: (val) => {
                  if (watch("password") != val) {
                    return dict.signup.confirmPassword.dontMatch;
                  }
                },
              })}
              type="password"
              autoComplete="current-password"
              placeholder="***********************"
              className="block w-full rounded-lg border-0 py-3 px-6 text-gray-900 shadow-sm ring-0 placeholder:text-gray-400 outline-none sm:text-lg sm:leading-6"
            />
            {errors.confirmPassword && (
              <ErrorAlert text={errors.confirmPassword.message} />
            )}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-gray-500 text-center text-base">
            {dict.signup.description}
          </p>
          <button
            type="submit"
            className="flex w-full justify-center rounded-3xl bg-white py-3 px-6 text-lg font-semibold leading-6 text-black shadow-sm outline-none outline-offset-0"
          >
            {dict.signup.signupButton}
          </button>
        </div>
      </form>
    </div>
  );
}
