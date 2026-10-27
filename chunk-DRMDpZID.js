import{j as y$2}from"./chunk-DipCRkz0.js";import{I as vn,S as Ur$1}from"./chunk-DPGF6fIg.js";import{x as b$1}from"./chunk-DqQQXN_R.js";import{a as y$3}from"./chunk-DIApwev1.js";import{_ as h}from"./chunk-D5e0diGB.js";import{C as g,O as v}from"./chunk-DNMAr0lm.js";import{r as M$1}from"./chunk-ChnJNXUG.js";import{i as t}from"./chunk-Bd5h90K4.js";import{f as t$1,u as o}from"./chunk-D9wPoXRK.js";import{i as t$2}from"./chunk-DX2NVN4N.js";import{c as r,i as U$1,n as N$1,s as o$1,t as I}from"./chunk-sU5Rl60Z.js";import{a as L$2}from"./chunk-mf5g_mgp.js";import{c as N$2,d as U$2,f as V$1}from"./chunk-Dn8VBlk5.js";import{n as Hn}from"./chunk-DjzQXVPC.js";import{a as E$1,l as R$1,m as e}from"./chunk-C6fTYZ5U.js";import{l as o$2}from"./chunk-aZ6dF80M.js";import{G as x$1,I as j$1,K as y$4,L as k,S as Q$1,U as v$1,b as O,j as d,r as e$1,v as H$2,w as W$1,x as P}from"./main-YJPEZRYI.js";import{D as a,E as r$1,O as l,T as e$2,_ as y$5,b as b$2,g as v$2,r as B$1,t as $$1,u as P$1,w as r$2}from"./chunk-9JIhA6yP.js";import{Et as r$3,F as vi$1,Ft as pt,I as xi,It as st$1,K as n$1,L as yi$1,Lt as ut,Q as St,R as zi$1,T as li$1,X as o$3,Z as At,_t as s$1,a as Fi$1,at as O$1,c as Kt,ct as g$1,ft as ni$1,ht as u$1,i as Di,it as ss,l as Mi$1,m as Zt,mt as ti$1,n as Bi,nt as s$3,o as Ii,ot as R$2,p as Yt,pt as si$1,r as Ci,t as Ai$1,tt as n,u as Oi$1,ut as ji$1,xt as A$1,yt as s$2}from"./chunk-Bh6KJGud.js";import{_ as de$2,d as o$5,f as s$4,h as z,m,t as o$4,u as r$4}from"./chunk-C7TAPj_8.js";import{t as T$1}from"./chunk-gnLhZUCk.js";import{a as D$2,p as P$2,u as K$1}from"./chunk-DsXWakzl.js";import{$ as v$3,i as Ce$2}from"./chunk-eg70iNBC.js";import{a as U$3,r as J,t as $$2}from"./chunk-CHsDqmNw.js";import{t as c}from"./chunk-DNqoGOgF.js";import{t as q$1}from"./chunk-BSqv-zPt.js";import{d as y$6,i as U$4,r as T$2,s as X$2,u as _$1}from"./chunk-Bz4k26a5.js";import{n as ie,t as ge$1}from"./chunk-DVwskg26.js";import{a as it$1,c as q$2,i as X$3,n as K$2,t as G$1}from"./chunk-Bnd9NxQY.js";var W=8;function ce(a$4,e){let{vertex:t,attributes:r}=a$4;t.uniforms.add(new r$1(`intrinsicWidth`,i=>i.width));let{hasScreenSizePerspective:o,spherical:n}=e;o?(a$4.include(m,e),z(t),ti$1(t,e),t.uniforms.add(new g$1(`inverseViewMatrix`,(i,p)=>V$1(L$1,U$2(L$1,p.camera.viewMatrix,i.origin)))),t.code.add(a`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${n?a`normalize(worldPos + localOrigin)`:a`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):t.code.add(a`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),e.hasVVSize?(r.add(`sizeFeatureAttribute`,`float`),t.uniforms.add(new r$2(`vvSizeMinSize`,i=>i.vvSize.minSize),new r$2(`vvSizeMaxSize`,i=>i.vvSize.maxSize),new r$2(`vvSizeOffset`,i=>i.vvSize.offset),new r$2(`vvSizeFactor`,i=>i.vvSize.factor),new r$2(`vvSizeFallback`,i=>i.vvSize.fallback)),t.code.add(a`
    float getSize(${l(o,`vec3 pos`)}) {
      float size = isnan(sizeFeatureAttribute)
        ? vvSizeFallback.x
        : intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;

      return ${l(o,`applyLineSizeScreenSizePerspective(size, pos)`,`size`)};
    }
    `)):(r.add(`size`,`float`),t.code.add(a`
    float getSize(${l(o,`vec3 pos`)}) {
      float fullSize = intrinsicWidth * size;
      return ${l(o,`applyLineSizeScreenSizePerspective(fullSize, pos)`,`fullSize`)};
    }
    `)),e.hasVVOpacity?(r.add(`opacityFeatureAttribute`,`float`),t.constants.add(`vvOpacityNumber`,`int`,8),t.uniforms.add(new pt(`vvOpacityValues`,W,i=>i.vvOpacity.values),new pt(`vvOpacityOpacities`,W,i=>i.vvOpacity.opacityValues),new r$1(`vvOpacityFallback`,i=>i.vvOpacity.fallback,{supportsNaN:!0})),t.code.add(a`
    float interpolateOpacity(float value) {
      if (value <= vvOpacityValues[0]) {
        return vvOpacityOpacities[0];
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
        }
      }

      return vvOpacityOpacities[vvOpacityNumber - 1];
    }

    vec4 applyOpacity(vec4 color) {
      if (isnan(opacityFeatureAttribute)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${l(e.hasVVColor,`color`,`vec4(color.rgb, vvOpacityFallback)`)};
      }

      return vec4(color.rgb, interpolateOpacity(opacityFeatureAttribute));
    }
    `)):t.code.add(a`vec4 applyOpacity(vec4 color) {
return color;
}`),e.hasVVColor?(a$4.include(A$1,e),r.add(`colorFeatureAttribute`,`float`),t.code.add(a`vec4 getColor() {
vec4 color = interpolateVVColor(colorFeatureAttribute);
if (isnan(color.r)) {
return vec4(0);
}
return applyOpacity(color);
}`)):(r.add(`color`,`vec4`),t.code.add(a`vec4 getColor() {
return applyOpacity(color);
}`))}var L$1=t();function pe(a){a.vertex.code.add(`#define noPerspectiveWrite(x, w) (x * w)`)}function de$1(a){a.fragment.code.add(`#define noPerspectiveRead(x) (x * gl_FragCoord.w)`)}var x=128;var u=.5;var Se$1=N$1(u/2,u/2,1-u/2,1-u/2);function ze$1(a){return a===`cross`||a===`x`}function he$1(a,e=128,t=e*u,r=0){let{data:o,parameters:n}=B(a,e,t,r);return new de$2(o,n)}function B(a,e$3=128,t=e$3*u,r=0){return{data:C$1(a,e$3,t,r),parameters:{mipmap:!1,wrap:{s:33071,t:33071},width:e$3,height:e$3,noUnpackFlip:!0,dataType:e.FLOAT,pixelFormat:6403,internalFormat:R$1.R16F,reloadable:!0}}}function C$1(a,e=128,t=e*u,r=0){switch(a){case`circle`:default:return D$1(e,t);case`square`:return H$1(e,t);case`cross`:return X$1(e,t,r);case`x`:return _(e,t,r);case`kite`:return K(e,t);case`triangle`:return j(e,t);case`arrow`:return E(e,t)}}function D$1(a,e){let t=a/2-.5;return f(a,q(t,t,e/2))}function H$1(a,e){return A(a,e,!1)}function K(a,e){return A(a,e,!0)}function X$1(a,e,t=0){return $(a,e,!1,t)}function _(a,e,t=0){return $(a,e,!0,t)}function j(a,e){return f(a,U(a/2,e,e/2))}function E(a,e){let t=e,r=e/2,o=a/2,n=.8*t,i=q(o,(a-e)/2-n,Math.sqrt(n*n+r*r)),p=U(o,t,r);return f(a,(s,c)=>Math.max(p(s,c),-i(s,c)))}function A(a,e,t){return t&&(e/=Math.SQRT2),f(a,(r,o)=>{let n=r-.5*a+.25,i=.5*a-o-.75;if(t){let p=(n+i)/Math.SQRT2;i=(i-n)/Math.SQRT2,n=p}return Math.max(Math.abs(n),Math.abs(i))-.5*e})}function $(a,e,t,r=0){e-=r,t&&(e*=Math.SQRT2);let o=.5*e;return f(a,(n,i)=>{let p,s=n-.5*a,c=.5*a-i-1;if(t){let I=(s+c)/Math.SQRT2;c=(c-s)/Math.SQRT2,s=I}return s=Math.abs(s),c=Math.abs(c),p=s>c?s>o?Math.sqrt((s-o)*(s-o)+c*c):c:c>o?Math.sqrt(s*s+(c-o)*(c-o)):s,p-=r/2,p})}function q(a,e,t){return(r,o)=>{let n=r-a,i=o-e;return Math.sqrt(n*n+i*i)-t}}function U(a,e,t){let r=Math.sqrt(e*e+t*t);return(o,n)=>{let i=Math.abs(o-a)-t,p=n-a+e/2+.75,s=(e*i+t*p)/r,c=-p;return Math.max(s,c)}}function f(a,e){let t=new Float32Array(a*a);for(let r=0;r<a;r++)for(let o=0;o<a;o++)t[o+a*r]=e(o,r)/a;return t}var N=64;var G=64/2;var Q=64/(32/5);var we$1=.25;function We(a$5,e){let t=a$5.vertex,r=e.hasScreenSizePerspective;si$1(t),t.uniforms.get(`markerScale`)??t.constants.add(`markerScale`,`float`,1),t.constants.add(`markerSizePerLineWidth`,`float`,Q).code.add(a`
  float getLineWidth(${l(r,`vec3 pos`)}) {
     return max(getSize(${l(r,`pos`)}), 1.0) * pixelRatio;
  }

  float getScreenMarkerSize(float lineWidth) {
    return markerScale * markerSizePerLineWidth * lineWidth;
  }
  `),e.space===2&&(t.constants.add(`maxSegmentLengthFraction`,`float`,.45),t.uniforms.add(new s$1(`perRenderPixelRatio`,o=>o.camera.perRenderPixelRatio)),t.code.add(a`
  bool areWorldMarkersHidden(vec3 pos, vec3 other) {
    vec3 midPoint = mix(pos, other, 0.5);
    float distanceToCamera = length(midPoint);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    float worldMarkerSize = getScreenMarkerSize(getLineWidth(${l(r,`pos`)})) * screenToWorldRatio;
    float segmentLen = length(pos - other);
    return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
  }

  float getWorldMarkerSize(vec3 pos) {
    float distanceToCamera = length(pos);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    return getScreenMarkerSize(getLineWidth(${l(r,`pos`)})) * screenToWorldRatio;
  }
  `))}var i=a`vec4(0.0, 0.0, 2.0, 1.0)`;var s={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]};var he={dash:s.dash,"dash-dot":[...s.dash,...s.dot],dot:s.dot,"long-dash":s[`long-dash`],"long-dash-dot":[...s[`long-dash`],...s.dot],"long-dash-dot-dot":[...s[`long-dash`],...s.dot,...s.dot],none:null,"short-dash":s[`short-dash`],"short-dash-dot":[...s[`short-dash`],...s[`short-dot`]],"short-dash-dot-dot":[...s[`short-dash`],...s[`short-dot`],...s[`short-dot`]],"short-dot":s[`short-dot`],solid:null};var ve=8;var L=class{constructor(a,p,o){this.image=a,this.width=p,this.length=o,this.uuid=t$2()}};function C(t){return t!=null&&`image`in t}function ue(t,a){return t==null?t:{pattern:t.slice(),pixelRatio:a}}function Fe(t){return{pattern:[t,t],pixelRatio:2}}function we(t){switch(t?.type){case`style`:return ge(t.style);case`image`:return new L(t.image,t.width,t.length);case void 0:case null:return null}return null}function ge(t){return t!=null?ue(he[t],ve):null}function Se(t){return t.pattern.map(a=>Math.round(a*t.pixelRatio))}function ae$1(t){if(t==null)return 1;let a=Se(t);return Math.floor(a.reduce((p,o)=>p+o))}function ne(t){return t==null?I:t.length===4?t:L$2(xe$1,t[0],t[1],t[2],1)}var xe$1=o$1();function oe(t,a$1){if(!a$1.stippleEnabled)return void t.fragment.code.add(a`float getStippleAlpha(float lineWidth) { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);let p=!(a$1.draped&&a$1.stipplePreferContinuous),{vertex:o,fragment:i}=t;a$1.draped||(ti$1(o,a$1),o.uniforms.add(new s$1(`worldToScreenPerDistanceRatio`,({camera:n})=>1/n.perScreenPixelRatio)).code.add(a`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),t.varyings.add(`vStippleDistance`,`float`),t.varyings.add(`vStippleDistanceLimits`,`vec2`),t.varyings.add(`vStipplePatternStretch`,`float`),o.code.add(a`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${a.float(De)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),si$1(o),o.code.add(a`
    vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {

      // First check if the segment is long enough to support fully screen space patterns.
      // Force sparse mode for segments that are very large in screen space even if it is not allowed,
      // to avoid imprecision from calculating with large floats.
      if (segmentLengthPseudoScreen >= ${p?`patternLength`:`1e4`}) {
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        float stretch = repetitions / flooredRepetitions;

        // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
        // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
        vStipplePatternStretch = max(0.75, stretch);

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),i.uniforms.add(new e$2(`stipplePatternTexture`,n=>n.stippleTexture),new r$1(`stipplePatternPixelSizeInv`,n=>1/y$1(n))),a$1.stippleOffColorEnabled&&i.uniforms.add(new r$3(`stippleOffColor`,n=>ne(n.stippleOffColor))),t.include(de$1),a$1.worldSizedImagePattern?(t.varyings.add(`vStippleV`,`float`),t.fragment.include(o$4),i.code.add(a`vec4 getStippleColor(out bool isClamped) {
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = vStippleDistance * stipplePatternPixelSizeInv;
float v = vStippleV == -1.0 ? 0.5 : vStippleV;
return texture(stipplePatternTexture, vec2(u, v));
}
vec4 getStippleColor() {
bool ignored;
return getStippleColor(ignored);
}
float getStippleSDF() {
vec4 color = getStippleColor();
return color.a == 0.0 ? -0.5 : 0.5;
}
float getStippleAlpha(float lineWidth) {
return getStippleColor().a;
}
vec4 blendStipple(vec4 color, float stippleAlpha) {
vec4 stippleColor = getStippleColor();
int mixMode  = 1;
vec3 col = mixExternalColor(color.rgb, vec3(1.0), stippleColor.rgb, mixMode);
float opacity = mixExternalOpacity(color.a, 1.0, stippleColor.a, mixMode);
return vec4(col, opacity);
}`)):i.code.add(a`
    float getStippleSDF(out bool isClamped) {
      float stippleDistanceClamped = noPerspectiveRead(clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y));
      float lineSizeInv = noPerspectiveRead(vLineSizeInv);

      vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
      isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;

      float u = stippleDistanceClamped * stipplePatternPixelSizeInv * lineSizeInv;
      u = fract(u);

      float sdf = texture(stipplePatternTexture, vec2(u, 0.5)).r;

      return (sdf - 0.5) * vStipplePatternStretch + 0.5;
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha(float lineWidth) {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);
      float antiAliasedResult = clamp(stippleSDF * lineWidth + 0.5, 0.0, 1.0);
      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${a$1.stippleOffColorEnabled?`mix(color, stippleOffColor, stippleAlpha)`:`vec4(color.rgb, color.a * stippleAlpha)`};
    }
  `),i.code.add(a`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${l(!a$1.stippleOffColorEnabled,`if (stippleAlpha < threshold) { discard; }`)}
    }
  `)}function y$1(t){let a=t.stipplePattern;return C(a)?a.length:a?ae$1(a)/a.pixelRatio:1}var De=.4;var re=1;var se=1;function le(t,a$2){let{hasAnimation:p,animation:o}=a$2;if(!p)return;let{attributes:i,varyings:n,vertex:D,fragment:d}=t;i.add(`timeStamps`,`vec4`),n.add(`vTimeStamp`,`float`),n.add(`vFirstTime`,`float`),n.add(`vLastTime`,`float`),n.add(`vTransitionType`,`float`),D.main.add(a`vTimeStamp = timeStamps.x;
vFirstTime = timeStamps.y;
vLastTime = timeStamps.z;
vTransitionType = timeStamps.w;`),o===3&&d.constants.add(`decayRate`,`float`,2.3),d.code.add(a`
    float getTrailOpacity(float x) {
      if (x < 0.0) {
        return 0.0;
      }

      ${Te(o)}
    }`),d.uniforms.add(new r$1(`timeElapsed`,m=>m.timeElapsed),new r$1(`trailLength`,m=>m.trailLength),new r$1(`speed`,m=>m.animationSpeed),new r$4(`startEndTime`,m=>v(Le,m.startTime,m.endTime))),d.constants.add(`fadeInTime`,`float`,se),d.constants.add(`fadeOutTime`,`float`,re),d.constants.add(`incomingTransition`,`int`,0),d.constants.add(`outgoingTransition`,`int`,2),d.code.add(a`float fadeIn(float x) {
return smoothstep(0.0, fadeInTime, x);
}
float fadeOut(float x) {
return isinf(fadeOutTime) ? 1.0 : smoothstep(fadeOutTime, 0.0, x);
}
void updateAlphaIf(inout float alpha, bool condition, float newAlpha) {
alpha = condition ? min(alpha, newAlpha) : alpha;
}
vec4 animate(vec4 color) {
float startTime = startEndTime[0];
float endTime = startEndTime[1];
float totalTime = vLastTime - vFirstTime;
float actualFadeOutTime = min(fadeOutTime * speed, trailLength);
float longStreamlineThreshold = (fadeInTime + 1.0) * speed + actualFadeOutTime;
bool longStreamline = totalTime > longStreamlineThreshold;
float totalTimeWithFadeOut = longStreamline && actualFadeOutTime != trailLength ? totalTime : totalTime + actualFadeOutTime;
float fadeOutStartTime = longStreamline ? totalTime - actualFadeOutTime : totalTime;
float originTime =  -vFirstTime;
float actualEndTime = int(vTransitionType) == outgoingTransition ? min(endTime, startTime + vLastTime / speed) : endTime;
vec4 animatedColor = color;
if (speed == 0.0) {
float alpha = getTrailOpacity((totalTimeWithFadeOut - (vTimeStamp - vFirstTime)) / trailLength);
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
animatedColor.a *= alpha;
return animatedColor;
}
float relativeStartTime = mod(startTime, totalTimeWithFadeOut);
float shiftedTimeElapsed = timeElapsed - relativeStartTime + originTime;
float headRelativeToFirst = mod(shiftedTimeElapsed * speed, totalTimeWithFadeOut);
float vRelativeToHead = headRelativeToFirst - originTime - vTimeStamp;
float vAbsoluteTime = timeElapsed - vRelativeToHead / speed;
if (startTime > timeElapsed) {
return vec4(0.0);
}
float alpha = getTrailOpacity(vRelativeToHead / trailLength);
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, int(vTransitionType) != incomingTransition, step(startTime, vAbsoluteTime));
updateAlphaIf(alpha, headRelativeToFirst > fadeOutStartTime, fadeOut((headRelativeToFirst - fadeOutStartTime) / speed));
alpha *= fadeIn(vTimeStamp - vFirstTime);
animatedColor.a *= alpha;
return animatedColor;
}`)}function Te(t){switch(t){case 2:return`return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;`;case 3:return`float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;default:return`return 1.0;`}}var Le=o$2();var Ce$1=1;function ye(t){let a$3=new T$1,{attributes:p,varyings:o,vertex:i$1,fragment:n$2}=a$3,{applyMarkerOffset:D,draped:d,output:m,capType:P,stippleEnabled:l$1,falloffEnabled:F,roundJoins:pe$1,wireframe:w,innerColorEnabled:de,hasAnimation:ce$1,hasScreenSizePerspective:g,worldSizedImagePattern:R}=t;i$1.inputs.add(`position`,()=>`position`),n$2.include(o$5),a$3.include(ce,t),a$3.include(oe,t),a$3.include(n,t),a$3.include(le,t);let b=D&&!d;b&&(i$1.uniforms.add(new r$1(`markerScale`,r=>r.markerScale)),a$3.include(We,{space:2,hasScreenSizePerspective:g})),ni$1(i$1,t),i$1.uniforms.add(new s$2(`inverseProjectionMatrix`,r=>r.camera.inverseProjectionMatrix),new s$3(`nearFar`,r=>r.camera.nearFar),new r$1(`miterLimit`,r=>r.join!==`miter`?0:r.miterLimit),new s$4(`viewport`,r=>r.camera.fullViewport)),i$1.constants.add(`LARGE_HALF_FLOAT`,`float`,65500),i$1.constants.add(`EPS`,`float`,.001),i$1.constants.add(`NUM_JOIN_SUBDIVISIONS`,`float`,t.numJoinSubdivisions),p.add(`position`,`vec3`),p.add(`previousDelta`,`vec4`),p.add(`nextDelta`,`vec4`),p.add(`lineParameters`,`vec2`),p.add(`u0`,`float`),o.add(`vColor`,`vec4`),o.add(`vpos`,`vec3`,{invariant:!0}),o.add(`vLineDistance`,`float`),o.add(`vLineWidth`,`float`),l$1||(o.add(`vIsInsideJoin`,`int`),o.add(`vStretchFactor`,`float`),o.add(`vJoinCenterLineSDFs`,`vec2`),o.add(`vSubdivisionFactor`,`float`));let z=l$1;z&&o.add(`vLineSizeInv`,`float`);let h=P===2,W=l$1&&h,T=F||W;T&&o.add(`vLineDistanceNorm`,`float`),h&&(o.add(`vSegmentSDF`,`float`),o.add(`vReverseSegmentSDF`,`float`)),i$1.code.add(a`vec3 perpendicular(vec3 v) {
return vec3(v.y, -v.x, 0.0);
}
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec3 rotateZ(vec3 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return vec3(m * v.xy, v.z);
}`),i$1.code.add(a`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
posNdc.z /= posNdc.w;
return posNdc;
}`),i$1.code.add(a`void clip(
inout vec4 pos,
inout vec4 prev,
inout vec4 next,
bool isStartVertex
) {
float vnp = nearFar[0] * 0.99;
if (pos.z > -nearFar[0]) {
if (!isStartVertex) {
if (prev.z < -nearFar[0]) {
pos = mix(prev, pos, interp(vnp, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if (next.z < -nearFar[0]) {
pos = mix(pos, next, interp(vnp, pos, next));
prev = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
}
} else {
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
if (next.z > -nearFar[0]) {
next = mix(next, pos, interp(vnp, next, pos));
}
}
}`),si$1(i$1),i$1.constants.add(`aaWidth`,`float`,l$1?0:1).main.add(a`
    // unpack values from vertex type
    bool isStartVertex = abs(abs(lineParameters.y) - 3.0) == 1.0;
    vec3 prevPosition = position + previousDelta.xyz * previousDelta.w;
    vec3 nextPosition = position + nextDelta.xyz * nextDelta.w;

    float coverage = 1.0;

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      gl_Position = ${i};
    }
    else {
      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);

      bool isJoin = abs(lineParameters.y) < 3.0;
  `),b&&i$1.main.add(a`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos.xyz, other.xyz);
if (!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos.xyz) * 0.5;
}`),a$3.include(pe),i$1.main.add(a`
      clip(pos, prev, next, isStartVertex);

      vec3 clippedPos = pos.xyz;
      vec3 clippedCenter = mix(pos.xyz, isStartVertex ? next.xyz : prev.xyz, 0.5);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);

      vec3 left = (pos.xyz - prev.xyz);
      vec3 right = (next.xyz - pos.xyz);

      float leftLen = length(left);
      float rightLen = length(right);

      float lineSize = getSize(${l(g,`clippedPos`)});
      ${l(l$1&&g,`float patternLineSize = getSize(clippedCenter);`)}
      ${l(l$1&&!g,`float patternLineSize = lineSize;`)}

      ${l(R,a`
          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio * worldToScreenRatio;
          if (lineWidth < 1.0) {
            coverage = lineWidth;
            lineWidth = 1.0;
          }
        `,a`
          if (lineSize < 1.0) {
            coverage = lineSize; // convert sub-pixel coverage to alpha
            lineSize = 1.0;
          }

          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio;
        `)}

      vLineWidth = noPerspectiveWrite(lineWidth, pos.w);
      ${z?a`vLineSizeInv = noPerspectiveWrite(1.0 / lineSize, pos.w);`:``}
  `),(l$1||h)&&i$1.main.add(a`
      float isEndVertex = float(!isStartVertex);
      vec3 segmentOrigin = mix(pos.xyz, prev.xyz, isEndVertex);
      vec3 segment = mix(right, left, isEndVertex);
      ${h?a`vec3 segmentEnd = mix(next.xyz, pos.xyz, isEndVertex);`:``}
    `),i$1.main.add(a`left = (leftLen > EPS) ? left/leftLen : vec3(0.0, 0.0, 0.0);
right = (rightLen > EPS) ? right/rightLen : vec3(0.0, 0.0, 0.0);
vec3 segmentDirection = isStartVertex ? right : left;
vec3 capDisplacementDir = vec3(0.0, 0.0, 0.0);
vec3 joinDisplacementDir = vec3(0.0, 0.0, 0.0);
float displacementLen = lineWidth;
float miterDisplacementLen = lineWidth;
float innerDisplacementLen = lineWidth;`),l$1||i$1.main.add(a`vIsInsideJoin = 0;
vStretchFactor = 1.0;
vSubdivisionFactor = 0.0;
vJoinCenterLineSDFs = vec2(LARGE_HALF_FLOAT);`),i$1.main.add(a`float subdivisionFactor = 0.0;
bool isOutside = false;
if (isJoin) {
isOutside = (left.x * right.y - left.y * right.x) * lineParameters.y > 0.0;
vec3 joinDirection = normalize(left + right);
joinDisplacementDir = perpendicular(joinDirection);
if (leftLen > EPS && rightLen > EPS) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
miterDisplacementLen = displacementLen;
innerDisplacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
if (!isOutside) {
displacementLen = innerDisplacementLen;
}
}
subdivisionFactor = lineParameters.x;`),l$1||i$1.main.add(a`if(subdivisionFactor > 0.0) {
vIsInsideJoin = 1;
}
vSubdivisionFactor = isOutside ? subdivisionFactor : 0.5;
if (miterDisplacementLen > miterLimit * lineWidth) {
vec2 leftScreenDir = left.xy;
vec2 rightScreenDir = right.xy;
float leftScreenLen = length(leftScreenDir);
float rightScreenLen = length(rightScreenDir);
if (leftScreenLen > EPS && rightScreenLen > EPS) {
leftScreenDir /= leftScreenLen;
rightScreenDir /= rightScreenLen;
float theta = acos(clamp(dot(leftScreenDir, rightScreenDir), -1.0, 1.0));
float subdividedTriangleHeight = (innerDisplacementLen + lineWidth) * cos(theta / (2.0 + 2.0 * NUM_JOIN_SUBDIVISIONS));
float bevelTriangleHeight = innerDisplacementLen + lineWidth * cos(theta * 0.5);
float triangleHeight = NUM_JOIN_SUBDIVISIONS > 0.0 ? subdividedTriangleHeight : bevelTriangleHeight;
vStretchFactor = noPerspectiveWrite(max(triangleHeight / (2.0 * lineWidth), 1.0), pos.w);
}
}`),i$1.main.add(a`if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),pe$1?i$1.main.add(a`
        vec3 startDir = leftLen < EPS ? right : left;
        startDir = perpendicular(startDir);

        vec3 endDir = rightLen < EPS ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${l$1?a`min(1.0, subdivisionFactor * ((NUM_JOIN_SUBDIVISIONS + 1.0) / NUM_JOIN_SUBDIVISIONS))`:a`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir.xy, endDir.xy), -1.0, 1.0));
        joinDisplacementDir = rotateZ(startDir, -sign(lineParameters.y) * factor * rotationAngle);
      `):i$1.main.add(a`
        vec3 startDir = perpendicular(leftLen < EPS ? right : left);
        vec3 endDir = perpendicular(rightLen < EPS ? left : right);

        ${l(l$1,a`joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? endDir : startDir;`,a`joinDisplacementDir = mix(startDir, endDir, subdivisionFactor);`)}
  `);let me=P!==0;return i$1.main.add(a`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${me?a`capDisplacementDir = vec3((isStartVertex ? -right : left).xy, 0.0);`:``}
    }
  `),i$1.main.add(a`
    // Displacement (in pixels) caused by join/or cap
    vec2 dposXY = (joinDisplacementDir.xy * sign(lineParameters.y) + capDisplacementDir.xy) * displacementLen;

    /**
     * To prevent z-fighting between layers, we also adjust the z value.
     * We want to ensure that the orientation of the final triangles is the same, regardless of the line width.
     * To do so, the below formula projects the xy displacement onto the original segment direction
     * to find the z-offset necessary so the triangle orientation is independent of the width.
     */
    float dposZ = dot(dposXY, segmentDirection.xy) / dot(segmentDirection.xy, segmentDirection.xy) * segmentDirection.z;
    vec3 dpos = vec3(dposXY, dposZ);

    float lineDistNorm = noPerspectiveWrite(sign(lineParameters.y), pos.w);

    vLineDistance = lineWidth * lineDistNorm;
    ${T?a`vLineDistanceNorm = lineDistNorm;`:``}

    pos.xyz += dpos;
  `),l$1||i$1.main.add(a`if (isJoin) {
vec2 joinCenterToVertex = dposXY;
vec2 leftCenterlineDir = left.xy;
vec2 rightCenterlineDir = right.xy;
float leftCenterlineLen = length(leftCenterlineDir);
float rightCenterlineLen = length(rightCenterlineDir);
leftCenterlineDir = leftCenterlineLen > EPS ? leftCenterlineDir / leftCenterlineLen : vec2(1.0, 0.0);
rightCenterlineDir = rightCenterlineLen > EPS ? rightCenterlineDir / rightCenterlineLen : leftCenterlineDir;
vJoinCenterLineSDFs = noPerspectiveWrite(
vec2(
dot(vec2(rightCenterlineDir.y, -rightCenterlineDir.x), joinCenterToVertex),
dot(vec2(leftCenterlineDir.y, -leftCenterlineDir.x), joinCenterToVertex)
),
pos.w
);
}`),h&&i$1.main.add(a`vec2 segmentDir = normalize(segment.xy);
vSegmentSDF = noPerspectiveWrite((isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin.xy, segmentDir)), pos.w);
vReverseSegmentSDF = noPerspectiveWrite((isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd.xy, -segmentDir)), pos.w);`),l$1&&(d?i$1.uniforms.add(new s$1(`worldToScreenRatio`,r=>1/r.screenToPCSRatio)):i$1.main.add(a`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),i$1.main.add(a`float segmentLengthScreenDouble = length(segment.xy);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),d?i$1.main.add(a`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = u0 * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):i$1.main.add(a`float startPseudoScreen = mix(u0, u0 - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),i$1.uniforms.add(new r$1(`stipplePatternPixelSize`,r=>y$1(r))),i$1.main.add(a`
      float patternLength = patternLineSize * stipplePatternPixelSize;

      ${l(R,a`
          float uu = mix(u0, u0 - segmentLengthRender, isEndVertex);
          vStippleDistanceLimits = vec2(uu, uu + segmentLengthRender);
          vStipplePatternStretch = 1.0;

          // The v-coordinate used in case of an image pattern.
          bool isLeft = sign(lineParameters.y) < 0.0;
          vStippleV = isLeft ? 0.0 : 1.0;
        `,a`
          // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the
          // fragment shader
          vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
        `)}

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of
      // joins)
      if (segmentLengthScreenDouble >= EPS) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1]
        // at the original vertex positions, and slightly outside of that range at the displaced positions
        vec3 stippleDisplacement = pos.xyz - segmentOrigin;
        float stippleDisplacementFactor = dot(segment.xy, stippleDisplacement.xy) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen
      // distance
      vStippleDistanceLimits = noPerspectiveWrite(vStippleDistanceLimits, pos.w);
      vStippleDistance = noPerspectiveWrite(vStippleDistance, pos.w);

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e34, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e34);
    `)),i$1.main.add(a`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;
      pos.z = pos.z * pos.w;

      vColor = getColor();
      vColor.a = noPerspectiveWrite(vColor.a * coverage, pos.w);

      ${w&&!d?`pos.z -= EPS * pos.w;`:``}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),a$3.fragment.include(ss,t),a$3.include(ji$1,t),n$2.include(u$1),n$2.main.add(a`discardBySlice(vpos);`),a$3.include(de$1),n$2.include(R$2),n$2.main.add(a`
    float lineWidth = noPerspectiveRead(vLineWidth);
    float lineDistance = noPerspectiveRead(vLineDistance);
    ${l(T,a`float lineDistanceNorm = noPerspectiveRead(vLineDistanceNorm);`)}
  `),w?n$2.main.add(a`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(h&&n$2.main.add(a`float sdf = noPerspectiveRead(min(vSegmentSDF, vReverseSegmentSDF));
vec2 fragmentPosition = vec2(min(sdf, 0.0), lineDistance);
float fragmentRadius = length(fragmentPosition);
float fragmentCapSDF = (fragmentRadius - lineWidth) * 0.5;
float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);
if (capCoverage < alphaCutoff) {
discard;
}`),W?n$2.main.add(a`vec2 stipplePosition = vec2(
min(getStippleSDF() * 2.0 - 1.0, 0.0),
lineDistanceNorm
);
float stippleRadius = length(stipplePosition * lineWidth);
float stippleCapSDF = (stippleRadius - lineWidth) * 0.5;
float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
float stippleAlpha = step(alphaCutoff, stippleCoverage);`):n$2.main.add(a`float stippleAlpha = getStippleAlpha(lineWidth);`),m!==11&&n$2.main.add(a`discardByStippleAlpha(stippleAlpha, alphaCutoff);`),a$3.include(de$1),n$2.uniforms.add(new r$3(`intrinsicColor`,r=>r.color)).main.add(a`vec4 color = intrinsicColor * vColor;
color.a = noPerspectiveRead(color.a);`),de&&n$2.uniforms.add(new r$3(`innerColor`,r=>r.innerColor??r.color),new r$1(`innerWidth`,(r,fe)=>r.innerWidth*fe.camera.pixelRatio)).main.add(a`float distToInner = abs(lineDistance) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),n$2.main.add(a`vec4 finalColor = blendStipple(color, stippleAlpha);`),F&&(n$2.uniforms.add(new r$1(`falloff`,r=>r.falloff)),n$2.main.add(a`finalColor.a *= pow(max(0.0, 1.0 - abs(lineDistanceNorm)), falloff);`)),l$1||n$2.main.add(a`float stretchFactor = vIsInsideJoin == 1 ? noPerspectiveRead(vStretchFactor) : 1.0;
float featherWidth = 2.0;
float featherStartDistance = max(lineWidth - featherWidth / stretchFactor, 0.0);
float straightFeatherStartDistance = max(lineWidth - featherWidth, 0.0);
float value = abs(lineDistance);
float feather = (value - featherStartDistance) / (lineWidth - featherStartDistance);
vec2 joinCenterSDFs = noPerspectiveRead(vJoinCenterLineSDFs);
float joinCenterDistance = abs(vSubdivisionFactor > 0.5 ? joinCenterSDFs.x : joinCenterSDFs.y);
float straightFeather = (joinCenterDistance - straightFeatherStartDistance) / (lineWidth - straightFeatherStartDistance);
feather = vIsInsideJoin == 1 ? max(feather, straightFeather) : feather;
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`),ce$1&&n$2.main.add(a`
        finalColor = animate(finalColor);

        ${l(m!==11,a`
            if (finalColor.a <= alphaCutoff) {
              discard;
            }`)}
      `)),n$2.main.add(a`outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),a$3}var Et=Object.freeze(Object.defineProperty({__proto__:null,build:ye,ribbonlineNumRoundJoinSubdivisions:1},Symbol.toStringTag,{value:`Module`}));function Fi(i,e,r,t,s,n,l,p,a,o,m){let c=_i[m.mode],d,u,h=0;if(Hn(i,e,r,t,a.spatialReference,s,p))return c?.requiresAlignment(m)?(h=c.applyElevationAlignmentBuffer(t,s,n,l,p,a,o,m),d=n,u=l):(d=t,u=s),Hn(d,a.spatialReference,u,n,o.spatialReference,l,p)?h:void 0}function ti(i,e,r,t,s){let n=(G$1(i)?i.z:K$2(i)?i.array[i.offset+2]:i[2])||0;switch(r.mode){case`on-the-ground`:{let l=it$1(e,i,`ground`)??0;s.verticalDistanceToGround=0,s.sampledElevation=l,s.z=l;return}case`relative-to-ground`:{let l=it$1(e,i,`ground`)??0,p=r.geometryZWithOffset(n,t);s.verticalDistanceToGround=p,s.sampledElevation=l,s.z=p+l;return}case`relative-to-scene`:{let l=it$1(e,i,`scene`)??0,p=r.geometryZWithOffset(n,t);s.verticalDistanceToGround=p,s.sampledElevation=l,s.z=p+l;return}case`absolute-height`:{let l=r.geometryZWithOffset(n,t),p=it$1(e,i,`ground`)??0;s.verticalDistanceToGround=l-p,s.sampledElevation=p,s.z=l;return}default:s.z=0;return}}function Wi(i,e,r,t){return ti(i,e,r,t,ae),ae.z}function ji(i,e,r){return e===`on-the-ground`&&r===`on-the-ground`?i.staysOnTheGround:e===r||e!==`on-the-ground`&&r!==`on-the-ground`?e==null||r==null?i.definedChanged:1:i.onTheGroundChanged}function Ni(i){return i===`relative-to-ground`||i===`relative-to-scene`}function ki(i){return i!==`absolute-height`}function Ui(i,e,r,t,s){ti(e,r,s,t,ae),mi(i,ae.verticalDistanceToGround);let n=ae.sampledElevation,l=N$2(yi,i.transformation);return ze[0]=e.x,ze[1]=e.y,ze[2]=ae.z,q$1(e.spatialReference,ze,l,t.spatialReference)?i.transformation=l:console.warn(`Could not locate symbol object properly, it might be misplaced`),n}function mi(i,e){for(let r=0;r<i.geometries.length;++r){let t=i.geometries[r].getMutableAttribute(`groundDistance`);t&&t.data[0]!==e&&(t.data[0]=e,i.geometryVertexAttributeUpdated(i.geometries[r],`groundDistance`))}}function di(i,e,r,t,s,n){let l=0,p=n.spatialReference;e*=3,t*=3;for(let a=0;a<s;++a){let o=i[e],m=i[e+1],c=i[e+2],d=n.getElevation(o,m,c,p,`ground`)??0;l+=d,r[t]=o,r[t+1]=m,r[t+2]=d,e+=3,t+=3}return l/s}function fi(i,e,r,t,s,n,l,p){let a=0,o=p.calculateOffsetRenderUnits(l),m=p.featureExpressionInfoContext,c=n.spatialReference;e*=3,t*=3;for(let d=0;d<s;++d){let u=i[e],h=i[e+1],k=i[e+2],g=n.getElevation(u,h,k,c,`ground`)??0;a+=g,r[t]=u,r[t+1]=h,r[t+2]=m==null?k+g+o:g+o,e+=3,t+=3}return a/s}function gi(i,e,r,t,s,n,l,p){let a=0,o=p.calculateOffsetRenderUnits(l),m=p.featureExpressionInfoContext,c=n.spatialReference;e*=3,t*=3;for(let d=0;d<s;++d){let u=i[e],h=i[e+1],k=i[e+2],g=n.getElevation(u,h,k,c,`scene`)??0;a+=g,r[t]=u,r[t+1]=h,r[t+2]=m==null?k+g+o:g+o,e+=3,t+=3}return a/s}function vi(i){let e=i.meterUnitOffset,r=i.featureExpressionInfoContext;return e!==0||r!=null}function bi(i,e,r,t,s,n,l,p){let a=p.calculateOffsetRenderUnits(l),o=p.featureExpressionInfoContext;e*=3,t*=3;for(let m=0;m<s;++m){let c=i[e],d=i[e+1],u=i[e+2];r[t]=c,r[t+1]=d,r[t+2]=o==null?u+a:a,e+=3,t+=3}return 0}var $e=class{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}};var _i={"absolute-height":{applyElevationAlignmentBuffer:bi,requiresAlignment:vi},"on-the-ground":{applyElevationAlignmentBuffer:di,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:fi,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:gi,requiresAlignment:()=>!0}};var yi=t();var ae=new $e;var ze=o();function Ae(i){let e=ge$1().vec3f(`position`).vec4f16(`previousDelta`).vec4f16(`nextDelta`).f32(`u0`).vec2f16(`lineParameters`);return i.hasVVColor?e.f32(`colorFeatureAttribute`):e.vec4u8(`color`,{glNormalized:!0}),i.hasVVSize?e.f32(`sizeFeatureAttribute`):e.f32(`size`),i.hasVVOpacity&&e.f32(`opacityFeatureAttribute`),st$1()&&e.vec4u8(`olidColor`),i.hasAnimation&&e.vec4f16(`timeStamps`),e}var Me=class extends At{constructor(i,e){super(i,e,ie(Ae(e))),this.shader=new St(Et,()=>import(`./chunk-x9-ooqTt.js`)),this.ignoreUnused=!0,this.primitiveType=e.wireframe?E$1.LINES:E$1.TRIANGLE_STRIP}_makePipelineState(i,e){let{output:r,hasOccludees:t}=i;return J({blending:yi$1(r,!1,i.emissionDimmingPass),depthTest:Ii(r),depthWrite:xi(i),colorWrite:$$2,stencilWrite:t?vi$1:null,stencilTest:t?e?Mi$1:Ci:null,polygonOffset:Di(i)})}initializePipeline(i){if(i.occluder){let{hasOccludees:e}=i;this._occluderPipelineTransparent=J({blending:U$3,polygonOffset:Di(i),depthTest:Bi,depthWrite:null,colorWrite:$$2,stencilWrite:null,stencilTest:e?zi$1:null}),this._occluderPipelineOpaque=J({blending:U$3,polygonOffset:Di(i),depthTest:e?Bi:Ai$1,depthWrite:null,colorWrite:$$2,stencilWrite:e?Oi$1:null,stencilTest:e?Fi$1:null}),this._occluderPipelineMaskWrite=J({blending:null,polygonOffset:Di(i),depthTest:Ai$1,depthWrite:null,colorWrite:null,stencilWrite:e?vi$1:null,stencilTest:e?Mi$1:null})}return this._occludeePipeline=this._makePipelineState(i,!0),this._makePipelineState(i,!1)}getPipeline(i,e,r){if(r)return this._occludeePipeline;switch(i.occluder){case 11:return this._occluderPipelineTransparent??super.getPipeline(i,e,r);case 10:return this._occluderPipelineOpaque??super.getPipeline(i,e,r);default:i.occluder;case void 0:case null:return this._occluderPipelineMaskWrite??super.getPipeline(i,e,r)}}};Me=y$3([vn(`esri.views.3d.webgl-engine.shaders.RibbonLineTechnique`)],Me);var Si=16;var Pi=8;var b=class extends o$3{constructor(e){super(),this.spherical=e,this.capType=0,this.emissionSource=0,this.animation=2,this.polygonOffsetIndex=0,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.numJoinSubdivisions=1,this.roundJoins=!1,this.applyMarkerOffset=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVVOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.hasScreenSizePerspective=!1,this.worldSizedImagePattern=!1,this.textureCoordinateType=0,this.hasVVInstancing=!1,this.hasSliceTranslatedView=!0,this.overlayEnabled=!1,this.snowCover=!1}get hasAnimation(){return this.animation!==0}};y$3([b$2({count:3})],b.prototype,`capType`,void 0),y$3([b$2({count:8})],b.prototype,`emissionSource`,void 0),y$3([b$2({count:4})],b.prototype,`animation`,void 0),y$3([b$2({count:16})],b.prototype,`polygonOffsetIndex`,void 0),y$3([b$2()],b.prototype,`writeDepth`,void 0),y$3([b$2()],b.prototype,`draped`,void 0),y$3([b$2()],b.prototype,`stippleEnabled`,void 0),y$3([b$2()],b.prototype,`stippleOffColorEnabled`,void 0),y$3([b$2()],b.prototype,`stipplePreferContinuous`,void 0),y$3([b$2({count:Pi})],b.prototype,`numJoinSubdivisions`,void 0),y$3([b$2()],b.prototype,`roundJoins`,void 0),y$3([b$2()],b.prototype,`applyMarkerOffset`,void 0),y$3([b$2()],b.prototype,`hasVVSize`,void 0),y$3([b$2()],b.prototype,`hasVVColor`,void 0),y$3([b$2()],b.prototype,`hasVVOpacity`,void 0),y$3([b$2()],b.prototype,`falloffEnabled`,void 0),y$3([b$2()],b.prototype,`innerColorEnabled`,void 0),y$3([b$2()],b.prototype,`hasOccludees`,void 0),y$3([b$2()],b.prototype,`occluder`,void 0),y$3([b$2()],b.prototype,`wireframe`,void 0),y$3([b$2()],b.prototype,`discardInvisibleFragments`,void 0),y$3([b$2()],b.prototype,`hasScreenSizePerspective`,void 0),y$3([b$2()],b.prototype,`worldSizedImagePattern`,void 0);var xe=class extends Zt{constructor(e,r){super(e,rt),this.produces=new Map([[2,t=>y$5(t)||v$2(t)&&this.parameters.renderOccluded===8],[3,t=>B$1(t)],[10,t=>$$1(t)&&this.parameters.renderOccluded===8],[11,t=>$$1(t)&&this.parameters.renderOccluded===8],[4,t=>v$2(t)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[8,t=>v$2(t)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[18,t=>P$1(t)]]),this._configuration=new b(r)}updateConfiguration(e){super.updateConfiguration(e);let r=e.slot===18,t=this.parameters.stipplePattern!=null&&this.parameters.stippleTexture!=null&&e.output!==10,s=t&&r&&this.parameters.isImagePattern();this._configuration.draped=r,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.stippleEnabled=t,this._configuration.stippleOffColorEnabled=t&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=t&&this.parameters.stipplePreferContinuous,this._configuration.numJoinSubdivisions=ni(this.parameters.join,t),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join===`round`,this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&Oi(this.parameters.markerParameters),this._configuration.polygonOffsetIndex=this.parameters.polygonOffsetIndex,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasVVSize=this.parameters.hasVVSize,this._configuration.hasVVColor=this.parameters.hasVVColor,this._configuration.hasVVOpacity=this.parameters.hasVVOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=e.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===8,this._configuration.wireframe=this.parameters.wireframe,this._configuration.animation=this.parameters.animation,this._configuration.emissionSource=this.emissions?1:0,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective&&!s,this._configuration.worldSizedImagePattern=s}get visible(){return this.parameters.color[3]>=.003913894324853229||this.parameters.stipplePattern!=null&&(this.parameters.stippleOffColor?.[3]??0)>.003913894324853229}get emissions(){return this.parameters.emissiveStrength>0?this.parameters.renderOccluded!==8?2:1:0}setParameters(e,r){e.animation=this.parameters.animation,super.setParameters(e,r)}intersectDraped({attributes:e,screenToWorldRatio:r},t,s,n,l){if(!t.options.selectionMode)return;let p=e.get(`size`),a=this.parameters.width;if(this.parameters.vvSize){let g=e.get(`sizeFeatureAttribute`).data[0];Number.isNaN(g)?a*=this.parameters.vvSize.fallback[0]:a*=h(this.parameters.vvSize.offset[0]+g*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else p&&(a*=p.data[0]);let o=s[0],m=s[1],c=(a/2+4)*r,d=Number.MAX_VALUE,u=0,h$1=e.get(`position`).data,k=at(this.parameters,e)?h$1.length-2:h$1.length-5;for(let g=0;g<k;g+=3){let C=h$1[g],$=h$1[g+1],K=(g+3)%h$1.length,z=o-C,v=m-$,I=h$1[K]-C,L=h$1[K+1]-$,j=h((I*z+L*v)/(I*I+L*L),0,1),A=I*j-z,x=L*j-v,P=A*A+x*x;P<d&&(d=P,u=g/3)}d<c*c&&n(l.distance,l.renderDistance,l.normal,u)}intersect(e,r,t,s,n,l){let{options:p,camera:a,rayBegin:o,rayEnd:m}=t;if(!p.selectionMode||!e.visible||!a)return;if(!v$3(r))return void y$2.getLogger(`esri.views.3d.webgl-engine.materials.RibbonLineMaterial`).error(`intersection assumes a translation-only matrix`);let c=e.attributes,d=c.get(`position`).data,u=this.parameters.width;if(this.parameters.vvSize){let v=c.get(`sizeFeatureAttribute`).data[0];Number.isNaN(v)||(u*=h(this.parameters.vvSize.offset[0]+v*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0]))}else c.has(`size`)&&(u*=c.get(`size`).data[0]);let h$2=Ei;g(h$2,t.point);let k$1=u*a.pixelRatio,g$2=4*a.pixelRatio,C=k$1/2+g$2;P(de[0],h$2[0]-C,h$2[1]+C,0),P(de[1],h$2[0]+C,h$2[1]+C,0),P(de[2],h$2[0]+C,h$2[1]-C,0),P(de[3],h$2[0]-C,h$2[1]-C,0);for(let v=0;v<4;v++)if(!a.unprojectFromRenderScreen(de[v],H[v]))return;K$1(a.eye,H[0],H[1],Ke),K$1(a.eye,H[1],H[2],Qe),K$1(a.eye,H[2],H[3],et),K$1(a.eye,H[3],H[0],tt);let $=Number.MAX_VALUE,K=0,z=at(this.parameters,c)?d.length-2:d.length-5;for(let v=0;v<z;v+=3){R[0]=d[v]+r[12],R[1]=d[v+1]+r[13],R[2]=d[v+2]+r[14];let I=(v+3)%d.length;if(V[0]=d[I]+r[12],V[1]=d[I+1]+r[13],V[2]=d[I+2]+r[14],P$2(Ke,R)<0&&P$2(Ke,V)<0||P$2(Qe,R)<0&&P$2(Qe,V)<0||P$2(et,R)<0&&P$2(et,V)<0||P$2(tt,R)<0&&P$2(tt,V)<0)continue;let L=a.projectToRenderScreen(R,wi),j=a.projectToRenderScreen(V,Ti);if(L==null||j==null)continue;if(L[2]<0&&j[2]>0){v$1(Y,R,V);let P=a.frustum,G=-P$2(P[4],R)/Q$1(Y,P[4]);if(k(Y,Y,G),j$1(R,R,Y),!a.projectToRenderScreen(R,L))continue}else if(L[2]>0&&j[2]<0){v$1(Y,V,R);let P=a.frustum,G=-P$2(P[4],V)/Q$1(Y,P[4]);if(k(Y,Y,G),j$1(V,V,Y),!a.projectToRenderScreen(V,j))continue}else if(L[2]<0&&j[2]<0)continue;L[2]=0,j[2]=0;let A=T$2(L,j,oi),x=U$4(A,h$2);if(!(x>=$)){if(this.parameters.screenSizePerspective){let P=this.computeScreenSizePerspectiveWidth(A,R,V,h$2,a,u,g$2);if(x>=P*P)continue}$=x,O(si,R),O(ai,V),K=v/3}}if($<C*C){let v=Number.MAX_VALUE;if(_$1(T$2(si,ai,oi),T$2(o,m,zi),X)){v$1(X,X,o);let I=x$1(X);k(X,X,1/I),v=I/y$4(o,m)}l(v,v,X,K)}}createBufferWriter(){return new st(Ae(this.parameters),this.parameters)}createGLMaterial(e){return new it(e)}validateParameters(e){e.join!==`miter`&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}update(e){return!!this.parameters.hasAnimation&&(this.setParameters({timeElapsed:e$1(e.time)},!1),e.dt!==0)}computeScreenSizePerspectiveWidth(e,r,t,s,n,l,p){let a=X$2(e,s);H$2(He,r,t,a),W$1(ri,He,n.viewMatrix);let o=x$1(ri),m=this.computeCameraAbsCosAngle(He,n,this._configuration.spherical);return ii.update(m,o,this.parameters.screenSizePerspective,this.parameters.screenSizePerspectiveMinPixelReferenceSize),ii.apply(l)*n.pixelRatio/2+p}computeCameraAbsCosAngle(e,r,t){return t?d(X,e):P(X,0,0,1),v$1(Ce,e,r.eye),d(Ce,Ce),Math.abs(Q$1(X,Ce))}};var it=class extends Kt{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures?.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){let{stipplePattern:r}=this._material.parameters;return this._stipplePattern!==r&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(r,this._stipplePattern)}),this._stipplePattern=r),this.getTechnique(Me,e)}};var rt=class extends ut{constructor(){super(...arguments),this._width=0,this.color=U$1,this.join=`miter`,this.cap=0,this.miterLimit=5,this.writeDepth=!0,this.polygonOffset=0,this.polygonOffsetIndex=0,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1,this.timeElapsed=0,this.animation=0,this.animationSpeed=1,this.trailLength=1,this.startTime=0,this.endTime=1/0,this.emissiveStrength=0}get width(){return this.isImagePattern()?this.stipplePattern.width:this._width}set width(e){this._width=e}get transparent(){return this.color[3]<1||this.hasAnimation||this.stipplePattern!=null&&(this.stippleOffColor?.[3]??0)<1}get hasAnimation(){return this.animation!==0}isImagePattern(){return C(this.stipplePattern)&&this.stippleTexture!=null}};var st=class{constructor(e,r){this.layout=e,this._parameters=r,this.numJoinSubdivisions=ni(this._parameters.join,this._parameters.stipplePattern!=null)}_isClosed(e){return at(this._parameters,e)}allocate(e){return this.layout.createBuffer(e)}elementCount(e){let t=e.get(`position`).indices.length/2+1,s=this._isClosed(e),n=s?2:4;return n+=((s?t:t-1)-(s?0:1))*(2*this.numJoinSubdivisions+4),n+=2,this._parameters.wireframe&&(n=2+4*(n-2)),n}write(e,r,t,s,n){if(n==null)return;let{buffer:l,offset:p}=n,a=this.layout,o=t.get(`position`),m=o.indices,c=o.data.length/3,d=t.get(`distanceToStart`)?.data;m&&m.length!==2*(c-1)&&console.warn(`RibbonLineMaterial does not support indices`);let u=a.fields.has(`sizeFeatureAttribute`),h=1,k=null;if(u){let f=t.get(`sizeFeatureAttribute`);f.data.length===1?h=f.data[0]:k=f.data}else h=t.get(`size`)?.data[0]??1;let g=[1,1,1,1],C=0,$=null,K=a.fields.has(`colorFeatureAttribute`);if(K){let f=t.get(`colorFeatureAttribute`);f.data.length===1?C=f.data[0]:$=f.data}else g=t.get(`color`)?.data??g;let z=t.get(`timeStamps`)?.data,v=z&&a.fields.has(`timeStamps`),I=a.fields.has(`opacityFeatureAttribute`),L=0,j=null;if(I){let f=t.get(`opacityFeatureAttribute`);f.data.length===1?L=f.data[0]:j=f.data}let A=new Float32Array(l.buffer),x=Ce$2(l.buffer),P$3=new Uint8Array(l.buffer),G=a.stride/4,S=p*G,Ve=S,F=0,Le=d?(f,B,te)=>F=d[te]:(f,B,te)=>F+=y$4(f,B),ee=A.BYTES_PER_ELEMENT/x.BYTES_PER_ELEMENT,nt=4/ee,ci=st$1(),U=(f,B,te,N,ge,ui,ve,hi)=>{A[S++]=B[0],A[S++]=B[1],A[S++]=B[2],li$1(f,B,x,S*ee),S+=nt,li$1(te,B,x,S*ee),S+=nt,A[S++]=hi;let Z=S*ee;if(x[Z++]=ge,x[Z++]=ui,S=Math.ceil(Z/ee),K)A[S]=$?.[ve]??C;else{let W=Math.min(4*ve,g.length-4),be=4*S;P$3[be]=255*g[W],P$3[be+1]=255*g[W+1],P$3[be+2]=255*g[W+2],P$3[be+3]=255*g[W+3]}if(S++,A[S++]=k?.[ve]??h,I&&(A[S++]=j?.[ve]??L),ci){let W=4*S;s?(P$3[W++]=s[0],P$3[W++]=s[1],P$3[W++]=s[2],P$3[W++]=s[3]):(P$3[W++]=0,P$3[W++]=0,P$3[W++]=0,P$3[W++]=0),S=Math.ceil(.25*W)}v&&(Z=S*ee,x[Z++]=N[0],x[Z++]=N[1],x[Z++]=N[2],x[Z++]=N[3],S=Math.ceil(Z/ee))};S+=G,P(y,o.data[0],o.data[1],o.data[2]),v&&L$2(D,z[0],z[1],z[2],z[3]),e&&W$1(y,y,e);let fe=this._isClosed(t);if(fe){let f=o.data.length-3;P(M,o.data[f],o.data[f+1],o.data[f+2]),e&&W$1(M,M,e)}else P(w,o.data[3],o.data[4],o.data[5]),e&&W$1(w,w,e),U(y,y,w,D,1,-4,0,0),U(y,y,w,D,1,4,0,0),O(M,y),O(y,w),v&&L$2(D,z[4],z[5],z[6],z[7]);let De=fe?0:1,oe=fe?c:c-1;for(let f=De;f<oe;f++){let B=(f+1)%c*3;P(w,o.data[B],o.data[B+1],o.data[B+2]),e&&W$1(w,w,e),Le(M,y,f),U(M,y,w,D,0,-1,f,F),U(M,y,w,D,0,1,f,F);let te=this.numJoinSubdivisions;for(let N=0;N<te;++N){let ge=(N+1)/(te+1);U(M,y,w,D,ge,-1,f,F),U(M,y,w,D,ge,1,f,F)}if(U(M,y,w,D,1,-2,f,F),U(M,y,w,D,1,2,f,F),O(M,y),O(y,w),v){let N=(f+1)%c*4;L$2(D,z[N],z[N+1],z[N+2],z[N+3])}}fe?(P(w,o.data[3],o.data[4],o.data[5]),e&&W$1(w,w,e),F=Le(M,y,oe),U(M,y,w,D,0,-1,De,F),U(M,y,w,D,0,1,De,F)):(F=Le(M,y,oe),U(M,y,y,D,0,-5,oe,F),U(M,y,y,D,0,5,oe,F)),Ze(A,Ve+G,A,Ve,G),S=Ze(A,S-G,A,S,G),this._parameters.wireframe&&this._addWireframeVertices(l,Ve,S,G)}_addWireframeVertices(e,r,t,s){let n=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT),l=new Float32Array(e.buffer,r*Float32Array.BYTES_PER_ELEMENT,t-r),p=0,a=o=>p=Ze(l,o,n,p,s);for(let o=0;o<l.length-1;o+=2*s)a(o),a(o+2*s),a(o+1*s),a(o+2*s),a(o+1*s),a(o+3*s)}};function Ze(i,e,r,t,s){for(let n=0;n<s;n++)r[t++]=i[e++];return t}function at(i,e){return i.isClosed?e.get(`position`).indices.length>2:!1}function Oi(i){return i.anchor===1&&i.hideOnShortSegments&&i.placement===`begin-end`&&i.worldSpace}function ni(i,e){let r=e?1:0;switch(i){case`miter`:case`bevel`:return r;case`round`:return 1+r}}var ii=new n$1;var R=o();var V=o();var He=o();var ri=o();var Ce=o();var Y=o();var X=o();var Ei=o();var wi=M$1();var Ti=M$1();var si=o();var ai=o();var oi=y$6();var zi=y$6();var M=o();var y=o();var w=o();var D=o$1();var de=[M$1(),M$1(),M$1(),M$1()];var H=[o(),o(),o(),o()];var Ke=D$2();var Qe=D$2();var et=D$2();var tt=D$2();var ot=class{constructor(e,r){this.vec3=e,this.id=r}};function Re(i,e,r,t){return new ot(t$1(i,e,r),t)}var Ur={stableRendering:!1};var li={rootOrigin:null};var pi=class{constructor(e){this._originSR=e,this._rootOriginId=`root/`+Ur$1(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5,this._originSR?.isGeographic&&(this._gridSize/=b$1(this._originSR)),this._baselineDistance=.5*this._gridSize;let r=this._baselineDistance*Ai;this._baselineObjectSize=r/Mi}getOrigin(e){let r=this._origins.get(this._rootOriginId);if(r==null){let m=li.rootOrigin;if(m!=null)return this._origins.set(this._rootOriginId,Re(m[0],m[1],m[2],this._rootOriginId)),this.getOrigin(e);let c=Re(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,c),c}let t=this._gridSize,s=Math.round(e[0]/t),n=Math.round(e[1]/t),l=Math.round(e[2]/t),p=`${s}/${n}/${l}`,a=this._origins.get(p),o=.5*t;if(v$1(T,e,r.vec3),T[0]=Math.abs(T[0]),T[1]=Math.abs(T[1]),T[2]=Math.abs(T[2]),T[0]<o&&T[1]<o&&T[2]<o){if(a){let m=Math.max(...T);if(v$1(T,e,a.vec3),T[0]=Math.abs(T[0]),T[1]=Math.abs(T[1]),T[2]=Math.abs(T[2]),Math.max(...T)<m)return a}return r}return a||(a=Re(s*t,n*t,l*t,p),this._origins.set(p,a)),a}needsOriginUpdate(e,r,t){let s=y$4(e.vec3,r),n=Math.max(1,t/this._baselineObjectSize);return s>this._baselineDistance*n}_drawOriginBox(e,r$5=r(1,1,0,1)){let t=window.view,s=t.stage,n=r$5.toString();if(!this._objects.has(n)){this._material=new xe({width:2,color:r$5},!1);let u=new q$2(s,{pickable:!1}),h=new X$3({castShadow:!1});u.add(h),this._objects.set(n,h)}let l=this._objects.get(n),p=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],a=p.length,o=new Array(3*a),m=new Array,c$1=.5*this._gridSize;for(let u=0;u<a;u++)o[3*u]=e[0]+(1&p[u]?c$1:-c$1),o[3*u+1]=e[1]+(2&p[u]?c$1:-c$1),o[3*u+2]=e[2]+(4&p[u]?c$1:-c$1),u>0&&m.push(u-1,u);Hn(o,this._originSR,0,o,t.renderSpatialReference,0,a);let d=new Yt(this._material,[[`position`,new c(o,m,3,!0)]],null,2);l.addGeometry(d)}get test(){}};var T=o();var Ai=2**-23;var Mi=.05;export{he$1 as C,ze$1 as D,we$1 as E,de$1 as S,u as T,ye as _,Ui as a,We as b,ji as c,pi as d,ti as f,we as g,Fe as h,Re as i,ki as l,Ce$1 as m,Fi as n,Ur as o,xe as p,Ni as r,Wi as s,$e as t,mi as u,i as v,pe as w,ce as x,Se$1 as y};