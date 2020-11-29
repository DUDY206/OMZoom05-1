// import axios from 'axios';
// let Axios = async (objectData) => {
//     try {
//         let resuft = axios.[objectData.method]()
//     } catch (error) {

//     }
//     return resuft;
// }
// export default axios;

import axios from 'axios';
import MyConfig from "../_config";

var NProgress = require('nprogress');
NProgress.configure({
  trickleSpeed: 1000,
  minimum: 0.2,
});

function blockUi() {
  // NProgress.start();
}

function unblockUi() {
  // setTimeout(() => {
  //   NProgress.done();
  // }, 200);
}
window.requestCount = 0;



let AxiosService = (objData) => {
  if (window.requestCount == 0 && !objData.dontLoading) {
    blockUi();
  }

  window.requestCount += 1;
  let config = {
    baseURL: MyConfig.host
  }
  let data = Object.assign(objData, config);
  return axios(data)
    .then(response => {
      checkUnblockUi();
      return response;
    })
    .catch(error => {
      checkUnblockUi();
      throw error;
    });
};

function checkUnblockUi() {
  window.requestCount -= 1;
  if (window.requestCount == 0) {
    unblockUi();
  }
}
export default AxiosService;