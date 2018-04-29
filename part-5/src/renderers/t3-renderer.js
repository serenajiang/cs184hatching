// import THREE from '../lib/three';
import Renderer from '../lib/renderer';
import vert from '../shaders/task-3/texture.vert';
import frag from '../shaders/task-3/mipmaptest.frag';
import vertOutline from '../shaders/task-3/textureOutline.vert';
import fragOutline from '../shaders/task-3/textureOutline.frag';

import texture00 from "../textures/lines/0.png";
import texture01 from "../textures/lines/0.png";
import texture02 from "../textures/lines/0.png";
import texture03 from "../textures/lines/0.png";
import texture04 from "../textures/lines/0.png";
import texture05 from "../textures/lines/0.png";
import texture06 from "../textures/lines/0.png";
import texture07 from "../textures/lines/0.png";
import texture10 from "../textures/lines/10.png";
import texture11 from "../textures/lines/11.png";
import texture12 from "../textures/lines/12.png";
import texture13 from "../textures/lines/13.png";
import texture14 from "../textures/lines/14.png";
import texture15 from "../textures/lines/15.png";
import texture16 from "../textures/lines/16.png";
import texture17 from "../textures/lines/17.png";
import texture20 from "../textures/lines/20.png";
import texture21 from "../textures/lines/21.png";
import texture22 from "../textures/lines/22.png";
import texture23 from "../textures/lines/23.png";
import texture24 from "../textures/lines/24.png";
import texture25 from "../textures/lines/25.png";
import texture26 from "../textures/lines/26.png";
import texture27 from "../textures/lines/27.png";
import texture30 from "../textures/lines/30.png";
import texture31 from "../textures/lines/31.png";
import texture32 from "../textures/lines/32.png";
import texture33 from "../textures/lines/33.png";
import texture34 from "../textures/lines/34.png";
import texture35 from "../textures/lines/35.png";
import texture36 from "../textures/lines/36.png";
import texture37 from "../textures/lines/37.png";
import texture40 from "../textures/lines/40.png";
import texture41 from "../textures/lines/41.png";
import texture42 from "../textures/lines/42.png";
import texture43 from "../textures/lines/43.png";
import texture44 from "../textures/lines/44.png";
import texture45 from "../textures/lines/45.png";
import texture46 from "../textures/lines/46.png";
import texture47 from "../textures/lines/47.png";
import texture50 from "../textures/lines/50.png";
import texture51 from "../textures/lines/51.png";
import texture52 from "../textures/lines/52.png";
import texture53 from "../textures/lines/53.png";
import texture54 from "../textures/lines/54.png";
import texture55 from "../textures/lines/55.png";
import texture56 from "../textures/lines/56.png";
import texture57 from "../textures/lines/57.png";

var THREE = require('three')
var OrbitControls = require('three-orbit-controls')(THREE)

