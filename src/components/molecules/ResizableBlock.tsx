import React from 'react';
import style from './ResizableBlock.module.css';
import ResizeHandle from 'components/atoms/ResizeHandle';
import {useResizableBlock} from 'hooks/ResizableBlockHook';
import { MoveDirection } from 'utils/CommonModels';

type Props = {
  className?: string, style?: React.CSSProperties,
  direction: MoveDirection
};
const ResizableBlock: React.FC<React.PropsWithChildren<Props>> = ({direction, children, className, ...props}) => {
  
  const {containerRef, width, height, bothHandler, verticalHandler, horizontalHandler} = useResizableBlock();
  
  return <div
    {...props}
    className={`${style.ResizableBlock} ${style[direction]} ${className}`}
    ref={containerRef}
    style={{width, height}}
  >
    <div className={`${style.content}`} draggable>
      {children}
    </div>
    {(direction !== "vertical") && <ResizeHandle direction='horizontal' onMouseDown={horizontalHandler} onTouchStart={horizontalHandler}/>}
    {(direction !== "horizontal") && <ResizeHandle direction='vertical' onMouseDown={verticalHandler} onTouchStart={verticalHandler}/>}
    {(direction === "both") && <ResizeHandle direction='both' onMouseDown={bothHandler} onTouchStart={bothHandler}/>}
  </div>
} 

export default ResizableBlock;
