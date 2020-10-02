import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export const useTableTotal = () => {
  const selected = useSelector(({ users }) => users.selectedIds);
  const byId = useSelector(({ users }) => users.byId);

  // other option - to use reselect for memoization result
  const users = useMemo(() => selected.map(el => byId[el].firstName), [selected, byId]);

  return users;
};
