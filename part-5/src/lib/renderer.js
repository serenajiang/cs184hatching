// import THREE from '../lib/three';
import dat from 'dat.gui';
var THREE = require('three')
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

    this.uniforms = {
      time: { type: 'f', value: 0 },
      ambient: {type: "f", value: this.ambient},
      diffuse: {type: "f", value: this.diffuse},
      specular: {type: "f", value: this.specular},
    };

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
    this.renderer.setClearColor(new THREE.Color(0.078, 0.09, 0.11));
    this.inputState = {
      key: {},
      mouse: {},
      lastMouse: null
    };

    this.addLight();
    this.initMaterials();
    this.addMesh();
    this.initGUI();
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
    gui.add(this, "texture_setting", {'Lines': 0, "Lines 2": 1});
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
    this.material.uniforms.ambient.value = this.ambient;
    this.material.uniforms.specular.value = this.specular;
    this.material.uniforms.diffuse.value = this.diffuse;
    this.material.uniforms.textures.value = this.textures[this.texture_setting];
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

  initScene() { }
  update_textures(i) { }
  update(dt) { }
}

export default Renderer;
