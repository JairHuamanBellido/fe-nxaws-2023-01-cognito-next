import clsx from "clsx";
import { StyledSignInLayout } from "../index.styles";

export const HeaderForm = () => {
  return (
    <>
      <h2
        className={clsx(
          StyledSignInLayout.headerStyle.font,
          StyledSignInLayout.headerStyle.spacing
        )}
      >
        Welcome!
      </h2>
      <p
        className={clsx(
          StyledSignInLayout.textStyle.color,
          StyledSignInLayout.textStyle.font,
          StyledSignInLayout.textStyle.spacing
        )}
      >
        Dashboard for management resources
      </p>
    </>
  );
};
