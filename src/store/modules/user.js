/**
 * Created by liweiliang 406320591@QQ.com on 2019/10/24 0024 16:41.
 */
/**
 * [状态对象]
 */
const state = {
    asideCollapse:false,//菜单导航收起展开方式
    menuAsideList:[
        {id: 1,powerCode: 'fixManage',powerName:'系统管理',iconName:'el-icon-setting',
            submenus:[
                {id: 101,powerCode: '101',powerName: '选项1'},
                {id: 102,powerCode: '102',powerName: '选项2'},
                {id: 103,powerCode: '103',powerName: '选项3'},
            ]
        },
        {id: 2,powerCode: 'application', powerName: '应用管理',iconName:'el-icon-menu'},
        {id: 3,powerCode: 'user',powerName: '用户管理',iconName:'el-icon-phone-outline'},
        {id: 4,powerCode: 'person',powerName: '个人中心',iconName:'el-icon-user',
            submenus:[
                {id: 401,powerCode: 'modifyPassword',powerName: '修改密码'},
                {id: 402,powerCode: 'userInfo',powerName: '个人信息'},
            ]
        },
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

