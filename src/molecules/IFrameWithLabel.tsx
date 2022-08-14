import React from 'react';
import { IFrame, Label } from '../atoms';

interface IProps {
  id?: string;
  src: string;
  height?: string;
  width: string;
  resize?: 'both' | 'vertical' | 'horizontal' | 'none';
  style?: Object;
}

const IFrameWithLabel = ({
  id,
  src,
  height = '851px',
  width,
  resize,
}: IProps) => {
  return (
    <div className="flex flex-col justify-center my-8">
      <Label
        className="text-center"
        label={`Width: ${width} - Height: ${height}`}
      />
      <IFrame
        id={id}
        src={src}
        resize={resize}
        width={width}
        height={height}
        style={{ padding: '10px', marginBottom: '4rem' }}
      />
    </div>
  );
};

export default IFrameWithLabel;
