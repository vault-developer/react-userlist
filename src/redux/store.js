import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';

import { reducer } from './reducer';

export const store = createStore(reducer, {}, devToolsEnhancer(undefined));
