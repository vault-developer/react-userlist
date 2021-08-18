import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import {get} from 'src/helpers/axios';
import {setData} from 'src/redux/modules/users/actions';
import {IUserDTO} from 'src/types/api.dto';

import {USERS} from '../../configs/api';

export const useTable = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get<IUserDTO[]>({
      location: USERS.get,
      onSuccess: res => dispatch(setData(res.data)),
      // ideally we should show the error in UI
      onFailure: err => console.log(err),
      onFinish: () => setLoading(false)
    });
  }, [dispatch]);

  return loading;
};
