/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { removeLocalStorage } from './index'
import axios, { AxiosRequestConfig } from 'axios';
import { Cookies } from 'react-cookie';
import { API_URL } from '../config';

const cookies = new Cookies();

const baseURL = API_URL;

const CancelToken = axios.CancelToken;
const pendingRequests = new Map();

axios.interceptors.response.use(
  (response) => response,
  async (error = {}) => {
    console.log('error::::::', error);

    const { status, config } = error.response || {};
    console.log('error.response:::::', error.response);
    const { url } = config || {};
    // console.log('status', status);
    // console.log('config', config);
    // console.log('url:::::::', url);

    if (status === 401) {
      console.log(
        'Access token expired or unauthorized. Attempting to refresh...'
      );
      const accessToken = cookies.get('accessToken');
      const refreshToken = cookies.get('refreshToken');
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      if (refreshToken) {
        console.log('Refresh token found. Attempting to refresh tokens...');

        const response = await axios.post(
          `${baseURL}/refreshToken`,
          { token: refreshToken },
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        console.log('response:::', response);

        const { access, refresh } = response.data;

        cookies.set('accessToken', access);
        cookies.set('refreshToken', refresh);

        config.headers['Authorization'] = `Bearer ${access}`;
        console.log('config.headers::::', config.headers);

        return request(config);
        // return api(originalRequest);
      } else {
        console.error('No refresh token available. Please log in again.');
      }
      // removeLocalStorage('user')
      cookies.remove('accessToken', { path: '/' });
      cookies.remove('refreshToken', { path: '/' });
    }
    return Promise.reject(error);
  }
);
const codeMessage: { [key: string]: string } = {
  200: 'The request has succeeded',
  201: 'New resource has been created ',
  202: 'The request has been received',
  204: 'No Content',
  // 400: "The server could not understand the request due to invalid syntax.",
  401: 'Unauthorized Operation',
  403: 'You do not have access rights to the content',
  404: 'Not Found',
  406: 'Not Acceptable',
  410: 'The request content is not longer available',
  422: 'The request was well-formed but was unable to be followed due to semantic errors.',
  500: "The server has encountered a situation it doesn't know how to handle",
  502: 'Bad Gateway',
  503: 'The server is not ready to handle the request',
  504: 'Timeout',
};
type CustomResponse = {
  success?: boolean;
  errorHandled?: boolean;
  reason?: string;
  data?: Record<string, unknown>;
} & Partial<Response>;

const errorHandler = (
  error: { response: CustomResponse },
  custom: { showError?: boolean; statusCodes?: [number] }
): CustomResponse => {
  const { statusCodes = [] } = custom;
  if (error instanceof axios.Cancel) {
    return {
      success: false,
      errorHandled: true,
      reason: 'cancelled',
      ...error,
    };
  }

  const { response } = error;
  const isServer = typeof window === 'undefined';
  if (isServer) {
    response.success = false;
    return response;
  }

  if (response && response.status && codeMessage[response.status]) {
    response.success = false;
    response.errorHandled = true;
    const errorText = codeMessage[response.status] || response.statusText;
    if (
      !statusCodes?.length ||
      (statusCodes?.length &&
        !codeMessage[
          statusCodes?.find((stcode) => response.status === stcode) || ''
        ])
    ) {
      console.log(errorText || 'Sorry something went wrong');
    }
  } else if (!response) {
    console.log('Please check your internet connection');

    return { success: false, errorHandled: true };
  }

  return {
    ...response,
    success: false,
    errorHandled: true,
    reason: 'network',
  };
};
const apiRequest = (
  url: string,
  options: AxiosRequestConfig = {},
  _ = null,
  includeAuthHeader = true,
  handleError = true,
  customError = {},
  token?: string
) => {
  //   const headers: AxiosRequestHeaders = {}
  const headers: any = {};
  console.log('customError::::', customError);

  if (includeAuthHeader && (cookies.get('accessToken') || token)) {
    // console.log('includeAuthHeader', includeAuthHeader);
    // console.log("cookies.get('accessToken')", cookies.get('accessToken'));
    // console.log('token', token);

    headers['Authorization'] = token
      ? `Bearer ${token}`
      : `Bearer ${cookies.get('accessToken')}`;
  }

  let opts = options;

  opts = {
    ...opts,
    headers: { ...headers, ...options.headers },
  };
  return axios((options.baseURL || baseURL) + url, opts)
    .then((json) => {
      if (json?.data?.length > -1) {
        return { success: true, data: json.data };
      }
      return { success: true, ...json?.data };
    })
    .catch((e) => {
      if (handleError) {
        return errorHandler(e, customError);
      } else {
        throw e;
      }
    });
};
const request = (
  url: string,
  options: AxiosRequestConfig = {},
  _ = null,
  includeAuthHeader = true,
  handleError = true,
  token = cookies.get('accessToken')
) => {
  // console.log('request token:::::::::', token);
  // console.log('api call');

  return apiRequest(url, options, _, includeAuthHeader, handleError, {}, token);
};
export const cancellableRequest = async (
  requestId: string,
  url: string,
  options: any = {},
  cookies = null,
  handleError = true
) => {
  if (pendingRequests.has(requestId)) {
    pendingRequests.get(requestId).cancel();
    pendingRequests.delete(requestId);
  }

  const cancelToken = new CancelToken((cancel) => {
    pendingRequests.set(requestId, { url, cancel });
  });
  return await request(
    url,
    {
      ...options,
      cancelToken,
    },
    cookies,
    true,
    handleError
  ).then((response) => {
    if (
      response.success ||
      (!response.success && response.reason !== 'cancelled')
    ) {
      pendingRequests.delete(requestId);
    }
    return response;
  });
};

export default request;
