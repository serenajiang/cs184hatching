precision highp float;

uniform sampler2D texture03;
uniform sampler2D texture13;
uniform sampler2D texture23;
uniform sampler2D texture33;
uniform sampler2D texture43;
uniform sampler2D texture53;
uniform sampler2D green;
varying vec2 fUv;

uniform vec3 lPosition;
uniform vec3 lIntensity;
uniform vec3 cameraPosition;

varying vec3 fPosition;
varying vec3 fNormal;


void main() {

  // vec3 h = normalize((lPosition - fPosition) + (cameraPosition - fPosition));
  // float r2 = distance(lPosition, fPosition) * distance(lPosition, fPosition);
  vec3 h = normalize((lPosition - fPosition) + (cameraPosition - fPosition));
  float r2 = distance(lPosition, fPosition) * distance(lPosition, fPosition);
  vec3 color = vec3(0.3,0.3,0.3)
  + 0.75 * lIntensity/r2 * max(0.0, dot(normalize(fNormal), normalize(lPosition)))
  + 0.00 * lIntensity/r2 * pow(max(0.0, dot(normalize(fNormal), h)), 60.0);
  float brightness = dot(color, vec3(1./3.,1./3.,1./3.));
  // gl_FragColor = vec4(color, 1);
  gl_FragColor = brightness * texture2D(green, fUv) +
                (1. - brightness) * texture2D(texture53, fUv);

}
