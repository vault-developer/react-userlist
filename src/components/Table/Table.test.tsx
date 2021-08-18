/* eslint-disable @typescript-eslint/no-unsafe-call,@typescript-eslint/unbound-method */
import React from 'react';
import axios from 'axios';
import {render, waitFor} from 'test/test-utils';

import {getStore} from 'src/redux/store';

import {Table} from './Table';

describe('components/Table:', () => {
  test('render without error', async () => {
    // @ts-ignore
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));

    const {queryByText} = render(<Table />, getStore());

    expect(queryByText(/User list/)).toBeFalsy();

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

    expect(queryByText(/User list/)).toBeTruthy();
  });
});
