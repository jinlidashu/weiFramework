<template>
    <div>
        <!--background-color="#161823"-->
        <!--text-color="#fff"-->
        <!--active-text-color="#ffd04b"-->
        <!--default-openeds="1"-->
        <!--@open="handleOpen"-->
        <!--@close="handleClose"-->
        <el-menu :default-active="defaultAcitve"
                 :collapse="asideCollapse"
                 unique-opened="true"
                 background-color="transparent"
                 text-color="#fff"
                 active-text-color="#ffd04b"
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
        }
    }
</script>

<style scoped>

</style>
