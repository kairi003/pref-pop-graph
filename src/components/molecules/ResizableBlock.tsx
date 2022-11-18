import React from 'react';
import style from './ResizableBlock.module.css';
import ResizeHandle from 'components/atoms/ResizeHandle';
import {useResizableBlock} from 'hooks/ResizableBlockHook';
import { MoveDirection } from 'utils/CommonModels';

type Props = React.ComponentPropsWithRef<'div'> & {
  direction: MoveDirection,
  contentRef: React.RefObject<any>;
};
const ResizableBlock: React.FC<Props> = ({direction, children, className, contentRef,...props}) => {
  const {containerRef, width, height, bothHandler, verticalHandler, horizontalHandler} = useResizableBlock();

  return <div
    {...props}
    className={`${style.ResizableBlock} ${style[direction]} ${className}`}
    ref={containerRef}
    style={{width, height, aspectRatio: (width || height) && 'unset'}}
  >
    <div className={`${style.content}`} ref={contentRef}>
      {children}
    </div>
    {(direction === 'both' || direction === 'horizontal') && <ResizeHandle direction='horizontal' onMouseDown={horizontalHandler} onTouchStart={horizontalHandler}/>}
    {(direction === 'both' || direction === 'vertical') && <ResizeHandle direction='vertical' onMouseDown={verticalHandler} onTouchStart={verticalHandler}/>}
    {(direction === "both") && <ResizeHandle direction='both' onMouseDown={bothHandler} onTouchStart={bothHandler}/>}
  </div>
} 

export default ResizableBlock;
