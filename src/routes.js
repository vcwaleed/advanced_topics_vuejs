import {createWebHistory, createRouter} from 'vue-router' 
import HomePageComponent from './components/HomePageComponent.vue'
import LoginPage from './components/LoginPage.vue';
import ProfilePage from './components/ProfilePage.vue';

const routes = [
    {
        name: 'HomePageComponent',
        path:'/',
        component: HomePageComponent
    },
    {
        name: 'LoginPage',
        path:'/login',
        component: LoginPage
    }
    ,
    {
        name: 'ProfilePage',
        path:'/ProfilePage/:name?',
        component: ProfilePage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;