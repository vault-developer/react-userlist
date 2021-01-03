import { combineReducers } from 'redux';

import { reducer as usersReducer } from 'src/redux/modules/users/reducer';

export const reducer = combineReducers({
  users: usersReducer
});
