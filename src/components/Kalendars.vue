<template lang="pug">
    .kalendars
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
    .info
        padding 1em 2em
        p
            border 1px solid #169cdd
            padding 1em
</style>