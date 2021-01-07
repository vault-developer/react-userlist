/* eslint-disable @typescript-eslint/no-unsafe-call,@typescript-eslint/unbound-method */
import React from 'react';
import axios from 'axios';
import {render, waitFor} from 'test/test-utils';

import {getStore} from 'src/redux/store';

import {App} from './App';

describe('components/App:', () => {
  test('render without error', async () => {
    // @ts-ignore
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));

    const {container} = render(<App />, getStore());

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

    expect(container.querySelector('.app')).toBeTruthy();
  });
});
