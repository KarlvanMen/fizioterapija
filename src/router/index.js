import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FizioterapijaVingrosana from '@/components/FizioterapijaVingrosana'
import Kalendars from '@/components/Kalendars'
import About from '@/components/About'
import Galleries from '@/components/Galleries'
import GalleryView from '@/components/GalleryView'
import Kontakti from '@/components/Kontakti'

Vue.use(Router)

export default new Router({
    scrollBehavior: () => ({ y: 0 }),
    mode: 'history',
    history: true,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            props: {
                pageInfo: {
                    title: '',
                    link: {},
                    quote: 'Lorem ipsum dolor sit amet, consectetuer'
                }
            }
        },
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/fizioterapija',
            name: 'Fizioterapija',
            component: FizioterapijaVingrosana,
            props: {
                text: [
                    {
                        title: 'Konsultācijas pieaugušajiem un bērniem',
                        text:
                        {
                            title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
                            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in',
                            price: 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt'
                        },
                        image: 'https://dl.dropboxusercontent.com/s/y625aqdr954lyap/1-konsultacijas.jpg?dl=0',
                    },
                    {
                        title: 'INDIVIDUĀLĀS VINGROŠANAS NODARBĪBAS',
                        text:
                        {
                            title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
                            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in',
                            price: 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt'
                        },
                        image: 'https://dl.dropboxusercontent.com/s/vhtca0jzybby1qm/2-individualas-nodarbinas.jpg?dl=0',
                    },
                    {
                        title: 'ZĪDAIŅU VINGROŠANA',
                        text:
                        {
                            title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
                            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in',
                            price: 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt'
                        },
                        image: 'https://dl.dropboxusercontent.com/s/k2un5u21kaex6wd/3-zidainu.jpg?dl=0',
                    },
                    {
                        title: 'TEIPOŠANA',
                        text:
                        {
                            title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
                            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in',
                            price: 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt'
                        },
                        image: 'https://dl.dropboxusercontent.com/s/4aw0ozo04igzznz/4-teiposana.jpg?dl=0',
                    },
                    {
                        title: 'MASĀŽA',
                        text:
                        {
                            title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
                            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in',
                            price: 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt'
                        },
                        image: 'https://dl.dropboxusercontent.com/s/a8885vpfz6s2a46/5-masaza.jpg?dl=0',
                    },
                    {
                        title: 'SLINGA TERAPIJA',
                        text:
                        {
                            title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
                            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in',
                            price: 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt'
                        },
                        image: 'https://dl.dropboxusercontent.com/s/l2oh9t74u15o1lw/6-slinga-terapija.jpg?dl=0',
                    },
                    {
                        title: 'MĀJAS VIZĪTES',
                        text:
                        {
                            title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
                            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in',
                            price: 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt'
                        },
                        image: 'https://dl.dropboxusercontent.com/s/7s1ura1ppr75w5b/7-majas-vizites.jpg?dl=0',
                    },
                    {
                        title: 'INDIVIDUĀLAS PROGRAMMAS SASTĀDĪŠANA',
                        text:
                        {
                            title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
                            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in',
                            price: 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt'
                        },
                        image: 'https://dl.dropboxusercontent.com/s/crgo5dk1gvn4fyi/8-individualas-treninu-programmas-sastadisana.jpg?dl=0',
                    },
                ],
                pageInfo: {
                    title: 'Fizioterapija',
                    quote: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
                    link: {
                        title: '',
                        url: ''
                    }
                },
                extraImg: [
                    'https://dl.dropboxusercontent.com/s/xtlpa77eoxxtlyd/9-briva-laucina.jpg?dl=0',
                    'https://dl.dropboxusercontent.com/s/xtlpa77eoxxtlyd/9-briva-laucina.jpg?dl=0',
                ]
            }
        },
        {
            path: '/vingrosana',
            name: 'Vingrosana',
            component: FizioterapijaVingrosana,
            props: {
                text: [
                    {
                        title: 'Stretch it out',
                        text:
                        {
                            title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
                            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in',
                            price: 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt'
                        },
                        image: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                    },
                    {
                        title: 'Fix your neck',
                        text:
                        {
                            title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
                            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in',
                            price: 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt'
                        },
                        image: 'https://dl.dropboxusercontent.com/s/a2tafpswvnexh5l/img-1.png?dl=0',
                    },
                    {
                        title: 'Strength training',
                        text:
                        {
                            title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
                            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in',
                            price: 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt'
                        },
                        image: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                    },
                    {
                        title: 'Plank challange',
                        text:
                        {
                            title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
                            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in',
                            price: 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt'
                        },
                        image: 'https://dl.dropboxusercontent.com/s/a2tafpswvnexh5l/img-1.png?dl=0',
                    },
                    {
                        title: 'Stretch training',
                        text:
                        {
                            title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
                            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in',
                            price: 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt'
                        },
                        image: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                    },
                    {
                        title: 'Pasākumi',
                        text:
                        {
                            title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
                            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in',
                            price: 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt'
                        },
                        image: 'https://dl.dropboxusercontent.com/s/a2tafpswvnexh5l/img-1.png?dl=0',
                    },
                ],
                pageInfo: {
                    title: 'Vingrošana',
                    quote: '',
                    link: {
                        title: 'Pieteikties uz nodarbību',
                        url: '../kalendars'
                    }
                }
            }
        },
        {
            path: '/kalendars',
            name: 'Kalendars',
            component: Kalendars,
            props: {
                trainings: [
                    {
                        date: {
                            year: 2018,
                            month: 2,
                            day: 15
                        },
                        time: '17:30',
                        title: 'Power Stretch Training',
                        active: false
                    },
                    {
                        date: {
                            year: 2018,
                            month: 2,
                            day: 2
                        },
                        time: '17:30',
                        title: 'Power Stretch Training',
                        active: false
                    },
                    {
                        date: {
                            year: 2018,
                            month: 1,
                            day: 31
                        },
                        time: '17:30',
                        title: 'Power Stretch Training',
                        active: false
                    }
                ],
            }
        },
        {
            path: '/parmums',
            name: 'Par mums',
            component: About,
            props: {
                text: [
                    {
                        title: 'Par fizioterapeitiem',
                        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in.',
                        image: 'https://dl.dropboxusercontent.com/s/j5vkrvs58uikzoe/par-mums.jpg?dl=0',
                    },
                    {
                        title: 'Par fizioterapeitiem',
                        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in.',
                        image: 'https://dl.dropboxusercontent.com/s/681lsvu3ak197qf/IMG_9980.jpg?dl=0',
                    },
                ],
                pageInfo: {
                    title: 'Par mums',
                    quote: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
                    link: {
                        title: '',
                        url: ''
                    }
                }
            }
        },
        {
            path: '/galerijas',
            name: 'Video un attēli',
            component: Galleries,
            props: {
                text: [
                    {
                        title: 'Stretch it out',
                        image: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                        id: 1,
                        images: [
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'YouTube',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://www.youtube.com/watch?v=MeRmMz0_zJc',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'YouTube',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://www.youtube.com/watch?v=JcTCq8L6j_s',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                        ],
                    },
                    {
                        title: 'Fix your neck',
                        image: 'https://dl.dropboxusercontent.com/s/a2tafpswvnexh5l/img-1.png?dl=0',
                        id: 2,
                        images: [
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'YouTube',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://www.youtube.com/watch?v=MeRmMz0_zJc',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'YouTube',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://www.youtube.com/watch?v=JcTCq8L6j_s',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                        ],
                    },
                    {
                        title: 'Pasākumi',
                        image: 'https://dl.dropboxusercontent.com/s/1t0thbkk78r91kg/img-2.png?dl=0',
                        id: 3,
                        images: [
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'YouTube',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://www.youtube.com/watch?v=MeRmMz0_zJc',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'YouTube',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://www.youtube.com/watch?v=JcTCq8L6j_s',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                        ],
                    },
                    {
                        title: 'Plank challange',
                        image: 'https://dl.dropboxusercontent.com/s/8sz6i51vxsu912k/img-4.png?dl=0',
                        id: 4,
                        images: [
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'YouTube',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://www.youtube.com/watch?v=MeRmMz0_zJc',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'YouTube',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://www.youtube.com/watch?v=JcTCq8L6j_s',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                        ],
                    },
                ],
                pageInfo: {
                    title: 'Video un attēli',
                    quote: '',
                    link: {
                        title: '',
                        url: ''
                    }
                }
            }
        },
        {
            path: '/galerijas/:id',
            name: 'Galerija',
            component: GalleryView,
            props: {
                default: true,
                text: [
                    {
                        title: 'Stretch it out',
                        image: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                        id: 1,
                        images: [
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'YouTube',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://www.youtube.com/watch?v=MeRmMz0_zJc',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'YouTube',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://www.youtube.com/watch?v=JcTCq8L6j_s',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                        ],
                    },
                    {
                        title: 'Fix your neck',
                        image: 'https://dl.dropboxusercontent.com/s/a2tafpswvnexh5l/img-1.png?dl=0',
                        id: 2,
                        images: [
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'YouTube',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://www.youtube.com/watch?v=MeRmMz0_zJc',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'YouTube',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://www.youtube.com/watch?v=JcTCq8L6j_s',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                        ],
                    },
                    {
                        title: 'Pasākumi',
                        image: 'https://dl.dropboxusercontent.com/s/1t0thbkk78r91kg/img-2.png?dl=0',
                        id: 3,
                        images: [
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'YouTube',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://www.youtube.com/watch?v=MeRmMz0_zJc',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'YouTube',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://www.youtube.com/watch?v=JcTCq8L6j_s',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                        ],
                    },
                    {
                        title: 'Plank challange',
                        image: 'https://dl.dropboxusercontent.com/s/8sz6i51vxsu912k/img-4.png?dl=0',
                        id: 4,
                        images: [
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'YouTube',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://www.youtube.com/watch?v=MeRmMz0_zJc',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'YouTube',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://www.youtube.com/watch?v=JcTCq8L6j_s',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                                display: false,
                            },
                            {
                                type: 'image',
                                title: 'title',
                                text: 'Lorem Ipsum',
                                url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                                display: false,
                            },
                        ],
                    },
                ],
            }
        },
        {
            path: '/kontakti',
            name: 'Kontakti',
            component: Kontakti,
            props: {
                text: [
                    {
                        lat: 56.955454,
                        lng: 24.118983,
                        street: 'Brīvības iela 1-1',
                        streetFull: 'Brīvības iela 1 - 1, Rīga, LV -1010<br>1 stāvā',
                    },
                ],
                pageInfo: {
                    title: 'Kontakti',
                    quote: '',
                    link: {
                        title: '',
                        url: ''
                    },
                    sia: {
                        title: 'FIZIO AZ SIA',
                        email: 'info@fizioaz.lv',
                        phone: '+371 266 55 44'
                    }
                }
            }
        }
    ]
})
