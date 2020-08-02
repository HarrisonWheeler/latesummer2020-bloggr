<template>
  <div class="container-fluid about text-center">
    <div class="row">
      <div class="col-12">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt />
    <p>{{ profile.email }}</p>
      </div>
    </div>
      <div class="container-fluid">
        <div class="row p-2">
         <div class="col-12">
          <h1>Your Posts:</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
  mounted(){
    this.getProfile()
  },
  methods: {
    getProfile(){
      this.$store.dispatch("getProfile")
    }
  },
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
