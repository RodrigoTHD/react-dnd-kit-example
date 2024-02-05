import { useDraggable } from '@dnd-kit/core';
import { DraggableProps } from '.';
import styles from './Draggable.module.css';
import classNames from 'classnames';

export function Draggable(props: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable'
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
      }
    : undefined;

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes} className={classNames(styles.button)}>
      {props.children}
    </button>
  );
}
