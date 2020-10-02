import React from 'react';

import MatTablePagination from '@material-ui/core/TablePagination';

import { useTableFooter } from './TablePagination.hooks';

export const TablePagination = () => {
  const {
    size,
    page,
    length,

    handleChangePage,
    handleChangeRowsPerPage
  } = useTableFooter();

  return (
    <MatTablePagination
      page={page}
      count={length}
      component="div"
      rowsPerPage={size}
      onChangePage={handleChangePage}
      rowsPerPageOptions={[5, 7, 10]}
      labelRowsPerPage="показывать по:"
      onChangeRowsPerPage={handleChangeRowsPerPage}
      labelDisplayedRows={props => `${props.from}-${props.to} из ${props.count}`}
    />
  );
};
