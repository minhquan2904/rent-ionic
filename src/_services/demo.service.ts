import { Injectable } from '@angular/core';
 
@Injectable()
export class DemoService {
 
    constructor() {
 
    }
 
    someFunction(){
        console.log("I do something useful!");
    }
    getColor(d) {
        this.abc();
        return d > 1000 ? '#800026' :
              d > 500  ? '#BD0026' :
              d > 200  ? '#E31A1C' :
              d > 100  ? '#FC4E2A' :
              d > 50   ? '#FD8D3C' :
              d > 20   ? '#FEB24C' :
              d > 10   ? '#FED976' :
                          '#FFEDA0';
    };
    abc() {
        console.log('This a another function!');
    }
    style(feature) {
   
        // console.log(feature);
        let colorToFilled;
        
        colorToFilled = feature.properties.density > 1000 ? '#800026':
                  feature.properties.density > 500  ? '#BD0026' :
                  feature.properties.density > 200  ? '#E31A1C' :
                  feature.properties.density > 100  ? '#FC4E2A' :
                  feature.properties.density > 50   ? '#FD8D3C' :
                  feature.properties.density > 20   ? '#FEB24C' :
                  feature.properties.density > 10   ? '#FED976' :
                              '#FFEDA0';
        // console.log(colorToFilled);
        return {
            fillColor: colorToFilled,
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    
  }
 
}