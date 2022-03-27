
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface Props {
  clearAdvertisement: ()=>void;
}

export function Advertisement2(props: Props) {
  const [waitCount, setWaitCount] = useState(5)
  const {clearAdvertisement} = props;
  const onClick = () => {
    if(waitCount === 0){
      clearAdvertisement()
    }
  };
  useEffect(
    ()=>{
      const timer = setInterval(
        ()=>{
          if(waitCount>0){
            setWaitCount(waitCount-1)
          }
        },
        1000
      );
      return () => clearInterval(timer);
    },
    [waitCount]
  )
  return (
    <div>
      <button onClick={onClick}>
      {waitCount===0 ? 'スキップ' : `${waitCount}秒後にスキップ`}
      </button>
    </div>
  );
}