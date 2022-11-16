import React from 'react';
import style from './Contacts.module.css';

type Props = React.ComponentPropsWithoutRef<'address'>;
const Contacts: React.FC<Props> = (props) => {
  const className = [props.className, style.Contacts].join(' ');
  return <address {...props} className={className}>
    {props.title && <h3 className={style.title}>{props.title}</h3>}
    {props.children}
  </address>
} 

export default Contacts;
