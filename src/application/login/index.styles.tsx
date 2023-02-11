import { lato } from "@/styles/font";

export const StyledLeftLayout = {
  layout: "w-2/5 flex flex-col justify-center h-screen py-8 px-36",
  childrenLayout: "flex flex-col h-screen justify-center",
};

export const StyledSignInLayout = {
  font: lato.className,
  headerStyle: {
    font: "text-4xl",
    spacing: "mb-2",
  },
  textStyle: {
    color: "text-secondary-200",
    font: "text-lg",
    spacing: "mb-8",
  },
};

export const StyledRegisterLayout = {
  layout: "mt-9",
  textStyle: {
    font: "text-base",
    color: "text-secondary-300",
  },
  linkStyle: {
    color: "text-secondary-500",
    spacing: "ml-2",
    hover: "hover:text-secondary-700 hover:underline",
  },
};

export const StyledRightLayout = {
  layout: "w-3/5 h-screen relative flex flex-col justify-center",
  spacing: "p-16",
  background: "bg-primary-400",
};

export const StyledSubmitButton = {
  text: `font-semibold text-base text-primary-500`,
  color: "bg-secondary-500",
  spacing: "mt-6",
  layout: "h-12",
  focus: "focus:outline-none focus:outline-primary-900",
  disable: (disabled:boolean) => disabled && 'bg-secondary-200 cursor-not-allowed	'
};
