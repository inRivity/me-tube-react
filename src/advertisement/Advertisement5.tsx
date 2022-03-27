
import React, { Dispatch, SetStateAction, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

interface Props {
  clearAdvertisement: ()=>void;
}

export function Advertisement5(props: Props) {
  const {clearAdvertisement} = props;

  const [isDrop, setIsDrop] = useState(false)
  const [_, drag] = useDrag(() => ({
    type: 'skiButton',
    item: {key: 'skipButton'},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      currentOffcet: monitor.getSourceClientOffset(),
      previewProps: monitor.getItem()
    })
  }))
  const onDrop = () => {
    setIsDrop(true);
    clearAdvertisement();
  }
  const [, drop] = useDrop(
    () => ({
      accept: 'skiButton',
      drop: onDrop,
      canDrop: () => true,
      collect: monitor => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    []
  )
  return (
    <div>
      <div ref={drag}>{isDrop? '': 'スキ'}</div>
      <div ref={drop}>
        {isDrop? 'スキ': ''}ップ
      </div>
    </div>
  );
}