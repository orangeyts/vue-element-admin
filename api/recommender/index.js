import instance from './instance';
import { convertRESTAPI } from '../util';

/** saveUser */
function api_users_post(opts) {
  return instance({
    method: 'post',
    url:  '/api/users',
    opts: opts
  });
}

/** findUserById */
function api_users_id_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/api/users/{id}', opts),
    opts: opts
  });
}

/** updateUserById */
function api_users_id_put(opts) {
  return instance({
    method: 'put',
    url: convertRESTAPI('/api/users/{id}', opts),
    opts: opts
  });
}

/** deleteUserById */
function api_users_id_delete(opts) {
  return instance({
    method: 'delete',
    url: convertRESTAPI('/api/users/{id}', opts),
    opts: opts
  });
}

/** greeting */
function _head(opts) {
  return instance({
    method: 'head',
    url:  '/',
    opts: opts
  });
}

/** greeting */
function _post(opts) {
  return instance({
    method: 'post',
    url:  '/',
    opts: opts
  });
}

/** greeting */
function _put(opts) {
  return instance({
    method: 'put',
    url:  '/',
    opts: opts
  });
}

/** greeting */
function _delete(opts) {
  return instance({
    method: 'delete',
    url:  '/',
    opts: opts
  });
}

/** greeting */
function _options(opts) {
  return instance({
    method: 'options',
    url:  '/',
    opts: opts
  });
}

/** greeting */
function _patch(opts) {
  return instance({
    method: 'patch',
    url:  '/',
    opts: opts
  });
}

/** greeting */
function _get(opts) {
  return instance({
    method: 'get',
    url:  '/',
    opts: opts
  });
}

export {
  api_users_post,
  api_users_id_get,
  api_users_id_put,
  api_users_id_delete,
  _head,
  _post,
  _put,
  _delete,
  _options,
  _patch,
  _get
};
