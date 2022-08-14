import React, { useRef, useState } from 'react';
import { IFrame } from './atoms';
import { IFrameWithLabel, InsertLink } from './molecules';
import { ThreeTypesIFrame } from './organisms';

export interface ISize {
  mobile: string;
  tablet: string;
  web: string;
}

function App() {
  const initialValueWidth = {
    mobile: '375px',
    tablet: '768px',
    web: '1024px',
  };
  const initialValueHeight = {
    mobile: '851px',
    tablet: '851px',
    web: '851px',
  };
  const [width, setWidth] = useState<ISize>(initialValueWidth);
  const [height, setHeight] = useState<ISize>(initialValueHeight);
  const [src, setSrc] = useState<string>('');
  const textInput = useRef<HTMLInputElement | null>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (textInput && textInput.current) {
      setSrc(textInput.current.value);
    }
  };

  return (
    <div className="container mx-auto">
      <InsertLink textInput={textInput} fnButton={handleClick} />
      <ThreeTypesIFrame src={src} width={width} height={height} />
    </div>
  );
}

export default App;
