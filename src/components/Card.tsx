import React, { PropsWithChildren } from "react";

const Card = ({
  children,
  className,
  ...props
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export default Card;
