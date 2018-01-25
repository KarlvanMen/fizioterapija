<template lang="pug">
    .home 
        .pc-background
            .woman
                img(src='../assets/woman.png')
            .rect0                
            .rect1
                svg(xmlns="http://www.w3.org/2000/svg" width="1372" height="989")
                    path(fill-rule="evenodd" opacity=".329" fill="#169CDD" d="M1371.662 989H.001V.957h441.386L1371.662 989z")
            .rect2
                svg(xmlns="http://www.w3.org/2000/svg" width="1372" height="989")
                    path(fill-rule="evenodd" opacity=".329" fill="#169CDD" d="M1371.903 989H.242V.957h441.386L1371.903 989z")
            .rect3
                svg(xmlns="http://www.w3.org/2000/svg" width="1373" height="989")
                    path(fill-rule="evenodd" opacity=".329" fill="#169CDD" d="M1372.397 989H.736V.957h441.385L1372.397 989z")
            .rect4
                svg(xmlns="http://www.w3.org/2000/svg" width="1623" height="989")
                    path(fill-rule="evenodd" opacity=".122" fill="#169CDD" d="M.832.957h1621.661V989H931.107L.832.957z")
        nav
            router-link(:to="{ name: 'Fizioterapija'}")
                h1  Fizioterapija
            router-link(:to="{ name: 'Vingrosana'}")
                h1 Vingrošana
            .quote
                p {{quote}}
            router-link.movecenter(:to="{ name: 'Kalendars'}")
                h1 Kalendārs
            router-link(:to="{ name: 'Par mums'}")
                h1 Par mums
</template>

<script>

export default {
    name: 'Home',
    data () {
        return {
            quote: 'Lorem ipsum dolor sit amet, consectetuer',
        }
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
            background-color    #efeff7
            display             block
            position            absolute
            top                 0
            left                0
            right               0
            bottom              0
            z-index             -1
            overflow            hidden
            .rect0,
            .rect1,
            .rect2,
            .rect3,
            .rect4,
            .woman
                position    absolute
            .rect0
                top     0
                bottom  0
                left    0
                right   0
                background  #bebeff
                opacity     0.2
            .rect1
                top     0
                bottom  0
                left    auto
                right   55%
            .rect2
                top     0
                bottom  0
                left    auto
                right   35%
            .rect3
                top     0
                bottom  0
                left    auto
                right   15%
            .rect4
                top     0
                bottom  0
                left    20%
                right   auto
            .woman
                top     0
                left    0
                right   0
                bottom  0
                img
                    width   auto
                    height  100%
        nav
            display                 grid
            grid-template-columns   repeat(3, 1fr)
            grid-gap                3em
            padding-left            30%
            padding-right           5%
            padding-top             4em
            a,
            .quote
                width       100%
                max-width   none
                margin      0
                height      100%                
                h1
                    padding     2em 0
                    font-size   1.2em
                    height      auto
                    line-height initial
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
</style>