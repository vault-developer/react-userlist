import {
  ISetDataAction,
  ISetPageAction,
  ISetPageSizeAction,
  IToggleAllSelectionAction,
  IToggleRowSelectionAction,
  types
} from './actions.types';
import {IUser} from './state.types';

export const setPage = (page: number): ISetPageAction => ({
  type: types.SET_PAGE,
  data: page
});

export const setPageSize = (size: number): ISetPageSizeAction => ({
  type: types.SET_PAGE_SIZE,
  data: size
});

export const setData = (data: IUser[]): ISetDataAction => ({
  type: types.SET_DATA,
  data
});

export const toggleRowSelection = (id: string): IToggleRowSelectionAction => ({
  type: types.TOGGLE_ROW_SELECTION,
  data: id
});

export const toggleAllSelection = ():IToggleAllSelectionAction => ({
  type: types.TOGGLE_ALL_SELECTION,
  data: undefined
});
