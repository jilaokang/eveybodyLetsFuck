import Content from './components/index.vue'
import Login from './components/account/login.vue'
import Index from './components/home/home.vue'
import Room from './components/room/room.vue'
import Create from './components/create/create.vue'

import error404 from './components/error/404.vue'

const routes = [{
    path: '/',
    redirect: 'login',
    component: Content,
    children: [{
        path: 'home',
        component: Index
    }, {
        path: 'login',
        component: Login
    }, {
        path: 'room',
        component: Room
    }, {
        path: 'create',
        component: Create
    }]
},{
    path:"*",
    component:error404
}]


export default routes;