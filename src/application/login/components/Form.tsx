import { lato } from "@/styles/font";
import clsx from "clsx";
import { FormEvent } from "react";
import { FormField } from "./Field";

const formStyles = {
  layout: "w-[400px] flex flex-col relative",
};
export const Form = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form className={clsx(formStyles.layout)} onSubmit={onSubmit}>
      <FormField
        label="Email"
        htmlFor="email"
        name="email"
        type="email"
        required
      />
      <FormField
        label="Password"
        htmlFor="password"
        name="password"
        type="password"
        required
      />

      <button
        className={`font-semibold bg-secondary-500 text-base text-primary-500 h-12 mt-6 focus:outline-none focus:outline-primary-900 ${lato.className}`}
      >
        LOGIN
      </button>
    </form>
  );
};
