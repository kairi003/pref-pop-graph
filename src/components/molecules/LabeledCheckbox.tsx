import Checkbox from 'components/atoms/Checkbox';
import FormLabel from 'components/atoms/FormLabel';
import { useState, useCallback } from 'react';
import style from './LabeledCheckbox.module.css';

type Props = React.ComponentPropsWithoutRef<'input'> & {
  labelText: string;
};
const LabeledCheckbox: React.FC<Props> = ({labelText, onChange, className, ...inputProps}) => {
  const [checked, setChecked] = useState<boolean>(!!inputProps.checked);
  if (!!inputProps.checked !== checked) setChecked(!!inputProps.checked);
  const changeEventHandler: React.ChangeEventHandler<HTMLInputElement> = useCallback(event => {
    onChange?.(event);
    setChecked(event.target.checked);
  }, [onChange]);
  const disabled = !!inputProps.disabled;
  return <div className={[style.LabeledCheckbox, disabled&&style.disabled, checked&&style.checked, className].join(' ')}>
    <Checkbox {...inputProps} onChange={changeEventHandler} className={style.pointable}/>
    <FormLabel htmlFor={inputProps.id} className={style.pointable}>
      {labelText}
    </FormLabel>
  </div>
}

export default LabeledCheckbox;