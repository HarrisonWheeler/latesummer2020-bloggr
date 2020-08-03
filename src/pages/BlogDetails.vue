<template>
  <div class="row justify-content-center bg-secondary">
    <div class="blog-details p-2">
      <div class="card bg-primary text-light" style="width: 25rem">
        <div class="card-body text-center">
          <h4 class="card-title">
            <u>{{activeBlog.title}}</u>
            <button
              v-if="$auth.isAuthenticated"
              type="button"
              class="text-danger close"
              @click="deleteBlog(activeBlog._id)"
            >&times;</button>
          </h4>
          <img :src="activeBlog.creator.picture" class="img-fluid" alt />
          <p class="card-text">{{activeBlog.body}}</p>
          <h5>
            <u>Comments:</u>
          </h5>
          <div
            class="comments border bg-light rounded text-dark pl-2 mt-0"
            style="max-height:30rem; overflow:auto"
          >
            <comments v-for="comment in activeComments" :commentData="comment" :key="comment.id" />
          </div>
          <form @submit="createComment">
            <div class="input-group p-2" v-if="$auth.isAuthenticated">
              <input
                type="text"
                class="form-control"
                placeholder="Post Comment..."
                v-model="newComment"
              />
              <div class="input-group-append">
                <span
                  class="input-group-text btn-success"
                  id="create-comment"
                  @click="createComment"
                >Post!</span>
              </div>
            </div>
          </form>
          <p>Created By: {{activeBlog.creatorEmail}}</p>
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
  methods: {
    createComment() {
      // debugger;
      this.$store.dispatch("createComment", {
        body: this.newComment,
        blogId: this.activeBlog._id,
        creatorEmail: this.activeBlog.creatorEmail,
      });
      this.newComment = "";
    },
    deleteBlog() {
      debugger;
      this.$store.dispatch("deleteBlog", this.$route.params.id);
    },
  },
  components: {
    Comments,
  },
};
</script>


<style scoped>
</style>



