import axios, {AxiosError, AxiosResponse} from 'axios';

const {CancelToken} = axios;

/**
 * @method get - https get request in declarative style
 * Reason: encapsulate work with cancelToken, onFailure types, onStart callback, other configs
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
  const source = CancelToken.source();
  onStart?.();
  axios
    .get(location, {cancelToken: source.token})
    .then(res => onSuccess?.(res))
    .catch(err => onFailure?.(err))
    .finally(() => onFinish?.());

  return {cancel: source.cancel};
}
