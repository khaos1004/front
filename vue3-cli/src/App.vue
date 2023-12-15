<template>
  <div>
    <form action="" @submit="submitForm">
      <div>
        <label for="userId">id</label>
        <input class="bg-blue-200" id="userId" type="text" v-model="username">
      </div>
      <div>
        <label for="password">password</label>
        <input class="bg-blue-200" type="text" v-model="password">
      </div>
      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        username:'',
        password:''
      }
    },
    methods:{
      submitForm(event){
        event.preventDefault();
        console.log("폼 제출됨")
      }
    }    
  }
  
</script>

<style scoped>

</style>