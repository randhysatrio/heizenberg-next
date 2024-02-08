"use client";

// CORE
import { useRouter } from "next/navigation";

// COMPONENTS
import { motion } from "framer-motion";
import FormInputText from "@/app/_components/Input/FormInpuText";
import AnimatedButton from "@/app/_components/Button/AnimatedButton";
import GoogleLoginButton from "@/app/_components/Button/GoogleLoginButton";

// LIBS
import { setCookie } from "cookies-next";

// FORMS
import { Formik } from "formik";
import * as Yup from "yup";

// STORE
import { useAuthStore } from "@/app/_store/AuthStore";

// CONSTANTS
import { COOKIE_NAME } from "@/app/_config/constanst";

// INTERFACE
import type { LoginForm } from "@/app/_types/Login";

// FORM VALUES
const initialValues: LoginForm = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,32}$/,
      "Invalid password",
    )
    .required("Password is required"),
});

// MOCK DATA
import { MOCK_USER } from "@/app/_mockData/Users";

export default function LoginForm() {
  // ROUTER
  const router = useRouter();
  function redirectHandler(url: string) {
    return router.push(url);
  }

  // AUTH STORE
  const { login } = useAuthStore();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={({ email }, { setStatus, setSubmitting }) => {
        setTimeout(() => {
          const data = { ...MOCK_USER, email };
          login(data);
          setCookie(COOKIE_NAME, JSON.stringify(data), {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });

          setStatus(true);
          setSubmitting(false);

          // router.replace("/");
          window.location.replace("/");
        }, 2000);
      }}
    >
      {({ handleSubmit, isValid, isSubmitting, status }) => (
        <form
          id="login-form"
          onSubmit={handleSubmit}
          className="flex h-full w-full flex-col items-center"
        >
          <fieldset className="flex w-full flex-col gap-2">
            <FormInputText
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email..."
              autoComplete="current-email"
            />
            <FormInputText
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password..."
              autoComplete="current-password"
            />

            <AnimatedButton
              type="submit"
              loading={isSubmitting}
              finish={status === true}
              finishEl={"Login Succeed!"}
              disabled={!isValid}
              className="mt-2 lg:mt-5"
            >
              Login
            </AnimatedButton>
          </fieldset>
          <motion.span
            whileTap={{ scale: 0.95 }}
            onClick={() => redirectHandler("/register")}
            className="font-rubik mt-2 cursor-pointer text-xs text-slate-800 hover:text-slate-500 lg:text-sm"
          >
            Don't have an account?
          </motion.span>

          <section className="before: relative my-3 flex w-full items-center justify-center before:relative before:left-0 before:h-[2px] before:w-full before:bg-slate-300 after:relative after:right-0 after:h-[2px] after:w-full after:bg-slate-300 sm:my-4">
            <h6 className="font-rubik-bold mx-2 text-sm text-slate-600">Or</h6>
          </section>

          <GoogleLoginButton />

          <motion.span
            whileTap={{ scale: 0.95 }}
            onClick={() => redirectHandler("/")}
            className="font-rubik-bold mt-auto cursor-pointer text-sm text-slate-800 hover:text-slate-500"
          >
            Back to Home
          </motion.span>
        </form>
      )}
    </Formik>
  );
}
