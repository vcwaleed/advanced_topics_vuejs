import {createWebHistory, createRouter} from 'vue-router' 
import HomePageComponent from './components/HomePageComponent.vue'
import LoginPage from './components/LoginPage.vue';
import ProfilePage from './components/ProfilePage.vue';
import PageNotFound from './components/PageNotFound.vue';
import CreateForm from './components/CreateForm.vue';

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
    },
    { 
        name: 'CreateForm',
        path:'/CreateForm',
        component:CreateForm

    },
    {
        name: 'PageNotFound',
        path:'/:pathMatch(.*)*',
        component : PageNotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;