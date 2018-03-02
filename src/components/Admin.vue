<template lang="pug">
    .admin
        .login(v-if="!getLogin")
            form(v-on:submit.prevent="logIn")
                input(type="text" autocomplete="username")
                input(type="password" autocomplete="current-password")
                button.save Ielogoties
        .pages(v-if="info !== null && getLogin !== false")
            .page.sakumlapa
                h3 Sākumlapa
                .edit(@click="edit.home = true" v-if="!edit.home") Labot
                .editable(v-if="edit.home" :class="{inprocess: inprocess.home}")
                    .cancel.stick(@click = "edit.home = false") Aizvērt
                    form(v-on:submit.prevent="saveHome")
                        .quote
                        textarea#homeQuote(v-on:change="adjustTextArea" v-on:keyup="adjustTextArea" v-bind:value="info.home.pageInfo[0].quote")
                        .bttns
                            input.save(type="submit" value="Saglabāt")
                            .cancel(@click = "edit.home = false") Atcelt
            .page.fizio
                h3 Fizioterapija
                .edit(@click="edit.fizio = true" v-if="!edit.fizio") Labot
                .editable(v-if="edit.fizio" :class="{inprocess: inprocess.fizio}")
                    .cancel.stick(@click = "edit.fizio = false") Aizvērt
                    form(v-on:submit.prevent="saveFizioterapija")
                        .quote
                        textarea#fizioQuote(v-on:change="adjustTextArea" v-on:keyup="adjustTextArea" v-bind:value="info.fizioterapija.pageInfo[0].quote")
                        .bttns
                            input.save(type="submit" value="Saglabāt")
                            .cancel(@click = "$event.target.parentElement.parentElement.querySelector('#fizioQuote').value = info.fizioterapija.pageInfo[0].quote") Atcelt
                    .edit.new(@click="fizioNew = true" v-if="!fizioNew") Pievienot jaunu sadaļu
                    .newObj.fizioObj.open(v-if="fizioNew")
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
                            .cancel(@click="fizioNew = false") Atcelt
                    .fizioObj(v-for="section, index in info.fizioterapija.text")
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
            .page.vingro
                h3 Vingrošana
                .edit(@click="edit.vingr = true" v-if="!edit.vingr") Labot
                .editable(v-if="edit.vingr" :class="{inprocess: inprocess.vingr}")
                    .cancel.stick(@click = "edit.vingr = false") Aizvērt
                    .edit.new(@click="vingrNew = true" v-if="!vingrNew") Pievienot jaunu sadaļu
                    .newObj.fizioObj.open(v-if="vingrNew")
                        form(v-on:submit.prevent="createNewVingr($event)")
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
                            .cancel(@click="vingrNew = false") Atcelt
                    .fizioObj(v-for="section, index in info.vingrosana.text")
                        form(v-on:submit.prevent="saveFizioSection($event, index, 1)")
                            .container
                                .title-container
                                    .background(v-bind:style="{'background-image': 'url('+section.image+')'}")
                                    h4(@click="openSection($event, index, 1)") {{section.title}}
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
                                p.desc(contenteditable="true" @paste.prevent.stop="onPaste" v-on:keyup="fizio2columnChange($event)")
                                input.pricingInp(type="text" v-model="section.textPrice")
                                p.pricing(contenteditable="true" @paste.prevent.stop="onPaste" v-on:keyup="fizioPricingChange($event)")
                            button(type="submit") Saglabāt
                            .cancel(@click="closeFizio($event, index, 1)") Atcelt
                            .delete(@click="deleteVingr($event, index, 1)") Dzēst
            .page.kalendars
                h3 Kalendārs
                .edit(@click="edit.kalen = true" v-if="!edit.kalen") Labot
                .editable(v-if="edit.kalen" :class="{inprocess: inprocess.kalen}")
                    .cancel.stick(@click = "edit.kalen = false") Aizvērt
                    .edit.new(@click="kalNew = true" v-if="!kalNew") Pievienot jaunu nodarbību
                    .newObj.training-container.open(v-if="kalNew")
                        form(v-on:submit.prevent="createKal($event)" autocomplete="nope")
                            textarea(v-on:change="adjustTextArea" v-on:keyup="adjustTextArea" placeholder="Nosaukums")
                            .time
                                p.date(@click="triggerKal($event)") {{kalDate.getDate() + '/' + (kalDate.getMonth() + 1) + '/' + kalDate.getFullYear()}}
                                .container
                                    input.hour(autocomplete="nope" type="number" min="0" max="23" value="00")
                                    span :
                                    input.minutes(autocomplete="nope" type="number" min="0" max="59" value="00")
                                datepicker.vdp-datepicker(:format="'d/MM/yyyy'" language="lv" monday-first=true input-class="vdp-date" v-on:selected="dateChange(0, $event)" v-model="kalDate")
                            span.first Vietas: 
                            input.maxCount(autocomplete="nope" type="number" min="0" value="999")
                            label.hideInp Pilns
                                span.checkbox
                                input(type="checkbox" @change="$event.target.parentElement.classList.toggle('checked')")
                            .location
                                select
                                    option(v-for="location, index in info.kontakti.text" :selected="index == 0 ? 'selected' : ''" :value="location.street") {{location.street}}
                            .empty
                            .cancel(@click="kalNew = false") Atcelt
                            input.save(type="submit" value="Saglabāt")
                    .filters
                        select.year(v-model="year")
                            option(v-for="year, index in years" v-bind:value="year") {{year}}
                        select.month(v-model="month")
                            option(v-for="mo, index in months" v-bind:value="index + 1") {{mo}}
                    .training-container(v-for="training, index in info.kalendars.trainings" :class="'kal-cont-' + index" v-if="training.year == year && training.month == month")
                        .show
                            p.title {{training.title}}
                            p.time(@click="$event.target.parentElement.parentElement.classList.add('open')") {{training.day}}.{{training.month}}.{{training.year}} {{training.time}}
                        form(v-on:submit.prevent="saveKal($event, training.id, index)" autocomplete="nope")
                            textarea(v-on:change="adjustTextArea" v-on:keyup="adjustTextArea" :value="training.title")
                            .time
                                p.date(@click="triggerKal($event)") {{dateToString(trDates[index])}}
                                .container
                                    input.hour(autocomplete="nope" type="number" min="0" max="23" v-bind:value="training.time.split(':')[0]")
                                    span :
                                    input.minutes(autocomplete="nope" type="number" min="0" max="59" v-bind:value="training.time.split(':')[1]")
                                datepicker.vdp-datepicker(:format="'d/MM/yyyy'" language="lv" monday-first=true input-class="vdp-date" v-on:selected="dateChange(index, $event)" v-model="trDates[index]")
                            span.first Vietas: 
                            input.maxCount(autocomplete="nope" type="number" min="0" v-bind:value="training.max_count")
                            label.hideInp(:class="{'checked': training.full == '1'}") Pilns
                                span.checkbox
                                input(type="checkbox" v-bind:checked="training.full == '1'" @change="$event.target.parentElement.classList.toggle('checked')")
                            .location
                                select(v-model="training.location")
                                    option(v-for="location, index in info.kontakti.text" :selected="index == 0 ? 'selected' : ''" :value="location.street") {{location.street}}
                            .empty
                            .cancel(@click = "cancelKal($event, index)") Atcelt
                            input.save(type="submit" value="Saglabāt")
                            .delete(@click="deleteKal($event, index)") Dzēst
            .page.kontakti
                h3 Kontakti
                .edit(@click="openKontakti()" v-if="!edit.kont") Labot
                .editable(v-if="edit.kont" :class="{inprocess: inprocess.kont}")
                    .cancel.stick(@click = "edit.kont = false") Aizvērt
                    form(v-on:submit.prevent="saveKontakti($event)")
                        label Uzņēmuma nosaukums
                            input#kontSiaTitle(type="text" v-bind:value="info.kontakti.pageInfo[0].siaTitle")
                        label E-pasts
                            input#kontSiaEmail(type="text" v-bind:value="info.kontakti.pageInfo[0].siaEmail")
                        label Telefona numurs
                            input#kontSiaPhone(type="text" v-bind:value="info.kontakti.pageInfo[0].siaPhone")
                        fieldset.address(v-for="add, index in info.kontakti.text")
                            label Vietas nosaukums (tiek uzrādīts nodarbību grafikā un noklikšķinot uz Google Maps ikonas)
                                input(type="text" v-bind:value="add.street")
                            label Pilna adrese (tiek izmantota, lai atrastu vietu Google Maps, un tiek parādīta sadaļā Kontakti)
                                input.contEdit(type="text" @change="adressChange($event, index)" v-bind:value="add.streetFull")
                            label.lat Lat
                                input(type="text" v-bind:value="add.lat")
                            label.long Long
                                input(type="text" v-bind:value="add.lng")
                            label Papildus informācija
                                input(type="text" v-bind:value="add.additional")
                            Gmap.Gmap(:markerCoordinates="tempAddr[index]" :mapName="'gmap-' + index")
                            .delete(@click="deleteAddress($event, index)") Dzēst
                        .bttns
                            input.save(type="submit" value="Saglabāt")
                            .cancel(@click = "edit.kont = false") Atcelt
                    .edit.new(@click="kontNew = true" v-if="!kontNew") Pievienot jaunu adresi
                    form(v-on:submit.prevent="newAddress($event)" v-if="kontNew")
                        fieldset.address.new
                            label Vietas nosaukums
                                input(type="text")
                            label Pilna adrese
                                input(type="text" @change="adressChange($event, 9999999)")
                            label.lat Latitude
                                input(type="text")
                            label.long Longitude
                                input(type="text")
                            label Papildus informācija
                                input(type="text")
                            Gmap.Gmap(:markerCoordinates="tempNewAddt" :mapName="'gmap-new'")
                            .bttns
                                input.save(type="submit" value="Pievienot adresi")
                                .cancel(@click="kontNew = false") Atcelt
            .page.about
                h3 Par mums
                .edit(@click="edit.about = true" v-if="!edit.about") Labot
                .editable(v-if="edit.about" :class="{inprocess: inprocess.about}")
                    .cancel.stick(@click = "edit.about = false") Aizvērt
                    form(v-on:submit.prevent="saveAbout")
                        .quote
                        textarea#aboutQuote(v-bind:value="info.parmums.pageInfo[0].quote" v-on:change="adjustTextArea" v-on:keyup="adjustTextArea, quotes.about = true")
                        .bttns(v-if="quotes.about")
                            input.save(type="submit" value="Saglabāt")
                            .cancel(@click = "$event.target.parentElement.parentElement.querySelector('#aboutQuote').value = info.parmums.pageInfo[0].quote") Atcelt
                    .edit.new(@click="aboutNew = true" v-if="!aboutNew") Pievienot jaunu sadaļu
                    .fizioObj.about-container.open(v-if='aboutNew')
                        form(v-on:submit.prevent="newAboutSection($event)")
                            .container
                                .title-container
                                    .background(v-bind:style="{'background-image': 'url(https://image.flaticon.com/icons/svg/149/149094.svg)'}")
                                    textarea.title(v-on:change="adjustTextArea" v-on:keyup="adjustTextArea") Virsraksts
                                    input#newAbouttitleImg(type="file" accept="image/*" ref="profileImg" @change="replaceBackground($event)")
                                    label.plus(for="newAbouttitleImg") Mainīt bildi <small>(<10 Mb)</small>
                            .text
                                .buttons
                                    p.bold(@click="doCommand('bold', $event)" @mousedown="$event.preventDefault()")
                                        b B
                                    p.italic(@click="doCommand('italic', $event)" @mousedown="$event.preventDefault()")
                                        i I
                                    p.underline(@click="doCommand('underline', $event)" @mousedown="$event.preventDefault()")
                                        u U
                                input.pricingInp
                                p.pricing(contenteditable="true" @paste.prevent.stop="onPaste" v-on:keyup="fizioPricingChange($event)")
                            button(type="submit") Saglabāt
                            .cancel(@click="aboutNew = false") Atcelt
                    .fizioObj.about-container(v-for="section, index in info.parmums.text")
                        form(v-on:submit.prevent="saveAboutSection($event, index)")
                            .container
                                .title-container
                                    .background(v-bind:style="{'background-image': 'url('+section.image+')'}")
                                    h4(@click="openSection($event, index, 2)") {{section.title}}
                                    textarea.title(v-on:change="adjustTextArea" v-on:keyup="adjustTextArea" v-bind:value="section.title")
                                    input(v-bind:id="'titleImg-' + index" type="file" accept="image/*" ref="profileImg" @change="replaceBackground($event,index)")
                                    label.plus(v-bind:for="'titleImg-' + index") Mainīt bildi <small>(<10 Mb)</small>
                            .text
                                .buttons
                                    p.bold(@click="doCommand('bold', $event)" @mousedown="$event.preventDefault()")
                                        b B
                                    p.italic(@click="doCommand('italic', $event)" @mousedown="$event.preventDefault()")
                                        i I
                                    p.underline(@click="doCommand('underline', $event)" @mousedown="$event.preventDefault()")
                                        u U
                                input.pricingInp(v-bind:value="section.text")
                                p.pricing(contenteditable="true" @paste.prevent.stop="onPaste" v-on:keyup="fizioPricingChange($event)")
                            button(type="submit") Saglabāt
                            .cancel(@click="closeFizio($event, index, 2)") Atcelt
                            .delete(@click="deleteAbout($event, index)") Dzēst
            .page.galleries
                h3 Video un attēli
                .edit(@click="edit.video = true" v-if="!edit.video") Labot
                .editable(v-if="edit.video" :class="{inprocess: inprocess.video}")
                    .cancel.stick(@click = "edit.video = false") Aizvērt
                    .edit.new(@click="galNew = true" v-if="!galNew") Pievienot jaunu sadaļu
                    .fizioObj.gallery-container.open(v-if='galNew')
                        form(v-on:submit.prevent="newGalerija($event)")
                            .container
                                .title-container
                                    .background(v-bind:style="{'background-image': 'url(https://image.flaticon.com/icons/svg/149/149094.svg)'}") 
                                    textarea.title(v-on:change="adjustTextArea" v-on:keyup="adjustTextArea") Nosaukums
                                    input#newGalTitleImg(type="file" accept="image/*" ref="profileImg" @change="replaceBackground($event)")
                                    label.plus(for="newGalTitleImg") Mainīt bildi <small>(<10 Mb)</small>
                            .text
                                .small-image-container
                                    .small-image(v-for="img, kindex in tempGal[tempGal.length - 1]")
                                        .alt-delete(@click="deltemp($event, tempGal.length - 1, kindex)") Dzēst
                                        .container(v-bind:style="{'background-image': 'url('+img.url+')'}" v-if="img.type === 'image'")
                                        .container(v-else-if="img.type === 'YouTube'" :style="{'background-image': 'url('+getYouTubeThumb(img.url)+')', 'background-color': '#000'}")
                                            img(src='../assets/play.png' alt="play icon")
                                    .small-image.add-new
                                        .alt-delete.hidden Dzēst
                                        .container
                                            img.plus(@click="open($event, 'open', 'container')" src="https://image.flaticon.com/icons/svg/149/149145.svg")
                                            .img
                                                input(v-bind:id="'smallImg-' + tempGal.length - 1" type="file" accept="image/*" ref="profileImg" multiple @change="addSmallImage($event,tempGal.length - 1)")
                                                label.plus(v-bind:for="'smallImg-' + tempGal.length - 1" :style="{'background-image': 'url(https://image.flaticon.com/icons/svg/149/149092.svg)'}")
                                                p <small>(<10 Mb)</small>
                                            .youtube
                                                img(@click="open($event, 'youtube', 'container')" src="https://image.flaticon.com/icons/svg/33/33671.svg")
                                            .youtube-link
                                                .close(@click="close($event, 'youtube', 'container')")
                                                    img(src="../assets/x.svg")
                                                .cont
                                                    form(v-on:submit.prevent="addYoutube($event, tempGal.length - 1)")
                                                        label   Saite
                                                            input(type="text" placeholder="Piem., https://www.youtube.com/watch?v=nIiLqNQOgPA")
                                                        p
                                                            small Nederīga saite
                                                        button.save(type='submit') Pievienot
                            input.save(type="submit" value="Saglabāt")
                            .cancel(@click="galNew = false") Atcelt
                    .fizioObj.gallery-container(v-for="gal, index in info.galerijas.text")
                        form(v-on:submit.prevent="saveGalerija($event, index)")
                            .container
                                .title-container
                                    .background(v-bind:style="{'background-image': 'url('+gal.image+')'}") 
                                    h4(@click="openSection($event, index, 3)") {{gal.title}}
                                    textarea.title(v-on:change="adjustTextArea" v-on:keyup="adjustTextArea" v-bind:value="gal.title")
                                    input(v-bind:id="'gtitleImg-' + index" type="file" accept="image/*" ref="profileImg" @change="replaceBackground($event,index)")
                                    label.plus(v-bind:for="'gtitleImg-' + index") Mainīt bildi <small>(<10 Mb)</small>
                            .text
                                .small-image-container
                                    .small-image(v-for="img, jindex in gal.images")
                                        .alt-delete(@click="delReal($event)") Dzēst
                                        .container(v-bind:style="{'background-image': 'url('+img.url+')'}" v-if="img.type === 'image'")
                                        .container(v-else-if="img.type === 'YouTube'" :style="{'background-image': 'url('+getYouTubeThumb(img.url)+')', 'background-color': '#000'}")
                                            img(src='../assets/play.png' alt="play icon")
                                    .small-image(v-for="img, kindex in tempGal[index]")
                                        .alt-delete(@click="deltemp($event, index, kindex)") Dzēst
                                        .container(v-bind:style="{'background-image': 'url('+img.url+')'}" v-if="img.type === 'image'")
                                        .container(v-else-if="img.type === 'YouTube'" :style="{'background-image': 'url('+getYouTubeThumb(img.url)+')', 'background-color': '#000'}")
                                            img(src='../assets/play.png' alt="play icon")
                                    .small-image.add-new
                                        .alt-delete.hidden &nbsp;
                                        .container
                                            img.plus(@click="open($event, 'open', 'container')" src="https://image.flaticon.com/icons/svg/149/149145.svg")
                                            .img
                                                input(v-bind:id="'smallImg-' + index" type="file" accept="image/*" ref="profileImg" @change="addSmallImage($event,index)")
                                                label.plus(v-bind:for="'smallImg-' + index" :style="{'background-image': 'url(https://image.flaticon.com/icons/svg/149/149092.svg)'}")
                                                p <small>(<10 Mb)</small>
                                            .youtube
                                                img(@click="open($event, 'youtube', 'container')" src="https://image.flaticon.com/icons/svg/33/33671.svg")
                                            .youtube-link
                                                .close(@click="close($event, 'youtube', 'container')")
                                                    img(src="../assets/x.svg")
                                                .cont
                                                    form(v-on:submit.prevent="addYoutube($event, index)")
                                                        label   Saite
                                                            input(type="text" placeholder="Piem., https://www.youtube.com/watch?v=nIiLqNQOgPA")
                                                        p
                                                            small Nederīga saite
                                                        button.save(type='submit') Pievienot
                            input.save(type="submit" value="Saglabāt")
                            .cancel(@click="closeCancel($event, 'open', 'fizioObj', index)") Atcelt
                            .delete(@click="deleteGal($event, index)") Dzēst
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { mapActions, mapGetters } from 'vuex'
import docCookies from '../store/cookies.js'
import Gmap from './Gmap.vue'
import axios from 'axios'

