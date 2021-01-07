import React from 'react';
import {Provider} from 'react-redux';
import {render as rtlRender} from '@testing-library/react';
import {Store} from 'redux';

import {IState} from 'src/redux/store';

const render = (
  node: React.ReactElement,
  reduxStore: Store<IState>
) => {
  if (!reduxStore) return rtlRender(node);
  return rtlRender(<Provider store={reduxStore}>{node}</Provider>);
};

// re-export everything
export * from '@testing-library/react';
// override render method
export {render};
