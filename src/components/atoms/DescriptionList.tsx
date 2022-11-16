import React from 'react';
import style from './DescriptionList.module.css';

type Props = {className?: string, style?: React.CSSProperties};
const DescriptionList: React.FC<React.PropsWithChildren<Props>> = ({children, ...props}) => {
  const className = [style.DescriptionList, props.className].join(' ');
  return <dl className={className}>
    {children}
  </dl>
}

export default DescriptionList;
