import React from 'react';
import {render} from 'test/test-utils';

import {setData, toggleRowSelection} from 'src/redux/modules/users/actions';
import {IUser} from 'src/redux/modules/users/state.types';
import {getStore} from 'src/redux/store';

import {TableTotal} from './TableTotal';

describe('components/TableTotal:', () => {
  // Need additional wrapper tags because of validateDOMNesting warnings
  const component = (<table><tbody><TableTotal /></tbody></table>);

  test('render without error', () => {
    const {getByText} = render(component, getStore());
    expect(getByText(/Пользователи/)).toBeTruthy();
  });

  test('render selected users', () => {
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
    store.dispatch(toggleRowSelection(users[0].id));
    store.dispatch(toggleRowSelection(users[1].id));

    const {getByText} = render(component, store);
    const text = getByText(/Пользователи/).textContent || '';

    expect(text.includes(users[0].firstName)).toBeTruthy();
    expect(text.includes(users[1].firstName)).toBeTruthy();
    expect(text.includes(users[2].firstName)).toBeFalsy();
  });
});
