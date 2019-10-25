/**
 * Created by liweiliang 406320591@QQ.com on 2019/10/24 0024 16:41.
 */
/**
 * [状态对象]
 */
const state = {
    asideCollapse:false,//菜单导航收起展开方式
    menuAsideList:[
        {id: 1,powerCode: 'fixManage',powerName:'推修管理',iconName:'el-icon-location',
            submenus:[
                {id: 101,powerCode: '101',powerName: '选项1',iconName:'el-icon-cherry'},
                {id: 102,powerCode: '102',powerName: '选项2',iconName:'el-icon-cherry'},
                {id: 103,powerCode: '103',powerName: '选项3',iconName:'el-icon-cherry'},
            ]
        },
        {id: 2,powerCode: 'reconciliation',powerName: '对账结算',iconName:'el-icon-cherry'},
        {id: 3,powerCode: 'business', powerName: '业务统计',iconName:'el-icon-watermelon'},
        {id: 4,powerCode: 'cooperation',powerName: '合作管理',iconName:'el-icon-grape'},
        {id: 5,powerCode: 'messageNotify',powerName: '消息通知',iconName:'el-icon-pear'},
        {id: 6,powerCode: 'accountSec',powerName: '账号安全',iconName:'el-icon-orange'},
    ],//左侧管理菜单导航
    defaultAcitve:'',//左侧管理菜单导航当前高亮
}
/**
 * [修改状态]
 */

const mutations = {
    /***
     * 设置左侧管理菜单导航
     */
    setMenuAsideList:(state,data) => state.menuAsideList = data,

    /***
     * 设置菜单导航收起展开方式
     */
    setAsideCollapse:(state,data) => state.asideCollapse = data,
    /***
     * 设置菜单导航当前高亮
     */
    setDefaultAcitve:(state,data) => state.defaultAcitve = data,
}
/**
 * [异步修改状态]
 */
const actions = {

}
/**
 * [过滤操作]
 */
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}

