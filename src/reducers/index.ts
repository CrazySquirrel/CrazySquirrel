import {combineReducers} from 'redux';

import {aside} from './aside';
import {router} from './router';
import {search} from './search';

export const reducers = combineReducers({
  aside,
  router,
  search,
});
