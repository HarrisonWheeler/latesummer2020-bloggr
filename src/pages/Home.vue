<template>
  <div class="home container-fluid bg-secondary p-2">
    <div class="card-columns justify-content-center p-2">
      <div v-for="blog in allBlogs" :key="blog.blogId">
        <div class="card bg-primary text-light" style="width: 25rem">
          <button
            v-if="$auth.isAuthenticated"
            type="button"
            class="text-danger close p-2"
            @click="deleteBlog(blog.id)"
          >&times;</button>
          <div class="card-body text-center">
            <h5 class="card-title">{{blog.title}}</h5>
            <p class="card-text">{{blog.body}}</p>
            <a href="#" class="btn btn-info" @click="goToBlogInfo(blog.id)">See More</a>
            <p>Created By: {{blog.creatorEmail}}</p>
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
    deleteBlog(blogId) {
      this.$store.dispatch("deleteBlog", blogId);
    },
  },
  computed: {
    allBlogs() {
      return this.$store.state.allBlogs;
    },
  },
};
</script>




