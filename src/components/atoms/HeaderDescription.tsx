import React from 'react';
import style from './HeaderDescription.module.css';

type Props = {text: string, className?: string, style?: React.CSSProperties};
const HeaderDescription: React.FC<Props> = ({text, ...props}) => {
  const className = [props.className, style.HeaderDescription].join(' ');
  return <p {...props} className={className}>{text}</p>
} 

export default HeaderDescription;
