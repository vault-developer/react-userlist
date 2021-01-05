import {IUser} from './state.types';

export const types = {
  SET_PAGE: 'USERS/SET_PAGE',
  SET_PAGE_SIZE: 'USERS/SET_PAGE_SIZE',
  SET_DATA: 'USERS/SET_DATA',
  TOGGLE_ROW_SELECTION: 'USERS/TOGGLE_ROW_SELECTION',
  TOGGLE_ALL_SELECTION: 'USERS/TOGGLE_ALL_SELECTION',
};

export interface ISetPageAction {
  type: typeof types.SET_PAGE,
  data: number
}

export interface ISetPageSizeAction {
  type: typeof types.SET_PAGE_SIZE,
  data: number
}

export interface ISetDataAction {
  type: typeof types.SET_PAGE_SIZE,
  data: IUser[]
}

export interface IToggleRowSelectionAction {
  type: typeof types.TOGGLE_ROW_SELECTION,
  data: string
}

export interface IToggleAllSelectionAction {
  type: typeof types.SET_PAGE_SIZE,
  data: undefined
}

export type IUsersAction =
  ISetPageAction |
  ISetPageSizeAction |
  ISetDataAction |
  IToggleRowSelectionAction |
  IToggleAllSelectionAction
