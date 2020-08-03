import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../pages/Home.vue";
// @ts-ignore
import Profile from "../pages/Profile.vue";
// @ts-ignore
import { authGuard } from "@bcwdev/auth0-vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blogs/:id",
    name: "Blog",
    // @ts-ignore
    component: () => import(/* webpackChunkName: "blogdetails" */ '../pages/BlogDetails.vue')
  },
  {
    path: "/blog/:id",
    name: "Comments",
    // @ts-ignore
    component: () => import(/* webpackChunkName: "comments" */ '../components/Comments.vue')
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
