<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-4"></div>
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
    this.$store.dispatch("getAllPosts");
  },
  methods: {},
  computed: {
    allPosts() {
      return this.$store.state.allPosts;
    },
  },
};
</script>




