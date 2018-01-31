<template lang="pug">
    .popup(:class="{small: minimize}")
        .minimize(@click="minimize = !minimize")
        .trainings
            .training(v-for="tr in trainings" v-if="tr.active")
                .date
                    p {{tr.date.day}}.{{tr.date.month}}.{{tr.date.year}} {{tr.time}}
                    .delete(@click="tr.active = false")
                p {{tr.title}}
        form(v-on:submit.prevent="submitTr()")
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
        }
    },
    methods: {
        submitTr () {
            console.log(this.name)
            console.log(this.phone)
            console.log(this.email)
            console.log(this.insurance)
            console.log(this.persID)
            this.$emit('close')
        },
    },
    props: ['trainings']
}
</script>

<style lang="stylus" scoped>
    @keyframes slideIn {
        0% {
            top: 100%
            bottom: 0;
        }
        100% {
            top: 63px
            bottom: 0;
        }
    }
    .popup
        position    absolute
        top         63px
        border-top  2px solid #3cace2
        left        0
        right       0
        bottom      0
        background-color  #f2f2f2
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
            background-color    #f2f2f2
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
                        top         0px
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
            .insurance
                margin  1em 0
                input
                    display none
                    &:checked + label
                        background-image    url(../assets/checkbox-checked.svg)
                label
                    width   2em
                    height  2em
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
            width       280px
            z-index     100
</style>