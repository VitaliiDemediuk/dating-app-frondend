import Vue from 'vue'
import Router from 'vue-router'

import vLogin from '../components/v-login'
import vInterestList from '../components/interests/v-interest-list'
import vProfile from '../components/profile-card/v-profile-card-main'
import vIndex from '../components/v-index'

Vue.use(Router);

let router = new Router( {
    routes: [
        {
            path: '/',
            name: 'index',
            component: vIndex,
        },
        {
            path: '/profile',
            name: 'profile',
            component: vProfile,
        },
        {
            path: '/login',
            name: 'login',
            component: vLogin,
        },
        {
            path: '/interests',
            name: 'interests',
            component: vInterestList,
        },
    ],
})

export default router;