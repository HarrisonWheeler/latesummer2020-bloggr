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
    myBlogs: {},
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
      console.log(state.activeComments);
    },
    setMyBlogs(state, myBlogs) {
      state.myBlogs = myBlogs
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
        // debugger
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
        dispatch("getAllBlogs")
      } catch (error) {
        console.error(error)
      }
    },
    async deleteBlog({ commit, dispatch, state }, blogId) {
      try {

        let res = await api.delete("blogs/" + blogId)
        commit("setActiveBlogs", {})
        console.log(res);
        dispatch("getAllBlogs")
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
        debugger
        let res = await api.delete("comments/" + commentData.id)
        commit("setActiveComments", {})
        dispatch("getBlog", commentData.blogId)
        console.log(res);
      } catch (error) {
        console.error(error)
      }
    }
  },
});


// 5f2741b0f2cc7d0017b85a85 - comment id from delete method
