import {ActionTypes, Update} from 'actions/router';

import {PAGES} from 'routs/index';
import Analytics from 'utils/Analytics';

export type RouterState = {
  location: string;
  modified: string;
};

export const initialState: RouterState = {
  location: '/',
  modified: ''
};

export const router = (state = initialState, action: Update) => {
  switch (action.type) {
    case ActionTypes.UPDATE:
      Analytics.pageview({
        url: action.location,
        referer: state.location,
        title: PAGES[action.location].metadata.title,
      });

      // TODO dispatch(aside(false))

      return {...state, location: action.location};
    default:
      return state;
  }
};
