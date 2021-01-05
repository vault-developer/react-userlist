import React from 'react'
import {useDispatch, useSelector} from 'react-redux';

import {setPage, setPageSize} from 'src/redux/modules/users/actions';
import {IState} from "../../redux/store";

export const useTableFooter = () => {
  const dispatch = useDispatch();

  const length = useSelector((state: IState) => state.users.allIds.length);
  const page = useSelector((state: IState) => state.users.page);
  const size = useSelector((state: IState) => state.users.pageSize);

  const handleChangePage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number) => dispatch(setPage(page));
  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(setPageSize(Number(e.target.value)));

  return {
    size,
    page,
    length,

    handleChangePage,
    handleChangeRowsPerPage
  };
};
