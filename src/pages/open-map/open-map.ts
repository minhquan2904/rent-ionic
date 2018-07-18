import { Component, ViewChild, Renderer, ElementRef } from '@angular/core';
import { IonicPage,Platform } from 'ionic-angular';

import OlMap from 'ol/map';
import OlXYZ from 'ol/source/xyz';
import OlTileLayer from 'ol/layer/tile';
import OlView from 'ol/view';
import OlProj from 'ol/proj';
// import * as ol from 'openlayers';


@IonicPage()
@Component({
  selector: 'page-open-map',
  templateUrl: 'open-map.html'
})
export class OpenMapPage {
  
  map: OlMap;
  source: OlXYZ;
  layer: OlTileLayer;
  view: OlView;
 
  constructor(platform: Platform, public renderer: Renderer) {
    platform.ready().then(() => {
      console.log("Platform is ready");
      this.loadMap();
    })
  }

  loadMap() {
    this.source = new OlXYZ({
      // Tiles from Mapbox (Light)
      url: 'https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
    });

    this.layer = new OlTileLayer({
      source: this.source
    });

    this.view = new OlView({
      center: OlProj.fromLonLat([6.661594, 50.433237]),
      zoom: 3,
    });

    this.map = new OlMap({
      target: 'map',
      layers: [this.layer],
      view: this.view
    });

  }

}
