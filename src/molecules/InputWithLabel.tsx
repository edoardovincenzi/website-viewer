import React from 'react';
import { Input } from '../atoms';

interface IProps {
  id: string;
  size: string;
  label: string;
  refInput: React.MutableRefObject<HTMLInputElement | null>;
}

const InputWithLabel = ({ id, size, label, refInput }: IProps) => {
  return (
    <div className="flex flex-col">
      <Input
        refInput={refInput}
        id={id}
        type="number"
        attributes={{ placeholder: size }}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default InputWithLabel;
