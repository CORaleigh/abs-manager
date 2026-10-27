import{n as C$1,o as G,t as B}from"./chunk-DJnXYBB3.js";import{j as y}from"./chunk-DipCRkz0.js";import{I as vn,z as wn}from"./chunk-DPGF6fIg.js";import{o as M}from"./chunk-ZOmIU9cV.js";import{a as y$1}from"./chunk-DIApwev1.js";import{_ as f}from"./chunk-DKMLjHt4.js";import{f as R$1}from"./chunk-t4moUFd7.js";import{r as t$1}from"./chunk-e7sI9tAa.js";import{C as x$1,_ as h}from"./chunk-D5e0diGB.js";import{C as g$2,O as v$1,a as G$1}from"./chunk-DNMAr0lm.js";import{t as h$1}from"./chunk-GJ_Ik59v.js";import{b as R$2}from"./chunk-CrjZ6tLn.js";import{t as A}from"./chunk-E2NQApXS.js";import{i as t$2}from"./chunk-Bd5h90K4.js";import{f as t$3,u as o}from"./chunk-D9wPoXRK.js";import{i as U,r as T,s as o$1,t as I}from"./chunk-sU5Rl60Z.js";import{n as i,r as u$1}from"./chunk--y5pTViu.js";import{f as V}from"./chunk-Dn8VBlk5.js";import{a as E,n as B$1}from"./chunk-C6fTYZ5U.js";import{l as o$2,o as _,u as r}from"./chunk-aZ6dF80M.js";import{C as Q,G as w$1,H as ra,K as x$2,M as d,R as k$1,S as P,T as W,W as v$2,p as $,q as y$2,x as O$1}from"./main-AU4UNTRK.js";import{D as a,E as r$1,O as l,T as e,b,c as I$1,d as R$3,g as v$3,o as G$2}from"./chunk-j-eT4Sg9.js";import{I as pe$1,L as re,Lt as zt$1,M as mt,Mt as ot,Pt as st,R as se,Rt as s,S as ai,U as yi,Z as h$2,a as i$1,b as Zt,ct as ni,dt as u$2,et as z,gt as es,k as ie,lt as si,n as St$1,nt as R$4,ot as ji,pt as s$1,rt as _$1,st as li,t as At,tt as O$2,ut as ti,v as Qt$1,vt as n$1,w as ci,wt as r$2,x as ae,yt as A$1,z as ue$1}from"./chunk-DzBlPs30.js";import{a as ts,b as a$1,f as d$1,i as oe,l as r$3,m as z$1,p as m,v as s$2,y as t$4}from"./chunk-KbzWxVba.js";import{t as T$1}from"./chunk-gnLhZUCk.js";import{t as e$1}from"./chunk-DqPm7e7M.js";import{n as ie$1,t as ge$1}from"./chunk-BP-cY4YA.js";import{X as M$1,m as M$2}from"./chunk-DBeOui-U.js";import{t as A$2}from"./chunk-xLIU_9Yd.js";import{l as Z,r as J,t as $$1}from"./chunk-CHsDqmNw.js";import{i as s$3,n as a$2,r as n$2,s as h$3,u as u$3}from"./chunk-BkcyBJHm.js";import{v as i$2}from"./chunk-CjZnDVx5.js";var w=.5;function C(o,e){let t=o.vertex;o.include(m),o.attributes.add(`position`,`vec3`),o.vertex.inputs.add(`position`,()=>`position`),o.attributes.add(`normal`,`vec3`),e.hasVertexCenterOffset?o.attributes.add(`centerOffset`,`vec3`):t.constants.add(`centerOffset`,`vec3`,[0,0,0]),o.attributes.add(`groundDistance`,`float`),ni(t,e),ti(t,e),t.uniforms.add(new s$2(`viewport`,i=>i.camera.fullViewport),new r$1(`polygonOffset`,i=>i.shaderPolygonOffset),new s(`aboveGround`,i=>i.camera.aboveGround?1:-1)),e.hasVerticalOffset&&h$3(t),t.code.add(a`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),t.code.add(a`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = aboveGround;
}
float groundRelative = aboveGround * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),e.draped&&!e.hasVerticalOffset||li(t),e.draped||(t.uniforms.add(new s(`perDistancePixelRatio`,i=>Math.tan(i.camera.fovY/2)/(i.camera.fullViewport[2]/2))),t.code.add(a`
      void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
        float distanceToCamera = length(posView);

        // Compute offset in world units for a half pixel shift
        float pixelOffset = distanceToCamera * perDistancePixelRatio * ${a.float(.5)};

        // Apply offset along normal in the direction away from the ground surface
        vec3 modelOffset = normalModel * aboveGround * pixelOffset;

        // Apply the same offset also on the view space position
        vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

        posModel += modelOffset;
        posView += viewOffset;
      }
    `)),e.screenCenterOffsetUnitsEnabled&&si(t),e.hasScreenSizePerspective&&d$1(t),t.code.add(a`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      float pointGroundDistance = groundDistance;
      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?``:`applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);`}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?`vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);`:``}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?`float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);`:`float verticalOffsetScreenHeight = verticalOffset.x;`:``}

      ${e.hasVerticalOffset?a`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:``}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?``:a`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?`float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);`:`float centerOffsetY = centerOffset.y;`:``}

      ${e.screenCenterOffsetUnitsEnabled?`posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;`:``}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function D(o){o.uniforms.add(new s$3(`alignPixelEnabled`,e=>e.alignPixelEnabled)),o.code.add(a`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),o.code.add(a`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}var t=class extends e$1{constructor(){super(...arguments),this.effect=0,this.fadeFactor=h$1(1)}};function n(){let r=new T$1;return r.include(a$1),r.outputs.add(`fragColor`,`vec4`,0),r.fragment.uniforms.add(new e(`colorTexture`,o=>o.color),new e(`focusArea`,o=>o.focusArea),new t$4(`focusAreaEffectMode`,o=>o.effect),new r$1(`fadeFactor`,o=>o.fadeFactor.value)).main.add(a`
      float mask = texture( focusArea, uv, 0.0 ).r;
      vec4 color = texture( colorTexture, uv, 0.0 );
      vec4 colorDeSaturate = vec4(color.r * 0.25 + color.g * 0.5 + color.b * 0.25);
      if (focusAreaEffectMode == ${a.int(0)}) {
        fragColor = mask > 0.0 ? color : mix(color, 0.55 * colorDeSaturate + 0.45, fadeFactor);
      } else {
        fragColor = mask > 0.0 ? color : mix(color, 0.33 * color, fadeFactor);
      }
  `),r}var S$1=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaColorPassParameters:t,build:n},Symbol.toStringTag,{value:`Module`}));var O=class extends At{constructor(){super(...arguments),this.shader=new St$1(S$1,()=>import(`./chunk-CtQBKyBs.js`)),this.ignoreUnused=!0}initializePipeline(){return J({colorWrite:$$1})}};O=y$1([vn(`esri.views.3d.webgl-engine.effects.focusArea.FocusAreaColorTechnique`)],O);var g$1=class extends oe{constructor(t$5){super(C$1(B({},t$5),{view:t$5.focusAreasView.view})),this.consumes={required:[ts.FOCUSAREA_COLOR,ts.FOCUSAREA]},this.produces=ts.FOCUSAREA_COLOR,this._fadeDirection=0,this._passParameters=new t}fadeOut(t){this.removeAllHandles(),this._startTime=null,this._fadeDirection=1,this.addHandles(A(()=>this._passParameters.fadeFactor.value,e=>{e===0&&(this.removeAllHandles(),t())})),this.requestRender(2)}render(t){let e=t.find(({name:v})=>v===this.produces),l=this.techniques.getCompiled(O);if(!l)return this.requestRender(1),e;let C=this.focusAreasView.style,c=this.bindParameters,m=c.camera,D=m.fullViewport[2],S=m.fullViewport[3];this._startTime??=this.view.stage?.renderer.renderContext.time;let n=this.view.qualitySettings.fadeDuration,f=n>0?Math.min(n,this.view.stage?.renderer.renderContext.time-this._startTime)/n:1,A=t.find(({name:v})=>v===ts.FOCUSAREA),h=this.fboCache.acquire(D,S,this.produces),u=this.renderingContext;return u.bindFramebuffer(h.fbo),this._passParameters.color=e.getTexture(),this._passParameters.focusArea=A.getTexture(),this._passParameters.effect=R[C],this._passParameters.fadeFactor.value=this._fadeDirection===0?f:1-f,u.bindTechnique(l,c,this._passParameters),u.screen.draw(),h.attachDepth(e.getAttachment(B$1)),f<1&&this.requestRender(2),h}};y$1([wn()],g$1.prototype,`consumes`,void 0),y$1([wn()],g$1.prototype,`produces`,void 0),y$1([wn({constructOnly:!0})],g$1.prototype,`focusAreasView`,void 0),g$1=y$1([vn(`esri.views.3d.webgl-engine.effects.focusArea.FocusAreaColorNode`)],g$1);var R={bright:0,dark:1};var be=t=>t?R[t]:0;function Pe(t){let e$2=new T$1;e$2.include(C,t),e$2.vertex.include(es,t);let{output:l$1,hasOcclusionTexture:C$2,signedDistanceFieldEnabled:c,pixelSnappingEnabled:m$1,hasEmission:D$1,hasScreenSizePerspective:S,debugDrawLabelBorder:n,hasVVSize:f,hasVVColor:A,hasRotation:h,occludedFragmentFade:u,sampleSignedDistanceFieldTexelCenter:v,hasVertexColor:q,hasVertexSize:V,hasVertexRotation:$,hasVertexUVi:U}=t;e$2.include(m),e$2.include(A$1,t),e$2.include(n$1,t),e$2.include(ji,t);let{vertex:s,fragment:a$3}=e$2;a$3.include(u$2),a$3.code.add(a`
    vec4 applyFocusAreaStyle(vec4 color, int style) {
      const float factor = 0.46;
      const float factorBright = 0.32;

      if (style == ${a.int(0)}) {
        float luma = (color.r + color.g + color.b) / 3.0;
        float bright = luma * (1.0 - 0.6 * factorBright) + 0.6 * factorBright * color.a;
        float brightScaled = bright * factorBright;
        return vec4(brightScaled, brightScaled, brightScaled, color.a * factorBright);
      }

      float darkScaled = factor * factor;
      return vec4(color.rgb * darkScaled, color.a * factor);
    }
  `),e$2.varyings.add(`vcolor`,`vec4`),e$2.varyings.add(`vtc`,`vec2`),e$2.varyings.add(`vsize`,`vec2`);let p=l$1===10;s.uniforms.add(new s$2(`viewport`,o=>o.camera.fullViewport),new r$3(`screenOffset`,(o,H)=>v$1(F$1,2*o.screenOffset[0]*H.camera.pixelRatio,2*o.screenOffset[1]*H.camera.pixelRatio)),new r$3(`anchorPosition`,o=>Se(o)),new r$2(`materialColor`,({color:o})=>o),new r$1(`materialRotation`,o=>o.rotation),new r$3(`materialSize`,o=>o.size),new e(`tex`,o=>o.texture)),si(s),c&&(s.uniforms.add(new r$2(`outlineColor`,o=>o.outlineColor)),a$3.uniforms.add(new r$2(`outlineColor`,o=>Ce(o)?o.outlineColor:I),new r$1(`outlineSize`,o=>Ce(o)?o.outlineSize:0))),m$1&&s.include(D),S&&(z$1(s),d$1(s)),n&&e$2.varyings.add(`debugBorderCoords`,`vec4`),e$2.attributes.add(`uv0`,`vec2`),U&&e$2.attributes.add(`uvi`,`vec4`),q&&e$2.attributes.add(`color`,`vec4`),V&&e$2.attributes.add(`size`,`vec2`),$&&e$2.attributes.add(`rotation`,`float`),(f||A)&&e$2.attributes.add(`featureAttribute`,`vec4`),s.main.add(a`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${i$2};
      return;
    }

    vec2 vertexSize = materialSize${l(V,` * size`)};
    vec2 inputSize;
    ${l(S,a`
        inputSize = screenSizePerspectiveScaleVec2(vertexSize, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,a`
        inputSize = vertexSize;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${l(f,a`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);
  `);let Ae=a`
  ${l(U,a`
    vec2 texSize = vec2(textureSize(tex, 0));
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0)) / texSize;
    `,a`
    vec2 uv = mix(vec2(0.), vec2(1.), bvec2(uv0));
    `)}

    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${l(h,a`
        float angle = radians(materialRotation${l($,` + rotation`)});
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,ze=m$1?c?a`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:a`posProj += quadOffset;
if (inputSize.x == vertexSize.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:a`posProj += quadOffset;`;s.include(R$4),s.main.add(a`
    ${Ae}
    ${A?`vcolor = interpolateVVColor(featureAttribute.y) * materialColor;`:q?`vcolor = color * materialColor;`:`vcolor = materialColor;`}

    ${l(l$1===11,a`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < alphaCutoff;
    ${l(c,`alphaDiscard = alphaDiscard && outlineColor.a < alphaCutoff;`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${ze}
      gl_Position = posProj;
    }

    vtc = uv;

    ${l(n,a`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `);let E=v$3(l$1)&&t.hasFocusAreaStyle&&!t.draped;switch(a$3.uniforms.add(new e(`tex`,o=>o.texture)),E&&a$3.uniforms.add(new t$4(`focusAreaStyle`,o=>be(o.focusAreaStyle))),u&&!p&&(a$3.include(u$3),a$3.uniforms.add(new s$1(`depthMap`,o=>o.mainDepth),new r$1(`occludedOpacity`,o=>o.occludedFragmentOpacity?.value??1))),C$2&&a$3.uniforms.add(new s$1(`texOcclusion`,o=>o.hudOcclusion?.attachment)),n?a$3.main.add(`
        float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));
        // don't discard fragments on debug border
        float textureAlphaCutoff = isBorder > 0.0 ? 0.0 : alphaCutoff;
      `):a$3.main.add(`float textureAlphaCutoff = alphaCutoff;`),a$3.main.add(`vec2 samplePos = vtc;`),v&&a$3.main.add(a`float txSize = float(textureSize(tex, 0).x);
float texelSize = 1.0 / txSize;
vec2 scaleFactor = (vsize - txSize) * texelSize;
samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`),c?a$3.main.add(a`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < textureAlphaCutoff ||
          fillPixelColor.a + outlinePixelColor.a < alphaCutoff
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${l(!p,a`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < textureAlphaCutoff) {
          discard;
        }

        ${l(!p,a`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `):a$3.main.add(a`
        vec4 texColor = texture(tex, samplePos, -0.5);
        if (texColor.a < textureAlphaCutoff) {
          discard;
        }
        ${l(!p,a`fragColor = texColor * premultiplyAlpha(vcolor);`)}
      `),u&&!p&&a$3.main.add(a`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${a.float(1-ye)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `),C$2&&a$3.main.add(`fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;`),!p&&n&&a$3.main.add(`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`),l$1===2&&a$3.main.add(a`if (fragColor.a < alphaCutoff) {
discard;
}`),E&&a$3.main.add(a`fragColor = applyFocusAreaStyle(fragColor, focusAreaStyle);`),v$3(l$1)&&D$1&&a$3.main.add(`fragEmission = vec4(0.0);`),l$1){case 1:a$3.main.add(`
        fragColor = vec4(fragColor.rgb * floatBlendOutputScale, fragColor.a);
        fragAlpha = fragColor.a * floatBlendOutputScale;
      `);break;case 2:a$3.main.add(`fragColor.rgb /= fragColor.a;`);break;case 11:a$3.main.add(`outputObjectAndLayerIdColor();`);break;case 10:e$2.include(_$1,t),a$3.main.add(`outputHighlight(false);`)}return e$2}function Ce(t){return t.outlineColor[3]>0&&t.outlineSize>0}function Se(t){return t.textureIsSignedDistanceField?we(t.anchorPosition,t.distanceFieldBoundingBox,F$1):g$2(F$1,t.anchorPosition),F$1}var F$1=o$2();function we(t,e,l){v$1(l,t[0]*(e[2]-e[0])+e[0],t[1]*(e[3]-e[1])+e[1])}var ye=.08;var So=Object.freeze(Object.defineProperty({__proto__:null,anchorPosition:Se,build:Pe},Symbol.toStringTag,{value:`Module`}));var Wt=()=>y.getLogger(`esri.views.3d.layers.graphics.featureExpressionInfoUtils`);function Ot(s){return{cachedResult:s.cachedResult,arcade:s.arcade?{func:s.arcade.func,context:s.arcade.modules.arcadeUtils.createExecContext(null,{sr:s.arcade.context.spatialReference}),modules:s.arcade.modules}:null}}function Kt(s,e,r,t){return G(this,null,function*(){let a=s?.expression;if(typeof a!=`string`)return null;let n=qt(a);if(n!=null)return{cachedResult:n};let l=yield R$2();M(r);let i=l.arcadeUtils,d=i.createSyntaxTree(a);if(!d)return null;if(i.dependsOnView(d))return t?.error(`Expressions containing '$view' are not supported on ElevationInfo`),{cachedResult:0};let c=i.createFunction(d);return c?{arcade:{modules:l,func:c,context:i.createExecContext(null,{sr:e})}}:null})}function yt(s,e,r){return s.arcadeUtils.createFeature(e.attributes,e.geometry,r)}function St(s,e){if(s!=null&&!Ct(s)){if(!e||!s.arcade)return void Wt().errorOncePerTick(`Arcade support required but not provided`);let r=e;r._geometry&&(r._geometry=A$2(r._geometry)),s.arcade.modules.arcadeUtils.updateExecContext(s.arcade.context,e)}}function bt(s){if(s!=null){if(Ct(s))return s.cachedResult;let e=s.arcade,r=e?.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof r!=`number`&&(s.cachedResult=0,r=0),r}return 0}function Qt(s,e=!1){let r=s?.featureExpressionInfo,t=r?.expression;return e||t===`0`||(r=null),r??null}var er={cachedResult:0};function Ct(s){return s.cachedResult!=null}function qt(s){return s===`0`?0:null}var Vt=class s{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit=`meters`,this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.mode=null,this.centerInElevationSR=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=u$1(e)}get requiresSampledElevationInfo(){return this.mode!==`absolute-height`}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit=`meters`}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,r){let t=this.calculateOffsetRenderUnits(r);return this.featureExpressionInfoContext!=null?t:e+t}calculateOffsetRenderUnits(e){let r=this._meterUnitOffset,t=this.featureExpressionInfoContext;return t!=null&&(r+=bt(t)*this._metersPerElevationInfoUnit),r/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=i(e.unit)?e.unit:`meters`,this.offsetElevationInfoUnits=e.offset??0}setFeatureExpressionInfoContext(e){this._featureExpressionInfoContext=e}updateFeatureExpressionInfoContextForGraphic(e,r,t){e.arcade?(this._featureExpressionInfoContext=Ot(e),this.updateFeatureExpressionFeature(r,t)):this._featureExpressionInfoContext=e}updateFeatureExpressionFeature(e,r){let t=this.featureExpressionInfoContext;t?.arcade&&(t.cachedResult=void 0,St(this._featureExpressionInfoContext,e.geometry?yt(t.arcade.modules,e,r):null))}static fromElevationInfo(e){let r=new s;return e!=null&&r.setFromElevationInfo(e),r}};var k=class extends At{constructor(s,e){super(s,e,ie$1(ue).concat(ie$1(fe(e)))),this.shader=new St$1(So,()=>import(`./chunk-D5fx3rXx.js`)),this.ignoreUnused=!0,this.primitiveType=E.TRIANGLE_STRIP}initializePipeline(s){let{draped:e,output:r,depthTestEnabled:t}=s,a=G$2(r),n=t&&!e&&!a&&r!==10;return J({blending:yi(r,!0),depthTest:t&&!e?{func:515}:null,depthWrite:n?Z:null,colorWrite:$$1,polygonOffset:pe$1(s)})}};k=y$1([vn(`esri.views.3d.webgl-engine.shaders.HUDMaterialTechnique`)],k);var ue=ge$1().vec2u8(`uv0`,{glNormalized:!0});function fe(s){let e=ge$1().vec3f(`position`).vec3f(`normal`).f32(`groundDistance`);return s.hasVertexCenterOffset&&(e=e.vec3f(`centerOffset`)),s.hasVertexColor&&(e=e.vec4u8(`color`,{glNormalized:!0})),s.hasVertexSize&&(e=e.vec2f(`size`)),s.hasVertexRotation&&(e=e.f32(`rotation`)),(s.hasVVColor||s.hasVVSize)&&(e=e.vec4f(`featureAttribute`)),s.hasVertexUVi&&(e=e.vec4i16(`uvi`)),st()?e.vec4u8(`olidColor`):e}var u=class extends i$1{constructor(e,r){super(),this.spherical=e,this.polygonOffset=0,this.enableOITOffset=!1,this.screenCenterOffsetUnitsEnabled=!1,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.occludedFragmentFade=!1,this.hasOcclusionTexture=!1,this.hasFocusAreaStyle=!1,this.hasVertexColor=!0,this.hasVertexSize=!0,this.hasVertexRotation=!0,this.hasVertexUVi=!0,this.hasVertexCenterOffset=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.hasVVInstancing=!1,this.snowCover=!1,this.transparentOccluded=r}};y$1([b()],u.prototype,`transparentOccluded`,void 0),y$1([b({count:5})],u.prototype,`polygonOffset`,void 0),y$1([b()],u.prototype,`enableOITOffset`,void 0),y$1([b()],u.prototype,`screenCenterOffsetUnitsEnabled`,void 0),y$1([b()],u.prototype,`signedDistanceFieldEnabled`,void 0),y$1([b()],u.prototype,`sampleSignedDistanceFieldTexelCenter`,void 0),y$1([b()],u.prototype,`hasVVSize`,void 0),y$1([b()],u.prototype,`hasVVColor`,void 0),y$1([b()],u.prototype,`hasVerticalOffset`,void 0),y$1([b()],u.prototype,`hasScreenSizePerspective`,void 0),y$1([b()],u.prototype,`hasRotation`,void 0),y$1([b()],u.prototype,`debugDrawLabelBorder`,void 0),y$1([b()],u.prototype,`depthTestEnabled`,void 0),y$1([b()],u.prototype,`pixelSnappingEnabled`,void 0),y$1([b()],u.prototype,`draped`,void 0),y$1([b()],u.prototype,`occludedFragmentFade`,void 0),y$1([b()],u.prototype,`hasOcclusionTexture`,void 0),y$1([b()],u.prototype,`hasFocusAreaStyle`,void 0),y$1([b()],u.prototype,`hasVertexColor`,void 0),y$1([b()],u.prototype,`hasVertexSize`,void 0),y$1([b()],u.prototype,`hasVertexRotation`,void 0),y$1([b()],u.prototype,`hasVertexUVi`,void 0),y$1([b()],u.prototype,`hasVertexCenterOffset`,void 0);var zt=class extends Zt{constructor(e,r,t=!1){super(e,ge),this.produces=new Map([[12,a=>I$1(a)&&!this.parameters.drawAsLabel&&!this._configuration.transparentOccluded],[13,a=>I$1(a)&&!this.parameters.drawAsLabel&&this._configuration.transparentOccluded],[14,a=>I$1(a)&&this.parameters.drawAsLabel],[18,a=>this.parameters.draped&&I$1(a)]]),this._visible=!0,this._configuration=new u(r,t)}updateConfiguration(e){super.updateConfiguration(e);let{parameters:r,_configuration:t}=this,a=r.draped;t.enableOITOffset=e.enableOITOffset,t.hasSlicePlane=this.parameters.hasSlicePlane,t.hasVerticalOffset=!!this.parameters.verticalOffset,t.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,t.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits===`screen`,t.polygonOffset=this.parameters.polygonOffset,t.draped=a,t.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,t.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,t.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,t.hasRotation=this.parameters.hasRotation,t.hasVVSize=!!this.parameters.vvSize,t.hasVVColor=!!this.parameters.vvColor,t.occludedFragmentFade=!a&&!!this.parameters.occludedFragmentOpacity,t.hasFocusAreaStyle=this.parameters.focusAreaStyle!=null,t.depthTestEnabled=this.parameters.depthEnabled,t.hasVertexColor=this.parameters.hasVertexColor,t.hasVertexSize=this.parameters.hasVertexSize,t.hasVertexRotation=this.parameters.hasVertexRotation,t.hasVertexUVi=this.parameters.hasVertexUVi,t.hasVertexCenterOffset=this.parameters.hasVertexCenterOffset,v$3(e.output)&&(t.debugDrawLabelBorder=!!ot.LABELS_SHOW_BORDER),t.hasOcclusionTexture=!r.drawAsLabel&&t.transparentOccluded&&R$3(e.output)}intersect(e,r,t,a,n,l){let{options:{selectionMode:i,hud:d$2,excludeLabels:c},point:h,camera:o$3}=t,{parameters:m}=this;if(!i||!d$2||c&&m.isLabel||!e.visible||!h||!o$3)return;let y=e.attributes.get(`featureAttribute`),{scaleX:R,scaleY:C}=Ft(y==null?null:T(y.data,Pt),m,o$3.pixelRatio),O=e.attributes.get(`position`),b=e.attributes.get(`size`),V$1=e.attributes.get(`normal`),z=e.attributes.get(`rotation`),E=e.attributes.get(`centerOffset`),T$2=this.parameters.size;M$1(O.size>=3);let I=this.parameters.centerOffsetUnits===`screen`;for(let U=0;U<O.data.length/O.size;U++){let Z=U*O.size;if(P(g,O.data[Z],O.data[Z+1],O.data[Z+2]),W(g,g,r),W(g,g,o$3.viewMatrix),E){let P$1=U*E.size;P(S,E.data[P$1],E.data[P$1+1],E.data[P$1+2])}else P(S,0,0,0);if(!I&&(g[0]+=S[0],g[1]+=S[1],S[2]!==0)){let P=S[2];d(S,g),v$2(g,g,k$1(S,S,P))}let $$2=U*V$1.size;P(F,V$1.data[$$2],V$1.data[$$2+1],V$1.data[$$2+2]),$(F,F,R$1(Rt,r));let{normal:Tt,cosAngle:At}=Et(F,o$3,wt),Mt=Dt(this.parameters,g,At,o$3,pe);if(w$1(g,g,Tt,Mt),o$3.applyProjection(g,v),v[0]>-1){if(I&&(S[0]||S[1])&&(v[0]+=S[0]*o$3.pixelRatio,S[1]!==0&&(v[1]+=pe.alignmentEvaluator.apply(S[1])*o$3.pixelRatio),o$3.unapplyProjection(v,g)),v[0]+=this.parameters.screenOffset[0]*o$3.pixelRatio,v[1]+=this.parameters.screenOffset[1]*o$3.pixelRatio,v[0]=Math.floor(v[0]),v[1]=Math.floor(v[1]),x[0]=T$2[0],x[1]=T$2[1],b!=null){let A=U*b.size;x[0]*=b.data[A],x[1]*=b.data[A+1]}pe.evaluator.applyVec2(x,x);let P=Gt*o$3.pixelRatio,ve=0;m.textureIsSignedDistanceField&&(ve=Math.min(m.outlineSize,.5*x[0])*o$3.pixelRatio/2),x[0]*=R,x[1]*=C;let Lt=m.rotation+(z!=null?z.data[U*z.size]:0),Bt=Se(m);if(It(h,v[0],v[1],x,P,ve,Lt,m,Bt)){let A=t.ray;if(W(Ut,g,V(Nt,o$3.viewMatrix)),v[0]=h[0],v[1]=h[1],o$3.unprojectFromRenderScreen(v,g)){let M=o();O$1(M,A.direction);let Oe=1/x$2(M);k$1(M,M,Oe);let ye=y$2(A.origin,g)*Oe;l(ye,ye,M,-1,Ut)}}}}}intersectDraped(e,r,t,a,n){let l=e.attributes.get(`position`),i=e.attributes.get(`size`),d=e.attributes.get(`rotation`),c=this.parameters,h=c.size,o=e.attributes.get(`featureAttribute`),{scaleX:y,scaleY:D}=Ft(o==null?null:T(o.data,Pt),c,e.screenToWorldRatio),R=Xt*e.screenToWorldRatio;for(let C=0;C<l.data.length/l.size;C++){let O=C*l.size,b=l.data[O],V=l.data[O+1];if(x[0]=h[0],x[1]=h[1],i!=null){let I=C*i.size;x[0]*=i.data[I],x[1]*=i.data[I+1]}let z=0;c.textureIsSignedDistanceField&&(z=Math.min(c.outlineSize,.5*x[0])*e.screenToWorldRatio/2),x[0]*=y,x[1]*=D;let E=c.rotation+(d!=null?d.data[C*d.size]:0),T=Se(c);It(t,b,V,x,R,z,E,c,T)&&a(n.distance,n.renderDistance,n.normal,-1)}}createBufferWriter(){return new xe(this.parameters)}applyShaderOffsets(e,r,t,a,n,l,i,d){$(de,t,R$1(Rt,a));let c=Et(de,i,wt),h=jt(x$2(r),i),o=Dt(this.parameters,r,c.cosAngle,i,d);w$1(r,r,c.normal,o+h),w$1(e,e,de,o+h);let m=l+o;this._applyPolygonOffsetView(r,c,m,i,r),this._applyCenterOffsetView(r,n,r)}applyShaderOffsetsNDC(e,r,t,a,n,l){return this._applyCenterOffsetNDC(e,r,a,n),l!=null&&O$1(l,n),this._applyPolygonOffsetNDC(n,t,a,n),n}_applyPolygonOffsetView(e,r,t,a,n){let l=a.aboveGround?1:-1,i=Math.sign(t);i===0&&(i=l);let d=l*i;if(this.parameters.shaderPolygonOffset<=0)return O$1(n,e);let c=h(Math.abs(r.cosAngle),.01,1),h$4=1-Math.sqrt(1-c*c)/c/a.viewport[2];return k$1(n,e,d>0?h$4:1/h$4),n}_applyCenterOffsetView(e,r,t){let a=this.parameters.centerOffsetUnits!==`screen`;return t!==e&&O$1(t,e),a&&(t[0]+=r[0],t[1]+=r[1],r[2]&&(d(F,t),ra(t,t,k$1(F,F,r[2])))),t}_applyCenterOffsetNDC(e,r,t,a){let n=this.parameters.centerOffsetUnits!==`screen`;return a!==e&&O$1(a,e),n||(a[0]+=r[0]/t.fullWidth*2,a[1]+=r[1]/t.fullHeight*2),a}_applyPolygonOffsetNDC(e,r,t,a){let n=this.parameters.shaderPolygonOffset;if(e!==a&&O$1(a,e),n){let l=t.aboveGround?1:-1,i=l*Math.sign(r);a[2]-=(i||l)*n}return a}set visible(e){this._visible=e}get visible(){let{color:e,outlineSize:r,outlineColor:t}=this.parameters,a=e[3]>=.003913894324853229||r>=.003913894324853229&&t[3]>=.003913894324853229;return this._visible&&a}createGLMaterial(e){return new me(e)}calculateRelativeScreenBounds(e,r,t=f()){return Ht(this.parameters,e,r,t),t[2]=t[0]+e[0],t[3]=t[1]+e[1],t}};var me=class extends n$2{constructor(e){super(B(B({},e),e.material.parameters))}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(k,e)}};function Ht(s,e,r,t){t[0]=s.anchorPosition[0]*-e[0]+s.screenOffset[0]*r,t[1]=s.anchorPosition[1]*-e[1]+s.screenOffset[1]*r}function Et(s,e,r){return W(r.normal,s,e.viewInverseTransposeMatrix),r.cosAngle=Q(r.normal,Yt),r}function It(s,e,r,t,a,n,l,i,d){let c=e-a-t[0]*d[0],h=c+t[0]+2*a,o=r-a-t[1]*d[1],m=o+t[1]+2*a,y=i.distanceFieldBoundingBox;return i.textureIsSignedDistanceField&&y!=null&&(c+=t[0]*y[0],o+=t[1]*y[1],h-=t[0]*(1-y[2]),m-=t[1]*(1-y[3]),c-=n,h+=n,o-=n,m+=n),v$1(_t,e,r),G$1(N,s,_t,x$1(l)),N[0]>c&&N[0]<h&&N[1]>o&&N[1]<m}var pe=new h$2;var g=o();var F=o();var v=o$1();var de=o();var Ut=o();var N=o$2();var _t=o$2();var Rt=t$1();var Nt=t$2();var S=o();var he=o();var Pt=o$1();var wt={normal:o(),cosAngle:0};var Gt=1;var Xt=2;var x=r(0,0);var Yt=t$3(0,0,1);var ge=class extends a$2{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1,this.color=U,this.size=_,this.polygonOffset=0,this.anchorPosition=r(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=U,this.outlineSize=0,this.distanceFieldBoundingBox=o$1(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.hasVertexColor=!1,this.hasVertexSize=!1,this.hasVertexRotation=!1,this.hasVertexUVi=!1,this.hasVertexCenterOffset=!1,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.centerOffsetUnits=`world`,this.drawAsLabel=!1,this.depthEnabled=!0,this.focusAreaStyle=null,this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}};var xe=class{constructor(e){this.baseInstanceLayout=ue,this.layout=fe(e)}elementCount(e){return e.get(`position`).indices.length}elementCountBaseInstance(e){return e.get(`uv0`).indices.length}write(e,r,t,a,n){if(n==null)return;let{buffer:l,offset:i}=n,{position:d,normal:c,color:h,size:o,rotation:m,centerOffset:y,groundDistance:D,featureAttribute:R,uvi:C}=l;se(t.get(`position`),e,d,i),re(t.get(`normal`),r,c,i);let O=t.get(`position`).indices.length;if(C){let b=t.get(`uvi`)?.data;if(b&&b.length>=4){let[V,z,E,T]=b;for(let I=0;I<O;++I){let U=i+I;C.setValues(U,V,z,E,T)}}}if(h&&ae(t.get(`color`),4,h,i),o&&mt(t.get(`size`),o,i),m&&ai(t.get(`rotation`),m,i),y&&(t.get(`centerOffset`)?Qt$1(t.get(`centerOffset`),y,i):ci(y,i,O)),t.get(`groundDistance`)?ai(t.get(`groundDistance`),D,i):ci(D,i,O),R&&(t.get(`featureAttribute`)?ie(t.get(`featureAttribute`),R,i):ci(R,i,O)),a!=null){let b=t.get(`position`)?.indices;if(b){let V=b.length,z=l.getField(`olidColor`,M$2);ue$1(a,z,V,i)}}}writeBaseInstance(e,r){let{uv0:t}=r;mt(e.get(`uv0`),t,0)}};function Ft(s,e,r){return s==null||e.vvSize==null?{scaleX:r,scaleY:r}:(zt$1(he,e,s),{scaleX:he[0]*r,scaleY:he[1]*r})}function jt(s,e){let r=e.computeRenderPixelSizeAtDist(s)*w;return(e.aboveGround?1:-1)*r}function Dt(s,e,r,t,a){if(!s.verticalOffset?.screenLength){let d=x$2(e);return a.update(r,d,s.screenSizePerspective,s.screenSizePerspectiveMinPixelReferenceSize,s.screenSizePerspectiveAlignment,null),0}let n=x$2(e),l=s.screenSizePerspectiveAlignment??s.screenSizePerspective,i=z(t,n,s.verticalOffset,r,l,s.screenSizePerspectiveMinPixelReferenceSize);return a.update(r,n,s.screenSizePerspective,s.screenSizePerspectiveMinPixelReferenceSize,s.screenSizePerspectiveAlignment,null),i}export{zt as a,n as c,D as d,er as i,t as l,Qt as n,Pe as o,Vt as r,Se as s,Kt as t,C as u};