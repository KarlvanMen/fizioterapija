<template lang="pug">
    .fizioterapija
        .title.pc
            h1  {{pageInfo.title}}
            .quote(v-if="pageInfo.quote.length")
                p   {{pageInfo.quote}}
            .redir(v-if="pageInfo.link.title.length")
                router-link(:to="{ path: pageInfo.link.url}")
                    h4 {{pageInfo.link.title}}
        ul.section-container
            div(v-for="section, index in text")
                li.section(@click="toggleSection(index)" :class="'section-' + (index%3 + 1)")
                    .background(v-bind:style="{'background-image': 'url('+section.image+')'}")
                    h2  {{section.title}}
                    .text
                        h3  {{section.text.title}}
                        p.desc   {{section.text.text}}
                        p.pricing   {{section.text.price}}
            div(v-for="extra in extraEl")
                li.section.extra
                    .background(v-bind:style="{'background-image': 'url('+extraImg[extra-1]+')'}")
</template>

<script>

export default {
    name: 'FizioterapijaVingrosana',
    data () {
        return {
        }
    },
    props: ['text', 'pageInfo', 'extraImg'],
    methods: {
        toggleSection (index) {
            let wide = false
            let width = document.body.clientWidth
            if (width > 999) wide = true
            let sections = document.querySelector('.fizioterapija').querySelectorAll('.section')
            for (let i = 0; i < sections.length; i++) {
                if (i !== index) {
                    sections[i].classList.remove('open')
                    if (wide) sections[i].style.marginBottom = '0'
                }
            }
            if (sections[index].classList.contains('open')) {
                sections[index].classList.remove('open')
                if (wide) sections[index].style.marginBottom = '0'
            } else {
                sections[index].classList.add('open')
                if (wide) {
                    setTimeout(function () {
                        let height = sections[index].querySelector('.text').offsetHeight + 100
                        sections[index].style.marginBottom = height + 'px'
                        window.scrollBy(0, height)
                    }, 200)
                }
            }
        },
    },
    updated () {
        let sections = document.querySelector('.fizioterapija').querySelectorAll('.section')
        for (let i = 0; i < sections.length; i++) {
            let section = sections[i]
            section.classList.remove('open')
            section.style.marginBottom = '0'
        }
    },
    computed: {
        extraEl: function () {
            return this.text != null ? 3 - this.text.length % 3 !== 3 ? 3 - this.text.length % 3 : 0 : 0
        }
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
    .pc
        display none
    ul
        margin  0
        padding 0
        li
            position    relative
            cursor      pointer
            list-style  none
            h2
                text-transform  uppercase
                font-size       1.05em  
                margin          0 10px 0.5em 10px
                padding-bottom  0.5em
                border-bottom   1px solid #444A5A
                vertical-align  bottom
                font-family     "Open Sans Semibold"
                display         flex
                align-items     flex-end
                &::before
                    flex                0 0 auto
                    content             ''
                    height              1.25em
                    width               2.8em
                    background-image    url(../assets/arrow.svg)
                    background-size     contain
                    background-repeat   no-repeat
                    background-position center bottom
                    display             block
                    float               left
                    transition          transform 0.2s ease-out
                    margin-right        1em
            .text
                max-height  0
                overflow    hidden
                opacity     0
                transition  max-height 0.5s ease-in 0, opacity 0.5s ease-out 0
                padding     0 10px
                h3
                    text-transform  uppercase
                    font-size       1.05em
                    font-family     "Open Sans Bold"
            &.open
                overflow        hidden
                width           100%
                height          auto
                h2
                    &::before
                        transform   rotate(-180deg)
                .text
                    animation-name      maxheight
                    animation-duration  0.5s
                    animation-fill-mode forwards
                    max-height          none
                    margin              0
                    opacity             1
                &::before                    
                    position            absolute
                    content             ''
                    z-index             -1
                    top                 auto
                    left                -10px
                    bottom              0
                    height              0
                    border-bottom       280px solid #e3f3fb
                    border-right        280px solid transparent
@media screen and (min-width: 1000px)
    .fizioterapija
        padding-bottom  0
        .pc
            display block
            padding 35px 0 2em 218px
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
                a
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
        ul
            background              #f2f2f2
            display     flex
            flex-wrap   wrap
            @supports (display: grid) 
                display                 grid
                grid-template-columns   repeat(3, 1fr)
                grid-gap                0
            div
                width   33.33%
                flex    1 0 auto
                @supports (display: grid) 
                    width           100%
                li
                    list-style      none
                    height          0
                    z-index         1000
                    cursor          pointer
                    width           100%
                    padding-bottom  56.25%
                    &:hover,
                    &.open
                        .background
                            background-color        #42a4d4
                            background-blend-mode   hard-light
                    &.extra
                        cursor      initial
                    .background
                        position            absolute
                        top                 0
                        left                0
                        right               0
                        bottom              0
                        background-position center
                        background-repeat   no-repeat
                        background-size     cover
                        z-index             -1
                        width               100%
                    h2
                        border-bottom       0
                        background-color    rgba(255,255,255,0.8)
                        position            absolute
                        top                 2em
                        left                1em
                        right               1em
                        bottom              2em
                        padding             1em
                        font-size           1.2em
                        text-align          center
                        box-sizing          border-box
                        align-items         center
                        justify-content     center
                        &:before
                            display none                
                    &.open
                        overflow    visible
                        &:before
                            bottom          -1.2em
                            border-bottom   2em solid #ffffff
                            border-left     2em solid transparent
                            border-right    2em solid transparent
                            z-index         1000
                            left            50%
                            transform       translateX(-50%)
                        &:after
                            content             ''
                            position            absolute
                            top                 auto
                            bottom              -1.5em
                            left                50%
                            transform           translateX(-50%)
                            z-index             1000
                            width               2em
                            height              2em
                            background-image    url('../assets/arrow-up.svg')
                            background-size     contain
                            background-repeat   no-repeat
                        .text
                            position        absolute
                            top             100%
                            top             calc(100% + 10px)
                            background      white
                            left            1em
                            width           290%
                            width           calc(300% - 2em)
                            padding         0.5em 1em 1em
                            box-sizing      border-box
                            cursor          initial     
                            overflow        visible       
                            z-index         10            
                            &:after
                                position        absolute
                                content         ''
                                top             auto
                                left            -1em
                                bottom          -90px
                                height          0
                                border-bottom   280px solid #e3f3fb
                                border-right    280px solid transparent
                                z-index         -10
                            &:before
                                content     ''
                                position    absolute
                                top         0
                                left        0
                                right       0
                                bottom      0
                                background  white
                                z-index     -1
                            h3
                                width           33%
                                font-size       1em
                            p.desc
                                column-count    2
                                column-gap      3em
                                widows          5
                                display         inline-block
                                vertical-align  top
                                width           66%
                                padding-right   3em
                                box-sizing      border-box
                            p.pricing
                                display         inline-block
                                vertical-align  top
                                width           33%
                    &.section-2
                        .text
                            left    -95%
                    &.section-3
                        .text
                            left    -195%
@media screen and (min-width: 1298px)
    .fizioterapija
        overflow    hidden
        min-height  calc(100vh - 72px)
        .pc
            padding-left    0
            width       100%
            max-width   1080px
            margin      0 auto
        .section-container
            max-width   1080px
            width       100%
            margin      0 auto
            position    relative
            z-index     100
            &:before
                content     ''
                position    absolute
                top         0
                bottom      -5000px
                left        -5000px
                right       -5000px
                background  #f2f2f2
                z-index     -1
            &:after
                position            fixed
                content             ''
                z-index             -1
                top                 auto
                left                0
                bottom              0
                height              0
                border-bottom       280px solid #e3f3fb
                border-right        280px solid transparent
            div
                li.open
                    .text:after
                        display none
</style>