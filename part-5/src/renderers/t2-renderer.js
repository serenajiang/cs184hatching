

import Renderer from '../lib/renderer';

import vert from '../shaders/task-3/texture.vert';
import frag from '../shaders/task-3/texture.frag';

import texture5 from '../textures/dick/50.png';
import texture4 from '../textures/dick/40.png';
import texture3 from '../textures/dick/30.png';
import texture2 from '../textures/dick/20.png';
import texture1 from '../textures/dick/10.png';
import texture0 from '../textures/dick/0.png';

var THREE = require('three')
var OrbitControls = require('three-orbit-controls')(THREE)

export default class extends Renderer {
  initScene() {
    if (!this.checkShader(vert, frag)) {
      this.setErrorScene();
      return;
    }

    // var controls = new OrbitControls(this.camera);
    // controls.addEventListener( 'change', light_update );
    //
    // function light_update()
    // {
    //     this.light.position.copy( this.camera.position );
    // }
    // this.updateCamera();
    var tex5 = new THREE.TextureLoader().load(texture5);
    tex5.wrapS = THREE.RepeatWrapping;
    tex5.wrapT = THREE.RepeatWrapping;
    tex5.repeat.set(10,10);
    this.uniforms['texture53'] = {
      type: "t",
      value: tex5//new THREE.TextureLoader().load(texture)
    };
    var tex4 = new THREE.TextureLoader().load(texture4);
    tex4.wrapS = THREE.RepeatWrapping;
    tex4.wrapT = THREE.RepeatWrapping;
    tex4.repeat.set(10,10);
    this.uniforms['texture43'] = {
      type: "t",
      value: tex4//new THREE.TextureLoader().load(texture)
    };
    var tex3 = new THREE.TextureLoader().load(texture3);
    tex3.wrapS = THREE.RepeatWrapping;
    tex3.wrapT = THREE.RepeatWrapping;
    tex3.repeat.set(10,10);
    this.uniforms['texture33'] = {
      type: "t",
      value: tex3//new THREE.TextureLoader().load(texture)
    };
    var tex2 = new THREE.TextureLoader().load(texture2);
    tex2.wrapS = THREE.RepeatWrapping;
    tex2.wrapT = THREE.RepeatWrapping;
    tex2.repeat.set(10,10);
    this.uniforms['texture23'] = {
      type: "t",
      value: tex2//new THREE.TextureLoader().load(texture)
    };
    var tex1 = new THREE.TextureLoader().load(texture1);
    tex1.wrapS = THREE.RepeatWrapping;
    tex1.wrapT = THREE.RepeatWrapping;
    tex1.repeat.set(10,10);
    this.uniforms['texture13'] = {
      type: "t",
      value: tex1//new THREE.TextureLoader().load(texture)
    };
    var tex0 = new THREE.TextureLoader().load(texture0);
    tex0.wrapS = THREE.RepeatWrapping;
    tex0.wrapT = THREE.RepeatWrapping;
    tex0.repeat.set(10,10);
    this.uniforms['texture03'] = {
      type: "t",
      value: tex0//new THREE.TextureLoader().load(texture)
    };

    this.setLight(false);

    var loader = new THREE.JSONLoader();
    loader.load('monkey.json', handle_load);
    function handle_load( geometry, material ) {
      var material = this.createShaderMaterial(vert, frag);
      var mesh = new THREE.Mesh(geometry, material);
      this.scene.add(mesh);
    }

    this.scene.background = new THREE.Color( 0xffffff );
  }

  update(dt) {
    if (!this.focussed) {
      this.updateCamera(dt / 12000);
    }
  }
}
