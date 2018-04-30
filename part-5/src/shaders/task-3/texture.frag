precision highp float;

uniform sampler2D texture03;
uniform sampler2D texture13;
uniform sampler2D texture23;
uniform sampler2D texture33;
uniform sampler2D texture43;
uniform sampler2D texture53;
uniform float ambient;
uniform float diffuse;
uniform float specular;
uniform float numLevels;
varying vec2 fUv;

uniform vec3 lPosition;
uniform vec3 lIntensity;
uniform vec3 cameraPosition;

varying vec3 fPosition;
varying vec3 fNormal;


void main() {

  vec3 lPos_mod = lPosition;
  vec3 h = normalize((lPos_mod - fPosition) + (cameraPosition - fPosition));
  float r2 = distance(lPos_mod, fPosition) * distance(lPos_mod, fPosition);
  vec3 amb_term = vec3(ambient);
  vec3 color = amb_term
  + diffuse * lIntensity/r2 * max(0.0, dot(normalize(fNormal), normalize(lPos_mod)))
  + specular * lIntensity/r2 * pow(max(0.0, dot(normalize(fNormal), h)), 60.0);
  float brightness = dot(color, vec3(1./3.,1./3.,1./3.));

  float minB = dot(amb_term, vec3(1./3.,1./3.,1./3.));
  float maxB = dot(amb_term + diffuse * (lIntensity/r2) + specular * (lIntensity/r2), vec3(1./3.,1./3.,1./3.));
  float percent_bright = (brightness - minB) / (maxB - minB);

  float incr = 1.0 / numLevels;

  if (percent_bright <= incr) {
    float rat = (percent_bright - incr)/0.1;
    gl_FragColor = (1.-rat)*texture2D(texture53, fUv) + rat*texture2D(texture43, fUv);
  }
  else if (numLevels >= 2.0 && percent_bright <= 2.0*incr) {
    float rat = (percent_bright - 0.34)/0.1;
    gl_FragColor = (1.-rat)*texture2D(texture43, fUv) + (rat)*texture2D(texture33, fUv);
  }
  else if (numLevels >= 3.0 && percent_bright <= 3.0*incr) {
    float rat = (percent_bright - 0.56)/0.1;
    gl_FragColor = (1.-rat)*texture2D(texture33, fUv) + (rat)*texture2D(texture23, fUv);
  }
  else if (numLevels >= 4.0 && percent_bright <= 4.0*incr) {
    float rat = (percent_bright - 0.73)/0.1;
    gl_FragColor = (1.-rat)*texture2D(texture23, fUv) + (rat)*texture2D(texture13, fUv);
  }
  else if (numLevels >= 5.0 && percent_bright <= 5.0*incr) {
    float rat = (percent_bright - 0.9)/0.1;
    gl_FragColor = (1.-rat)*texture2D(texture13, fUv) + (rat)*texture2D(texture03, fUv);
  }
  else {
    if (numLevels >= 6.0) {
      float rat = (percent_bright - 1.0)/0.1;
      gl_FragColor = (1.-rat)*texture2D(texture03, fUv) + (rat)*vec4(1.,1.,1.,1.);
    }
  }
}


// if (dot(fNormal, normalize(cameraPosition - fPosition)) < 0.0) {
//   gl_FragColor = vec4(.5, .5, .5 ,1);
// }
// else if (brightness <= 0.4) {
//   float rat = (brightness - .3)/0.1;
//   gl_FragColor = texture2D(texture53, fUv);
// }
// else if (brightness <= 0.5){
//   float rat = (brightness - 0.4)/0.1;
//   gl_FragColor = texture2D(texture43, fUv);
// }
// else if (brightness <= 0.6){
//   float rat = (brightness - 0.5)/0.1;
//   gl_FragColor = texture2D(texture33, fUv);
// }
// else if (brightness <= 0.7){
//   float rat = (brightness - 0.6)/0.1;
//   gl_FragColor = texture2D(texture23, fUv);
// }
// else if (brightness <= 0.8){
//   float rat = (brightness - 0.7)/0.1;
//   gl_FragColor = texture2D(texture13, fUv);
// }
// else {
//   float rat = (brightness - 0.8)/0.2;
//   gl_FragColor = texture2D(texture03, fUv);// }
// }
//}
