import axios from "axios";

let pending:Array<any> = [];
let cancelToken = axios.CancelToken;
let removePending = (config:any) => {
    if (config.unRemovePedding) return
    for (let p in pending) {
        if (pending[p].u === config.url.split("?")[0] + "&" + config.method) {
            //当当前请求在数组中存在时执行函数体
            pending[p].f(); //执行取消操作
            pending.splice(p, 1); //数组移除当前请求
        }
    }
};
// 创建axios实例
const server = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    withCredentials: true,
    timeout: 30000 // 请求超时时间
});

// 添加请求拦截器
server.interceptors.request.use(
    (config:any) => {
        config.headers.token = localStorage.getItem("token");
        removePending(config);
         
        config.cancelToken = new cancelToken(c => {
                // pending存放每一次请求的标识，一般是url + 参数名 + 请求方法
                pending.push({ u: config.url.split("?")[0] + "&" + config.method, f: c }); //config.data为请求参数
            });
            return config;
            //请求头操作
        },
        (error:any) => {
            // 对请求错误做些什么
            return Promise.reject(error);
        }
    );
    
    // 添加响应拦截器
    server.interceptors.response.use(
        (response:any) => {
            // 对响应数据做点什么
            let data = response.data || {};
            if (Reflect.has(data, "flag")) {
                // if(data.flag === "THS20200000002" && response.config.url === "/yc-web/product/diagnosis/periodical_investment/template/judge_fund_date"){
    
                // }
    
            }
            // 请求成功返回的数据
            return data;
        },
        (error:any) => {
            // 对响应错误做点什么
           // Toast('失败');
            // console.log(error.response)
            // 无网络时跳转APP无网络页面
            // if (!navigator.onLine) {
            //     // router.push({
            //     //     path: "/error/outLine",
            //     //    
            // }else{
 
            // }
            return Promise.reject(error);
        }
    );
   export default server;