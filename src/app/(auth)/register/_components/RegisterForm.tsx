'use client';

// CORE
import { useRouter } from 'next/navigation';

// COMPONENTS
import FormInputText from '@/app/_components/Input/FormInpuText';
import AnimatedButton from '@/app/_components/Button/AnimatedButton';
import ClickableText from '@/app/_components/UI/ClickableText';
import GoogleLoginButton from '@/app/_components/Button/GoogleLoginButton';

// FORM
import { Formik } from 'formik';
import * as Yup from 'yup';

// INTERFACES
import type { RegisterForm } from '@/app/_types/Register';

const initialValues: RegisterForm = {
  name: '',
  email: '',
  password: '',
  confirmationPassword: '',
};
const validationSchema = Yup.object({
  name: Yup.string()
    .required('Full Name is required')
    .max(255, 'Max 255 chars'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,32}$/,
      'Min 8 chars, 1 uppercase, lowercase and number'
    )
    .required('Password is required'),
  confirmationPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password did not match')
    .required('Confirmation Password is required'),
});

export default function RegisterForm() {
  // ROUTER
  const router = useRouter();
  function redirectHandler(url: string) {
    return router.push(url);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => alert('bib is jambu')}
    >
      {({ handleSubmit, isValid, isSubmitting, status }) => (
        <form
          id="register-form"
          onSubmit={handleSubmit}
          className="flex h-full w-full flex-col items-center"
        >
          <fieldset className="flex w-full flex-col gap-2 lg:gap-[6px]">
            <FormInputText
              name="name"
              label="Full Name"
              placeholder="Insert full name..."
              autoComplete="name"
            />
            <FormInputText
              type="email"
              name="email"
              label="Email"
              placeholder="Insert email..."
              autoComplete="current-email"
            />
            <FormInputText
              type="password"
              name="password"
              label="Password"
              placeholder="Insert password..."
              autoComplete="new-password"
            />
            <FormInputText
              type="password"
              name="confirmationPassword"
              label="Confirmation Password"
              placeholder="Insert password..."
              autoComplete="new-password"
            />

            <AnimatedButton
              type="submit"
              loading={isSubmitting}
              finish={status === true}
              disabled={!isValid}
              className="mt-3 lg:mt-4"
            >
              Login
            </AnimatedButton>
          </fieldset>
          <ClickableText
            whileTap={{ scale: 0.95 }}
            onClick={() => redirectHandler('/login')}
            className="mt-2 cursor-pointer font-rubik text-xs text-slate-800 hover:text-slate-500 lg:text-sm"
          >
            Already have an account?
          </ClickableText>

          <section className="before: relative my-3 flex w-full items-center justify-center before:relative before:left-0 before:h-[2px] before:w-full before:bg-slate-300 after:relative after:right-0 after:h-[2px] after:w-full after:bg-slate-300 sm:my-4">
            <h6 className="mx-2 font-rubik-bold text-sm text-slate-600">Or</h6>
          </section>

          <GoogleLoginButton as="signup" />

          <ClickableText
            whileTap={{ scale: 0.95 }}
            onClick={() => redirectHandler('/')}
            className="mt-auto cursor-pointer font-rubik-bold text-sm text-slate-800 hover:text-slate-500"
          >
            Back to Home
          </ClickableText>
        </form>
      )}
    </Formik>
  );
}
