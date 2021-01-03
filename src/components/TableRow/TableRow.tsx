import React, { memo } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TableCell from '@material-ui/core/TableCell';
import MatTableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';

import { useTableBody } from 'src/components/TableRow/TableRow.hooks';

// memo used for optimize rerenders after pageSize changing
export const TableRow = memo<any>(({ id }) => {
  const {
    age,
    lastName,
    firstName,
    isSelected,

    handleSelect
  } = useTableBody({ id });

  return (
    <MatTableRow>
      <TableCell padding="checkbox">
        <Checkbox
          checked={isSelected}
          onClick={handleSelect}
        />
      </TableCell>
      <TableCell>{firstName}</TableCell>
      <TableCell align="center">{lastName}</TableCell>
      <TableCell align="center">{age}</TableCell>
    </MatTableRow>
  );
}) as any;

TableRow.propTypes = {
  id: PropTypes.string.isRequired
};
