import React from 'react'

type Props = {href: string, text?: string, className?: string, style?: React.CSSProperties};
const Link: React.FC<Props> = ({text, ...props}) => {
  const className = [props.className].join(' ');
  text ??= props.href;
  return <a {...props} className={className}>{text}</a>
} 

export default Link;
