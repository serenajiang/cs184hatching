precision highp float;

uniform vec3 cameraPosition;
uniform vec3 lPosition;
uniform vec3 lIntensity;

varying vec3 fPosition;
varying vec3 fNormal;

void main() {
    // TODO: Part 5.2
    vec3 h = normalize((lPosition - fPosition) + (cameraPosition - fPosition));
    float r2 = distance(lPosition, fPosition) * distance(lPosition, fPosition);
    gl_FragColor = vec4(vec3(0.3,0.3,0.3)
    + 0.6 * lIntensity/r2 * max(0.0, dot(normalize(fNormal), normalize(lPosition)))
    + 0.4 * lIntensity/r2 * pow(max(0.0, dot(normalize(fNormal), h)), 50.0), 1.0);
}
