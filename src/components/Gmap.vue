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
            markerCoordinates: [
                {
                    lat: 56.955454,
                    lng: 24.118983
                }
            ],
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
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
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
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
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
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
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
                }
            ],
        }
        GoogleMapsLoader.KEY = 'AIzaSyA4ADLbwhDEbOpNpixZrpUi4D_edka4R4A';
        let self = this
        GoogleMapsLoader.load(function(google) {
            let gMap = new google.maps.Map(element, options)
            self.markerCoordinates.forEach((coord) => {
                const position = new google.maps.LatLng(coord.lat, coord.lng)
                const marker = new google.maps.Marker({
                    position,
                    map: gMap
                })
            })   
        }) 
        
    },
}
</script>

<style lang="stylus" scoped>
.gmap
    width   100%
    height  200px
    background  #f2f2f2
</style>