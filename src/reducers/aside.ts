import {ActionTypes, Update} from 'actions/aside';

import {Type} from 'models/aside';

export type AsideState = {
  aside: Type;
};

export const initialState: AsideState = {
  aside: Type.NONE
};

export const aside = (state = initialState, action: Update) => {
  switch (action.type) {
    case ActionTypes.UPDATE:
      return {...state, aside: action.aside};
    default:
      return state;
  }
};
