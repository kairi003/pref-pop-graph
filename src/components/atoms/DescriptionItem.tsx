import React from 'react';
import style from './DescriptionItem.module.css';

type Props = {title: string, className?: string, style?: React.CSSProperties};
const DescriptionItem: React.FC<React.PropsWithChildren<Props>> = ({title, children}) => {
  return <>
    <dt className={style.title}>{title}</dt>
    <dd className={style.detail}>{children}</dd>
  </>
} 

export default DescriptionItem;
