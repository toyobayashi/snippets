import axios from 'axios';

function Client () {
  if (!(this instanceof Client)) {
    return new Client();
  }
  var BASE_URL = process.env.NODE_ENV === 'development' ? '/devproxy' : 'http://production.env';

  var http = axios.create();
  http.defaults.baseURL = BASE_URL;

  http.interceptors.request.use(function (config) {
    // config.headers = {};
    return config;
  });

  http.interceptors.response.use(function (res) {
    // do something
    return res.data;
  }, function (err) {
    // do something
    return Promise.reject(err);
  });

  this._axios = http;
}

function _request (method, url, data, config) {
  config = config || {};
  switch (method) {
    case 'get':
      config.params = data;
      return this._axios.get(url, config);
    case 'head':
    case 'delete':
    case 'options':
      return this._axios[method](url, config);
    case 'post':
    case 'put':
    case 'patch':
      return this._axios[method](url, data, config);
    default: return Promise.reject(new Error());
  }
}

(['get', 'post', 'put', 'patch']).forEach(function (method) {
  Client.prototype[method] = function (url, data, config) {
    return _request.call(this, method, url, data, config);
  };
});

(['head', 'delete', 'options']).forEach(function (method) {
  Client.prototype[method] = function (url, config) {
    return _request.call(this, method, url, null, config);
  };
});

/* 
Client.prototype.get = function (url, query, config) {
  return _request.call(this, 'get', url, query, config);
};

Client.prototype.head = function (url, config) {
  return _request.call(this, 'head', url, null, config);
};

Client.prototype.delete = function (url, config) {
  return _request.call(this, 'delete', url, null, config);
};

Client.prototype.options = function (url, config) {
  return _request.call(this, 'options', url, null, config);
};

Client.prototype.post = function (url, data, config) {
  return _request.call(this, 'post', url, data, config);
};

Client.prototype.put = function (url, data, config) {
  return _request.call(this, 'put', url, data, config);
};

Client.prototype.patch = function (url, data, config) {
  return _request.call(this, 'put', url, data, config);
};
*/

var client = new Client();

export default client;
