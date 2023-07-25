import React, { ReactNode } from 'react';

interface Button {
  onClick: () => void;
  children: ReactNode;
}

export const Button: React.FC<Button> = ({ onClick, children }) => {

  return (
    <div onClick={onClick} className='border border-highlight rounded-md inline px-6 py-2 bg-transparent hover:bg-highlight hover:bg-opacity-20 cursor-pointer transition-[background-color] duration-300 ease-in-out'>
      <span className='text-highlight'>{children}</span>
    </div>
  )
}