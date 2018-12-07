<template lang="pug">
    .popup(:class="{small: minimize}")
        .minimize(@click="minPop()")
        .trainings
            .training(v-for="tr in trainings" v-if="tr.active")
                .date
                    p {{tr.day}}.{{tr.month}}.{{tr.year}} {{tr.time}}
                    .delete(@click="tr.active = false")
                p {{tr.title}}
        form(v-on:submit.prevent="submitTr($event)")
            .input-holder
                input(type="text" placeholder="VĀRDS UZVĀRDS" v-model="name")
                span.white
                span.blue
            .input-holder
                input(type="number" placeholder="TELEFONA NR." v-model="phone" minlength=8)
                span.white
                span.blue
            .input-holder
                input(type="email" placeholder="E-PASTS" v-model="email")
                span.white
                span.blue
                span.extrawhite
            .insurance
                input#insurance(type="checkbox" v-model="insurance")
                label(for="insurance")
                div Vēlos norādīt savu personas kodu rēķinā
            .input-holder.perskods(v-if="insurance")
                input.pers(type="number" placeholder="PERSONAS" min="0" v-model="persID_1" minlength=6 maxlength=6)
                span.minus -
                input(type="number" ref="kods" placeholder="KODS" min="0" v-model="persID_2" minlength=5 maxlength=5)
                span.white
                span.blue
                span.extrawhite
            .vdar
                input#vdar(type="checkbox" v-model="vdar")
                label(for="vdar")
                div Apstiprinu, ka dati ir pareizi un piekrītu savu personas datu apstrādei
            button(type="submit") PIETEIKTIES
        .email-sent(v-if="showFeedback")
            .container
                p   Paldies, Jūsu informācija ir saņemta!
                p   Drīzumā uz Jūsu epastu tiks nosūtīta informācija nodarbības apmaksai.
        .email-sent(v-if="showVdarFeedback")
            .container.yellow
                p   Vai piekrītat Jūsu personas datu apstrādei?
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'Kalendars',
    data () {
        return {
            name: '',
            phone: '',
            email: '',
            insurance: false,
            vdar: false,
            persID_1: '',
            persID_2: '',
            style: '',
            style2: '',
            showFeedback: false,
            showVdarFeedback: false
        }
    },
    watch: {
        persID_1 () {
            if (this.persID_1.length > 6) {
                this.persID_2 = this.persID_1.substr(6, 6)
                this.persID_1 = this.persID_1.substr(0, 6)
                this.$refs.kods.focus()
            }
        },
        persID_2 () {
            if (this.persID_2.length > 5) {
                this.persID_2 = this.persID_2.substr(0, 5)
            }
        },
    },
    methods: {
        ...mapActions(['EDIT_SECTION']),
        submitTr (e) {
            let data = {
                name: this.name,
                phone: this.phone,
                email: this.email,
                insurance: this.insurance,
                personaId: this.persID_1 + '' + this.persID_2,
                nav_url: 'send_tr',
                trainings: []
            }
            for (let i = 0; i < this.trainings.length; i++) {
                if (this.trainings[i].active === true) {
                    data.trainings.push({
                        Nosaukums: this.trainings[i].title,
                        Laiks: this.trainings[i].day + '.' + this.trainings[i].month + '.' + this.trainings[i].year + ' ' + this.trainings[i].time,
                    })
                }
            }
            if (this.name === '') e.target[0].classList.add('red')
            if (this.phone === '' || this.phone.length < 8) e.target[1].classList.add('red')
            if (this.email === '') e.target[2].classList.add('red')
            if (!this.vdar) {
                e.target[5].classList.add('red')
                this.showVdarFeedback = true
                let self = this
                setTimeout(() => {
                    self.showVdarFeedback = false
                }, 5000)
            }
            if (!(this.name === '' || this.phone === '' || this.email === '') && this.phone.length > 7 && data.trainings.length && this.vdar) {
                let self = this
                this.EDIT_SECTION(data).then((res) => {
                    self.showFeedback = true
                    for (let i = 0; i < self.trainings.length; i++) {
                        self.trainings[i].active = false
                    }
                    self.name = ''
                    self.phone = ''
                    self.email = ''
                    self.insurance = false
                    self.persID = ''
                    setTimeout(() => {
                        self.showFeedback = false
                        self.minimize = true
                    }, 5000)
                })
            }
        },
        minPop () {
            this.$emit('minPopup')
        }
    },
    // mounted () {
    //     this.style = document.body.style.cssText
    //     this.style2 = document.documentElement.style.cssText
    //     // document.body.style.overflow = 'hidden'
    //     // document.documentElement.style.overflow = 'hidden'
    // },
    // beforeDestroy () {
    //     document.body.style.cssText = this.style
    //     document.documentElement.style.overflow = this.style2
    // },
    props: ['trainings', 'minimize']
}
</script>

