import {useCallback} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

import {toggleRowSelection} from 'src/redux/modules/users/actions';
import {IState} from 'src/redux/store';

export const useTableRow = ({id}: { id: string }) => {
  const dispatch = useDispatch();

  const {firstName, age, lastName} = useSelector((state: IState) => state.users.byId[id],
    shallowEqual);
  const isSelected = useSelector((state: IState) => state.users.selectedIds.includes(id));

  const handleSelect = useCallback(() => dispatch(toggleRowSelection(id)), [dispatch, id]);

  return {
    age,
    lastName,
    firstName,
    isSelected,

    handleSelect
  };
};
