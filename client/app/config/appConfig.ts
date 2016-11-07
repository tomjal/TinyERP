import {IModule} from "../common/models/layout";
import registration from "../modules/registration/_share/config/module";
import securiry from "../modules/security/_share/config/module";
import setting from "../modules/setting/_share/config/module";
import support from "../modules/support/_share/config/module";
import productManagement from "../modules/productManagement/_share/config/module";
import store from "../modules/store/_share/config/module";
import {Languages} from "../common/enum";
let modules: Array<IModule> = [
    registration,
    securiry,
    setting,
    support,
    productManagement,
    store
];
export default {
    app: {
        name: "myERP"
    },
    ioc: "./config/ioc",
    modules: modules,
    loginUrl: "/Login",
    defaultUrl: "Roles",
    localization: {
        lang: Languages.EN,
        files:["common", "registration", "security", "productManagement", "store", "setting", "support"]
    },
    auth: {
        token: "authtoken"
    },
    api: {
          baseUrl: "http://localhost:22383/api/"
    },
    localeUrl: "/app/resources/locales/"
};