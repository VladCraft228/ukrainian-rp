import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Contact from '../views/Contact.vue'
import SuccessfulSend from '../views/SuccessfulSend'
import Extra from '../views/Extra';
import About_Samp from '../views/extra/About_Samp';
import RP_termins from '../views/extra/RP_termins';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/extra',
        name: 'Extra',
        component: Extra
    },
    {
        path: '/extra/about-samp',
        name: 'About_Samp',
        component: About_Samp
    },
    {
        path: '/extra/rp-termins',
        name: 'RP_termins',
        component: RP_termins
    },
    {
        path: '/contact/successful',
        name: 'SuccessfulSend',
        component: SuccessfulSend
    },
    // 404 page
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
