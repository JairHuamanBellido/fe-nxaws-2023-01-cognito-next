import clsx from "clsx";
import { StyledRightLayout } from "../index.styles";

export const RightLayout = () => {
  return (
    <div
      className={clsx(
        StyledRightLayout.background,
        StyledRightLayout.layout,
        StyledRightLayout.spacing
      )}
    ></div>
  );
};
