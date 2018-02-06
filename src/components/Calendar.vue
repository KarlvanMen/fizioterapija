<template lang="pug">
    .calendar
        .header
            .title
                h1.pc   Kalendārs
                .arrow.prev.pc(@click="changePreviousMonth" v-if="showPrev")
                h1  {{ text.months[(activeDate.month-1)] }}
                .arrow.next.pc(@click="changeNextMonth" v-if="showNext")                
                p   Pirms nākt uz nodarbību, rezervē sev vietu noklikšķinot uz&nbsp;tās                
            .big-container(v-if="dates.nextMonth.length")
                .arrow.prev.no-pc(@click="previousWeek" v-if="activeDate.day + activeDate.month * 31 + activeDate.year > dates.thisMonth[0][0].day + dates.thisMonth[0][0].month * 31 + 2024")
                .month.prev-month
                    .week(v-for="week in dates.previousMonth")
                        .day(v-for="day, index in week" @click="changeToday(day, index)" :class="{'not-current-month': !(day.month === activeDate.month), 'today': (day.day === activeDate.day && day.month === activeDate.month && day.year === activeDate.year)}")
                            .weekday {{text.days[index]}}
                            .date {{day.day}}
                            .trainings.pc.grey
                                template(v-for="training, index in sample.trainings")
                                    .training-container(v-if="trainingIsThisDay(training, day)" @click="addTraining(index)" :class="{active: training.active}")
                                        .title {{training.title}}
                                        .time {{training.time}}
                .month.this-month
                    .daysOfWeek.pc
                        .day(v-for="day in text.daysFull") {{day}}
                    .week(v-for="week in dates.thisMonth")
                        .day(v-for="day, index in week" @click="changeToday(day, index)" :class="{'not-current-month': !(day.month === activeDate.month), 'today': (day.day === activeDate.day && day.month === activeDate.month && day.year === activeDate.year)}")
                            .weekday {{text.days[index]}}
                            .date {{day.day}}
                            .trainings.pc
                                template(v-for="training, index in sample.trainings")
                                    .training-container(v-if="trainingIsThisDay(training, day)" @click="addTraining(index)" :class="{active: training.active, grey: training.date.day < currentDate.day}")
                                        .title {{training.title}}
                                        .time {{training.time}}
                .month.next-month
                    .daysOfWeek.pc
                        .day(v-for="day in text.daysFull") {{day}}
                    .week(v-for="week in dates.nextMonth")
                        .day(v-for="day, index in week" @click="changeToday(day, index)" :class="{'not-current-month': !(day.month === activeDate.month), 'today': (day.day === activeDate.day && day.month === activeDate.month && day.year === activeDate.year)}")
                            .weekday {{text.days[index]}}
                            .date {{day.day}}
                            .trainings.pc
                                template(v-for="training, index in sample.trainings")
                                    .training-container(v-if="trainingIsThisDay(training, day)" @click="addTraining(index)" :class="{active: training.active}")
                                        .title {{training.title}}
                                        .time {{training.time}}
                .arrow.next.no-pc(@click="nextWeek" v-if="activeDate.day + activeDate.month * 31 + activeDate.year < dates.nextMonth[dates.nextMonth.length - 1][0].day + dates.nextMonth[dates.nextMonth.length - 1][0].month * 31 + dates.nextMonth[dates.nextMonth.length - 1][0].year + 6")
        .main.no-pc
            .trainings
                template(v-for="training, index in sample.trainings")
                    .training-container(v-if="trainingIsToday(training)" @click="addTraining(index)" :class="{active: training.active, grey: training.date.day + training.date.month * 31 + training.date.year < currentDate.day + currentDate.month * 31 + currentDate.year}")
                        .title {{training.title}}
                        .time {{training.time}}
        .reservation
        Popup(v-if="displayPopup" v-bind:trainings="sample.trainings")
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
                daysFull: [
                    'Pirmdiena',
                    'Otrdiena',
                    'Trešdiena',
                    'Ceturtdiena',
                    'Piektdiena',
                    'Sestdiena',
                    'Svētdiena',
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
                            month: 2,
                            day: 15
                        },
                        time: '17:30',
                        title: 'Power Stretch Training',
                        active: false
                    },
                    {
                        date: {
                            year: 2018,
                            month: 2,
                            day: 2
                        },
                        time: '17:30',
                        title: 'Power Stretch Training',
                        active: false
                    },
                    {
                        date: {
                            year: 2018,
                            month: 1,
                            day: 31
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
                thisMonth: [],
                nextMonth: []
            },
            displayPopup: false,
            minimize: false,
            showNext: true,
            showPrev: false
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
        trainingIsThisDay (tr, day) {
            if (!(tr.date.year === day.year)) {
                return false
            }
            if (!(tr.date.month === day.month)) {
                return false
            }
            if (!(tr.date.day === day.day)) {
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
                dayOfTheWeek: today.getDay() < 1 ? 7 : today.getDay(),
                month: today.getMonth() + 1,
                year: today.getFullYear()
            }
            this.currentDate = {
                day: today.getDate(),
                dayOfTheWeek: today.getDay() < 1 ? 7 : today.getDay(),
                month: today.getMonth() + 1,
                year: today.getFullYear()
            }
            //  This month
            let daysOfThisMonth = []
            let firstDayOfThisMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay()
            if (firstDayOfThisMonth === 0) firstDayOfThisMonth = 7
            let daysOfPrevMonth = []
            if (firstDayOfThisMonth > 1) {
                let prevMonth = today.getMonth() < 2 ? today.getMonth() - 1 : 12
                let prevYear = today.getMonth() < 2 ? today.getFullYear() - 1 : today.getFullYear()

                let lastDateOfPrevMonth = new Date(prevYear, prevMonth, 0).getDate()
                for (let i = 0; i < firstDayOfThisMonth - 1; i++) {
                    daysOfPrevMonth.push(lastDateOfPrevMonth - i)
                }
                daysOfPrevMonth.reverse()
            }
            for (let i = 0; i < new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate(); i++) {
                daysOfThisMonth.push(i + 1)
            }
            let daysOfNextMonth = []
            let lengthOfThisMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()
            let thisMonthLastDay = firstDayOfThisMonth + lengthOfThisMonth % 7 - 1
            if (thisMonthLastDay > 7) thisMonthLastDay = 7 - thisMonthLastDay
            for (let i = thisMonthLastDay; i < 7; i++) {
                daysOfNextMonth.push(i - thisMonthLastDay + 1)
            }
            let daysOfThisMonthView = {
                DaysOfPrevMonth: daysOfPrevMonth,
                DaysOfThisMonth: daysOfThisMonth,
                DaysOfNextMonth: daysOfNextMonth,
            }
            //  Next  month
            let daysOfNextMonthPrevMonth = []
            for (let i = 0; i < thisMonthLastDay; i++) {
                daysOfNextMonthPrevMonth.push(lengthOfThisMonth - i)
            }
            daysOfNextMonthPrevMonth.reverse()
            let nextmonth = today.getMonth() + 2
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
            let length = this.thisMonth.DaysOfPrevMonth.length + this.thisMonth.DaysOfThisMonth.length + this.thisMonth.DaysOfNextMonth.length
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
                for (let i = 0; i < weeks.length; i++) {
                    let week = weeks[i]
                    if (week.querySelector('.today') !== null) {
                        week.classList.add('current')
                    } else {
                        week.classList.remove('current')
                    }
                }
                for (let i = 0; i < months.length; i++) {
                    let month = months[i]
                    if (month.querySelector('.current') !== null) {
                        month.classList.add('open')
                    } else {
                        month.classList.remove('open')
                    }
                }
                let openMonths = this.$el.querySelectorAll('.month.open')
                if (openMonths.length > 1) openMonths[0].classList.remove('open')
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
        },
        changePreviousMonth () {
            if (this.activeDate.month < 2) {
                this.activeDate.month = 12
                this.activeDate.year--
            } else {
                this.activeDate.month--
            }
            this.activeDate.dayOfTheWeek = new Date(this.activeDate.year, this.activeDate.month, this.activeDate.day).getDay()
            this.addCurrentWeek()
            this.showPrev = false
            this.showNext = true
        },
        changeNextMonth () {
            if (this.activeDate.month === 12) {
                this.activeDate.month = 1
                this.activeDate.year++
            } else {
                this.activeDate.month++
            }
            let days = new Date(this.activeDate.year, this.activeDate.month, 0).getDate()
            if (days < this.activeDate.day) this.activeDate.day = days
            this.activeDate.dayOfTheWeek = new Date(this.activeDate.year, this.activeDate.month, this.activeDate.day).getDay()
            this.addCurrentWeek()
            this.showPrev = true
            this.showNext = false
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
    .pc
        display none
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
                &.grey
                    pointer-events  none
                    .title
                        border      1px solid #b0b0b0
                    .time
                        background  #b0b0b0
                        border      1px solid #b0b0b0
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
    @media screen and (min-width: 1000px)
        z-index 10
        .pc
            display block
        .no-pc
            display none
        .header
            &:after
                display none
            .title 
                display block
                padding 35px 0 2em 218px
                .arrow
                    display inline-block
                    width   1em
                    height  1.5em
                    background-image    url(../assets/arrow-right.svg)
                    background-size     contain
                    background-repeat   no-repeat
                    background-position center
                    vertical-align      middle
                    cursor              pointer
                    &.prev
                        transform       rotate(180deg)
                        margin-right    0.5em
                    &.next
                        margin-left     0.5em
                h1
                    text-align      left
                    display         inline-block
                    vertical-align  middle
                    &:after
                        display none
                    &.pc
                        display         block
                        margin-bottom   0
                        &:after
                            display     block
                            margin-left -0.2em
                            width       1em
                            margin-top  0.25em
                p
                    display         inline-block
                    vertical-align  middle
                    padding         0
                    width           40%
                    text-align      left
                    font-size       0.8em
                    position        relative
                    margin-left     1em
            .big-container
                margin 0 1em 2em
                .month
                    position        relative
                    z-index         100
                    &:before
                        content     ''
                        position    absolute
                        top         2em
                        left        -15px
                        right       -10px
                        bottom      -20px
                        background  #f2f2f2
                        z-index     -1
                    .daysOfWeek
                        display     flex
                        position    relative
                        .day
                            flex            0 1 auto
                            width           14.2%
                            max-width       14.2%
                            border-bottom   1px solid #3cace2
                            border-left     1px solid #3cace2
                            padding         5px 0 20px
                            text-align      center
                            text-transform  uppercase
                            position        relative
                            font-size       0.8em
                            &:first-child
                                &:before 
                                    content     ''
                                    position    absolute
                                    top         0
                                    left        -25px
                                    right       100%
                                    bottom      -1px
                                    border-bottom   1px solid #3cace2
                    .week
                        display flex
                        height  auto
                        &:not(.current)
                            display flex
                        &:last-child
                            .day
                                position    relative
                                &:after
                                    content     ''
                                    position    absolute
                                    top         100%
                                    left        -1px
                                    right       -1px
                                    bottom      -10px
                                    border-left 1px solid #3cace2
                        .day
                            flex            0 1 auto
                            max-width       14.2%
                            width           14.2%
                            float           none
                            text-align      left
                            background      #f2f2f2
                            border-bottom   1px solid #3cace2
                            border-left     1px solid #3cace2
                            border-right    none
                            min-height      70px
                            position        relative
                            padding         5px
                            &:first-child
                                &:before 
                                    content     ''
                                    position    absolute
                                    top         0
                                    left        -20px
                                    right       100%
                                    bottom      -1px
                                    border-bottom   1px solid #3cace2
                            .date
                                opacity 0.21
                            .weekday
                                display none
                            .trainings
                                .training-container
                                    display         flex
                                    justify-content center
                                    align-items     stretch
                                    margin-top      30px
                                    flex-wrap       wrap
                                    cursor          pointer
                                    .title
                                        border          1px solid #169cdd
                                        padding         5px 2px
                                        flex            1 1 auto
                                        margin-right    0
                                    .time
                                        flex            1 1 auto
                                        background      #169cdd
                                        color           #f2f2f2
                                        display         flex
                                        justify-content center
                                        align-items     center
                                        padding         5px
                                    &.grey
                                        pointer-events  none
                                        .title
                                            border      1px solid #b0b0b0
                                        .time
                                            background  #b0b0b0
                                    &.active
                                        .title, .time
                                            border-color    #17c37b
                                        .time
                                            background  #17c37b
                            &.today
                                background  #f2f2f2
                                color       inherit
                            &.not-current-month
                                opacity 1                                
                                background  #f2f2f2
                                .date
                                    opacity 0
                                .trainings
                                    display none
    @media screen and (min-width: 1298px)
        .header
            .title 
                width           100%      
                max-width       1080px
                margin          0 auto 
                padding-left    0
    @media screen and (min-width: 1400px)
        .header
            .big-container
                width           100%
                max-width       960px
                margin          0 auto
</style>