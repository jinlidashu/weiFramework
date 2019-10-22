/**
 * Created by liweiliang 406320591@QQ.com on 2019/10/21 0021 17:38.
 */
import {fetch, fetchGet} from './config'

export default {
    /**
     * getDemo
     * phoneNum
     */
    getDemo:params => fetch('/getDemo',params),
    getTest:params => fetch('/getTest',params),
}
