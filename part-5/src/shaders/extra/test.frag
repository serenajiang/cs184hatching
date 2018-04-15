#define M_PI 3.1415926535897932384626433832795
precision highp float;

uniform float time;

varying vec2 fUv;

void main() {
    float t = time / 1000.;
    float r = fUv.y;
    float g = cos(t) * 2. - 1.;
    float b = sin(t) * 2. - 1.;
    gl_FragColor = vec4(r, g, cos(t) * sin(t), fUv.y);
}
