import clsx from "clsx";
import {
  StyledLeftLayout,
  StyledSignInLayout,
} from "../index.styles";
import { Form } from "./Form";
import { HeaderForm } from "./HeaderForm";
import { SignUpContainer } from "./SignUpContainer";

export const LeftLayout = () => {
  return (
    <div className={clsx(StyledLeftLayout.layout)}>
      <div className={clsx(StyledLeftLayout.childrenLayout)}>
        <div className={clsx(StyledSignInLayout.font)}>
          <HeaderForm />
          <Form />
          <SignUpContainer />
        </div>
        <div />
      </div>
    </div>
  );
};
