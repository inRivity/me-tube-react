import React, { Dispatch, SetStateAction, useState } from 'react';

import { AdverticementProps } from './interface';

export function Advertisement3(props: AdverticementProps) {
  const [waitCount, setWaitCount] = useState(5);
  const { clearAdvertisement, isDisplay } = props;

  const onClick = () => {
    if (waitCount === 0) {
      clearAdvertisement();
    } else {
      setWaitCount(waitCount - 1);
    }
  };
  return (
    <div style={{ display: isDisplay ? 'block' : 'none' }}>
      <button onClick={onClick}>
        {waitCount === 0 ? 'スキップ' : `${waitCount}回後にスキップ`}
      </button>
    </div>
  );
}
