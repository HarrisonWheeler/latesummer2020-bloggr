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
    activeComments: [],
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setAllBlogs(state, allBlogs) {
      state.allBlogs = allBlogs
    },
    setActiveBlogs(state, payload) {
      state.activeBlogs = payload.blog
      state.activeComments = payload.comments
    },
    setActiveComments(state, activeComments) {
      state.activeComments = activeComments
      console.log(state.activeComments);
    },
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
        commit("setActiveBlogs", res.data)


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
        dispatch("getAllBlogs")
      } catch (error) {
        console.error(error)
      }
    },
    async deleteBlog({ commit, dispatch, state }, blogId) {
      try {
        debugger
        let res = await api.delete("blogs/" + blogId)
        commit("setActiveBlogs", {})
        dispatch("getAllBlogs")
      } catch (error) {
        console.error(error)
      }
    },
    async editBlog({ commit, dispatch }, blogData) {
      try {
        debugger
        let res = await api.put("blogs/" + blogData._id, blogData)
        commit("setActiveBlogs", {})
        dispatch("getBlog", blogData._id)
      } catch (error) {
        console.error(error)
      }
    },
    async createComment({ commit, dispatch, state }, commentData) {
      try {

        let res = await api.post("comments", commentData)
        console.log(res.data);
        commit("setActiveComments", commentData)
        dispatch("getBlog", commentData.blogId)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteComment({ commit, dispatch, state }, commentData) {
      try {
        // debugger
        let res = await api.delete("comments/" + commentData.id)
        dispatch("getBlog", this.state.activeBlogs.id)
        console.log(res);
      } catch (error) {
        console.error(error)
      }
    }
  },
});


