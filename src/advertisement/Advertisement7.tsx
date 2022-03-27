import React, { Dispatch, SetStateAction } from 'react';

interface Props {
    clearAdvertisement: ()=>void;
}


export function Advertisement7(props: Props) {
    const {clearAdvertisement} = props;

    const onClick = () => {
        clearAdvertisement()
    };
    return (
      <div>
          <button onClick={onClick}>14729を表示させる広告</button>
      </div>
    );
  }