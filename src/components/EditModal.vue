<template>
  <div class="editModal">
    <div class="modal modal fade" tabindex="-1" id="edit-modal" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit This Blog!</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent>
              <div class="col-sm-1-12 p-2">
                <label for="body" class="col-sm-1-12 col-form-label">Edit Body:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputName"
                  placeholder="Edit body here..."
                  v-model="editedBlog.body"
                  required
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" @click="editBlog">Edit Blog</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "editModal",
  props: ["editBlogData"],
  data() {
    return {
      // editedBlog: {},
    };
  },
  computed: {
    editedBlog() {
      return this.$store.state.activeBlogs;
    },
    activeBlogs() {
      return this.$store.state.activeBlogs;
    },
  },
  methods: {
    editBlog() {
      this.$store.dispatch("editBlog", {
        body: this.editedBlog,
        _id: this.activeBlogs.id,
      });
      this.editedBlog = {};
      $("#edit-modal").modal("hide");
    },
  },
  components: {},
};
</script>


<style scoped>
</style>