<style lang="stylus" scoped>
    .popup
        position    fixed
        top         63px
        border-top  2px solid #3cace2
        left        0
        right       0
        bottom      0
        background-color  #fbfbfb
        padding     2em 3em 0
        max-height  1000px
        z-index     100
        max-height  calc(100vh - 83px)
        box-sizing  border-box
        overflow    auto
        &:before
            content     ''
            position    absolute
            left        0
            right       0
            bottom      0
            top         0
            background-color    #fbfbfb
            z-index             -1
        &.small
            position    fixed
            top         auto
            bottom      0
            max-height  0.1em
            overflow    hidden
            .minimize
                top                 10px
                background-image    url(../assets/arrow-up.svg)
        .minimize
            height              1.5em
            background-image    url(../assets/arrow.svg)
            background-size     contain
            background-repeat   no-repeat
            background-position right bottom
            cursor              pointer
            position            absolute
            top                 10px
            left                0
            right               5px
        .trainings,
        form
            padding-bottom   2em
            .training
                text-transform  uppercase
                font-size       0.8em
                .date
                    border-bottom   2px solid #3cace2
                    position        relative
                    .delete
                        width               1.35em
                        position            absolute
                        top                 0
                        left                auto
                        right               -1.35em
                        bottom              0
                        background-image    url(../assets/x-blue.svg)
                        background-position center
                        background-size     contain
                        background-repeat   no-repeat
                        cursor              pointer
                    p
                        margin-bottom 0.2em
            .input-holder
                position        relative
                z-index         100
                span
                    position    absolute
                    &.white
                        top         -2px
                        left        -5px
                        right       5px
                        bottom      2px
                        background  white
                        z-index     -1
                    &.blue
                        top     auto
                        bottom  2px
                        left    0
                        width   100%
                        border  1px solid #3cace2
                    &.extrawhite
                        top         auto
                        bottom      -5px
                        left        -5px
                        right       5px
                        border      5px solid #ffffff
                        background  white
                        z-index     -1
                input
                    width           100%
                    border          none
                    background      none
                    padding         1em 0
                    z-index         1000
                    outline         none
                    &.red
                        border-left 1px solid rgba(255,0,0, 0.8)
                    &[type='number'],
                    &::-webkit-outer-spin-button,
                    &::-webkit-inner-spin-button
                        -moz-appearance     textfield
                        -webkit-appearance  none
                        appearance          none
                        margin              0
                &.perskods
                    display flex
                    flex-wrap wrap
                    position relative
                    input,
                    .minus
                        flex 1 1 auto
                        max-width 45%
                    .minus
                        position relative
                        top -2px
                        width 10px
                        line-height 40px
                        text-align center
                        background-color #fbfbfb
                        z-index 100
                        &:before
                            content ''
                            position absolute
                            height 2px
                            width 5px
                            top auto
                            left 0
                            bottom 0
                            background-color #3cace2
                        &:after
                            content ''
                            position absolute
                            height 2px
                            width 5px
                            top auto
                            left auto
                            right -5px
                            bottom 0
                            background-color #fff
            .insurance,
            .vdar
                margin  1em 0
                input
                    display none
                    &.red + label
                        background-image    url(../assets/checkbox-red.svg)
                    &:checked + label,
                    &.red:checked + label
                        background-image    url(../assets/checkbox-checked.svg)
                label
                    width   1.5em
                    height  1.5em
                    background #ffffff url(../assets/checkbox.svg) no-repeat center
                    background-size contain
                    content ''
                    display inline-block
                    vertical-align  middle
                div 
                    display inline-block
                    width   78%
                    width   calc(100% - 3.5em)
                    font-size   0.6em
                    text-transform  uppercase
                    vertical-align  middle
                    margin-left 1em
            button
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
        .email-sent
            position    absolute
            top         2em
            left        2.5em
            right       2.5em
            bottom      2em
            background  white
            z-index     1000
            .container
                padding 1px 10px
                border  2px solid #17c37b
                &.yellow
                    border-color #f00
        @media screen and (min-width: 1000px)
            position    fixed
            left        auto
            right       0
            top         auto
            bottom      0
            width       220px
            z-index     100
            padding     2em 1.5em 0
            .email-sent
                top 1px
                left 1px
                right 1px
                bottom 1px
                display flex
                align-items center
                justify-content center
        @media screen and (min-width: 1660px)
            left        50%
            right       auto
            margin-left 500px
</style>