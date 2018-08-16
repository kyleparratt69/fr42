import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { } from '@types/googlemaps';
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('flyInOut', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible',   style({
        opacity: 1
      })),
      transition('hidden => visible', animate('1000ms ease-in')),
      transition('visible => hidden', animate('1000ms ease-out'))
    ])
  ]
})
export class HomeComponent implements OnInit {
  quickMode_array: {title: string, icon: string, description: string;}[] = [
    {title: 'Coffee MeetUp', icon: 'local_cafe', description: 'Grab a coffee with a stranger, on us!'},
    {title: 'Study Breaking', icon: 'school', description: 'Grab a coffee with a stranger, on us!'},
    {title: 'Stranger Roulette', icon: 'swap_horiz', description: 'Grab a coffee with a stranger, on us!'},
    {title: 'Smoke Break', icon: 'weekend', description: 'Grab a coffee with a stranger, on us!'},
  ];
  suggestion_isVisible;
  options: any;
  @ViewChild('gmapElement') gmapElement: ElementRef;
  map: google.maps.Map;
  mapStyles_array = [
    {
      "featureType": "all",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "saturation": 36
        },
        {
          "color": "#000000"
        },
        {
          "lightness": 40
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "color": "#000000"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 17
        },
        {
          "weight": 1.2
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ff07b2"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#c4c4c4"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#e5c163"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 21
        },
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#e5c163"
        },
        {
          "lightness": "0"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#e5c163"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 18
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#575757"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#999999"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 19
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 17
        }
      ]
    }
  ];
  mapProp: any;
  mapHas_initialized: boolean = true;

  constructor() {
    this.suggestion_isVisible = 'hidden';
  }

  ngOnInit() {
    this.mapProp = {
      center: new google.maps.LatLng(40.674, -73.945),
      zoom: 9,
      zoomControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: this.mapStyles_array,
      disableDefaultUI: true,
      tilt: 45
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, this.mapProp);
    this.map.addListener( 'load', () => {
      console.log('map loaded!');
      this.mapHas_initialized = true;
    });
    this.suggestion_isVisible = 'visible';
  }

  static getHeroCardClass(index: number): string{
    const classId = 'hero_card-';
    return classId+index;
  }

}
