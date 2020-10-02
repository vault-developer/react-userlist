import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { toggleAllSelection } from '#redux/modules/users/actions';

export const useTableHeader = () => {
  const dispatch = useDispatch();

  const [isIntermediate, isChecked] = useSelector(({ users }) => {
    const { length } = users.allIds;
    const { length: selected } = users.selectedIds;

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
