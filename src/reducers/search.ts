import {ActionTypes, Search} from 'actions/search';

export type SearchState = {
  searchText: string;
  searchResult: string[];
};

export const initialState: SearchState = {
  searchText: '',
  searchResult: []
};

export const search = (state = initialState, action: Search) => {
  switch (action.type) {
    case ActionTypes.SEARCH:
      return {...state, searchText: action.searchText, searchResult: [...action.searchResult]};
    default:
      return state;
  }
};
