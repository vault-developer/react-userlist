import React from 'react';
import {render} from 'test/test-utils';

import {setData, setPageSize} from 'src/redux/modules/users/actions';
import {IUser} from 'src/redux/modules/users/state.types';
import {getStore} from 'src/redux/store';

import {TableBody} from './TableBody';

describe('components/TableBody:', () => {
  // Need additional wrapper tags because of validateDOMNesting warnings
  const component = (<table><TableBody /></table>);

  test('render without error', () => {
    const {container} = render(component, getStore());

    expect(container.querySelector('tbody')).toBeTruthy();
  });

  test('should render pageSize amount of rows', () => {
    const users:IUser[] = [
      {
        firstName: 'Albert', lastName: 'Name_1', age: 30, id: '4$#@1!'
      },
      {
        firstName: 'Alex', lastName: 'Name_2', age: 15, id: '5$#@1!'
      },
      {
        firstName: 'Sidr', lastName: 'Name_3', age: 50, id: '6$#@1!'
      },
      {
        firstName: 'Sidr1', lastName: 'Name_4', age: 50, id: '7$#@1!'
      },
      {
        firstName: 'Sidr2', lastName: 'Name_5', age: 50, id: '8$#@1!'
      },
      {
        firstName: 'Sidr3', lastName: 'Name_6', age: 50, id: '9$#@1!'
      }
    ];
    const store = getStore();
    store.dispatch(setData(users));
    store.dispatch(setPageSize(2));
    const {queryAllByText} = render(component, store);
    const rows = queryAllByText(/Name/);

    expect(rows.length).toBe(2);
  });
});
