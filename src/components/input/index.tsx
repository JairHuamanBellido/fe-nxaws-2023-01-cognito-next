import { lato } from "@/styles/font";
import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export const Input = forwardRef<null, InputProps>(({ ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`
      border-primary-600 mb-2  focus:border-secondary-500 text-base  border focus:outline-none w-full rounded px-4 py-4  bg-transparent ${lato.className} ${props.className}`}
      {...props}
    />
  );
});
