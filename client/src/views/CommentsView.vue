<template>
  <div>
    <h1>댓글 목록</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        {{ comment.content }}
        <button @click="editComment(comment.id)">수정</button>
        <button @click="deleteComment(comment.id)">삭제</button>
      </li>
    </ul>
    <form @submit.prevent="addComment">
      <label>댓글 내용:</label>
      <input type="text" v-model="newComment">
      <button type="submit">댓글 작성</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      comments: [],
      newComment: '',
      postId: 123
    };
  },
  mounted() {
    this.fetchComments();
  },
  methods: {
    async fetchComments() {
      try {
        const response = await axios.get(`http://localhost:8080/posts/${this.postId}/comments`);
        this.comments = response.data;
      } catch (error) {
        console.error('댓글을 불러오는 중 에러가 발생했습니다:', error.response.data.message);
      }
    },
    async addComment() {
      try {
        const response = await axios.post(`http://localhost:8080/posts/${this.postId}/comments`, {
          content: this.newComment
        });
        this.comments.unshift(response.data);
        this.newComment = '';
      } catch (error) {
        console.error('댓글 작성 중 에러가 발생했습니다:', error.response.data.message);
      }
    },
    async editComment(commentId) {
      try {
        const content = prompt('수정할 댓글 내용을 입력하세요:', '');
        if (!content) return;

        await axios.put(`http://localhost:8080/posts/${this.postId}/comments/${commentId}`, {
          content: content
        });

        this.fetchComments();
      } catch (error) {
        console.error('댓글 수정 중 에러가 발생했습니다:', error.response.data.message);
      }
    },
    async deleteComment(commentId) {
      try {
        const confirmDelete = confirm('정말로 댓글을 삭제하시겠습니까?');
        if (!confirmDelete) return;

        await axios.delete(`http://localhost:8080/posts/${this.postId}/comments/${commentId}`);

        this.fetchComments();
      } catch (error) {
        console.error('댓글 삭제 중 에러가 발생했습니다:', error.response.data.message);
      }
    }
  }
};
</script>
