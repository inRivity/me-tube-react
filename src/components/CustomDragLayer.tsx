import type { CSSProperties, FC } from 'react';
import type { XYCoord } from 'react-dnd';
import { useDragLayer } from 'react-dnd';
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import { ItemTypes } from './ItemTypes';
import { SkipButton } from './SkipButton';

const layerStyles: CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
};

function getItemStyles(
  initialOffset: XYCoord | null,
  currentOffset: XYCoord | null
) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none'
    };
  }

  let x = currentOffset.x;
  let y = initialOffset.y;

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform
  };
}

export interface CustomDragLayerProps {}

export const CustomDragLayer: FC<CustomDragLayerProps> = (props) => {
  const {
    itemType,
    isDragging,
    item,
    diffOffset,
    initialOffset,
    currentOffset
  } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    diffOffset: monitor.getDifferenceFromInitialOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }));

  const delta = diffOffset as {
    x: number;
  };

  const left = Math.round(item?.left + delta?.x);

  function renderItem(left: number) {
    switch (itemType) {
      case ItemTypes.SUKI_BUTTON:
        return 'スキ';
      case ItemTypes.SKIP_BUTTON:
        return (
          <SkipButton>
            広告をスキップ
            {left < 675 ? <SwipeRightAltIcon /> : <SkipNextIcon />}
          </SkipButton>
        );
      default:
        return null;
    }
  }

  if (!isDragging) {
    return null;
  }
  return (
    <div style={layerStyles}>
      <div style={getItemStyles(initialOffset, currentOffset)}>
        {renderItem(left)}
      </div>
    </div>
  );
};
