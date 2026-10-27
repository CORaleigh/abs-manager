import{d as V,t as $}from"./chunk-ZOmIU9cV.js";import{O as v}from"./chunk-DNMAr0lm.js";import{m as m$1}from"./chunk-ChnJNXUG.js";import{s as o$1}from"./chunk-sU5Rl60Z.js";import{a as L}from"./chunk-mf5g_mgp.js";import{l as o$2}from"./chunk-aZ6dF80M.js";import{D as a$1,k as r}from"./chunk-9JIhA6yP.js";import{Et as r$1,c as Kt,mt as ti,nt as s$2}from"./chunk-Bh6KJGud.js";import{f as s$3,m as m$2,p as d$1}from"./chunk-C7TAPj_8.js";import{t as e}from"./chunk-DqPm7e7M.js";function u$1(e){e.uniforms.add(new s$2(`zProjectionMap`,r=>i(r.camera))),e.code.add(a$1`float linearizeDepth(float depth, vec2 zProjectionConstants) {
float depthNdc = depth * 2.0 - 1.0;
return -(zProjectionConstants[0] / (depthNdc + zProjectionConstants[1] + 1e-7));
}
float linearizeDepth(float depth) {
return linearizeDepth(depth, zProjectionMap);
}`),e.code.add(a$1`float delinearizeDepth(float linearDepth) {
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
float depthNdc = (-c1/linearDepth) - c2 - 1e-7;
float depthNonlinear01 = (depthNdc + 1.0 ) / 2.0;
return depthNonlinear01;
}`),e.code.add(a$1`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return texelFetch(depthTexture, iuv, 0).r;
}`),e.code.add(a$1`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function i(e){let r=e.projectionMatrix;return v(p$2,r[14],r[10])}var p$2=o$2();function z(t){t.fragment.uniforms.add(new s$3(`projInfo`,o=>l(o.camera))),t.fragment.uniforms.add(new s$2(`zScale`,o=>p$1(o.camera))),t.fragment.code.add(a$1`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function l(t){let o=t.projectionMatrix;return o[11]===0?L(m,2/(t.fullWidth*o[0]),2/(t.fullHeight*o[5]),(1+o[12])/o[0],(1+o[13])/o[5]):L(m,-2/(t.fullWidth*o[0]),-2/(t.fullHeight*o[5]),(1-o[8])/o[0],(1-o[9])/o[5])}var m=o$1();function p$1(t){return t.projectionMatrix[11]===0?v(s$1,0,1):v(s$1,1,0)}var s$1=o$2();var s=class extends r{constructor(o,n){super(o,`bool`,0,(e,t)=>e.setUniform1b(o,n(t)))}};var d=class{constructor(e){this.screenLength=m$1(e.screenLength),this.minWorldLength=e.minWorldLength??0,this.maxWorldLength=e.maxWorldLength??1/0}};function W(a,e){let t=a.vertex;e.hasVerticalOffset?(h(t),e.hasScreenSizePerspective&&(a.include(m$2),d$1(t),ti(a.vertex,e)),t.code.add(a$1`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?a$1`vec3 worldNormal = normalize(worldPos + localOrigin);`:a$1`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?a$1`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:a$1`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):t.code.add(a$1`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}var p=o$1();function h(a){a.uniforms.add(new r$1(`verticalOffset`,(e,t)=>{let{minWorldLength:m,maxWorldLength:v,screenLength:O}=e.verticalOffset,g=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),w=t.camera.pixelRatio||1;return L(p,O*w,g,m,v)}))}var n=class extends Kt{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this.updateTexture(e.textureId),this._acquire(e.normalTextureId,t=>this._textureNormal=t),this._acquire(e.emissiveTextureId,t=>this._textureEmissive=t),this._acquire(e.occlusionTextureId,t=>this._textureOcclusion=t),this._acquire(e.metallicRoughnessTextureId,t=>this._textureMetallicRoughness=t)}dispose(){super.dispose(),this._texture=V(this._texture),this._textureNormal=V(this._textureNormal),this._textureEmissive=V(this._textureEmissive),this._textureOcclusion=V(this._textureOcclusion),this._textureMetallicRoughness=V(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?2:1}get textureBindParameters(){return new a(this._texture?.texture??null,this._textureNormal?.texture??null,this._textureEmissive?.texture??null,this._textureOcclusion?.texture??null,this._textureMetallicRoughness?.texture??null)}updateTexture(e){this._texture!=null&&e===this._texture.id||(this._texture=V(this._texture),this._acquire(e,t=>this._texture=t))}_acquire(e,t){if(e==null)return void t(null);let r=this._textures.acquire(e);if($(r))return++this._numLoading,void r.then(i=>{if(this._disposed)return V(i),void t(null);t(i)}).finally(()=>--this._numLoading);t(r)}};var u=class extends e{constructor(e=null){super(),this.textureEmissive=e}};var a=class extends u{constructor(e,t,r,i,_,c,m){super(r),this.texture=e,this.textureNormal=t,this.textureOcclusion=i,this.textureMetallicRoughness=_,this.scale=c,this.normalTextureTransformMatrix=m}};var o=class extends r{constructor(r,t,a){super(r,`mat4`,1,(i,m,e)=>i.setUniformMatrix4fv(r,t(m,e),a))}};export{d as a,z as c,W as i,i as l,a as n,h as o,n as r,s,o as t,u$1 as u};