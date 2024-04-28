import Axios from "axios";
const instance = Axios.create({
    baseURL: '/api/',
    timeout: 10000, //如果請求在10秒沒有完成，會報超時錯誤
});

export default instance;