import React from "react";

interface BtnProps {
  Title: string;
  Margin: string;
  Color: string;
  ColorHover: string;
  Element?: React.ReactElement;
  handleClick?: (e?: any) => void;
}

const Button = ({
  Title,
  Margin,
  Element,
  Color,
  ColorHover,
  handleClick,
}: BtnProps) => {
  return (
    <>
      <button className={`m-${Margin}`} onClick={handleClick}>
        <div
          className={`flex items-center justify-center gap-3 font-bold bg-${Color} p-2 rounded-lg shadow-lg hover:bg-${ColorHover} hover:text-white  transition-all duration-200`}
        >
          {Element}
          <p>{Title}</p>
        </div>
      </button>
    </>
  );
};

export default Button;
