import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { get } from 'src/helpers/axios';
import { setData } from 'src/redux/modules/users/actions';

export const useTable = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get({
      location: 'https://run.mocky.io/v3/f6f5b765-d05e-4428-a975-32c9ff33e186',
      onSuccess: res => dispatch(setData(res.data)),
      // ideally we should show the error in UI
      onFailure: err => console.log(err),
      onFinish: () => setLoading(false)
    });
  }, []);

  return loading;
};
