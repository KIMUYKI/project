<template>
    <div>
      <h1>로그인</h1>
      <form @submit.prevent="login">
        <label>닉네임:</label>
        <input type="text" v-model="nickname">
        <label>패스워드:</label>
        <input type="password" v-model="password">
        <button type="submit">로그인</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        nickname: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:8080/login', {
            nickname: this.nickname,
            password: this.password
          });
          const token = response.data.token;
          // 토큰을 localStorage 등에 저장하는 등의 작업을 수행할 수 있습니다.
          console.log('로그인 성공, 토큰:', token);
        } catch (error) {
          console.error('로그인 실패:', error.response.data.errorMessage);
        }
      }
    }
  };
  </script>
  