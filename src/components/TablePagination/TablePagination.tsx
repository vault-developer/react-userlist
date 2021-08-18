import React from 'react';
import MatTablePagination from '@material-ui/core/TablePagination';

import {useTableFooter} from 'src/components/TablePagination/TablePagination.hooks';

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
      onPageChange={handleChangePage}
      rowsPerPageOptions={[5, 7, 10]}
      labelRowsPerPage="Show per page:"
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};
