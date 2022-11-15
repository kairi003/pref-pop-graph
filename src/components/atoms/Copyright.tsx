import React from 'react'

type Props = {publishYear: number, auther: string, className?: string, style?: React.CSSProperties};
const Copyright: React.FC<Props> = ({publishYear, auther, ...props}) => {
  const className = [props.className].join(' ');
  return <small {...props} className={className}>&copy; {publishYear} {auther}</small>
} 

export default Copyright;
