import Checkbox from 'components/atoms/Checkbox';
import FormLabel from 'components/atoms/FormLabel';

type Props = React.ComponentPropsWithoutRef<'input'> & {
  labelText: string;
};
const LabeledCheckbox: React.FC<Props> = ({labelText, ...inputProps}) => {
  return <div>
    <Checkbox {...inputProps}/>
    <FormLabel htmlFor={inputProps.id}>
      {labelText}
    </FormLabel>
  </div>
}

export default LabeledCheckbox;