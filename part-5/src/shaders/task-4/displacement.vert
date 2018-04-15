attribute vec3 position;
attribute vec3 normal;
attribute vec3 tangent;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 modelMatrix;
uniform sampler2D textureDisplacement;
uniform vec2 textureDimension;

varying vec3 fPosition;
varying vec3 fNormal;

void main() {
    vec3 offset = position;

    mat3 tbn = mat3(tangent, cross(normal, tangent), normal);

    // TODO: Compute displaced vertices
    float heightScaling = 0.6;

    // TODO: Compute displaced normals
    float normalScaling = 1.0;
    float dU = heightScaling * normalScaling *
    (texture2D(textureDisplacement, vec2(uv.x + 1.0/textureDimension.x, uv.y)).g
    - texture2D(textureDisplacement, vec2(uv.x, uv.y)).g);
    float dV = heightScaling * normalScaling *
    (texture2D(textureDisplacement, vec2(uv.x, uv.y + 1.0/textureDimension.y)).g
    - texture2D(textureDisplacement, vec2(uv.x, uv.y)).g);
    vec3 n0 = vec3(-dU, -dV, 1.0);

    fPosition = position + normal * texture2D(textureDisplacement, uv).g * heightScaling;
    fNormal = tbn * n0;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(fPosition, 1.0);
    // vec4(offset, 1.0);
}
