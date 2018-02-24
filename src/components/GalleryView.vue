<template lang="pug">
    .gallery(v-if="text.length")
        .title
            h1  {{textFiltered().title}}
            .close(v-on:click="close()")
        .big-container(v-if="open !== null")
            .container
                .arrow.prev(@click="prevBig()" v-if="current > 0")
                .arrow.next(@click="nextBig()" v-if="current < (textFiltered().images.length - 1)")
                .img-container(v-bind:style = "'background-image: url(' + open.url + ')'" v-if="open.type === 'image'")
                youtube.youtube.no-pc(:video-id="urlToId(open.url)" player-width="100%" player-height="200px" :player-vars="{ controls: 1, modestbranding: 1, showinfo: 0, rel: 0 }" v-if="open.type === 'YouTube'")
                youtube.youtube.pc(:video-id="urlToId(open.url)" player-width="100%" player-height="400px" :player-vars="{ controls: 1, modestbranding: 1, showinfo: 0, rel: 0 }" v-if="open.type === 'YouTube'")
                youtube.youtube.pc-xl(:video-id="urlToId(open.url)" player-width="80%" player-height="500px" :player-vars="{ controls: 1, modestbranding: 1, showinfo: 0, rel: 0 }" v-if="open.type === 'YouTube'")
        .container-all(:style="totheLeft")
            .arrow.prev.no-pc(@click="prev()" v-if="textFiltered().images.length > 4 && mostLeft > 0")
            .arrow.next.no-pc(@click="next()" v-if="textFiltered().images.length > 4 && mostLeft < (textFiltered().images.length - 4)")
            .arrow.prev.pc(@click="prev()" v-if="textFiltered().images.length > 10 && mostLeftPC > 0")
            .arrow.next.pc(@click="next()" v-if="textFiltered().images.length > 10 && mostLeftPC < (textFiltered().images.length - 10)")
            .small-image.no-pc(v-for="image, index in textFiltered().images" v-if="image.display")
                .container(v-if="image.type === 'image'" :style="backgroundImage(image.url)" @click="changeBig(index)")
                .container(v-else-if="image.type === 'YouTube'" :style="backgroundImage(getYouTubeThumb(image.url))" @click="changeBig(index)")
                    img(src='../assets/play.svg' alt="play icon")
            .small-image.pc(v-for="image, index in textFiltered().images" v-if="image.displayPC")
                .container(v-if="image.type === 'image'" :style="backgroundImage(image.url)" @click="changeBig(index)")
                .container(v-else-if="image.type === 'YouTube'" :style="backgroundImage(getYouTubeThumb(image.url))" @click="changeBig(index)")
                    img(src='../assets/play.png' alt="play icon")
</template>

<script>
import { getIdFromURL } from 'vue-youtube-embed'
import { mapGetters } from 'vuex'

export default {
    name: 'Gallery',
    data () {
        return {
            open: null,
            current: 0,
            mostLeft: 0,
            mostLeftPC: 0,
            totheLeft: {},
            text: []
        }
    },
    methods: {
        textFiltered () {
            for (let index = 0; index < this.text.length; index++) {
                if (parseInt(this.text[index].id) - 1 === parseInt(this.$route.params.id)) {
                    return this.text[index]
                }
            }
        },
        backgroundImage (url) {
            return {
                'background-image': 'url(' + url + ')'
            }
        },
        urlToId (url) {
            return getIdFromURL(url)
        },
        getYouTubeThumb (url) {
            if (url === null) {
                return ''
            }
            let results = url.match('[\\?&]v=([^&#]*)')
            let video = (results === null) ? url : results[1]
            return 'http://img.youtube.com/vi/' + video + '/2.jpg'
        },
        changeBig (i) {
            this.current = i
            this.open = this.textFiltered().images[this.current]
        },
        next () {
            this.mostLeft++
            this.mostLeftPC++
            this.textFiltered().images[this.mostLeft + 3].display = true
            this.textFiltered().images[this.mostLeft - 1].display = false
            this.textFiltered().images[this.mostLeftPC + 9].displayPC = true
            this.textFiltered().images[this.mostLeftPC - 1].displayPC = false
        },
        prev () {
            this.mostLeft--
            this.textFiltered().images[this.mostLeft].display = true
            this.textFiltered().images[this.mostLeft + 4].display = false
            this.mostLeftPC--
            this.textFiltered().images[this.mostLeftPC].displayPC = true
            this.textFiltered().images[this.mostLeftPC + 10].displayPC = false
        },
        nextBig () {
            this.mostLeft++
            this.current++
            if (this.mostLeft + 4 > this.textFiltered().images.length) this.mostLeft = this.textFiltered().images.length - 4
            if (this.current + 1 > this.textFiltered().images.length) this.current = this.textFiltered().images.length - 1
            this.textFiltered().images[this.mostLeft + 3].display = true
            this.textFiltered().images[this.mostLeft - 1].display = false
            this.mostLeftPC++
            if (this.mostLeftPC + 10 > this.textFiltered().images.length) this.mostLeftPC = this.textFiltered().images.length - 10
            this.textFiltered().images[this.mostLeftPC + 9].displayPC = true
            this.textFiltered().images[this.mostLeftPC - 1].displayPC = false
            this.changeBig(this.current)
        },
        prevBig () {
            this.mostLeft--
            this.current--
            if (this.mostLeft < 0) this.mostLeft = 0
            if (this.current < 0) this.current = 0
            this.textFiltered().images[this.mostLeft].display = true
            this.textFiltered().images[this.mostLeft + 4].display = false
            this.mostLeftPC--
            if (this.mostLeftPC < 0) this.mostLeftPC = 0
            this.textFiltered().images[this.mostLeftPC].displayPC = true
            this.textFiltered().images[this.mostLeftPC + 10].displayPC = false
            this.changeBig(this.current)
        },
        showFirst () {
            // MOBILE
            if (this.textFiltered().images.length > 4) {
                for (let i = 0; i < 4; i++) {
                    this.textFiltered().images[i].display = true
                }
            } else {
                for (let i = 0; i < this.textFiltered().images.length; i++) {
                    this.textFiltered().images[i].display = true
                }
            }
            // PC
            if (this.textFiltered().images.length > 10) {
                for (let i = 0; i < 10; i++) {
                    this.textFiltered().images[i].displayPC = true
                }
            } else {
                for (let i = 0; i < this.textFiltered().images.length; i++) {
                    this.textFiltered().images[i].displayPC = true
                }
            }
        },
        close () {
            this.$router.push({ path: '/galerijas' })
        }
    },
    mounted () {
        let self = this
        let interval = setInterval(function () {
            if (typeof self.getPhotoData.pageInfo !== 'undefined') {
                let data = self.getPhotoData
                self.text = data.text
                self.changeBig(0)
                self.showFirst()
                clearInterval(interval)
            }
        }, 100)
    },
    computed: {
        ...mapGetters([
            'getPhotoData'
        ])
    },
}
</script>

