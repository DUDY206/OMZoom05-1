import MyConfig from "./../_config";
import axios from "axios";
import NProgress from "nprogress";

function unblockUi() {
    // setTimeout(() => {
    //     NProgress.done();
    // }, 200);
}


const calculatePercentage = (loaded, total) => (Math.floor(loaded * 1.0) / total)

const setupUpdateProgress = () => {
    axios.defaults.onDownloadProgress = e => {
        const percentage = calculatePercentage(e.loaded, e.total)
        NProgress.set(percentage)
    }
}

const setupStopProgress = () => {
    axios.interceptors.response.use(response => {
        NProgress.done(true)
        return response
    })
}

setupUpdateProgress();
setupStopProgress();
NProgress.configure({
    showSpinner: false
});

let Axios = async (configCustom) => {


    NProgress.start();
    //config default when call Api with axios
    let configAxios = {
        baseURL: MyConfig.host
    };
    //join 2 config
    let config = {
        ...configAxios,
        ...configCustom
    };
    try {
        let result = await axios(config);

        return result;
    } catch (error) {
        return console.log(error)
    } finally {
        unblockUi();
    }
}
export default Axios;