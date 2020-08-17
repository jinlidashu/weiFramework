<template>
    <div class="liang_header_aside">
        <div class="menu-collapse"><i :class="className" style="font-size: 36px" @click="toggleAsideMenu"></i></div>
        <div class="header-user-info">
            <label>村里最帅的仔</label>
            <i class="el-icon-switch-button signOut" @click="handleSignOut"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "liang_header_aside",
        data(){
            return {
                className:''
            }
        },
        created(){
            if(this.$store.state.user.asideCollapse){
                this.className = 'el-icon-s-unfold';
            }else{
                this.className = 'el-icon-s-fold';
            }
        },
        methods:{
            toggleAsideMenu(){
                if(this.$store.state.user.asideCollapse){
                    this.className = 'el-icon-s-fold';
                }else{
                    this.className = 'el-icon-s-unfold';
                }
                this.$store.commit('setAsideCollapse', !this.$store.state.user.asideCollapse);
            },
            handleSignOut(){
                this.$confirm('确定退出系统?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '退出成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消退出'
                    });
                });
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .liang_header_aside
        width 100%
        .menu-collapse
            float left
            width 36px
            height 60px
            i
                margin-top 6px
        .header-user-info
            float right
            min-width 160px
            label
                display inline-block
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
                width 120px
                height 25px
                padding 8px 0 11px
                font-size 14px
                text-align right
                margin-right 5px
                color #71777c
                line-height 25px
                vertical-align middle
        .signOut
            color #ff0000
            cursor pointer
</style>
