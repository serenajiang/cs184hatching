RepeatWrapping// import THREE from '../lib/three';
import Renderer from '../lib/renderer';
import vert from '../shaders/task-3/texture.vert';
import frag from '../shaders/task-3/texture.frag';
import vertOutline from '../shaders/task-3/textureOutline.vert';
import fragOutline from '../shaders/task-3/textureOutline.frag';
import texture00 from "../textures/pencil/0.png";
import texture01 from "../textures/pencil/0.png";
import texture02 from "../textures/pencil/0.png";
import texture03 from "../textures/pencil/0.png";
import texture04 from "../textures/pencil/0.png";
import texture05 from "../textures/pencil/0.png";
import texture06 from "../textures/pencil/0.png";
import texture07 from "../textures/pencil/0.png";
import texture08 from "../textures/pencil/0.png";
import texture09 from "../textures/pencil/0.png";
import texture10 from "../textures/pencil/10.png";
import texture11 from "../textures/pencil/11.png";
import texture12 from "../textures/pencil/12.png";
import texture13 from "../textures/pencil/13.png";
import texture14 from "../textures/pencil/14.png";
import texture15 from "../textures/pencil/15.png";
import texture16 from "../textures/pencil/16.png";
import texture17 from "../textures/pencil/17.png";
import texture18 from "../textures/pencil/18.png";
import texture20 from "../textures/pencil/20.png";
import texture21 from "../textures/pencil/21.png";
import texture22 from "../textures/pencil/22.png";
import texture23 from "../textures/pencil/23.png";
import texture24 from "../textures/pencil/24.png";
import texture25 from "../textures/pencil/25.png";
import texture26 from "../textures/pencil/26.png";
import texture27 from "../textures/pencil/27.png";
import texture28 from "../textures/pencil/28.png";
import texture30 from "../textures/pencil/30.png";
import texture31 from "../textures/pencil/31.png";
import texture32 from "../textures/pencil/32.png";
import texture33 from "../textures/pencil/33.png";
import texture34 from "../textures/pencil/34.png";
import texture35 from "../textures/pencil/35.png";
import texture36 from "../textures/pencil/36.png";
import texture37 from "../textures/pencil/37.png";
import texture38 from "../textures/pencil/38.png";
import texture40 from "../textures/pencil/40.png";
import texture41 from "../textures/pencil/41.png";
import texture42 from "../textures/pencil/42.png";
import texture43 from "../textures/pencil/43.png";
import texture44 from "../textures/pencil/44.png";
import texture45 from "../textures/pencil/45.png";
import texture46 from "../textures/pencil/46.png";
import texture47 from "../textures/pencil/47.png";
import texture48 from "../textures/pencil/48.png";
import texture50 from "../textures/pencil/50.png";
import texture51 from "../textures/pencil/51.png";
import texture52 from "../textures/pencil/52.png";
import texture53 from "../textures/pencil/53.png";
import texture54 from "../textures/pencil/54.png";
import texture55 from "../textures/pencil/55.png";
import texture56 from "../textures/pencil/56.png";
import texture57 from "../textures/pencil/57.png";
import texture58 from "../textures/pencil/58.png";

import crosstexture00 from "../textures/test/ayy00.bmp";
import crosstexture01 from "../textures/test/ayy01.bmp";
import crosstexture02 from "../textures/test/ayy02.bmp";
import crosstexture03 from "../textures/test/ayy03.bmp";
import crosstexture10 from "../textures/test/ayy00.bmp";
import crosstexture11 from "../textures/test/ayy11.bmp";
import crosstexture12 from "../textures/test/ayy12.bmp";
import crosstexture13 from "../textures/test/ayy13.bmp";
import crosstexture30 from "../textures/test/ayy30.bmp";
import crosstexture31 from "../textures/test/ayy31.bmp";
import crosstexture32 from "../textures/test/ayy32.bmp";
import crosstexture33 from "../textures/test/ayy33.bmp";
import crosstexture40 from "../textures/test/ayy40.bmp";
import crosstexture41 from "../textures/test/ayy41.bmp";
import crosstexture42 from "../textures/test/ayy42.bmp";
import crosstexture43 from "../textures/test/ayy43.bmp";

