import React from 'react';

type Props = React.ComponentPropsWithoutRef<'label'>;
const FormLabel: React.FC<Props> = (props) => {
  return <label {...props}>{props.children}</label>
}

export default FormLabel;