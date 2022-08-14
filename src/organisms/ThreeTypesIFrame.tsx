import React from 'react';
import { ISize } from '../App';
import { IFrameWithLabel } from '../molecules';

interface IProps {
  src: string;
  width: ISize;
  height: ISize;
}

const ThreeTypesIFrame = ({ src, width, height }: IProps) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="flex gap-4 flex-wrap items-center justify-between w-full">
        <IFrameWithLabel
          id="mobile"
          src={src}
          resize="none"
          width={width.mobile}
          height={height.mobile}
          style={{ padding: '10px', marginBottom: '4rem' }}
        />
        <IFrameWithLabel
          id="tablet"
          src={src}
          resize="none"
          width={width.tablet}
          height={height.tablet}
          style={{ padding: '10px', marginBottom: '4rem' }}
        />
      </div>
      <div className="flex gap-4 items-center justify-center">
        <IFrameWithLabel
          id="web"
          src={src}
          resize="none"
          width={width.web}
          height={height.web}
          style={{ padding: '10px', marginBottom: '4rem' }}
        />
      </div>
    </div>
  );
};

export default ThreeTypesIFrame;
