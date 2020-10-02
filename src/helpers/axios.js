import axios from 'axios';

/**
 * @method get - https get request in declarative style
 */
export const get = ({
  location,
  onStart,
  onSuccess,
  onFailure,
  onFinish
}) => {
  onStart?.();
  axios
    .get(location)
    .then(res => onSuccess?.(res))
    .catch(err => onFailure?.(err))
    .finally(() => onFinish?.());
};
