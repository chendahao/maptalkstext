<template>
</template>

<script>
import * as THREE from 'three';
import * as maptalks from 'maptalks'
import { ThreeLayer } from 'maptalks.three';
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      map: 'MapModule/map'
    })
  },
  mounted() {
    this.$nextTick(() => {
      this.addBridge()
    })
  },
  methods: {
    addBridge() {
      let mapObj = this.map
      var threeLayer = new ThreeLayer('桥体示意图', {
          identifyCountOnEvent: 1,
          // forceRenderOnMoving: true,
          // forceRenderOnRotating: true
      });
      threeLayer.prepareToDraw = function (gl, scene, camera) {
          var light = new THREE.DirectionalLight(0xFF330b);
          light.position.set(0, -10, 10).normalize();
          scene.add(light);
          scene.add(new THREE.AmbientLight('#FF330b36', 0.5));
          animate();
          addPolygon();
          addPolygon2();
          addPolygon3();

      }
      
      threeLayer.addTo(mapObj.getInstance());

      function addPolygon() {
          const material = new THREE.MeshLambertMaterial({ color: '#FF330b36', transparent: true });
          const extrudePolygons = [];
          const f = { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[
            [
              117.6518154144287,
              39.00918025017526
            ],
            [
              117.65146136283873,
              39.009905547159086
            ],
            [
              117.6512575149536,
              39.00984719020561
            ],
            [
              117.65156865119934,
              39.009063535023365
            ],
            [
              117.6518154144287,
              39.00918025017526
            ]
        ]] }, "properties": { "name": "1-3cf0006e", "_color": "#4b3aff", "center": [117.6518154144287, 39.00918025017526] } };

          const building = threeLayer.toExtrudePolygon(f, { height: 10 }, material);

          threeLayer.addMesh(building);
      }
      function addPolygon2() {
          const material = new THREE.MeshLambertMaterial({ color: '#FF330b36', transparent: true });
          const extrudePolygons = [];
          const f = { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [
            [
              [
                117.65066206455232,
                39.01120189278148
              ],
              [
                117.65100002288818,
                39.01041825260885
              ],
              [
                117.6512575149536,
                39.01050578731423
              ],
              [
                117.65094101428984,
                39.01130609959715
              ],
              [
                117.65066206455232,
                39.01120189278148
              ]
            ]
          ] }, "properties": { "name": "1-3cf0006e", "_color": "#4b3aff", "center": [117.6518154144287, 39.00918025017526] } };

          const building = threeLayer.toExtrudePolygon(f, { height: 10 }, material);

          threeLayer.addMesh(building);
      }
      function addPolygon3() {
          const material = new THREE.MeshLambertMaterial({ color: '#33330b36', transparent: false });
          const extrudePolygons = [];
          const f = { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [
            [
              [
                117.65100002288818,
                39.01041825260885
              ],
              [
                117.6512575149536,
                39.01050578731423
              ],
              [
                117.65146136283873,
                39.009905547159086
              ],
              [
                117.6512575149536,
                39.00984719020561
              ],
              [
                117.65100002288818,
                39.01041825260885
              ]
            ]
          ] }, "properties": { "name": "1-3cf0006e", "_color": "#4b3aff", "center": [117.6518154144287, 39.00918025017526] } };

          const building = threeLayer.toExtrudePolygon(f, { height: 30 }, material);

          threeLayer.addMesh(building);
      }
      function animate() {
          requestAnimationFrame(animate);
          threeLayer._needsUpdate = !threeLayer._needsUpdate;
          if (threeLayer._needsUpdate && !threeLayer.isRendering()) {
              threeLayer.redraw();
          }

      }
      
    },
  },
}
</script>