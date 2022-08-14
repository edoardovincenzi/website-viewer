import React, { useRef, useState } from 'react';
import { InsertLink } from './molecules';
import { ThreeTypesIFrame } from './organisms';
import { IoMdSettings } from 'react-icons/io';
import { Modal } from './atoms';

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
  const [openModalSetting, setOpenModalSetting] = useState(false);
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
      <IoMdSettings
        className="absolute text-5xl cursor-pointer top-8 right-4 z-50"
        onClick={() => setOpenModalSetting((state) => !state)}
      />
      <div
        className={
          openModalSetting
            ? 'pointer-events-none h-screen m-0 overflow-hidden'
            : ''
        }
      >
        <InsertLink textInput={textInput} fnButton={handleClick} />
        <ThreeTypesIFrame src={src} width={width} height={height} />
      </div>
      <Modal open={openModalSetting} setOpen={setOpenModalSetting} />
    </div>
  );
}

export default App;
