import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const Tag = ({
  children,
  className,
  ...props
}: PropsWithChildren<{ className: string }>) => {
  return (
    <span
      className={twMerge(
        className,
        "px-2 py-1 rounded-lg text-white-1 text-xs"
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Tag;
