import React from 'react';
import { Button, Input } from '../atoms';

interface IProps {
  fnButton: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  textInput?: React.MutableRefObject<HTMLInputElement | null>;
}

const InsertLink = ({ fnButton, textInput }: IProps) => {
  return (
    <div className="w-full flex justify-center my-8">
      <Input
        textInput={textInput}
        attributes={{ placeholder: 'Enter your site link' }}
      />
      <Button className="ml-4" onClickFn={fnButton} label="Click me" />
    </div>
  );
};

export default InsertLink;
