import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FizioterapijaVingrosana from '@/components/FizioterapijaVingrosana'
import Kalendars from '@/components/Kalendars'
import About from '@/components/About'
import Galleries from '@/components/Galleries'
import GalleryView from '@/components/GalleryView'
import Kontakti from '@/components/Kontakti'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/fizioterapija',
            name: 'Fizioterapija',
            component: FizioterapijaVingrosana,
        },
        {
            path: '/vingrosana',
            name: 'Vingrosana',
            component: FizioterapijaVingrosana,
        },
        {
            path: '/kalendars',
            name: 'Kalendars',
            component: Kalendars,
        },
        {
            path: '/parmums',
            name: 'Par mums',
            component: About,
        },
        {
            path: '/galerijas',
            name: 'Video un attēli',
            component: Galleries,
        },
        {
            path: '/galerijas/:id',
            name: 'Galerija',
            component: GalleryView,
        },
        {
            path: '/kontakti',
            name: 'Kontakti',
            component: Kontakti,
        },
        {
            path: '/adminpage',
            name: 'Admin',
            component: Admin,
        }
    ]
})
