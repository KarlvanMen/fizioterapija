<template lang="pug">
    .gmap#map(:id="mapName" v-bind:data-marker="markerCoordinates[0].lat")
</template>

<script>
/* eslint-disable */
import GoogleMapsLoader from 'google-maps'

export default {
    name: 'Gmap',
    data () {
        return {
            map: null,
            bounds: null,
            markers: [],
            lat: 0,
            lng: 0
        }
    },
    methods: {
        initMap () {
            this.lat = this.markerCoordinates[0].lat
            this.lng = this.markerCoordinates[0].lng
            let element = document.getElementById(this.mapName)
            let mapCentre = {
                lat: parseFloat(this.markerCoordinates[0].lat),
                lng: parseFloat(this.markerCoordinates[0].lng)
            }
            let options = {            
                zoom: 15,
                center: mapCentre,
                scrollwheel: true,
                styles: [
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#444444"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#4d4d4d"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.man_made",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.natural.landcover",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#dcedda"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.natural.terrain",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#dcedda"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#4d4d4d"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 45
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ff0000"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#4d4d4d"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway.controlled_access",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway.controlled_access",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#4d4d4d"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#4d4d4d"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#4d4d4d"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#4d4d4d"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#46bcec"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#169cdd"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#4d4d4d"
                            }
                        ]
                    }
                ],
            }
            GoogleMapsLoader.KEY = 'AIzaSyA4ADLbwhDEbOpNpixZrpUi4D_edka4R4A'
            let self = this
            GoogleMapsLoader.load(function(google) {
                let gMap = new google.maps.Map(element, options)
                self.markerCoordinates.forEach((coord) => {
                    let position = new google.maps.LatLng(coord.lat, coord.lng)
                    let marker = new google.maps.Marker({
                        position,
                        map: gMap,
                        // icon: '../assets/gmarker.svg',
                        icon: 'https://dl.dropboxusercontent.com/s/ggl34b80akir69a/gmarker.svg?dl=0',                        
                    })
                    let infowindow = new google.maps.InfoWindow({
                        content: '<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 16px; width: 120px;" id="hook-' + self.mapName + '"><b>ADRESE</b><br>' + coord.street + '</div>'
                    })
                    marker.addListener('click', function() {
                        infowindow.open(gMap, marker)
                        let parent = self.$el.querySelector('#hook-' + self.mapName).parentElement.parentElement.parentElement.parentElement
                        let ch = parent.children
                        for(let i = 0; i < ch.length; i++) {
                            ch[i].style.display = "none"
                        }
                        let div = document.createElement('div')
                        div.id = 'marker-' + self.mapName
                        div.setAttribute("style", "position: absolute; color: white; text-align: center; width: 150px; height: 150px; padding-bottom: 100%; background: #444a5a; border-radius: 50%; top: 0; left: 0; transform: translate(-32%, -80%); box-sizing: border-box;")
                        div.innerHTML = infowindow.content
                        parent.appendChild(div)
                        setTimeout(() => {
                            document.querySelector('#marker-' + self.mapName).style.opacity = '1'
                        }, 100)
                    })
                })   
            })
        }
    },
    mounted: function () {
        this.initMap()
    },
    updated () {
        this.initMap()
    },
    props: ['markerCoordinates', 'mapName']
}
</script>

<style lang="stylus" scoped>
.gmap
    width   100%
    height  200px
    background  #f2f2f2
    .gm-style
        .gm-style-iw
            color   red
            &:after
                content     ''
                position    absolute
                top         -25%
                left        -25%
                width       150%
                height      150%
                background  #444a5a
    @media screen and (min-width: 1000px)
        height  auto
        flex    1
</style>