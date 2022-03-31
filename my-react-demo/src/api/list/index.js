import server from '../axios'
export const get_surveyData = param=> {
    return server({
        url:'/survey/list',
        param:param
        
     })
}


export const get_userData = param=> {
    return server({
        url:'/user/data',
        param:param
        
     })
}
