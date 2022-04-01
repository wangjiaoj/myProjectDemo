// 使用 Mock
import  {  Mock,  Random,  wrap} from './baseConfig';
 
var data = Mock.mock(/\/survey\/list/,wrap({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
         'title':'hshhssh',
         'etime':'@date',
         'address':'@city(true)',
         'ctime':'@date'
    }]
}))

Mock.mock(/\/user\/data/,wrap({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
     'userInfo':{
        name:'hello',
        role:'role'
     },
    'projectList|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
         'title':'hshhssh',
         'etime':'@date',
         'address':'@city(true)',
         'ctime':'@date'
    }]
}))