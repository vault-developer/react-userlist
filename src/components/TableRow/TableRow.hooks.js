import { useDispatch, useSelector } from 'react-redux';

import { toggleRowSelection } from '#redux/modules/users/actions';

export const useTableBody = ({ id }) => {
  const dispatch = useDispatch();

  const { firstName, age, lastName } = useSelector(({ users }) => users.byId[id]);
  const isSelected = useSelector(({ users }) => users.selectedIds.includes(id));

  const handleSelect = () => dispatch(toggleRowSelection(id));

  return {
    age,
    lastName,
    firstName,
    isSelected,

    handleSelect
  };
};
