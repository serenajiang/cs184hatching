import THREE from '../lib/three';
import Renderer from '../lib/renderer';

import vert from '../shaders/task-3/texture.vert';
import frag from '../shaders/task-3/texture.frag';

import texture5 from '../textures/test/ayy53.bmp';
import texture4 from '../textures/test/ayy43.bmp';
import texture3 from '../textures/test/ayy33.bmp';
import texture2 from '../textures/test/ayy23.bmp';
import texture1 from '../textures/test/ayy13.bmp';

export default class extends Renderer {
  initScene() {
    if (!this.checkShader(vert, frag)) {
      this.setErrorScene();
      return;
    }
    this.setLight();
    var tex5 = new THREE.TextureLoader().load(texture5);
    this.uniforms['texture53'] = {
      type: "t",
      value: tex5//new THREE.TextureLoader().load(texture)
    };
    var tex4 = new THREE.TextureLoader().load(texture4);
    this.uniforms['texture43'] = {
      type: "t",
      value: tex4//new THREE.TextureLoader().load(texture)
    };
    var tex3 = new THREE.TextureLoader().load(texture3);
    this.uniforms['texture33'] = {
      type: "t",
      value: tex3//new THREE.TextureLoader().load(texture)
    };
    var tex2 = new THREE.TextureLoader().load(texture2);
    this.uniforms['texture23'] = {
      type: "t",
      value: tex2//new THREE.TextureLoader().load(texture)
    };
    var tex1 = new THREE.TextureLoader().load(texture1);
    this.uniforms['texture13'] = {
      type: "t",
      value: tex1//new THREE.TextureLoader().load(texture)
    };

    //const geometry = new THREE.SphereGeometry(5, 32, 32);
    const geometry = new THREE.TeapotBufferGeometry(4, 32, 32);
    const material = this.createShaderMaterial(vert, frag);
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);
  }

  update(dt) {
    if (!this.focussed) {
      this.updateCamera(dt / 12000);
    }
  }
}
