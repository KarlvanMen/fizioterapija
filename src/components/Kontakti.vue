<template lang="pug">
    .kontakti
        Gmap
        .question
            form
                .background
                input(type="text" v-bind:placeholder="text.name")
                input(type="number" v-bind:placeholder="text.phone")
                input(type="email" v-bind:placeholder="text.email")
                input(type="text" v-bind:placeholder="text.question")
                input(type="submit" v-bind:value="text.send")
        .addresses
            template(v-for="address in text.address")
                p
                    b {{address.title}}
                p(v-html="address.text")
</template>

<script>
import Gmap from './Gmap.vue'

export default {
    name: 'Kontakti',
    data () {
        return {
            text: {
                name: 'VĀRDS UZVĀRDS',
                phone: 'TELEFONA NR.',
                email: 'E-PASTS',
                question: 'JAUTĀJUMS',
                send: 'NOSŪTĪT',
                address: [
                    {
                        title: 'FIZIO AZ SIA',
                        text: 'Brīvības iela 1 - 1, Rīga, LV -1010<br>1 stāvā'
                    },
                    {
                        title: 'E-PASTS',
                        text: 'info@fizioaz.lv'
                    },
                    {
                        title: 'TĀLRUNIS',
                        text: '+371 266 55 44'
                    },
                ]
            }
        }
    },
    methods: {
    },
    components: {
        Gmap,
    }
}
</script>


<style lang="stylus" scoped>
.kontakti
    min-height  calc(100vh - 40px)
    background  #f2f2f2
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
                height  calc(100% - 2.5em)
            input
                width           100%
                background      none
                border          none
                border-bottom   1px solid #169cdd
                padding         1em 0 0.5em 0
                position        relative
            input[type="submit" i]
                border          none
                border          1px solid #169cdd
                border-radius   1.5em
                background      white
                height          3em
                display         block
                margin          1em auto
                color           #169cdd
                font-family     "Open Sans Semibold"
</style>