<template>
  <div v-if="commentData.creator" class="comments">
    <h5>
      <u>{{commentData.creator.name}}:</u>
    </h5>
    <div>
      <button
        v-if="$auth.isAuthenticated"
        type="button"
        class="text-danger close"
        @click="deleteComment"
      >&times;</button>
      <p>{{commentData.body}}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "comments",
  props: ["commentData"],
  data() {
    return {
      body: "",
    };
  },
  computed: {
    activeComments() {
      return this.$store.state.activeComments.id;
    },
    activeBlog() {
      return this.$store.state.activeBlog;
    },
  },
  methods: {
    deleteComment() {
      this.$store.dispatch("deleteComment", {
        id: this.commentData.id,
        // blogId: this.$store.activeBlog,
      });
    },
  },
  components: {},
};
// 5f277938f2cc7d0017b85b19 - comment data
</script>


<style scoped>
</style>
