<template>
    <div>
      <h1>회원가입</h1>
      <form @submit.prevent="register">
        <label>닉네임:</label>
        <input type="text" v-model="nickname">
        <label>패스워드:</label>
        <input type="password" v-model="password">
        <label>패스워드 확인:</label>
        <input type="password" v-model="confirmpw">
        <button type="submit">회원가입</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        nickname: '',
        password: '',
        confirmpw: ''
      };
    },
    methods: {
      async register() {
        try {
          const response = await axios.post('http://localhost:8080/register', {
            nickname: this.nickname,
            password: this.password,
            confirmpw: this.confirmpw
          });
          console.log(response.data.message);
        } catch (error) {
          console.error('회원가입 중 에러가 발생했습니다:', error.response.data.errorMessage);
        }
      }
    }
  };
  </script>
  