import { useDispatch, useSelector } from 'react-redux';

import { setPage, setPageSize } from 'src/redux/modules/users/actions';

export const useTableFooter = () => {
  const dispatch = useDispatch();

  const length = useSelector(({ users }) => users.allIds.length);
  const page = useSelector(({ users }) => users.page);
  const size = useSelector(({ users }) => users.pageSize);

  const handleChangePage = (e, page) => dispatch(setPage(page));
  const handleChangeRowsPerPage = e => dispatch(setPageSize(e.target.value));

  return {
    size,
    page,
    length,

    handleChangePage,
    handleChangeRowsPerPage
  };
};
