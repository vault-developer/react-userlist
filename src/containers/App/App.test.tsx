/* eslint-disable @typescript-eslint/no-unsafe-call,@typescript-eslint/unbound-method */
import React from 'react';
import {mockedAxios, render, waitFor} from 'test/test-utils';

import {getStore} from 'src/redux/store';

import {App} from './App';

describe('components/App:', () => {
  test('render without error', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));

    const {container} = render(<App />, getStore());

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));

    expect(container.querySelector('.app')).toBeTruthy();
  });
});
