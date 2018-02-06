<template lang="pug">
    .gmap#map
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
            markers: []
        }
    },
    mounted: function () {
        const element = document.getElementById('map')
        const mapCentre = this.markerCoordinates[0]
        const options = {            
            zoom: 15,
            center: mapCentre,
            scrollwheel: false,
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
                    icon: '../assets/gmarker.svg',
                    // icon: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
                })
                let infowindow = new google.maps.InfoWindow({
                    content: '<b>ADRESE</b><br>' + coord.street
                })
                marker.addListener('click', function() {
                    infowindow.open(map, marker)
                })
            })   
        }) 
        
    },
    props: ['markerCoordinates']
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