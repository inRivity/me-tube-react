import React, { Dispatch, SetStateAction, useState } from 'react';

interface Props {
  clearAdvertisement: () => void;
}

export function Advertisement3(props: Props) {
  const [waitCount, setWaitCount] = useState(5);
  const { clearAdvertisement } = props;

  const onClick = () => {
    if (waitCount === 0) {
      clearAdvertisement();
    } else {
      setWaitCount(waitCount - 1);
    }
  };
  return (
    <div>
      <button onClick={onClick}>
        {waitCount === 0 ? 'スキップ' : `${waitCount}回後にスキップ`}
      </button>
    </div>
  );
}
