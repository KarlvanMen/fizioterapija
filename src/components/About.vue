<template lang="pug">
    .about
        .section(v-for="section in text")
            .background(:style="backgroundImage(section.image)")
            .text
                h2 {{section.title}}
                p {{section.text}}
</template>

<script>

export default {
    name: 'About',
    data () {
        return {
            text: [
                {
                    title: 'Par fizioterapeitiem',
                    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in.',
                    image: 'https://image.shutterstock.com/z/stock-photo-close-up-of-attractive-young-woman-folding-blue-yoga-or-fitness-mat-after-working-out-at-home-in-488816383.jpg'
                },
                {
                    title: 'Par fizioterapeitiem',
                    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in.',
                    image: 'https://image.shutterstock.com/z/stock-photo-close-up-of-attractive-young-woman-folding-blue-yoga-or-fitness-mat-after-working-out-at-home-in-488816383.jpg'
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
.about
    padding-bottom  25px
    .section
        .background
            height              160px
            background-size     cover
            background-repeat   no-repeat
        .text
            padding 0 1.5em
            h2
                font-family     "Open Sans Semibold"
                text-transform  uppercase
                font-size       1.1em

</style>