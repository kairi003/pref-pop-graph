import React from 'react';
import style from './ResizeHandle.module.css';
import {MoveDirection} from 'utils/CommonModels';

type Props = React.ComponentPropsWithoutRef<'div'> & {
  direction: MoveDirection
};
const ResizeHandle: React.FC<Props> = ({direction, ...props}) => {
  return <div {...props} className={`${style.ResizeHandle} ${style[direction]}`}></div>
} 

export default ResizeHandle;
