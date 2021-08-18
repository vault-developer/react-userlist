import React from 'react';
import {fireEvent, render, waitFor} from 'test/test-utils';

import {setData, toggleRowSelection} from 'src/redux/modules/users/actions';
import {IUser} from 'src/redux/modules/users/state.types';
import {getStore} from 'src/redux/store';

import {TablePagination} from './TablePagination';

describe('components/TablePagination:', () => {
  const users:IUser[] = [
    {
      firstName: 'Albert', lastName: 'Trott', age: 30, id: '4$#@1!'
    },
    {
      firstName: 'Alex', lastName: 'Ivanov', age: 15, id: '5$#@1!'
    },
    {
      firstName: 'Sidr', lastName: 'Sidorov', age: 50, id: '6$#@1!'
    },
    {
      firstName: 'Sidr1', lastName: 'Sidorov1', age: 50, id: '7$#@1!'
    },
    {
      firstName: 'Sidr2', lastName: 'Sidorov2', age: 50, id: '8$#@1!'
    },
    {
      firstName: 'Sidr3', lastName: 'Sidorov3', age: 50, id: '9$#@1!'
    }
  ];

  const setupStore = () => {
    const store = getStore();
    store.dispatch(setData(users));
    store.dispatch(toggleRowSelection(users[0].id));
    return store;
  };

  test('render without error', () => {
    const store = setupStore();
    const {getByText} = render(<TablePagination />, store);
    expect(getByText(/Show per page:/)).toBeTruthy();
  });

  test('should update redux store after page changing', () => {
    const store = setupStore();
    const {getByTitle} = render(<TablePagination />, store);
    const nextPageBtn = getByTitle('Next page');

    expect(store.getState().users.page).toBe(0);
    fireEvent.click(nextPageBtn);
    expect(store.getState().users.page).toBe(1);
  });

  test('should update redux store after pageSize changing', async () => {
    const store = setupStore();
    const {container} = render(<TablePagination />, store);

    const pageSizeSelect = container.querySelector('div[role="button"]');
    if (!pageSizeSelect) throw new Error('pageSizeInput is not found');

    expect(store.getState().users.pageSize).toBe(5);

    // open select
    fireEvent.mouseDown(pageSizeSelect);

    // wait for DOM update
    await waitFor(() => new Promise(res => setTimeout(res, 0)));

    // should query document because of ui-library speciality
    const pageSizeOption = document.querySelector('li[data-value="7"]');
    if (!pageSizeOption) throw new Error('pageSizeOption is not found');

    // choose select option
    fireEvent.click(pageSizeOption);

    expect(store.getState().users.pageSize).toBe(7);
  });
});
