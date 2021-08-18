import React from 'react';

import {Table} from 'src/components/Table';

import css from './App.less';

export const App: React.FC = () => (
  <div className={css.app}>
    <Table />
  </div>
);
