import Vue from 'vue'
import Vuex from 'vuex'
import announcement from './modules/announcement';
import attendance from './modules/attendance';
import dashboard from './modules/dashboard';
import user from './modules/user';
import authentication from './modules/authentication';
import request from './modules/request';
import component from './modules/component';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        announcement,
        attendance,
        dashboard,
        user,
        authentication,
        request,
        component
    }
});

export default store;
