import React from 'react';
import Input from './Input';

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
        >
          <div
            className="fixed flex flex-col inset-1/2 bg-slate-200 p-4"
            style={{
              height: 'max-content',
              width: 'max-content',
              transform: 'translate(-50%, -50%)',
            }}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <h1 className="text-center text-4xl">Settings viewer</h1>
            <h4 className="text-center mt-4">TAB MOBILE</h4>
            <div className="flex gap-4 m-4">
              <Input
                type="number"
                attributes={{ placeholder: 'Insert custom width' }}
              />
              <Input
                type="number"
                attributes={{ placeholder: 'Insert custom height' }}
              />
            </div>
            <h4 className="text-center">TAB TABLET</h4>
            <div className="flex gap-4 m-4">
              <Input
                type="number"
                attributes={{ placeholder: 'Insert custom width' }}
              />
              <Input
                type="number"
                attributes={{ placeholder: 'Insert custom height' }}
              />
            </div>
            <h4 className="text-center">TAB WEB</h4>
            <div className="flex gap-4 m-4">
              <Input
                type="number"
                attributes={{ placeholder: 'Insert custom width' }}
              />
              <Input
                type="number"
                attributes={{ placeholder: 'Insert custom height' }}
              />
            </div>

            <h4 className="text-center">TAB ORDER</h4>
            <div>
              <p className="text-center">Work in progress</p>
            </div>
            <h4 className="text-center">TAB THEME</h4>
            <div>
              <p className="text-center">Work in progress</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
