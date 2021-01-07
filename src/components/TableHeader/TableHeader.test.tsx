import React from 'react';
import {fireEvent, render} from 'test/test-utils';

import {setData} from 'src/redux/modules/users/actions';
import {IUser} from 'src/redux/modules/users/state.types';
import {getStore} from 'src/redux/store';

import {TableHeader} from './TableHeader';

describe('components/TableHeader:', () => {
  // Need additional wrapper tags because of validateDOMNesting warnings
  const component = (<table><TableHeader /></table>);

  test('render without error', () => {
    const {getByText} = render(component, getStore());
    expect(getByText(/Имя/)).toBeTruthy();
    expect(getByText(/Фамилия/)).toBeTruthy();
    expect(getByText(/Возраст/)).toBeTruthy();
  });

  test('click should update redux state', () => {
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
    ];
    const store = getStore();
    store.dispatch(setData(users));
    const {container} = render(component, store);

    const checkbox: HTMLInputElement | null = container.querySelector('input[type="checkbox"]');

    if (!checkbox) throw new Error('checkbox is not found');

    expect(store.getState().users.selectedIds.length).toBe(0);
    fireEvent.click(checkbox);
    expect(store.getState().users.selectedIds.length).toBe(users.length);
    fireEvent.click(checkbox);
    expect(store.getState().users.selectedIds.length).toBe(0);
  });
});
