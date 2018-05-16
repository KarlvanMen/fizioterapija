<template lang="pug">
    .gmap(:id="mapName" v-bind:data-marker="markerCoordinates[0].lat")
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
            let self = this
            this.lat = this.markerCoordinates[0].lat
            this.lng = this.markerCoordinates[0].lng
            let element = document.getElementById(this.mapName)
            let mapCentre = {
                lat: parseFloat(this.markerCoordinates[0].lat),
                lng: parseFloat(this.markerCoordinates[0].lng)
            }
            let options = {            
                zoom: 1,
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
            GoogleMapsLoader.load(function(google) {
                require('./gmap/richmaker.js')
                let gMap = new google.maps.Map(element, options)
                let bounds = new google.maps.LatLngBounds()
                self.markerCoordinates.forEach((coord) => {
                    let position = new google.maps.LatLng(coord.lat, coord.lng)                    
                    let marker = new RichMarker({
                        position: position,
                        map: gMap,
                        draggable: false,
                        content: '<div><img src="https://dl.dropboxusercontent.com/s/ggl34b80akir69a/gmarker.svg?dl=0"/></div>',
                        shadow: false,
                    })
                    bounds.extend(marker.position)

                    let count = 0;
                    google.maps.event.addListener(marker, 'click', function() {
                        count++;
                        if(count%2 === 0) {
                            marker.setContent('<div><img src="https://dl.dropboxusercontent.com/s/ggl34b80akir69a/gmarker.svg?dl=0"/></div>')
                        } else {
                            marker.setContent('<div style="position: relative"><div style="position: absolute; border-radius: 50%; bottom: 100%; margin-bottom: 5px; left: 50%; width: 150px; height: 150px; background-color: #444a5a; transform: translateX(-50%); font-size: 14px; color: white; display: flex; flex-flow: column; justify-content: center; align-items: center; text-align: center;"><p style="max-width: 100%; box-sizing: border-box; padding: 0 10px;"><b>' + coord.street + '</b><br><small>' + coord.streetFull + '</small></p></div><img src="https://dl.dropboxusercontent.com/s/ggl34b80akir69a/gmarker.svg?dl=0"/></div>')
                        }
                    });
                })  
                gMap.fitBounds(bounds)
                setTimeout(() => {
                    gMap.setZoom(gMap.zoom - 1)
                }, 5)
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