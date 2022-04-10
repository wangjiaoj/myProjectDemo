import Mock from 'mockjs';///src/mock
const Random = Mock.Random;
Mock.setup({  timeout: '200-500'})
function wrap(obj:any) {  
    return Object.assign({}, { 
           error: 1,    message: 'hello',    ...obj 
        })
}

export {  Mock,  Random,  wrap};