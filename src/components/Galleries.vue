<template lang="pug">
    .galleries
        .title.pc
            h1  {{pageInfo.title}}
            .quote(v-if="pageInfo.quote.length")
                p   {{pageInfo.quote}}
            .redir(v-if="pageInfo.link.title.length")
                router-link(:to="{ path: pageInfo.link.url}")
                    h4 {{pageInfo.link.title}}
        ul.section-container
            router-link(v-for="section in text" :key="section.id" :to="{ name: 'Galerija', params: { id: (section.id - 1) }}")
                li.section
                    .background(v-bind:style="{'background-image': 'url('+section.image+')'}")
                    .title
                        h2  {{section.title}}          
</template>

<script>

export default {
    name: 'Galleries',
    data () {
        return {
        }
    },
    methods: {
        backgroundImage (url) {
            return {
                'background-image': 'url(' + url + ')'
            }
        }
    },
    props: ['text', 'pageInfo'],
}
</script>

<style lang="stylus" scoped>
.galleries
    .pc
        display none
    ul
        margin  0 0
        padding 0
        a
            .section
                height              180px
                position            relative
                list-style          none
                .background
                    position            absolute
                    top                 0
                    left                0
                    right               0
                    bottom              0
                    background-position center
                    background-size     cover
                    background-repeat   no-repeat
                .title
                    display     flex
                    width       100%
                    height      100%
                    box-sizing  border-box
                    position    relative
                    h2
                        font-family     "Open Sans Semibold"
                        text-transform  uppercase
                        font-size       1.2em
                        margin          auto
                        z-index         100
                    &::after
                        content             ''
                        background-color    white
                        width               80%
                        height              70%
                        position            absolute
                        top                 15%
                        left                10%
                        opacity             0.7
                        z-index             10
    @media screen and (min-width: 1000px)
        .pc
            display block
            padding 35px 0 2em 218px
            h1  
                text-transform  uppercase
                font-size       32px
                position        relative
                &:after
                    content     ''
                    position    absolute
                    top         110%
                    left        -0.25em
                    height      0
                    width       1.25em
                    border-bottom   1px solid #169cdd
            .quote
                max-width       250px
                text-transform  uppercase
                font-weight     bold
                margin-left     2em
                p
                    &:before
                        content '“'
                        display block
                        width   100%
                        font-weight         bold
                        font-style          italic
                        color               #169cdd
                        font-size           3em
                        background-repeat   no-repeat
                        background-size     contain
                        background-position left top
                        margin-bottom       -0.5em
                        margin-left         -0.125em
            .redir
                text-transform  uppercase
                margin-top      3em
                font-size       0.8em
                margin-left     1.5em
                display         inline-block
                position        relative
                padding-right   0.5em
                &:after
                    content     ''
                    position    absolute
                    top         0
                    bottom      0
                    left        100%
                    background-image    url(../assets/arrow-next-blue.svg)
                    background-size     100% 60%
                    background-repeat   no-repeat
                    background-position center
                    width               1.5em
        .section-container
            display                 grid
            grid-template-columns   repeat(3, 1fr)
            grid-gap                0  
            .section
                height  0
                padding-bottom  56.25%
                .title
                    position    absolute
                    top         2em
                    left        2em
                    bottom      2em
                    right       2em
                    width       auto
                    height      auto
                    &:after
                        width   100%
                        height  100%
                        top     0
                        left    0

</style>