import React from 'react';

type Props = {address: string, text?: string, className?: string, style?: React.CSSProperties};
const Mail: React.FC<Props> = ({text, address, ...props}) => {
  const className = [props.className].join(' ');
  text ??= address;
  const href = 'mailto:' + address;
  return <a {...props} href={href} className={className}>{text}</a>
} 

export default Mail;
