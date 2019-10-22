<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{test}}</p>
    <div>
      <el-button @click="hanldClick">elementUI test</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState} from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapState({
      test: state => state.home.test
    })
  },
  components: {
    HelloWorld
  },
  methods:{
      hanldClick() {
        let params = {"searchValue":"","pageNum":1,"pageSize":100,"platformFlag":"easyEpc"};
        this.$store.dispatch('getTest',params)
        this.$message.success('element UI  test')
      }
  }
}
</script>
