import Content from './components/index.vue'
import Login from './components/account/login.vue'
import Index from './components/account/index.vue'


const routes = [{
    path: '/',
    redirect: 'login',
    component: Content,
    children: [{
        path: 'index',
        component: Index
    }, {
        path: 'login',
        component: Login
    }]
}]


export default routes;