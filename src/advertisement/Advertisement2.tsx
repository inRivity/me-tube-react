import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useCallback,
  CSSProperties
} from 'react';
import SwipeLeftAltIcon from '@mui/icons-material/SwipeLeftAlt';
import { AdverticementProps } from './interface';
import { useDrag, useDrop } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { SkipButton } from '../components/SkipButton';
import { ItemTypes } from '../components/ItemTypes';
import { DraggableSkipButton } from '../components/DraggableSkipButton';

interface Position {
  top: number;
  left: number;
}

interface DragItem {
  id: string;
  type: string;
  left: number;
  top: number;
}

export function Advertisement2(props: AdverticementProps) {
  const dragSymbol = 'skipButton';
  const [position, setPosition] = useState<Position>({ top: 383.5, left: 0 });
  const { clearAdvertisement, isDisplay } = props;

  const move = useCallback(
    (left: number, top: number) => {
      setPosition({ left: left, top: top });
    },
    [position]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.SKIP_BUTTON,
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as {
          x: number;
          y: number;
        };

        let left = Math.round(item.left + delta.x);
        let top = Math.round(item.top + delta.y);
        move(left, item.top);
        if (left > 675) clearAdvertisement();
        return undefined;
      }
    }),
    [position]
  );
  return (
    <>
      <div
        className="w-full h-full"
        ref={drop}
        style={{
          display: isDisplay ? 'block' : 'none',
          position: 'relative'
          // overflow: 'hidden'
        }}
      >
        <DraggableSkipButton id="1" top={position.top} left={position.left} />
      </div>
    </>
  );
}
