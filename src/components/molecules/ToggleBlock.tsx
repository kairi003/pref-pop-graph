import Checkbox from 'components/atoms/Checkbox';
import FormLabel from 'components/atoms/FormLabel';
import style from './ToggleBlock.module.css';

type Props = React.ComponentPropsWithoutRef<'input'> & {
  labelText: string;
};
const ToggleBlock: React.FC<Props> = ({labelText, ...inputProps}) => {
  return <div className={style.ToggleBlock}>
    <Checkbox {...inputProps} className={style.Checkbox}/>
    <FormLabel htmlFor={inputProps.id}  className={style.FormLabel}>
      {labelText}
    </FormLabel>
  </div>
}

export default ToggleBlock;