import React, { Dispatch, SetStateAction, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { AdverticementProps } from './interface';

export function Advertisement5(props: AdverticementProps) {
  const { clearAdvertisement, isDisplay } = props;

  const [isDrop, setIsDrop] = useState(false);
  const [_, drag] = useDrag(() => ({
    type: 'skiButton',
    item: { key: 'skipButton' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      currentOffcet: monitor.getSourceClientOffset(),
      previewProps: monitor.getItem()
    })
  }));
  const onDrop = () => {
    setIsDrop(true);
    clearAdvertisement();
  };
  const [, drop] = useDrop(
    () => ({
      accept: 'skiButton',
      drop: onDrop,
      canDrop: () => true,
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop()
      })
    }),
    []
  );
  return (
    <div style={{ display: isDisplay ? 'block' : 'none' }}>
      <div ref={drag}>{isDrop ? '' : 'スキ'}</div>
      <div ref={drop}>{isDrop ? 'スキ' : ''}ップ</div>
    </div>
  );
}
