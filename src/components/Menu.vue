<template lang="pug">
  .menu
    .burger(@click="displayMenu=!displayMenu" :class="{ close: displayMenu}")
    nav(v-if="displayMenu")
        router-link(:to="{ name: 'Fizioterapija'}" @click.native="displayMenu = false") Fizioterapija
        router-link(:to="{ name: 'Vingrosana'}" @click.native="displayMenu = false") Vingrošana
        router-link(:to="{ name: 'Kalendars'}" @click.native="displayMenu = false") Kalendārs
        router-link(:to="{ name: 'Par mums'}" @click.native="displayMenu = false") Par mums
        router-link(:to="{ name: 'Video un attēli'}" @click.native="displayMenu = false") Video un attēli
        router-link(:to="{ name: 'Kontakti'}" @click.native="displayMenu = false") Kontakti
    nav.pc
        router-link(:to="{ name: 'Fizioterapija'}" @click.native="displayMenu = false") Fizioterapija
        router-link(:to="{ name: 'Vingrosana'}" @click.native="displayMenu = false") Vingrošana
        router-link(:to="{ name: 'Kalendars'}" @click.native="displayMenu = false") Kalendārs
        router-link(:to="{ name: 'Par mums'}" @click.native="displayMenu = false") Par mums
        router-link(:to="{ name: 'Video un attēli'}" @click.native="displayMenu = false") Video un attēli
        router-link(:to="{ name: 'Kontakti'}" @click.native="displayMenu = false") Kontakti
</template>

<script>
export default {
    name: 'Menu',
    data () {
        return {
            displayMenu: false,
        }
    }
}
</script>

<style lang="stylus" scoped>
.menu
    padding      0 10px
    box-sizing          border-box
    font-family 'Open Sans SemiBold'
    position    absolute
    top         40px
    left        auto
    width       100%
    right       0
    z-index     1000
    .burger
        width               42px
        height              42px
        background-color    #169bdc
        background-image    url(../assets/burger.svg)
        background-size     cover
        background-position center
        float               right
        margin-top          -21px
        &.close
            background-image    url(../assets/close.svg)
    nav
        background-color    #169bdc
        margin-top          21px
        padding-bottom      2.5em
        position            absolute
        width               93%
        width               calc(100% - 20px)
        box-sizing          border-box
        top                 0
        left                auto
        right               10px
        &.pc
            display none
        a 
            display         block
            width           160px
            padding         3em 0 0.5em
            margin          0 auto
            text-align      center
            color           white
            text-transform  uppercase
            position        relative
            text-decoration none
            &:hover 
                &:after
                    width       42px
                    position    absolute
                    content     ''
                    height      1px
                    background  white
                    top         auto
                    bottom      0
                    left        0
@media screen and (min-width: 650px)
    .menu
        .burger
            margin-top  -5px
@media screen and (min-width: 1000px)
    .menu
        .burger
            display none
        nav.pc
            display         flex
            justify-content space-around
            align-items     center
            margin-top      -1em
            position        static
            padding         1em
            width           77%
            width           calc(100% - 249px)
            margin-left     auto
            margin-right    41px
            a
                width       auto
                font-size   16px
                padding     0
                margin      0
                &:hover
                    &:after
                        left    -0.5em
</style>
