import React, { Dispatch, SetStateAction } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { AdverticementProps } from './interface';

export function Advertisement4(props: AdverticementProps) {
  const { clearAdvertisement, isDisplay } = props;

  const [_, drag] = useDrag(() => ({
    type: 'skipButton',
    item: { key: 'skipButton' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      currentOffcet: monitor.getSourceClientOffset(),
      previewProps: monitor.getItem()
    })
  }));
  const onDrop = () => {
    clearAdvertisement();
  };
  const [, drop] = useDrop(
    () => ({
      accept: 'skipButton',
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
      <div ref={drop}>ここにDrop</div>
      <div ref={drag}>スキップ↑</div>
    </div>
  );
}
