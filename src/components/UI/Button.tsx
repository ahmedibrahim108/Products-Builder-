import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className: string;
  width?: "w-full" | "w-fit";
}

function Button({ children, className, width = "w-full", ...rest }: IProps) {
  return (
    <button
      className={`${className} ${width} text-white rounded-md  p-1.5 cursor-pointer`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
