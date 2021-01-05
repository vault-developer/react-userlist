import {useDispatch, useSelector} from 'react-redux';

import {toggleRowSelection} from 'src/redux/modules/users/actions';
import {IState} from "../../redux/store";

export const useTableBody = ({id}: { id: string }) => {
  const dispatch = useDispatch();

  const {firstName, age, lastName} = useSelector((state: IState) => state.users.byId[id]);
  const isSelected = useSelector((state: IState) => state.users.selectedIds.includes(id));

  const handleSelect = () => dispatch(toggleRowSelection(id));

  return {
    age,
    lastName,
    firstName,
    isSelected,

    handleSelect
  };
};
