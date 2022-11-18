import {useState, useEffect, useRef, useMemo, useCallback} from 'react';
import { MoveDirection } from 'utils/CommonModels';

export const useResizableBlock = () => {
  const [moveState, setMoveState] = useState<MoveDirection | null>(null);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (moveState === null || containerRef.current === null) return;
    const state = moveState;
    const container = containerRef.current;

    const moveHandler = (ev: MouseEvent | TouchEvent) => {
      ev.preventDefault();
      const {left, top} = container.getBoundingClientRect();
      const {clientX, clientY} = ('clientX' in ev) ? ev : ev.changedTouches[0];
      const width = Math.max(0, clientX - left);
      const height = Math.max(0, clientY - top);
      if (state === 'both' || state === 'horizontal') setWidth(width);
      if (state === 'both' || state === 'vertical') setHeight(height);
    }
    document.addEventListener('mousemove', moveHandler, {passive: false});
    document.addEventListener('touchmove', moveHandler, {passive: false});

    const upHandler = (ev: MouseEvent | TouchEvent) => {setMoveState(null);}
    document.addEventListener('mouseup', upHandler);
    document.addEventListener('touchend', upHandler);

    document.body.style.cursor = ({
      both: 'nwse-resize',
      horizontal: 'ew-resize',
      vertical: 'ns-resize'
    })[state];
    
    return () => {
      document.removeEventListener('mousemove', moveHandler);
      document.removeEventListener('touchmove', moveHandler);
      document.removeEventListener('mouseup', upHandler);
      document.removeEventListener('touchend', upHandler);
      document.body.style.cursor = 'unset';
    }
  }, [moveState]);

  const [bothHandler, verticalHandler, horizontalHandler] = useMemo(() => {
    const dirs = ['both', 'vertical', 'horizontal'] as const ;
    return dirs.map(d => (() => setMoveState(d)));
  }, []);

  const clickHandler = useCallback(()=>{}, []);

  return {containerRef, width, height, bothHandler, verticalHandler, horizontalHandler, clickHandler};
}