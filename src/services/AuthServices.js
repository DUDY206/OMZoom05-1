import AxiosService from "../services/AxiosServices";
let AuthServices = {};
let nameModule = "api/user/login";

AuthServices.getToken = (body) => {
  let objectData = {
    url: nameModule,
    method: "post",
    data: body,
  };
  return AxiosService(objectData);
};

export default AuthServices;
