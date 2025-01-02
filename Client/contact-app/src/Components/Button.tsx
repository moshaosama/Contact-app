import React from "react";

interface BtnProps {
  Title: string;
  Margin: string;
  Element?: React.ReactElement;
}

const Button = ({ Title, Margin, Element }: BtnProps) => {
  return (
    <>
      <button className={`m-${Margin}`}>
        <div className="flex items-center justify-center gap-3 font-bold bg-blue-300 p-2 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white  transition-all duration-200">
          {Element}
          <p>{Title}</p>
        </div>
      </button>
    </>
  );
};

export default Button;
