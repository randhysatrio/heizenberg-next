// CORE
import { InputHTMLAttributes, useState } from 'react';

// COMPONENTS
import { motion } from 'framer-motion';

// ICONS
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// LIBS
import { Field, FieldProps } from 'formik';

type FormInputTextProps = {
  label?: string | undefined;
} & InputHTMLAttributes<HTMLInputElement>;
export default function FormInputText({
  label,
  type,
  name,
  ...props
}: FormInputTextProps) {
  // CONDITIONALS
  const isPassword = type === 'password';

  // PASSWORD STATES
  const [inputType, setInputType] = useState('password');
  function toggleInputType() {
    return setInputType((c) => (c === 'password' ? 'text' : 'password'));
  }

  return (
    <Field name={name}>
      {({ field, meta: { touched, error } }: FieldProps) => {
        // INPUT CONDITIONS
        const isError = touched && error;
        const isValid = touched && !error;

        return (
          <fieldset className="flex w-full flex-col">
            {label && (
              <motion.label
                whileTap={{ scale: 0.95 }}
                htmlFor={field.name}
                className="mb-[2px] ml-1 w-fit cursor-pointer font-rubik-bold text-lg text-slate-600 hover:text-zinc-400"
              >
                {label}
              </motion.label>
            )}

            <section className="relative flex w-full items-center">
              <input
                {...props}
                {...field}
                id={field.name}
                type={isPassword ? inputType : type}
                className={`h-10 w-full cursor-pointer rounded-md px-2 ring-2 ring-gray-300 placeholder:font-rubik placeholder:text-gray-300 focus:outline-none ${isError ? 'ring-red-500' : isValid ? 'ring-emerald-500 focus:ring-sky-400' : 'hover:ring-sky-400 focus:ring-sky-400'} ${isPassword ? 'pr-8 lg:pr-9' : ''}`}
              />
              {isPassword && (
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleInputType}
                  className="absolute right-2 lg:right-3"
                >
                  {inputType === 'password' ? (
                    <FaEye className="h-4 w-4 cursor-pointer text-gray-700 hover:text-sky-600" />
                  ) : (
                    <FaEyeSlash className="h-4 w-4 cursor-pointer text-gray-700 hover:text-sky-600" />
                  )}
                </motion.button>
              )}
            </section>
            {isError && (
              <span className="ml-2 mt-1 text-xs text-red-600">{error}</span>
            )}
          </fieldset>
        );
      }}
    </Field>
  );
}
