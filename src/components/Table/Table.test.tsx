/* eslint-disable @typescript-eslint/no-unsafe-call,@typescript-eslint/unbound-method */
import React from 'react';
import {mockedAxios, render, waitFor} from 'test/test-utils';

import {getStore} from 'src/redux/store';

import {Table} from './Table';

describe('components/Table:', () => {
  test('render without error', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));

    const {queryByText} = render(<Table />, getStore());

    expect(queryByText(/User list/)).toBeFalsy();

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));

    expect(queryByText(/User list/)).toBeTruthy();
  });
});
