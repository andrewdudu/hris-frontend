import Vue from 'vue'
import Vuex from 'vuex'
import announcement from './modules/announcement';
import attendance from './modules/attendance';
import dashboard from './modules/dashboard';
import user from './modules/user';
import authentication from './modules/authentication';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        announcement,
        attendance,
        dashboard,
        user,
        authentication
    }
});

export default store;
