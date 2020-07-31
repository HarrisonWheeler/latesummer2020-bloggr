<template>
  <div class="home container-fluid bg-secondary">
    <div class="card-columns justify-content-center p-2">
      <div v-for="blog in allBlogs" :key="blog.blogId">
        <div class="card bg-primary text-light" style="width: 25rem">
          <div class="card-body text-center">
            <h5 class="card-title">{{blog.title}}</h5>
            <p class="card-text">{{blog.body}}</p>
            <a href="#" class="btn btn-info" @click="goToBlogInfo(blog.id)">Get Details/Comments</a>
            <p>{{blog.creatorEmail}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getAllBlogs");
  },
  methods: {
    goToBlogInfo(blogId) {
      this.$router.push({ name: "Blog", params: { id: blogId } });
    },
  },
  computed: {
    allBlogs() {
      return this.$store.state.allBlogs;
    },
  },
};
</script>




