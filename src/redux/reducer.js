import { combineReducers } from 'redux';

import { reducer as usersReducer } from './modules/users/reducer';

export const reducer = combineReducers({
  users: usersReducer
});
