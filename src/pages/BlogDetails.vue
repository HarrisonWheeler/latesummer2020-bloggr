<template>
  <div class="blog-details">
    <div class="card-columns justify-content-center p-2">
      <div class="card bg-primary text-light" style="width: 25rem">
        <div class="card-body text-center">
          <h5 class="card-title">{{activeBlog.title}}</h5>
          <p class="card-text">{{activeBlog.body}}</p>
          <comments v-for="comment in activeComments" :commentData="comment" :key="comment.id" />
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Comments from "../components/Comments";
export default {
  name: "blog-details",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getBlog", this.$route.params.id);
  },
  computed: {
    activeBlog() {
      return this.$store.state.activeBlogs;
    },
    activeComments() {
      return this.$store.state.activeComments;
    },
  },
  methods: {},
  components: {
    Comments,
  },
};
</script>


<style scoped>
</style>