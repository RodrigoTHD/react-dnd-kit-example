import { useDroppable } from '@dnd-kit/core';
import { DroppableProps } from '.';

export function Droppable(props: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable'
  });

  const style = {
    color: isOver ? 'green' : undefined,
    padding: '50px',
    border: '1px solid #ccc'
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
