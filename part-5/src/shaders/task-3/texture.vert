attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 cameraPosition;
varying vec2 fUv;
varying vec3 fPosition;
varying vec3 fNormal;

void main() {
  fUv = uv;
  vec3 wPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  vec3 wNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
  // if (dot(wNormal, normalize(cameraPosition - wPosition)) < 0.0){
  //   wPosition += 0.15*wNormal;
  //   // gl_FrontColor = vec4(0,0,0,1.);
  // }
  fPosition = wPosition;
  fNormal = wNormal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(wPosition, 1.0);
}
