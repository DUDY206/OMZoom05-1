// import LanguageService from './LanguageService';
import AxiosService from "../services/axios";
import nestedObjectAssign from 'nested-object-assign';

let ApiService = {};
ApiService.send = (url, data, options) => {


  const token = window.sessionStorage.getItem("token");
  if (!token && !options.isClient)
    throw new Error("Chưa có token");
  var tokenHeaderValue = `Bearer ${token}`.replace(/"/g, '');
  let config = {
    url: url,
    data: data,
    headers: {
      Authorization: tokenHeaderValue
    },
  }

  const request = nestedObjectAssign(config, options);
  return AxiosService(request);
};

ApiService.get = (url, options) => {
  if (!options)
    options = {};
  options = nestedObjectAssign(options, {
    method: "GET"
  });
  return ApiService.send(url, null, options);
}

ApiService.post = (url, data, options) => {
  if (!options)
    options = {};
  options = nestedObjectAssign(options, {
    method: "POST"
  });
  return ApiService.send(url, data, options);
}

ApiService.put = (url, data, options) => {
  if (!options)
    options = {};
  options = nestedObjectAssign(options, {
    method: "PUT"
  });
  return ApiService.send(url, data, options);
}

ApiService.delete = (url, options) => {
  if (!options)
    options = {};
  options = nestedObjectAssign(options, {
    method: "DELETE"
  });
  return ApiService.send(url, null, options);
}

export default ApiService;