export default {
    name: 'Admin',
    data () {
        return {
            info: null,
            login: false,
            edit: {
                home: false,
                fizio: false,
                vingr: false,
                kalen: false,
                about: false,
                video: false,
                kont: false,
            },
            quotes: {
                home: false,
                fizio: false,
                vingr: false,
                kalen: false,
                about: false,
                video: false,
                kont: false,
            },
            inprocess: {
                home: false,
                fizio: false,
                vingr: false,
                kalen: false,
                about: false,
                video: false,
                kont: false,
                gal: false,
            },
            fizioterapija: {
                text: null,
            },
            fizioNew: false,
            vingrNew: false,
            kalNew: false,
            kontNew: false,
            aboutNew: false,
            galNew: false,
            kalDate: null,
            year: 2018,
            years: [2018],
            month: 2,
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
            ],
            trDates: [],
            tempGal: [],
            commands: {
                bold: {
                    'cmd': 'bold',
                    'icon': 'bold',
                    'desc': 'Toggles bold on/off for the selection or at the insertion point. (Internet Explorer uses the STRONG tag instead of B.)'
                },
                italic: {
                    'cmd': 'italic',
                    'icon': 'italic',
                    'desc': 'Toggles italics on/off for the selection or at the insertion point. (Internet Explorer uses the EM tag instead of I.)'
                },
                underline: {
                    'cmd': 'underline',
                    'icon': 'underline',
                    'desc': 'Toggles underline on/off for the selection or at the insertion point.'
                },
            },
            tempAddr: [],
            tempNewAddt: [
                {
                    lat: 0,
                    lng: 0
                }
            ],
        }
    },
    methods: {
        ...mapActions(
            [
                'ADJUST_HOME',
                'ADJUST_FIZIOTERAPIJA',
                'ADJUST_VINGROSANA',
                'ADJUST_KONTAKTI',
                'ADJUST_PARMUMS',
                'ADJUST_GALERIJAS',
                'CREATE_FIZIOTERAPIJA',
                'UPLOAD_IMAGE',
                'DELETE_FIZIOTERAPIJA',
                'ADD_FIZIOTERAPIJA',
                'CREATE_VINGROSANA',
                'ADD_VINGROSANA',
                'DELETE_VINGROSANA',
                'EDIT_SECTION',
                'CREATE_DATA',
                'DELETE_DATA',
                'UPDATE_DATA',
                'LOGIN',
            ]
        ),
        onPaste (e) {
            let clipboardData, pastedData
            clipboardData = e.clipboardData || window.clipboardData
            pastedData = clipboardData.getData('text/plain')
            document.execCommand('insertText', false, pastedData)
            let target = e.target
            while (target.tagName.toLowerCase() !== 'p') {
                target = target.parentElement
            }
            target.contentEditable = false
            setTimeout(() => {
                target.contentEditable = true
                target.focus()
            }, 100)
            return false
        },
        adjustTextArea (el) {
            el.target.style.height = el.target.scrollHeight + 'px'
            el.target.parentElement.classList.add('edited')
        },
        openSection (el, i, j) {
            el.target.parentElement.parentElement.parentElement.parentElement.classList.toggle('open')
            switch (j) {
            case 0:
                el.target.parentElement.querySelector('.title').value = this.info.fizioterapija.text[i].title
                el.target.parentElement.parentElement.parentElement.querySelector('.text').querySelector('.h4').value = this.info.fizioterapija.text[i].textTitle
                el.target.parentElement.parentElement.parentElement.querySelector('.text').querySelector('.desc').innerHTML = this.info.fizioterapija.text[i].textText
                el.target.parentElement.parentElement.parentElement.querySelector('.text').querySelector('.twoColumns').value = this.info.fizioterapija.text[i].textText
                el.target.parentElement.parentElement.parentElement.querySelector('.text').querySelector('.pricing').innerHTML = this.info.fizioterapija.text[i].textPrice
                el.target.parentElement.parentElement.parentElement.querySelector('.text').querySelector('.pricingInp').value = this.info.fizioterapija.text[i].textPrice
                break
            case 1:
                el.target.parentElement.querySelector('.title').value = this.info.vingrosana.text[i].title
                el.target.parentElement.parentElement.parentElement.querySelector('.text').querySelector('.h4').value = this.info.vingrosana.text[i].textTitle
                el.target.parentElement.parentElement.parentElement.querySelector('.text').querySelector('.desc').innerHTML = this.info.vingrosana.text[i].textText
                el.target.parentElement.parentElement.parentElement.querySelector('.text').querySelector('.twoColumns').value = this.info.vingrosana.text[i].textText
                el.target.parentElement.parentElement.parentElement.querySelector('.text').querySelector('.pricing').innerHTML = this.info.vingrosana.text[i].textPrice
                el.target.parentElement.parentElement.parentElement.querySelector('.text').querySelector('.pricingInp').value = this.info.vingrosana.text[i].textPrice
                break
            case 2:
                el.target.parentElement.querySelector('.title').value = this.info.parmums.text[i].title
                el.target.parentElement.parentElement.parentElement.querySelector('.text').querySelector('.pricing').innerHTML = this.info.parmums.text[i].text
                break
            case 3:
                el.target.parentElement.querySelector('.title').value = this.info.galerijas.text[i].title
                break
            }
        },
        replaceBackground (el, i) {
            let reader = new FileReader()
            reader.onload = function (e) {
                el.target.parentElement.querySelector('.background').style = 'background-image: url(' + e.target.result + ')'
            }
            reader.readAsDataURL(el.target.files[0])
        },
        closeFizio (el, i, j) {
            el.target.parentElement.querySelector('.title-container').querySelector('#titleImg-' + i).value = ''
            switch (j) {
            case 0:
                el.target.parentElement.querySelector('.title-container').querySelector('.background').style = 'background-image: url(' + this.info.fizioterapija.text[i].image + ')'
                break
            case 1:
                el.target.parentElement.querySelector('.title-container').querySelector('.background').style = 'background-image: url(' + this.info.vingrosana.text[i].image + ')'
                break
            case 2:
                el.target.parentElement.querySelector('.title-container').querySelector('.background').style = 'background-image: url(' + this.info.parmums.text[i].image + ')'
                break
            }
            el.target.parentElement.parentElement.classList.toggle('open')
        },
        fizio2columnChange (el) {
            let target = el.target
            while (!target.classList.contains('text')) {
                target = target.parentElement
            }
            if (target.querySelectorAll('.desc').length) {
                target.querySelector('.twoColumns').value = target.querySelector('.desc').innerHTML
            }
        },
        fizioPricingChange (el) {
            let target = el.target
            while (!target.classList.contains('text')) {
                target = target.parentElement
            }
            target.querySelector('.pricingInp').value = target.querySelector('.pricing').innerHTML
        },
        kontaktiAdressChange (el) {
            let target = el.target
            while (!target.classList.contains('address')) {
                target = target.parentElement
            }
            target.querySelector('.contEdit').value = el.target.innerHTML
        },
        deleteFizio (el, i, j) {
            this.closeFizio(el, i, j)
            let data = {
                id: this.info.fizioterapija.text[i].id,
                idD: i
            }
            this.DELETE_FIZIOTERAPIJA(data)
        },
        deleteVingr (el, i, j) {
            this.closeFizio(el, i, j)
            let data = {
                id: this.info.vingrosana.text[i].id,
                idD: i
            }
            this.DELETE_VINGROSANA(data)
        },
        saveHome (el) {
            let data = {
                value: el.target[0].value
            }
            this.inprocess.home = true
            let self = this
            self.ADJUST_HOME(data).then((res) => {
                if (res.response) {
                    self.info.home.pageInfo[0].quote = data.value
                    self.edit.home = false
                    self.inprocess.home = false
                }
            })
        },
        saveFizioterapija (el) {
            let data = {
                quote: el.target[0].value,
            }
            this.inprocess.fizio = true
            let self = this
            self.ADJUST_FIZIOTERAPIJA(data).then((res) => {
                if (res.response) {
                    self.info.fizioterapija.pageInfo[0].quote = data.quote
                    self.inprocess.fizio = false
                }
            })
        },
        saveFizioSection (el, i, j) {
            let imgUrl = this.uploadInpImg(el.target[1])
            let self = this
            imgUrl.then((url) => {
                let data = {
                    idD: i,
                    id: j === 0 ? this.info.fizioterapija.text[i].id : this.info.vingrosana.text[i].id,
                    title: el.target[0].value,
                    textTitle: el.target[2].value,
                    textText: el.target[3].value,
                    textPrice: el.target[4].value,
                    image: url.error === '' ? url.url : j === 0 ? self.info.fizioterapija.text[i].image : self.info.vingrosana.text[i].image,
                    nav_url: j === 0 ? 'updateFiz' : 'updateVin'
                }
                self.EDIT_SECTION(data).then((res) => {
                    el.target.parentElement.classList.remove('open')
                    self.closeFizio(el, i, j)
                    self.UPDATE_DATA(data)
                    self.galNew = false
                    self.inprocess.video = false
                })
            })
        },
        createNewFizVingr (el, i) {
            let errorMsg = ''
            let self = this
            let imgUrl = new Promise((resolve, reject) => {
                if (el.target[1].value === '') {
                    resolve('https://image.flaticon.com/icons/svg/149/149094.svg')
                } else {
                    let fd = new FormData()
                    fd.append('image', el.target[1].files[0])
                    self.UPLOAD_IMAGE(fd).then((res) => {
                        if (res.response === '1') {
                            errorMsg = 'no image provided'
                        } else if (res.response === '2') {
                            errorMsg = 'image is too big'
                        } else if (res.response === '3') {
                            errorMsg = 'not allowed format'
                        } else if (res.response === '4') {
                            errorMsg = 'problems with uploading'
                        } else if (res.response) {
                            resolve(res.response)
                        } else {
                            reject(console.log(res))
                        }
                    })
                }
            })
            imgUrl.then((url) => {
                if (errorMsg === '') {
                    let data = {
                        title: el.target[0].value,
                        image: url,
                        textTitle: el.target[2].value,
                        textText: el.target[3].value,
                        textPrice: el.target[4].value,
                    }
                    let self = this
                    self.inprocess.fizio = true
                    switch (i) {
                    case 0:
                        self.CREATE_FIZIOTERAPIJA(data).then((res) => {
                            if (res.response) {
                                data.id = res.response
                                self.inprocess.fizio = false
                                self.fizioNew = false
                                self.ADD_FIZIOTERAPIJA(data)
                            }
                        })
                        break
                    case 1:
                        self.CREATE_VINGROSANA(data).then((res) => {
                            if (res.response) {
                                data.id = res.response
                                self.inprocess.fizio = false
                                self.fizioNew = false
                                self.ADD_VINGROSANA(data)
                            }
                        })
                        break
                    }
                } else {
                    alert(errorMsg)
                }
            })
        },
        createNewFizio (el) {
            this.createNewFizVingr(el, 0)
        },
        createNewVingr (el) {
            this.createNewFizVingr(el, 1)
        },
        saveVingrosana (el) {
            let data = {
                pageLinkTitle: el.target[0].value,
            }
            this.inprocess.vingr = true
            let self = this
            self.ADJUST_VINGROSANA(data).then((res) => {
                if (res.response) {
                    self.info.vingrosana.pageInfo[0].pageLinkTitle = data.pageLinkTitle
                    self.edit.vingr = false
                    self.inprocess.vingr = false
                }
            })
        },
        saveKontakti (e) {
            let data = {
                siaTitle: e.target[0].value,
                siaPhone: e.target[2].value,
                siaEmail: e.target[1].value,
                nav_url: 'updateKont',
            }
            let addresses = e.target.querySelectorAll('fieldset').length
            let aData = []
            for (let i = 0; i < addresses; i++) {
                aData.push({
                    lat: e.target[6 + 6 * i].value,
                    lng: e.target[7 + 6 * i].value,
                    street: e.target[4 + 6 * i].value,
                    streetFull: e.target[5 + 6 * i].value,
                    additional: e.target[8 + 6 * i].value,
                    nav_url: 'updateAdd',
                    id: this.info.kontakti.text[i].id
                })
            }
            this.inprocess.kont = true
            let self = this

            self.EDIT_SECTION(data).then((res) => {
                if (res.response) {
                    for (var key in data) {
                        if (self.info.kontakti.pageInfo[0].hasOwnProperty(key)) {
                            self.info.kontakti.pageInfo[0][key] = data[key]
                        }
                    }
                    let p = []
                    for (let i = 0; i < addresses; i++) {
                        p.push(self.EDIT_SECTION(aData[i]).then((res) => {
                            if (res.response !== null) {
                                for (var key in aData[i]) {
                                    if (self.info.kontakti.text[i].hasOwnProperty(key)) {
                                        self.info.kontakti.text[i][key] = aData[i][key]
                                    }
                                }
                            }
                        }))
                    }
                    Promise.all(p).then(function (values) {
                        self.inprocess.kont = false
                    })
                }
            })
        },
        saveAbout (el) {
            let data = {
                value: el.target[0].value,
            }
            this.inprocess.about = true
            let self = this
            self.ADJUST_PARMUMS(data).then((res) => {
                if (res.response) {
                    self.info.parmums.pageInfo[0].quote = data.value
                    self.inprocess.about = false
                }
            })
        },
        saveGalerijas (el) {
            let data = {
            }
            this.inprocess.video = true
            let self = this
            self.ADJUST_GALERIJAS(data).then((res) => {
                if (res.response) {
                    self.edit.video = false
                    self.inprocess.video = false
                }
            })
        },
        prepareDates () {
            let today = new Date()
            this.year = today.getFullYear()
            this.month = today.getMonth() + 1
            this.kalDate = today
            let sample = []
            for (let i = 0; i < this.info.kalendars.trainings.length; i++) {
                sample.push(this.info.kalendars.trainings[i].year)
                this.trDates.push(this.dateValue(this.info.kalendars.trainings[i].year, this.info.kalendars.trainings[i].month, this.info.kalendars.trainings[i].day))
            }
            let seen = {}
            let out = []
            let len = sample.length
            let j = 0
            for (let i = 0; i < len; i++) {
                let item = sample[i]
                if (seen[item] !== 1) {
                    seen[item] = 1
                    out[j++] = item
                }
            }
            this.years = out

            for (let i = 0; i < this.info.galerijas.text.length + 1; i++) {
                this.tempGal.push([])
            }
        },
        dateValue (year, month, day) {
            let sMonth = month < 10 ? '0' + month : month
            return year + '-' + sMonth + '-' + day
        },
        cancelKal (e, i) {
            e.target.parentElement.parentElement.classList.remove('open')
            e.target.parentElement.querySelector('textarea').value = this.info.kalendars.trainings[i].title
            e.target.parentElement.querySelector('.date').value = this.dateValue(this.info.kalendars.trainings[i].year, this.info.kalendars.trainings[i].month, this.info.kalendars.trainings[i].day)
            e.target.parentElement.querySelector('.hour').value = this.info.kalendars.trainings[i].time.split(':')[0]
            e.target.parentElement.querySelector('.minutes').value = this.info.kalendars.trainings[i].time.split(':')[1]
        },
        saveKal (e, i, j) {
            let data = {
                title: e.target[0].value,
                year: e.target.querySelector('input.vdp-date').value.split('/')[2],
                month: e.target.querySelector('input.vdp-date').value.split('/')[1],
                day: e.target.querySelector('input.vdp-date').value.split('/')[0],
                time: e.target[1].value + ':' + e.target[2].value,
                max_count: e.target[4].value,
                full: e.target[5].checked === true ? '1' : '0',
                location: e.target[6].value,
                nav_url: 'saveKal',
                id: i,
            }
            this.inprocess.kalen = true
            let self = this
            self.EDIT_SECTION(data).then((res) => {
                if (res.response) {
                    for (var key in data) {
                        if (self.info.kalendars.trainings[j].hasOwnProperty(key)) {
                            self.info.kalendars.trainings[j][key] = data[key]
                        }
                    }
                    e.target.parentElement.classList.remove('open')
                    self.inprocess.kalen = false
                }
            })
        },
        dateToString (val) {
            let date = new Date(val)
            let sMonth = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
            return date.getDate() + '/' + sMonth + '/' + date.getFullYear()
        },
        triggerKal (e) {
            e.target.parentElement.querySelector('.vdp-date').click()
        },
        getData () {
            let self = this
            let interval = setInterval(function () {
                if (typeof self.getAllData.fizioterapija.text !== 'undefined') {
                    let data = self.getAllData
                    // self.pageInfo = data.pageInfo[0]
                    self.info = data
                    self.prepareDates()
                    clearInterval(interval)
                }
            }, 100)
        },
        dateChange (i, val) {
            let tempTA = this.$el.querySelector('.kal-cont-' + i).querySelector('textarea').value
            let tempH = this.$el.querySelector('.kal-cont-' + i).querySelector('.hour').value
            let tempM = this.$el.querySelector('.kal-cont-' + i).querySelector('.minutes').value
            let tempMC = this.$el.querySelector('.kal-cont-' + i).querySelector('.maxCount').value
            let tempF = this.$el.querySelector('.kal-cont-' + i).querySelector('.hideInp').querySelector('input').checked

            let self = this
            this.$nextTick(function () {
                self.$el.querySelector('.kal-cont-' + i).querySelector('textarea').value = tempTA
                self.$el.querySelector('.kal-cont-' + i).querySelector('.hour').value = tempH
                self.$el.querySelector('.kal-cont-' + i).querySelector('.minutes').value = tempM
                self.$el.querySelector('.kal-cont-' + i).querySelector('.maxCount').value = tempMC
                self.$el.querySelector('.kal-cont-' + i).querySelector('.hideInp').querySelector('input').checked = tempF
            })
        },
        createKal (e) {
            let data = {
                title: e.target[0].value,
                year: e.target.querySelector('input.vdp-date').value.split('/')[2],
                month: e.target.querySelector('input.vdp-date').value.split('/')[1],
                day: e.target.querySelector('input.vdp-date').value.split('/')[0],
                time: e.target[1].value + ':' + e.target[2].value,
                max_count: e.target[4].value,
                full: e.target[5].checked === true ? '1' : '0',
                location: e.target[6].value,
                nav_url: 'createKal',
            }
            this.inprocess.kalen = true
            let self = this
            self.EDIT_SECTION(data).then((res) => {
                if (res.response) {
                    data['id'] = res.response
                    self.CREATE_DATA(data)
                    self.kalNew = false
                    self.inprocess.kalen = false
                }
            })
        },
        deleteKal (e, i) {
            this.cancelKal(e, i)
            let data = {
                id: this.info.kalendars.trainings[i].id,
                idD: i,
                nav_url: 'delKal'
            }
            this.DELETE_DATA(data)
            e.target.parentElement.parentElement.style.display = 'none'
        },
        newAddress (e) {
            let data = {
                lat: e.target[3].value,
                lng: e.target[4].value,
                street: e.target[1].value,
                streetFull: e.target[2].value,
                additional: e.target[5].value,
                nav_url: 'createAdd',
            }
            this.inprocess.kont = true
            let self = this
            self.EDIT_SECTION(data).then((res) => {
                if (res.response) {
                    data.id = res.response

                    self.tempAddr.push([{
                        lat: data.lat,
                        lng: data.lng,
                        street: data.street
                    }])
                    self.CREATE_DATA(data)
                    self.kontNew = false
                    self.inprocess.kont = false
                }
            })
        },
        adressChange (e, i) {
            let data = new Promise((resolve, reject) => {
                axios({
                    method: 'post',
                    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + e.target.value + '&key=AIzaSyA4ADLbwhDEbOpNpixZrpUi4D_edka4R4A',
                }).then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    console.log('rejected')
                    reject(err)
                })
            })
            let self = this
            data.then((res) => {
                if (res.status === 'OK' && i < 99999) {
                    self.tempAddr[i][0].lat = res.results[0].geometry.location.lat
                    self.tempAddr[i][0].lng = res.results[0].geometry.location.lng
                    self.tempAddr[i][0].street = self.info.kontakti.text[i].street
                    self.info.kontakti.text[i].lat = self.tempAddr[i][0].lat
                    self.info.kontakti.text[i].lng = self.tempAddr[i][0].lng
                    self.info.kontakti.text[i].streetFull = e.target.value
                } else if (res.status === 'OK') {
                    self.tempNewAddt = [
                        {
                            lat: res.results[0].geometry.location.lat,
                            lng: res.results[0].geometry.location.lng
                        }
                    ]
                    e.target.parentElement.parentElement.querySelector('.lat').querySelector('input').value = res.results[0].geometry.location.lat
                    e.target.parentElement.parentElement.querySelector('.long').querySelector('input').value = res.results[0].geometry.location.lng
                }
            })
        },
        deleteAddress (e, i) {
            let data = {
                id: this.info.kontakti.text[i].id,
                idD: i,
                nav_url: 'delAdd'
            }
            this.DELETE_DATA(data)
        },
        saveAboutSection (e, i) {
            let errorMsg = ''
            let self = this
            let imgUrl = new Promise((resolve, reject) => {
                if (e.target[1].value === '') {
                    resolve('')
                } else {
                    let fd = new FormData()
                    fd.append('image', e.target[1].files[0])
                    self.UPLOAD_IMAGE(fd).then((res) => {
                        if (res.response === '1') {
                            errorMsg = 'no image provided'
                        } else if (res.response === '2') {
                            errorMsg = 'image is too big'
                        } else if (res.response === '3') {
                            errorMsg = 'not allowed format'
                        } else if (res.response === '4') {
                            errorMsg = 'problems with uploading'
                        } else if (res.response) {
                            resolve(res.response)
                        } else {
                            console.log(res)
                            resolve('https://image.flaticon.com/icons/svg/149/149094.svg')
                        }
                    })
                }
            })
            imgUrl.then((url) => {
                if (errorMsg === '') {
                    let data = {
                        title: e.target[0].value,
                        text: e.target[2].value,
                        id: self.info.parmums.text[i].id,
                        nav_url: 'updateAbout'
                    }
                    if (url !== '') data['image'] = url
                    self.inprocess.about = true
                    self.EDIT_SECTION(data).then((res) => {
                        for (var key in data) {
                            if (self.info.parmums.text[i].hasOwnProperty(key)) {
                                self.info.parmums.text[i][key] = data[key]
                            }
                        }
                        e.target.parentElement.classList.remove('open')
                        self.inprocess.about = false
                    })
                } else {
                    alert(errorMsg)
                }
            })
        },
        deleteAbout (e, i) {
            let data = {
                id: this.info.parmums.text[i].id,
                idD: i,
                nav_url: 'delAb'
            }
            this.DELETE_DATA(data)
        },
        newAboutSection (e) {
            let errorMsg = ''
            let self = this
            let imgUrl = new Promise((resolve, reject) => {
                if (e.target[1].value === '') {
                    resolve('https://image.flaticon.com/icons/svg/149/149094.svg')
                } else {
                    let fd = new FormData()
                    fd.append('image', e.target[1].files[0])
                    self.UPLOAD_IMAGE(fd).then((res) => {
                        if (res.response === '1') {
                            errorMsg = 'no image provided'
                        } else if (res.response === '2') {
                            errorMsg = 'image is too big'
                        } else if (res.response === '3') {
                            errorMsg = 'not allowed format'
                        } else if (res.response === '4') {
                            errorMsg = 'problems with uploading'
                        } else if (res.response) {
                            resolve(res.response)
                        } else {
                            console.log(res)
                            resolve('https://image.flaticon.com/icons/svg/149/149094.svg')
                        }
                    })
                }
            })
            imgUrl.then((url) => {
                if (errorMsg === '') {
                    let data = {
                        title: e.target[0].value,
                        text: e.target[2].value,
                        image: url,
                        nav_url: 'newAbout'
                    }
                    self.inprocess.about = true
                    self.EDIT_SECTION(data).then((res) => {
                        if (res.response) {
                            data.id = res.response
                            self.CREATE_DATA(data)
                            self.aboutNew = false
                            self.inprocess.about = false
                        }
                    })
                } else {
                    alert(errorMsg)
                }
            })
        },
        getYouTubeThumb (url) {
            if (url === null) {
                return ''
            }
            let results = url.match('[\\?&]v=([^&#]*)')
            let video = (results === null) ? url : results[1]
            return 'http://img.youtube.com/vi/' + video + '/2.jpg'
        },
        open (e, cl, p) {
            let target = e.target
            while (!target.classList.contains(p)) {
                target = target.parentElement
            }
            target.classList.add(cl)
        },
        close (e, cl, p) {
            let target = e.target
            while (!target.classList.contains(p)) {
                target = target.parentElement
            }
            target.classList.remove(cl)
        },
        closeCancel (e, cl, p, i) {
            let target = e.target.parentElement.querySelectorAll('.hidden')
            for (let i = 0; i < target.length; i++) {
                target[i].classList.remove('hidden')
            }
            this.tempGal[i].splice(0, 9999999)
            e.target.parentElement.querySelector('.title-container').querySelector('.title').value = this.info.galerijas.text[i].title
            this.close(e, cl, p)
        },
        addSmallImage (e, i) {
            let input = e.target
            if (input.files && input.files[0]) {
                let self = this
                for (let j = 0; j < input.files.length; j++) {
                    let reader = new FileReader()
                    reader.onload = function (el) {
                        self.tempGal[i].push({type: 'image', url: el.target.result, file: input.files[j]})
                    }
                    reader.readAsDataURL(input.files[j])
                }
            }
            this.close(e, 'open', 'container')
        },
        addYoutube (e, i) {
            let data = {
                url: e.target[0].value,
                type: 'YouTube'
            }
            if (data.url !== '' && data.url.includes('youtube.com')) {
                this.tempGal[i].push(data)
                this.close(e, 'youtube', 'container')
                this.close(e, 'open', 'container')
            } else {
                this.open(e, 'youtube-error', 'container')
            }
        },
        deltemp (e, i, k) {
            this.tempGal[i].splice(k, 1)
        },
        delReal (e) {
            e.target.parentElement.classList.add('hidden')
        },
        newGalerija (e) {
            let self = this
            let imgUrl = self.uploadInpImg(e.target[1])
            let gal = this.$el.querySelectorAll('.gallery-container')
            for (let i = 0; i < gal.length; i++) {
                if (gal[i].classList.contains('open')) gal[i].classList.remove('open')
            }
            imgUrl.then((url) => {
                if (url.error === '') {
                    let data = {
                        title: e.target[0].value,
                        image: url.url,
                        nav_url: 'newGal',
                        images: []
                    }
                    self.inprocess.video = true
                    self.EDIT_SECTION(data).then((res) => {
                        if (res.response) {
                            data.id = res.response
                            let p = []
                            for (let i = 0; i < self.tempGal[this.tempGal.length - 1].length; i++) {
                                if (self.tempGal[this.tempGal.length - 1][i].type === 'image') p.push(self.uploadFileImg(self.tempGal[this.tempGal.length - 1][i].file))
                            }
                            Promise.all(p).then((res) => {
                                let dataI = {
                                    corr_id: data.id,
                                    img: [],
                                    type: [],
                                    nav_url: 'galImg'
                                }
                                let j = 0
                                for (let i = 0; i < self.tempGal[this.tempGal.length - 1].length; i++) {
                                    if (self.tempGal[this.tempGal.length - 1][i].type === 'image') {
                                        if (res[j].error === '') dataI.img.push(res[j].url)
                                        j++
                                    } else {
                                        dataI.img.push(self.tempGal[this.tempGal.length - 1][i].url)
                                    }
                                    dataI.type.push(self.tempGal[this.tempGal.length - 1][i].type)
                                }
                                this.tempGal.push([])
                                self.EDIT_SECTION(dataI).then((res) => {
                                    if (res.response !== '') {
                                        for (let i = 0; i < dataI.img.length; i++) {
                                            data.images.push({
                                                corr_id: dataI.corr_id,
                                                type: dataI.type[i],
                                                url: dataI.img[i],
                                                id: res.response[i]
                                            })
                                        }
                                        self.CREATE_DATA(data)
                                        self.galNew = false
                                        self.inprocess.video = false
                                    }
                                })
                            })
                        }
                    })
                } else {
                    alert(url.error)
                }
            })
        },
        uploadInpImg (input) {
            let self = this
            return new Promise((resolve, reject) => {
                let errorMsg = ''
                if (input.value === '') {
                    resolve({url: 'https://image.flaticon.com/icons/svg/149/149094.svg', error: 'empty'})
                } else {
                    let fd = new FormData()
                    fd.append('image', input.files[0])
                    self.UPLOAD_IMAGE(fd).then((res) => {
                        if (res.response === '1') {
                            errorMsg = 'Fails nav bilde'
                        } else if (res.response === '2') {
                            errorMsg = 'Faila izmērs ir pārāk liels'
                        } else if (res.response === '3') {
                            errorMsg = 'Bilde nav atbilstoša formāta'
                        } else if (res.response === '4') {
                            errorMsg = 'Notika negaidīta problēma augšuplādējot'
                        } else if (res.response) {
                            resolve({url: res.response, error: errorMsg})
                        } else {
                            console.log(res)
                        }
                        resolve({url: 'https://image.flaticon.com/icons/svg/149/149094.svg', error: errorMsg})
                    })
                }
            })
        },
        uploadFileImg (file) {
            let self = this
            return new Promise((resolve, reject) => {
                let errorMsg = ''
                let fd = new FormData()
                fd.append('image', file)
                self.UPLOAD_IMAGE(fd).then((res) => {
                    if (res.response === '1') {
                        errorMsg = 'no image provided'
                    } else if (res.response === '2') {
                        errorMsg = 'image is too big'
                    } else if (res.response === '3') {
                        errorMsg = 'not allowed format'
                    } else if (res.response === '4') {
                        errorMsg = 'problems with uploading'
                    } else if (res.response) {
                        resolve({url: res.response, error: errorMsg})
                    } else {
                        console.log(res)
                    }
                    resolve({url: 'https://image.flaticon.com/icons/svg/149/149094.svg', error: errorMsg})
                })
            })
        },
        deleteGal (e, i) {
            let data = {
                id: this.info.galerijas.text[i].id,
                idD: i,
                nav_url: 'delGal'
            }
            let gal = this.$el.querySelectorAll('.gallery-container')
            for (let i = 0; i < gal.length; i++) {
                if (gal[i].classList.contains('open')) gal[i].classList.remove('open')
            }
            this.DELETE_DATA(data)
        },
        saveGalerija (e, i) {
            let smallImg = e.target.querySelectorAll('.small-image')
            let p = []
            this.inprocess.video = true
            for (let j = 0; j < smallImg.length; j++) {
                if (smallImg[j].classList.contains('hidden')) {
                    let data = {
                        id: this.info.galerijas.text[i].images[j].id,
                        idD: j,
                        idB: i,
                        nav_url: 'delSmallGal',
                    }
                    p.push(this.EDIT_SECTION(data))
                }
            }
            let self = this
            Promise.all(p).then((val) => {
                let imgUrl = self.uploadInpImg(e.target[1])
                imgUrl.then((url) => {
                    let data = {
                        title: e.target[0].value,
                        id: self.info.galerijas.text[i].id,
                        idB: i,
                        nav_url: 'editvideo',
                        images: [],
                        image: url.error === '' ? url.url : self.info.galerijas.text[i].image
                    }
                    self.EDIT_SECTION(data).then((res) => {
                        let dataI = {
                            corr_id: data.id,
                            img: [],
                            type: [],
                            nav_url: 'galImg'
                        }
                        let p = []
                        for (let k = 0; k < self.tempGal[i].length; k++) {
                            if (self.tempGal[i][k].type === 'image') {
                                p.push(self.uploadFileImg(self.tempGal[i][k].file))
                            } else {
                                dataI.img.push(self.tempGal[i][k].url)
                            }
                            dataI.type.push(self.tempGal[i][k].type)
                        }
                        Promise.all(p).then((val) => {
                            let j = 0
                            for (let k = 0; k < self.tempGal[i].length; k++) {
                                if (self.tempGal[i][k].type === 'image') {
                                    if (val[j].error === '') dataI.img.push(val[j].url)
                                    j++
                                }
                            }
                            self.tempGal[i].splice(0, 9999999999)
                            self.EDIT_SECTION(dataI).then((res) => {
                                if (res.response !== '') {
                                    for (let j = 0; j < self.info.galerijas.text[data.idB].images.length; j++) {
                                        data.images.push(self.info.galerijas.text[data.idB].images[j])
                                    }
                                    for (let j = 0; j < dataI.img.length; j++) {
                                        data.images.push({
                                            corr_id: dataI.corr_id,
                                            type: dataI.type[i],
                                            url: dataI.img[i],
                                            id: res.response[i]
                                        })
                                    }
                                    self.UPDATE_DATA(data)
                                    self.galNew = false
                                    self.inprocess.video = false
                                }
                            })
                        })
                    })
                })
            })
        },
        logIn (e) {
            let data = {
                login: e.target[0].value,
                password: e.target[1].value,
                check: false
            }
            this.LOGIN(data)
        },
        doCommand (cmdKey, e) {
            let cmd = this.commands[cmdKey]
            let val = (typeof cmd.val !== 'undefined') ? prompt('Value for ' + cmd.cmd + '?', cmd.val) : ''
            document.execCommand(cmd.cmd, false, (val || ''))
            this.fizio2columnChange(e)
            this.fizioPricingChange(e)
        },
        openKontakti () {
            for (let i = 0; i < this.info.kontakti.text.length; i++) {
                this.tempAddr.push([{
                    lat: this.info.kontakti.text[i].lat,
                    lng: this.info.kontakti.text[i].lng,
                    street: this.info.kontakti.text[i].street,
                }])
            }
            this.edit.kont = true
        }
    },
    computed: {
        ...mapGetters([
            'getAllData',
            'getLogin'
        ])
    },
    mounted () {
        this.getData()
    },
    components: {
        Gmap,
        Datepicker
    },
    created () {
        if (docCookies.getItem('login') !== null) {
            let data = {
                check: true
            }
            this.LOGIN(data)
        }
    },
}
</script>

