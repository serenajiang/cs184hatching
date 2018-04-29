#extension GL_OES_standard_derivatives : enable
precision highp float;

uniform sampler2D texture40;
uniform sampler2D texture41;
uniform sampler2D texture42;
uniform sampler2D texture43;
uniform sampler2D texture44;
uniform sampler2D texture45;
uniform sampler2D texture46;
uniform sampler2D texture47;

varying vec2 fUv;

uniform vec3 lPosition;
uniform vec3 lIntensity;
uniform vec3 cameraPosition;

varying vec3 fPosition;
varying vec3 fNormal;


void main() {
  vec2 dx_vtc = dFdx(fUv);
  vec2 dy_vtc = dFdy(fUv);
  float delta_max_sqr = max(dot(dx_vtc, dx_vtc), dot(dy_vtc, dy_vtc));
  float mipmaplevel = -0.5 * log2(delta_max_sqr);

  if (false) {
    gl_FragColor = texture2D(texture47, fUv);
  } else if (mipmaplevel < 0.) {
    float w = mipmaplevel - 0.;
    gl_FragColor = w*texture2D(texture40, fUv) + (1.-w)*texture2D(texture41, fUv);
  } else if (mipmaplevel < 2.) {
    float w = mipmaplevel - 1.;
    gl_FragColor = w*texture2D(texture41, fUv) + (1.-w)*texture2D(texture42, fUv);
  } else if (mipmaplevel < 3.) {
    float w = mipmaplevel - 2.;
    gl_FragColor = w*texture2D(texture42, fUv) + (1.-w)*texture2D(texture43, fUv);
  } else if (mipmaplevel < 4.) {
    float w = mipmaplevel - 3.;
    gl_FragColor = w*texture2D(texture43, fUv) + (1.-w)*texture2D(texture44, fUv);
  } else if (mipmaplevel < 5.) {
    float w = mipmaplevel - 4.;
    gl_FragColor = w*texture2D(texture44, fUv) + (1.-w)*texture2D(texture45, fUv);
  } else if (mipmaplevel < 6.) {
    float w = mipmaplevel - 5.;
    gl_FragColor = w*texture2D(texture45, fUv) + (1.-w)*texture2D(texture46, fUv);
  } else if (mipmaplevel < 7.) {
    float w = mipmaplevel - 6.;
    gl_FragColor = w*texture2D(texture46, fUv) + (1.-w)*texture2D(texture47, fUv);
  } else {
    gl_FragColor = texture2D(texture47, fUv);
  }
}
