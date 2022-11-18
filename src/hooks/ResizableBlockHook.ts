import {useState, useEffect, useRef, useMemo, useCallback} from 'react';
import { MoveDirection } from 'utils/CommonModels';

export const useResizableBlock = () => {
  const [moveState, setMoveState] = useState<MoveDirection | null>(null);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const blockRef = useRef<HTMLDivElement>(null);

  // ハンドルをドラッグ開始
  useEffect(() => {
    if (moveState === null || blockRef.current === null) return;
    const state = moveState;
    const container = blockRef.current;
    
    // Mouse|Touch Moveイベントのハンドラ
    // preventDefault でスワイプでのスクロールを防ぐ
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

    // Mouse|Touch Upイベントのハンドラ
    const upHandler = () => {setMoveState(null);}
    document.addEventListener('mouseup', upHandler);
    document.addEventListener('touchend', upHandler);

    // ハンドルドラッグ中はカーソルを変える
    document.body.style.cursor = ({
      both: 'nwse-resize',
      horizontal: 'ew-resize',
      vertical: 'ns-resize'
    })[state];
    
    // CleanupでEventListnerを外す & カーソルを戻す
    return () => {
      document.removeEventListener('mousemove', moveHandler);
      document.removeEventListener('touchmove', moveHandler);
      document.removeEventListener('mouseup', upHandler);
      document.removeEventListener('touchend', upHandler);
      document.body.style.cursor = 'unset';
    }
  }, [moveState]);

  // 3種のハンドルに適用するドラッグ開始ハンドラ
  const [bothHandler, verticalHandler, horizontalHandler] = useMemo(() => {
    const dirs = ['both', 'vertical', 'horizontal'] as const ;
    return dirs.map(d => (() => setMoveState(d)));
  }, []);

  // touchstartイベントが発火するために必要な何もしないClickハンドラ
  const clickHandler = useCallback(()=>{}, []);

  return {blockRef, width, height, bothHandler, verticalHandler, horizontalHandler, clickHandler};
}