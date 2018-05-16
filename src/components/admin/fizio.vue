<template lang="pug">
    .fizio
        h3 Fizioterapija Jaunā
        .edit(@click="edit = true" v-if="!edit") Labot
        .editable(v-if="edit" :class="{inprocess: inprocess}")
            .cancel.stick(@click = "edit = false") Aizvērt
            form(v-on:submit.prevent="save")
                .quote
                textarea#fizioQuote(v-on:change="adjustTextArea" v-on:keyup="adjustTextArea" v-bind:value="info.pageInfo[0].quote")
                .bttns
                    input.save(type="submit" value="Saglabāt")
                    .cancel(@click = "$event.target.parentElement.parentElement.querySelector('#fizioQuote').value = info.pageInfo[0].quote") Atcelt
            .edit.new(@click="newPart = true" v-if="!newPart") Pievienot jaunu sadaļu
            .newObj.fizioObj.open(v-if="newPart")
                form(v-on:submit.prevent="createNewFizio($event)")
                    .container
                        .title-container
                            .background(v-bind:style="{'background-image': 'url(https://image.flaticon.com/icons/svg/149/149094.svg)'}")
                            textarea.title(v-on:change="adjustTextArea" v-on:keyup="adjustTextArea") Virsraksts
                            input#titleImg-New(type="file" accept="image/*" ref="profileImg" @change="replaceBackground($event)")
                            label.plus(for="titleImg-New") Mainīt bildi <small>(<10 Mb)</small>
                    .text
                        textarea.h4(v-on:change="adjustTextArea" v-on:keyup="adjustTextArea") Apakšvirsraksts
                        input.twoColumns(type="text" value="Sadaļas apraksts")
                        p.desc(contenteditable="true" @paste.prevent.stop="onPaste" v-on:keyup="fizio2columnChange($event)")   Sadaļas apraksts
                        input.pricingInp(type="text" value="Izcenojuma apraksts")
                        p.pricing(contenteditable="true" @paste.prevent.stop="onPaste" v-on:keyup="fizioPricingChange($event)")   Izcenojuma apraksts
                    button(type="submit") Saglabāt
                    .cancel(@click="newPart = false") Atcelt
            .fizioObj(v-for="section, index in info.text")
                form(v-on:submit.prevent="saveFizioSection($event, index, 0)")
                    .container
                        .title-container
                            .background(v-bind:style="{'background-image': 'url('+section.image+')'}")
                            h4(@click="openSection($event, index, 0)") {{section.title}}
                            textarea.title(v-on:change="adjustTextArea" v-on:keyup="adjustTextArea" v-bind:value="section.title")
                            input(v-bind:id="'titleImg-' + index" type="file" accept="image/*" ref="profileImg" @change="replaceBackground($event,index)")
                            label.plus(v-bind:for="'titleImg-' + index") Mainīt bildi <small>(<10 Mb)</small>
                    .text
                        textarea.h4(v-on:change="adjustTextArea" v-on:keyup="adjustTextArea" v-bind:value="section.textTitle")
                        input.twoColumns(type="text" v-model="section.textText")
                        .buttons
                            p.bold(@click="doCommand('bold', $event)" @mousedown="$event.preventDefault()")
                                b B
                            p.italic(@click="doCommand('italic', $event)" @mousedown="$event.preventDefault()")
                                i I
                            p.underline(@click="doCommand('underline', $event)" @mousedown="$event.preventDefault()")
                                u U
                        p.desc(contenteditable="true" @paste="onPaste" :id="'fizio-desc-' + index" v-on:keyup="fizio2columnChange($event)")
                        input.pricingInp(type="text" v-model="section.textPrice")
                        p.pricing(contenteditable="true" @paste.prevent.stop="onPaste" v-on:keyup="fizioPricingChange($event)")
                    button(type="submit") Saglabāt
                    .cancel(@click="closeFizio($event, index, 0)") Atcelt
                    .delete(@click="deleteFizio($event, index, 0)") Dzēst
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'About',
    data () {
        return {
            edit: false,
            inprocess: false,
            newPart: false,
        }
    },
    methods: {
        adjustTextArea (el) {
            el.target.style.height = el.target.scrollHeight + 'px'
            el.target.parentElement.classList.add('edited')
        },
    },
    computed: {
        ...mapGetters([
            'getAboutData'
        ])
    },
    mounted () {
    },
    props: ['info']
}
</script>

<style lang="stylus" scoped>
    input,
    button,
    textarea
        color   #4d4d4d
    .edit,
    .save,
    .cancel,
    .delete,
    button
        cursor          pointer
        text-transform  uppercase
        padding         0.5em 1em
        display         inline-block
        color           white
        background      #169bdc
        font-weight     bold
        border          none
        font-size       1em
        font-family     inherit
        outline         none
    .new
        margin          1em 0
        width           100%
        max-width       360px
        box-sizing      border-box
    .save
        background      #68b80f
    .cancel
        background      #e04242
        margin-left     1em
        &.stick
            float       right
            position    sticky
            top         1em
            left        100%
    .delete
        background  grey
        float       right
        margin-left 1em
        &:hover
            background  #e04242
    .quote
        &:before
            content '“'
            display block
            width   100%
            font-weight         bold
            font-style          italic
            color               #169cdd
            font-size           2em
            background-repeat   no-repeat
            background-size     contain
            background-position left top
            margin-bottom       -0.5em
</style>