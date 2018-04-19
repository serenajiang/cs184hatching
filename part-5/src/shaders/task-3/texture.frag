precision highp float;

uniform sampler2D texture03;
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

  // vec3 h = normalize((lPosition - fPosition) + (cameraPosition - fPosition));
  // float r2 = distance(lPosition, fPosition) * distance(lPosition, fPosition);
  vec3 h = normalize((lPosition - fPosition) + (cameraPosition - fPosition));
  float r2 = distance(lPosition, fPosition) * distance(lPosition, fPosition);
  vec3 color = vec3(0.15,0.15,0.15)
  + 0.75 * lIntensity/r2 * max(0.0, dot(normalize(fNormal), normalize(lPosition)))
  + 0.4 * lIntensity/r2 * pow(max(0.0, dot(normalize(fNormal), h)), 60.0);
  float brightness = dot(color, vec3(1./3.,1./3.,1./3.)) * 5.;
  // gl_FragColor = vec4(color, 1);
  brightness = min(brightness, 6.0);


  if (brightness <= 1.) {
    gl_FragColor = (1.-brightness)*texture2D(texture53, fUv) + brightness*texture2D(texture43, fUv);
  }
  else if (brightness <= 2.){
    gl_FragColor = (2.-brightness)*texture2D(texture43, fUv) + (brightness-1.)*texture2D(texture33, fUv);
  }
  else if (brightness <= 3.){
    gl_FragColor = (3.-brightness)*texture2D(texture33, fUv) + (brightness-2.)*texture2D(texture23, fUv);
  }
  else if (brightness <= 4.){
    gl_FragColor = (4.-brightness)*texture2D(texture23, fUv) + (brightness-3.)*texture2D(texture13, fUv);
  }
  else if (brightness <= 5.){
    gl_FragColor = (5.-brightness)*texture2D(texture13, fUv) + (brightness-4.)*texture2D(texture03, fUv);
  }
  else if (brightness <= 6.){
    gl_FragColor = (6.-brightness)*texture2D(texture03, fUv) + (brightness-5.)*1.1*vec4(1,1,1,1);
  }

}
