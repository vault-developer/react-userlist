import React from 'react';

import MatTableBody from '@material-ui/core/TableBody';

import { TableRow } from '#components/TableRow';
import { TableTotal } from '#components/TableTotal';

import { useTableBody } from './TableBody.hooks';

export const TableBody = () => {
  const { slicedIds } = useTableBody();

  return (
    <MatTableBody>
      {slicedIds.map(el => <TableRow id={el} key={el} />)}
      <TableTotal />
    </MatTableBody>
  );
};
