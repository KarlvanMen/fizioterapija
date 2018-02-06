<template lang="pug">
    .home 
        .pc-background
            .woman
                img(src='../assets/woman.png')
            .rect0   
        nav
            router-link.a(:to="{ name: 'Fizioterapija'}")
                h1  Fizioterapija
            router-link.b(:to="{ name: 'Vingrosana'}")
                h1 Vingrošana
            .quote.c
                p {{quote}}
            .ghost
            router-link.movecenter.d(:to="{ name: 'Kalendars'}")
                h1 Kalendārs
            router-link.e(:to="{ name: 'Par mums'}")
                h1 Par mums
</template>

<script>

export default {
    name: 'Home',
    data () {
        return {
            quote: 'Lorem ipsum dolor sit amet, consectetuer',
        }
    },
    methods: {
        detectIE () {
            if (this.isIE()) {
                document.querySelector('.pc-background').classList.add('iExpl')
            }
        },
        isIE () {
            let ua = window.navigator.userAgent

            let msie = ua.indexOf('MSIE ')
            if (msie > 0) {
                return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
            }

            let trident = ua.indexOf('Trident/')
            if (trident > 0) {
                let rv = ua.indexOf('rv:')
                return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
            }

            let edge = ua.indexOf('Edge/')
            if (edge > 0) {
                return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10)
            }
            return false
        }
    },
    mounted () {
        this.detectIE()
    }
}
</script>

<style lang="stylus" scoped>
.home
    background-size         contain
    background-color        #afdbf2
    background-image        url(../assets/background.svg)
    background-size         100% auto
    background-repeat       no-repeat
    min-height              calc(100vh - 61px)
    padding-top             21px
    .pc-background
        display none
    nav
        display         flex
        flex-flow       column
        align-items     center
        width           100%
        box-sizing      border-box
        justify-content space-between
        a,
        .quote
            flex            1 0 auto
            margin          10px 0
            display         flex
            background      white
            width           80%
            max-width       320px
            text-align      center
            font-family     'Open Sans SemiBold'
            text-transform  uppercase
            h1
                height      3em
                line-height 3em
                margin      auto
        .quote
            display none
@media screen and (min-width: 1000px)
    .home
        background  none
        position    relative
        padding-top 0
        .pc-background
            background-color    rgba(22, 156, 221, 0.01)
            display             block
            position            absolute
            top                 -1px
            left                0
            right               0
            bottom              0
            z-index             -1
            overflow            hidden
            .rect0,
            .woman
                position    absolute
            .rect0
                top     0
                bottom  0
                left    0
                right   0
                background  #9cc9df
                opacity     0.2
            .woman
                top     0
                left    0
                right   0
                bottom  0
                background rgba(22, 156, 221, 0.12)
                img
                    width   auto
                    height  100%
        nav
            padding-left            30%
            padding-right           5%
            padding-top             4em
            flex-flow               row
            flex-wrap               wrap
            @supports (display: grid) 
                display                 grid
                grid-template-columns   repeat(3, 1fr)
                grid-gap                3em
            a,
            .quote,
            .ghost
                max-width   none
                margin      0
                width       30%
                flex        0 0 auto
                margin-top  5%
                @supports (display: grid) 
                    height      100%
                    width       100%
                    margin-top  0
                h1
                    padding     2em 0
                    font-size   1.2em
                    height      auto
                    line-height initial
                    position    relative
                    &:hover
                        &:after
                            width       42px
                            position    absolute
                            content     ''
                            height      1px
                            background  #169cdd
                            top         50%
                            margin-top  1em
                            left        -0.75em
                &.a,
                &.b,
                &.c
                    margin-top  0
            .quote
                text-align  left
                background  none
                p
                    margin-top  0
                    &:before
                        content '“'
                        display block
                        width   100%
                        font-weight         bold
                        font-style          italic
                        color               #169cdd
                        font-size           2em
                        background-repeat   no-repeat
                        background-size     contain
                        background-position left top
                        margin-bottom       -0.5em
            .movecenter
                grid-column-start: 2
            .quote
                display flex
            .ghost
                @supports (display: grid)
                    display none
@media screen and (min-width: 1298px)
    .home
        nav
            width       100%
            padding     4em 0 0 12%
            max-width   1080px
            margin      0 auto
</style>