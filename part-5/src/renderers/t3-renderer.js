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

    var texture_set = 3;

    var tex5 = new THREE.TextureLoader().load(texture50);
    var tex4 = new THREE.TextureLoader().load(texture40);
    var tex3 = new THREE.TextureLoader().load(texture30);
    var tex2 = new THREE.TextureLoader().load(texture20);
    var tex1 = new THREE.TextureLoader().load(texture10);
    var tex0 = new THREE.TextureLoader().load(texture00);

    if (texture_set != 0) {
        if (texture_set == 1) {
            tex5 = new THREE.TextureLoader().load(texture51);
            tex4 = new THREE.TextureLoader().load(texture41);
            tex3 = new THREE.TextureLoader().load(texture31);
            tex2 = new THREE.TextureLoader().load(texture21);
            tex1 = new THREE.TextureLoader().load(texture11);
            tex0 = new THREE.TextureLoader().load(texture01);
        } else if (texture_set == 2) {
            tex5 = new THREE.TextureLoader().load(texture52);
            tex4 = new THREE.TextureLoader().load(texture42);
            tex3 = new THREE.TextureLoader().load(texture32);
            tex2 = new THREE.TextureLoader().load(texture22);
            tex1 = new THREE.TextureLoader().load(texture12);
            tex0 = new THREE.TextureLoader().load(texture02);
        } else if (texture_set == 3) {
            tex5 = new THREE.TextureLoader().load(texture53);
            tex4 = new THREE.TextureLoader().load(texture43);
            tex3 = new THREE.TextureLoader().load(texture33);
            tex2 = new THREE.TextureLoader().load(texture23);
            tex1 = new THREE.TextureLoader().load(texture13);
            tex0 = new THREE.TextureLoader().load(texture03);
        }
    }

    
    tex5.wrapS = THREE.RepeatWrapping;
    tex5.wrapT = THREE.RepeatWrapping;
    tex5.repeat.set(10,10);
    this.uniforms['texture53'] = {
      type: "t",
      value: tex5//new THREE.TextureLoader().load(texture)
    };

    tex5.mipmaps[0] = tex5;
    tex5.mipmaps[1] = new THREE.TextureLoader().load(texture52);
    tex5.mipmaps[2] = new THREE.TextureLoader().load(texture51);
    tex5.mipmaps[3] = new THREE.TextureLoader().load(texture50);

    
    tex4.wrapS = THREE.RepeatWrapping;
    tex4.wrapT = THREE.RepeatWrapping;
    tex4.repeat.set(10,10);
    this.uniforms['texture43'] = {
      type: "t",
      value: tex4//new THREE.TextureLoader().load(texture)
    };

    tex4.mipmaps[0] = tex4;
    tex4.mipmaps[1] = new THREE.TextureLoader().load(texture42);
    tex4.mipmaps[2] = new THREE.TextureLoader().load(texture41);
    tex4.mipmaps[3] = new THREE.TextureLoader().load(texture40);

 
    tex3.wrapS = THREE.RepeatWrapping;
    tex3.wrapT = THREE.RepeatWrapping;
    tex3.repeat.set(10,10);
    this.uniforms['texture33'] = {
      type: "t",
      value: tex3//new THREE.TextureLoader().load(texture)
    };

    tex3.mipmaps[0] = tex0;
    tex3.mipmaps[1] = new THREE.TextureLoader().load(texture02);
    tex3.mipmaps[2] = new THREE.TextureLoader().load(texture01);
    tex3.mipmaps[3] = new THREE.TextureLoader().load(texture00);

    
    tex2.wrapS = THREE.RepeatWrapping;
    tex2.wrapT = THREE.RepeatWrapping;
    tex2.repeat.set(10,10);
    this.uniforms['texture23'] = {
      type: "t",
      value: tex2//new THREE.TextureLoader().load(texture)
    };

    tex2.mipmaps[0] = tex2;
    tex2.mipmaps[1] = new THREE.TextureLoader().load(texture22).image;
    tex2.mipmaps[2] = new THREE.TextureLoader().load(texture21).image;
    tex2.mipmaps[3] = new THREE.TextureLoader().load(texture20);

    
    tex1.wrapS = THREE.RepeatWrapping;
    tex1.wrapT = THREE.RepeatWrapping;
    tex1.repeat.set(10,10);
    this.uniforms['texture13'] = {
      type: "t",
      value: tex1//new THREE.TextureLoader().load(texture)
    };

    tex1.mipmaps[0] = tex1;
    tex1.mipmaps[1] = new THREE.TextureLoader().load(texture12).image;
    tex1.mipmaps[2] = new THREE.TextureLoader().load(texture11);
    tex1.mipmaps[3] = new THREE.TextureLoader().load(texture10);

    
    tex0.wrapS = THREE.RepeatWrapping;
    tex0.wrapT = THREE.RepeatWrapping;
    tex0.repeat.set(10,10);
    this.uniforms['texture03'] = {
      type: "t",
      value: tex0//new THREE.TextureLoader().load(texture)
    };
    
    tex0.mipmaps[0] = tex1;
    tex0.mipmaps[1] = new THREE.TextureLoader().load(texture12).image;
    tex0.mipmaps[2] = new THREE.TextureLoader().load(texture11);
    tex0.mipmaps[3] = new THREE.TextureLoader().load(texture10);

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
    this.update_textures(this.texture_set);
    if (!this.focussed) {
      this.updateCamera(dt / 12000);
    }
  }
}
