<template lang="pug">
    .gallery
        .big-container(v-if="open !== null")
            .container(v-if="open.type === 'image'")
                img(v-bind:src = "open.url")
                .description
                    h1 {{open.title}}
                    p {{open.text}}
            .container(v-if="open.type === 'YouTube'")
                youtube(:video-id="urlToId(open.url)" player-width="100%" player-height="100%")
                .description
                    h1 {{open.title}}
                    p {{open.text}}
        .container-all
            .small-image(v-for="image, index in images")
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
                    url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'
                },
                {
                    type: 'YouTube',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://www.youtube.com/watch?v=MeRmMz0_zJc'
                },
                {
                    type: 'image',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'
                },
                {
                    type: 'image',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'
                },
                {
                    type: 'image',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'
                },
                {
                    type: 'image',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'
                },
                {
                    type: 'image',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'
                },
                {
                    type: 'image',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'
                },
                {
                    type: 'image',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'
                },
                {
                    type: 'image',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'
                },
                {
                    type: 'image',
                    title: 'title',
                    text: 'Lorem Ipsum',
                    url: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'
                },
            ],
            open: null,
            current: 0,
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
        }
    },
    mounted () {
        this.changeBig(0)
        console.log(this.$route.params.id)
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
    .big-container
        height      60%
        margin-top 80px
        box-sizing  border-box
        .container
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