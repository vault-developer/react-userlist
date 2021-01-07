import React from 'react';
import {fireEvent, render} from 'test/test-utils';

import {setData, toggleRowSelection} from 'src/redux/modules/users/actions';
import {IUser} from 'src/redux/modules/users/state.types';
import {getStore} from 'src/redux/store';

import {TableRow} from './TableRow';

describe('components/TableRow:', () => {
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

  const setupStore = () => {
    const store = getStore();
    store.dispatch(setData(users));
    store.dispatch(toggleRowSelection(users[0].id));
    return store;
  };

  test('render without error', () => {
    const store = setupStore();
    const component = (<table><tbody><TableRow id={users[0].id} /></tbody></table>);
    const {getByText} = render(component, store);
    expect(getByText(users[0].firstName)).toBeTruthy();
    expect(getByText(users[0].lastName)).toBeTruthy();
    expect(getByText(users[0].age)).toBeTruthy();
  });

  test('should have checked checkbox if user is selected', () => {
    const store = setupStore();
    const component = (<table><tbody><TableRow id={users[0].id} /></tbody></table>);
    const {container} = render(component, store);
    const checkbox = container.querySelector('input[type="checkbox"]') as React.InputHTMLAttributes<HTMLInputElement> | null;
    expect(checkbox).toBeTruthy();
    expect(checkbox?.checked).toBeTruthy();
  });

  test('should have unchecked checkbox if user is not selected', () => {
    const store = setupStore();
    const component = (<table><tbody><TableRow id={users[1].id} /></tbody></table>);
    const {container} = render(component, store);
    const checkbox = container.querySelector('input[type="checkbox"]') as React.InputHTMLAttributes<HTMLInputElement> | null;
    expect(checkbox).toBeTruthy();
    expect(checkbox?.checked).toBeFalsy();
  });

  test('click should toggle checkbox and update redux store', () => {
    const store = setupStore();
    const component = (<table><tbody><TableRow id={users[1].id} /></tbody></table>);
    const {container} = render(component, store);
    const checkbox: HTMLInputElement | null = container.querySelector('input[type="checkbox"]');

    if (!checkbox) throw new Error('checkbox is not found');

    expect(checkbox.checked).toBeFalsy();
    expect(store.getState().users.selectedIds.includes(users[1].id)).toBeFalsy();

    fireEvent.click(checkbox);

    expect(checkbox.checked).toBeTruthy();
    expect(store.getState().users.selectedIds.includes(users[1].id)).toBeTruthy();
  });
});