<style lang="stylus" scoped>


.admin
    padding 1px 1em
    .login
        form
            input
               width    100%
               display  block
               max-width    320px
               margin       1em 0
               font-size    1em 
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
    .editable
        border      1px solid #525252
        padding     1em
        position    relative
        input:not(.save),
        textarea
            display block
            width   100%
            font-size   1em
            padding     0.5em 0.25em
            box-sizing  border-box
            margin-bottom 0.5em    
        textarea
            max-width       246px
            overflow        hidden
            min-height      100px
            font-family     inherit
            border-color    #525252
        .fizioObj
            box-sizing      border-box
            &:not(.about-container)
                .title-container         
                    &:hover
                        .background
                            background-color        #42a4d4
                            background-blend-mode   hard-light
                &.open
                    .title-container         
                        .background
                            background-color        #42a4d4
                            background-blend-mode   hard-light
            .container
                max-width       360px
                width           100%
                .title-container
                    height          0
                    padding-bottom  56.25%
                    position        relative           
                    .background
                        position            absolute
                        top                 0
                        left                0
                        right               0
                        bottom              0
                        background-position center
                        background-repeat   no-repeat
                        background-size     cover
                    &>h4,
                    textarea
                        position            absolute
                        top                 2em
                        left                1em
                        right               1em
                        bottom              2em
                        background-color    rgba(255,255,255,0.8)
                        display             flex
                        align-items         center
                        justify-content     center
                        text-transform      uppercase
                        text-align          center
                        font-size           1.2em
                        margin              0
                        padding             1em
                        font-weight         bold
                        box-sizing          border-box
                        border              none
                    &>h4
                        cursor              pointer
                    textarea
                        max-width           none
                        width               calc(100% - 2em)
                        font-family         inherit
                        display             none
                    input
                        display none
                    label.plus
                        position        absolute
                        top             auto
                        bottom          0
                        left            100%
                        width           120px
                        cursor          pointer
                        text-transform  uppercase
                        padding         0.5em 1em
                        color           #fff
                        background      #169bdc
                        font-weight     bold
                        margin-left     1em
                        display         none
            .text
                max-height  0
                overflow    hidden
                opacity     0
                transition  all .3s
                padding     0.5em 2em 1em
                .h4
                    max-width   360px
                    font-weight bold
                    font-family inherit
                .desc,
                .pricing
                    display         inline-block
                    box-sizing      border-box
                    vertical-align  top
                .desc
                    width           66%
                    width           calc(66% - 1em)
                    columns         2
                    column-width    220px
                    column-gap      3em
                    margin-right    1em
                .pricing
                    width   33%
            .cancel,
            .delete,
            button
                display none
            &.open
                margin-bottom   1em
                .container
                    .title-container
                        textarea
                            display flex
                        &>h4
                            display none
                        label
                            display block
                .text
                    max-height  1000px
                    opacity     1
                    p
                        border  1px solid #525252
                    input
                        display none
                    .buttons
                        display flex
                        width   100%
                        justify-content center
                        border-bottom   1px solid #525252
                        margin-bottom   -0.3em
                        p
                            border  none
                            margin  1em 0.2em 0.2em
                            padding 0 0.5em
                            z-index 100
                            cursor  pointer
                            width   0.7em
                            text-align center
                            border      1px solid #525252
                            &:hover
                                background  #ccc
                .cancel,
                .delete,
                button
                    display initial
        .bttns
            margin-top  1em
            display none
            .save
                width   auto
                display inline-block
                border  none
                padding 0.5em 1em
        form.edited
            .bttns
                display block
        .training-container
            border          1px solid #b0b0b0
            max-width       320px
            &:not(:first-child)
                margin-top   1em
            &.open
                border-color    #169cdd
                margin-bottom   7em
                .show
                    display none
                form
                    display block
            p
                padding 1em
                margin  0
                &.date
                    cursor  pointer
            .time
                color       #fff
                background  #b0b0b0
                margin      0
                cursor      pointer
            form
                display none
                .time
                    padding     0 1em
                    background  #169cdd
                    cursor      default
                .container 
                    display inline-block
                textarea
                    max-width       none
                    min-height      0
                    height          auto
                    border          none
                    padding         1em
                    margin-bottom   0
                .save,
                .cancel
                    margin-top  1em
                    float   right
                input:not(.save),
                p.date
                    width       auto
                    border      none
                    font-size   1em
                    font-family inherit
                    display     inline-block
                    background  none
                    color       white
                    padding     0.5em 0.25em
                    &[type='number'],
                    &::-webkit-outer-spin-button,
                    &::-webkit-inner-spin-button
                        -moz-appearance     textfield
                        -webkit-appearance  none
                        appearance          none
                        margin              0
                        text-align          center
                    &.hour
                        text-align  right
                    &.hour,
                    &.minutes
                        width   2em
                    &.maxCount
                        color       inherit
                        width       4em
                        text-align  left
                .hideInp
                    position    relative
                    padding-left    1em
                    cursor          pointer
                    user-select     none
                    input
                        display none
                    .checkbox
                        position            absolute
                        background-color    #ccc
                        left                100%
                        margin-left         0.5em
                        top                 50%
                        transform           translateY(-50%)
                        width               1em
                        height              1em
                    &:hover
                        .checkbox
                            background-color    #b0b0b0
                    &.checked
                        .checkbox
                            background-color    #169cdd
                            &:after
                                content     ""
                                position    absolute
                                top         50%
                                left        50%
                                width       0.25em
                                height      0.5em
                                border      solid white
                                border-width    0 0.125em 0.125em 0
                                transform       translate(-50%, -50%) rotate(45deg)
                .vdp-datepicker
                    color   #4d4d4d
    .inprocess
        background  lightgrey
        opacity     0.6
    .kalendars
        .first
            padding-left    1em
        .delete
            margin-top  1em
        .location
            padding 0 1em 0.5em
            select
                width   100%
        select
            font-size       1em
            padding         0.5em
            margin-right    1em
            font-family     inherit
            outline         none
            &:focus,
            &:focus-within,
            &:hover
                border-color    #169cdd
    .kontakti
        .editable
            .bttns
                display block
            form
                padding-top 2em
            .Gmap
                height  300px
        .address
            border      1px solid #b0b0b0
            padding     1em
            margin-top  1em
            .likeInp
                padding 0.5em 0.25em
                box-sizing  border-box
                margin-bottom   0.5em
                border          1px solid #777
                color           #111
                margin-top      0
            .lat,
            .long
                display none
            &.new
                margin  1em 0
                .bttns
                    display         flex
                    justify-content space-between
                    flex-wrap       wrap
                    .cancel
                        margin-left auto
                        flex 0 1 auto
                    .submit
                        flex 1 0 auto
                    .cancel,
                    .submit
                        padding 0.5em
                        text-align center
    .about
        .editable
            .bttns
                display block
            .fizioObj
                .text
                    .desc
                        max-width   none
                        width       100%
                &.open
                    .text
                        .pricing
                            width   100%
        .about-container
            margin-top  1em
    .galleries
        .save
            display none
        .open
            .save
                display inline-block
        .small-image-container
            .small-image
                display inline-block
                margin-bottom   1em
                margin-left     0.5em
                margin-right    0.5em
                vertical-align  top
                &.hidden
                    display none
                &:hover
                    .alt-delete
                        opacity 1
                        &.hidden
                            opacity 0
                .container
                    height              90px
                    width               160px
                    background-size     contain
                    background-position center
                    background-repeat   no-repeat
                    display             flex
                    justify-content     center
                    align-items         center
                    img
                        height  80%
                        width   auto
                .alt-delete
                    background      #e04242
                    color           white
                    text-transform  uppercase
                    text-align      center
                    font-weight     bold
                    padding         0.25em 0
                    opacity         0
                    cursor          pointer
                    &.hidden
                        pointer-events  none
                &.add-new
                    .alt-delete
                        opacity 0
                        pointer-events  none
                    .container
                        box-sizing  border-box
                        cursor      pointer
                        &:hover
                            img
                                opacity 0.5
                        &.open
                            .img,
                            .youtube
                                display     inline-block
                                width       50%
                                box-sizing  border-box
                                height      100%
                                overflow    hidden
                                label
                                    width               100%
                                    height              80%
                                    display             block
                                    background-size     contain
                                    background-position center
                                    background-repeat   no-repeat
                                    cursor              pointer
                                p
                                    margin  0
                                    text-align  center
                                    border      none
                                img
                                    opacity 1
                                &:hover
                                    opacity 0.5
                            .plus
                                display none
                            &:hover
                                img
                                    opacity 1
                                
                        img
                            opacity 0.8
                        .img,
                        .youtube
                            display none
                        &.youtube
                            .youtube-link
                                display flex
                        .youtube-link
                            position        fixed
                            z-index         100
                            background      rgb(0, 0, 0)
                            background      rgba(0, 0, 0, 0.5)
                            top             0
                            left            0
                            right           0
                            bottom          0
                            display         none
                            justify-content center
                            align-items     center
                            cursor          default
                            .close
                                position    absolute
                                top         10px
                                left        auto
                                right       10px
                                img
                                    height  50px
                                    width   auto
                                    cursor  pointer
                            p
                                border  none
                                margin  0
                                small
                                    color       red
                                    opacity     0
                                    transition  opacity .3s
                            .cont
                                background  white
                                width       auto
                                height      auto
                                padding     1em
                                cursor      default
                                input
                                    display     block
                                    width       290px
                                    font-size   0.8em
                        &.youtube-error
                            p
                                small
                                    opacity 1
</style>