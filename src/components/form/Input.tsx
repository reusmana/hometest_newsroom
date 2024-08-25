import React, { HTMLAttributes } from "react";

interface InputProps {
  type?: string;
  label: string;
  name: string;
  placeholder: string;
  current?: string | number;
  setCurrent?: React.Dispatch<React.SetStateAction<string | number>>;
  [key: string]: any;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  label,
  name,
  placeholder,
  current,
  setCurrent,
  ...props
}) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-slate-1">{label}</label>
        <input
          type={type}
          name={name}
          className="w-full border border-grey-2 rounded-md px-3 py-1 text-sm"
          placeholder={placeholder}
          {...props}
        />
      </div>
    </>
  );
};

export default Input;
