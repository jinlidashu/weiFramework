/**
 * Created by liweiliang 406320591@QQ.com on 2019/10/21 0021 17:38.
 */
import {fetch, fetchGet} from './config'


export const getDemo = params => fetch('/getDemo',params)

// export default {
//     getDemo:params => fetch('/getDemo',params),
//     getTest:params => fetch('/getTest',params),
// }

// export function getQuerypunch(params) {
//     return fetch('/getDemo',params)
// }

// export function getQuerypunch(data) {
//     return request({
//         url: '/getDemo',
//         method: 'post',
//         data
//     })
// }
