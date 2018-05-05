precision highp float;

uniform sampler2D texture03;
uniform sampler2D texture13;
uniform sampler2D texture23;
uniform sampler2D texture33;
uniform sampler2D texture43;
uniform sampler2D texture53;
uniform sampler2D charcoal;
varying vec2 fUv;

uniform vec3 lPosition;
uniform vec3 lIntensity;
uniform vec3 cameraPosition;

varying vec3 fPosition;
varying vec3 fNormal;


void main() {

  if (dot(fNormal, normalize(cameraPosition - fPosition)) < 0.0) {
    vec3 col = vec3(texture2D(charcoal, fUv*10.0));
    gl_FragColor = vec4(col, 1. - dot(col, vec3(.333)));
  }

}
