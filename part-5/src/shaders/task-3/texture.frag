precision highp float;

uniform sampler2D texture13;
uniform sampler2D texture43;
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

  if (dot(color, vec3(1.,0.,0.)) > 0.) {
    gl_FragColor = texture2D(texture13, fUv);
  } else {
    gl_FragColor = texture2D(texture43, fUv);
  }

}
