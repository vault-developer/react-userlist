import React from 'react';
import MatTableBody from '@material-ui/core/TableBody';

import {useTableBody} from 'src/components/TableBody/TableBody.hooks';
import {TableRow} from 'src/components/TableRow';
import {TableTotal} from 'src/components/TableTotal';

export const TableBody = () => {
  const {slicedIds} = useTableBody();

  return (
    <MatTableBody>
      {slicedIds.map(el => <TableRow id={el} key={el}/>)}
      <TableTotal/>
    </MatTableBody>
  );
};
