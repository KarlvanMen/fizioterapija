<template lang="pug">
    .calendar
        .header
            .title
                h1  {{ text.months[(activeDate.month-1)] }}
                p   Pirms nākt uz nodarbību, rezervē sev vietu noklikšķinot uz&nbsp;tās
            .big-container
                .arrow.prev(@click="previousWeek")
                .month.prev-month
                    .week(v-for="week in dates.previousMonth")
                        .day(v-for="day, index in week" @click="changeToday(day, index)" :class="{'not-current-month': !(day.month === activeDate.month), 'today': (day.day === activeDate.day && day.month === activeDate.month && day.year === activeDate.year)}")
                            .weekday {{text.days[index]}}
                            .date {{day.day}}
                .month.this-month
                    .week(v-for="week in dates.thisMonth")
                        .day(v-for="day, index in week" @click="changeToday(day, index)" :class="{'not-current-month': !(day.month === activeDate.month), 'today': (day.day === activeDate.day && day.month === activeDate.month && day.year === activeDate.year)}")
                            .weekday {{text.days[index]}}
                            .date {{day.day}}
                .month.next-month
                    .week(v-for="week in dates.nextMonth")
                        .day(v-for="day, index in week" @click="changeToday(day, index)" :class="{'not-current-month': !(day.month === activeDate.month), 'today': (day.day === activeDate.day && day.month === activeDate.month && day.year === activeDate.year)}")
                            .weekday {{text.days[index]}}
                            .date {{day.day}}
                .arrow.next(@click="nextWeek")
        .main
            .trainings
                template(v-for="training, index in sample.trainings")
                    .training-container(v-if="trainingIsToday(training)" @click="addTraining(index)" :class="{active: training.active}")
                        .title {{training.title}}
                        .time {{training.time}}
        .reservation
        Popup(v-if="displayPopup")
</template>

