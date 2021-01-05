import axios, {AxiosError, AxiosResponse} from 'axios';

/**
 * @method get - https get request in declarative style
 */
export interface AxiosGetProps<T> {
  location: string
  onStart?: () => void
  onSuccess?: (res: AxiosResponse<T>) => void
  onFailure?: (e: AxiosError) => void
  onFinish?: () => void
}

export function get<T>({
  location,
  onStart,
  onSuccess,
  onFailure,
  onFinish
}:AxiosGetProps<T>) {
  onStart?.();
  axios
    .get(location)
    .then(res => onSuccess?.(res))
    .catch(err => onFailure?.(err))
    .finally(() => onFinish?.());
}
