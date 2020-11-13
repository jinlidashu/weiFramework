<template>
    <div>
        <div class="liang-header-title">
            <img class="logo" alt="Vue logo" src="../assets/img/logo.png">
            <h1 v-if="!asideCollapse">weiFramework</h1>
        </div>
        <!--background-color="#161823"-->
        <!--text-color="#fff"-->
        <!--active-text-color="#ffd04b"-->
        <!--default-openeds="1"-->
        <!--@open="handleOpen"-->
        <!--@close="handleClose"-->
<!--        background-color="#000c17"-->
        <el-menu :default-active="defaultAcitve"
                 :collapse="asideCollapse"
                 unique-opened="true"
                 background-color="rgb(48, 65, 86)"
                 text-color="rgb(191, 203, 217)"
                 active-text-color="rgb(64, 158, 255)"
                 @select="handleSelect"
                 v-for="item in menuAsideList"
                 :key="item.id"
        >
            <el-submenu v-if="item.submenus" popper-class="liang-submenu" :index="item.powerCode" >
                <template slot="title">
                    <i v-if="item.iconName" :class="item.iconName"></i>
                    <span>{{item.powerName}}</span>
                </template>
                <el-menu-item v-for="subItem in item.submenus" :key="subItem.powerCode" :index="subItem.powerCode" @click="handleClickMenu(subItem.powerCode)">{{subItem.powerName}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-else :index="item.powerCode"  @click="handleClickMenu(item.powerCode)">
                <i v-if="item.iconName" :class="item.iconName"></i>
                <span slot="title">{{item.powerName}}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "liang_menu_aside",
        computed: {
            ...mapState({
                asideCollapse: state => state.user.asideCollapse, //菜单导航收起展开方式
                menuAsideList: state => state.user.menuAsideList, //左侧管理菜单导航
                defaultAcitve: state => state.user.defaultAcitve, //左侧管理菜单导航默认高亮
            })
        },
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClickMenu(name){
                // this.$router.push({name:name});
                this.$store.commit('setDefaultAcitve',name);
                console.log(name);
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped lang="stylus">
    .liang-header-title
        width 100%
        color #fff
        height 60px
        line-height 60px
        text-align center
        transition all 3s
        img
            &.logo
                display inline-block
                width 20px
                height 20px
                vertical-align middle
        h1
            display inline-block
            vertical-align middle
            margin 0 0 0 4px
            font-size 20px

</style>
