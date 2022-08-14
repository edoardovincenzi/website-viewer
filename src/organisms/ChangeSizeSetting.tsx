import React, { useRef } from 'react';
import { ISize } from '../App';
import { Button } from '../atoms';
import { InputWithLabel } from '../molecules';

interface IProps {
  width: string;
  setWidth: React.Dispatch<React.SetStateAction<ISize>>;
  height: string;
  setHeight: React.Dispatch<React.SetStateAction<ISize>>;
  title: string;
  typology: 'mobile' | 'tablet' | 'web';
}

const ChangeSizeSetting = ({
  width,
  height,
  title,
  setWidth,
  setHeight,
  typology,
}: IProps) => {
  const widthRef = useRef<any>(width);
  const heightRef = useRef<any>(height);

  const handleSave = () => {
    if (widthRef && widthRef.current && widthRef.current.value) {
      console.log(widthRef.current.value);
      setWidth((state) => {
        return { ...state, [typology]: `${widthRef.current.value}px` };
      });
    }
    if (heightRef && heightRef.current && heightRef.current.value) {
      console.log(heightRef.current.value);
      setHeight((state) => {
        return { ...state, [typology]: `${heightRef.current.value}px` };
      });
    }
  };

  return (
    <>
      <h4 className="ml-4 text-start mt-4">{title}</h4>
      <div className="flex gap-4 m-4">
        <InputWithLabel
          refInput={widthRef}
          id="web"
          label="Insert custom width"
          size={width}
        />
        <InputWithLabel
          refInput={heightRef}
          id="web"
          label="Insert custom height"
          size={height}
        />
        <Button
          className="self-start px-5"
          label="Save"
          onClickFn={handleSave}
        />
      </div>
    </>
  );
};

export default ChangeSizeSetting;
