<template>
    <div class="liang_header_aside">
        <div class="liang-header-title">weiFramework</div>
        <div class="menu-collapse"><i :class="className" style="color:#fff;font-size: 36px" @click="toggleAsideMenu"></i></div>
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
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .liang-header-title
        width 120px
        color #fff
        height 60px
        line-height 60px
        margin 0 20px
        float left
    .menu-collapse
        float left
        width 36px
        height 60px
        i
            margin-top 12px
</style>
