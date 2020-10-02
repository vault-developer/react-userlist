import { types } from './types';

const initial = {
  byId: {},
  selectedIds: [],
  allIds: [],
  page: 0,
  pageSize: 5
};

export const reducer = (state = initial, action) => {
  const { type, data } = action;

  switch (type) {
    case types.SET_DATA:
      return {
        ...state,
        allIds: data.map(el => el.id),
        byId: data.reduce((acc, el) => {
          const { id, ...rest } = el;
          acc[id] = { ...rest };
          return acc;
        }, {})
      };

    case types.SET_PAGE:
      return { ...state, page: data };

    case types.SET_PAGE_SIZE:
      return { ...state, pageSize: data };

    case types.TOGGLE_ROW_SELECTION:
      if (!state.selectedIds.includes(data)) {
        const selectedIds = [...state.selectedIds];
        selectedIds.push(data);
        return { ...state, selectedIds };
      }
      return {
        ...state,
        selectedIds: state.selectedIds.filter(el => el !== data)
      };

    case types.TOGGLE_ALL_SELECTION:
      if (state.selectedIds.length === state.allIds.length) {
        return { ...state, selectedIds: [] };
      }
      return { ...state, selectedIds: [...state.allIds] };

    default:
      return state;
  }
};
