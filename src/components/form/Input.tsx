import React, { HTMLAttributes } from "react";

interface InputProps {
  type?: string;
  label: string;
  placeholder: string;
  current?: string | number;
  setCurrent?: React.Dispatch<React.SetStateAction<string | number>>;
}

const Input: React.FC<InputProps> & HTMLAttributes<InputProps> = ({
  type = "text",
  label,
  placeholder,
  current,
  setCurrent,
  ...rest
}) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-slate-1">{label}</label>
        <input
          type={type}
          className="w-full border border-grey-2 rounded-md px-3 py-1 text-sm"
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </>
  );
};

export default Input;