export default class extends Renderer {
  initScene() {
    if (!this.checkShader(vert, frag)) {
      this.setErrorScene();
      return;
    }
    this.scene.children = []; // remove all geometry
    this.setLight(this.light_setting);

    var tex40 = new THREE.TextureLoader().load(texture40);
    var tex41 = new THREE.TextureLoader().load(texture41);
    var tex42 = new THREE.TextureLoader().load(texture42);
    var tex43 = new THREE.TextureLoader().load(texture43);
    var tex44 = new THREE.TextureLoader().load(texture44);
    var tex45 = new THREE.TextureLoader().load(texture45);
    var tex46 = new THREE.TextureLoader().load(texture46);
    var tex47 = new THREE.TextureLoader().load(texture47);

    tex40.minFilter = THREE.NearestFilter;
    tex41.minFilter = THREE.NearestFilter;
    tex42.minFilter = THREE.NearestFilter;
    tex43.minFilter = THREE.NearestFilter;
    tex44.minFilter = THREE.NearestFilter;
    tex45.minFilter = THREE.NearestFilter;
    tex46.minFilter = THREE.NearestFilter;
    tex47.minFilter = THREE.NearestFilter;

    this.uniforms['texture40'] = {
      type: "t",
      value: tex40
    };
    this.uniforms['texture41'] = {
      type: "t",
      value: tex41
    };
    this.uniforms['texture42'] = {
      type: "t",
      value: tex42
    };
    this.uniforms['texture43'] = {
      type: "t",
      value: tex43
    };
    this.uniforms['texture44'] = {
      type: "t",
      value: tex44
    };
    this.uniforms['texture45'] = {
      type: "t",
      value: tex45
    };
    this.uniforms['texture46'] = {
      type: "t",
      value: tex46
    };
    this.uniforms['texture47'] = {
      type: "t",
      value: tex47
    };
    // Outline

    if (this.geometry == 0) {
      var outlineGeometry = new THREE.TeapotBufferGeometry(4, 32, 32);
      var geometry = new THREE.TeapotBufferGeometry(4, 32, 32);
    }
    else if (this.geometry == 1) {
      var outlineGeometry = new THREE.SphereBufferGeometry(5, 32, 32);
      var geometry = new THREE.SphereBufferGeometry(5, 32, 32);
    }

    else if (this.geometry == 2) {
      var outlineGeometry = new THREE.TorusBufferGeometry(5, 2, 16, 100);
      var geometry = new THREE.TorusBufferGeometry(5, 2, 16, 100);
    }
    else if (this.geometry == 3) {
      var outlineGeometry = new THREE.CylinderBufferGeometry(3, 3, 8, 64, 100);
      var geometry = new THREE.CylinderBufferGeometry(3, 3, 8, 64, 100);
    }


    const outlineMaterial = this.createShaderMaterial(vertOutline, fragOutline);
    const outline = new THREE.Mesh(outlineGeometry, outlineMaterial);
    this.scene.add(outline);

    const material = this.createShaderMaterial(vert, frag);
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);
    this.scene.background = new THREE.Color( 0xffffff );



  }
/*
  update_textures(i) {
        if (i == 0) {
            tex5 = new THREE.TextureLoader().load(texture50);
            tex4 = new THREE.TextureLoader().load(texture40);
            tex3 = new THREE.TextureLoader().load(texture30);
            tex2 = new THREE.TextureLoader().load(texture20);
            tex1 = new THREE.TextureLoader().load(texture10);
            tex0 = new THREE.TextureLoader().load(texture00);
        }else if (i == 1) {
            tex5 = new THREE.TextureLoader().load(texture51);
            tex4 = new THREE.TextureLoader().load(texture41);
            tex3 = new THREE.TextureLoader().load(texture31);
            tex2 = new THREE.TextureLoader().load(texture21);
            tex1 = new THREE.TextureLoader().load(texture11);
            tex0 = new THREE.TextureLoader().load(texture01);
        } else if (i == 2) {
            tex5 = new THREE.TextureLoader().load(texture52);
            tex4 = new THREE.TextureLoader().load(texture42);
            tex3 = new THREE.TextureLoader().load(texture32);
            tex2 = new THREE.TextureLoader().load(texture22);
            tex1 = new THREE.TextureLoader().load(texture12);
            tex0 = new THREE.TextureLoader().load(texture02);
        } else if (i == 3) {
            tex5 = new THREE.TextureLoader().load(texture53);
            tex4 = new THREE.TextureLoader().load(texture43);
            tex3 = new THREE.TextureLoader().load(texture33);
            tex2 = new THREE.TextureLoader().load(texture23);
            tex1 = new THREE.TextureLoader().load(texture13);
            tex0 = new THREE.TextureLoader().load(texture03);
        }
  }
*/

  update(dt) {
    //this.update_textures(this.texture_set);
    if (!this.focussed) {
      this.updateCamera(dt / 12000);
    }
  }
}
