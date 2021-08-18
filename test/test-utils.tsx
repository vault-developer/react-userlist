import React from 'react';
import {Provider} from 'react-redux';
import {render as rtlRender} from '@testing-library/react';
import axios from 'axios';
import {Store} from 'redux';

import {IState} from 'src/redux/store';

const render = (
  node: React.ReactElement,
  reduxStore: Store<IState>
) => {
  if (!reduxStore) return rtlRender(node);
  return rtlRender(<Provider store={reduxStore}>{node}</Provider>);
};

const mockedAxios = axios as jest.Mocked<typeof axios>;

// re-export everything
export * from '@testing-library/react';
// override render method
export {render, mockedAxios};
