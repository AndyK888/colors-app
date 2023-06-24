import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import {DndContext} from '@dnd-kit/core';
import {SortableContext} from '@dnd-kit/sortable';
const DraggableColorList = DndContext(({ colors, removeColor }) => {
  return (
    <DndContext style={{ height: "100%" }}>
    <SortableContext>
    {/* {colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          key={color.name}
          color={color.color}
          name={color.name}
          handleClick={() => removeColor(color.name)}
        />
      ))} */}
    </SortableContext>
      
    </DndContext>
  );
});
export default DraggableColorList;
