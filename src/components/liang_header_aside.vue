<template>
    <div class="liang_header_aside">
        <div class="menu-collapse"><i :class="className" style="font-size: 20px" @click="toggleAsideMenu"></i></div>
        <div class="header-user-info">
            <el-dropdown>
                <span class="el-dropdown-link">
                <label>村里最帅的仔村里最帅的仔村里最帅的仔</label><i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>设置</el-dropdown-item>
                    <el-dropdown-item divided @click="handleSignOut">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    export default {
        name: "liang_header_aside",
        data() {
            return {
                className: ''
            }
        },
        created() {
            if (this.$store.state.user.asideCollapse) {
                this.className = 'el-icon-s-unfold';
            } else {
                this.className = 'el-icon-s-fold';
            }
        },
        methods: {
            toggleAsideMenu() {
                if (this.$store.state.user.asideCollapse) {
                    this.className = 'el-icon-s-fold';
                } else {
                    this.className = 'el-icon-s-unfold';
                }
                this.$store.commit('setAsideCollapse', !this.$store.state.user.asideCollapse);
            },
            handleSignOut() {
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
        padding 0 12px

        .menu-collapse
            float left
            width 36px
            height 48px
            line-height 48px
            padding 0px 15px

        .header-user-info
            float right
            min-width 160px
            line-height 48px
            text-align right

            .el-dropdown-link
                cursor pointer
                color #71777c

                &:hover
                    color #409EFF

                label
                    cursor pointer
                    display inline-block
                    overflow hidden
                    white-space nowrap
                    text-overflow ellipsis
                    width 120px
                    vertical-align middle

        .signOut
            color #ff0000
            cursor pointer
</style>
