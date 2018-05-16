<template lang="pug">
    .kontakti(v-if="text.length")          
        .title.pc
            h1  {{pageInfo.pageTitle}}
            .quote(v-if="pageInfo.quote.length")
                p(v-html="pageInfo.quote")
            .redir(v-if="pageInfo.pageLinkURL.length")
                router-link(:to="{ path: pageInfo.pageLinkURL}")
                    h4 {{pageInfo.pageTitle}}
        .container
            Gmap(:markerCoordinates="text" :mapName="'gmap'")
            .information
                .question
                    form(v-on:submit.prevent="submitQ($event)")
                        .background
                        input(type="text" v-bind:placeholder="name")
                        input(type="tel" v-bind:placeholder="phone")
                        input(type="email" v-bind:placeholder="email")
                        input(type="text" v-bind:placeholder="question")
                        input(type="submit" v-bind:value="send")
                    .email-sent(v-if="showFeedback")
                        .container
                            p   Paldies, Jūsu informācija ir saņemta!
                            p   Drīzumā uz Jūsu epastu tiks nosūtīta informācija nodarbības apmaksai.
                .addresses
                    p
                        b {{pageInfo.siaTitle}}
                    p(v-for="address in text" v-html="'<span style=font-weight:600>' + address.street + '</span><br>' + address.streetFull + '<br>' + (address.additional !== null ? address.additional : '')")
                    p
                        b {{email}}
                    p(v-html="pageInfo.siaEmail")
                    p
                        b {{talrunis}}
                    p(v-html="pageInfo.siaPhone")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
            text: [],
            pageInfo: {},
            showFeedback: false,
        }
    },
    methods: {
        ...mapActions(['EDIT_SECTION']),
        submitQ (e) {
            let data = {
                name: e.target[0].value,
                phone: e.target[1].value,
                email: e.target[2].value,
                question: e.target[3].value,
                nav_url: 'send_qt'
            }
            if (data.name === '') e.target[0].classList.add('red')
            if (data.phone === '') e.target[1].classList.add('red')
            if (data.email === '') e.target[2].classList.add('red')
            if (data.question === '') e.target[3].classList.add('red')
            if (!(data.name === '' || data.phone === '' || data.email === '' || data.question === '')) {
                let self = this
                this.EDIT_SECTION(data).then((res) => {
                    e.target[0].value = ''
                    e.target[1].value = ''
                    e.target[2].value = ''
                    e.target[3].value = ''
                    self.showFeedback = true
                    setTimeout(() => {
                        self.showFeedback = false
                    }, 5000)
                })
            }
        },
    },
    components: {
        Gmap,
    },
    computed: {
        ...mapGetters([
            'getKontaktiData'
        ])
    },
    mounted () {
        let self = this
        let interval = setInterval(function () {
            if (typeof self.getKontaktiData.pageInfo !== 'undefined') {
                let data = self.getKontaktiData
                self.pageInfo = data.pageInfo[0]
                self.text = data.text
                clearInterval(interval)
            }
        }, 100)
    }
}
</script>


<style lang="stylus" scoped>
.kontakti
    min-height  calc(100vh - 40px)
    background  #f2f2f2
    padding-bottom  1px
    .pc
        display none
    .question,
    .addresses
        display block
        margin  1.5em auto
        width   270px
    .question
        position relative
        form
            position    relative
            .background
                background  white
                position    absolute
                top     -5px
                left    -5px
                right   5px
                bottom  3.5em
            input
                width           100%
                background      none
                border          none
                border-bottom   1px solid #169cdd
                padding         1em 0 0.5em 0
                position        relative
                outline         none
                &.red
                    border-left 1px solid red
            input[type="submit"]
                border          none
                border          1px solid #3cace2
                color           #3cace2
                background-color    white
                font-weight     bold
                padding         1em
                text-transform  uppercase
                border-radius   1.63em
                width           100%
                margin-top      2em
                cursor          pointer
                &:hover
                    background      #3cace2
                    color           white
        .email-sent
            position    absolute
            top         0
            left        0
            right       0
            bottom      0
            background  white
            z-index     1000
            .container
                display     block
                padding     1px 10px
                border      2px solid #169bdc
                min-height  1px
                margin      10px
    @media screen and (min-width: 1000px)
        min-height  calc(100vh - 62px)
        overflow    hidden
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
            min-height  600px
            .information
                padding 1em 3em 1px
                order   -1
    @media screen and (min-width: 1298px)
        .title 
            width           100%      
            max-width       1080px
            margin          0 auto 
            padding-left    0
            position        relative
            z-index         10
            &:after
                content     ''
                position    absolute
                top         0
                left        -5000px
                right       -5000px
                bottom      0
                background  white
                z-index     -1
</style>