/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {createStore, Store} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension/developmentOnly';

import {reducer} from 'src/redux/reducer';

export type IState = ReturnType<typeof reducer>
export const store: Store<IState> = createStore(reducer, {}, devToolsEnhancer({}));
