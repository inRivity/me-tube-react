import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  clearAdvertisement: () => void;
}

export function Advertisement6(props: Props) {
  const { clearAdvertisement } = props;

  const onClick = () => {
    clearAdvertisement();
  };
  return (
    <div>
      <button onClick={onClick}>なんかのゲームやってスキップ</button>
    </div>
  );
}
