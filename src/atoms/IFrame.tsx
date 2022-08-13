import React from 'react';

interface IProps {
  src: string;
  height?: string;
  width: string;
  resize?: 'both' | 'vertical' | 'horizontal' | 'none';
  style?: Object;
}

const IFrame = ({
  src,
  height = '80vh',
  width,
  resize = 'none',
  style = {},
}: IProps) => {
  return (
    <iframe
      style={{ height, width, resize, ...style }}
      title="web-site"
      src={src}
    >
      IFrame
    </iframe>
  );
};

export default IFrame;
