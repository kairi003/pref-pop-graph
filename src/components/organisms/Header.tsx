import React from 'react'
import HeaderTitle from 'components/atoms/HeaderTitle'
import HeaderDescription from 'components/atoms/HeaderDescription';

export type HeaderProps = {title: string, description?: string, className?: string, style?: React.CSSProperties};
const Header: React.FC<HeaderProps> = ({title, description, ...props}) => {
  const className = [props.className].join(' ');
  return <header className={className}>
    <HeaderTitle title={title}/>
    {description && <HeaderDescription text={description}/>}
  </header>
} 

export default Header;
