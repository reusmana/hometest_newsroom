import React, { HTMLAttributes, PropsWithChildren } from "react";

const Button = ({
  children,
  icon,
  ...props
}: PropsWithChildren<{ icon?: any } & HTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button {...props}>
      {icon}
      {children}
    </button>
  );
};

export default Button;
