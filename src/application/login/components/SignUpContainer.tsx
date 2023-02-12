import clsx from "clsx";
import Link from "next/link";
import { StyledRegisterLayout } from "../index.styles";

export const SignUpContainer = () => {
  return (
    <div className={clsx(StyledRegisterLayout.layout)}>
      <p
        className={clsx(
          StyledRegisterLayout.textStyle.color,
          StyledRegisterLayout.textStyle.font
        )}
      >
        Don't have an account?
        <Link
          className={clsx(
            StyledRegisterLayout.linkStyle.color,
            StyledRegisterLayout.linkStyle.hover,
            StyledRegisterLayout.linkStyle.spacing
          )}
          href="/"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};
