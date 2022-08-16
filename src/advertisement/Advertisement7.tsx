import React, { Dispatch, SetStateAction } from 'react';

import { AdverticementProps } from './interface';

export function Advertisement7(props: AdverticementProps) {
  const { clearAdvertisement, isDisplay } = props;

  const onClick = () => {
    clearAdvertisement();
  };
  return (
    <div style={{ display: isDisplay ? 'block' : 'none' }}>
      <button onClick={onClick}>14729を表示させる広告</button>
    </div>
  );
}
