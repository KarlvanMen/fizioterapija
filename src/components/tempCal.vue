<template lang="pug">
  #calendar.calendar
    .header
      .head {{ months[month - 1] }}
      .weeks
        span.week(v-for="week in weeks") {{ week }}
    .days
      .day(v-for="day in days" track-by="$index")
          span.today(v-if="day.isToday") {{ day.day }}
          span.not-this-month(v-if="day.isPreMonth || day.isNextMonth") {{ day.day }}
          span.this-month-day(v-if="day.isThisMonthDay && !day.isToday") {{ day.day }}
</template>

<script>
    const MATRIX_MAX = 7 * 6
    const WEEKS = ['P', 'O', 'T', 'C', 'P', 'S', 'Sv']
    const MONTHS = [
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

    let bMonthRe = /^1?$|3|5|7|8|10|12/

    export default {
        name: 'Kalendars',
        data () {
            return {
                'time': new Date(),
                'weeks': WEEKS,
                'months': MONTHS
            }
        },

        computed: {
            isRunYear () {
                return ((this.year % 4 === 0) && (this.year % 100 !== 0))
            },

            selectYears () {
                return this._getRangeList(2099, 1900)
            },

            selectMonths () {
                return this._getRangeList(12)
            },

            dayData () {
                return [
                    this.year,
                    this.month,
                    this.currentDay
                ].join('-')
            },

            firstDayWeek () {
                return new Date(
                    this.year
                    , this.month - 1
                    , 1
                ).getDay()
            },

            year () {
                return this.time.getFullYear()
            },

            month () {
                return this.time.getMonth() + 1
            },

            days () {
                return this.getDaysList()
            },

            currentDay () {
                return this.time.getDate()
            }
        },

        methods: {
            _getPreMonthDays (month, offset) {
                if (offset === 0) {
                    return []
                } else if (month === 1) {
                    return this.getDays(12).slice(-offset)
                } else {
                    return this.getDays(month - 1).slice(-offset)
                }
            },

            _getNextMonthDays (month, offset) {
                if (month === 12) {
                    return this.getDays(1).slice(0, offset)
                } else {
                    return this.getDays(month + 1).slice(0, offset)
                }
            },

            _getRangeList (range, start) {
                let i = start || 1
                let _list = []

                for (i; i <= range; i++) {
                    _list.push(i)
                }
                return _list
            },
            getDays (month) {
                if (bMonthRe.test(month)) {
                    return this._getRangeList(31)
                } else if (month === 2) {
                    if (this.isRunYear) {
                        return this._getRangeList(29)
                    } else {
                        return this._getRangeList(28)
                    }
                } else {
                    return this._getRangeList(30)
                }
            },
            getDaysList () {
                let _needConcatLength = this.getDays(this.month).length + this.firstDayWeek
                // debugger;
                let _initList = this._getPreMonthDays(this.month, this.firstDayWeek)
                    .map((preMonthday) => {
                        return {
                            'year': this.month === 1 ? this.year - 1 : this.year,
                            'month': this.month === 1 ? 12 : this.month - 1,
                            'day': preMonthday,
                            'isPreMonth': true
                        }
                    })

                if (MATRIX_MAX <= _needConcatLength) {
                    let _thisMonthDaysList = this.getDays(this.month).slice(0, this.getDays(this.month).length - (_needConcatLength - MATRIX_MAX))
                    return _initList.concat(_thisMonthDaysList.map(
                        (day) => {
                            let _dateObj = {
                                'year': this.year,
                                'month': this.month,
                                'isThisMonthDay': true,
                                'day': day
                            }
                            if (day === this.currentDay) {
                                _dateObj.isToday = true
                            }
                            return _dateObj
                        }
                    ))
                } else {
                    return _initList.concat(this.getDays(this.month).map(
                        (day) => {
                            let _dateObj = {
                                'year': this.year,
                                'month': this.month,
                                'isThisMonthDay': true,
                                'day': day
                            }
                            if (day === this.currentDay) {
                                _dateObj.isToday = true
                            }
                            return _dateObj
                        }
                    )).concat(this._getNextMonthDays(this.month, MATRIX_MAX - _needConcatLength).map(
                        (nextMonthDay) => {
                            return {
                                'year': this.month === 12 ? this.year + 1 : this.year,
                                'month': this.month === 12 ? 1 : this.month + 1,
                                'day': nextMonthDay,
                                'isNextMonth': true
                            }
                        }
                    ))
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
.calendar 
    width 350px
    height auto
    overflow hidden
    border-radius 10px
    box-shadow 0 5px 10px 0 rgba(0, 0, 0, 0.2)
    .header 
        width 100%
        padding 10px 0
        background-color #2ecc71
    .head 
        text-align center
        font-size 24px
        padding 10px 0
        color #ffffff
        letter-spacing 1px
        text-shadow 1px 1px 1px rgba(0, 0, 0, .1)
    .weeks 
        display block
        width 100%
        overflow auto
        padding 10px 0
        text-align center
        .week 
            width 14.28571%
            display block
            color #ffffff
            float left
            font-size 16px
            box-sizing border-box
    .days
        width 100%
        height auto
        overflow auto
        background-color #ffffff
        position relative
        .day 
            span
                width 50px
                display block
                float left
                height 50px
                font-size 12px
                text-align center
                line-height 50px
                color #333333
                background-color #fefefe
                font-weight bold
                box-sizing border-box
                border-right 1px solid #f0f0f0
                border-bottom 1px solid #f0f0f0
            .this-month-dayhover
                background-color #e1e1e1
                cursor pointer
                color #ffffff
            .today
                border-bottom 3px solid #2ecc71
                color #2ecc71
            .not-this-month
                background-color #f9f9f9
                color #999999
    .input-group
        background-color #f9f9f9
        box-sizing border-box
</style>