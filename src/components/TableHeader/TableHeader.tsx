import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { useTableHeader } from 'src/components/TableHeader/TableHeader.hooks';

export const TableHeader = () => {
  const { isIntermediate, isChecked, handleClick } = useTableHeader();

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" onClick={handleClick}>
          <Checkbox
            indeterminate={isIntermediate}
            checked={isChecked}
          />
        </TableCell>
        <TableCell>Имя</TableCell>
        <TableCell align="center">Фамилия</TableCell>
        <TableCell align="center">Возраст</TableCell>
      </TableRow>
    </TableHead>
  );
};
