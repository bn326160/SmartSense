import * as $ from 'jquery';
import 'jvectormap';
import 'jvectormap/jquery-jvectormap.css';
import './jquery-jvectormap-world-mill.js';
import './jquery-jvectormap-europe-mill.js';
import { debounce } from 'lodash';

export default (function () {
  const vectorMapInit = () => {
    if ($('#world-map-marker').length > 0) {
      // This is a hack, as the .empty() did not do the work
      $('#vmap')
        .remove();

      // we recreate (after removing it) the container div, to reset all the data of the map
      $('#world-map-marker')
        .append(`
        <div
          id="vmap"
          style="
            height: 490px;
            position: relative;
            overflow: hidden;
            background-color: transparent;
          "
        >
        </div>
      `);

      var plants = [
        {
          name: 'Leeds',
          latLng: [53.79648, -1.54785],
          status: 'factory'
        },
        {
          name: 'Glasgow',
          latLng: [55.86515, -4.25763],
          status: 'factory'
        }
      ];

      var series = {
        regions: [{
          values: {
            'GB': 0,
            'ES': 0,
            'FR': 0,
            'IT': 0,
          },
          scale: ['#03a9f3', '#02a7f1'],
          normalizeFunction: 'polynomial',
        }],
      }

      $('#vmap')
        .vectorMap({
          map: 'europe_mill',
          backgroundColor: '#fff',
          borderColor: '#fff',
          borderOpacity: 0.25,
          borderWidth: 0,
          color: '#e6e6e6',
          regionStyle: {
            initial: {
              fill: '#e4ecef',
            },
          },
          markerStyle: {
            initial: {
              r: 5,
              'fill': '#fff',
              'fill-opacity': 1,
              'stroke': '#000',
              'stroke-width': 2,
              'stroke-opacity': 0.4,
            },
          },
          markers: plants,
          series: series,
          hoverOpacity: null,
          hoverColor: '#fff',
          /*setFocus: {
            regions: ['GB','IT','FR']
          }*/
        });


      /*('#vmap')
        .vectorMap({
          map: 'europe_mill',
          backgroundColor: '#fff',
          borderColor: '#fff',
          borderOpacity: 0.25,
          borderWidth: 0,
          color: '#e6e6e6',
          regionStyle: {
            initial: {
              fill: '#e4ecef',
            },
          },

          markerStyle: {
            initial: {
              r: 5,
              'fill': '#fff',
              'fill-opacity': 1,
              'stroke': '#000',
              'stroke-width': 2,
              'stroke-opacity': 0.4,
            },
          },

          markers: [{
            latLng: [53.79648, -1.54785],
            name: 'Leeds',
          }, {
            latLng: [55.86515, -4.25763],
            name: 'Glasgow',
          }],
          series: {
            regions: [{
              values: {
                'GB': 0,
                'ES': 0,
                'FR': 0,
                'IT': 0,
              },
              scale: ['#03a9f3', '#02a7f1'],
              normalizeFunction: 'polynomial',
            }],
          },
          hoverOpacity: null,
          normalizeFunction: 'linear',
          zoomOnScroll: true,
          scaleColors: ['#b6d6ff', '#005ace'],
          selectedColor: '#c9dfaf',
          selectedRegions: [],
          enableZoom: true,
          hoverColor: '#fff',
          setFocus: {
            region: 'FR',
            scale: 5,
          },
        });*/
    }
  };

  vectorMapInit();
  /*$(window)
    .resize(debounce(vectorMapInit, 150));*/
})();
