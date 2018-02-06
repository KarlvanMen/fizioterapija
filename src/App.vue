<template lang="pug">
  #app
    .head
      router-link(:to="{ name: 'Home'}")
        img(src="./assets/fizioaz.png")
    Menu
    router-view
</template>

<script>
import Menu from './components/Menu.vue'
export default {
    name: 'app',
    components: {
        Menu,
    }
}
</script>

<style lang="stylus">
@font-face {
    font-family: 'Open Sans SemiBold';
    src: url('./assets/OpenSansSemibold/OpenSans-Semibold.eot');
    src: url('./assets/OpenSansSemibold/OpenSans-Semibold.eot?#iefix') format('embedded-opentype'),
        url('./assets/OpenSansSemibold/OpenSans-Semibold.woff2') format('woff2'),
        url('./assets/OpenSansSemibold/OpenSans-Semibold.woff') format('woff'),
        url('./assets/OpenSansSemibold/OpenSans-Semibold.ttf') format('truetype'),
        url('./assets/OpenSansSemibold/OpenSans-Semibold.svg#OpenSans-Semibold') format('svg');
    font-weight: 600;
    font-style: normal;
}
@font-face {
    font-family: 'Montserrat Light';
    src: url('./assets/MontserratLight/Montserrat-Light.eot');
    src: url('./assets/MontserratLight/Montserrat-Light.eot?#iefix') format('embedded-opentype'),
        url('./assets/MontserratLight/Montserrat-Light.woff2') format('woff2'),
        url('./assets/MontserratLight/Montserrat-Light.woff') format('woff'),
        url('./assets/MontserratLight/Montserrat-Light.ttf') format('truetype'),
        url('./assets/MontserratLight/Montserrat-Light.svg#Montserrat-Light') format('svg');
    font-weight: 300;
    font-style: normal;
}
@font-face {
    font-family: 'Open Sans Bold';
    src: url('./assets/OpenSansBold/OpenSans-Bold.eot');
    src: url('./assets/OpenSansBold/OpenSans-Bold.eot?#iefix') format('embedded-opentype'),
        url('./assets/OpenSansBold/OpenSans-Bold.woff2') format('woff2'),
        url('./assets/OpenSansBold/OpenSans-Bold.woff') format('woff'),
        url('./assets/OpenSansBold/OpenSans-Bold.ttf') format('truetype'),
        url('./assets/OpenSansBold/OpenSans-Bold.svg#OpenSans-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
}

html,
body
  margin  0
  padding 0
  height  100%
a
  text-decoration none
  color           inherit
#app
  font-family             'Montserrat Light', 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing  antialiased
  -moz-osx-font-smoothing grayscale
  color                   #4d4d4d
  font-size               18px
  min-height              100%
  .head
    height      40px
    width       100%
    display     flex
    background  #444a5a
    a
        margin  auto
        height  28px
        outline none
        img
            height  100%
            width   auto
@media screen and (min-width: 650px)
    #app
        .head
            height  61px
            a
                margin  auto 0 auto 41px
@media screen and (min-width: 1450px)
    #app
        .head
            a
                margin-left 50%
                transform   translateX(-684px)
</style>
