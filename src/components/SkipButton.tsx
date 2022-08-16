import React, { Dispatch, SetStateAction, FC, ReactNode } from 'react';
import SwipeLeftAltIcon from '@mui/icons-material/SwipeLeftAlt';

interface SkipButtonProps {
  children: ReactNode;
}

export function SkipButton(props: SkipButtonProps) {
  return (
    <div
      className="flex"
      style={{
        height: '3em',
        width: '11em',
        backgroundColor: 'black',
        opacity: 0.6,
        userSelect: 'none',
        cursor: 'grab'
      }}
    >
      <div
        className="flex"
        style={{
          margin: 'auto',
          color: 'white'
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
