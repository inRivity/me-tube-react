import React, { Dispatch, SetStateAction } from 'react';

interface Props {
    clearAdvertisement: ()=>void;
}

export function Advertisement1(props: Props) {
    const {clearAdvertisement} = props;
    const onClick = () => {
        clearAdvertisement()
    };
    return (
      <div>
          <button onClick={onClick}>スキップ</button>
      </div>
    );
  }