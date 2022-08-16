import React, { Dispatch, SetStateAction } from 'react';

import { AdverticementProps } from './interface';

export function Advertisement6(props: AdverticementProps) {
  const { clearAdvertisement, isDisplay } = props;

  const onClick = () => {
    clearAdvertisement();
  };
  return (
    <div style={{ display: isDisplay ? 'block' : 'none' }}>
      <button onClick={onClick}>なんかのゲームやってスキップ</button>
    </div>
  );
}
