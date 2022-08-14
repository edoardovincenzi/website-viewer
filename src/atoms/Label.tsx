import React from 'react';

interface IProps {
  label: string;
  style?: Object;
  className?: string;
}

const Label = ({ label, style = {}, className = '' }: IProps) => {
  return (
    <label style={style} className={`${className}`}>
      {label}
    </label>
  );
};

export default Label;
