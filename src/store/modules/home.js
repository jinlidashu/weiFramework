/**
 * Created by liweiliang 406320591@QQ.com on 2019/10/22 0022 17:21.
 */
import api from '@/axios/api'
/**
 * [状态对象]
 * @type {Object}
 */
const state = {
    test: 'state test'
};
/**
 * [修改状态]
 * @type {Object}
 */
const mutations = {
    setTest: (state, data) => state.test = data,
}
/**
 * [异步修改状态]
 * @type {Object}
 */
const actions = {
    getTest(context, params){
        // api.getTest(params).then(data => {
        //     if(data.code == '000000'){
        //         console.log(data.result)
        //     } else{
        //         console.log(JSON.stringify(data))
        //     }
        // }).catch(error => {
        //     console.log(JSON.stringify(error));
        // })
        context.commit('setTest','new setTest');
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}