<script>
import Popup from './CalendarPopup.vue'

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
            date: [],
            activeDate: {},
            currentDate: {},
            sample: {
                trainings: [
                    {
                        date: {
                            year: 2018,
                            month: 1,
                            day: 24
                        },
                        time: '17:30',
                        title: 'Power Stretch Training',
                        active: false
                    },
                    {
                        date: {
                            year: 2018,
                            month: 1,
                            day: 24
                        },
                        time: '17:30',
                        title: 'Power Stretch Training',
                        active: false
                    },
                    {
                        date: {
                            year: 2018,
                            month: 1,
                            day: 23
                        },
                        time: '17:30',
                        title: 'Power Stretch Training',
                        active: false
                    }
                ]
            },
            prevMonth: {},
            thisMonth: {},
            nextMonth: {},
            dates: {
                previousMonth: [],
                thisMonth: [],
                nextMonth: []
            },
            displayPopup: false,
        }
    },
    methods: {
        changeToday (day, i) {
            this.activeDate = {
                day: day.day,
                dayOfTheWeek: i + 1,
                month: day.month,
                year: day.year
            }
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
            this.sample.trainings[i].active = !this.sample.trainings[i].active
            this.displayPopup = true
        },
        addDates () {
            let today = new Date()

            this.activeDate = {
                day: today.getDate(),
                dayOfTheWeek: today.getDay(),
                month: today.getMonth() + 1,
                year: today.getFullYear()
            }
            this.currentDate = this.activeDate
            //  Previous month
            let daysOfPrePreMonth = []
            let prevMonth = today.getMonth() - 1
            let prevMonthYear = today.getFullYear()
            if (prevMonth < 0) {
                prevMonth = 12
                prevMonthYear--
            }
            let prePreMonth = prevMonth - 1
            let prePreMonthYear = prevMonthYear
            if (prePreMonth < 0) {
                prePreMonth = 12
                prePreMonthYear--
            }
            let lastDayOfPrePreMonth = new Date(prePreMonthYear, prePreMonth, 1).getDay() - 1
            if (lastDayOfPrePreMonth < 0) lastDayOfPrePreMonth = 7 + lastDayOfPrePreMonth
            let lengthOfPrePreMonth = new Date(prePreMonthYear, prePreMonth, 0).getDate()
            for (let i = 0; i < lastDayOfPrePreMonth; i++) {
                daysOfPrePreMonth.push(lengthOfPrePreMonth - i)
            }
            daysOfPrePreMonth.reverse()

            let daysOfPrevMonth = []
            let prevMonthDays = []
            let prevMonthLastDays = new Date(prevMonthYear, prevMonth, 0).getDate()
            let thisMonthFirstDayOfTheWeek = new Date(today.getFullYear(), today.getMonth(), 1).getDay() - 1
            if (thisMonthFirstDayOfTheWeek < 0) thisMonthFirstDayOfTheWeek = 6
            for (let i = 0; i < thisMonthFirstDayOfTheWeek; i++) {
                daysOfPrevMonth.push(prevMonthLastDays - i)
            }
            daysOfPrevMonth.reverse()
            for (let i = 0; i < new Date(prevMonthYear, prevMonth, 0).getDate(); i++) {
                prevMonthDays.push(i + 1)
            }
            let thisMonthDaysForPrevMonth = []
            for (let i = 0; i < thisMonthFirstDayOfTheWeek; i++) {
                thisMonthDaysForPrevMonth.push(i + 1)
            }

            let daysOfPrevMonthView = {
                DaysOfPrevMonth: daysOfPrePreMonth,
                DaysOfThisMonth: prevMonthDays,
                DaysOfNextMonth: thisMonthDaysForPrevMonth,
            }

            //  This month
            let daysOfThisMonth = []
            for (let i = 0; i < new Date(today.getFullYear(), today.getMonth(), 0).getDate(); i++) {
                daysOfThisMonth.push(i + 1)
            }
            let daysOfNextMonth = []
            let lengthOfThisMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate()
            let thisMonthLastDay = new Date(today.getFullYear(), today.getMonth(), lengthOfThisMonth).getDay() - 1
            if (thisMonthLastDay < 0) thisMonthLastDay = 6
            for (let i = thisMonthLastDay; i < 6; i++) {
                daysOfNextMonth.push(i - thisMonthLastDay + 1)
            }
            let daysOfThisMonthView = {
                DaysOfPrevMonth: daysOfPrevMonth,
                DaysOfThisMonth: daysOfThisMonth,
                DaysOfNextMonth: daysOfNextMonth,
            }
            //  Next  month
            let daysOfNextMonthPrevMonth = []
            for (let i = 0; i <= thisMonthLastDay; i++) {
                daysOfNextMonthPrevMonth.push(lengthOfThisMonth - i)
            }
            daysOfNextMonthPrevMonth.reverse()
            let nextmonth = today.getMonth() === 0 ? today.getMonth() + 2 : today.getMonth() + 1
            let nextYear = today.getFullYear()
            if (nextmonth > 12) {
                nextmonth = 1
                nextYear++
            }
            let lengthOfNextMonth = new Date(nextYear, nextmonth, 0).getDate()
            let daysOfNextMonthCount = []
            for (let i = 0; i < lengthOfNextMonth; i++) {
                daysOfNextMonthCount.push(i + 1)
            }
            let lastDayofNextMonth = new Date(nextYear, nextmonth, 0).getDay() - 1
            if (lastDayofNextMonth < 0) lastDayofNextMonth = 6
            let daysOfNextNextMonth = []
            for (let i = lastDayofNextMonth; i < 6; i++) {
                daysOfNextNextMonth.push(i - thisMonthLastDay + 1)
            }
            let daysOfNextMonthView = {
                DaysOfPrevMonth: daysOfNextMonthPrevMonth,
                DaysOfThisMonth: daysOfNextMonthCount,
                DaysOfNextMonth: daysOfNextNextMonth,
            }
            this.previousMonth = daysOfPrevMonthView
            this.thisMonth = daysOfThisMonthView
            this.nextMonth = daysOfNextMonthView
            this.sortByWeeks()
        },
        sortByWeeks () {
            let months = {
                prePreMonth: (this.activeDate.month - 2) <= 0 ? 12 + this.activeDate.month - 2 : this.activeDate.month - 2,
                prevMonth: (this.activeDate.month - 1) <= 0 ? 12 + this.activeDate.month - 1 : this.activeDate.month - 1,
                thisMonth: this.activeDate.month === 0 ? 1 : this.activeDate.month,
                nextMonth: (this.activeDate.month + 1) > 12 ? this.activeDate.month + 1 - 12 : this.activeDate.month + 1,
                nextNextMonth: (this.activeDate.month + 2) > 12 ? this.activeDate.month + 2 - 12 : this.activeDate.month + 2,
            }
            let years = {
                prePreMonth: (this.activeDate.month - 2) <= 0 ? this.activeDate.year - 1 : this.activeDate.year,
                prevMonth: (this.activeDate.month - 1) <= 0 ? this.activeDate.year - 1 : this.activeDate.year,
                thisMonth: this.activeDate.year,
                nextMonth: (this.activeDate.month + 1) > 12 ? this.activeDate.year + 1 : this.activeDate.year,
                nextNextMonth: (this.activeDate.month + 2) > 12 ? this.activeDate.year + 1 : this.activeDate.year,
            }
            let weeks = []
            let tempWeek = []
            let length = this.previousMonth.DaysOfPrevMonth.length + this.previousMonth.DaysOfThisMonth.length + this.previousMonth.DaysOfNextMonth.length
            for (let i = 0; i < length; i++) {
                if (i < this.previousMonth.DaysOfPrevMonth.length) {
                    tempWeek.push({
                        day: this.previousMonth.DaysOfPrevMonth[i],
                        month: months.prePreMonth,
                        year: years.prePreMonth,
                    })
                } else if (i < (this.previousMonth.DaysOfPrevMonth.length + this.previousMonth.DaysOfThisMonth.length)) {
                    tempWeek.push({
                        day: i + 1 - this.previousMonth.DaysOfPrevMonth.length,
                        month: months.prevMonth,
                        year: years.prevMonth,
                    })
                } else {
                    tempWeek.push({
                        day: i + 1 - this.previousMonth.DaysOfPrevMonth.length - this.previousMonth.DaysOfThisMonth.length,
                        month: months.thisMonth,
                        year: years.thisMonth,
                    })
                }
                if (tempWeek.length === 7) {
                    weeks.push(tempWeek)
                    tempWeek = []
                }
            }
            this.dates.previousMonth = weeks
            weeks = []
            length = this.thisMonth.DaysOfPrevMonth.length + this.thisMonth.DaysOfThisMonth.length + this.thisMonth.DaysOfNextMonth.length
            for (let i = 0; i < length; i++) {
                if (i < this.thisMonth.DaysOfPrevMonth.length) {
                    tempWeek.push({
                        day: this.thisMonth.DaysOfPrevMonth[i],
                        month: months.prevMonth,
                        year: years.prevMonth,
                    })
                } else if (i < (this.thisMonth.DaysOfPrevMonth.length + this.thisMonth.DaysOfThisMonth.length)) {
                    tempWeek.push({
                        day: i + 1 - this.thisMonth.DaysOfPrevMonth.length,
                        month: months.thisMonth,
                        year: years.thisMonth,
                    })
                } else {
                    tempWeek.push({
                        day: i + 1 - this.thisMonth.DaysOfPrevMonth.length - this.thisMonth.DaysOfThisMonth.length,
                        month: months.nextMonth,
                        year: years.nextMonth,
                    })
                }
                if (tempWeek.length === 7) {
                    weeks.push(tempWeek)
                    tempWeek = []
                }
            }
            this.dates.thisMonth = weeks
            weeks = []
            length = this.nextMonth.DaysOfPrevMonth.length + this.nextMonth.DaysOfThisMonth.length + this.nextMonth.DaysOfNextMonth.length
            for (let i = 0; i < length; i++) {
                if (i < this.nextMonth.DaysOfPrevMonth.length) {
                    tempWeek.push({
                        day: this.nextMonth.DaysOfPrevMonth[i],
                        month: months.thisMonth,
                        year: years.thisMonth,
                    })
                } else if (i < (this.nextMonth.DaysOfPrevMonth.length + this.nextMonth.DaysOfThisMonth.length)) {
                    tempWeek.push({
                        day: i + 1 - this.nextMonth.DaysOfPrevMonth.length,
                        month: months.nextMonth,
                        year: years.nextMonth,
                    })
                } else {
                    tempWeek.push({
                        day: i + 1 - this.nextMonth.DaysOfPrevMonth.length - this.nextMonth.DaysOfThisMonth.length,
                        month: months.nextNextMonth,
                        year: years.nextNextMonth,
                    })
                }
                if (tempWeek.length === 7) {
                    weeks.push(tempWeek)
                    tempWeek = []
                }
            }
            this.dates.nextMonth = weeks
        },
        addCurrentWeek () {
            let weeks = this.$el.querySelectorAll('.week')
            let months = this.$el.querySelectorAll('.month')
            setTimeout(() => {
                weeks.forEach((week) => {
                    if (week.querySelector('.today') !== null) {
                        week.classList.add('current')
                    } else {
                        week.classList.remove('current')
                    }
                })
                months.forEach((month) => {
                    if (month.querySelector('.current') !== null) {
                        month.classList.add('open')
                    } else {
                        month.classList.remove('open')
                    }
                })
            }, 50)
        },
        previousWeek () {
            let day = this.activeDate.dayOfTheWeek - 1
            if (day < 0) day = 7 + day
            if (this.activeDate.day < 8) {
                if (this.activeDate.month < 2) {
                    this.activeDate.year -= 1
                    this.activeDate.month = 12
                } else {
                    this.activeDate.month -= 1
                }
                this.activeDate.day = (new Date(this.activeDate.year, this.activeDate.month, 0).getDate()) - 7 + this.activeDate.day
            } else {
                this.activeDate.day -= 7
            }
            this.addCurrentWeek()
        },
        nextWeek () {
            let day = this.activeDate.dayOfTheWeek - 1
            if (day < 0) day = 7 + day
            let daysOfThisMonth = new Date(this.activeDate.year, this.activeDate.month, 0).getDate()
            if (this.activeDate.day + 7 > daysOfThisMonth) {
                if (this.activeDate.month > 11) {
                    this.activeDate.year += 1
                    this.activeDate.month = 1
                } else {
                    this.activeDate.month += 1
                }
                this.activeDate.day = this.activeDate.day + 7 - daysOfThisMonth
            } else {
                this.activeDate.day += 7
            }
            this.addCurrentWeek()
        }
    },
    mounted: function () {
        this.addDates()
        let self = this
        setTimeout(() => {
            self.addCurrentWeek()
        }, 300)
    },
    components: {
        Popup
    }
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
            p
                padding     0 1em
                text-align  center
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
        .big-container
            display         flex
            flex-wrap       nowrap
            justify-content center
            align-items     center
            border-bottom   1px solid #3cace2
            .arrow
                width               17px
                height              36px
                background-image    url(../assets/arrow-right.svg)
                background-size     contain
                background-repeat   no-repeat
                background-position center
                flex                0 0 auto
                &.prev
                    transform       rotate(180deg)

                &.hide
                    display none
            .month
                flex    1 1 auto
                &:not(.open)
                    display none
                .week
                    width   100%
                    height  36px
                    &:not(.current)
                        display none
                    .day
                        float           left
                        width           13.9%
                        text-align      center
                        padding         0.2em 0 0.5em
                        font-family     'Open Sans SemiBold'
                        border-right    1px solid #3cace2
                        &:last-of-type
                            border-right    none
                        &.not-current-month
                            opacity 0.5
                        &.today
                            background  #3cace2
                            color       white
                        .weekday, .date
                            display         inline-block
                            vertical-align  top
                        .weekday
                            margin-right    0.2em
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