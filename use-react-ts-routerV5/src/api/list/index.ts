import server from '../axios'
export const get_surveyData = (param:any|null)=> {
    return server({
        url:'/survey/list',
        param:param
        
     })
}


export const get_userData = (param:any|null)=> {
    return server({
        url:'/user/data',
        param:param
        
     })
}
