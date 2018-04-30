// import THREE from '../lib/three';
import Renderer from '../lib/renderer';
import vert from '../shaders/task-3/texture.vert';
import frag from '../shaders/task-3/texture.frag';
import vertOutline from '../shaders/task-3/textureOutline.vert';
import fragOutline from '../shaders/task-3/textureOutline.frag';
// import texture5 from '../textures/dick/5.png';
// import texture4 from '../textures/dick/4.png';
// import texture3 from '../textures/dick/3.png';
// import texture2 from '../textures/dick/2.png';
// import texture1 from '../textures/dick/1.png';
// import texture0 from '../textures/dick/0.png';

import texture53 from '../textures/test/ayy53.bmp';
import texture43 from '../textures/test/ayy43.bmp';
import texture33 from '../textures/test/ayy33.bmp';
import texture23 from '../textures/test/ayy23.bmp';
import texture13 from '../textures/test/ayy13.bmp';
import texture03 from '../textures/test/ayy03.bmp';

import texture52 from '../textures/test/ayy52.bmp';
import texture42 from '../textures/test/ayy42.bmp';
import texture32 from '../textures/test/ayy32.bmp';
import texture22 from '../textures/test/ayy22.bmp';
import texture12 from '../textures/test/ayy12.bmp';
import texture02 from '../textures/test/ayy02.bmp';

import texture51 from '../textures/test/ayy51.bmp';
import texture41 from '../textures/test/ayy41.bmp';
import texture31 from '../textures/test/ayy31.bmp';
import texture21 from '../textures/test/ayy21.bmp';
import texture11 from '../textures/test/ayy11.bmp';
import texture01 from '../textures/test/ayy01.bmp';

import texture50 from '../textures/test/ayy50.bmp';
import texture40 from '../textures/test/ayy40.bmp';
import texture30 from '../textures/test/ayy30.bmp';
import texture20 from '../textures/test/ayy20.bmp';
import texture10 from '../textures/test/ayy10.bmp';
import texture00 from '../textures/test/ayy00.bmp';

import texture56 from '../textures/drawn/lvl5.png';
import texture46 from '../textures/drawn/lvl4.png';
import texture36 from '../textures/drawn/lvl3.png';
import texture26 from '../textures/drawn/lvl2.png';
import texture16 from '../textures/drawn/lvl1.png';
import texture06 from '../textures/drawn/lvl0.png';

var THREE = require('three')

export default class extends Renderer {

  importTextures() {
    var tex5 = new THREE.TextureLoader().load(texture53);
    // var tex5 = new THREE.Texture(texture53);
    // tex5.mipmaps[0] = tex5;
    // tex5.mipmaps[1] = new THREE.TextureLoader().load(texture52);
    // tex5.mipmaps[2] = new THREE.TextureLoader().load(texture51);
    // tex5.mipmaps[3] = new THREE.TextureLoader().load(texture50);

    tex5.wrapS = THREE.RepeatWrapping;
    tex5.wrapT = THREE.RepeatWrapping;

    this.uniforms['texture53'] = {
      type: "t",
      value: tex5
    };


    tex4.wrapS = THREE.RepeatWrapping;
    tex4.wrapT = THREE.RepeatWrapping;

    this.uniforms['texture43'] = {
      type: "t",
      value: tex4
    };


    tex3.wrapS = THREE.RepeatWrapping;
    tex3.wrapT = THREE.RepeatWrapping;

    this.uniforms['texture33'] = {
      type: "t",
      value: tex3
    };


    tex2.wrapS = THREE.RepeatWrapping;
    tex2.wrapT = THREE.RepeatWrapping;

    this.uniforms['texture23'] = {
      type: "t",
      value: tex2
    };


    tex1.wrapS = THREE.RepeatWrapping;
    tex1.wrapT = THREE.RepeatWrapping;
    // tex1.repeat.set(10,10);
    this.uniforms['texture13'] = {
      type: "t",
      value: tex1
    };


    tex0.wrapS = THREE.RepeatWrapping;
    tex0.wrapT = THREE.RepeatWrapping;
    this.uniforms['texture03'] = {
      type: "t",
      value: tex0
    };

  }
  initScene() {
    if (!this.checkShader(vert, frag)) {
      this.setErrorScene();
      return;
    }
    this.scene.children = []; // remove all geometry
    this.setLight(this.light_setting);

    if (this.geometry == 0) {
      var outlineGeometry = new THREE.TeapotBufferGeometry(4, 32, 32);
      var geometry = new THREE.TeapotBufferGeometry(4, 32, 32);
      this.uniforms['repeat'] = {type: "vec2", value: new THREE.Vector2(2,2)};
    }
    else if (this.geometry == 1) {
      var outlineGeometry = new THREE.SphereBufferGeometry(5, 64, 64);
      var geometry = new THREE.SphereBufferGeometry(5, 32, 32);
      this.uniforms['repeat'] = {type: "vec2", value: new THREE.Vector2(10,10)};
    }

    else if (this.geometry == 2) {
      var outlineGeometry = new THREE.TorusBufferGeometry(5, 2, 50, 100);
      var geometry = new THREE.TorusBufferGeometry(5, 2, 50, 100);
      this.uniforms['repeat'] = {type: "vec2", value: new THREE.Vector2(10,10)};
    }
    else if (this.geometry == 3) {
      var outlineGeometry = new THREE.CylinderBufferGeometry(3, 3, 8, 64, 100);
      var geometry = new THREE.CylinderBufferGeometry(3, 3, 8, 64, 100);
      this.uniforms['repeat'] = {type: "vec2", value: new THREE.Vector2(10,10)};
    }

    // Outline
    const outlineMaterial = this.createShaderMaterial(vertOutline, fragOutline);
    const outline = new THREE.Mesh(outlineGeometry, outlineMaterial);
    this.scene.add(outline);

    const material = this.createShaderMaterial(vert, frag);
    this.material = material;
    const model = new THREE.Mesh(geometry, material);
    this.scene.add(model);
    this.scene.background = new THREE.Color( 0xffffff );


  update(dt) {
    return;
  }
}
