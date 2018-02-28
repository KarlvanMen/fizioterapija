<template lang="pug">
    .popup(:class="{small: minimize}")
        .minimize(@click="minimize = !minimize")
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
                input(type="tel" placeholder="TELEFONA NR." v-model="phone")
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
                div vajadzīgs rēķins apdrošināšanas kompānijai
            .input-holder(v-if="insurance")
                input(type="number" placeholder="PERSONAS KODS" v-model="persID")
                span.white
                span.blue
                span.extrawhite
            button(type="submit") PIETEIKTIES
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
            persID: '',
            minimize: false,
            style: ''
        }
    },
    watch: {
        minimize () {
            if (this.minimize) {
                document.body.style.overflow = 'visible'
            } else {
                document.body.style.overflow = 'hidden'
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
                personaId: this.persID,
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
            if (this.phone === '') e.target[1].classList.add('red')
            if (this.email === '') e.target[2].classList.add('red')
            if (!(this.name === '' || this.phone === '' || this.email === '')) {
                let self = this
                this.EDIT_SECTION(data).then((res) => {
                    self.minimize = true
                })
            }
        },
    },
    mounted () {
        this.style = document.body.style.cssText
        document.body.style.overflow = 'hidden'
    },
    beforeDestroy () {
        document.body.style.cssText = this.style
    },
    props: ['trainings']
}
</script>

<style lang="stylus" scoped>
    .popup
        position    absolute
        top         63px
        border-top  2px solid #3cace2
        left        0
        right       0
        bottom      0
        background-color  #fbfbfb
        padding     2em 3em 0
        max-height  1000px
        z-index     100
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
            margin-bottom   2em
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
                        right               0
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
            .insurance
                margin  1em 0
                input
                    display none
                    &:checked + label
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
                    font-size   0.7em
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
        @media screen and (min-width: 1000px)
            position    fixed
            left        auto
            right       0
            top         auto
            bottom      0
            width       220px
            z-index     100
        @media screen and (min-width: 1660px)
            left        50%
            right       auto
            margin-left 500px
</style>