import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        avatarUrl: '',
        user: null,
        // User(sysRole=SysRole(name=admin, description=管理员, available=true),
        // username=金陵易和, password=123, lastLoginTime=null, status=true)
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        updateAvatarUrl(state, url) {
            state.avatarUrl = url;
        }
    },
    actions: {
        loginUser({commit}, user) {
            commit('setUser', user);
        },

    },
    plugins: [createPersistedState()],
});
