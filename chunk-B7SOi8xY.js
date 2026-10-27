import{t as B$2}from"./chunk-DJnXYBB3.js";import{S as p$1,g as _$2,o as F$2}from"./chunk-DTHByWtv.js";import{I as vn,z as wn}from"./chunk-DPGF6fIg.js";import{d as V$2,i as F$3}from"./chunk-ZOmIU9cV.js";import{i as Et}from"./chunk-D8B72-Ty.js";import{a as y$2}from"./chunk-DIApwev1.js";import{_ as n$1,f as R$2,n as C$1,v as w$2}from"./chunk-t4moUFd7.js";import{r as t$1,t as T$3}from"./chunk-e7sI9tAa.js";import{_ as h}from"./chunk-D5e0diGB.js";import{O as v$3}from"./chunk-DNMAr0lm.js";import{i as v$4}from"./chunk-DSZ-XKB_.js";import{n as B$3,t as A$2}from"./chunk-E2NQApXS.js";import{i as t$2,n as g$1}from"./chunk-Bd5h90K4.js";import{f as t$3,l as m$4,o as _$3,u as o$1}from"./chunk-D9wPoXRK.js";import{c as r$2,s as o$2}from"./chunk-sU5Rl60Z.js";import{j as z$2}from"./chunk-Dn8VBlk5.js";import{n as B$4,r as C$2}from"./chunk-C6fTYZ5U.js";import{o as ee$1,t as G$3}from"./chunk-BwVnc35f.js";import{l as o$3,o as _$4}from"./chunk-aZ6dF80M.js";import{C as Q$4,K as x$1,M as d$2,R as k$2,S as P$3,U as ua,W as v$5,p as $$2,x as O$2}from"./main-ZTJALUOT.js";import{C as l$2,D as a$3,E as r$3,O as l$3,S as f$2,T as e$1,a as F$4,b,g as v$6,k as r$4,l as L$4,m as l$4,s as H$2,v as r$5,w as t$4,x as c}from"./chunk-j-eT4Sg9.js";import{$ as w$3,Ct as v$7,H as xi,I as pe$1,Pt as st$1,Rt as s$1,St as m$5,Tt as o$4,U as yi,V as vi,Y as b$1,_t as ss,at as h$1,b as Zt,bt as d$3,ct as ni,et as z$3,f as Ii,ft as r$6,h as Mi,ht as s$3,l as Ci,mt as s$5,n as St,nt as R$3,o as o$5,ot as ji,pt as s$2,q as F$5,rt as _$5,st as li,t as At,tt as O$3,ut as ti,vt as n$2,wt as r$7,xt as k$3,yt as A$3,zt as s$4}from"./chunk-BbobnV1r.js";import{a as ts,b as a$4,d as o$7,i as oe,l as r$8,n as Ze$2,s as q$2,u as o$6,v as s$7,x as s$6,y as t$5}from"./chunk-aVBVEmnR.js";import{t as T$4}from"./chunk-gnLhZUCk.js";import{t as e$2}from"./chunk-DqPm7e7M.js";import{i as P$4}from"./chunk-BZsfMc_v.js";import{n as ie,t as ge}from"./chunk-p3OqO6c1.js";import{X as M$4,m as M$3,w as b$2,x as W$2}from"./chunk-B9HPO6ua.js";import{a as nn,c as Y,d as f$3,f as p$2,l as d$4,m as t$6,n as Lt,p as v$8,s as vt,u as er}from"./chunk-xUABai6J.js";import{t as e$3}from"./chunk-DrSmE0TB.js";import{r as J$3,s as X$3,t as $$3}from"./chunk-CHsDqmNw.js";import{a as W$3,c as z$4,i as s$8,l as i$1,r as n$3,t as o$8,u as u$1}from"./chunk-FNKTIBrs.js";var a$2=4;function w$1(){let e=new T$4,o=e.fragment;e.include(a$4);let f=(a$2+1)/2,m=1/(2*f*f);return o.include(u$1),o.uniforms.add(new e$1(`depthMap`,t=>t.depthTexture),new t$4(`tex`,t=>t.colorTexture),new s$6(`blurSize`,t=>t.blurSize),new r$3(`projScale`,(t,b)=>{let l=b.camera.distance;return l>5e4?Math.max(0,t.projScale-(l-5e4)):t.projScale})),o.code.add(a$3`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${a$3.float(m)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add(`fragBlur`,`float`),o.main.add(a$3`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${a$3.int(a$2)}; r <= ${a$3.int(a$2)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}var j$2=Object.freeze(Object.defineProperty({__proto__:null,build:w$1},Symbol.toStringTag,{value:`Module`}));var a$1=15.3;var e=5;var t=-.05;function n(o){o.fragment.code.add(a$3`
    float globalIlluminationNormalSimilarityWeight(vec3 sampleNormal, vec3 centerNormal) {
      return clamp(1.0 - ${a$3.float(a$1)} * length(sampleNormal - centerNormal), 0.0, 1.0);
    }

    float globalIlluminationDepthNormalCorrection(vec3 encodedNormal) {
      vec3 decodedNormal = normalize(encodedNormal * 2.0 - 1.0);
      return pow(max((1.0 - abs(decodedNormal.x)) * (1.0 - abs(decodedNormal.y)), 0.01), ${a$3.float(e)});
    }

    float globalIlluminationDepthSharpness(float projScale, float depth) {
      return ${a$3.float(t)} * projScale / depth;
    }

    float globalIlluminationDepthSharpness(float projScale, float depth, vec3 encodedNormal) {
      return globalIlluminationDepthSharpness(projScale, depth) * globalIlluminationDepthNormalCorrection(encodedNormal);
    }
  `)}var l$1=255;function r$1(a){a.code.add(a$3`
    vec3 quantizeGlobalIlluminationColor(vec3 color) {
      vec3 clampedColor = clamp(color, vec3(0.0), vec3(1.0));
      return floor(clampedColor * ${a$3.float(l$1)} + 0.5) * ${a$3.float(1/l$1)};
    }
  `)}var v$2=5e4;var d$1=100;var o=class extends e$2{};function f$1(){let t=new T$4,a=t.fragment;return t.include(a$4),t.include(z$4),t.include(n),a.include(u$1),a.include(r$1),a.uniforms.add(new e$1(`depthMap`,e=>e.depthTexture),new e$1(`normalMap`,e=>e.normalTexture),new t$4(`tex`,e=>e.colorTexture),new t$4(`globalIlluminationWeightTexture`,e=>e.weightTexture),new r$3(`projScale`,(e,W)=>{let n=W.camera.distance;return n>v$2?Math.max(0,e.projScale-(n-v$2)):e.projScale})),a.code.add(a$3`
    float computeDepthWeight(float sampleDepth, float centerDepth, float depthSharpness) {
      float depthDelta = abs(sampleDepth - centerDepth);
      return exp(-0.08 - depthDelta * depthDelta * depthSharpness);
    }

    vec3 normalFromTexture(sampler2D normalTexture, vec2 uv) {
      ivec2 normalTextureSize = textureSize(normalTexture, 0);
      ivec2 normalTexel = clamp(ivec2(uv * vec2(normalTextureSize)), ivec2(0), normalTextureSize - ivec2(1));
      return texelFetch(normalTexture, normalTexel, 0).xyz;
    }

    void sampleJointBilateralUpscale(vec2 sampleUv, out vec4 upscaledColor, out float upscaledWeight) {
      float centerDepth = linearDepthFromTexture(depthMap, sampleUv);
      vec3 centerNormal = normalFromTexture(normalMap, sampleUv);
      float depthSharpness = ${a$3.float(d$1)} * globalIlluminationDepthSharpness(projScale, centerDepth, centerNormal);

      vec2 lowResTextureSize = vec2(textureSize(tex, 0));
      vec2 texelPosition = sampleUv * lowResTextureSize - 0.5;
      vec2 texelBase = floor(texelPosition);
      vec2 bilinearWeightsFraction = fract(texelPosition);

      vec2 uv00 = (texelBase + vec2(0.5, 0.5)) / lowResTextureSize;
      vec2 uv10 = (texelBase + vec2(1.5, 0.5)) / lowResTextureSize;
      vec2 uv01 = (texelBase + vec2(0.5, 1.5)) / lowResTextureSize;
      vec2 uv11 = (texelBase + vec2(1.5, 1.5)) / lowResTextureSize;

      vec4 color00 = texture(tex, uv00);
      vec4 color10 = texture(tex, uv10);
      vec4 color01 = texture(tex, uv01);
      vec4 color11 = texture(tex, uv11);
      float weight00 = texture(globalIlluminationWeightTexture, uv00).r;
      float weight10 = texture(globalIlluminationWeightTexture, uv10).r;
      float weight01 = texture(globalIlluminationWeightTexture, uv01).r;
      float weight11 = texture(globalIlluminationWeightTexture, uv11).r;

      float depth00 = linearDepthFromTexture(depthMap, uv00);
      float depth10 = linearDepthFromTexture(depthMap, uv10);
      float depth01 = linearDepthFromTexture(depthMap, uv01);
      float depth11 = linearDepthFromTexture(depthMap, uv11);

      vec3 normal00 = normalFromTexture(normalMap, uv00);
      vec3 normal10 = normalFromTexture(normalMap, uv10);
      vec3 normal01 = normalFromTexture(normalMap, uv01);
      vec3 normal11 = normalFromTexture(normalMap, uv11);

      float bilinearWeight00 = (1.0 - bilinearWeightsFraction.x) * (1.0 - bilinearWeightsFraction.y);
      float bilinearWeight10 = bilinearWeightsFraction.x * (1.0 - bilinearWeightsFraction.y);
      float bilinearWeight01 = (1.0 - bilinearWeightsFraction.x) * bilinearWeightsFraction.y;
      float bilinearWeight11 = bilinearWeightsFraction.x * bilinearWeightsFraction.y;

      float jointBilateralWeight00 = bilinearWeight00 * computeDepthWeight(depth00, centerDepth, depthSharpness) * globalIlluminationNormalSimilarityWeight(normal00, centerNormal);
      float jointBilateralWeight10 = bilinearWeight10 * computeDepthWeight(depth10, centerDepth, depthSharpness) * globalIlluminationNormalSimilarityWeight(normal10, centerNormal);
      float jointBilateralWeight01 = bilinearWeight01 * computeDepthWeight(depth01, centerDepth, depthSharpness) * globalIlluminationNormalSimilarityWeight(normal01, centerNormal);
      float jointBilateralWeight11 = bilinearWeight11 * computeDepthWeight(depth11, centerDepth, depthSharpness) * globalIlluminationNormalSimilarityWeight(normal11, centerNormal);
      float jointBilateralWeightSum = jointBilateralWeight00 + jointBilateralWeight10 + jointBilateralWeight01 + jointBilateralWeight11;

      if (jointBilateralWeightSum < 0.0001) {
        // Fall back to the nearest low-resolution texel when all bilateral weights collapse.
        vec2 nearestUv = (floor(texelPosition + 0.5) + vec2(0.5)) / lowResTextureSize;
        upscaledColor = texture(tex, nearestUv);
        upscaledWeight = texture(globalIlluminationWeightTexture, nearestUv).r;
        return;
      }

      upscaledColor = (
        color00 * jointBilateralWeight00 +
        color10 * jointBilateralWeight10 +
        color01 * jointBilateralWeight01 +
        color11 * jointBilateralWeight11
      ) / jointBilateralWeightSum;

      upscaledWeight = (
        weight00 * jointBilateralWeight00 +
        weight10 * jointBilateralWeight10 +
        weight01 * jointBilateralWeight01 +
        weight11 * jointBilateralWeight11
      ) / jointBilateralWeightSum;
    }
  `),t.outputs.add(`fragColor`,`vec4`,0),t.outputs.add(`fragWeight`,`float`,1),a.main.add(a$3`sampleJointBilateralUpscale(uv, fragColor, fragWeight);
fragColor.rgb = quantizeGlobalIlluminationColor(fragColor.rgb);`),t}var U$4=Object.freeze(Object.defineProperty({__proto__:null,GlobalIlluminationUpscaleDrawParameters:o,build:f$1},Symbol.toStringTag,{value:`Module`}));var d=class extends r$4{constructor(a,t,n,r){super(a,`float`,0,(s,c)=>s.setUniform1fv(a,n(c),r),t)}};function Z$2(e,a){e.uniforms.add(new d(`shR`,9,({lighting:t})=>t.sh.r),new d(`shG`,9,({lighting:t})=>t.sh.g),new d(`shB`,9,({lighting:t})=>t.sh.b)),e.code.add(a$3`vec3 calculateAmbientIrradiance(vec3 normal) {
vec3 ambientLight = 0.282095 * vec3(shR[0], shG[0], shB[0]);
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
vec4 lightingAmbientSH_R1 = vec4(shR[1], shR[2], shR[3], shR[4]);
vec4 lightingAmbientSH_G1 = vec4(shG[1], shG[2], shG[3], shG[4]);
vec4 lightingAmbientSH_B1 = vec4(shB[1], shB[2], shB[3], shB[4]);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
vec4 lightingAmbientSH_R2 = vec4(shR[5], shR[6], shR[7], shR[8]);
vec4 lightingAmbientSH_G2 = vec4(shG[5], shG[6], shG[7], shG[8]);
vec4 lightingAmbientSH_B2 = vec4(shB[5], shB[6], shB[7], shB[8]);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight;
}`),a.pbrMode!==1&&a.pbrMode!==2||e.code.add(a$3`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance()
{
vec3 ambientLight = 1.2 * (0.282095 * vec3(shR[0], shG[0], shB[0])) - 0.2;
return ambientLight *= skyTransmittance;
}`)}function D(e){e.code.add(a$3`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.code.add(a$3`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.code.add(a$3`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function J$2(e,a){e.include(l$2),e.include(o$6),a.pbrMode!==1&&a.pbrMode!==2&&a.pbrMode!==5&&a.pbrMode!==6||(e.code.add(a$3`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),e.code.add(a$3`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),e.code.add(a$3`struct PBRShadingInfo
{
float NdotV;
float NdotL;
float LdotH;
float NdotUP;
float RdotUP;
float NdotAmbDir;
float NdotH_Horizon;
float NdotH;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
vec3 reflectedView;
float averageAmbientRadiance;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),e.code.add(a$3`void calculateCommonInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo) {
vec3 h = normalize(mainLightDirection - viewDirection);
inputs.NdotV = clamp(abs(dot(normal, -viewDirection)), 0.001, 1.0);
inputs.NdotUP = clamp(dot(normal, upDirection), -1.0, 1.0);
inputs.reflectedView = normalize(reflect(-viewDirection, normal));
inputs.RdotUP = clamp(dot(inputs.reflectedView, upDirection), -1.0, 1.0);
inputs.albedoLinear = linearizeGamma(albedo);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
}`)),a.pbrMode!==1&&a.pbrMode!==2||(e.include(D),e.code.add(a$3`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotUP);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotUP, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),e.code.add(a$3`void calculatePBRInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo, vec3 mrr) {
calculateCommonInputs(inputs, normal, viewDirection, upDirection, albedo);
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
}`)),a.pbrMode!==5&&a.pbrMode!==6||e.code.add(a$3`const vec3 fresnelReflectionSimplified = vec3(0.04);
void calculateSimplifiedInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo) {
calculateCommonInputs(inputs, normal, viewDirection, upDirection, albedo);
float lightness = 0.3 * inputs.albedoLinear[0] + 0.5 * inputs.albedoLinear[1] + 0.2 * inputs.albedoLinear[2];
inputs.f0 = (0.85 * lightness + 0.15) * fresnelReflectionSimplified;
inputs.f90 =  vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
}`)}function Q$3(e,a){e.include(o$6),e.code.add(a$3`
    struct PBRShadingWater {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${a.useCustomDTRExponentForWater?`2.2`:`2.0`};
  `),e.code.add(a$3`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),e.code.add(a$3`float normalDistributionWater(float NdotH, float roughness) {
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),e.code.add(a$3`float geometricOcclusionKelemen(float LoH) {
return 0.25 / (LoH * LoH);
}`),e.code.add(a$3`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max) {
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function R$1(e,a){let t=v$6(a.output)&&a.receiveShadows;t&&v$8(e,!0),e.vertex.code.add(a$3`
    void forwardLinearDepthToReadShadowMap() { ${l$3(t,`forwardLinearDepth(gl_Position.w);`)} }
  `)}var u=class extends r$4{constructor(a,t,n,r){super(a,`mat4`,2,(s,c,f,z)=>s.setUniformMatrices4fv(a,t(c,f,z),r),n)}};var m$3=class extends r$4{constructor(a,t,n,r){super(a,`mat4`,1,(s,c,f)=>s.setUniformMatrices4fv(a,t(c,f),r),n)}};function H$1(e){e.uniforms.add(new m$3(`shadowMapMatrix`,(a,t)=>t.shadowMap.getShadowMapMatrices(a.origin),4)),e.include(P$2)}function N$2(e){e.uniforms.add(new u(`shadowMapMatrix`,(a,t)=>t.shadowMap.getShadowMapMatrices(a.origin),4)),e.include(P$2)}function P$2(e){e.uniforms.add(new s$7(`cascadeDistances`,a=>a.shadowMap.cascadeDistances),new h$1(`numCascades`,a=>a.shadowMap.numCascades)),e.code.add(_$1)}var _$1=a$3`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
vec3 calculateUVZShadow(in vec3 _worldPos, in float _linearDepth, in ivec2 shadowMapSize) {
int i = _linearDepth < cascadeDistances[1] ? 0 : _linearDepth < cascadeDistances[2] ? 1 : _linearDepth < cascadeDistances[3] ? 2 : 3;
if (i >= numCascades) {
return invalidShadowmapUVZ;
}
mat4 shadowMatrix = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
vec3 lvpos = lightSpacePosition(_worldPos, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
return invalidShadowmapUVZ;
}
vec2 uvShadow = cascadeCoordinates(i, shadowMapSize, lvpos);
return vec3(uvShadow, lvpos.z);
}`;function U$3(e){e.code.add(a$3`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}var p=class extends r$4{constructor(a,t){super(a,`sampler2DShadow`,0,(n,r)=>n.bindTexture(a,t(r)))}};function ye(e,a){a.receiveShadows&&e.fragment.include(H$1),y$1(e,a)}function ze(e,a){a.receiveShadows&&e.fragment.include(N$2),y$1(e,a)}function y$1(e,a){e.fragment.uniforms.add(new s$1(`lightingGlobalFactor`,s=>s.lighting.globalFactor));let{hasShadowHighlights:t,receiveShadows:n,spherical:r}=a;e.include(R$1,a),n&&L$3(e.fragment,t),e.fragment.code.add(a$3`
    float readShadow(float additionalAmbientScale, vec3 vpos) {
      return ${n?`max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))`:l$3(r,`lightingGlobalFactor * (1.0 - additionalAmbientScale)`,`0.0`)};
    }
  `)}function L$3(e,a){I$1(e,a),F$1(e)}function F$1(e){e.code.add(a$3`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap, 0));
return readShadowMaps(uvzShadow);
}`)}function I$1(e,a){e.include(U$3),e.uniforms.add(T$2()),a&&e.uniforms.add(new s$2(`shadowHighlight`,({shadowHighlight:t})=>t?.getTexture())),e.code.add(a$3`
    float readShadowMaps(const in vec3 uvzShadow) {
      if (uvzShadow.z < 0.0) {
        return 0.0;
      }

      float shadow1 = readShadowMapUVZ(uvzShadow, shadowMap);
      ${l$3(a,`float shadow2 = texelFetch(shadowHighlight, ivec2(gl_FragCoord.xy), 0).r;
         return shadow1 > shadow2 ? shadow1 : shadow2;`,`return shadow1;`)}
    }
  `)}function T$2(){return new p(`shadowMap`,({shadowMap:e})=>e.getOutput(5)??e.getOutput(7))}function Le(e){e.code.add(a$3`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`),e.code.add(a$3`vec3 tonemapKhronosNeutral(vec3 color) {
const float startCompression = 0.76;
const float desaturation = 0.15;
float peak = max(color.r, max(color.g, color.b));
if (peak < startCompression) {
return color;
}
float d = 1.0 - startCompression;
float newPeak = 1.0 - d * d / (peak + d - startCompression);
color *= newPeak / peak;
float g = 1.0 - 1.0 / (desaturation * (peak - newPeak) + 1.0 );
return mix(color, vec3(newPeak), g);
}`)}function f(t){t.uniforms.add(new s$3(`mainLightDirection`,e=>e.lighting.mainLight.direction))}function m$2(t){t.uniforms.add(new s$3(`mainLightIntensity`,e=>e.lighting.mainLight.intensity))}function v$1(t){f(t),m$2(t),t.code.add(a$3`vec3 applyShading(vec3 shadingNormal, float shadow) {
float dotVal = clamp(dot(shadingNormal, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function M$2(t,e){let c=t.fragment;c.include(u$1),c.uniforms.add(new s$4(`nearFar`,o=>o.camera.nearFar),new s$2(`depthMap`,o=>o.depth?.attachment),new s$5(`proj`,o=>o.camera.projectionMatrix),new s$1(`invResolutionHeight`,o=>1/o.camera.height),new s$5(`reprojectionMatrix`,o=>o.reprojection.matrix)).code.add(a$3`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate) {
    vec4 clipDepthCoordinate = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoordinate = reprojectionMatrix * vec4(
      clipDepthCoordinate.w * (projectionCoordinate.xy * 2.0 - 1.0),
      clipDepthCoordinate.z,
      clipDepthCoordinate.w
    );
    reprojectedCoordinate.xy /= reprojectedCoordinate.w;
    return reprojectedCoordinate.xy * 0.5 + 0.5;
  }

  vec4 applyProjectionMat(mat4 projectionMat, vec3 viewPosition) {
    vec4 projectedCoordinate =  projectionMat * vec4(viewPosition, 1.0);
    projectedCoordinate.xy /= projectedCoordinate.w;
    projectedCoordinate.xy = projectedCoordinate.xy*0.5 + 0.5;
    return projectedCoordinate;
  }

  float rayMarchScreenReachFromWorldReach(vec3 startPosition, vec3 rayDirection, float rayMarchWorldReach) {
    float rayDistanceWorld = max(0.0, rayMarchWorldReach);

    // Stop rays towards camera at near plane
    if (rayDirection.z > 0.0) {
      float distanceToNearPlane = (-nearFar[0] - startPosition.z) / rayDirection.z;
      rayDistanceWorld = min(rayDistanceWorld, max(0.0, distanceToNearPlane));
    }

    vec2 projectedCoordStart = applyProjectionMat(proj, startPosition).xy;
    vec2 projectedCoordEnd = applyProjectionMat(proj, startPosition + rayDirection * rayDistanceWorld).xy;
    vec2 projectedCoordOffset = projectedCoordEnd - projectedCoordStart;

    return ${e.useProjectedRayLength?`length(projectedCoordOffset)`:`abs(projectedCoordOffset.y)`};
  }

  vec3 screenSpaceIntersectionWithLimits(
    vec3 rayDirection,
    vec3 startPosition,
    vec3 viewDirection,
    vec3 normal,
    float rayStepOffset,
    float rayMarchMaxReach,
    float rayMarchMaxSteps
  ) {
    vec3 viewPosition = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPosition);
    vec3 homogeneousStart = viewPosition / projectedCoordStart.w;
    float inverseWStart = 1.0 / projectedCoordStart.w;

    // Advance the position in the ray direction
    viewPosition += rayDirection;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, rayDirection);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPosition);
    vec3  homogeneousEnd = viewPosition / projectedCoordEnd.w;
    float inverseWEnd = 1.0 / projectedCoordEnd.w;

    // Calculate the ray direction in screen space
    vec2 projectedCoordDirection = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 vanishingPointScreenOffset = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float rayMarchDistance = ${e.useProjectedRayLength?`length(vanishingPointScreenOffset.xy)`:`abs(vanishingPointScreenOffset.y)`};
    float clampedRayMarchDistance = min(rayMarchDistance, rayMarchMaxReach);

    float projectedCoordDirectionLength = length(projectedCoordDirection);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the ray march looks
    vec2 projectedStep = clampedRayMarchDistance * projectedCoordDirection / (rayMarchMaxSteps * projectedCoordDirectionLength);

    // Normalize the homogeneous camera space coordinates
    vec3 homogeneousStep = clampedRayMarchDistance * (homogeneousEnd - homogeneousStart) / (rayMarchMaxSteps * projectedCoordDirectionLength);
    float inverseWStep = clampedRayMarchDistance * (inverseWEnd - inverseWStart) / (rayMarchMaxSteps * projectedCoordDirectionLength);

    // initialize the variables for ray marching
    vec2 projectedPosition = projectedCoordStart.xy;
    vec3 homogeneousPosition = homogeneousStart;
    float inverseW = inverseWStart;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float previousEstimatedZ = -startPosition.z;
    float rayDepthDelta = 0.0;
    float estimatedDepthDifference;
    float sampledDepth;

    if (dot(normal, rayDirection) < 0.0 || dot(-viewDirection, normal) < 0.0) {
      return vec3(projectedPosition, 0.0);
    }

    float previousEstimatedDepthDifference = 0.0;

    projectedPosition = clamp(
      projectedPosition + rayStepOffset * projectedStep,
      vec2(0.0),
      vec2(0.999)
    );
    homogeneousPosition.z += rayStepOffset * homogeneousStep.z;
    inverseW += rayStepOffset * inverseWStep;

    int rayMarchMaxStepsInt = int(rayMarchMaxSteps);
    for(int stepIndex = 0; stepIndex < rayMarchMaxStepsInt - 1; ++stepIndex) {
      sampledDepth = -linearDepthFromTexture(depthMap, projectedPosition); // get linear depth from the depth buffer

      // Estimate depth of the marching ray
      rayStartZ = previousEstimatedZ;
      estimatedDepthDifference = -rayStartZ - sampledDepth;
      rayEndZ = (homogeneousStep.z * 0.5 + homogeneousPosition.z) / (inverseWStep * 0.5 + inverseW);
      rayDepthDelta = rayEndZ - rayStartZ;
      previousEstimatedZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || projectedPosition.y < 0.0  || projectedPosition.y > 1.0 ) {
        return vec3(projectedPosition, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - estimatedDepthDifference > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between estimatedDepthDifference and rayDepthDelta is not too large
      //  - if difference between estimatedDepthDifference and 0.025/abs(inverseW) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if(estimatedDepthDifference < 0.025 / abs(inverseW) + abs(rayDepthDelta) &&
        estimatedDepthDifference > 0.0 &&
        sampledDepth > nearFar[0] &&
        sampledDepth < nearFar[1] &&
        abs(projectedPosition.y - projectedCoordStart.y) > invResolutionHeight) {
        float hitInterpolationWeight = estimatedDepthDifference / (estimatedDepthDifference - previousEstimatedDepthDifference);
        vec2 refinedProjectedPosition = mix(projectedPosition - projectedStep, projectedPosition, 1.0 - hitInterpolationWeight);
        if (abs(refinedProjectedPosition.y - projectedCoordStart.y) > invResolutionHeight) {
          return vec3(refinedProjectedPosition, sampledDepth);
        }
        else {
          return vec3(projectedPosition, sampledDepth);
        }
      }

      ${l$3(!e.clampRayToScreen,`if (projectedPosition.x <= 0.0  || projectedPosition.x >= 1.0) {
        return vec3(projectedPosition, 0.0);
      }`)}

      // Continue with ray marching
      projectedPosition = projectedPosition + projectedStep;
      homogeneousPosition.z += homogeneousStep.z;
      inverseW += inverseWStep;
      previousEstimatedDepthDifference = estimatedDepthDifference;

      ${l$3(e.clampRayToScreen,`projectedPosition = clamp(projectedPosition, vec2(0.0), vec2(0.999));`)}
    }
    return vec3(projectedPosition, 0.0);
  }

  vec3 screenSpaceIntersection(vec3 rayDirection, vec3 startPosition, vec3 viewDirection, vec3 normal, float rayStepOffset) {
    return screenSpaceIntersectionWithLimits(
      rayDirection,
      startPosition,
      viewDirection,
      normal,
      rayStepOffset,
      ${a$3.float(e.rayMarchMaxReach)},
      ${a$3.float(e.rayMarchMaxSteps)}
    );
  }
  `)}function F(r){r.include(u$1),r.uniforms.add(new s$4(`zProjectionMapLastFrame`,o=>i$1(o.reprojection.lastFrameCamera))),r.code.add(a$3`float linearDepthFromTextureLastFrame(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv), zProjectionMapLastFrame);
}`)}var P$1=.01;var W$1=.008;var j$1=.002;var T$1=.5;var E=.02;var $$1=.1;var R=.008;var L$2=.012;var V$1=.008;var O$1=40;var U$2=.095;var N$1=.008;var k$1=60;var H=2;var _=.0039;var q$1=.25;var S$2=.15;var w=25;var I=.15;var z$1=.5;var B$1=1;var C=1;var G$2=16;var m$1=class extends e$2{constructor(){super(...arguments),this.projScale=1,this.scaleGlobalIllumination=1,this.accumulatedFrames=0,this.temporalSampleFrame=0,this.rayMarchMinReach=I,this.rayMarchMaxReach=z$1,this.rayMarchWorldReach=25,this.rayMarchMinReachEmissionWeight=1,this.rayMarchMaxReachEmissionWeight=1,this.rayMarchMaxSteps=16,this.colorBleedWeight=S$2}};function A$1(r){let o=new T$4,i=o.fragment;return o.include(a$4),o.include(z$4),f(i),i.include(F),i.include(l$2),i.include(r$1),o.include(M$2,r),i.uniforms.add(new e$1(`normalMap`,e=>e.normalTexture),new e$1(`depthMap`,e=>e.depthTexture),new s$2(`lastFrameColorTexture`,e=>e.reprojection.lastFrameColor?.getTexture()),new s$2(`lastFrameDepthTexture`,e=>e.reprojection.lastFrameDepth?.attachment),new s$2(`lastFrameGlobalIlluminationTexture`,e=>e.globalIllumination?.getTexture()),new s$2(`lastFrameGlobalIlluminationWeightTexture`,e=>e.globalIllumination?.getTexture(C$2)),new s$5(`reprojectionViewMatrix`,e=>e.reprojection.viewMatrix),new s$5(`view`,e=>e.camera.viewMatrix),new r$3(`accumulatedFrames`,e=>e.accumulatedFrames),new r$3(`temporalSampleFrame`,e=>e.temporalSampleFrame),new r$3(`scaleGlobalIllumination`,e=>e.scaleGlobalIllumination)),i.uniforms.add(new r$3(`rayMarchMinReach`,e=>e.rayMarchMinReach),new r$3(`rayMarchMaxReach`,e=>e.rayMarchMaxReach),new r$3(`rayMarchWorldReach`,e=>e.rayMarchWorldReach),new r$3(`rayMarchMinReachEmissionWeight`,e=>e.rayMarchMinReachEmissionWeight),new r$3(`rayMarchMaxReachEmissionWeight`,e=>e.rayMarchMaxReachEmissionWeight),new r$3(`rayMarchMaxSteps`,e=>e.rayMarchMaxSteps),new r$3(`colorBleedWeight`,e=>e.colorBleedWeight)),r.hasEmission&&i.uniforms.add(new s$2(`lastFrameEmissionTexture`,e=>e.reprojection.lastFrameEmission?.attachment)),i.code.add(a$3`
    float computeIdleColorBlendWeight(float accumulatedFrames) {
      float idleColorBlendProgress = clamp(
        accumulatedFrames / ${a$3.float(O$1)},
        0.0,
        1.0
      );
      return mix(
        ${a$3.float(L$2)},
        ${a$3.float(V$1)},
        idleColorBlendProgress
      );
    }

    float computeIdleOcclusionBlendWeight(float accumulatedFrames) {
      float idleOcclusionBlendProgress = clamp(
        accumulatedFrames / ${a$3.float(k$1)},
        0.0,
        1.0
      );
      return mix(
        ${a$3.float(U$2)},
        ${a$3.float(N$1)},
        pow(idleOcclusionBlendProgress, ${a$3.float(H)})
      );
    }

    bool isEdgeDepth(float centerDepth, vec2 sampleUv) {
      vec2 texelSize = 1.0 / vec2(textureSize(depthMap, 0));
      float depthLeft = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(-texelSize.x, 0.0)));
      float depthRight = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(texelSize.x, 0.0)));
      float depthUp = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(0.0, texelSize.y)));
      float depthDown = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(0.0, -texelSize.y)));

      float maxDifference = max(max(abs(centerDepth - depthLeft), abs(centerDepth - depthRight)), max(abs(centerDepth - depthUp), abs(centerDepth - depthDown)));

      return abs(maxDifference / centerDepth) > 0.01;
    }

    vec3 sampleCosineHemisphere(vec2 u) {
      float phi = 6.28318530718 * u.x;
      float radius = sqrt(u.y);
      float x = radius * cos(phi);
      float y = radius * sin(phi);
      float z = sqrt(max(0.0, 1.0 - u.y));

      return vec3(x, y, z);
    }

    mat3 basisFromNormal(vec3 n) {
      vec3 up = abs(n.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
      vec3 tangent = normalize(cross(up, n));
      vec3 bitangent = cross(n, tangent);

      return mat3(tangent, bitangent, n);
    }

    float blueNoiseDitherValue(vec2 pixel, float frame, vec2 axis, float phase) {
      float scroll = 5.588238 * mod(frame, 512.0);
      vec2 p = pixel + vec2(scroll);
      vec2 rotated = vec2(
        axis.x * p.x + axis.y * p.y,
        -axis.y * p.x + axis.x * p.y
      );

      return fract(52.9829189 * fract(0.06711056 * rotated.x + 0.00583715 * rotated.y + phase));
    }

    vec4 blueNoiseDither(vec2 pixel, float frame) {
      vec4 value = vec4(
        blueNoiseDitherValue(pixel, frame, vec2(0.9659258, 0.25881904), 0.0),
        blueNoiseDitherValue(pixel, frame, vec2(0.70710677, 0.70710677), 0.17),
        blueNoiseDitherValue(pixel, frame, vec2(0.25881904, 0.9659258), 0.37),
        blueNoiseDitherValue(pixel, frame, vec2(1.0, 0.0), 0.61)
      );

      return value * 2.0 - 1.0;
    }
  `),o.outputs.add(`fragGlobalIllumination`,`vec4`,0),o.outputs.add(`fragWeight`,`float`,1),i.main.add(a$3`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragGlobalIllumination = vec4(0.0, 0.0, 0.0, 1.0);
      fragWeight = 0.0;
      return;
    }

    // Get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 normal4 = texelFetch(normalMap, iuv, 0);
    if (normal4.a != 1.0) {
      fragGlobalIllumination = vec4(0.0, 0.0, 0.0, 1.0);
      fragWeight = 0.0;
      return;
    }
    vec3 normal = normalize(normal4.xyz * 2.0 - 1.0);

    // Reconstruct view space position of current fragment
    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(uv * vec2(textureSize(normalMap, 0)), currentPixelDepth);
    vec4 viewPos = vec4(currentPixelPos, 1.0);

    // Reproject current view position to last frame
    vec4 reprojectedViewPos = reprojectionViewMatrix * viewPos;
    vec4 reprojectedCoordinate = applyProjectionMat(proj, reprojectedViewPos.xyz);

    // Read last frame reprojected depth and GI history
    float lastFrameDepthViewPos = -linearDepthFromTextureLastFrame(lastFrameDepthTexture, reprojectedCoordinate.xy);
    vec4 lastFrameGlobalIllumination = texture(lastFrameGlobalIlluminationTexture, reprojectedCoordinate.xy);
    float historyOcclusionBlendWeight = texture(lastFrameGlobalIlluminationWeightTexture, reprojectedCoordinate.xy).r;

    int steps;
    float occlusionBlendWeight = 1.0;
    float colorBlendWeight = 1.0;
    float idleColorBlendWeight = computeIdleColorBlendWeight(accumulatedFrames);
    float idleOcclusionBlendWeight = computeIdleOcclusionBlendWeight(accumulatedFrames);
    float reprojectionDepthMismatch = abs((lastFrameDepthViewPos + reprojectedViewPos.z) / max(lastFrameDepthViewPos, reprojectedViewPos.z));
    bool hasReprojectionMismatch = reprojectionDepthMismatch > ${a$3.float(P$1)};
    bool isScaledGlobalIllumination = scaleGlobalIllumination < 1.0;
    bool isLowQualityEdgePixel = isScaledGlobalIllumination && isEdgeDepth(currentPixelDepth, uv);
    bool resetColorHistory = false;

    // Heuristic to determine blending weights and number of steps for occlusion and color
    if (hasReprojectionMismatch) {
      if (isLowQualityEdgePixel) {
        steps = 1;
        occlusionBlendWeight = ${a$3.float(W$1)};
        resetColorHistory = true;
      } else {
        steps = 6;
        occlusionBlendWeight = 1.0;
        resetColorHistory = true;
      }
    } else {
      steps = 1;
      if (historyOcclusionBlendWeight > ${a$3.float(T$1)}) {
        occlusionBlendWeight = ${a$3.float($$1)};
        colorBlendWeight = ${a$3.float(R)};
      } else if (historyOcclusionBlendWeight > ${a$3.float(E)}) {
        occlusionBlendWeight = historyOcclusionBlendWeight - 0.05;
        colorBlendWeight = ${a$3.float(R)};
      } else {
        occlusionBlendWeight = isScaledGlobalIllumination ? ${a$3.float(W$1)} : idleOcclusionBlendWeight;
        colorBlendWeight = isScaledGlobalIllumination ? ${a$3.float(j$1)} : idleColorBlendWeight;
      }
    }

    vec4 randomDirectionSample;
    mat3 normalBasis = basisFromNormal(normal);
    int temporalSampleStride = min(64 / steps, 6);
    float temporalFrameOffset = mod(temporalSampleFrame, float(64 / steps));

    // For each ray determine if it hits geometry and accumulate occlusion or color
    float stepSize = 1.0 / float(steps);
    for (int i = 0; i < steps; ++i) {
      float sampleIndex = float(i * temporalSampleStride + int(temporalFrameOffset));
      randomDirectionSample = blueNoiseDither(floor(gl_FragCoord.xy), sampleIndex);
      vec2 hemisphereSample = randomDirectionSample.rg * 0.5 + 0.5;
      float offsetSample = randomDirectionSample.a * 0.5 + 0.5;
      vec3 rayDirection = normalBasis * sampleCosineHemisphere(hemisphereSample);
      float rayMarchScreenReach = rayMarchScreenReachFromWorldReach(viewPos.xyz, rayDirection, rayMarchWorldReach);
      rayMarchScreenReach = clamp(rayMarchScreenReach, rayMarchMinReach, rayMarchMaxReach);
      vec3 hit = screenSpaceIntersectionWithLimits(
        rayDirection,
        viewPos.xyz,
        normalize(viewPos.xyz),
        normal,
        offsetSample,
        rayMarchScreenReach,
        rayMarchMaxSteps
      );

      if (hit.z > 0.0) {
        ${l$3(r.hasColor,a$3`
          // Emission and color bleed - Reproject the current receiver and sampled hit to estimate bounced color
          vec3 receiverColor = texture(lastFrameColorTexture, reprojectedCoordinate.xy).rgb;

          vec2 hitReprojectedCoordinate = reprojectionCoordinate(hit);
          vec3 sourceColor = texture(lastFrameColorTexture, hitReprojectedCoordinate).rgb;
          vec3 sourceColorLinear = linearizeGamma(sourceColor);
          vec3 sourceEmission = ${l$3(r.hasEmission,`texture(lastFrameEmissionTexture, hitReprojectedCoordinate).xyz`,`vec3(0.0)`)};

          float emissionWeight = mix(
            rayMarchMinReachEmissionWeight,
            rayMarchMaxReachEmissionWeight,
            (rayMarchScreenReach - rayMarchMinReach) / max(rayMarchMaxReach - rayMarchMinReach, 0.00001)
          );
          fragGlobalIllumination.rgb += ((sourceColorLinear * colorBleedWeight) + sourceEmission * emissionWeight) * stepSize;
          `)}
      } else {
        // Occlusion - heuristic modulating sky intensity based on angle to main light
        vec4 viewMainLightDirection = view * vec4(mainLightDirection, 0.0);
        float skyModulation = pow(max(dot(rayDirection, viewMainLightDirection.xyz), 0.0), 3.0) * 5.5;
        float skyFacingWeight = clamp(3.5 * dot(viewMainLightDirection.xyz, normal), 0.0, 1.0);
        skyModulation = mix(1.0, skyModulation * 0.2 + 0.8, skyFacingWeight);
        fragGlobalIllumination.a += skyModulation * stepSize;
      }
    }

    // Rendering trick add noise to reduce accumulation artifacts
    float accumulationDither = occlusionBlendWeight < 1.0
      ? randomDirectionSample.b * ${a$3.float(_)}
      : 0.0;

    ${l$3(r.hasColor,a$3`
      // Accumulate color
      vec3 lastFrameColor = lastFrameGlobalIllumination.rgb;
      float colorDitherScale = isScaledGlobalIllumination ? ${a$3.float(q$1)} : 1.0;
      fragGlobalIllumination.rgb = resetColorHistory
        ? vec3(0.0)
        : mix(lastFrameColor + accumulationDither * colorDitherScale, fragGlobalIllumination.rgb, colorBlendWeight);
      `,a$3`
      fragGlobalIllumination.rgb = vec3(0.0);
      `)}
    fragGlobalIllumination.rgb = quantizeGlobalIlluminationColor(fragGlobalIllumination.rgb);

    // Accumulate occlusion
    fragGlobalIllumination.a = mix(lastFrameGlobalIllumination.a + accumulationDither, fragGlobalIllumination.a, occlusionBlendWeight);

    fragWeight = occlusionBlendWeight;
  `),o}var pe=Object.freeze(Object.defineProperty({__proto__:null,GlobalIlluminationPassParameters:m$1,build:A$1,defaultColorBleedWeight:S$2,defaultRayMarchMaxReach:z$1,defaultRayMarchMaxReachEmissionWeight:1,defaultRayMarchMaxSteps:16,defaultRayMarchMinReach:I,defaultRayMarchMinReachEmissionWeight:1,defaultRayMarchWorldReach:25},Symbol.toStringTag,{value:`Module`}));var x=16;function S$1(){let t=new T$4,o=t.fragment;return t.include(a$4),t.include(z$4),o.include(u$1),o.include(l$2),o.uniforms.add(new s$1(`radius`,e=>P(e.camera))).code.add(a$3`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),o.code.add(a$3`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.outputs.add(`fragOcclusion`,`float`),o.uniforms.add(new e$1(`normalMap`,e=>e.normalTexture),new e$1(`depthMap`,e=>e.depthTexture),new r$3(`projScale`,e=>e.projScale),new e$1(`rnm`,e=>e.noiseTexture),new r$8(`rnmScale`,(e,c)=>v$3(g,c.camera.fullWidth/e.noiseTexture.descriptor.width,c.camera.fullHeight/e.noiseTexture.descriptor.height)),new r$3(`intensity`,e=>e.intensity),new s$4(`screenSize`,e=>v$3(g,e.camera.fullWidth,e.camera.fullHeight))).main.add(a$3`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragOcclusion = 1.0;
      return;
    }

    // get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 norm4 = texelFetch(normalMap, iuv, 0);
    if(norm4.a != 1.0) {
      fragOcclusion = 1.0;
      return;
    }
    vec3 norm = normalize(norm4.xyz * 2.0 - 1.0);

    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

    float sum = 0.0;
    vec3 tapPixelPos;

    vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

    // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
    // bug or deviation from CE somewhere else?
    float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

    for(int i = 0; i < ${a$3.int(x)}; ++i) {
      vec2 unitOffset = reflect(sphere[i], fres).xy;
      vec2 offset = vec2(-unitOffset * radius * ps);

      // don't use current or very nearby samples
      if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
        continue;
      }

      vec2 tc = vec2(gl_FragCoord.xy + offset);
      if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
      vec2 tcTap = tc / screenSize;
      float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

      tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

      sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
    }

    // output the result
    float A = max(1.0 - sum * intensity / float(${a$3.int(x)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * pow(A, 4.0)) * INV_GAMMA;

    fragOcclusion = A;
  `),t}function P(t){return Math.max(10,20*t.computeScreenPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}var g=o$3();var U$1=Object.freeze(Object.defineProperty({__proto__:null,build:S$1,getRadius:P},Symbol.toStringTag,{value:`Module`}));var s=4;var r=class extends e$2{constructor(){super(...arguments),this.blurSize=o$3()}};function T(){let o=new T$4,i=o.fragment;o.include(a$4),o.include(z$4),o.include(n);let m=(s+3)/2,w=1/(2*m*m);i.include(u$1),i.include(r$6,G$1),i.include(r$1);let u=5e4;i.uniforms.add(new s$8(`hasEmission`,e=>e.hasEmission),new e$1(`depthMap`,e=>e.depthTexture),new e$1(`normalMap`,e=>e.normalTexture),new t$4(`globalIlluminationTexture`,e=>e.texture),new t$4(`globalIlluminationWeightTexture`,e=>e.weightTexture),new s$6(`blurSize`,e=>e.blurSize),new r$3(`scaleGlobalIllumination`,e=>e.scaleGlobalIllumination),new r$3(`projScale`,(e,N)=>{let p=N.camera.distance;return p>u?Math.max(0,e.projScale-(p-u)):e.projScale}));let B=.1,C=400,c=.03;return i.code.add(a$3`
    void accumulateBlurSample(
      vec2 sampleUv,
      float sampleOffset,
      float centerDepth,
      vec3 centerNormal,
      float depthSharpness,
      bool skipOcclusionBlur,
      inout float emissionWeightSum,
      inout vec3 emissionSum,
      inout float occlusionWeightSum,
      inout float occlusionSum,
      float centerOcclusionBlendWeight
    ) {
      vec4 sampleGlobalIllumination = texture(globalIlluminationTexture, sampleUv);
      vec3 sampleNormal = texture(normalMap, sampleUv).rgb;
      float sampleDepth = linearDepthFromTexture(depthMap, sampleUv);

      float depthDelta = sampleDepth - centerDepth;
      bool isScaledGlobalIllumination = scaleGlobalIllumination < 1.0;
      float normalSimilarityWeight = globalIlluminationNormalSimilarityWeight(sampleNormal, centerNormal);
      float depthNormalCorrection = globalIlluminationDepthNormalCorrection(sampleNormal);
      vec3 emission = sampleGlobalIllumination.rgb;
      float emissionSpatialWeightMultiplier = isScaledGlobalIllumination ? ${a$3.float(C)} : 1.0;

      float emissionWeight = exp(
        -sampleOffset * sampleOffset * ${a$3.float(w)} * ${a$3.float(B)} * emissionSpatialWeightMultiplier
        - depthDelta * depthDelta * depthSharpness * depthNormalCorrection
      );
      emissionWeight *= normalSimilarityWeight;
      emissionWeightSum += emissionWeight;
      emissionSum += emissionWeight * emission;

      if (skipOcclusionBlur) {
        return;
      }

      float occlusionSpatialKernelScale = centerOcclusionBlendWeight > ${a$3.float(c)}
        ? ${a$3.float(.08)}
        : ${a$3.float(1.5)};
      float occlusionWeight = exp(-sampleOffset * sampleOffset * occlusionSpatialKernelScale - depthDelta * depthDelta * depthSharpness);
      occlusionWeight *= normalSimilarityWeight;
      occlusionWeightSum += occlusionWeight;
      occlusionSum += occlusionWeight * sampleGlobalIllumination.a;
    }
  `),i.main.add(a$3`
    vec3 emissionSum = vec3(0.0);
    float emissionWeightSum = 0.0;

    vec4 centerGlobalIllumination = texture(globalIlluminationTexture, uv);
    float centerOcclusionBlendWeight = texture(globalIlluminationWeightTexture, uv).r;
    bool isScaledGlobalIllumination = scaleGlobalIllumination < 1.0;
    bool shouldReuseCenterOcclusion = isScaledGlobalIllumination && centerOcclusionBlendWeight <= ${a$3.float(c)};
    bool shouldSkipLowQualityBlur = !hasEmission && shouldReuseCenterOcclusion;
    if (shouldSkipLowQualityBlur) {
      fragColor = vec4(
        quantizeGlobalIlluminationColor(centerGlobalIllumination.rgb),
        centerGlobalIllumination.a
      );
      return;
    }

    float centerDepth = linearDepthFromTexture(depthMap, uv);
    vec3 centerNormal = texture(normalMap, uv).rgb;
    float occlusionSum = 0.0;
    float occlusionWeightSum = 0.0;

    float depthSharpness = globalIlluminationDepthSharpness(projScale, centerDepth);
    for (int sampleOffset = -${a$3.int(s)}; sampleOffset <= ${a$3.int(s)}; ++sampleOffset) {
      float sampleOffsetFloat = float(sampleOffset);
      vec2 sampleUv = uv + sampleOffsetFloat * blurSize;
      accumulateBlurSample(
        sampleUv,
        sampleOffsetFloat,
        centerDepth,
        centerNormal,
        depthSharpness,
        shouldReuseCenterOcclusion,
        emissionWeightSum,
        emissionSum,
        occlusionWeightSum,
        occlusionSum,
        centerOcclusionBlendWeight
      );
    }

    float occlusion = shouldReuseCenterOcclusion ? centerGlobalIllumination.a : occlusionSum / occlusionWeightSum;
    vec3 blurredEmission = (emissionSum / emissionWeightSum).rgb;

    // heuristic dithering of the colors to remove banding, color shifts and wrong color accumulation
    float dither = ditherNoise(vec4(blurredEmission, occlusion)) - 1./32768.0;
    blurredEmission += isScaledGlobalIllumination ? 0.85 * dither : dither;

    fragColor = vec4(quantizeGlobalIlluminationColor(blurredEmission), occlusion);
  `),o}var G$1=new f$2;G$1.useFloatBlend=!1;var J$1=Object.freeze(Object.defineProperty({__proto__:null,GlobalIlluminationBlurDrawParameters:r,build:T},Symbol.toStringTag,{value:`Module`}));function et$1({normalTexture:e,metallicRoughnessTexture:a,metallicFactor:i,roughnessFactor:l,emissiveTexture:u,emissiveFactor:n,occlusionTexture:o}){return e==null&&a==null&&u==null&&(n==null||ua(n,m$4))&&o==null&&(l==null||l===1)&&(i==null||i===1)}var tt$1=_$3(1,1,.5);var Ne=_$3(0,.6,.2);var at$1=_$3(0,1,.2);function ot$1(e){e.vertex.code.add(a$3`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function lt$1(e,a){switch(a.output){case 5:case 6:case 7:case 8:e.fragment.code.add(a$3`float _calculateFragDepth(const in float depth) {
const float slope_scale = 2.0;
const float bias = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + slope_scale * m + bias;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`);break;case 9:e.fragment.code.add(a$3`void outputDepth(float _linearDepth){
gl_FragDepth = _linearDepth;
}`)}}var X$2=class extends At{constructor(){super(...arguments),this.shader=new St(j$2,()=>import(`./chunk-BUg8djfn.js`))}initializePipeline(){return J$3({colorWrite:$$3})}};X$2=y$2([vn(`esri.views.3d.webgl-engine.effects.ssao.SSAOBlurTechnique`)],X$2);var Oe=`eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM`;var le=class extends e$2{constructor(){super(...arguments),this.projScale=1}};var V=class extends le{constructor(){super(...arguments),this.intensity=1}};var ce=class extends e$2{};var K$2=class extends ce{constructor(){super(...arguments),this.blurSize=o$3()}};var k=class extends At{constructor(){super(...arguments),this.shader=new St(U$1,()=>import(`./chunk-BW_Bgsqi.js`))}initializePipeline(){return J$3({colorWrite:$$3})}};k=y$2([vn(`esri.views.3d.webgl-engine.effects.ssao.SSAOTechnique`)],k);var q=2;var $=class extends oe{constructor(e){super(e),this.consumes={required:[`normals`]},this.produces=ts.AMBIENT_ILLUMINATION,this._enableTime=0,this._passParameters=new V,this._drawParameters=new K$2}initialize(){let e=Uint8Array.from(atob(Oe),i=>i.charCodeAt(0)),a=new G$3(32);a.wrapMode=33071,a.pixelFormat=6407,a.wrapMode=10497,a.hasMipmap=!0,this._passParameters.noiseTexture=new ee$1(this.renderingContext,a,e),this.addHandles(A$2(()=>this.view.stage.renderer.hasAmbientIllumination,()=>this._enableTime=0))}destroy(){this._passParameters.noiseTexture=F$3(this._passParameters.noiseTexture)}render(e){let a=e.find(({name:D})=>D===`normals`),i=a?.getTexture(),l=a?.getTexture(B$4);if(!i||!l)return;let u=this.techniques.getCompiled(k),n=this.techniques.getCompiled(X$2);if(!u||!n)return this._enableTime=performance.now(),void this.requestRender(1);this._enableTime===0&&(this._enableTime=performance.now());let o=this.renderingContext,d=this.view.qualitySettings.fadeDuration,m=this.bindParameters,s=m.camera,x=s.relativeElevation,r=h((5e5-x)/2e5,0,1),w=d>0?Math.min(d,performance.now()-this._enableTime)/d:1,T=w*r;this._passParameters.normalTexture=i,this._passParameters.depthTexture=l,this._passParameters.projScale=1/s.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Ve/P(s)**6*T;let G=s.fullViewport[2],E=s.fullViewport[3],F=this.fboCache.acquire(G,E,`ssao input`,2);o.bindFramebuffer(F.fbo),o.setViewport(0,0,G,E),o.bindTechnique(u,m,this._passParameters,this._drawParameters),o.screen.draw();let z=Math.round(G/q),M=Math.round(E/q),p=this.fboCache.acquire(z,M,`ssao blur`,0);o.bindFramebuffer(p.fbo),this._drawParameters.colorTexture=F.getTexture(),v$3(this._drawParameters.blurSize,0,q/E),o.bindTechnique(n,m,this._passParameters,this._drawParameters),o.setViewport(0,0,z,M),o.screen.draw(),F.release();let j=this.fboCache.acquire(z,M,ts.AMBIENT_ILLUMINATION,0);return o.bindFramebuffer(j.fbo),o.setViewport(0,0,G,E),o.setClearColor(1,1,1,0),o.clear(16384),this._drawParameters.colorTexture=p.getTexture(),v$3(this._drawParameters.blurSize,q/G,0),o.bindTechnique(n,m,this._passParameters,this._drawParameters),o.setViewport(0,0,z,M),o.screen.draw(),o.setViewport4fv(s.fullViewport),p.release(),w<1&&this.requestRender(2),j}};y$2([wn()],$.prototype,`consumes`,void 0),y$2([wn()],$.prototype,`produces`,void 0),$=y$2([vn(`esri.views.3d.webgl-engine.effects.ssao.SSAO`)],$);var Ve=.5;function We$1(e,a){a.receiveAmbientOcclusion?(e.uniforms.add(new s$2(`ssaoTex`,i=>i.ssao?.getTexture())),e.constants.add(`blurSizePixelsInverse`,`float`,1/q),e.code.add(a$3`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(a$3`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}var Q$2=class extends At{constructor(){super(...arguments),this.shader=new St(J$1,()=>import(`./chunk-BCkIj2jJ.js`))}initializePipeline(){return J$3({colorWrite:$$3})}};Q$2=y$2([vn(`esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationBlurTechnique`)],Q$2);var ee=class extends At{constructor(){super(...arguments),this.shader=new St(pe,()=>import(`./chunk-C_vuUE1O.js`))}initializePipeline(){return J$3({colorWrite:$$3})}};ee=y$2([vn(`esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationTechnique`)],ee);var L$1=class extends c{constructor(){super(...arguments),this.hasColor=!0,this.hasEmission=!1,this.rayMarchMaxReach=z$1,this.rayMarchMaxSteps=16,this.useProjectedRayLength=!0,this.clampRayToScreen=!1}};y$2([b()],L$1.prototype,`hasColor`,void 0),y$2([b()],L$1.prototype,`hasEmission`,void 0);var te=class extends At{constructor(){super(...arguments),this.shader=new St(U$4,()=>import(`./chunk-KFw0QMlJ.js`))}initializePipeline(){return J$3({colorWrite:$$3})}};te=y$2([vn(`esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationUpscaleTechnique`)],te);var y=1;var ae=class extends oe{constructor(e){super(e),this.consumes={required:[`normals`]},this.produces=ts.AMBIENT_ILLUMINATION,this._passParameters=new m$1,this._drawParameters=new r,this._drawParametersUpscale=new o,this._maxFrames=256,this._lowQualityResolutionScale=.25,this._configuration=new L$1,this._globalIllumination=null,this._isGlobalIlluminationUpdate=!1,this._resetBuffer=!1}initialize(){this.addHandles(A$2(()=>this.view.stage.renderer.hasGlobalIllumination,()=>{this._resetAccumulatedFrames(),this._requestRender()},B$3))}destroy(){this._globalIllumination=V$2(this._globalIllumination)}resetAccumulatedFrames(){this._isGlobalIlluminationUpdate||this._resetAccumulatedFrames()}render(e){if(this._passParameters.accumulatedFrames>=this._maxFrames)return this._globalIllumination?.retain(),this._globalIllumination;let a=e.find(({name:He})=>He===`normals`),i=a?.getTexture(),l=a?.getTexture(B$4),u=this._mode;if(!i||!l)return this._emptyOutput;if(u===0)return this._resetBuffer=!1,this._emptyOutput;if(!this._canRender)return this._resetBuffer=!1,this._requestRender(),this._emptyOutput;let n=this.bindParameters;this._configuration.hasEmission=!!n.reprojection.lastFrameEmission;let o=this.techniques.getCompiled(ee,this._configuration),d=this.techniques.getCompiled(Q$2),m=u===1,s=m?this._lowQualityResolutionScale:1,x=m?this.techniques.getCompiled(te):null;if(!o||!d||m&&!x)return this._requestRender(),this._emptyOutput;let r=this.renderingContext,{camera:w}=n;this._passParameters.normalTexture=i,this._passParameters.depthTexture=l,this._passParameters.projScale=1/w.computeScreenPixelSizeAtDist(1),this._passParameters.scaleGlobalIllumination=s;let{fullWidth:T,fullHeight:G}=w,E=Math.max(1,Math.floor(T*s)),F=Math.max(1,Math.floor(G*s)),z=this.fboCache.acquire(E,F,`global illumination input`).acquireColor(C$2,0);r.bindFramebuffer(z.fbo),r.setViewport(0,0,E,F),r.bindTechnique(o,n,this._passParameters,this._drawParameters),r.screen.draw();let M=z.obtainAttachment(C$2),p=Math.max(1,Math.round(E/y)),j=Math.max(1,Math.round(F/y)),D=this.fboCache.acquire(p,j,`global illumination blur horizontal`);r.bindFramebuffer(D.fbo),this._drawParameters.texture=z.getTexture(),this._drawParameters.weightTexture=M.attachment,v$3(this._drawParameters.blurSize,0,y/F),r.bindTechnique(d,n,this._passParameters,this._drawParameters),r.setViewport(0,0,p,j),r.screen.draw(),z.release();let Ae=m?`global illumination blur vertical`:ts.AMBIENT_ILLUMINATION,B=this.fboCache.acquire(p,j,Ae);r.bindFramebuffer(B.fbo),r.setViewport(0,0,p,j),r.setClearColor(1,1,1,0),r.clear(16384),this._drawParameters.texture=D.getTexture(),this._drawParameters.weightTexture=M.attachment,v$3(this._drawParameters.blurSize,y/p,0),r.bindTechnique(d,n,this._passParameters,this._drawParameters),r.setViewport(0,0,p,j),r.screen.draw(),D.release(),B.attachColor(M,C$2),M.release();let Y=B;return x&&(Y=this.fboCache.acquire(T,G,ts.AMBIENT_ILLUMINATION).acquireColor(36065,0),r.bindFramebuffer(Y.fbo),r.setViewport(0,0,T,G),r.setClearColor(1,1,1,0),r.clear(16384),this._drawParametersUpscale.colorTexture=B.getTexture(),this._drawParametersUpscale.weightTexture=B.getTexture(36065),r.bindTechnique(x,n,this._passParameters,this._drawParametersUpscale),r.screen.draw(),B.release()),r.setViewport4fv(w.fullViewport),this._passParameters.temporalSampleFrame=(this._passParameters.temporalSampleFrame+1)%64,++this._passParameters.accumulatedFrames,this._cacheGlobalIllumination(Y),this._passParameters.accumulatedFrames<this._maxFrames&&this._requestRender(),Y}_requestRender(){this._isGlobalIlluminationUpdate=!0,this.requestRender(1),this._isGlobalIlluminationUpdate=!1}_cacheGlobalIllumination(e){this._globalIllumination!==e&&(this._globalIllumination=V$2(this._globalIllumination),this._globalIllumination=e,this._globalIllumination.retain())}get _emptyOutput(){let e=this.renderingContext,{fullWidth:a,fullHeight:i}=this.bindParameters.camera,l=this.fboCache.acquire(a,i,ts.AMBIENT_ILLUMINATION).acquireColor(C$2,0);return e.bindFramebuffer(l.fbo),e.setViewport(0,0,a,i),e.clearBuffer(0,[0,0,0,1]),e.clearBuffer(1,[0,0,0,0]),l}get _canRender(){let{reprojection:e,hasEmission:a,globalIllumination:i}=this.bindParameters;return!(!e.lastFrameColor||a&&!e.lastFrameEmission||!e.lastFrameDepth||!i||this._resetBuffer)}get _mode(){let{hasGlobalIlluminationHighQuality:e,hasGlobalIllumination:a}=this.view.stage.renderer;return e?2:a?1:0}_resetAccumulatedFrames(){this._passParameters.accumulatedFrames=0,this._globalIllumination=V$2(this._globalIllumination)}get test(){let e=this;return{passParameters:this._passParameters,configuration:this._configuration,get maxFrames(){return e._maxFrames},set maxFrames(a){e._maxFrames=a},get lowQualityResolutionScale(){return e._lowQualityResolutionScale},set lowQualityResolutionScale(a){e._lowQualityResolutionScale=a},get mode(){return e._mode},restartAccumulation:()=>{this._resetAccumulatedFrames(),this._passParameters.temporalSampleFrame=0,this._resetBuffer=!0,this._requestRender()}}}};y$2([wn()],ae.prototype,`consumes`,void 0),y$2([wn()],ae.prototype,`produces`,void 0),ae=y$2([vn(`esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIllumination`)],ae);function Ue(e,a){a.receiveGlobalIllumination?(e.uniforms.add(new s$8(`hasGlobalIlluminationTexture`,i=>i.globalIllumination!=null),new s$2(`globalIlluminationTexture`,i=>i.globalIllumination?.getTexture())),e.constants.add(`blurSizePixelsInverse`,`float`,1/y),e.code.add(a$3`vec3 readGlobalIlluminationOcclusionInverse() {
if (!hasGlobalIlluminationTexture) {
return vec3(1.0);
}
ivec2 texel = ivec2(gl_FragCoord.xy * blurSizePixelsInverse);
return vec3(texelFetch(globalIlluminationTexture, texel, 0).a);
}
vec3 readGlobalIlluminationOcclusion() {
return 1.0 - readGlobalIlluminationOcclusionInverse();
}
vec4 readGlobalIlluminationEmissionInverse() {
if (!hasGlobalIlluminationTexture) {
return vec4(1.0);
}
ivec2 texel = ivec2(gl_FragCoord.xy * blurSizePixelsInverse);
return 1.0 - vec4(texelFetch(globalIlluminationTexture, texel, 0).rgb, 0.0);
}
vec4 readGlobalIlluminationEmission() {
return max((1.0 - readGlobalIlluminationEmissionInverse() - 0.01) / 0.99, 0.0);
}`)):e.code.add(a$3`vec3 readGlobalIlluminationOcclusionInverse() { return vec3(1.0); }
vec3 readGlobalIlluminationOcclusion() { return vec3(0.0); }
vec4 readGlobalIlluminationEmissionInverse() { return vec4(1.0); }
vec4 readGlobalIlluminationEmission() { return vec4(0.0); }`)}function Ze$1(e){e.code.add(a$3`float mapChannel(float x, vec2 p) {
if((x < p.x) && (p.x == 0.0) || !(x < p.x) && (p.x == 1.0)) {
return 0.0;
}
float result = (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
return max(result, 0.0);
}`),e.code.add(a$3`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function Ke$1(e){e.constants.add(`ambientBoostFactor`,`float`,q$2)}function ke(e){e.uniforms.add(new s$1(`lightingGlobalFactor`,a=>a.lighting.globalFactor))}function hi(e,a){let{pbrMode:i,spherical:l,hasColorTexture:u,receiveGlobalIllumination:n}=a;e.include(l$2),e.include(Ue,a),e.include(We$1,a),i!==0&&e.include(J$2,a),e.include(Z$2,a),e.include(o$6),e.include(Le,a);let o=!(i===2&&!u);o&&e.include(Ze$1),Ke$1(e),ke(e),f(e),e.code.add(a$3`
    float additionalDirectedAmbientLight(float lightAlignment) {
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }

    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float lightAlignment = dot(${l?a$3`normalize(vPosWorld)`:a$3`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }
  `),m$2(e),e.code.add(a$3`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`);let d=n?`globalIlluminationOcclusion`:`ssao`,m=n?.75:1,s=n?1.5:1;switch(i){case 0:case 4:case 3:e.include(v$1),e.code.add(a$3`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld) * (1.0 - ssao);
vec3 albedoLinear = linearizeGamma(albedo);
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return delinearizeGamma(outColor);
}`);break;case 1:case 2:{let x=n?.35:.2;e.code.add(a$3`
        const float fillLightIntensity = 0.25;
        const float horizonLightDiffusion = 0.4;
        const float additionalAmbientIrradianceFactor = 0.02;
        const float groundReflectance = ${a$3.float(x)};

        vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
                                      vec3 viewDirection, vec3 upDirection, vec3 mrr, float additionalAmbientIrradiance) {
          PBRShadingInfo inputs;
          calculatePBRInputs(inputs, normal, viewDirection, upDirection, albedo, mrr);

          ${l$3(n,a$3`vec3 globalIlluminationOcclusion = min(1.2 * readGlobalIlluminationOcclusion(), 1.0);`)}
      `),a.useFillLights?e.uniforms.add(new s$8(`hasFillLights`,r=>r.enableFillLights)):e.constants.add(`hasFillLights`,`bool`,!1),e.code.add(a$3`
        vec3 ambientDir = vec3(5.0 * upDirection[1] - upDirection[0] * upDirection[2], - 5.0 * upDirection[0] - upDirection[2] * upDirection[1], upDirection[1] * upDirection[1] + upDirection[0] * upDirection[0]);
        ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent = ${a$3.float(m)} * inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
        // calculate ambient irradiance for localView and additionalLight for globalView
        vec3 ambientLightIrradianceComponent = ${a$3.float(s)} * calculateAmbientIrradiance(normal) * (1.0 - ${d}) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = groundReflectance * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),e.uniforms.add(new s$1(`lightingSpecularStrength`,r=>r.lighting.mainLight.specularStrength),new s$1(`lightingEnvironmentStrength`,r=>r.lighting.mainLight.environmentStrength)).code.add(a$3`
        vec3 horizonRingDir = inputs.RdotUP * upDirection - inputs.reflectedView;
        vec3 horizonRingH = normalize(horizonRingDir - viewDirection);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;

        // calculateAmbientRadiance for localView and additionalLight for global view
        vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance() * (1.0 - ${d}) + additionalLight;
        float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotUP + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;

        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radiance by the groundReflectance
        inputs.groundRadianceToSurface = 0.5 * groundReflectance * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;

        // Calculate average ambient radiance - This is used in the gamut mapping process to determine the black level for compression
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + groundReflectance);
      `),e.code.add(a$3`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent;

        ${l$3(n,a$3`
        vec3 globalIlluminationEmission = 2.25 * (0.75 * inputs.albedoLinear + 0.25) * readGlobalIlluminationEmission().rgb;
        outColorLinear += globalIlluminationEmission;`)}

      ${o?a$3`vec3 adjustedOutColorLinear = blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance);`:a$3`vec3 adjustedOutColorLinear = max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance);`}

        return delinearizeGamma(adjustedOutColorLinear);
      }
    `);break}case 5:case 6:{let x=n?.35:.5,r=n?.75:1,w=n?1.5:1;f(e),m$2(e),e.code.add(a$3`
      const float roughnessTerrain = 0.5;
      const float specularityTerrain = ${a$3.float(x)};

      vec3 evaluatePBRSimplifiedLighting(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDirection, vec3 upDirection) {
        PBRShadingInfo inputs;
        calculateSimplifiedInputs(inputs, normal, viewDirection, upDirection, albedo);

        ${l$3(n,a$3`vec3 globalIlluminationOcclusion = min(1.2 * readGlobalIlluminationOcclusion(), 1.0);`)}

        vec3 mainLightIrradianceComponent = ${a$3.float(r)} * (1.0 - shadow) * inputs.NdotL * mainLightIntensity;
        vec3 ambientLightIrradianceComponent = ${a$3.float(w)} * calculateAmbientIrradiance(normal) * (1.0 - ${d}) + additionalLight;
        vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;

        vec3 indirectDiffuse = ((1.0 - inputs.NdotUP) * mainLightIrradianceComponent + (1.0 + inputs.NdotUP ) * ambientSky) * 0.5;
        vec3 outDiffColor = inputs.albedoLinear * (1.0 - inputs.f0) * indirectDiffuse / PI;

        vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, roughnessTerrain) * mainLightIntensity;
        vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, inputs.NdotV);
        vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
        vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;

        vec3 outColorLinear = outDiffColor + specularComponent;

        ${l$3(n,a$3`
        vec3 globalIlluminationEmission = 2.25 * (0.75 * inputs.albedoLinear + 0.25) * readGlobalIlluminationEmission().rgb;
        outColorLinear += globalIlluminationEmission;`)}

        return delinearizeGamma(outColorLinear);
      }
      `);break}}}function Ei(e,a){let i=a.pbrMode,l=e.fragment;if(i!==2&&i!==0&&i!==1)return void l.code.add(a$3`void applyPBRFactors() {}`);if(i===0)return void l.code.add(a$3`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(i===2)return void l.code.add(a$3`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);let{hasMetallicRoughnessTexture:u,hasMetallicRoughnessTextureTransform:n,hasOcclusionTexture:o,hasOcclusionTextureTransform:d,bindType:m}=a;(u||o)&&e.include(L$4,a),l.code.add(a$3`vec3 mrr;
float occlusion;`),u&&l.uniforms.add(m===1?new e$1(`texMetallicRoughness`,s=>s.textureMetallicRoughness):new t$4(`texMetallicRoughness`,s=>s.textureMetallicRoughness)),o&&l.uniforms.add(m===1?new e$1(`texOcclusion`,s=>s.textureOcclusion):new t$4(`texOcclusion`,s=>s.textureOcclusion)),l.uniforms.add(m===1?new r$5(`mrrFactors`,s=>s.mrrFactors):new l$4(`mrrFactors`,s=>s.mrrFactors)),l.code.add(a$3`
    ${l$3(u,a$3`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${l$3(o,`void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }`)}

    float getBakedOcclusion() {
      return ${o?`occlusion`:`1.0`};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${l$3(u,`applyMetallicRoughness(${n?`metallicRoughnessUV`:`vuv0`});`)}
      ${l$3(o,`applyOcclusion(${d?`occlusionUV`:`vuv0`});`)}
    }
  `)}function Fi(e,a){a.snowCover&&(e.uniforms.add(new s$1(`snowCover`,i=>i.snowCover)).code.add(a$3`float getSnow(vec3 normal, vec3 groundNormal) {
return smoothstep(0.5, 0.55, dot(normal, groundNormal)) * snowCover;
}
float getRealisticTreeSnow(vec3 faceNormal, vec3 shadingNormal, vec3 groundNormal) {
float snow = min(1.0, smoothstep(0.5, 0.55, dot(faceNormal, groundNormal)) +
smoothstep(0.5, 0.55, dot(-faceNormal, groundNormal)) +
smoothstep(0.0, 0.1, dot(shadingNormal, groundNormal)));
return snow * snowCover;
}`),e.code.add(a$3`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}`))}function O(o,r){switch(o.fragment.code.add(a$3`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),r.normalType){case 1:o.attributes.add(`normalCompressed`,`vec2`),o.vertex.code.add(a$3`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:o.attributes.add(`normal`,`vec3`),o.vertex.code.add(a$3`vec3 normalModel() {
return normal;
}`);break;default:r.normalType;case 2:case 3:}}function X$1(o,r){let{vertex:t,varyings:a}=o;switch(r.normalType){case 0:case 1:o.include(O,r),a.add(`vNormalWorld`,`vec3`),a.add(`vNormalView`,`vec3`),t.uniforms.add(new o$4(`transformNormalViewFromGlobal`,l=>l.transformNormalViewFromGlobal)),t.code.add(a$3`void forwardNormal() {
vNormalWorld = normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case 2:o.vertex.code.add(a$3`void forwardNormal() {}`);break;default:r.normalType;case 3:}}var K$1=class extends d$4{constructor(){super(...arguments),this.transformNormalViewFromGlobal=t$1()}};var Q$1=class extends f$3{constructor(){super(...arguments),this.toMapSpace=o$2()}};function xo$1(o,r){r.instancedColor?(o.attributes.add(`instanceColor`,`vec4`),o.vertex.include(v$7),o.vertex.include(k$3),o.vertex.include(d$3),o.vertex.code.add(a$3`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${`instanceColor`}));
      }
    `)):o.vertex.code.add(a$3`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}var Z$1=t$1();function ko(o,r){let{hasModelTransformation:t,instancedDoublePrecision:a,instanced:l,output:U,hasVertexTangents:P}=r;t&&(o.vertex.uniforms.add(new o$8(`model`,s=>s.modelTransformation??g$1)),o.vertex.uniforms.add(new o$4(`normalLocalOriginFromModel`,s=>(n$1(Z$1,s.modelTransformation??g$1),Z$1)))),l&&a&&(o.attributes.add(`instanceModelOriginHi`,`vec3`),o.attributes.add(`instanceModelOriginLo`,`vec3`),o.attributes.add(`instanceModel`,`mat3`),o.attributes.add(`instanceModelNormal`,`mat3`));let i=o.vertex;a&&(i.include(p$2),i.uniforms.add(new s$3(`viewOriginHi`,s=>w$3(P$3(N,s.camera.viewInverseTransposeMatrix[3],s.camera.viewInverseTransposeMatrix[7],s.camera.viewInverseTransposeMatrix[11]),N)),new s$3(`viewOriginLo`,s=>F$5(P$3(N,s.camera.viewInverseTransposeMatrix[3],s.camera.viewInverseTransposeMatrix[7],s.camera.viewInverseTransposeMatrix[11]),N)))),i.code.add(a$3`
    vec3 getVertexInLocalOriginSpace() {
      return ${t?a?`(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz`:`(model * localPosition()).xyz`:a?`instanceModel * localPosition().xyz`:`localPosition().xyz`};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${a?a$3`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:`return vpos;`}
    }
    `),i.code.add(a$3`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${t?a?`normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)`:`normalLocalOriginFromModel * _normal.xyz`:a?`instanceModelNormal * _normal.xyz`:`_normal.xyz`});
    }
    `),U===4&&(li(i),i.code.add(a$3`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${t?a?`vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)`:`vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)`:a?`vec4(instanceModelNormal * _normal.xyz, 1.0)`:`_normal`}).xyz);
    }
    `)),P&&i.code.add(a$3`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t?a?`return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);`:`return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);`:a?`return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);`:`return _tangent;`}
    }`)}var N=o$1();function zo(o,r){o.varyings.add(`colorMixMode`,`int`),o.varyings.add(`opacityMixMode`,`int`),o.vertex.uniforms.add(new t$5(`symbolColorMixMode`,t=>b$1[t.colorMixMode])),r.hasSymbolColors?(o.vertex.include(v$7),o.vertex.include(k$3),o.vertex.include(d$3),o.attributes.add(`symbolColor`,`vec4`),o.vertex.code.add(a$3`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${`symbolColor`}));
    }
  `)):o.vertex.code.add(a$3`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),o.vertex.code.add(a$3`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${a$3.int(b$1.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${a$3.int(b$1.ignore)} : symbolColorMixMode;
    }
  `)}function M$1(o,r){ro(o,r,new r$3(`textureAlphaCutoff`,t=>t.textureAlphaCutoff))}function ro(o,r,t){let a=o.fragment;switch(a.code.add(`void discardOrAdjustAlpha(inout vec4 color) {`),r.alphaDiscardMode){case 1:a.code.add(`color.a = 1.0;`);break;case 0:a.include(R$3),a.code.add(`if (color.a < alphaCutoff) discard;`);break;case 3:a.uniforms.add(t).code.add(`if (color.a < textureAlphaCutoff) discard;`);break;case 2:a.uniforms.add(t).code.add(`
        if (color.a < textureAlphaCutoff) discard;
        color.a = 1.0;
      `);break;case 4:break;default:r.alphaDiscardMode}a.code.add(`}`)}function ar(o,r){let{vertex:t,fragment:a,varyings:l}=o,{hasColorTexture:U,alphaDiscardMode:P}=r,i=U&&P!==1,{output:s,normalType:w,hasColorTextureTransform:T}=r;switch(s){case 3:ni(t,r),o.include(er),a.include(ss,r),o.include(F$4,r),i&&a.uniforms.add(new e$1(`tex`,d=>d.texture)),t.main.add(a$3`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),o.include(M$1,r),a.main.add(a$3`
        discardBySlice(vpos);
        ${l$3(i,a$3`vec4 texColor = texture(tex, ${T?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}`);break;case 5:case 6:case 7:case 8:case 11:ni(t,r),o.include(er),o.include(F$4,r),o.include(A$3,r),o.include(lt$1,r),a.include(ss,r),o.include(n$2,r),Y(o),l.add(`depth`,`float`,{invariant:!0}),i&&a.uniforms.add(new e$1(`tex`,d=>d.texture)),t.main.add(a$3`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),o.include(M$1,r),a.main.add(a$3`
        discardBySlice(vpos);
        ${l$3(i,a$3`vec4 texColor = texture(tex, ${T?`colorUV`:`vuv0`});
               discardOrAdjustAlpha(texColor);`)}
        ${s===11?a$3`outputObjectAndLayerIdColor();`:a$3`outputDepth(depth);`}`);break;case 4:{ni(t,r),o.include(er),o.include(O,r),o.include(X$1,r),o.include(F$4,r),o.include(A$3,r),i&&a.uniforms.add(new e$1(`tex`,oo=>oo.texture)),w===2&&l.add(`vPositionView`,`vec3`,{invariant:!0});let d=w===0||w===1;t.main.add(a$3`
        vpos = getVertexInLocalOriginSpace();
        ${d?a$3`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:a$3`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),a.include(ss,r),o.include(M$1,r),a.main.add(a$3`
        discardBySlice(vpos);
        ${l$3(i,a$3`vec4 texColor = texture(tex, ${T?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}

        ${w===2?a$3`vec3 normal = screenDerivativeNormal(vPositionView);`:a$3`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case 10:ni(t,r),o.include(er),o.include(F$4,r),o.include(A$3,r),i&&a.uniforms.add(new e$1(`tex`,d=>d.texture)),t.main.add(a$3`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),a.include(ss,r),o.include(M$1,r),o.include(_$5,r),a.main.add(a$3`
        discardBySlice(vpos);
        ${l$3(i,a$3`vec4 texColor = texture(tex, ${T?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function dr(o,r){r.hasColorTextureTransform?(o.varyings.add(`colorUV`,`vec2`),o.vertex.uniforms.add(new o$4(`colorTextureTransformMatrix`,t=>t.colorTextureTransformMatrix??T$3)).code.add(a$3`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(a$3`void forwardColorUV(){}`)}function lr(o,r){r.hasNormalTextureTransform&&r.textureCoordinateType!==0?(o.varyings.add(`normalUV`,`vec2`),o.vertex.uniforms.add(new o$4(`normalTextureTransformMatrix`,t=>t.normalTextureTransformMatrix??T$3)).code.add(a$3`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(a$3`void forwardNormalUV(){}`)}function cr(o,r){r.hasEmissionTextureTransform&&r.textureCoordinateType!==0?(o.varyings.add(`emissiveUV`,`vec2`),o.vertex.uniforms.add(new o$4(`emissiveTextureTransformMatrix`,t=>t.emissiveTextureTransformMatrix??T$3)).code.add(a$3`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(a$3`void forwardEmissiveUV(){}`)}function mr(o,r){r.hasOcclusionTextureTransform&&r.textureCoordinateType!==0?(o.varyings.add(`occlusionUV`,`vec2`),o.vertex.uniforms.add(new o$4(`occlusionTextureTransformMatrix`,t=>t.occlusionTextureTransformMatrix??T$3)).code.add(a$3`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(a$3`void forwardOcclusionUV(){}`)}function ur(o,r){r.hasMetallicRoughnessTextureTransform&&r.textureCoordinateType!==0?(o.varyings.add(`metallicRoughnessUV`,`vec2`),o.vertex.uniforms.add(new o$4(`metallicRoughnessTextureTransformMatrix`,t=>t.metallicRoughnessTextureTransformMatrix??T$3)).code.add(a$3`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(a$3`void forwardMetallicRoughnessUV(){}`)}function io(o){let a=new T$4,{attributes:Z,vertex:e,fragment:r,varyings:n}=a,{output:_,offsetBackfaces:f$4,pbrMode:v,snowCover:s,spherical:oo}=o,ao=v===1||v===2;if(ni(e,o),Z.add(`position`,`vec3`),e.inputs.add(`position`,()=>`position`),n.add(`vpos`,`vec3`,{invariant:!0}),a.include(A$3,o),a.include(ko,o),a.include(W$3,o),a.include(dr,o),!v$6(_))return a.include(ar,o),a;a.include(cr,o),ti(a.vertex,o),a.include(O,o),a.include(er),f$4&&a.include(ot$1),n.add(`vNormalWorld`,`vec3`),n.add(`localvpos`,`vec3`,{invariant:!0}),a.include(F$4,o),a.include(zo,o),a.include(xo$1,o),a.include(t$6,o),e.include(v$7),e.include(m$5),e.uniforms.add(new r$7(`externalColor`,i=>i.externalColor,{supportsNaN:!0})),n.add(`vcolorExt`,`vec4`),a.include(o.instancedDoublePrecision?ye:ze,o),e.include(R$3),e.main.add(a$3`
    forwardVertexColor();

    MaskedColor maskedColorExt =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColorExt.color;
    forwardColorMixMode(maskedColorExt.mask);

    bool alphaCut = opacityMixMode != ${a$3.int(b$1.ignore)} && vcolorExt.a < alphaCutoff;
    vpos = getVertexInLocalOriginSpace();

    localvpos = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
    vpos = addVerticalOffset(vpos, localOrigin);
    vec4 basePosition = transformPosition(proj, view, vpos);

    forwardTextureCoordinates();
    forwardColorUV();
    forwardEmissiveUV();
    forwardLinearDepthToReadShadowMap();
    gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
    ${l$3(f$4,`offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);`,`basePosition;`)}
  `);let{hasColorTexture:d,hasColorTextureTransform:ro}=o;return r.include(hi,o),r.include(We$1,o),a.include(M$1,o),r.include(ss,o),a.include(ji,o),ti(r,o),f(r),Ke$1(r),ke(r),r.uniforms.add(e.uniforms.get(`localOrigin`),e.uniforms.get(`view`),new r$5(`ambient`,i=>i.ambient),new r$5(`diffuse`,i=>i.diffuse),new r$3(`opacity`,i=>i.opacity),new r$3(`layerOpacity`,i=>i.layerOpacity)),d&&r.uniforms.add(new e$1(`tex`,i=>i.texture)),a.include(Ei,o),r.include(J$2,o),r.include(o$7),r.include(Fi,o),m$2(r),r.main.add(a$3`
      discardBySlice(vpos);
      vec4 texColor = ${d?`texture(tex, ${ro?`colorUV`:`vuv0`})`:` vec4(1.0)`};
      ${l$3(d,`${l$3(o.textureAlphaPremultiplied,`texColor.rgb /= texColor.a;`)}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = readShadow(additionalAmbientScale, vpos);
      vec3 matColor = max(ambient, diffuse);
      ${o.hasVertexColors?a$3`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, opacityMixMode);`:a$3`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, opacityMixMode);`}

      vec3 shadingNormal = normalize(vNormalWorld);
      vec3 groundNormal = ${oo?`normalize(vpos + localOrigin)`:`vec3(0.0, 0.0, 1.0)`};

      ${l$3(s,`vec3 faceNormal = screenDerivativeNormal(vpos);
         float snow = getRealisticTreeSnow(faceNormal, shadingNormal, groundNormal);
         albedo = mix(albedo, vec3(1), snow);`)}

      ${a$3`albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}

      ${ao?a$3`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${l$3(s,`mrr = applySnowToMRR(mrr, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, groundNormal, mrr, additionalAmbientIrradiance);`:a$3`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${l$3(s,`, 1.0`)});`),a}var Bo=Object.freeze(Object.defineProperty({__proto__:null,build:io},Symbol.toStringTag,{value:`Module`}));function i(m,e){let r=m.fragment;switch(r.code.add(a$3`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case 0:r.code.add(a$3`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case 1:r.code.add(a$3`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case 2:r.code.add(a$3`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:e.doubleSidedMode;case 3:}}function xo(o,a){return bo(o,a)}function bo(o,a){let t=o.fragment,{hasVertexTangents:s,doubleSidedMode:r,hasNormalTexture:d,textureCoordinateType:p,bindType:m,hasNormalTextureTransform:c}=a;s?(o.attributes.add(`tangent`,`vec4`),o.varyings.add(`vTangent`,`vec4`),r===2?t.code.add(a$3`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):t.code.add(a$3`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):t.code.add(a$3`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),d&&p!==0&&(o.include(L$4,a),t.uniforms.add(m===1?new e$1(`normalTexture`,n=>n.textureNormal):new t$4(`normalTexture`,n=>n.textureNormal)),c&&(t.uniforms.add(m===1?new r$8(`scale`,n=>n.scale??_$4):new s$6(`scale`,n=>n.scale??_$4)),t.uniforms.add(new o$4(`normalTextureTransformMatrix`,n=>n.normalTextureTransformMatrix??T$3))),t.code.add(a$3`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),c&&t.code.add(a$3`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),t.code.add(a$3`return tangentSpace * rawNormal;
}`))}function No(o){let a=new T$4,{attributes:t,vertex:s,fragment:r,varyings:d}=a,{output:p,normalType:m,offsetBackfaces:c,spherical:n,snowCover:f,pbrMode:w,textureAlphaPremultiplied:To,instancedDoublePrecision:ho,hasVertexColors:C,hasVertexTangents:y,hasColorTexture:b,hasNormalTexture:wo,hasNormalTextureTransform:Co,hasColorTextureTransform:yo}=o;if(ni(s,o),t.add(`position`,`vec3`),s.inputs.add(`position`,()=>`position`),d.add(`vpos`,`vec3`,{invariant:!0}),a.include(A$3,o),a.include(ko,o),a.include(W$3,o),a.include(dr,o),!v$6(p))return a.include(ar,o),a;a.include(lr,o),a.include(cr,o),a.include(mr,o),a.include(ur,o),ti(s,o),a.include(O,o),a.include(er);let v=m===0||m===1;return v&&c&&a.include(ot$1),a.include(xo,o),a.include(X$1,o),a.include(xo$1,o),d.add(`vPositionLocal`,`vec3`),a.include(F$4,o),a.include(zo,o),a.include(t$6,o),s.uniforms.add(new r$7(`externalColor`,i=>i.externalColor,{supportsNaN:!0})),d.add(`vcolorExt`,`vec4`),s.include(v$7),s.include(m$5),a.include(ho?ye:ze,o),s.main.add(a$3`
    forwardVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${l$3(v,`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`)}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${l$3(y,`vTangent = dpTransformVertexTangent(tangent);`)}
    gl_Position = transformPosition(proj, view, vpos);
    ${l$3(v&&c,`gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);`)}

    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${a$3.int(b$1.ignore)} && vcolorExt.a < ${a$3.float(O$3)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),r.include(hi,o),r.include(We$1,o),a.include(M$1,o),r.include(ss,o),a.include(ji,o),ti(r,o),r.uniforms.add(s.uniforms.get(`localOrigin`),new r$5(`ambient`,i=>i.ambient),new r$5(`diffuse`,i=>i.diffuse),new r$3(`opacity`,i=>i.opacity),new r$3(`layerOpacity`,i=>i.layerOpacity)),b&&r.uniforms.add(new e$1(`tex`,i=>i.texture)),a.include(Ei,o),r.include(J$2,o),r.include(o$7),a.include(i,o),r.include(Fi,o),Ke$1(r),ke(r),m$2(r),r.main.add(a$3`
    discardBySlice(vpos);
    ${b?a$3`
            vec4 texColor = texture(tex, ${yo?`colorUV`:`vuv0`});
            ${l$3(To,`texColor.rgb /= texColor.a;`)}
            discardOrAdjustAlpha(texColor);`:a$3`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${m===2?a$3`vec3 normal = screenDerivativeNormal(vPositionLocal);`:a$3`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${l$3(C,`vColor.rgb *`)} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${l$3(C,`vColor.a * `)} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${wo?`mat3 tangentSpace = computeTangentSpace(${y?`normal`:`normal, vpos, vuv0`});
           vec3 shadingNormal = computeTextureNormal(tangentSpace, ${Co?`normalUV`:`vuv0`});`:`vec3 shadingNormal = normal;`}
    vec3 normalGround = ${n?`normalize(posWorld);`:`vec3(0.0, 0.0, 1.0);`}

    ${l$3(f,a$3`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${w===1||w===2?a$3`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${l$3(f,`mrr = applySnowToMRR(mrr, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:a$3`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${l$3(f,`, snow`)});
  `),a}var Ta=Object.freeze(Object.defineProperty({__proto__:null,build:No},Symbol.toStringTag,{value:`Module`}));var z=class{constructor(e,s,i){this.elementSize=s.stride,this._buffer=new e$3(e,ie(s,1)),this.resize(i)}destroy(){this._buffer.dispose()}get capacity(){return this._capacity}get array(){return this._array}get buffer(){return this._buffer}get usedMemory(){return this._array.byteLength+this._buffer.usedMemory}copyRange(e,s,i,n=0){let h=new Uint8Array(this.array,e*this.elementSize,(s-e)*this.elementSize);new Uint8Array(i.array,n*this.elementSize).set(h)}transferAll(){this._buffer.setData(this._array)}transferRange(e,s){let i=e*this.elementSize,n=s*this.elementSize;this._buffer.setSubData(new Uint8Array(this._array),i,i,n)}resize(e){let s=e*this.elementSize,i=new ArrayBuffer(s);this._array&&(e>=this._capacity?new Uint8Array(i).set(new Uint8Array(this._array)):new Uint8Array(i).set(new Uint8Array(this._array).subarray(0,e*this.elementSize))),this._array=i,this._buffer.setSize(s),this._capacity=e}};var A=class{constructor(e){this.localTransform=e.localTransform,this.globalTransform=e.globalTransform,this.modelOrigin=e.modelOrigin,this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelScaleFactors=e.modelScaleFactors,this.boundingSphere=e.boundingSphere,this.featureAttribute=e.getField(`instanceFeatureAttribute`,W$2),this.color=e.getField(`instanceColor`,M$3),this.olidColor=e.getField(`instanceOlidColor`,M$3),this.state=e.getField(`state`,b$2),this.lodLevel=e.getField(`lodLevel`,b$2)}};var S=class extends Et{constructor(t,e){super(t),this.events=new v$4,this._capacity=0,this._size=0,this._next=0,this._highlightOptionsMap=new Map,this._highlightOptionsMapPrev=new Map,this._layout=st(e),this._capacity=M,this._buffer=this._layout.createBuffer(this._capacity),this._view=new A(this._buffer)}get capacity(){return this._capacity}get size(){return this._size}get view(){return this._view}addInstance(){this._size+1>this._capacity&&this._grow();let t=this._findSlot();return this._view.state.set(t,1),this._size++,this.events.emit(`instances-changed`),t}removeInstance(t){let e=this._view.state;M$4(t>=0&&t<this._capacity&&!!(1&e.get(t)),`invalid instance handle`),this._getStateFlag(t,18)?this._setStateFlags(t,32):this.freeInstance(t),this.events.emit(`instances-changed`)}freeInstance(t){let e=this._view.state;M$4(t>=0&&t<this._capacity&&!!(1&e.get(t)),`invalid instance handle`),e.set(t,0),this._size--}setLocalTransform(t,e,s=!0){this._view.localTransform.setMat(t,e),s&&this.updateModelTransform(t)}getLocalTransform(t,e){this._view.localTransform.getMat(t,e)}setGlobalTransform(t,e,s=!0){this._view.globalTransform.setMat(t,e),s&&this.updateModelTransform(t)}getGlobalTransform(t,e){this._view.globalTransform.getMat(t,e)}updateModelTransform(t){let e=this._view,s=l,i=m;e.localTransform.getMat(t,We),e.globalTransform.getMat(t,G);let n=z$2(G,G,We);P$3(s,n[12],n[13],n[14]),e.modelOrigin.setVec(t,s),R$2(i,n),e.model.setMat(t,i);let h=P$4(l,n);h.sort(),e.modelScaleFactors.set(t,0,h[1]),e.modelScaleFactors.set(t,1,h[2]),C$1(i,i),w$2(i,i),e.modelNormal.setMat(t,i),this._setStateFlags(t,64),this.events.emit(`instance-transform-changed`,{index:t})}getModelTransform(t,e){let s=this._view;s.model.getMat(t,m),s.modelOrigin.getVec(t,l),e[0]=m[0],e[1]=m[1],e[2]=m[2],e[3]=0,e[4]=m[3],e[5]=m[4],e[6]=m[5],e[7]=0,e[8]=m[6],e[9]=m[7],e[10]=m[8],e[11]=0,e[12]=l[0],e[13]=l[1],e[14]=l[2],e[15]=1}applyShaderTransformation(t,e){this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,t,e)}getCombinedModelTransform(t,e){return this.getModelTransform(t,e),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,t,e),e}getCombinedLocalTransform(t,e){this._view.localTransform.getMat(t,e),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,t,e)}getCombinedMaxScaleFactor(t){let e=this._view.modelScaleFactors.get(t,1);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(l,this,t),e*=Math.max(l[0],l[1],l[2])),e}getCombinedMedianScaleFactor(t){let e=this._view.modelScaleFactors.get(t,0);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(l,this,t),e*=et(l[0],l[1],l[2])),e}getModel(t,e){this._view.model.getMat(t,e)}setFeatureAttribute(t,e){this._view.featureAttribute?.setVec(t,e)}getFeatureAttribute(t,e){this._view.featureAttribute?.getVec(t,e)}setColor(t,e){this._view.color?.setVec(t,e)}setObjectAndLayerIdColor(t,e){this._view.olidColor?.setVec(t,e)}setVisible(t,e){e!==this.getVisible(t)&&(this._setStateFlag(t,4,e),this.events.emit(`instance-visibility-changed`,{index:t}))}getVisible(t){return this._getStateFlag(t,4)}setHighlight(t,e){let{_highlightOptionsMap:s}=this,i=s.get(t);e?e!==i&&(s.set(t,e),this._setStateFlag(t,8,!0),this.events.emit(`instance-highlight-changed`)):i&&(s.delete(t),this._setStateFlag(t,8,!1),this.events.emit(`instance-highlight-changed`))}get highlightOptionsMap(){return this._highlightOptionsMap}getHighlightStateFlag(t){return this._getStateFlag(t,8)}geHighlightOptionsPrev(t){let e=this._highlightOptionsMapPrev.get(t)??null;return this._highlightOptionsMapPrev.delete(t),e}getHighlightName(t){let e=this.highlightOptionsMap.get(t)??null;return e?this._highlightOptionsMapPrev.set(t,e):this._highlightOptionsMapPrev.delete(t),e}getState(t){return this._view.state.get(t)}getLodLevel(t){return this._view.lodLevel.get(t)}countFlags(t){let e=0;for(let s=0;s<this._capacity;++s)this.getState(s)&t&&++e;return e}_setStateFlags(t,e){let s=this._view.state;e=s.get(t)|e,s.set(t,e)}_clearStateFlags(t,e){let s=this._view.state;e=s.get(t)&~e,s.set(t,e)}_setStateFlag(t,e,s){s?this._setStateFlags(t,e):this._clearStateFlags(t,e)}_getStateFlag(t,e){return!!(this._view.state.get(t)&e)}_grow(){this._capacity=Math.max(M,Math.floor(this._capacity*p$1)),this._buffer=this._layout.createBuffer(this._capacity).copyFrom(this._buffer),this._view=new A(this._buffer)}_findSlot(){let t=this._view.state,e=this._next;for(;1&t.get(e);)e=e+1===this._capacity?0:e+1;return this._next=e+1===this._capacity?0:e+1,e}};function et(t,e,s){return Math.max(Math.min(t,e),Math.min(Math.max(t,e),s))}y$2([wn({constructOnly:!0})],S.prototype,`shaderTransformation`,void 0),y$2([wn()],S.prototype,`_size`,void 0),y$2([wn({readOnly:!0})],S.prototype,`size`,null),S=y$2([vn(`esri.views.3d.webgl-engine.lib.lodRendering.InstanceData`)],S);var tt=ge().mat4f64(`localTransform`).mat4f64(`globalTransform`).vec4f64(`boundingSphere`).vec3f64(`modelOrigin`).mat3f(`instanceModel`).mat3f(`instanceModelNormal`).vec2f(`modelScaleFactors`);function st(t){return U(tt.clone(),t).u8(`state`).u8(`lodLevel`)}function U(t,e){return e.instancedFeatureAttribute&&t.vec4f(`instanceFeatureAttribute`),e.instancedColor&&t.vec4u8(`instanceColor`),st$1()&&t.vec4u8(`instanceOlidColor`),t}var l=o$1();var m=t$1();var We=t$2();var G=t$2();var M=64;var W=class{constructor(e){this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelOriginHi=e.instanceModelOriginHi,this.modelOriginLo=e.instanceModelOriginLo,this.featureAttribute=e.getField(`instanceFeatureAttribute`,W$2),this.color=e.getField(`instanceColor`,M$3),this.olidColor=e.getField(`instanceOlidColor`,M$3)}};var je=class{constructor(e,s){this._rctx=e,this._layout=s,this._headIndex=0,this._tailIndex=0,this._firstIndex=null,this._captureFirstIndex=!0,this._updating=!1,this._prevHeadIndex=0,this._resized=!1,this._capacity=1}destroy(){this._buffer&&this._buffer.destroy()}get buffer(){return this._buffer.buffer}get view(){return this._view}get capacity(){return this._capacity}get size(){let e=this._headIndex,s=this._tailIndex;return e>=s?e-s:e+this._capacity-s}get isEmpty(){return this._headIndex===this._tailIndex}get isFull(){return this._tailIndex===(this._headIndex+1)%this._capacity}get headIndex(){return this._headIndex}get tailIndex(){return this._tailIndex}get firstIndex(){return this._firstIndex}get usedMemory(){return this._buffer?.usedMemory??0}reset(){this._headIndex=0,this._tailIndex=0,this._firstIndex=null}startUpdateCycle(){this._captureFirstIndex=!0}beginUpdate(){M$4(!this._updating,`already updating`),this._updating=!0,this._prevHeadIndex=this._headIndex}endUpdate(){M$4(this._updating,`not updating`),this.size<.5*this.capacity&&this._shrink(),this._resized?(this._buffer.transferAll(),this._resized=!1):this._transferRange(this._prevHeadIndex,this._headIndex),this._updating=!1}allocateHead(){M$4(this._updating,`not updating`),this.isFull&&this._grow();let e=this.headIndex;return this._captureFirstIndex&&(this._firstIndex=e,this._captureFirstIndex=!1),this._incrementHead(),M$4(this._headIndex!==this._tailIndex,`invalid pointers`),e}freeTail(){M$4(this._updating,`not updating`),M$4(this.size>0,`invalid size`);let e=this._tailIndex===this._firstIndex;this._incrementTail(),e&&(this._firstIndex=this._tailIndex)}_grow(){let e=Math.max(M,Math.floor(this._capacity*p$1));this._resize(e)}_shrink(){let e=Math.max(M,Math.floor(this._capacity*F$2));this._resize(e)}_resize(e){if(M$4(this._updating,`not updating`),e===this._capacity)return;let s=new z(this._rctx,this._layout,e);if(this._buffer){this._firstIndex&&(this._firstIndex=(this._firstIndex+this._capacity-this._tailIndex)%this._capacity);let i=this.size,n=this._compactInstances(s);M$4(n===i,`invalid compaction`),this._buffer.destroy(),this._tailIndex=0,this._headIndex=n,this._prevHeadIndex=0}this._resized=!0,this._capacity=e,this._buffer=s,this._view=new W(this._layout.createView(this._buffer.array))}_compactInstances(e){let s=this._headIndex,i=this._tailIndex;return i<s?(this._buffer.copyRange(i,s,e),s-i):i>s?(this._buffer.copyRange(i,this._capacity,e),s>0&&this._buffer.copyRange(0,s,e,this._capacity-i),s+(this._capacity-i)):0}_incrementHead(e=1){this._headIndex=(this._headIndex+e)%this._capacity}_incrementTail(e=1){this._tailIndex=(this._tailIndex+e)%this._capacity}_transferRange(e,s){e<s?this._buffer.transferRange(e,s):e>s&&(s>0&&this._buffer.transferRange(0,s),this._buffer.transferRange(e,this._capacity))}};var it=ge().vec3f(`instanceModelOriginHi`).vec3f(`instanceModelOriginLo`).mat3f(`instanceModel`).mat3f(`instanceModelNormal`);function Ze(t){return U(it.clone(),t)}var L=class extends K$1{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=tt$1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType=`normal`,this.cullFace=2,this.instanced=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.instanceColorEncodesAlphaIgnore=!1,this.emissiveStrengthFromSymbol=0,this.emissiveStrengthKHR=1,this.emissiveSource=1,this.emissiveBaseColor=m$4,this.instancedDoublePrecision=!1,this.normalType=0,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=_$3(.2,.2,.2),this.diffuse=_$3(.8,.8,.8),this.externalColor=r$2(1,1,1,1),this.colorMixMode=`multiply`,this.opacity=1,this.layerOpacity=1,this.origin=o$1(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.modelTransformation=null,this.drivenOpacity=!1,this.writeDepth=!0,this.customDepthTest=0,this.textureAlphaMode=0,this.textureAlphaCutoff=O$3,this.textureAlphaPremultiplied=!1,this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}};var Ke=class extends Q$1{constructor(){super(...arguments),this.origin=o$1(),this.slicePlaneLocalOrigin=this.origin}};var v=class extends At{constructor(t,e){let s=ie(j(e));e.instanced&&e.instancedDoublePrecision&&(s=s.concat(ie(Ze(e)))),super(t,e,s),this.shader=new St(Ta,()=>import(`./chunk-B1oNWMCc.js`)),this.ignoreUnused=!0}_makePipeline(t,e){let{output:s,transparent:i,cullFace:n,customDepthTest:h,hasOccludees:d}=t;return J$3({blending:i?yi(s,!1,t.emissionDimmingPass):null,culling:at(t)?X$3(n):null,depthTest:Ii(s,rt(h)),depthWrite:xi(t),colorWrite:$$3,stencilWrite:d?vi:null,stencilTest:d?e?Mi:Ci:null,polygonOffset:pe$1(t)})}initializePipeline(t){return this._occludeePipelineState=this._makePipeline(t,!0),this._makePipeline(t,!1)}getPipeline(t,e,s){return s?this._occludeePipelineState:super.getPipeline(t,e,s)}};function rt(t){switch(t){case 1:return 515;case 0:case 3:return 513;case 2:return 516}}function at(t){return t.cullFace!==0||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}function j(t){let e=ge().vec3f(`position`);return t.normalType===1?e.vec2i16(`normalCompressed`,{glNormalized:!0}):e.vec3f(`normal`),t.hasVertexTangents&&e.vec4f(`tangent`),t.hasTextures&&e.vec2f16(`uv0`),t.hasVertexColors&&e.vec4u8(`color`,{glNormalized:!0}),t.hasSymbolColors&&e.vec4u8(`symbolColor`),!t.instanced&&st$1()&&e.vec4u8(`olidColor`),e}v=y$2([vn(`esri.views.3d.webgl-engine.shaders.DefaultMaterialTechnique`)],v);var a=class extends o$5{constructor(e){super(),this.spherical=e,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.pbrMode=0,this.cullFace=0,this.normalType=0,this.customDepthTest=0,this.emissionSource=0,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.instanced=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.receiveShadows=!1,this.hasShadowHighlights=!1,this.receiveAmbientOcclusion=!1,this.receiveGlobalIllumination=!1,this.textureAlphaPremultiplied=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.writeDepth=!0,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0,this.draped=!1}get textureCoordinateType(){return this.hasTextures?1:0}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||this.emissionSource===3||this.hasOcclusionTexture}get hasVVInstancing(){return this.instanced}get discardInvisibleFragments(){return this.transparent}};y$2([b({count:4})],a.prototype,`alphaDiscardMode`,void 0),y$2([b({count:3})],a.prototype,`doubleSidedMode`,void 0),y$2([b({count:7})],a.prototype,`pbrMode`,void 0),y$2([b({count:3})],a.prototype,`cullFace`,void 0),y$2([b({count:3})],a.prototype,`normalType`,void 0),y$2([b({count:3})],a.prototype,`customDepthTest`,void 0),y$2([b({count:8})],a.prototype,`emissionSource`,void 0),y$2([b()],a.prototype,`hasVertexColors`,void 0),y$2([b()],a.prototype,`hasSymbolColors`,void 0),y$2([b()],a.prototype,`hasVerticalOffset`,void 0),y$2([b()],a.prototype,`hasColorTexture`,void 0),y$2([b()],a.prototype,`hasMetallicRoughnessTexture`,void 0),y$2([b()],a.prototype,`hasOcclusionTexture`,void 0),y$2([b()],a.prototype,`hasNormalTexture`,void 0),y$2([b()],a.prototype,`hasScreenSizePerspective`,void 0),y$2([b()],a.prototype,`hasVertexTangents`,void 0),y$2([b()],a.prototype,`hasOccludees`,void 0),y$2([b()],a.prototype,`instanced`,void 0),y$2([b()],a.prototype,`instancedDoublePrecision`,void 0),y$2([b()],a.prototype,`hasModelTransformation`,void 0),y$2([b()],a.prototype,`offsetBackfaces`,void 0),y$2([b()],a.prototype,`hasVVSize`,void 0),y$2([b()],a.prototype,`hasVVColor`,void 0),y$2([b()],a.prototype,`receiveShadows`,void 0),y$2([b()],a.prototype,`hasShadowHighlights`,void 0),y$2([b()],a.prototype,`receiveAmbientOcclusion`,void 0),y$2([b()],a.prototype,`receiveGlobalIllumination`,void 0),y$2([b()],a.prototype,`textureAlphaPremultiplied`,void 0),y$2([b()],a.prototype,`instancedFeatureAttribute`,void 0),y$2([b()],a.prototype,`instancedColor`,void 0),y$2([b()],a.prototype,`writeDepth`,void 0),y$2([b()],a.prototype,`snowCover`,void 0),y$2([b()],a.prototype,`hasColorTextureTransform`,void 0),y$2([b()],a.prototype,`hasEmissionTextureTransform`,void 0),y$2([b()],a.prototype,`hasNormalTextureTransform`,void 0),y$2([b()],a.prototype,`hasOcclusionTextureTransform`,void 0),y$2([b()],a.prototype,`hasMetallicRoughnessTextureTransform`,void 0);var B=class extends v{constructor(){super(...arguments),this.shader=new St(Bo,()=>import(`./chunk-YMPiZTzX.js`))}};B=y$2([vn(`esri.views.3d.webgl-engine.shaders.RealisticTreeTechnique`)],B);var Z=class extends c{constructor(){super(...arguments),this.receiveShadows=!0}};function Je(t,e){return t.receiveShadows&&e.shadowHighlight?.getTexture()!=null}y$2([b()],Z.prototype,`receiveShadows`,void 0);var Qe=class extends Zt{constructor(e,s){super(e,X),this.materialType=`default`,this.supportsEdges=!0,this.intersectDraped=void 0,this.produces=new Map([[2,i=>H$2(i)&&!this.transparent],[4,i=>H$2(i)&&this.transparent&&this.parameters.writeDepth],[8,i=>H$2(i)&&this.transparent&&!this.parameters.writeDepth]]),this._layout=j(this.parameters),this._configuration=new a(s.spherical)}isVisibleForOutput(e){return e!==5&&e!==7&&e!==6||this.parameters.castShadows}get visible(){let{layerOpacity:e,colorMixMode:s,opacity:i,externalColor:n}=this.parameters;return e*(s===`replace`?1:i)*(s===`ignore`||isNaN(n[3])?1:n[3])>=O$3}get _hasEmissiveBase(){return!!this.parameters.emissiveTextureId||!ua(this.parameters.emissiveBaseColor,m$4)}get emissions(){return this.parameters.emissiveStrength>0&&(this.parameters.emissiveSource===0&&this._hasEmissiveBase||this.parameters.emissiveSource===1)?this.transparent?2:1:0}updateConfiguration(e){super.updateConfiguration(e);let{parameters:s,_configuration:i}=this;i.hasNormalTexture=s.hasNormalTexture,i.hasColorTexture=s.hasColorTexture,i.hasMetallicRoughnessTexture=s.hasMetallicRoughnessTexture,i.hasOcclusionTexture=s.hasOcclusionTexture;let{treeRendering:n,doubleSided:h,doubleSidedType:d}=s;i.hasVertexTangents=!n&&s.hasVertexTangents,i.instanced=s.instanced,i.instancedDoublePrecision=s.instancedDoublePrecision,i.hasVVColor=!!s.vvColor,i.hasVVSize=!!s.vvSize,i.hasVerticalOffset=s.verticalOffset!=null,i.hasScreenSizePerspective=s.screenSizePerspective!=null,i.hasSlicePlane=s.hasSlicePlane,i.alphaDiscardMode=s.textureAlphaMode,i.normalType=n?0:s.normalType,i.transparent=this.transparent,i.enableOITOffset=e.enableOITOffset,i.writeDepth=s.writeDepth,i.customDepthTest=s.customDepthTest??0,i.hasOccludees=e.hasOccludees,i.cullFace=s.hasSlicePlane?0:s.cullFace,i.hasModelTransformation=!n&&s.modelTransformation!=null,i.hasVertexColors=s.hasVertexColors,i.hasSymbolColors=s.hasSymbolColors,i.doubleSidedMode=n?2:h&&d===`normal`?1:h&&d===`winding-order`?2:0,i.instancedFeatureAttribute=s.instancedFeatureAttribute,i.instancedColor=s.instancedColor,v$6(e.output)?(i.receiveShadows=s.receiveShadows,i.hasShadowHighlights=Je(i,e),i.receiveAmbientOcclusion=s.receiveAmbientOcclusion&&e.ssao!=null,i.receiveGlobalIllumination=s.receiveAmbientOcclusion&&e.globalIlluminationEnabled):i.receiveShadows=i.hasShadowHighlights=i.receiveAmbientOcclusion=!1,i.textureAlphaPremultiplied=!!s.textureAlphaPremultiplied,i.pbrMode=s.usePBR?s.isSchematic?2:1:0,i.emissionSource=s.emissionSource,i.offsetBackfaces=!(!this.transparent||!s.offsetTransparentBackfaces),i.snowCover=e.snowCover>0,i.hasColorTextureTransform=!!s.colorTextureTransformMatrix,i.hasNormalTextureTransform=!!s.normalTextureTransformMatrix,i.hasEmissionTextureTransform=!!s.emissiveTextureTransformMatrix,i.hasOcclusionTextureTransform=!!s.occlusionTextureTransformMatrix,i.hasMetallicRoughnessTextureTransform=!!s.metallicRoughnessTextureTransformMatrix}intersect(e,s,i,n,h,d){if(this.parameters.verticalOffset!=null){let x=i.camera;P$3(J,s[12],s[13],s[14]);let p=null;switch(i.viewingMode){case 1:p=d$2(Xe,J);break;case 2:p=O$2(Xe,lt)}let y=v$5(ct,J,x.eye),Y=x$1(y),Ye=k$2(y,y,1/Y),$=null;this.parameters.screenSizePerspective&&($=Q$4(p,Ye));let $e=z$3(x,Y,this.parameters.verticalOffset,$??0,this.parameters.screenSizePerspective,null);k$2(p,p,$e),$$2(K,p,i.transform.inverseRotation),n=v$5(nt,n,K),h=v$5(ht,h,K)}d=nn(d,this._configuration,n,h),Lt(e,i,n,h,Ze$2(i.verticalOffset),d)}createGLMaterial(e){return new Q(e)}createBufferWriter(){return new vt(this._layout)}get transparent(){return ot(this.parameters)}};var Q=class extends n$3{constructor(e){super(B$2(B$2({},e),e.material.parameters))}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});let s=this._material.parameters;this.updateTexture(s.textureId);let i=e.camera.viewInverseTransposeMatrix;return P$3(s.origin,i[3],i[7],i[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(s.treeRendering?B:v,e)}};var X=class extends L{constructor(){super(...arguments),this.treeRendering=!1,this.useIndexing=!1,this.hasVertexTangents=!1}get hasNormalTexture(){return!this.treeRendering&&!!this.normalTextureId}get hasColorTexture(){return!!this.textureId}get hasMetallicRoughnessTexture(){return!this.treeRendering&&!!this.metallicRoughnessTextureId}get hasOcclusionTexture(){return!this.treeRendering&&!!this.occlusionTextureId}get emissiveStrength(){return this.emissiveStrengthFromSymbol*this.emissiveStrengthKHR}get emissionSource(){return this.emissiveTextureId!=null&&this.emissiveSource===0?3:this.emissiveSource===0?2:1}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||this.emissionSource===3||this.hasOcclusionTexture}};function ot(t){let{drivenOpacity:e,opacity:s,externalColor:i,layerOpacity:n,texture:h,textureId:d,textureAlphaMode:x,colorMixMode:p}=t,y=i[3];return e||s<1&&p!==`replace`||y<1&&p!==`ignore`||n<1||(h!=null||d!=null)&&x!==1&&x!==2&&p!==`replace`}var nt=o$1();var ht=o$1();var lt=t$3(0,0,1);var Xe=o$1();var K=o$1();var J=o$1();var ct=o$1();export{G$2 as A,Q$3 as B,T as C,A$1 as D,S$1 as E,z$1 as F,w$1 as G,ze as H,M$2 as I,f as L,S$2 as M,m$1 as N,B$1 as O,w as P,m$2 as R,tt$1 as S,P as T,f$1 as U,Z$2 as V,o as W,et$1 as _,Ze as a,lt$1 as b,No as c,Ei as d,Fi as f,at$1 as g,We$1 as h,S as i,I as j,C as k,i as l,Ne as m,Ke as n,at as o,Ke$1 as p,Qe as r,je as s,Je as t,io as u,hi as v,r as w,ot$1 as x,ke as y,Le as z};