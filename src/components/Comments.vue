<template>
  <div class="comments">
    <h5>
      <u>{{commentData.creator.name}}:</u>
    </h5>
    <p>{{commentData.body}}</p>
  </div>
</template>


<script>
export default {
  name: "comments",
  props: ["commentData"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>