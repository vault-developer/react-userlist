import {shallowEqual, useDispatch, useSelector} from 'react-redux';

import {toggleAllSelection} from 'src/redux/modules/users/actions';
import {IState} from 'src/redux/store';

export const useTableHeader = () => {
  const dispatch = useDispatch();

  const [isIntermediate, isChecked] = useSelector((state: IState) => {
    const {length} = state.users.allIds;
    const {length: selected} = state.users.selectedIds;

    return [
      length > selected && selected > 0,
      length === selected && length > 0
    ];
  }, shallowEqual);

  const handleClick = () => dispatch(toggleAllSelection());

  return {
    isChecked,
    isIntermediate,
    handleClick
  };
};
