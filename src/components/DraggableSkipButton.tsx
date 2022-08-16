import type { CSSProperties, FC } from 'react';
import { memo, useEffect, useState } from 'react';
import type { DragSourceMonitor } from 'react-dnd';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import { SkipButton } from './SkipButton';
import { ItemTypes } from './ItemTypes';

function getStyles(
  left: number,
  top: number,
  isDragging: boolean
): CSSProperties {
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  return {
    position: 'absolute',
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : ''
  };
}

export interface DraggableBoxProps {
  id: string;
  left: number;
  top: number;
}

export const DraggableSkipButton: FC<DraggableBoxProps> = memo(
  function DraggableBox(props) {
    const { id, left, top } = props;
    const [{ isDragging }, drag, preview] = useDrag(
      () => ({
        type: ItemTypes.SKIP_BUTTON,
        item: { id, left, top },
        collect: (monitor: DragSourceMonitor) => ({
          isDragging: monitor.isDragging()
        })
      }),
      [id, left, top]
    );

    useEffect(() => {
      preview(getEmptyImage(), { captureDraggingState: true });
    }, []);

    return (
      <div
        ref={drag}
        style={getStyles(left, top, isDragging)}
        role="DraggableBox"
      >
        <SkipButton>
          広告をスキップ
          {left > 675 ? <SkipNextIcon /> : <SwipeRightAltIcon />}
        </SkipButton>
      </div>
    );
  }
);