<style lang="stylus" scoped>
.gallery
    background-color    #2c303d
    color               white
    height              calc(100vh - 40px)
    width               100%
    position            relative
    overflow            hidden
    .pc,
    .pc-xl
        display none
    .title
        text-align      center
        text-transform  uppercase
        max-width       calc(100% - 5em)
        margin          0 auto
        position        relative
        padding-top     0.75em
        h1
            font-size   1.5em
        .close
            position    absolute
            top         2em
            left        auto
            right       -1.5em
            height      1.5em
            width       1.5em
            background-image    url(../assets/x.svg)
            background-size     contain
            background-position center
            cursor              pointer
    .big-container .container,
    .container-all
        .arrow
            position    absolute
            top         0
            height      100%
            width       2.5em
            left        0.25em
            cursor      pointer
            opacity     0.5
            &.next
                left    auto
                right   0em
            &.prev
                transform   rotate(180deg)
                left        0
            &:before
                content             ''
                position            absolute
                top                 50%
                transform           translateY(-50%)
                height              40%
                width               100%
                background-image    url(../assets/arrow-next.svg)
                background-size     contain
                background-repeat   no-repeat
                background-position center center
            &:hover
                background  rgba(22,155,220,0.7)
                opacity     1
    .big-container
        height          74%
        padding-bottom  100px
        box-sizing  border-box
        .container
            position    relative
            height      100%
            .arrow
                &:before
                    height  40px
            .img-container
                height              100%
                background-position center
                background-repeat   no-repeat
                background-size     contain
            .youtube
                display flex
                height  100%
                align-items center
                &.pc,
                &.pc-xl
                    display none
    .container-all
        display         flex
        overflow        hidden
        height          88px
        position        fixed
        bottom          10px
        width           100%
        align-items     center
        box-sizing      border-box
        justify-content space-between
        .small-image
            width       25%
            flex        0 0 auto
            cursor      pointer
            .container
                width               100%
                height              0
                padding-bottom      100%
                background-size     cover
                background-position center
                background-repeat   no-repeat
                img
                    width           33%
                    height          auto
                    padding-top     33%
                    padding-left    33%
    @media screen and (min-width: 1000px)
        margin-top  -1px
        height      calc(100vh - 60px)
        .pc
            display block
        .no-pc
            display none
        .title
            max-width   80%
            .close
                right   0
        .container-all
            .small-image
                width   10%
        .big-container
            margin-top  2em
            .container
                max-width   80%
                margin      0 auto
                .arrow
                    top     0px
                    height  auto
                    bottom  5px
                    &.prev
                        left -2.5em
                    &.next
                        right   -2.5em
                    &:hover 
                        background  none
                .youtube
                    &.no-pc
                        display none
                    &.pc
                        display         flex
                        align-items     center
                        justify-content center
    @media screen and (min-width: 1500px)
        .big-container
            .container
                max-width   1500px
                margin      0 auto
                .youtube
                    &.pc
                        display none
                    &.pc-xl
                        display         flex
                        align-items     center
                        justify-content center
</style>