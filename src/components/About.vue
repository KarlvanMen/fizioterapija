<template lang="pug">
    .about
        .bckgrnd.pc
            .top-right
            .top-right2
            .bottom-left           
        .title.pc
            h1  {{pageInfo.title}}
            .quote(v-if="pageInfo.quote.length")
                p(v-html="pageInfo.quote")
            .redir(v-if="pageInfo.link.title.length")
                router-link(:to="{ path: pageInfo.link.url}")
                    h4 {{pageInfo.link.title}}
        .section(v-for="section in text")
            .background(:style="backgroundImage(section.image)")
            .text
                h2 {{section.title}}
                p {{section.text}}
</template>

<script>

export default {
    name: 'About',
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
.about
    padding-bottom  25px
    .pc
        display none
    .section
        .background
            height              0
            padding-bottom      56.25%
            background-size     cover
            background-repeat   no-repeat
        .text
            padding 0 1.5em
            h2
                font-family     "Open Sans Semibold"
                text-transform  uppercase
                font-size       1.1em
    @media screen and (min-width: 1000px)
        padding     0
        position    relative
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
        .bckgrnd
            position    absolute
            top         0
            left        0
            right       0
            bottom      0
            z-index     -1
            .top-right,
            .top-right2
                position        absolute
                top             -24px
                left            auto
                right           0
                bottom          auto
                height          0
                border-bottom   450px solid transparent
                border-right    450px solid #169CDD      
                opacity         0.12
            .top-right2
                border-bottom   750px solid transparent
                border-right    750px solid #169CDD 
            .bottom-left
                position        absolute
                top             auto
                left            0
                right           auto
                bottom          -2em
                height          0
                border-bottom   450px solid #169CDD
                border-right    450px solid transparent
                opacity         0.12
        .section
            max-width   1080px
            margin      0 auto 1em
            .background,
            .text
                display         inline-block
                vertical-align  top
                width           50%
                text-align      justify
                h2
                    margin-top  0
            .background
                width           40%
                height          0
                padding-bottom  22.5%
    @media screen and (min-width: 1298px)
        .title 
            width           100%      
            max-width       1080px
            margin          0 auto 
            padding-left    0
</style>