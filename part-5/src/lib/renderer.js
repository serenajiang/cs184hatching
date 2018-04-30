// import THREE from '../lib/three';
import dat from 'dat.gui';

import THREE from '../lib/three';
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

var OrbitControls = require('three-orbit-controls')(THREE)
class Renderer {

  importTextures() {
    var texture_set = 1;
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

    var tex5 = new THREE.TextureLoader().load(texture53);

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

  destroy() {
    this.detachListeners();
    this.view = null;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
  }

  setView(view) {
    this.view = view;
    this.width = view.width;
    this.height = view.height;
  }

  setStats(stats) {
    this.stats = stats;
  }

  attachListeners() {
    window.addEventListener   ('resize',      this.onresize);
    this.view.addEventListener('keydown',     this.onkeydown);
    this.view.addEventListener('keyup',       this.onkeyup);
    window.addEventListener('mousedown',   this.onmousedown);
    window.addEventListener('mouseup',     this.onmouseup);
    window.addEventListener('mousemove',   this.onmousemove);
    window.addEventListener('mousewheel', this.onMouseWheel);

  }

  detachListeners() {
    window.removeEventListener('resize',      this.onresize);
    this.view.addEventListener('keydown',     this.onkeydown);
    this.view.addEventListener('keyup',       this.onkeyup);
    window.addEventListener('mousedown',   this.onmousedown);
    window.addEventListener('mouseup',     this.onmouseup);
    window.addEventListener('mousemove',   this.onmousemove);

  }

  onresize = () => {
    this.width = this.view.width;
    this.height = this.view.height;
    this.renderer.setViewport(0, 0, this.width, this.height);
  };

  onkeydown = (e) => {
    if (e.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }
      switch (e.key) {
        case "0":
          this.texture_set = 0;
          this.update_textures(0);
          break;
        case "1":
          this.texture_set = 1;
          this.update_textures(1);
          break;
        case "2":
          this.texture_set = 2;
          break;
        default:
          return;
      }
    // Cancel the default action to avoid it being handled twice
    e.preventDefault();
  };

  onkeyup = (e) => { };

  onmousedown = (e) => {
    if (!this.view.contains(e.target)) {
      this.focussed = false;
      return;
    }
    this.focussed = true;
    this.inputState.mouse[e.button] = true;
    if (e.button === 0)
      this.inputState.lastMouse = [e.clientX, e.clientY];
  };

  onmouseup = (e) => {
    this.inputState.mouse[e.button] = false;
    if (e.button === 0)
      this.inputState.lastMouse = null;
  };

  onmousemove = (e) => {
    if (!this.inputState.mouse[0]) {
      return;
    }

    const x = e.clientX;
    const y = e.clientY;

    const dx = (x - this.inputState.lastMouse[0]) / this.view.width;
    const dy = (this.inputState.lastMouse[1] - y) / this.view.height;
    this.inputState.lastMouse = [x, y];
    this.updateCamera(dx, dy);


  };


  init() {
    this.uniforms = {
      time: { type: 'f', value: 0 }
    };
    this.importTextures();
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 1000);
    this.cameraState = {
      theta: 1.8,
      phi: 0,
      distance: 15,
    };
    this.camera.position.set( 10, 10, 10 );
    this.updateCamera();

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.view,
      antialias: true
    });
    this.renderer.setClearColor(new THREE.Color(0.078, 0.09, 0.11));
    // Light settings
    this.ambient = .3;
    this.diffuse = .75;
    this.specular = 0.;
    this.uniforms["ambient"] = {type: "f", value: this.ambient};
    this.uniforms["diffuse"] = {type: "f", value: this.diffuse};
    this.uniforms["specular"] = {type: "f", value: this.specular};
    this.inputState = {
      key: {},
      mouse: {},
      lastMouse: null
    };

    this.focussed = true;
    this.stats.setMode(0);
    this.light_setting = 0;
    this.geometry = 0;
    // Outline
    const outlineMaterial = this.createShaderMaterial(vertOutline, fragOutline);
    const outline = new THREE.Mesh(outlineGeometry, outlineMaterial);
    this.scene.add(outline);

    const material = this.createShaderMaterial(vert, frag);
    this.material = material;
    

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

    const model = new THREE.Mesh(geometry, material);
    this.scene.add(model);
    this.scene.background = new THREE.Color( 0xffffff );

    this.initGUI();
    this.attachListeners();
  }

  setErrorScene() {
    const sphereBuffer = new THREE.SphereBufferGeometry(5, 32, 32);
    const wireframe = new THREE.WireframeGeometry(sphereBuffer);
    const object = new THREE.LineSegments(wireframe);
    object.material.depthTest = false;
    this.scene.add(object);
  }

  setLight(setting,x=25, y=15, z=25, r=1, g=1, b=1) {

    // FOR LIGHT INDEPENDENT OF CAMERA
    if (setting == 0) {
      // const lGeometry = new THREE.BoxGeometry(1, 1, 1);
      // const lMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color(r, g, b) });
      // const light = new THREE.Mesh(lGeometry, lMaterial);
      const light = new THREE.PointLight( 0xffffff, 1 );
      light.position.set(25, 15, 25);

      this.light = light;
      this.uniforms['lPosition'] = {
        t: 'vec3',
        value: this.light.position
      };

      this.uniforms['lIntensity'] = {
        t: 'vec3',
        value: new THREE.Vector3(r * 1000, g * 1000, b * 1000)
      }
    }
    else {
    // FOR LIGHT ATTACHED TO CAMERA
      const light = new THREE.PointLight( 0xffffff, 1 );

      this.camera.add(light );
      this.scene.add(this.camera);
      this.light = light;
      this.uniforms['lPosition'] = {
        t: 'vec3',
        value: this.camera.position
      };

      this.uniforms['lIntensity'] = {
        t: 'vec3',
        value: new THREE.Vector3(r * 100, g * 100, b * 100)
      }
      this.updateCamera();
    }
  }

  initGUI() {
    var gui = new dat.GUI();
    gui.add(this, "light_setting", { 'Static': 0, 'Camera': 1 });
    gui.add(this, "geometry", {'Teapot': 0, 'Sphere': 1, "Torus" : 2, "Cylinder": 3});
    gui.add(this, "ambient", 0.0, 1.0);
    gui.add(this, "diffuse", 0.0, 1.0);
    gui.add(this, "specular", 0.0, 1.0);
    gui.add(this, "update_settings");
  }

  update_settings() {
    this.setLight();
    this.initScene();
  }


  begin() {
    this.sysLast = 0;
    this.onFrame(this.sysLast);
  }

  onFrame(t) {
    const dt = t - this.sysLast;
    this.stats.begin();
    if (dt >= 1000 / 30) {
      this.uniforms.time.value = t;
      this.update(dt);
      this.render();
      this.sysLast = t;
      this.stats.end();
    }
    requestAnimationFrame(t => this.onFrame(t));
  }

  createShaderMaterial(vertexShader, fragmentShader) {
    return new THREE.RawShaderMaterial( {
      uniforms: this.uniforms,
      vertexShader,
      fragmentShader
    });
  }

  updateCamera(dx=0, dy=0) {
    let { theta, phi, distance } = this.cameraState;

    theta = theta - dy * Math.PI;
    phi = (phi + dx * 2 * Math.PI) % (2 * Math.PI);

    if (theta > 3.14) {
      theta = 3.14;
    } else if (theta < .001) {
      theta = 0.001;
    }
    this.cameraState.theta = theta;
    this.cameraState.phi = phi;

    this.camera.position.y = distance * -Math.cos(theta);
    this.camera.position.x = distance * Math.cos(phi) * Math.sin(theta);
    this.camera.position.z = distance * Math.sin(phi) * Math.sin(theta);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
  }

  render() {
    this.refresh();
    this.material.uniforms.ambient.value = this.ambient;
    this.material.uniforms.specular.value = this.specular;
    this.material.uniforms.diffuse.value = this.diffuse;
    this.renderer.render(this.scene, this.camera);
  }

  refresh() {

    this.importTextures();
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 1000);
    this.cameraState = {
      theta: 1.8,
      phi: 0,
      distance: 15,
    };
    this.camera.position.set( 10, 10, 10 );
    this.updateCamera();

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.view,
      antialias: true
    });
    this.renderer.setClearColor(new THREE.Color(0.078, 0.09, 0.11));
    // Light settings
    this.ambient = .3;
    this.diffuse = .75;
    this.specular = 0.;
    this.uniforms["ambient"] = {type: "f", value: this.ambient};
    this.uniforms["diffuse"] = {type: "f", value: this.diffuse};
    this.uniforms["specular"] = {type: "f", value: this.specular};
    this.inputState = {
      key: {},
      mouse: {},
      lastMouse: null
    };

    this.focussed = true;
    this.stats.setMode(0);
    this.light_setting = 0;
    this.geometry = 0;
    // Outline
    const outlineMaterial = this.createShaderMaterial(vertOutline, fragOutline);
    const outline = new THREE.Mesh(outlineGeometry, outlineMaterial);
    this.scene.add(outline);

    const material = this.createShaderMaterial(vert, frag);
    this.material = material;
    

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

    const model = new THREE.Mesh(geometry, material);
    this.scene.add(model);
    this.scene.background = new THREE.Color( 0xffffff );
    this.attachListeners();
  }

  checkShader(vertSrc, fragSrc) {
    const gl = this.renderer.getContext();
    const vert = Renderer.compileShader(gl, vertSrc, gl.VERTEX_SHADER);
    if (vert === null) {
      return false;
    }
    const frag = Renderer.compileShader(gl, fragSrc, gl.FRAGMENT_SHADER);
    if (frag === null) {
      return false;
    }
    const prog = Renderer.createProgram(gl, vert, frag);
    if (prog === null) {
      return false;
    }
    gl.deleteShader(vert);
    gl.deleteShader(frag);
    gl.deleteProgram(prog);
    return true;
  }

  static compileShader(gl, shaderSource, shaderType) {
    const shader = gl.createShader(shaderType);
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);
    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!success) {
      console.log("could not compile shader:" + gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  static createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!success) {
      console.log("program filed to link:" + gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return null;
    }
    return program;
  };

  update_textures(i) { }
  update(dt) { }
}

export default Renderer;
