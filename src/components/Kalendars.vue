<template lang="pug">
    .kalendars
        .background.pc
            .top-right
            .bottom-left
        Calendar
        .info
            p Rezervē vietu nodarbībā, noklikšķinot uz tās. Izvēlētās nodarbības paradīsies zaļas. Lai pabeigtu rezervāciju aizpildi rezervācijas formu.
</template>

<script>
import Calendar from './Calendar.vue'

export default {
    name: 'Kalendars',
    data () {
        return {
        }
    },
    methods: {
    },
    components: {
        Calendar
    }
}
</script>

<style lang="stylus" scoped>
.kalendars
    overflow    hidden
    .pc
        display none
    .info
        padding     1em 2em 0
        margin-bottom   10px
        max-width       960px
        margin          0 auto
        p
            border      1px solid #169cdd
            padding     1em
            position    relative
            &:after
                content     ''
                position    absolute
                top         5px
                left        -5px
                right       5px
                bottom      -5px
                background  #ffffff
                z-index     -1
    @media screen and (min-width: 1000px)
        overflow    visible
        position    relative
        .pc
            display block
        .background
            position    absolute
            top         0
            left        0
            right       0
            bottom      0
            z-index     -1
            .top-right
                position        absolute
                top             -24px
                left            auto
                right           0
                bottom          auto
                height          0
                border-bottom   300px solid transparent
                border-right    300px solid #169CDD      
                opacity         0.12
            .bottom-left
                position        fixed
                top             auto
                left            0
                right           auto
                bottom          -2em
                height          0
                border-bottom   250px solid #169CDD
                border-right    250px solid transparent
                opacity         0.12
    @media screen and (min-width: 1450px)
        .info
            position    absolute
            width       208px
            bottom      0
            left        50%
            margin-left -725px
            top         auto
            font-size   0.8em
            padding     0
            z-index     -1
            p
                margin  0
            
    // @media screen and (min-width: 1200px)
    //     .info
    //         position    fixed
    //         left    3%
    //         bottom  3em
</style>