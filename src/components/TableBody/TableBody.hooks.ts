import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export const useTableBody = () => {
  const page = useSelector(({ users }) => users.page);
  const size = useSelector(({ users }) => users.pageSize);
  const allIds = useSelector(({ users }) => users.allIds);

  const slicedIds = useMemo(
    () => allIds.slice(size * page, size * (page + 1)),
    [allIds, size, page]
  );

  return { slicedIds };
};
