import React from 'react';

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ open, setOpen }: IProps) => {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/75 z-2"
          onClick={() => setOpen((state) => !state)}
          onKeyDown={(event: React.KeyboardEvent<HTMLElement>) => {
            console.log(event.key);
          }}
        >
          <div
            className="fixed inset-1/2 bg-slate-200 p-4"
            style={{
              height: 'max-content',
              width: '450px',
              transform: 'translate(-50%, 0)',
            }}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <div>header</div>
            <div>body</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
