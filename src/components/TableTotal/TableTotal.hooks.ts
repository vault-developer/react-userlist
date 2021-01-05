import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {IState} from "../../redux/store";

export const useTableTotal = () => {
  const selected = useSelector((state: IState) => state.users.selectedIds);
  const byId = useSelector((state: IState) => state.users.byId);

  // other option - to use reselect for memoization result
  const users = useMemo(() => selected.map(el => byId[el].firstName), [selected, byId]);

  return users;
};
