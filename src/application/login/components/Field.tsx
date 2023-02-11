import { Input } from "@/src/components/input";
import { lato } from "@/styles/font";
import clsx from "clsx";
import { forwardRef, InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  htmlFor: string;
}

const FormFieldStyles = {
  label: "mb-2 text-primary-800",
};
export const FormField = forwardRef<null, FormFieldProps>(
  ({ label, htmlFor, ...props }, ref) => {
    return (
      <div className="flex flex-col mb-3">
        <label
          className={clsx(FormFieldStyles.label, lato.className)}
          htmlFor={htmlFor}
        >
          {label}
        </label>
        <Input ref={ref}  {...props} />
      </div>
    );
  }
);
