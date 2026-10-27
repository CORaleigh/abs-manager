import{S as Ur}from"./chunk-DPGF6fIg.js";import{a as y}from"./chunk-DIApwev1.js";import{D as a,O as l,b,k as r,x as c}from"./chunk-9JIhA6yP.js";import{_t as s}from"./chunk-Bh6KJGud.js";import{X as M,v as T}from"./chunk-eg70iNBC.js";function W(e){switch(e.elementType){case`float`:switch(e.elementCount){case 1:return a`float`;case 2:return a`vec2`;case 3:return a`vec3`;case 4:return a`vec4`;case 9:return a`mat3`;default:e.elementCount}break;case`int`:switch(e.elementCount){case 1:return a`int`;case 2:return a`ivec2`;case 3:return a`ivec3`;case 4:return a`ivec4`;case 9:throw new Error(`Invalid element count 9 for type int`);default:e.elementCount}break;case`uint`:switch(e.elementCount){case 1:return a`uint`;case 2:return a`uvec2`;case 3:return a`uvec3`;case 4:return a`uvec4`;case 9:throw new Error(`Invalid element count 9 for type uint`);default:e.elementCount}break;default:e.elementType}throw new Error(`unsupported field`)}var X=new s(`constNaN`,()=>NaN,{supportsNaN:!0});var $=class extends c{constructor(n){super(),this.supportNaN=n}};function Y(e,n){let a$1=n?.supportNaN;a$1&&(e.uniforms.add(X),e.code.add(a`bool bitsEncodeFloat16NaN(highp uint bits) {
const highp uint nanExponent = 0x00007c00u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x000003ffu;
return exponent == nanExponent && mantissa != 0u;
}`)),e.code.add(a`
    mediump float unpackHalf1x16(highp uint bits) {
      ${l(a$1,a`
        if (bitsEncodeFloat16NaN(bits)) {
          return constNaN;
        }`)}
      return unpackHalf2x16(bits).x;
    }`),e.code.add(a`
    mediump vec2 unpackHalf2x16NaNSupport(highp uint bits) {
      vec2 result = unpackHalf2x16(bits);
      ${l(a$1,a`
        if (bitsEncodeFloat16NaN(bits)) {
          result.x = constNaN;
        }
        if (bitsEncodeFloat16NaN(bits >> ${a.uint(p[2])})) {
          result.y = constNaN;
        }
        `)}
      return result;
    }`)}function q(e,n){let a$2=n?.supportNaN;a$2&&(e.uniforms.add(X),e.code.add(a`bool bitsEncodeFloat32NaN(highp uint bits) {
const highp uint nanExponent = 0x7f800000u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x007fffffu;
return exponent == nanExponent && mantissa != 0u;
}`)),e.code.add(a`
    highp float unpackFloat1x32(highp uint bits) {
      ${l(a$2,a`
        if (bitsEncodeFloat32NaN(bits)) {
          return constNaN;
        }`)}
      return uintBitsToFloat(bits);
    }`)}function O(e){e.code.add(a`mediump int unpackInt1x16(highp uint bits) {
highp uint signExtendedBits = (bits & 0x8000u) != 0u ? (bits | 0xffff0000u) : bits;
return int(signExtendedBits);
}`)}function G(e,n){let{fieldType:a}=e;return`${(0,it[a])(ut(e,n))}`}function w(e,n){let a$3=[];for(let u of e){let i=a`unpackFloat1x32(${u})`;a$3.push(i)}return a$3.join(n)}y([b()],$.prototype,`supportNaN`,void 0);var J=e=>a`${e[0]}`;var _=e=>{let n=e[0],a$4=a`uvec4(${a.uint(p[0])}, ${a.uint(p[1])}, ${a.uint(p[2])}, ${a.uint(p[3])})`,u=a`uvec4(${a.hexuint(K[1])})`;return a`((uvec4(${n}) >> ${a$4}) & ${u})`};var rt=e=>a`(float(${J(e)})/${a.float(255)})`;var j=e=>a`unpackFloat1x32(${e[0]})`;var z=e=>a`vec4(${w(e,`, `)})`;var it={u8:J,unorm8:rt,vec4unorm8:e=>a`(vec4(${_(e)})/${a.float(255)})`,snorm16:e=>a`unpackSnorm2x16(${e[0]}).x`,vec2snorm16:e=>a`unpackSnorm2x16(${e[0]})`,f16:T?e=>a`unpackHalf1x16(${e[0]})`:j,vec4f16:T?e=>a`vec4(unpackHalf2x16NaNSupport(${e[0]}), unpackHalf2x16NaNSupport(${e[1]}))`:z,f32:j,vec4u8:_,vec2f32:e=>a`vec2(${w(e,`, `)})`,vec3f32:e=>a`vec3(${w(e,`, `)})`,vec4f32:z,mat3f32:e=>a`mat3(${w(e,`,
`)})`};function ut(e,n){let{byteOffset:a$5,byteSize:u}=e,i=n.channelByteStride,c=n.byteStride,N=Math.ceil(u/S),m=st[n.channels],r=new Array;for(let d=0;d<N;++d){let h=d*S,f=a$5+h,b=u-h,x=Math.min(b,S),s=0,l=new Array;for(;s<x;){let g=f+s,y=Math.floor(g/c),o=g%c,v=Math.floor(o/i),F=o%i,R=i-F,V=x-s,T=Math.min(R,V),Z=a`texel${a.int(y)}${m[v]}`,tt=T===4?``:a` & ${a.hexuint(K[T])}`,et=F===0?``:a` >> ${a.uint(p[F])}`,nt=a`((${Z}${et})${tt})`,ot=s===0?``:a` << ${a.uint(p[s])}`,at=a`(${nt})${ot}`;l.push(at),s+=T}r.push(a`(${l.join(` | `)})`)}return r}var S=4;var p=[0,8,16,24];var K=[0,255,65535,16777215,4294967295];var st={1:[a``],2:[a`.x`,a`.y`],4:[a`.x`,a`.y`,a`.z`,a`.w`]};var ct=new $(!0);var dt=new $(!1);var L=class{constructor(n){this.moduleId=Ur(),this.namespace=`_tbb_${this.moduleId}_`;let{itemIndexAttribute:a,bufferUniform:u,layout:i}=n,c=n.fieldFilter??(()=>!0),N=n.enableNaNSupport?ct:dt;this.TextureBackedBufferModule=(m,r)=>ft(this.namespace,m,r,a,u,i,c,N),this.getTextureAttribute=lt(this.namespace)}};function ft(e,n,a$6,u,i,c,N,m){let{vertex:r}=n,{texelFormatInfo:d}=c;r.include(q,m),r.include(Y,m),r.include(O);let h=`${e}tbbStride`,f=`${e}TextureBackedBufferItemData`,b=`${e}fetchTextureBackedBufferItemData`,x=P(e);for(let o of[h,f,b,x])M(o.length<1024,`Identifiers do not have a valid length`);r.constants.add(h,`uint`,c.texelStride),r.uniforms.add(i);let s=new Array;for(let o of c.fields.values())N(o.name,a$6)&&s.push(o);if(s.length===0)return;let l=[];for(let o=0;o<c.texelStride;++o)l.push(!1);for(let o of s)for(let v=0;v<o.numTexels;++v)l[o.startTexel+v]=!0;r.code.add(a`
  struct ${f} {`);for(let o of s)r.code.add(a`\t${W(o)} ${o.name};`);r.code.add(a`};`),r.code.add(a`
  ${f} ${b}(highp uint itemIndex) {
    ${f} itemData;
    highp uint index = itemIndex * ${h};
    highp uint rowWidth = uint(textureSize(${i.name}, 0).x);
    int coordX = int(index % rowWidth);
    int coordY = int(index / rowWidth);
  `);let g=pt[d.channels],y=mt[d.channels];for(let o=0;o<l.length;++o)l[o]!==!1&&r.code.add(a`highp ${g} texel${a.int(o)} = texelFetch(${i.name}, ivec2(coordX + ${a.int(o)}, coordY), 0)${y};`);for(let o of s)r.code.add(a`itemData.${o.name} = ${G(o,d)};`);r.code.add(a`return itemData;
}`),r.code.add(a`${f} ${x};`),r.main.add(a`${x} = ${b}(${u});`)}function lt(e){let n=P(e);return a$7=>a`${n}.${a$7}`}function P(e){return`${e}ItemData`}var pt={1:a`uint`,2:a`uvec2`,4:a`uvec4`};var mt={1:a`.x`,2:a`.xy`,4:``};var Q=class extends r{constructor(n,a){super(n,`usampler2D`,2,(u,i,c)=>u.bindTexture(n,a(i,c)))}};export{Q as n,L as t};