import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: {
    loginUser: {
      userName: "未登录",
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
  actions: {
    getLoginUser({ commit, state }, payload) {
      // todo 远程获取登录信息
      commit("updateUser", payload);
    },
  },
} as StoreOptions<any>;
