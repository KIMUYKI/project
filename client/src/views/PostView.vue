<template>
    <div>
      <h1>게시글 목록</h1>
      <ul>
        <li v-for="post in posts" :key="post.id">
          {{ post.title }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        posts: []
      };
    },
    mounted() {
      this.fetchPosts();
    },
    methods: {
      async fetchPosts() {
        try {
          const response = await axios.get('http://localhost:8080/posts');
          this.posts = response.data;
        } catch (error) {
          console.error('게시글을 불러오는 중 에러가 발생했습니다:', error.response.data.message);
        }
      }
    }
  };
  </script>
  