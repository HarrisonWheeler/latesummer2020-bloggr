import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    allBlogs: {},
    activeBlogs: {},
    activeComments: {},
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setAllBlogs(state, allBlogs) {
      state.allBlogs = allBlogs
    },
    setActiveBlogs(state, activeBlogs) {
      state.activeBlogs = activeBlogs
    },
    setActiveComments(state, activeComments) {
      state.activeComments = activeComments
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getAllBlogs({ commit, dispatch }) {
      try {
        let res = await api.get("blogs")
        console.log(res);
        commit("setAllBlogs", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getBlog({ commit, dispatch }, blogId) {
      try {
        let res = await api.get("/blogs/" + blogId)
        console.log(res.data);
        commit("setActiveBlogs", res.data.blog)
        commit("setActiveComments", res.data.comments)
      } catch (error) {
        console.error(error)
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
    async createBlog({ commit, dispatch, state }, blogData) {
      try {
        let res = await api.post("blogs", blogData)
        console.log(res.data);
        dispatch("getAllBlogs")
      } catch (error) {
        console.error(error)
      }
    },
    async createComment({ commit, dispatch, state }, commentData) {
      try {
        let res = await api.post("comments", commentData)
        console.log(res.data);
        dispatch("getBlog", commentData.blogId)
      } catch (error) {
        console.error(error)
      }
    }
  },
});
