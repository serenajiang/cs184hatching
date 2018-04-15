precision highp float;

uniform sampler2D texture13;
uniform sampler2D texture23;
uniform sampler2D texture33;
uniform sampler2D texture43;
uniform sampler2D texture53;
varying vec2 fUv;

uniform vec3 lPosition;
uniform vec3 lIntensity;
uniform vec3 cameraPosition;

varying vec3 fPosition;
varying vec3 fNormal;

void main() {
  vec3 h = normalize((lPosition - fPosition) + (cameraPosition - fPosition));
  float r2 = distance(lPosition, fPosition) * distance(lPosition, fPosition);
  vec3 color = vec3(0.3,0.3,0.3)
  + 0.6 * lIntensity/r2 * max(0.0, dot(normalize(fNormal), normalize(lPosition)))
  + 0.4 * lIntensity/r2 * pow(max(0.0, dot(normalize(fNormal), h)), 50.0);
  float brightness = dot(color, vec3(1.,0.,0.));
  if (brightness < .2) {
    gl_FragColor = texture2D(texture53, fUv);
  } else if (brightness < .4){
    gl_FragColor = texture2D(texture43, fUv);
  } else if (brightness < .6){
    gl_FragColor = texture2D(texture33, fUv);
  } else if (brightness < .8){
    gl_FragColor = texture2D(texture23, fUv);
  } else {
    gl_FragColor = texture2D(texture13, fUv);
  }

}
