<template lang="pug">
    .galleries
        template(v-for="section in text")
            router-link(:to="{ name: 'Galerija', params: { id: section.id } }")
                .section(:style="backgroundImage(section.image)")
                    .title
                        h2 {{section.title}}            
</template>

<script>

export default {
    name: 'Galleries',
    data () {
        return {
            text: [
                {
                    title: 'Stretch it out',
                    image: 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1',
                    id: 1
                },
                {
                    title: 'Fix your neck',
                    image: 'https://dl.dropboxusercontent.com/s/a2tafpswvnexh5l/img-1.png?dl=0',
                    id: 2
                },
                {
                    title: 'Pasākumi',
                    image: 'https://dl.dropboxusercontent.com/s/1t0thbkk78r91kg/img-2.png?dl=0',
                    id: 3
                },
                {
                    title: 'Plank challange',
                    image: 'https://dl.dropboxusercontent.com/s/8sz6i51vxsu912k/img-4.png?dl=0',
                    id: 4
                },
            ]
        }
    },
    methods: {
        backgroundImage (url) {
            return {
                'background-image': 'url(' + url + ')'
            }
        }
    },
}
</script>

<style lang="stylus" scoped>
.galleries
    a
        .section
            height              180px
            background-size     cover
            background-repeat   no-repeat
            .title
                display     flex
                width       100%
                height      100%
                box-sizing  border-box
                position    relative
                h2
                    font-family     "Open Sans Semibold"
                    text-transform  uppercase
                    font-size       1.2em
                    margin          auto
                    z-index         100
                &::after
                    content             ''
                    background-color    white
                    width               80%
                    height              70%
                    position            absolute
                    top                 15%
                    left                10%
                    opacity             0.7
                    z-index             10
</style>