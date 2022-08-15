import React, { Dispatch, SetStateAction } from 'react';
import { useDrag, useDrop } from 'react-dnd';

interface Props {
  clearAdvertisement: () => void;
}

export function Advertisement4(props: Props) {
  const { clearAdvertisement } = props;

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
    <div>
      <div ref={drop}>ここにDrop</div>
      <div ref={drag}>スキップ↑</div>
    </div>
  );
}
