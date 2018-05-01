import THREE from '../lib/three';
import dat from 'dat.gui';
import vert from '../shaders/task-3/texture.vert';
import frag from '../shaders/task-3/mipmaptest.frag';
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


class Renderer {

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
    this.geometries = [
      new THREE.TeapotBufferGeometry(4, 32, 32),
      new THREE.SphereBufferGeometry(5, 64, 64),
      new THREE.TorusBufferGeometry(5, 2, 50, 100),
      new THREE.CylinderBufferGeometry(3, 3, 8, 64, 100),
    ]
    this.outlines = [
      new THREE.TeapotBufferGeometry(4, 32, 32),
      new THREE.SphereBufferGeometry(5, 64, 64),
      new THREE.TorusBufferGeometry(5, 2, 50, 100),
      new THREE.CylinderBufferGeometry(3, 3, 8, 64, 100),
    ]
    this.focussed = true;
    this.stats.setMode(0);
    this.light_setting = 0;
    this.geometry_setting = 0;
    this.geometry = null;
    this.outline_geometry = null;
    this.mesh = null;
    this.outline_mesh = null;
    this.light = null;
    this.textures = null;
    this.texture_setting = 0;
    this.ambient = .3;
    this.diffuse = .75;
    this.specular = 0.05;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( 0xffffff );
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
    this.initMaterials();

    this.uniforms = {
      time: { type: 'f', value: 0 },
      ambient: {type: "f", value: this.ambient},
      diffuse: {type: "f", value: this.diffuse},
      specular: {type: "f", value: this.specular},
    };

    

    

    this.addLight();
    
    this.addMesh();
    this.initGUI();

    this.renderer.setClearColor(new THREE.Color(0.078, 0.09, 0.11));
    this.inputState = {
      key: {},
      mouse: {},
      lastMouse: null
    };

    this.attachListeners();
  }

  addMesh() {
    if (this.mesh !== null) {
      this.scene.remove(this.mesh);
      this.scene.remove(this.outline_mesh);
      this.geometry.dispose();
      this.outline_geometry.dispose();
    }

    this.geometry = this.geometries[this.geometry_setting];
    this.outline_geometry = this.outlines[this.geometry_setting];

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.outline_mesh = new THREE.Mesh(this.outline_geometry, this.outline_material);

    this.scene.add(this.mesh);
    this.scene.add(this.outline_mesh);
  }

  setErrorScene() {
    const sphereBuffer = new THREE.SphereBufferGeometry(5, 32, 32);
    const wireframe = new THREE.WireframeGeometry(sphereBuffer);
    const object = new THREE.LineSegments(wireframe);
    object.material.depthTest = false;
    this.scene.add(object);
  }

  addLight() {
      if (this.light !== null) {
        this.scene.remove(this.light);
      }
      if (this.light_setting == 0) {
        this.light = new THREE.PointLight( 0xffffff, 1 );
        this.light.position.set(25, 15, 25);

        this.uniforms['lPosition'] = {
          t: 'vec3',
          value: this.light.position
        };

        this.uniforms['lIntensity'] = {
          t: 'vec3',
          value: new THREE.Vector3(800, 800, 800)
        }
    }
    else if (this.light_setting == 1) {

      this.light = new THREE.PointLight( 0xffffff, 1 );
      this.camera.add(this.light );
      this.scene.add(this.camera);
      this.uniforms['lPosition'] = {
        t: 'vec3',
        value: this.camera.position
      };

      this.uniforms['lIntensity'] = {
        t: 'vec3',
        value: new THREE.Vector3(85, 85, 85)
      }
      this.updateCamera();
    }
  }

  initGUI() {
    var gui = new dat.GUI();
    var that = this;
    gui.add(this, "light_setting", { 'Static': 0, 'Camera': 1 }).onChange( function(value) {
      that.addLight();
    });
    gui.add(this, 'geometry_setting', {'Teapot': 0, 'Sphere': 1, "Torus" : 2, "Cylinder": 3}).onChange( function( value ) {
					that.addMesh();
				} );
    gui.add(this, "ambient", 0.0, 1.0);
    gui.add(this, "diffuse", 0.0, 1.0);
    gui.add(this, "specular", 0.0, 1.0);
    // Change the name
    gui.add(this, "texture_setting", {'Lines': 0, "CHANGE_THIS": 1});
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
    if (this.material) {
      this.material.uniforms.ambient.value = this.ambient;
      this.material.uniforms.specular.value = this.specular;
      this.material.uniforms.diffuse.value = this.diffuse;
      this.material.uniforms.textures.value = this.textures[this.texture_setting];
    }
    this.renderer.render(this.scene, this.camera);
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

  initMaterials() {
    if (!this.checkShader(vert, frag)) {
      this.setErrorScene();
      return;
    }

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
    // Add a new 16x16 array of textures for more textures
    this.textures = [
                    [tex03,tex05,tex06,tex08,
                    tex13,tex15,tex16,tex18,
                    tex43,tex45,tex46,tex48,
                    tex53,tex55,tex56,tex58],
                  ];
    this.uniforms['textures'] = {
      value: this.textures[0]
    }

    this.outline_material = this.createShaderMaterial(vertOutline, fragOutline);
    this.material = this.createShaderMaterial(vert, frag);
  }

  update(dt) { }
}

export default Renderer;
