import clsx from "clsx";
import { FormField } from "./Field";
import { useForm } from "react-hook-form";
import { IAuthentication } from "@/src/domain/interface/IAuthentication";
import useAuthentication from "../hooks/useAuthentication";
import { StyledSubmitButton } from "../index.styles";
import { useRouter } from "next/router";
import { useEffect } from "react";

const formStyles = {
  layout: "w-[400px] flex flex-col relative",
};
export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<IAuthentication>();
  const { mutate, isLoading, isSuccess } = useAuthentication();
  const onSubmit = (request: IAuthentication) => {
    mutate(request);
  };

  const { replace } = useRouter();

  useEffect(() => {
    if (isSuccess) {
      replace("/");
    }
  }, [isSuccess, replace]);

  if (isSuccess) return <p>Correecto!!</p>;
  return (
    <form className={clsx(formStyles.layout)} onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Email"
        htmlFor="username"
        type="email"
        {...register("username", { required: true })}
      />
      <FormField
        label="Password"
        htmlFor="password"
        type="password"
        {...register("password", { required: true })}
      />

      {isLoading && <p>cargando..</p>}
      {!isLoading && (
        <button
          disabled={!isValid}
          type="submit"
          className={clsx(
            StyledSubmitButton.color,
            StyledSubmitButton.focus,
            StyledSubmitButton.layout,
            StyledSubmitButton.spacing,
            StyledSubmitButton.text,
            StyledSubmitButton.disable(!isValid)
          )}
        >
          LOGIN
        </button>
      )}
    </form>
  );
};
