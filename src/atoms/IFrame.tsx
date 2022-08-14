import React from 'react';

interface IProps {
  id?: string;
  src: string;
  height?: string;
  width: string;
  resize?: 'both' | 'vertical' | 'horizontal' | 'none';
  style?: Object;
}

const IFrame = ({
  id,
  src,
  height = '851px',
  width,
  resize = 'none',
  style = {},
}: IProps) => {
  return (
    <iframe
      id={id}
      style={{ height, width, resize, ...style }}
      title="web-site"
      src={src}
    >
      IFrame
    </iframe>
  );
};

export default IFrame;
