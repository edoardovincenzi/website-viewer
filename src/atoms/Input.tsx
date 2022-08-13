import React from 'react';

interface IProps {
  type?: string;
  name?: string;
  id?: string;
  attributes?: Object;
  style?: Object;
}

const Input = ({ type = 'text', name = '', id, attributes, style }: IProps) => {
  return (
    <input
      onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
        event.key === 'Enter' ? console.log('Enter') : null
      }
      className="border-2 border-black rounded-md"
      type={type}
      name={name}
      id={id}
      {...attributes}
      style={style}
    />
  );
};

export default Input;
