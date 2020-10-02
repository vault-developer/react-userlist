import React, { memo } from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { useTableTotal } from './TableTotal.hooks';

// memo used for optimize rerenders after pageSize, page changing
export const TableTotal = memo(() => {
  const users = useTableTotal();

  return (
    <TableRow>
      <TableCell colSpan={4}>
        {`Пользователи: ${users.join(', ')}`}
      </TableCell>
    </TableRow>
  );
});