precision highp float;

uniform vec3 lPosition;
uniform vec3 lIntensity;

varying vec3 fPosition;
varying vec3 fNormal;

void main() {
    // TODO: Part 5.1
    gl_FragColor = vec4(
    (lIntensity/distance(lPosition, fPosition)/distance(lPosition, fPosition))
    * max(0.0, dot(normalize(fNormal), normalize(lPosition))), 1.0);
}
