import React from 'react';
import style from './HeaderTitle.module.css';

type Props = {title: string, className?: string, style?: React.CSSProperties};
const HeaderTitle: React.FC<Props> = ({title, ...props}) => {
  const className = [props.className, style.HeaderTitle].join(' ');
  return <h1 {...props} className={className}>{title}</h1>
} 

export default HeaderTitle;
