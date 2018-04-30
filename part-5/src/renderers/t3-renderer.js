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

import level1 from '../textures/thngies/mipmaps/tone_4_level_1.png';
import level2 from '../textures/thngies/mipmaps/tone_4_level_2.png';
import level3 from '../textures/thngies/mipmaps/tone_4_level_3.png';
import level4 from '../textures/thngies/mipmaps/tone_4_level_4.png';
import level5 from '../textures/thngies/mipmaps/tone_4_level_5.png';
import level6 from '../textures/thngies/mipmaps/tone_4_level_6.png';
import level7 from '../textures/thngies/mipmaps/tone_4_level_7.png';
import level8 from '../textures/thngies/mipmaps/tone_4_level_8.png';
import level9 from '../textures/thngies/mipmaps/tone_4_level_9.png';

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

    var texture_set = 4;
    //set num_levels between 1 and 6 for how many tones you want
    var num_levels = 6.0;
    this.uniforms['numLevels'] = { value: num_levels };

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
        } else if (texture_set == 4) {
            tex5 = new THREE.TextureLoader().load(texture56);
            tex4 = new THREE.TextureLoader().load(texture46);
            tex3 = new THREE.TextureLoader().load(texture36);
            tex2 = new THREE.TextureLoader().load(texture26);
            tex1 = new THREE.TextureLoader().load(texture16);
            tex0 = new THREE.TextureLoader().load(texture06);
        }
    }

    
    tex5.wrapS = THREE.RepeatWrapping;
    tex5.wrapT = THREE.RepeatWrapping;
    tex5.repeat.set(10,10);
    this.uniforms['texture53'] = {
      type: "t",
      value: tex5//new THREE.TextureLoader().load(texture)
    };
    
    tex4.wrapS = THREE.RepeatWrapping;
    tex4.wrapT = THREE.RepeatWrapping;
    tex4.repeat.set(10,10);

    /*
    tex4.mipmaps[0] = level1;
    tex4.mipmaps[1] = level2;
    tex4.mipmaps[2] = level3;
    tex4.mipmaps[3] = level4;
    tex4.mipmaps[4] = level5;
    tex4.mipmaps[5] = level6;
    tex4.mipmaps[6] = level7;
    tex4.mipmaps[7] = level8;
    tex4.mipmaps[8] = level9;
    

                function mipmap( size, level) {
                    var imageCanvas = document.createElement( "canvas" ),
                        context = imageCanvas.getContext( "2d" );
                    if (level == 0) {
                        var pat = context.createPattern(texture40, "repeat");
                    } else if (level == 1) {
                        var pat = context.createPattern(level1, "repeat");
                    } else if (level == 2) {
                        var pat = context.createPattern(level2, "repeat");
                    } else if (level == 3) {
                        var pat = context.createPattern(level3, "repeat");
                    } else if (level == 4) {
                        var pat = context.createPattern(level4, "repeat");
                    } else if (level == 5) {
                        var pat = context.createPattern(level5, "repeat");
                    } else if (level == 6) {
                        var pat = context.createPattern(level6, "repeat");
                    } else if (level == 7) {
                        var pat = context.createPattern(level7, "repeat");
                    } else if (level == 8) {
                        var pat = context.createPattern(level8, "repeat");
                    } else if (level == 9) {
                        var pat = context.createPattern(level9, "repeat");
                    }
                    
                    imageCanvas.width = imageCanvas.height = size;

                    context.fillStyle = pat;
                    context.fillRect( 0, 0, size, size );
                    context.fill();
                    return imageCanvas;
                }
                var canvas = mipmap( 512, 0);
                tex4 = new THREE.CanvasTexture( canvas );
                tex4.mipmaps[ 0 ] = canvas;
                tex4.mipmaps[ 1 ] = mipmap( 256, 1);
                tex4.mipmaps[ 2 ] = mipmap( 128, 2);
                tex4.mipmaps[ 3 ] = mipmap( 64, 3);
                tex4.mipmaps[ 4 ] = mipmap( 32, 4);
                tex4.mipmaps[ 5 ] = mipmap( 16, 5);
                tex4.mipmaps[ 6 ] = mipmap( 8, 6);
                tex4.mipmaps[ 7 ] = mipmap( 4, 7);
                tex4.mipmaps[ 8 ] = mipmap( 2, 8);
                tex4.mipmaps[ 9 ] = mipmap( 1, 9);
                tex4.repeat.set( 1000, 1000 );
                tex4.wrapS = THREE.RepeatWrapping;
                tex4.wrapT = THREE.RepeatWrapping;
    */

    this.uniforms['texture43'] = {
      type: "t",
      value: tex4//new THREE.TextureLoader().load(texture)
    };
    

 
    tex3.wrapS = THREE.RepeatWrapping;
    tex3.wrapT = THREE.RepeatWrapping;
    tex3.repeat.set(10,10);
    this.uniforms['texture33'] = {
      type: "t",
      value: tex3//new THREE.TextureLoader().load(texture)
    };

    
    tex2.wrapS = THREE.RepeatWrapping;
    tex2.wrapT = THREE.RepeatWrapping;
    tex2.repeat.set(10,10);
    this.uniforms['texture23'] = {
      type: "t",
      value: tex2//new THREE.TextureLoader().load(texture)
    };

    
    tex1.wrapS = THREE.RepeatWrapping;
    tex1.wrapT = THREE.RepeatWrapping;
    tex1.repeat.set(10,10);
    this.uniforms['texture13'] = {
      type: "t",
      value: tex1//new THREE.TextureLoader().load(texture)
    };

    
    tex0.wrapS = THREE.RepeatWrapping;
    tex0.wrapT = THREE.RepeatWrapping;
    tex0.repeat.set(10,10);
    this.uniforms['texture03'] = {
      type: "t",
      value: tex0//new THREE.TextureLoader().load(texture)
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
    this.update_textures(this.texture_set);
    if (!this.focussed) {
      this.updateCamera(dt / 12000);
    }
  }
}
