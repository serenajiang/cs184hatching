// import THREE from '../lib/three';
import Renderer from '../lib/renderer';
import vert from '../shaders/task-3/texture.vert';
import frag from '../shaders/task-3/mipmaptest.frag';
import vertOutline from '../shaders/task-3/textureOutline.vert';
import fragOutline from '../shaders/task-3/textureOutline.frag';

import texture00 from "../textures/dick/0.png";
import texture01 from "../textures/dick/0.png";
import texture02 from "../textures/dick/0.png";
import texture03 from "../textures/dick/0.png";
import texture04 from "../textures/dick/0.png";
import texture05 from "../textures/dick/0.png";
import texture06 from "../textures/dick/0.png";
import texture07 from "../textures/dick/0.png";
import texture08 from "../textures/dick/0.png";
import texture09 from "../textures/dick/0.png";
import texture10 from "../textures/dick/10.png";
import texture11 from "../textures/dick/11.png";
import texture12 from "../textures/dick/12.png";
import texture13 from "../textures/dick/13.png";
import texture14 from "../textures/dick/14.png";
import texture15 from "../textures/dick/15.png";
import texture16 from "../textures/dick/16.png";
import texture17 from "../textures/dick/17.png";
import texture18 from "../textures/dick/18.png";
import texture20 from "../textures/dick/20.png";
import texture21 from "../textures/dick/21.png";
import texture22 from "../textures/dick/22.png";
import texture23 from "../textures/dick/23.png";
import texture24 from "../textures/dick/24.png";
import texture25 from "../textures/dick/25.png";
import texture26 from "../textures/dick/26.png";
import texture27 from "../textures/dick/27.png";
import texture28 from "../textures/dick/28.png";
import texture30 from "../textures/dick/30.png";
import texture31 from "../textures/dick/31.png";
import texture32 from "../textures/dick/32.png";
import texture33 from "../textures/dick/33.png";
import texture34 from "../textures/dick/34.png";
import texture35 from "../textures/dick/35.png";
import texture36 from "../textures/dick/36.png";
import texture37 from "../textures/dick/37.png";
import texture38 from "../textures/dick/38.png";
import texture40 from "../textures/dick/40.png";
import texture41 from "../textures/dick/41.png";
import texture42 from "../textures/dick/42.png";
import texture43 from "../textures/dick/43.png";
import texture44 from "../textures/dick/44.png";
import texture45 from "../textures/dick/45.png";
import texture46 from "../textures/dick/46.png";
import texture47 from "../textures/dick/47.png";
import texture48 from "../textures/dick/48.png";
import texture50 from "../textures/dick/50.png";
import texture51 from "../textures/dick/51.png";
import texture52 from "../textures/dick/52.png";
import texture53 from "../textures/dick/53.png";
import texture54 from "../textures/dick/54.png";
import texture55 from "../textures/dick/55.png";
import texture56 from "../textures/dick/56.png";
import texture57 from "../textures/dick/57.png";
import texture58 from "../textures/dick/58.png";

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

    var tex00 = new THREE.TextureLoader().load(texture00);
    var tex01 = new THREE.TextureLoader().load(texture01);
    var tex02 = new THREE.TextureLoader().load(texture02);
    var tex03 = new THREE.TextureLoader().load(texture03);
    var tex04 = new THREE.TextureLoader().load(texture04);
    var tex05 = new THREE.TextureLoader().load(texture05);
    var tex06 = new THREE.TextureLoader().load(texture06);
    var tex07 = new THREE.TextureLoader().load(texture07);
    var tex08 = new THREE.TextureLoader().load(texture08);
    var tex10 = new THREE.TextureLoader().load(texture10);
    var tex11 = new THREE.TextureLoader().load(texture11);
    var tex12 = new THREE.TextureLoader().load(texture12);
    var tex13 = new THREE.TextureLoader().load(texture13);
    var tex14 = new THREE.TextureLoader().load(texture14);
    var tex15 = new THREE.TextureLoader().load(texture15);
    var tex16 = new THREE.TextureLoader().load(texture16);
    var tex17 = new THREE.TextureLoader().load(texture17);
    var tex18 = new THREE.TextureLoader().load(texture18);
    var tex20 = new THREE.TextureLoader().load(texture20);
    var tex21 = new THREE.TextureLoader().load(texture21);
    var tex22 = new THREE.TextureLoader().load(texture22);
    var tex23 = new THREE.TextureLoader().load(texture23);
    var tex24 = new THREE.TextureLoader().load(texture24);
    var tex25 = new THREE.TextureLoader().load(texture25);
    var tex26 = new THREE.TextureLoader().load(texture26);
    var tex27 = new THREE.TextureLoader().load(texture27);
    var tex28 = new THREE.TextureLoader().load(texture28);
    var tex30 = new THREE.TextureLoader().load(texture30);
    var tex31 = new THREE.TextureLoader().load(texture31);
    var tex32 = new THREE.TextureLoader().load(texture32);
    var tex33 = new THREE.TextureLoader().load(texture33);
    var tex34 = new THREE.TextureLoader().load(texture34);
    var tex35 = new THREE.TextureLoader().load(texture35);
    var tex36 = new THREE.TextureLoader().load(texture36);
    var tex37 = new THREE.TextureLoader().load(texture37);
    var tex38 = new THREE.TextureLoader().load(texture38);
    var tex40 = new THREE.TextureLoader().load(texture40);
    var tex41 = new THREE.TextureLoader().load(texture41);
    var tex42 = new THREE.TextureLoader().load(texture42);
    var tex43 = new THREE.TextureLoader().load(texture43);
    var tex44 = new THREE.TextureLoader().load(texture44);
    var tex45 = new THREE.TextureLoader().load(texture45);
    var tex46 = new THREE.TextureLoader().load(texture46);
    var tex47 = new THREE.TextureLoader().load(texture47);
    var tex48 = new THREE.TextureLoader().load(texture48);
    var tex50 = new THREE.TextureLoader().load(texture50);
    var tex51 = new THREE.TextureLoader().load(texture51);
    var tex52 = new THREE.TextureLoader().load(texture52);
    var tex53 = new THREE.TextureLoader().load(texture53);
    var tex54 = new THREE.TextureLoader().load(texture54);
    var tex55 = new THREE.TextureLoader().load(texture55);
    var tex56 = new THREE.TextureLoader().load(texture56);
    var tex57 = new THREE.TextureLoader().load(texture57);
    var tex58 = new THREE.TextureLoader().load(texture58);

    tex00.minFilter = THREE.LinearFilter;
    tex01.minFilter = THREE.LinearFilter;
    tex02.minFilter = THREE.LinearFilter;
    tex03.minFilter = THREE.LinearFilter;
    tex04.minFilter = THREE.LinearFilter;
    tex05.minFilter = THREE.LinearFilter;
    tex06.minFilter = THREE.LinearFilter;
    tex07.minFilter = THREE.LinearFilter;
    tex08.minFilter = THREE.LinearFilter;
    tex10.minFilter = THREE.LinearFilter;
    tex11.minFilter = THREE.LinearFilter;
    tex12.minFilter = THREE.LinearFilter;
    tex13.minFilter = THREE.LinearFilter;
    tex14.minFilter = THREE.LinearFilter;
    tex15.minFilter = THREE.LinearFilter;
    tex16.minFilter = THREE.LinearFilter;
    tex17.minFilter = THREE.LinearFilter;
    tex18.minFilter = THREE.LinearFilter;
    tex20.minFilter = THREE.LinearFilter;
    tex21.minFilter = THREE.LinearFilter;
    tex22.minFilter = THREE.LinearFilter;
    tex23.minFilter = THREE.LinearFilter;
    tex24.minFilter = THREE.LinearFilter;
    tex25.minFilter = THREE.LinearFilter;
    tex26.minFilter = THREE.LinearFilter;
    tex27.minFilter = THREE.LinearFilter;
    tex28.minFilter = THREE.LinearFilter;
    tex30.minFilter = THREE.LinearFilter;
    tex31.minFilter = THREE.LinearFilter;
    tex32.minFilter = THREE.LinearFilter;
    tex33.minFilter = THREE.LinearFilter;
    tex34.minFilter = THREE.LinearFilter;
    tex35.minFilter = THREE.LinearFilter;
    tex36.minFilter = THREE.LinearFilter;
    tex37.minFilter = THREE.LinearFilter;
    tex38.minFilter = THREE.LinearFilter;
    tex40.minFilter = THREE.LinearFilter;
    tex41.minFilter = THREE.LinearFilter;
    tex42.minFilter = THREE.LinearFilter;
    tex43.minFilter = THREE.LinearFilter;
    tex44.minFilter = THREE.LinearFilter;
    tex45.minFilter = THREE.LinearFilter;
    tex46.minFilter = THREE.LinearFilter;
    tex47.minFilter = THREE.LinearFilter;
    tex48.minFilter = THREE.LinearFilter;
    tex50.minFilter = THREE.LinearFilter;
    tex51.minFilter = THREE.LinearFilter;
    tex52.minFilter = THREE.LinearFilter;
    tex53.minFilter = THREE.LinearFilter;
    tex54.minFilter = THREE.LinearFilter;
    tex55.minFilter = THREE.LinearFilter;
    tex56.minFilter = THREE.LinearFilter;
    tex57.minFilter = THREE.LinearFilter;
    tex58.minFilter = THREE.LinearFilter;

    var textures = [tex03,tex05,tex06,tex08,
                    tex13,tex15,tex16,tex18,
                    tex43,tex45,tex46,tex48,
                    tex53,tex55,tex56,tex58];
    this.uniforms['textures'] = {
      value: textures
    }
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
