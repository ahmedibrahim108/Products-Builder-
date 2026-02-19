import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className: string;
}

function Button({ children, className, ...rest }: IProps) {
  return (
    <button
      className={`${className} text-white rounded-md w-full p-1.5 cursor-pointer`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
