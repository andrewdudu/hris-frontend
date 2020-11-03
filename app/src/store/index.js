import Vue from 'vue'
import Vuex from 'vuex'
import announcement from './modules/announcement';
import attendance from './modules/attendance';
import dashboard from './modules/dashboard';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        announcement,
        attendance,
        dashboard,
        user
    }
})

export default store;
