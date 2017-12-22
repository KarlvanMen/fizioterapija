<template lang="pug">
    .fizioterapija    
        ul
            li.section(v-for="section, index in text" @click="toggleSection(index)")
                h2  {{section.title}}
                .text
                    h3  {{section.text.title}}
                    p   {{section.text.text}}
</template>

<script>

export default {
    name: 'FizioterapijaVingrosana',
    data () {
        return {
        }
    },
    props: ['text'],
    methods: {
        toggleSection (index) {
            let sections = document.querySelector('.fizioterapija').querySelectorAll('.section')
            sections[index].classList.contains('open') ? sections[index].classList.toggle('open') : this.closeOtherSections(sections, index)
        },
        closeOtherSections (sections, index) {
            sections.forEach((section) => {
                section.classList.remove('open')
            })
            sections[index].classList.add('open')
        }
    },
    updated: () => {
        let sections = document.querySelector('.fizioterapija').querySelectorAll('.section')
        sections.forEach((section) => {
            section.classList.remove('open')
        })
    }
}
</script>

<style lang="stylus" scoped>
@keyframes maxheight {
    0 {
        max-height  0
        opacity     0
    }
    99% {
        max-height  1000px
    }
    100%{
        max-height  none
        opacity     1
    }
}


.fizioterapija
    padding     10px 0 25px 0
    height      100%
    ul
        margin  0
        padding 0
        li
            position    relative
            h2
                text-transform  uppercase
                font-size       1.05em  
                margin          0 10px
                padding-bottom  0.5em
                border-bottom   1px solid #444A5A
                vertical-align  bottom
                font-family     "Open Sans Semibold"
                display         flex
                align-items     flex-end
                &::before
                    flex                0 0 auto
                    content             ''
                    height              1.5em
                    width               2.8em
                    background-image    url(../assets/arrow.svg)
                    background-size     contain
                    background-repeat   no-repeat
                    background-position center bottom
                    display             block
                    float               left
                    transition          transform 0.2s ease-out
                    margin-bottom       0.2em
                    margin-right        1em
            .text
                max-height  0
                overflow    hidden
                opacity     0
                transition  max-height .5s ease-in, opacity 0.5s ease-out
                padding     0 10px
                h3
                    text-transform  uppercase
                    font-size       1.05em
                    font-family     "Open Sans Bold"
            &.open
                overflow        hidden
                width           100%
                h2
                    &::before
                        transform   rotate(-180deg)
                .text
                    animation-name      maxheight
                    animation-duration  0.5s
                    animation-fill-mode forwards
                    position            relative
                    margin              0
                &::before                    
                    position            absolute
                    content             ''
                    background-color    #e3f3fb
                    z-index             -1
                    width               110%
                    height              0
                    padding-bottom      110%
                    top                 auto
                    left                -10px
                    bottom              -40%
                    transform-origin    center
                    transform           translateX(-50%) rotate(-45deg) 
</style>