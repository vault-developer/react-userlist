import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension/developmentOnly';

import {reducer} from 'src/redux/reducer';

export type IState = ReturnType<typeof reducer>
export const store = createStore(reducer, {}, devToolsEnhancer({}));
