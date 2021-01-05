import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {IState} from "../../redux/store";

export const useTableBody = () => {
  const page = useSelector((state: IState) => state.users.page);
  const size = useSelector((state: IState) => state.users.pageSize);
  const allIds = useSelector((state: IState) => state.users.allIds);

  const slicedIds = useMemo(
    () => allIds.slice(size * page, size * (page + 1)),
    [allIds, size, page]
  );

  return {slicedIds};
};
