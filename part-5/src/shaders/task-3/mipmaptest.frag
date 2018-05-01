#extension GL_OES_standard_derivatives : enable
precision highp float;

uniform sampler2D textures[16];

varying vec2 fUv;

uniform vec3 lPosition;
uniform vec3 lIntensity;
uniform vec3 cameraPosition;
uniform float ambient;
uniform float specular;
uniform float diffuse;
varying vec3 fPosition;
varying vec3 fNormal;

float getmml() {
  // returns float in [0.0, 3.0), with higher value corresponding to higher mip level
  vec2 dx_vtc = dFdx(fUv);
  vec2 dy_vtc = dFdy(fUv);
  float delta_max_sqr = min(dot(dx_vtc, dx_vtc), dot(dy_vtc, dy_vtc));
  return (min(7.99, max(2.0, -0.5 * log2(delta_max_sqr))) - 2.0)/2.0;
}

float getTone() {
  // returns float in [0.0, 3.0), with higher tone corresponding to darker shade
  vec3 h = normalize((lPosition - fPosition) + (cameraPosition - fPosition));
  float r2 = distance(lPosition, fPosition) * distance(lPosition, fPosition);
  vec3 color = vec3(ambient/5.) + diffuse * lIntensity/r2 * max(0.0, dot(normalize(fNormal), normalize(lPosition)))
  + specular * lIntensity/r2 * pow(max(0.0, dot(normalize(fNormal), h)), 60.0);
  float brightness = dot(color, vec3(1./3.,1./3.,1./3.));
  return 3.0 - max(0.0, min(.5999, brightness)) * 3.0/.6;
}

void main() {
  float mipmap = getmml();
  float tone = getTone();
  int mipmaplevel = int(mipmap);
  int tonelevel = 4*int(tone);
  gl_FragColor = vec4(0.,0.,0.,0.);
  float tonew = tone - float(int(tone));
  float mipw = mipmap - float(int(mipmap));

  for (int i = 0; i<16; i++) {
    if (i==mipmaplevel + tonelevel) {
      gl_FragColor = gl_FragColor + (1.-tonew)*(1.-mipw)*texture2D(textures[i], fUv);
    } else if (i == mipmaplevel + 1 + tonelevel) {
      gl_FragColor =  gl_FragColor + (1.-tonew)*(mipw)*texture2D(textures[i], fUv);
    } else if (i == mipmaplevel + tonelevel + 4) {
      gl_FragColor = gl_FragColor + (tonew)*(1.-mipw)*texture2D(textures[i], fUv);
    } else if (i == mipmaplevel + tonelevel + 5) {
      gl_FragColor = gl_FragColor + (tonew)*(mipw)*texture2D(textures[i], fUv);
    }
  }
}
