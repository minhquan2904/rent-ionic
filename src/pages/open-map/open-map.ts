import { Component, ViewChild, Renderer, ElementRef } from '@angular/core';
import { IonicPage,Platform } from 'ionic-angular';
import leaflet from 'leaflet';

import { appResource } from '../../_resources/app.resource';


@IonicPage()
@Component({
  selector: 'page-open-map',
  templateUrl: 'open-map.html'
})
export class OpenMapPage {
  
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(platform: Platform, public renderer: Renderer) {
    
  }
  ionViewDidEnter() {
    this.loadmap();
  }
  onLocationFound(e) {
    var radius = e.accuracy / 2;

    leaflet.marker(e.latlng).addTo(this.map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    leaflet.circle(e.latlng, radius).addTo(this.map);
  }

  loadmap() {
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'www.tphangout.com',
      maxZoom: 18
    }).addTo(this.map);
    this.map.locate({setView: true, maxZoom: 12}).on('locationfound', (e) => {
      let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([e.latitude, e.longitude]);
      leaflet.circle([e.latitude, e.longitude], {radius: 5000}).addTo(this.map);
      let m1: any = leaflet.marker([10.8211003, 106.6163627]).bindPopup("Store");

      marker.bindPopup("Your position");

      markerGroup.addLayer(m1);
      markerGroup.addLayer(marker);
      
      this.map.addLayer(markerGroup);
      }).on('locationerror', (err) => {
        alert(err.message);
    })
    this.addMarker();
  }
  addMarker() {
    console.log('add marker!');
    let markerGroup = leaflet.featureGroup();
    Object.keys(appResource.location).forEach((key) =>  {
      
      let latLng: any =  [appResource.location[key].lat,appResource.location[key].lng];
      let marker: any = leaflet.marker(latLng).bindPopup("Location test");
      markerGroup.addLayer(marker);
    });
    this.map.addLayer(markerGroup);
  }
}
