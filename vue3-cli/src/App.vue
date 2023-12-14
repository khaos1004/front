<template>
  <AppHeader @change="changeMessage"  v-bind:appTitle="message"></AppHeader>  
</template>

<script>
import AppHeader from './components/AppHeader.vue';

  export default {
    components:{
      // '컴포넌트이름': 컴포넌트내용
      // 'app-header': AppHeader 아래와같이 키값도 파스칼케이스로 작성
      // 'AppHeader': AppHeader 아래와같이 키와 밸류가 같을경우 아래와같이 한단어로 표현 가능
      // AppHeader
      AppHeader
    },
    data() {
      return {
        message: '앱 해더 컴포넌트'
      }
    },
    methods:{
      changeMessage(){
        this.message = '변경됨'
      }
    }
  }
</script>

<style scoped>

</style>