<template>
  <div class="modal modal fade" tabindex="-1" id="create-blog-modal" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Create a Blog Post!</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <!-- create blog post modal -->
        </div>
        <div class="modal-body">
          <form @submit.prevent="createBlog">
            <div class="col-sm-1-12 p-2">
              <label for="title" class="col-sm-1-12 col-form-label">Title:</label>
              <input
                type="text"
                class="form-control"
                name="title"
                id="inputName"
                placeholder="Enter title here..."
                v-model="newBlog.title"
                required
              />
            </div>
            <div class="col-sm-1-12 p-2">
              <label for="body" class="col-sm-1-12 col-form-label">Body:</label>
              <input
                type="text"
                class="form-control"
                name="body"
                id="inputName"
                placeholder="Enter body here..."
                v-model="newBlog.body"
                required
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" @click="createBlog">Post Blog</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "BlogModal",
  data() {
    return {
      newBlog: {},
    };
  },
  computed: {},
  methods: {
    createBlog() {
      this.$store.dispatch("createBlog", this.newBlog);
      this.newBlog = {};
      $("#create-blog-modal").modal("hide");
    },
  },
  components: {},
};
</script>


<style scoped>
</style>