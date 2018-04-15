#define M_PI 3.1415926535897932384626433832795

attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float time;

varying vec2 fUv;

void main() {
    vec3 offset = position;
    float t = time / 1000.;
    fUv = uv;

    offset += normal * cos(t/abs(normal.x)) * 2.0;
    offset += normal * sin(t * abs(normal.z)) * 2.0;
    offset += normal * sin(t + abs(normal.y)) * cos(t + abs(normal.y)) * 2.0;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(offset, 1.0);
}
