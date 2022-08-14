import React from 'react';

interface IProps {
  id?: string;
  src: string;
  height?: string;
  width: string;
  resize?: 'both' | 'vertical' | 'horizontal' | 'none';
  style?: Object;
  className?: string;
}

const IFrame = ({
  id,
  src,
  height = '851px',
  width,
  resize = 'none',
  className = '',
  style = {},
}: IProps) => {
  return (
    <iframe
      id={id}
      style={{ height, width, resize, ...style }}
      title="web-site"
      src={src}
      className={`${className} outline-dashed hover:outline-pink-500`}
    >
      IFrame
    </iframe>
  );
};

export default IFrame;
