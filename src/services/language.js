import MyConfig from '../_config';

/**
 * Định nghĩa ngôn ngữ
 * Cách 1: [từ khóa, tiếng việt, tiếng anh]
 */
let dict = [
    ['key', 'vi', 'en'],
    // ['vi', 'en'],

    //login
    ['loginError', 'Đăng nhập không thành công!', 'Login failed!'],
    ['loginSuccess', 'Đăng nhập thành công!', 'Logged in successfully!'],





    ['', '', ''],
];

let LanguageService = {
    vi: {},
    en: {},
    lang: {}
};

dict.forEach(item => {
    LanguageService.vi[item[0]] = item[1];
    LanguageService.en[item[0]] = item[2];
});
if (MyConfig.language == "vi") {
    LanguageService.lang = LanguageService.vi;
}
if (MyConfig.language == "en") {
    LanguageService.lang = LanguageService.en;
}
export default LanguageService;
