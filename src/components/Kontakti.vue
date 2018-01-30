<template lang="pug">
    .kontakti           
        .title.pc
            h1  {{pageInfo.title}}
            .quote(v-if="pageInfo.quote.length")
                p(v-html="pageInfo.quote")
            .redir(v-if="pageInfo.link.title.length")
                router-link(:to="{ path: pageInfo.link.url}")
                    h4 {{pageInfo.link.title}}
        .container
            Gmap(:markerCoordinates="text")
            .information
                .question
                    form
                        .background
                        input(type="text" v-bind:placeholder="name")
                        input(type="number" v-bind:placeholder="phone")
                        input(type="email" v-bind:placeholder="email")
                        input(type="text" v-bind:placeholder="question")
                        input(type="submit" v-bind:value="send")
                .addresses
                    p
                        b {{pageInfo.sia.title}}
                    p(v-for="address in text" v-html="address.streetFull")
                    p
                        b {{email}}
                    p(v-html="pageInfo.sia.email")
                    p
                        b {{talrunis}}
                    p(v-html="pageInfo.sia.phone")
</template>

<script>
import Gmap from './Gmap.vue'

export default {
    name: 'Kontakti',
    data () {
        return {
            name: 'VĀRDS UZVĀRDS',
            phone: 'TELEFONA NR.',
            email: 'E-PASTS',
            question: 'JAUTĀJUMS',
            send: 'NOSŪTĪT',
            talrunis: 'TĀLRUNIS',
        }
    },
    components: {
        Gmap,
    },
    props: ['text', 'pageInfo'],
}
</script>


<style lang="stylus" scoped>
.kontakti
    min-height  calc(100vh - 40px)
    background  #f2f2f2
    .pc
        display none
    .question,
    .addresses
        display block
        margin  1.5em auto
        width   270px
    .question
        form
            position    relative
            .background
                background  white
                position    absolute
                top     0
                left    -5px
                width   100%
                height  calc(100% - 3.5em)
            input
                width           100%
                background      none
                border          none
                border-bottom   1px solid #169cdd
                padding         1em 0 0.5em 0
                position        relative
                outline         none
            input[type="submit" i]
                border          1px solid #3cace2
                color           #3cace2
                background      white
                font-weight     bold
                padding         1em
                text-transform  uppercase
                border-radius   1.63em
                width           100%
                margin-top      2em
                &:hover
                    background      #3cace2
                    color           white
    @media screen and (min-width: 1000px)
        min-height  calc(100vh - 61px)
        display     flex
        flex-flow   column
        .pc
            display block
        .title
            background  white
            padding 35px 0 2em 218px
            flex    0 0 auto
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
        .container
            display     flex
            align-items stretch
            flex        1 1 auto
            .information
                padding 1em 3em 1px
                order   -1
</style>