<template lang="pug">
    .gallery
        .big-container(v-if="open !== null")
            .container(v-if="open.type === 'image'")
                .arrow.prev(@click="prevBig()" v-if="current > 0")
                .arrow.next(@click="nextBig()" v-if="current < images.length")
                img(v-bind:src = "open.url")
            .container(v-if="open.type === 'YouTube'")
                .arrow.prev(@click="prevBig()" v-if="current > 0")
                .arrow.next(@click="nextBig()" v-if="current < images.length")
                youtube(:video-id="urlToId(open.url)" player-width="100%" player-height="100%" :player-vars="{ autoplay: 0, controls: 1, modestbranding: 1, showinfo: 0, rel: 0 }")
        .container-all(:style="totheLeft")
            .arrow.prev(@click="prev()" v-if="images.length > 4 && mostLeft > 0")
            .arrow.next(@click="next()" v-if="images.length > 4 && mostLeft + 4 < images.length")
            .small-image(v-for="image, index in images" v-if="image.display")
                .container(v-if="image.type === 'image'" :style="backgroundImage(image.url)" @click="changeBig(index)")
                .container(v-else-if="image.type === 'YouTube'" :style="backgroundImage(getYouTubeThumb(image.url))" @click="changeBig(index)")
</template>

<script>
import { getIdFromURL } from 'vue-youtube-embed'

export default {
    name: 'Gallery',
    data () {
        return {
            images: [
                {
                    type: 'image',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                    display: false,
                },
                {
                    type: 'YouTube',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://www.youtube.com/watch?v=MeRmMz0_zJc',
                    display: false,
                },
                {
                    type: 'image',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                    display: false,
                },
                {
                    type: 'YouTube',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://www.youtube.com/watch?v=JcTCq8L6j_s',
                    display: false,
                },
                {
                    type: 'image',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                    display: false,
                },
                {
                    type: 'image',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                    display: false,
                },
                {
                    type: 'image',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                    display: false,
                },
                {
                    type: 'image',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                    display: false,
                },
                {
                    type: 'image',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                    display: false,
                },
                {
                    type: 'image',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                    display: false,
                },
                {
                    type: 'image',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                    display: false,
                },
                {
                    type: 'image',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                    display: false,
                },
                {
                    type: 'image',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1',
                    display: false,
                },
                {
                    type: 'image',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                    display: false,
                },
            ],
            open: null,
            current: 0,
            mostLeft: 0,
            totheLeft: {}
        }
    },
    methods: {
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
            this.open = this.images[this.current]
        },
        next () {
            this.mostLeft++
            this.images[this.mostLeft + 3].display = true
            this.images[this.mostLeft - 1].display = false
        },
        prev () {
            this.mostLeft--
            this.images[this.mostLeft].display = true
            this.images[this.mostLeft + 4].display = false
        },
        nextBig () {
            this.mostLeft++
            this.current++
            console.log(this.mostLeft)
            console.log(this.current)
            if (this.mostLeft + 4 > this.images.length) this.mostLeft = this.images.length - 4
            if (this.current + 1 > this.images.length) this.current = this.images.length - 1
            this.images[this.mostLeft + 3].display = true
            this.images[this.mostLeft - 1].display = false
            this.changeBig(this.current)
        },
        prevBig () {
            this.mostLeft--
            this.current--
            if (this.mostLeft < 0) this.mostLeft = 0
            if (this.current < 0) this.current = 0
            this.images[this.mostLeft].display = true
            this.images[this.mostLeft + 4].display = false
            this.changeBig(this.current)
        },
        showFirst () {
            if (this.images.length > 4) {
                for (let i = 0; i < 4; i++) {
                    this.images[i].display = true
                }
            } else {
                for (let i = 0; i < this.images.length; i++) {
                    this.images[i].display = true
                }
            }
        }
    },
    mounted () {
        this.changeBig(0)
        this.showFirst()
    }
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
                background-position right center
            &:hover
                background  linear-gradient(to left, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 63%,rgba(0,0,0,0.34) 82%,rgba(0,0,0,0) 100%)
                opacity     1
    .big-container
        height      60%
        margin-top  80px
        box-sizing  border-box
        .container
            position    relative
            .arrow
                &:before
                    height  40px
            img
                width   100%
                height  auto
            .description
                padding 0 10px
                h1
                    font-size       1.1em
                    font-family     "Open Sans Semibold"
                    text-transform  uppercase
                    font-size       1.2em
    .container-all
        display         flex
        height          40%
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
            .container
                width               100%
                height              0
                padding-bottom      100%
                background-size     cover
                background-position center
                background-repeat   no-repeat
</style>