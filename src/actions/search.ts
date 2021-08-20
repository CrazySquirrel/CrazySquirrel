export enum ActionTypes {
  SEARCH = '[SEARCH] SEARCH'
}

export interface Search {
  type: ActionTypes.SEARCH;
  searchText: string;
  searchResult: string[];
}

export const search = (searchText: string, searchResult: string[]): Search => ({
  type: ActionTypes.SEARCH,
  searchText,
  searchResult,
});
