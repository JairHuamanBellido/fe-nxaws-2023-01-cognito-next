import { playfairDisplay } from "@/styles/font";
import { LeftLayout } from "./components/LeftLayout";
import { RightLayout } from "./components/RightLayout";

const mainLayoutStyles = "w-full h-screen";
const mainDisplayStyles = "flex items-center justify-center flex-row";

export const LoginPage = () => {
  return (
    <main
      className={`${mainDisplayStyles} ${mainLayoutStyles} ${playfairDisplay.className} `}
    >
      <LeftLayout />
      <RightLayout />
    </main>
  );
};
