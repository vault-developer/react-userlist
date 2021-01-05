import {
  ISetDataAction,
  ISetPageAction,
  ISetPageSizeAction,
  IToggleRowSelectionAction,
  IUsersAction,
  types
} from './actions.types';
import {IUsersById, IUsersState} from './state.types';

const initial: IUsersState = {
  byId: {},
  selectedIds: [],
  allIds: [],
  page: 0,
  pageSize: 5
};

export const reducer = (state = initial, action: IUsersAction): IUsersState => {
  const {type} = action;

  switch (type) {
    case types.SET_DATA: {
      // уточнение типа
      const {data} = action as ISetDataAction;
      return {
        ...state,
        allIds: data.map(el => el.id),
        byId: data.reduce((acc, el) => {
          const {id, ...rest} = el;
          acc[id] = {...rest};
          return acc;
        }, {} as IUsersById)
      };
    }
    case types.SET_PAGE: {
      const {data} = action as ISetPageAction;
      return {...state, page: data};
    }

    case types.SET_PAGE_SIZE: {
      const {data} = action as ISetPageSizeAction;
      return {...state, pageSize: data};
    }

    case types.TOGGLE_ROW_SELECTION: {
      const {data} = action as IToggleRowSelectionAction;
      if (!state.selectedIds.includes(data)) {
        const selectedIds = [...state.selectedIds];
        selectedIds.push(data);
        return {...state, selectedIds};
      }
      return {
        ...state,
        selectedIds: state.selectedIds.filter(el => el !== data)
      };
    }

    case types.TOGGLE_ALL_SELECTION:
      if (state.selectedIds.length === state.allIds.length) {
        return {...state, selectedIds: []};
      }
      return {...state, selectedIds: [...state.allIds]};

    default:
      return state;
  }
};
