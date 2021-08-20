import {Type} from 'models/aside';

export enum ActionTypes {
  UPDATE = '[ASIDE] UPDATE'
}

export interface Update {
  type: ActionTypes.UPDATE;
  aside: Type
}

export const updateAside = (aside: Type): Update => ({
  type: ActionTypes.UPDATE,
  aside
});
