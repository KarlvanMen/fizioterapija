<template lang="pug">
    .calendar
        .header
            .title
                h1  {{ text.months[(activeDate.month-1)] }}
                p   Pirms nākt uz nodarbību, rezervē sev vietu noklikšķinot uz tās
            .container
                .arrow.prev
                .day(v-for="day, index in text.days" @click="changeToday(index)" :class="{active: date[index]['day'] === activeDate.day}") {{day}} {{date[index]['day']}}                    
                .arrow.next
        .main
            .trainings
                template(v-for="training, index in sample.trainings")
                    .training-container(v-if="trainingIsToday(training)" @click="addTraining(index)" :class="{active: training.active}")
                        .title {{training.title}}
                        .time {{training.time}}
</template>

<script>

export default {
    name: 'Kalendars',
    data () {
        return {
            text: {
                days: [
                    'P',
                    'O',
                    'T',
                    'C',
                    'P',
                    'S',
                    'S',
                ],
                months: [
                    'Janvāris',
                    'Februāris',
                    'Marts',
                    'Aprīlis',
                    'Maijs',
                    'Jūnijs',
                    'Jūlijs',
                    'Augusts',
                    'Septembris',
                    'Oktobris',
                    'Novembris',
                    'Decembris',
                ]
            },
            date: [
                {
                    day: 18,
                    month: 12,
                    year: 2017
                },
                {
                    day: 19,
                    month: 12,
                    year: 2017
                },
                {
                    day: 20,
                    month: 12,
                    year: 2017
                },
                {
                    day: 21,
                    month: 12,
                    year: 2017
                },
                {
                    day: 22,
                    month: 12,
                    year: 2017
                },
                {
                    day: 23,
                    month: 12,
                    year: 2017
                },
                {
                    day: 24,
                    month: 12,
                    year: 2017
                },
            ],
            activeDate: {
                day: 22,
                month: 12,
                year: 2017
            },
            sample: {
                trainings: [
                    {
                        date: {
                            year: 2017,
                            month: 12,
                            day: 22
                        },
                        time: '17:30',
                        title: 'Power Stretch Training',
                        active: false
                    },
                    {
                        date: {
                            year: 2017,
                            month: 12,
                            day: 22
                        },
                        time: '17:30',
                        title: 'Power Stretch Training',
                        active: false
                    }
                ]
            }
        }
    },
    methods: {
        changeToday (i) {
            this.activeDate = this.date[i]
        },
        trainingIsToday (tr) {
            if (!(tr.date.year === this.activeDate.year)) {
                return false
            }
            if (!(tr.date.month === this.activeDate.month)) {
                return false
            }
            if (!(tr.date.day === this.activeDate.day)) {
                return false
            }
            return true
        },
        addTraining (i) {
            this.sample.trainings[i].active = true
        }
    },
}
</script>

<style lang="stylus" scoped>
.calendar
    .header
        position    relative
        &:after
            content     ''
            position    absolute
            width       100%
            top         auto
            bottom      0
            left        0
            height      0.7em
            background  #f2f2f2
            z-index     -1
        .title
            h1
                font-family     'Open Sans SemiBold'
                text-transform  uppercase
                letter-spacing  -0.05em
                text-align      center
                &:after
                    display             block
                    width               100px
                    height              1px
                    background-color    #3cace2
                    margin              0 auto
                    content             ''
        .container
            display         flex
            justify-content center
            overflow        hidden
            border-bottom   1px solid #3cace2
            .arrow
                width       20px
                background-image    url(../assets/arrow-right.svg)
                background-size     contain
                background-repeat   no-repeat
                background-position center
                &.prev
                    transform       rotate(180deg)
                &.hide
                    display none
            .day
                flex            0 0 auto
                width           12.5%
                text-align      center
                padding         0.2em 0 0.5em
                font-family     'Open Sans SemiBold'
                border-right    1px solid #3cace2
                &.active
                    background  #3cace2
                    color       white
                &:nth-of-type(8)
                    border-right    none
    .main
        background-color    #f2f2f2
        padding             1px 0 30px
        min-height          150px
        .trainings
            .training-container
                display         flex
                justify-content center
                margin-top      30px
                .title
                    width   170px
                    border  1px solid #169cdd
                    padding 0.5em 1em
                    box-sizing  border-box
                .time
                    width       80px
                    background  #169cdd
                    color       white
                    border      1px solid #169cdd
                    display     flex
                    justify-content center
                    align-items     center
                &.active
                    .title, .time
                        border-color    #17c37b
                    .time
                        background  #17c37b
</style>