import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    allPosts: {},
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setAllPosts(state, allPosts) {
      state.allPosts = allPosts
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getAllPosts({ commit, dispatch }) {
      try {
        let res = await api.get("blogs")
        console.log(res);
        commit("setAllPosts", res.data)
      } catch (error) {

      }
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
