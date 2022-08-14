import React from 'react';

interface IProps {
  type?: string;
  name?: string;
  id?: string;
  attributes?: Object;
  style?: Object;
  className?: string;
  textInput?: React.MutableRefObject<HTMLInputElement | null>;
}

const Input = ({
  type = 'text',
  name = '',
  id,
  attributes,
  style,
  className = '',
  textInput,
}: IProps) => {
  return (
    <input
      onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
        event.key === 'Enter' ? console.log('Enter') : null
      }
      ref={textInput}
      className={`${className} border-2 border-black rounded-md p-4`}
      type={type}
      name={name}
      id={id}
      {...attributes}
      style={style}
    />
  );
};

export default Input;
