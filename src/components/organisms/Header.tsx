import React from 'react';
import HeaderTitle from 'components/atoms/HeaderTitle';
import HeaderDescription from 'components/atoms/HeaderDescription';
import style from './Header.module.css'

export type HeaderProps = {title: string, description?: string, className?: string, style?: React.CSSProperties};
const Header: React.FC<HeaderProps> = ({title, description, ...props}) => {
  const className = [props.className, style.Header].join(' ');
  return <header className={className}>
    <HeaderTitle title={title}/>
    {description && <HeaderDescription text={description}/>}
  </header>
} 

export default Header;
