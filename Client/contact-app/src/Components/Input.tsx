import React from "react";

interface inputProps {
  labelName: string;
  text: string;
  Value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ labelName, text, Value, handleChange }: inputProps) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor="labelName" className="font-bold">
          {labelName}
        </label>
        <input
          id="labelName"
          type={text}
          value={Value}
          className="p-1 w-72 max-sm:w-32 rounded-lg shadow-lg border border-solid border-black"
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Input;
