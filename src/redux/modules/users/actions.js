import { types } from './types';

export const setPage = page => ({
  type: types.SET_PAGE,
  data: page
});

export const setPageSize = size => ({
  type: types.SET_PAGE_SIZE,
  data: size
});

export const setData = size => ({
  type: types.SET_DATA,
  data: size
});

export const toggleRowSelection = id => ({
  type: types.TOGGLE_ROW_SELECTION,
  data: id
});

export const toggleAllSelection = () => ({
  type: types.TOGGLE_ALL_SELECTION
});
