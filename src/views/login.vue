<template>
    <div class="login_layout">
        <div class="login_content">
            <div class="header">
                <img class="logo" src="@/assets/img/logo.png" alt="">
                <span class="title">Vue Element Admin</span>
            </div>
            <div class="loginForm">
                <h3>账户登录</h3>
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" hide-required-asterisk>
                    <el-form-item prop="user">
                        <el-input type="password" prefix-icon="el-icon-user" v-model="ruleForm.user" placeholder="用户名" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="pass">
                        <el-input type="password" prefix-icon="el-icon-lock" v-model="ruleForm.pass" placeholder="密码" autocomplete="off"></el-input>
                    </el-form-item>
                    <div class="login-help">
                        <el-checkbox v-model="rememberChecked" >记住密码</el-checkbox>
                        <span class="forget">忘记密码?</span>
                    </div>
                    <el-form-item>
                        <el-button type="primary" style="width:100%;" @click="submitForm('ruleForm')">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                rememberChecked:false,
                ruleForm: {
                    user: '',
                    pass: '',
                },
                rules: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ],
                    pass: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ],

                }
            }
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .login_layout
        display flex
        flex-direction column
        height 100vh
        overflow auto
        background-color #f0f2f5
        background-image url('~@assets/img/login_bg.svg')
        background-repeat no-repeat
        background-position-x center
        background-position-y 110px
        background-size 100%
        .login_content
            padding 32px 0
            flex 1
            @media (min-width: 768px)
                padding 112px 0 24px
            .header
                height 44px
                line-height 44px
                text-align center
                margin-bottom 40px
                .logo
                    height 44px
                    vertical-align top
                    margin-right 16px

                .title
                    font-size 33px
                    color rgba(0,0,0,.85)
                    font-family 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif
                    font-weight 600
                    position relative
                    top 2px
            .loginForm
                width 320px
                margin 0 auto
                padding 20px 50px
                background #fff
                border-radius 8px
                h3
                    line-height 56px
                    color #409EFF
                    font-size 16px
                    font-weight 500
                    margin 0 0 32px 0
                    border-bottom 2px solid #409EFF
                .login-help
                    font-size 14px
                    margin-bottom 22px
                    .forget
                        float right
                        color #409eff


</style>