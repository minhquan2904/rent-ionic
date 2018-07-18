import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
// import leaflet from 'leaflet';
// import OlMap from 'ol/map';
// import OlXYZ from 'ol/source/xyz';
// import OlTileLayer from 'ol/layer/tile';
// import OlView from 'ol/view';
// import OlProj from 'ol/proj';

// // import { appConfig } from '../../app/app.config';
// // import { DemoService } from '../../_services/index';
// import { OpenMapPage } from '../open-map/open-map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DemoService]
})
export class HomePage {

  openMapPage= OpenMapPage;

  // @ViewChild('map') mapContainer: ElementRef;
  // map: any;
  // map: OlMap;
  // source: OlXYZ;
  // layer: OlTileLayer;
  // view: OlView;
  constructor(public navCtrl: NavController) {
 
  }
 
  ionViewDidEnter() {
    this.loadmap();
  }
 
  loadmap() {
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
    // *****LEAFLET*****
    // let mapboxUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    // // marker
    // let m1 = leaflet.marker([10.792428, 106.6364493]).bindPopup('This is Littleton, CO.'), 
    //     m2 = leaflet.marker([10.794462, 106.6336273]).bindPopup('This is Another 2, CO.'),
    //     m3 = leaflet.marker([10.796517, 106.6346033]).bindPopup('This is Another 3, CO.');
    // let cities = leaflet.layerGroup([m1,m2,m3]);
    // // layer group
    // let grayscale = leaflet.tileLayer(mapboxUrl, {id: 'MapID', attribution: 'www.tphangout.com'});
    // let streets   = leaflet.tileLayer(mapboxUrl, {id: 'MapID', attribution: 'www.tphangout.com'}); 
    
    // this.map = leaflet.map("map", {
    //   layers: [grayscale, cities]
    // }).fitWorld();
    // leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attributions: 'www.tphangout.com',
    //   maxZoom: 18,
    //   center: [10.8017639, 106.6382416]
    // }).addTo(this.map);
    // // locate
    // this.map.locate({
    //   setView: true,
    //   maxZoom: 10
    // });
    // this.map.setView([10.8017639, 106.6382416], 13);
    // // demo marker
    // let markerGroup = leaflet.featureGroup();
    // let etown: any = leaflet.marker([10.8017639, 106.6382416]).on('click', (e) => {
    //   this.map.setView(e.latlng, 15);
    //   console.log(e.latlng);
    // });
    // //#declare marker
    // let park: any = leaflet.marker([10.790478, 106.6412563]).bindPopup("<b>Hello world!</b><br>This is park.")
    // etown.bindPopup("<b>Hello world!</b><br>This is etown.");
    // // #add marker to group
    // markerGroup.addLayer(etown);
    // markerGroup.addLayer(park);
   
    // this.map.addLayer(markerGroup);
    
    // // choropleth
    // const statesData = appConfig.statesData;
    // leaflet.geoJson(statesData, {style: this.demoService.style}).addTo(this.map);
    // console.log(this.demoService.getColor(100));
    
    
    
    
  }
  
  
  
  
  
}
