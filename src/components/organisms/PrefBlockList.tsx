import React, {useCallback} from 'react';
import ToggleBlock from 'components/molecules/ToggleBlock';
import style from './PrefBlockList.module.css'

type Props = {
  prefs: {prefCode: number, prefName: string}[],
  checkedList: boolean[],
  loadingList: boolean[], 
  onChecked: (index: number) => void,
  onUnChecked: (index: number) => void
}
const PrefBlockList: React.FC<Props> = ({prefs, checkedList, loadingList, onChecked, onUnChecked}) => {


  const checkHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(event.target.value);
    (event.target.checked) ? onChecked(index) : onUnChecked(index);
  }, [onChecked, onUnChecked]);


  return <>
  <div className={style.PrefBlockList}>
    {prefs.map(({prefCode, prefName}, index) => {
      const props = {
        id: `prefCheck${prefCode}`,
        onChange: checkHandler,
        value: index,
        checked: checkedList[index],
        disabled: loadingList[index],
        key: index,
        labelText: prefName
      }
      return <ToggleBlock {...props}/>;
    })}
  </div>
</>
}

export default PrefBlockList;