import React, { useState } from 'react';
import { Button, IFrame, Input } from './atoms';

function App() {
  const [height, setHeight] = useState<string>('600px');
  const [width, setWidth] = useState<string>('1400px');
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setHeight((state) => (state === '400px' ? '401px' : '400px'));
    setWidth((state) => (state === '480px' ? '481px' : '480px'));
  };

  return (
    <div className="container mx-auto">
      <Button label="Click me" onClickFn={handleClick} />
      <Input attributes={{ placeholder: 'Inserisci il link del sito' }} />
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <IFrame
          src="https://edoardovincenzi.netlify.app/"
          resize="both"
          width={width}
          style={{ padding: '10px', marginBottom: '4rem' }}
        />
        <IFrame
          src="https://diegocorradi.netlify.app/"
          resize="both"
          width={width}
          style={{ padding: '10px', marginBottom: '4rem' }}
        />
        <IFrame
          src="https://portfolio-mattiaturi.vercel.app/"
          resize="both"
          width={width}
          style={{ padding: '10px', marginBottom: '4rem' }}
        />
      </div>
    </div>
  );
}

export default App;
