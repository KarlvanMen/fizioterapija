<template lang="pug">
    .home    
        nav
            router-link(:to="{ name: 'Fizioterapija'}")
                h1  Fizioterapija
            router-link(:to="{ name: 'Vingrosana'}")
                h1 Vingrošana
            router-link(:to="{ name: 'Kalendars'}")
                h1 Kalendārs
            router-link(:to="{ name: 'Par mums'}")
                h1 Par mums
</template>

<script>

export default {
    name: 'Home',
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
    nav
        display         flex
        flex-flow       column
        align-items     center
        width           100%
        box-sizing      border-box
        justify-content space-between
        a
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
</style>