import React from 'react';
import { ChangeSizeSetting } from '.';
import { ISize } from '../App';

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  width: ISize;
  setWidth: React.Dispatch<React.SetStateAction<ISize>>;
  height: ISize;
  setHeight: React.Dispatch<React.SetStateAction<ISize>>;
}

const Modal = ({
  open,
  setOpen,
  width,
  setWidth,
  height,
  setHeight,
}: IProps) => {
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
            <p
              className="absolute top-1 right-2 p-3 cursor-pointer text-2xl"
              onClick={() => setOpen((state) => !state)}
            >
              X
            </p>
            <h1 className="text-center text-4xl">Settings viewer</h1>

            <ChangeSizeSetting
              width={width.mobile}
              setWidth={setWidth}
              height={height.mobile}
              setHeight={setHeight}
              typology="mobile"
              title="TAB MOBILE"
            />
            <ChangeSizeSetting
              width={width.tablet}
              setWidth={setWidth}
              height={height.tablet}
              setHeight={setHeight}
              typology="tablet"
              title="TAB TABLET"
            />
            <ChangeSizeSetting
              width={width.web}
              setWidth={setWidth}
              height={height.web}
              setHeight={setHeight}
              typology="web"
              title="TAB WEB"
            />

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
