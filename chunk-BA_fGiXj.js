import{D as a,E as r,T as e,v as r$1}from"./chunk-j-eT4Sg9.js";import{pt as s}from"./chunk-DzBlPs30.js";import{c as z,u}from"./chunk-BkcyBJHm.js";function c(r){r.code.add(`
  vec4 blendColorsPremultiplied(vec4 source, vec4 dest) {
    float oneMinusSourceAlpha = 1.0 - source.a;
    return source + dest * oneMinusSourceAlpha;
  }
  `)}function A(r$2,m){let e$1=r$2.fragment;e$1.include(u),r$2.include(z),e$1.include(c),e$1.uniforms.add(new r(`globalAlpha`,o=>o.globalAlpha),new r$1(`glowColor`,o=>o.glowColor),new r(`glowWidth`,(o,a)=>o.glowWidth*a.camera.pixelRatio),new r(`glowFalloff`,o=>o.glowFalloff),new r$1(`innerColor`,o=>o.innerColor),new r(`innerWidth`,(o,a)=>o.innerWidth*a.camera.pixelRatio),new s(`depthMap`,o=>o.depth?.attachment),new e(`normalMap`,o=>o.normals)),e$1.code.add(a`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),e$1.code.add(a`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendColorsPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),e$1.code.add(a`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
float depth = depthFromTexture(depthMap, uv);
if (depth == 1.0) {
return false;
}
float linearDepth = linearizeDepth(depth);
pos = reconstructPosition(gl_FragCoord.xy, linearDepth);
float minStep = 6e-8;
float depthStep = clamp(depth + minStep, 0.0, 1.0);
float linearDepthStep = linearizeDepth(depthStep);
float depthError = abs(linearDepthStep - linearDepth);
vec3 normalReconstructed = normalize(cross(dFdx(pos), dFdy(pos)));
vec3 normalFromTexture = normalize(texture(normalMap, uv).xyz * 2.0 - 1.0);
float blendFactor = smoothstep(0.15, 0.2, depthError);
normal = normalize(mix(normalReconstructed, normalFromTexture, blendFactor));
angleCutoffAdjust = mix(0.0, 0.004, blendFactor);
float ddepth = fwidth(linearDepth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / linearDepth);
return true;
}`),m.contrastControlEnabled?e$1.uniforms.add(new e(`frameColor`,(o,a)=>o.colors),new r(`globalAlphaContrastBoost`,o=>o.globalAlphaContrastBoost)).code.add(a`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`):e$1.code.add(a`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}export{A as t};