var THREE = require('three')

export default class extends Renderer {
  initMaterials() {
    // if (!this.checkShader(vert, frag)) {
    //   this.setErrorScene();
    //   return;
    // }

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

    var crosstex00 = new THREE.TextureLoader().load(crosstexture00);
    var crosstex01 = new THREE.TextureLoader().load(crosstexture01);
    var crosstex02 = new THREE.TextureLoader().load(crosstexture02);
    var crosstex03 = new THREE.TextureLoader().load(crosstexture03);
    var crosstex10 = new THREE.TextureLoader().load(crosstexture10);
    var crosstex11 = new THREE.TextureLoader().load(crosstexture11);
    var crosstex12 = new THREE.TextureLoader().load(crosstexture12);
    var crosstex13 = new THREE.TextureLoader().load(crosstexture13);
    var crosstex30 = new THREE.TextureLoader().load(crosstexture30);
    var crosstex31 = new THREE.TextureLoader().load(crosstexture31);
    var crosstex32 = new THREE.TextureLoader().load(crosstexture32);
    var crosstex33 = new THREE.TextureLoader().load(crosstexture33);
    var crosstex40 = new THREE.TextureLoader().load(crosstexture40);
    var crosstex41 = new THREE.TextureLoader().load(crosstexture41);
    var crosstex42 = new THREE.TextureLoader().load(crosstexture42);
    var crosstex43 = new THREE.TextureLoader().load(crosstexture43);



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

    tex00.wrapS = THREE.RepeatWrapping;
    tex01.wrapS = THREE.RepeatWrapping;
    tex02.wrapS = THREE.RepeatWrapping;
    tex03.wrapS = THREE.RepeatWrapping;
    tex04.wrapS = THREE.RepeatWrapping;
    tex05.wrapS = THREE.RepeatWrapping;
    tex06.wrapS = THREE.RepeatWrapping;
    tex07.wrapS = THREE.RepeatWrapping;
    tex08.wrapS = THREE.RepeatWrapping;
    tex10.wrapS = THREE.RepeatWrapping;
    tex11.wrapS = THREE.RepeatWrapping;
    tex12.wrapS = THREE.RepeatWrapping;
    tex13.wrapS = THREE.RepeatWrapping;
    tex14.wrapS = THREE.RepeatWrapping;
    tex15.wrapS = THREE.RepeatWrapping;
    tex16.wrapS = THREE.RepeatWrapping;
    tex17.wrapS = THREE.RepeatWrapping;
    tex18.wrapS = THREE.RepeatWrapping;
    tex20.wrapS = THREE.RepeatWrapping;
    tex21.wrapS = THREE.RepeatWrapping;
    tex22.wrapS = THREE.RepeatWrapping;
    tex23.wrapS = THREE.RepeatWrapping;
    tex24.wrapS = THREE.RepeatWrapping;
    tex25.wrapS = THREE.RepeatWrapping;
    tex26.wrapS = THREE.RepeatWrapping;
    tex27.wrapS = THREE.RepeatWrapping;
    tex28.wrapS = THREE.RepeatWrapping;
    tex30.wrapS = THREE.RepeatWrapping;
    tex31.wrapS = THREE.RepeatWrapping;
    tex32.wrapS = THREE.RepeatWrapping;
    tex33.wrapS = THREE.RepeatWrapping;
    tex34.wrapS = THREE.RepeatWrapping;
    tex35.wrapS = THREE.RepeatWrapping;
    tex36.wrapS = THREE.RepeatWrapping;
    tex37.wrapS = THREE.RepeatWrapping;
    tex38.wrapS = THREE.RepeatWrapping;
    tex40.wrapS = THREE.RepeatWrapping;
    tex41.wrapS = THREE.RepeatWrapping;
    tex42.wrapS = THREE.RepeatWrapping;
    tex43.wrapS = THREE.RepeatWrapping;
    tex44.wrapS = THREE.RepeatWrapping;
    tex45.wrapS = THREE.RepeatWrapping;
    tex46.wrapS = THREE.RepeatWrapping;
    tex47.wrapS = THREE.RepeatWrapping;
    tex48.wrapS = THREE.RepeatWrapping;
    tex50.wrapS = THREE.RepeatWrapping;
    tex51.wrapS = THREE.RepeatWrapping;
    tex52.wrapS = THREE.RepeatWrapping;
    tex53.wrapS = THREE.RepeatWrapping;
    tex54.wrapS = THREE.RepeatWrapping;
    tex55.wrapS = THREE.RepeatWrapping;
    tex56.wrapS = THREE.RepeatWrapping;
    tex57.wrapS = THREE.RepeatWrapping;
    tex58.wrapS = THREE.RepeatWrapping;

    crosstex00.minFilter = THREE.LinearFilter;
    crosstex01.minFilter = THREE.LinearFilter;
    crosstex02.minFilter = THREE.LinearFilter;
    crosstex03.minFilter = THREE.LinearFilter;
    crosstex10.minFilter = THREE.LinearFilter;
    crosstex11.minFilter = THREE.LinearFilter;
    crosstex12.minFilter = THREE.LinearFilter;
    crosstex13.minFilter = THREE.LinearFilter;
    crosstex30.minFilter = THREE.LinearFilter;
    crosstex31.minFilter = THREE.LinearFilter;
    crosstex32.minFilter = THREE.LinearFilter;
    crosstex33.minFilter = THREE.LinearFilter;
    crosstex40.minFilter = THREE.LinearFilter;
    crosstex41.minFilter = THREE.LinearFilter;
    crosstex42.minFilter = THREE.LinearFilter;
    crosstex43.minFilter = THREE.LinearFilter;

    // crosstex00.wrapS = THREE.LinearFilter;
    // crosstex01.wrapS = THREE.LinearFilter;
    // crosstex02.wrapS = THREE.LinearFilter;
    // crosstex03.wrapS = THREE.LinearFilter;
    // crosstex10.wrapS = THREE.LinearFilter;
    // crosstex11.wrapS = THREE.LinearFilter;
    // crosstex12.wrapS = THREE.LinearFilter;
    // crosstex13.wrapS = THREE.LinearFilter;
    // crosstex30.wrapS = THREE.LinearFilter;
    // crosstex31.wrapS = THREE.LinearFilter;
    // crosstex32.wrapS = THREE.LinearFilter;
    // crosstex33.wrapS = THREE.LinearFilter;
    // crosstex40.wrapS = THREE.LinearFilter;
    // crosstex41.wrapS = THREE.LinearFilter;
    // crosstex42.wrapS = THREE.LinearFilter;
    // crosstex43.wrapS = THREE.LinearFilter;
    // Add a new 16x16 array of textures for more textures
    this.textures = [
                    [crosstex00,crosstex01,crosstex02,crosstex03,
                    crosstex10,crosstex11,crosstex12,crosstex13,
                    crosstex30,crosstex31,crosstex32,crosstex33,
                    crosstex40,crosstex41,crosstex42,crosstex43],

                    [tex03,tex05,tex06,tex08,
                    tex13,tex15,tex16,tex18,
                    tex32,tex35,tex36,tex37,
                    tex43,tex45,tex46,tex48],
                  ];
    this.uniforms['textures'] = {
      value: this.textures[0]
    }
    this.outline_material = this.createShaderMaterial(vertOutline, fragOutline);
    this.material = this.createShaderMaterial(vert, frag);
  }
  update(dt) {
    return;
  }
}
