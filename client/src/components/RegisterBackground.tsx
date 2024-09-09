import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

const RegisterBackground = ({ children }: PageProps) => {
  return (
    <div className="w-full h-full bg-white">
      {children}
    </div>
  );
};

export default RegisterBackground;


