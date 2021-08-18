import {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import {get} from 'src/helpers/axios';
import {setData} from 'src/redux/modules/users/actions';
import {IUserDTO} from 'src/types/api.dto';

import {USERS} from '../../configs/api';

export const useTable = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(() => {
    const {cancel} = get<IUserDTO[]>({
      location: USERS.get,
      onStart: () => setLoading(true),
      onSuccess: res => dispatch(setData(res.data)),
      // ideally we should show the error in UI
      onFailure: err => console.log(err.message),
      onFinish: () => setLoading(false)
    });

    return {cancel: () => cancel('Operation canceled by the user.')};
  }, [dispatch]);

  useEffect(() => {
    const {cancel} = fetchData();

    // clear on unmount
    return cancel;
  }, [dispatch, fetchData]);

  return loading;
};
