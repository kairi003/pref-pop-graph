import React from 'react';

type Props = React.ComponentPropsWithoutRef<'input'>;
const Checkbox: React.FC<Props> = (props) => {
    return <input {...props} type="checkbox"/>
}

export default Checkbox;
