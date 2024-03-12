import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export const App = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};
