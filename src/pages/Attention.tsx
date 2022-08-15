import React, { Dispatch, SetStateAction, useState } from 'react';

export function Attention() {
  const [waitCount, setWaitCount] = useState(5);

  return (
    <div>
      <button onClick={() => {}}>
        {waitCount === 0 ? 'スキップ' : `${waitCount}回後にスキップ`}
      </button>
    </div>
  );
}

export default Attention;
