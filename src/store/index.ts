import {createStore as createStoreRedux} from 'redux';

import {reducers} from 'reducers/index';
import {AsideState, initialState as AsideInitialState} from 'reducers/aside';
import {RouterState, initialState as RouterInitialState} from 'reducers/router';
import {SearchState, initialState as SearchInitialState} from 'reducers/search';

export type State = {
  aside: AsideState;
  router: RouterState;
  search: SearchState;
};

export const initialState: State = {
  aside: AsideInitialState,
  router: RouterInitialState,
  search: SearchInitialState,
};

export const createStore = (initialState: State) => {
  return createStoreRedux(
      reducers,
      initialState,
      process.env.NODE_ENV === 'development' ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() : undefined
  );
};
