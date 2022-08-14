import React from 'react';
interface IProps {
  label: string;
  style?: Object;
  className?: string;
  onClickFn: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ label, onClickFn, style = {}, className = '' }: IProps) => {
  return (
    <button
      style={style}
      onClick={onClickFn}
      className={`${className} transition duration-300 ease-in-out delay-150 border-2 border-black rounded-md p-4 hover:bg-black hover:text-white `}
    >
      {label}
    </button>
  );
};

export default Button;
