import { CSSProperties } from "react";
import { useDragLayer, XYCoord } from "react-dnd";

export const CustomDragLayer = (props: {}) => {
    const {
      item,
      itemType,
      isDragging,
      initialCursorOffset,
      initialFileOffset,
      currentFileOffset,
    } = useDragLayer((monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialCursorOffset: monitor.getInitialClientOffset(),
      initialFileOffset: monitor.getInitialSourceClientOffset(),
      currentFileOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    }));
  
    if (!isDragging) {
      return null;
    }
  
    return (
      <div style={layerStyles}>
        <div
          style={getItemStyles(
            initialCursorOffset,
            initialFileOffset,
            currentFileOffset
          )}
        >
          {itemType === 'skiButton' ? 
          'スキ' : undefined }
          {itemType === 'skipButton' ? 
          'スキップ' : undefined }
        </div>
      </div>
    );
  };
  
  const layerStyles: CSSProperties = {
    position: "fixed",
    pointerEvents: "none",
    zIndex: 100,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  };
  
  function getItemStyles(
    initialCursorOffset: XYCoord | null,
    initialOffset: XYCoord | null,
    currentOffset: XYCoord | null
  ) {
    if (!initialOffset || !currentOffset || !initialCursorOffset) {
      return {
        display: "none",
      };
    }

    const x = currentOffset.x;
    const y = currentOffset.y;
    const transform = `translate(${x}px, ${y}px)`;
  
    return {
      transform,
      WebkitTransform: transform,
      opacity: 0.5,
    };
  }