import{a as H,j as y}from"./chunk-DipCRkz0.js";var _=()=>y.getLogger(`esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder`);var h=class{constructor(){this._includedModules=new Map}include(e,n){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,n),e(this.builder,n))}};var T=class extends h{constructor(){super(...arguments),this.vertex=new m,this.fragment=new m,this.attributes=new b,this.varyings=new f,this.outputs=new $}get attributeNames(){return this.attributes.names}get builder(){return this}generate(e,n=!1){let t=this.attributes.generateSource(e),s=this.varyings.generateSource(e),i=e===`vertex`?this.vertex:this.fragment,a=i.uniforms.generateSource(),o=i.code.generateSource(),u=i.main.generateSource(n),w=this.debugName?`// ${this.debugName}
`:``,y=e===`vertex`?D:E,A=i.constants.generateSource(),F=this.outputs.generateSource(e);return`#version 300 es
${w}
${y}
${A.join(`
`)}
${a.join(`
`)}
${t.join(`
`)}
${s.join(`
`)}
${F.join(`
`)}
${o.join(`
`)}
${u.join(`
`)}`}generateBind(e){let n=new Map;this.vertex.uniforms.entries.forEach(i=>{let a=i.bind[0];a&&n.set(i.name,a)}),this.fragment.uniforms.entries.forEach(i=>{let a=i.bind[0];a&&n.set(i.name,a)});let t=Array.from(n.values()),s=t.length;return i=>{for(let a=0;a<s;++a)t[a](e,i)}}generateBindPass(e){let n=new Map;this.vertex.uniforms.entries.forEach(i=>{let a=i.bind[1];a&&n.set(i.name,a)}),this.fragment.uniforms.entries.forEach(i=>{let a=i.bind[1];a&&n.set(i.name,a)});let t=Array.from(n.values()),s=t.length;return(i,a)=>{for(let o=0;o<s;++o)t[o](e,i,a)}}generateBindDraw(e){let n=new Map;this.vertex.uniforms.entries.forEach(i=>{let a=i.bind[2];a&&n.set(i.name,a)}),this.fragment.uniforms.entries.forEach(i=>{let a=i.bind[2];a&&n.set(i.name,a)});let t=Array.from(n.values()),s=t.length;return(i,a,o)=>{for(let u=0;u<s;++u)t[u](e,o,i,a)}}};var d=class{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(let n of e)this._add(n);return this._stage}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new H(`shaderbuilder:duplicate-uniform`,`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else _().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(({name:e,arraySize:n,type:t})=>n!=null?`uniform ${t} ${e}[${n}];`:`uniform ${t} ${e};`)}get entries(){return Array.from(this._entries.values())}};var l=class{constructor(){this._entries=new Map}add(e,n){if(this._entries.has(e))throw new H(`shaderbuilder:duplicate-input`,`Duplicate input for ${e}`);this._entries.set(e,n)}get(e){let n=this._entries.get(e);if(n==null)throw new H(`shaderbuilder:input-resolver-error`,`No resolver for input ${e} found.`);return n()}};var p=class{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(e){if(this._bodies.length>0)return[`void main() {
 ${this._bodies.join(`
`)||``} 
}`];if(e)throw new H(`shaderbuilder:missing-main`,`Shader does not contain main function body.`);return[]}};var g=class{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}};var m=class extends h{constructor(){super(...arguments),this.uniforms=new d(this),this.main=new p(this),this.code=new g(this),this.constants=new S(this),this.inputs=new l}get builder(){return this}};var b=class{constructor(){this._entries=new Array}add(e,n){this._entries.push([e,n])}generateSource(e){return e===`fragment`?[]:this._entries.map(n=>`in ${n[1]} ${n[0]};`)}get names(){return this._entries.map(([e])=>e)}};var f=class{constructor(){this._entries=new Map}add(e,n,t){this._entries.has(e)?_().warn(`Ignoring duplicate varying ${n} ${e}`):this._entries.set(e,{type:n,invariant:t?.invariant??!1})}generateSource(e){let n=new Array;return this._entries.forEach((t,s)=>n.push((t.invariant&&e===`vertex`?`invariant `:``)+(t.type===`int`?`flat `:``)+(e===`vertex`?`out`:`in`)+` ${t.type} ${s};`)),n}};var $=class r{constructor(){this._entries=new Map}add(e,n,t=0){let s=this._entries.get(t);s?.name!==e||s?.type!==n?this._entries.set(t,{name:e,type:n}):_().warn(`Fragment shader output location ${t} occupied`)}static{this.DEFAULT_TYPE=`vec4`}static{this.DEFAULT_NAME=`fragColor`}generateSource(e){if(e===`vertex`)return[];this._entries.size===0&&this._entries.set(0,{name:r.DEFAULT_NAME,type:r.DEFAULT_TYPE});let n=new Array;return this._entries.forEach((t,s)=>n.push(`layout(location = ${s}) out ${t.type} ${t.name};`)),n}};var S=class r{constructor(e){this._stage=e,this._entries=new Set}add(e,n,t){let s=`ERROR_CONSTRUCTOR_STRING`;switch(n){case`float`:s=r._numberToFloatStr(t);break;case`int`:s=r._numberToIntStr(t);break;case`uint`:s=r._numberToUintStr(t);break;case`bool`:s=t.toString();break;case`vec2`:s=`vec2(${r._numberToFloatStr(t[0])},                            ${r._numberToFloatStr(t[1])})`;break;case`vec3`:s=`vec3(${r._numberToFloatStr(t[0])},                            ${r._numberToFloatStr(t[1])},                            ${r._numberToFloatStr(t[2])})`;break;case`vec4`:s=`vec4(${r._numberToFloatStr(t[0])},                            ${r._numberToFloatStr(t[1])},                            ${r._numberToFloatStr(t[2])},                            ${r._numberToFloatStr(t[3])})`;break;case`ivec2`:s=`ivec2(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])})`;break;case`ivec3`:s=`ivec3(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])},                             ${r._numberToIntStr(t[2])})`;break;case`ivec4`:s=`ivec4(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])},                             ${r._numberToIntStr(t[2])},                             ${r._numberToIntStr(t[3])})`;break;case`uvec2`:s=`uvec2(${r._numberToUintStr(t[0])},                             ${r._numberToUintStr(t[1])})`;break;case`uvec3`:s=`uvec3(${r._numberToUintStr(t[0])},                             ${r._numberToUintStr(t[1])},                             ${r._numberToUintStr(t[2])})`;break;case`uvec4`:s=`uvec4(${r._numberToUintStr(t[0])},                             ${r._numberToUintStr(t[1])},                             ${r._numberToUintStr(t[2])},                             ${r._numberToUintStr(t[3])})`;break;case`mat2`:case`mat3`:case`mat4`:s=`${n}(${Array.prototype.map.call(t,i=>r._numberToFloatStr(i)).join(`, `)})`}return this._entries.add(`const ${n} ${e} = ${s};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToUintStr(e){return`${e.toFixed(0)}u`}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}};var E=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp int;
  precision highp sampler2D;
  precision highp usampler2D;
  precision highp sampler2DArray;
  precision highp sampler2DShadow;
#else
  precision mediump float;
  precision mediump int;
  precision mediump sampler2D;
  precision mediump usampler2D;
  precision mediump sampler2DArray;
  precision mediump sampler2DShadow;
#endif`;var D=`precision highp float;
 precision highp int;
 precision highp sampler2D;
 precision highp usampler2D;
 precision highp sampler2DArray;
 precision highp sampler2DShadow;


 invariant gl_Position;
 `;export{T as t};