import{n as C,t as B}from"./chunk-DJnXYBB3.js";import{v as f}from"./chunk-DTHByWtv.js";import{a as H,j as y,p as a}from"./chunk-DipCRkz0.js";import{i as F}from"./chunk-ZOmIU9cV.js";import{a as y$1,r as h}from"./chunk-DIApwev1.js";import{n as C$1,u as N}from"./chunk-t4moUFd7.js";import{m}from"./chunk-ChnJNXUG.js";import{a as E,f as _,l as R,m as e,v as t}from"./chunk-C6fTYZ5U.js";import{o as ee,t as G}from"./chunk-BwVnc35f.js";import{o as l}from"./chunk-DiXzNRBD.js";import{S as ut,_ as ot$1,b as st,c as bt,f as it$1,h as mt$1,i as Tt$1,m as lt,n as Mt$1,r as St$1,s as _t$1}from"./chunk-DqujSFYr.js";import{n as B$1,o as Ne$1,t as Ae$1}from"./chunk-BPOyy6hB.js";import{n as J}from"./chunk-BCcjkZqm.js";import{A as Pt$1,At as te,Bt as ze,C as L,Ct as pr$1,D as Nr,Et as rn,F as St$2,Ft as wr$1,G as Yr,H as Wr,I as Te$1,It as wt,J as _r$1,K as Ze$1,Lt as xr$1,N as Rt$1,O as Or$1,Ot as ss,P as Sr$1,Pt as we$1,Q as be,Rt as xt$1,T as Mr,Tt as qt$1,U as Xr,V as W,Vt as zr,X as ae,Y as _t$2,_ as Hr,_t as mr$1,a as Bt$1,bt as nt,c as Dt$1,dt as is,f as F$1,ft as jr,g as H$1,gt as m$1,h as Gt$1,it as ee$1,j as Qr,jt as tn,kt as st$1,l as E$1,lt as hr$1,n as $t$1,nt as de,ot as f$1,p as Fr$1,r as Ar,s as Dr,t as $r,tt as cn,u as Er,ut as ie,v as Ht$1,vt as nn,w as Lr,wt as qr,xt as oe,y as Ie,yt as ns,z as Ut$1,zt as yr$1}from"./chunk-fAPzjgAn.js";import{a as e$1,c as n,i as d,o as h$1,r as c,t as a$1}from"./chunk-CxN7nLSC.js";import{d as O,f as S,h as q,i as E$2,l as M,m as l$1,n as C$2,o as I,p as j,r as D,t as A,u as N$1}from"./chunk-BYE_PWXl.js";import{t as o}from"./chunk-DrGHWCAK.js";import{a as w,n as O$1,o as z,r as b,t as $}from"./chunk-SzG_WBJ8.js";import{n as W$1,t as V}from"./chunk-DbnuE0H8.js";import"./chunk-8OlLrJsv.js";var ha=class{get forceStaticPath(){return a(`esri-cim-animations-enable-status`)===`disabled`}get forceAnimatedPath(){return a(`esri-cim-animations-enable-status`)===`forced`}get freezeGlobalTime(){return a(`esri-cim-animations-freeze-time`)??!1}get spotlightAnimatedSymbols(){return!!a(`esri-cim-animations-spotlight`)}get forceGlobalTimeOrigin(){return a(`esri-cim-animations-freeze-time`)!==!1}};var bi=new ha;var _t=class extends Ie{};y$1([st$1(m$1)],_t.prototype,`globalTime`,void 0),y$1([st$1(L)],_t.prototype,`animationTextureSize`,void 0),y$1([st$1(te)],_t.prototype,`toScreen`,void 0),y$1([st$1(te)],_t.prototype,`toNdc`,void 0),y$1([st$1(m$1)],_t.prototype,`mapRotation`,void 0),y$1([st$1(m$1)],_t.prototype,`pixelRatio`,void 0),y$1([st$1(m$1)],_t.prototype,`scaleAdjustment`,void 0);var ct=class extends St$2{getVisualVariableData(e){return this._vvData||(this._vvData=cn(this.visualVariableData,e).setDebugName(`storage2`)),this._vvData}getFilterData(e){return cn(this.filterFlags,e).setDebugName(`storage0`)}getAnimationData(e){return cn(this.animation,e).setDebugName(`storage1`)}getVVData(e){return this.getVisualVariableData(e)}getDataDrivenData0(e){return cn(this.dataDriven0,e).setDebugName(`storage30`)}getDataDrivenData1(e){return cn(this.dataDriven1,e).setDebugName(`storage31`)}getDataDrivenData2(e){return cn(this.dataDriven2,e).setDebugName(`storage32`)}getGPGPUData(e){return cn(this.gpgpu,e).setDebugName(`storage4`)}getLocalTimeOrigin(e){return cn(this.localTimeOrigin,e).x.setDebugName(`storage5`)}getFilterFlags(e){return a(`webgl-ignores-sampler-precision`)?Ar(this.getFilterData(e).x.multiply(Pt$1(255))):this.getFilterData(e).x.multiply(Pt$1(255))}getLabelVisibility(e){let t=this.getFilterData(e).y.multiply(255);return new m$1(1).subtract(t)}getAnimationValue(e){return this.getAnimationData(e).x}getSizeValue(e){return this.getVisualVariableData(e).x}getColorValue(e){return this.getVisualVariableData(e).y}getOpacityValue(e){return this.getVisualVariableData(e).z}getRotationValue(e){return this.getVisualVariableData(e).w}};y$1([ns(ee$1)],ct.prototype,`filterFlags`,void 0),y$1([ns(ee$1)],ct.prototype,`animation`,void 0),y$1([ns(ee$1)],ct.prototype,`gpgpu`,void 0),y$1([ns(ee$1)],ct.prototype,`localTimeOrigin`,void 0),y$1([ns(ee$1)],ct.prototype,`visualVariableData`,void 0),y$1([ns(ee$1)],ct.prototype,`dataDriven0`,void 0),y$1([ns(ee$1)],ct.prototype,`dataDriven1`,void 0),y$1([ns(ee$1)],ct.prototype,`dataDriven2`,void 0);var Hi=class extends Ie{getAttributeDataCoords(e){if(!this._uv){let t=S(e),i=this.size,a=pr$1(t.x),s=pr$1(t.y).multiply(pr$1(256)),l=pr$1(t.z).multiply(pr$1(256)).multiply(pr$1(256)),u=Pt$1(a.add(s).add(l)),c=we$1(u,i),f=u.subtract(c).divide(i);this._uv=new L(c,f).add(.5).divide(i)}return this._uv}};y$1([st$1(m$1)],Hi.prototype,`size`,void 0);var wi=class extends Ie{};y$1([st$1(m$1)],wi.prototype,`activeReasons`,void 0),y$1([st$1(m$1)],wi.prototype,`highlightAll`,void 0);var Pt=class extends Ie{};y$1([st$1(L)],Pt.prototype,`position`,void 0),y$1([st$1(m$1)],Pt.prototype,`distance`,void 0),y$1([st$1(m$1)],Pt.prototype,`smallSymbolDistance`,void 0),y$1([st$1(m$1)],Pt.prototype,`smallSymbolSizeThreshold`,void 0),y$1([st$1(F$1)],Pt.prototype,`tlbr`,void 0);var Se=class extends Ie{};y$1([st$1(te)],Se.prototype,`displayViewScreenMat3`,void 0),y$1([st$1(te)],Se.prototype,`displayViewMat3`,void 0),y$1([st$1(te)],Se.prototype,`displayMat3`,void 0),y$1([st$1(te)],Se.prototype,`viewMat3`,void 0),y$1([st$1(te)],Se.prototype,`tileMat3`,void 0),y$1([st$1(m$1)],Se.prototype,`displayZoomFactor`,void 0),y$1([st$1(m$1)],Se.prototype,`requiredZoomFactor`,void 0),y$1([st$1(L)],Se.prototype,`tileOffset`,void 0),y$1([st$1(m$1)],Se.prototype,`currentScale`,void 0),y$1([st$1(m$1)],Se.prototype,`currentZoom`,void 0),y$1([st$1(m$1)],Se.prototype,`metersPerSRUnit`,void 0),y$1([st$1(m$1)],Se.prototype,`rotation`,void 0),y$1([st$1(m$1)],Se.prototype,`pixelRatio`,void 0),y$1([st$1(m$1)],Se.prototype,`scaleFactor`,void 0);var me=class extends oe{};y$1([_t$2(0,W)],me.prototype,`id`,void 0),y$1([_t$2(1,m$1)],me.prototype,`bitset`,void 0),y$1([_t$2(2,L)],me.prototype,`pos`,void 0);var ce=class extends $t$1{};y$1([_t$2(14,L)],ce.prototype,`nextPos1`,void 0),y$1([_t$2(15,L)],ce.prototype,`nextPos2`,void 0);var pe=class extends H$1{};var re=class extends Te$1{clip(e,t){let i=new m$1(0),a=this.getFilterFlags(e);if(i=i.add(Pt$1(2).multiply(Pt$1(1).subtract(N$1(a,0)))),this.inside?i=i.add(Pt$1(2).multiply(Pt$1(1).subtract(N$1(a,1)))):this.outside?i=i.add(Pt$1(2).multiply(N$1(a,1))):this.highlight&&(i=i.add(Pt$1(2).multiply(Pt$1(1).subtract(this._checkHighlight(a))))),t!=null){let s=new m$1(1).subtract(nn(t.x,this.view.currentZoom)),l=nn(t.y,this.view.currentZoom);i=i.add(new m$1(2).multiply(s.add(l)))}return i}getFragmentOutput(e,t,i=new m$1(1/255)){let a=new ae;return a.fragColor=this._maybeWriteHittest(t)??this._maybeHighlight(e,i)??e,a}_maybeHighlight(e,t){return this.highlight?new F$1(e.rgb,nn(t,e.a)):null}_checkHighlight(e){let t=this._checkHighlightBit(e,0);for(let i=1;i<6;i++)t=t.add(this._checkHighlightBit(e,i));return nn(new m$1(.1),t.add(this.highlight.highlightAll))}_checkHighlightBit(e,t){return O(e,t).multiply(l$1(this.highlight.activeReasons,t))}computeHittestTriangle(e,t,i){let{viewMat3:a,tileMat3:s}=this.view,l=a.multiply(s),{nextPos1:u,nextPos2:c}=t;return{pos0:l.multiply(new W(e.pos,1)).xy,pos1:l.multiply(new W(u,1)).xy,pos2:l.multiply(new W(c,1)).xy}}maybeRunHittest(e,t,i){if(this.hittestRequest==null)return null;let a=this.hittest(e,t,i),s=$r(a,new m$1(2)),l=$r(a,new m$1(1)),u=Dt$1(l,()=>new F$1(new m$1(1/255),0,0,0),Dt$1(s,()=>new F$1(new m$1(2/255),0,0,0),new F$1(0))),c=Dt$1(Bt$1(s,l),new m$1(0),new m$1(2)),f=this.getAttributeDataCoords(e.id),m=D(f);return c=c.add(this.clip(e.id,e.zoomRange)),{glPointSize:new m$1(1),glPosition:new F$1(m,c,1),color:u}}_maybeWriteHittest(e){return this.hittestRequest!=null?e.color:null}getAttributeDataCoords(e){return this.storage.getAttributeDataCoords(e)}getVVData(e){return this.storageTextures.getVVData(this.getAttributeDataCoords(e))}getFilterFlags(e){return this.storageTextures.getFilterFlags(this.getAttributeDataCoords(e))}getLocalTimeOrigin(e){return this.storageTextures.getLocalTimeOrigin(this.getAttributeDataCoords(e))}getSizeValue(e){return this.storageTextures.getSizeValue(this.getAttributeDataCoords(e))}getColorValue(e){return this.storageTextures.getColorValue(this.getAttributeDataCoords(e))}getOpacityValue(e){return this.storageTextures.getOpacityValue(this.getAttributeDataCoords(e))}getRotationValue(e){return this.storageTextures.getRotationValue(this.getAttributeDataCoords(e))}};y$1([is],re.prototype,`inside`,void 0),y$1([is],re.prototype,`outside`,void 0),y$1([ss(wi)],re.prototype,`highlight`,void 0),y$1([st$1(Hi)],re.prototype,`storage`,void 0),y$1([ns(ct)],re.prototype,`storageTextures`,void 0),y$1([st$1(Se)],re.prototype,`view`,void 0),y$1([ss(Pt)],re.prototype,`hittestRequest`,void 0);var qe=class extends Ie{getPatternOffsetAtTileOrigin(e,t=new m$1(0),i=new m$1(1)){let a=new L(h$1).divide(e),s=e.multiply(qr(this.maxIntsToLocalOrigin.multiply(a))).add(this.tileOffsetFromLocalOrigin).subtract(new m$1(.5).multiply(e));return s=new L(s.x.multiply(i).subtract(s.y.multiply(t)),s.x.multiply(t).add(s.y.multiply(i))),we$1(s,e)}};y$1([st$1(L)],qe.prototype,`tileOffsetFromLocalOrigin`,void 0),y$1([st$1(L)],qe.prototype,`maxIntsToLocalOrigin`,void 0);var fe=class extends Ie{};y$1([st$1(L)],fe.prototype,`size`,void 0);var De=class extends Ie{getColor(e,t,i){return mr$1([Bt$1(q(e),i),t],[Nr(e,this.values.first()),this.colors.first()],[Mr(e,this.values.last()),this.colors.last()],[!0,()=>{let a=this.values.findIndex(f=>Er(f,e)),s=this.values.get(a),l=a.subtract(1),u=this.values.get(l),c=e.subtract(u).divide(s.subtract(u));return Yr(this.colors.get(l),this.colors.get(a),c)}])}};y$1([st$1(ze.ofType(F$1,8))],De.prototype,`colors`,void 0),y$1([st$1(ze.ofType(m$1,8))],De.prototype,`values`,void 0);var Ae=class extends Ie{getOpacity(e){return mr$1([q(e),new m$1(1)],[Nr(e,this.opacityValues.first()),this.opacities.first()],[Mr(e,this.opacityValues.last()),this.opacities.last()],[!0,()=>{let t=this.opacityValues.findIndex(u=>Er(u,e)),i=this.opacityValues.get(t),a=t.subtract(1),s=this.opacityValues.get(a),l=e.subtract(s).divide(i.subtract(s));return Yr(this.opacities.get(a),this.opacities.get(t),l)}])}};y$1([st$1(ze.ofType(m$1,8))],Ae.prototype,`opacities`,void 0),y$1([st$1(ze.ofType(m$1,8))],Ae.prototype,`opacityValues`,void 0);var Rt=class extends Ie{getVVRotationMat4(e){return Dt$1(q(e),xt$1.identity(),()=>{let t=this.getNormalizedAngle(e).multiply(a$1),i=Ht$1(t),a=Rt$1(t);return new xt$1(a,i,0,0,i.multiply(new m$1(-1)),a,0,0,0,0,1,0,0,0,0,1)})}getVVRotationMat3(e){return Dt$1(q(e),te.identity(),()=>{let t=this.getNormalizedAngle(e).multiply(a$1),i=Ht$1(t),a=Rt$1(t);return new te(a,i,0,i.multiply(new m$1(-1)),a,0,0,0,1)})}getNormalizedAngle(e){let t=$r(this.rotationType,new m$1(1));return Dt$1(t,new m$1(90).subtract(e),e)}};y$1([st$1(m$1)],Rt.prototype,`rotationType`,void 0);var et=class extends Ie{getSize(e,t){let i=this.minMaxValueAndSize.xy,a=this.minMaxValueAndSize.zw;return Dt$1(q(e),t,()=>{let s=e.subtract(i.x).divide(i.y.subtract(i.x)),l=Dr(s,new m$1(0),new m$1(1));return a.x.add(l.multiply(a.y.subtract(a.x)))})}};y$1([st$1(F$1)],et.prototype,`minMaxValueAndSize`,void 0);var Ye=class extends Ie{getSizeForViewScale(e){return mr$1([Nr(e,this.values.first()),this.sizes.first()],[Mr(e,this.values.last()),this.sizes.last()],[!0,()=>{let t=this.values.findIndex(u=>Er(u,e)),i=this.values.get(t),a=t.subtract(1),s=this.values.get(a),l=e.subtract(s).divide(i.subtract(s));return Yr(this.sizes.get(a),this.sizes.get(t),l)}])}};y$1([st$1(ze.ofType(m$1,8))],Ye.prototype,`sizes`,void 0),y$1([st$1(ze.ofType(m$1,8))],Ye.prototype,`values`,void 0);var We=class extends Ie{getSize(e,t){let i=mr$1([q(e),t],[Nr(e,this.values.first()),this.sizes.first()],[Mr(e,this.values.last()),this.sizes.last()],[!0,()=>{let a=this.values.findIndex(f=>Er(f,e)),s=this.values.get(a),l=a.subtract(1),u=this.values.get(l),c=e.subtract(u).divide(s.subtract(u));return Yr(this.sizes.get(l),this.sizes.get(a),c)}]);return Dt$1(q(i),t,i)}};y$1([st$1(ze.ofType(m$1,8))],We.prototype,`sizes`,void 0),y$1([st$1(ze.ofType(m$1,8))],We.prototype,`values`,void 0);var tt=class extends Ie{getSize(e,t){return Dt$1(q(e),t,e.multiply(this.unitValueToPixelsRatio))}};y$1([st$1(m$1)],tt.prototype,`unitValueToPixelsRatio`,void 0);function _a(n){return n.visualVariableSizeMinMaxValue!=null||n.visualVariableSizeScaleStops!=null||n.visualVariableSizeStops!=null||n.visualVariableSizeUnitValue!=null}function Lt(n,e,t){if(_a(n)){let i=n.getSizeValue(e);return n.visualVariableSizeMinMaxValue?.getSize(i,t)??n.visualVariableSizeScaleStops?.getSizeForViewScale(n.view.currentScale)??n.visualVariableSizeStops?.getSize(i,t)??n.visualVariableSizeUnitValue?.getSize(i,t)}return t}function pt(n,e,t,i=new E$1(!1)){if(n.visualVariableColor==null)return t;let a=n.getColorValue(e);return n.visualVariableColor.getColor(a,t,i)}function dt(n,e){if(n.visualVariableOpacity==null)return new m$1(1);let t=n.getOpacityValue(e);return n.visualVariableOpacity.getOpacity(t)}function vo(n,e){if(n.visualVariableRotation==null)return te.identity();let t=n.getRotationValue(e);return n.visualVariableRotation.getVVRotationMat3(t)}function Nn(n,e){if(n.visualVariableRotation==null)return new m$1(0);let t=n.getRotationValue(e);return n.visualVariableRotation.getNormalizedAngle(t)}var mt=class extends me{};y$1([_t$2(3,L)],mt.prototype,`offset`,void 0),y$1([_t$2(4,F$1)],mt.prototype,`sizing`,void 0),y$1([_t$2(5,F$1)],mt.prototype,`value1Position2Value2`,void 0),y$1([_t$2(6,F$1)],mt.prototype,`animationPointerAndBaseSizeAndReferenceSize`,void 0),y$1([_t$2(7,L)],mt.prototype,`zoomRange`,void 0),y$1([_t$2(8,m$1)],mt.prototype,`lineLength`,void 0);var Vi=class extends pe{};var we=class extends re{_vertexPreamble(e,t,i){let{id:a,offset:s,animationPointerAndBaseSizeAndReferenceSize:l,sizing:u}=e,c=l.xy,f=l.z,m=l.w,v=u.xy,S=this._getEvalParams(e,v,i),x,T;if(e.value1Position2Value2){let de;de=this.hittestRequest?new m$1(0):Pe(c,6,S).a.multiply(this.animationInfo.scaleAdjustment);let ze=e.pos,nt=e.value1Position2Value2.yz,Qi=e.value1Position2Value2.x,ta=e.value1Position2Value2.w,Li=de.subtract(Qi).divide(ta.subtract(Qi));T=ze.add(nt.subtract(ze).multiply(Li)),x=nn(new m$1(1),Li).add(nn(new m$1(0),Ut$1(Li)))}else T=e.pos,x=new m$1(0);let F=u.z,C=l$1(e.bitset,O$1.bitset.isStroke),D=u.w,z=l$1(e.bitset,O$1.bitset.scaleSymbolsProportionally),R=Pe(c,0,S),N=mr$1([$r(l$1(e.bitset,O$1.bitset.isMapAligned),new m$1(1)),this.view.rotation.divide(180).multiply(Math.PI)],[!0,new m$1(0)]),P=new wt(Rt$1(N),Ht$1(N.multiply(-1)),Ht$1(N),Rt$1(N)).multiply(R.xy),L=R.z.subtract(N).subtract(t),k=R.w,Y=l$1(e.bitset,O$1.bitset.isSDF),A=Lt(this,a,new m$1(m)).divide(new m$1(m));return{baseSize:f,animationPointer:c,strokeWidth:F,isOutline:C,unscaledDistanceToPx:D,scaleSymbolsProportionally:z,isSDF:Y,position:this._getScreenPosition({id:a,pos:T,offset:s,referenceSize:m,translation:P,rotation:L,scale:k,vvScale:A}),evalParams:S,vvScale:A,scale:k,clip:x}}_getScreenPosition(e){let{pos:t,translation:i,rotation:a,scale:s,offset:l,id:u,vvScale:c}=e,f=Nn(this,u).multiply(Math.PI/180),m=i.x.multiply(4/3),v=i.y.multiply(-1).multiply(4/3),S=Ht$1(f),x=Rt$1(f),T=x.multiply(m).add(Ut$1(S).multiply(v)),F=S.multiply(m).add(x.multiply(v)),C=Ht$1(a.subtract(f)),D=Rt$1(a.subtract(f)),z=new m$1(0),R=new m$1(1),{pixelRatio:N}=this.animationInfo,P=new te(R,z,z,z,R,z,T.multiply(N),F.multiply(N),R),L=new te(D,C.multiply(-1),z,C,D,z,0,0,R),k=s.multiply(c).multiply(N).multiply(4/3),Y=L.multiply(k),A=this.animationInfo.toScreen.multiply(new W(t,1)),de=P.multiply(A).xy,ze=Y.multiply(new W(l,0)).xy;return de.add(ze)}_clip(e,t){let i=super.clip(e,t),a=Nr(this._getLocalTimeOrigin(e),new m$1(0));return bi.forceGlobalTimeOrigin||(i=i.add(mr$1([a,()=>new m$1(2)],[!0,()=>new m$1(0)]))),i}_getLocalTimeOrigin(e){return this.getLocalTimeOrigin(e)}_toNdc(e){return this.animationInfo.toNdc.multiply(new W(e,1)).xy}_getEvalParams(e,t,i){let{globalTime:a,animationTextureSize:s}=this.animationInfo;return{globalTime:a,localTimeOrigin:this._getLocalTimeOrigin(e.id),animationTextureSize:s,animationTexture:this.animationTexture,pixelDimensions:t,lineLength:i}}_getColor(e,t){return Dt$1($r(t.isSDF,new m$1(1)),this._getSDFColor(e,t),this._getSpriteColor(e,t))}_getSpriteColor(e,t){return cn(this.mosaicTexture,e).multiply(t.color)}_getSDFColor(e,t){let i=cn(this.mosaicTexture,e),a=new m$1(.5).subtract(j(i)).multiply(t.distanceToPx).multiply(1),s=Dr(new m$1(.5).subtract(a),new m$1(0),new m$1(1)),l=t.color.multiply(s),u=t.outlineSize.multiply(.5),c=Fr$1(a).subtract(u),f=Dr(new m$1(.5).subtract(c),new m$1(0),new m$1(1)),m=t.outlineColor.multiply(f);return new m$1(1).subtract(m.a).multiply(l).add(m)}};function Pe(n,e,t){let i=n.add(new L(e,0)),a=cn(t.animationTexture,i.add(.5).divide(t.animationTextureSize)).xy;return n=n.add(a),Ze$1(B({animationPointer:n},t),F$1,null,s=>{let{out:l}=s;if(!l)throw new Error(`out is null`);return b(C(B({},s),{out:l}))})}y$1([st$1(fe)],we.prototype,`mosaicInfo`,void 0),y$1([st$1(_t)],we.prototype,`animationInfo`,void 0),y$1([st$1(qe)],we.prototype,`localTileOffset`,void 0),y$1([ns(ee$1)],we.prototype,`mosaicTexture`,void 0),y$1([ss(De)],we.prototype,`visualVariableColor`,void 0),y$1([ss(Ae)],we.prototype,`visualVariableOpacity`,void 0),y$1([ss(et)],we.prototype,`visualVariableSizeMinMaxValue`,void 0),y$1([ss(Ye)],we.prototype,`visualVariableSizeScaleStops`,void 0),y$1([ss(We)],we.prototype,`visualVariableSizeStops`,void 0),y$1([ss(tt)],we.prototype,`visualVariableSizeUnitValue`,void 0),y$1([ss(Rt)],we.prototype,`visualVariableRotation`,void 0),y$1([ns(ee$1)],we.prototype,`animationTexture`,void 0);var Zt=class extends mt{};y$1([_t$2(9,F$1)],Zt.prototype,`tlbr`,void 0),y$1([_t$2(10,m$1)],Zt.prototype,`angle`,void 0);var jt=class extends $t$1{};y$1([_t$2(13,L)],jt.prototype,`nextPos1`,void 0),y$1([_t$2(14,L)],jt.prototype,`nextPos2`,void 0);var Fi=class extends Vi{};var Ii=class extends we{constructor(){super(...arguments),this.computeAttributes={pos:[`nextPos1`,`nextPos2`]}}_fragmentPoly(e){let t=we$1(e.uv,new m$1(1)),i=Yr(e.tlbr.xy,e.tlbr.zw,t);return this._getColor(i,{color:e.color,distanceToPx:e.distanceToPx,isSDF:e.isSDF,outlineColor:e.outlineColor,outlineSize:e.strokeWidth})}_vertexPoly(e){let{position:t,animationPointer:i,evalParams:a,isOutline:s,unscaledDistanceToPx:l,vvScale:u,strokeWidth:c,scaleSymbolsProportionally:f,scale:m,isSDF:v,baseSize:S,clip:x}=this._vertexPreamble(e,new m$1(0),e.lineLength||new m$1(0)),T=this._toNdc(t),F=Pe(i,1,a);F=new F$1(F.rgb.multiply(F.a),F.a);let C=Dt$1(I(e.bitset,O$1.bitset.colorLocked),F,Pe(i,2,a));C=new F$1(C.rgb.multiply(C.a),C.a);let D=Pe(i,3,a);D=new F$1(D.rgb.multiply(D.a),D.a);let z=Pe(i,4,a).a,R=Pe(i,5,a).a,N=pt(this,e.id,F,Bt$1(I(e.bitset,O$1.bitset.colorLocked),new E$1(s))),P=Yr(N,C,D),L=dt(this,e.id),k=Yr(L,z,R);return{unscaledDistanceToPx:l,vvScale:u,strokeWidth:c,scaleSymbolsProportionally:f,scale:m,isSDF:v,baseSize:S,ndc:T,color:P.multiply(k),z:this.clip(e.id,e.zoomRange).add(x.multiply(2)),isOutline:s,evalParams:a,distanceToPx:l.multiply(u)}}};function ar(n,e){return jr(n,Wr(e))}function Et(n,e,t){let i=t.subtract(e),a=ar(n.subtract(e),i),s=Dr(a.divide(Lr(i)),new m$1(0),new m$1(1));return Or$1(n,e.add(s.multiply(t.subtract(e))))}function se(n){let e=Fr$1(n);return nn(e.x.add(e.y).add(e.z),new m$1(1.05))}function le(n,e,t,i){let a=new te(t.x.multiply(i.y).subtract(i.x.multiply(t.y)),i.x.multiply(e.y).subtract(e.x.multiply(i.y)),e.x.multiply(t.y).subtract(t.x.multiply(e.y)),t.y.subtract(i.y),i.y.subtract(e.y),e.y.subtract(t.y),i.x.subtract(t.x),e.x.subtract(i.x),t.x.subtract(e.x)),s=e.x.multiply(t.y.subtract(i.y)),l=t.x.multiply(i.y.subtract(e.y)),u=i.x.multiply(e.y.subtract(t.y)),c=s.add(l).add(u);return new m$1(1).divide(c).multiply(a.multiply(new W(1,n)))}function nr(n,e,t,i){return $r(se(le(n,e,t,i)),new m$1(1))}function ni(n,e,t,i){let a=t.subtract(e),s=i.subtract(e),l=C$2(a,s),u=qt$1(_r$1(l,new m$1(d)),Er(l,new m$1(-d)));return mr$1([qt$1(Qr(u),nr(n.xy,e,t,i)),new m$1(-1)],[!0,()=>{let c=Et(n,e,t),f=Et(n,t,i),m=Et(n,i,e);return Xr(Xr(c,f),m)}])}function Kt(n,e,t){let{viewMat3:i,tileMat3:a}=n.view,s=i.multiply(a),l=s.multiply(new W(e.pos,1)),u=s.multiply(new W(t.nextPos1,1)),c=s.multiply(new W(t.nextPos2,1));return ni(n.hittestRequest.position,l.xy,u.xy,c.xy)}function Hn(n,e,t){return Or$1(n,t).subtract(e)}function ft(n,e,t,i){let a=n.x,s=n.y,l=e.x,u=e.y,c=t.x,f=t.y,m=i.x,v=i.y,S=m.subtract(c),x=a.subtract(c),T=l.subtract(a),F=v.subtract(f),C=s.subtract(f),D=u.subtract(s),z=F.multiply(T).subtract(S.multiply(D)),R=S.multiply(C).subtract(F.multiply(x)).divide(z),N=T.multiply(C).subtract(D.multiply(x)).divide(z),P=qt$1(Qr($r(z,new m$1(0))),qt$1(qt$1(Mr(R,new m$1(0)),Nr(R,new m$1(1))),qt$1(Mr(N,new m$1(0)),Nr(N,new m$1(1)))));return Dt$1(P,new m$1(1),new m$1(0))}function ya(n,e,t,i,a){return qt$1(qt$1(Mr(n.x,e),Mr(n.y,t)),qt$1(_r$1(n.x,i),Nr(n.y,a)))}function Bn(n,e,t,i){let a=i.xy,s=i.zw,l=new L(s.x,a.y),u=new L(a.x,s.y),c=Xr(a.x,s.x),f=Xr(a.y,s.y),m=Hr(a.x,s.x),v=Hr(a.y,s.y),S=le(new L(c,f),n,e,t),x=le(new L(m,v),n,e,t),T=le(new L(c,v),n,e,t),F=le(new L(m,f),n,e,t),C=qt$1($r(se(S),new m$1(1)),qt$1($r(se(x),new m$1(1)),qt$1($r(se(T),new m$1(1)),$r(se(F),new m$1(1))))),D=ft(a,l,n.xy,e.xy).add(ft(l,s,n.xy,e.xy)).add(ft(u,s,n.xy,e.xy)).add(ft(u,a,n.xy,e.xy)),z=ft(a,l,n.xy,t.xy).add(ft(l,s,n.xy,t.xy)).add(ft(u,s,n.xy,t.xy)).add(ft(u,a,n.xy,t.xy)),R=ft(a,l,e.xy,t.xy).add(ft(l,s,e.xy,t.xy)).add(ft(u,s,e.xy,t.xy)).add(ft(u,a,e.xy,t.xy)),N=ya(n.xy,c,f,m,v),P=ya(e.xy,c,f,m,v),L$1=ya(t.xy,c,f,m,v),k=qt$1(N,qt$1(P,L$1));return{hasIntersectingSegments:Bt$1(Er(D,new m$1(0)),Bt$1(Er(z,new m$1(0)),Er(R,new m$1(0)))),allTriangleVerticesInside:k,triangleContainsRect:C}}function ho(n,e,t,i){let{hasIntersectingSegments:a,allTriangleVerticesInside:s,triangleContainsRect:l}=Bn(n,e,t,i);return Dt$1(a,new m$1(1),Dt$1(Bt$1(s,l),new m$1(2),new m$1(0)))}function Me(n,e,t,i){let{hasIntersectingSegments:a,allTriangleVerticesInside:s,triangleContainsRect:l}=Bn(n,e,t,i);return Dt$1(Bt$1(a,Bt$1(s,l)),new m$1(2),new m$1(0))}function Ve(n){return qt$1(Mr(n.tlbr.x,new m$1(0)),Mr(n.tlbr.y,new m$1(0)),Mr(n.tlbr.z,new m$1(0)),Mr(n.tlbr.w,new m$1(0)))}var yt=class extends me{};y$1([_t$2(3,F$1)],yt.prototype,`color`,void 0),y$1([_t$2(4,L)],yt.prototype,`zoomRange`,void 0);var Re=class extends re{constructor(){super(...arguments),this.type=`FillShader`,this.computeAttributes={pos:[`nextPos1`,`nextPos2`]}}vertex(e,t){let i=dt(this,e.id),a=pt(this,e.id,e.color).multiply(i),s=this.view.displayViewScreenMat3.multiply(new W(e.pos.xy,1)),l=this.clip(e.id,e.zoomRange);return B({glPosition:new F$1(s.xy,l,1),color:a},this.maybeRunHittest(e,t,null))}fragment(e){return this.getFragmentOutput(e.color,e,new m$1(0))}hittest(e,t){let{pos0:i,pos1:a,pos2:s}=this.computeHittestTriangle(e,t,null),l=Ve(this.hittestRequest);return Dt$1(l,()=>{let{tlbr:u}=this.hittestRequest;return Me(i,a,s,u)},()=>{let u=Kt(this,e,t);return Dt$1(Er(u,this.hittestRequest.distance),new m$1(0),new m$1(2))})}};y$1([ss(De)],Re.prototype,`visualVariableColor`,void 0),y$1([ss(Ae)],Re.prototype,`visualVariableOpacity`,void 0),y$1([h(0,nt(yt)),h(1,nt(ce))],Re.prototype,`vertex`,null),y$1([h(0,nt(pe))],Re.prototype,`fragment`,null);var Mt=class extends yt{};y$1([_t$2(5,F$1)],Mt.prototype,`tlbr`,void 0),y$1([_t$2(6,m$1)],Mt.prototype,`width`,void 0),y$1([_t$2(7,m$1)],Mt.prototype,`height`,void 0),y$1([_t$2(8,L)],Mt.prototype,`offset`,void 0),y$1([_t$2(9,L)],Mt.prototype,`scale`,void 0),y$1([_t$2(10,m$1)],Mt.prototype,`angle`,void 0);var xa=class extends pe{};function Sa(n,e,t,i,a){let s=$r(l$1(a,2),Pt$1(1)),l=j(new F$1(n,0));return Dt$1(s,yr$1(i.divide(e.x),t.divide(e.y),0,Ut$1(t.divide(e.x)),i.divide(e.y),0,M(hr$1(l,0)),M(hr$1(0,l)),1),yr$1(i.divide(e.x),t.divide(e.y),0,Ut$1(t.divide(e.x)),i.divide(e.y),0,0,0,1))}function Ta(n,e){let t=n.view.requiredZoomFactor,i=new L(e.width,e.height),a=i.multiply(e.scale).multiply(t),s=e.angle.multiply(e$1),l=Ht$1(s),u=Rt$1(s),c=Sa(e.id,a,l,u,e.bitset),f=n.localTileOffset.getPatternOffsetAtTileOrigin(i,l,u),m=t.multiply(e.scale).multiply(e.offset.subtract(f)).divide(a),v=new W(e.pos,1),S=c.multiply(v).xy.subtract(m),x=e.tlbr.divide(n.mosaicInfo.size.xyxy),T=l$1(e.bitset,4);return n.visualVariableColor!=null&&(T=Dt$1(q(n.getColorValue(e.id)),new m$1(0),T)),{tileTextureCoord:S,tlbr:x,sampleAlphaOnly:T}}function ba(n,e){let t=we$1(e.tileTextureCoord,new m$1(1)),i=Yr(e.tlbr.xy,e.tlbr.zw,t),a=cn(n.mosaicTexture,i);return a=Dt$1(Er(e.sampleAlphaOnly,new m$1(.5)),a.aaaa,a),e.color.multiply(a)}var Nt=class extends Re{constructor(){super(...arguments),this.type=`ComplexFillShader`}vertex(e,t){return B(B({},super.vertex(e,t)),Ta(this,e))}fragment(e){let t=ba(this,e);return this.getFragmentOutput(t,e,new m$1(0))}};y$1([st$1(fe)],Nt.prototype,`mosaicInfo`,void 0),y$1([ns(ee$1)],Nt.prototype,`mosaicTexture`,void 0),y$1([st$1(qe)],Nt.prototype,`localTileOffset`,void 0),y$1([h(0,nt(Mt)),h(1,nt(ce))],Nt.prototype,`vertex`,null),y$1([h(0,nt(xa))],Nt.prototype,`fragment`,null);var Oi=class extends Ii{constructor(){super(...arguments),this.type=`AnimatedFillShader`}vertex(e,t){let{distanceToPx:i,ndc:a,z:s,color:l,isOutline:u,strokeWidth:c,isSDF:f,scale:m,scaleSymbolsProportionally:v}=this._vertexPoly(e),S=this.view.requiredZoomFactor,x=e.sizing.xy,T=x.multiply(S),F=e.angle?e.angle.multiply(e$1):new m$1(0),C=Ht$1(F),D=Rt$1(F),z=Sa(e.id,T,C,D,e.bitset),R=this.localTileOffset.getPatternOffsetAtTileOrigin(x,C,D),N=S.multiply(e.offset.subtract(R)).divide(T),P=new W(e.pos,1),L=z.multiply(P).xy.subtract(N),k=e.tlbr.divide(this.mosaicInfo.size.xyxy);return B({glPosition:new F$1(a,s,1),tlbr:k,uv:L,color:l.multiply(new m$1(1).subtract(u)),outlineColor:l.multiply(u),distanceToPx:i,strokeWidth:c.multiply(Yr(new m$1(1),m,v)),isOutline:u,isSDF:f},this.maybeRunHittest(e,t,{}))}fragment(e){let t=this._fragmentPoly(e);return this.getFragmentOutput(t,e)}hittest(e,t,i){let{pos0:a,pos1:s,pos2:l}=this.computeHittestTriangle(e,t,null),u=Ve(this.hittestRequest);return Dt$1(u,()=>{let{tlbr:c}=this.hittestRequest;return Me(a,s,l,c)},()=>{let c=Kt(this,e,t);return Dt$1(Er(c,this.hittestRequest.distance),new m$1(0),new m$1(2))})}};y$1([h(0,nt(Zt)),h(1,nt(jt))],Oi.prototype,`vertex`,null),y$1([h(0,nt(Fi))],Oi.prototype,`fragment`,null);var it=class extends me{};y$1([_t$2(3,F$1)],it.prototype,`color`,void 0),y$1([_t$2(4,L)],it.prototype,`offset`,void 0),y$1([_t$2(5,L)],it.prototype,`normal`,void 0),y$1([_t$2(6,m$1)],it.prototype,`halfWidth`,void 0),y$1([_t$2(7,m$1)],it.prototype,`referenceHalfWidth`,void 0),y$1([_t$2(8,L)],it.prototype,`zoomRange`,void 0);var ri=class extends pe{};var Ht=class extends Ie{};function _o(n$1){return Hr(new m$1(n).multiply(nn(n$1,new m$1(1))),new m$1(1))}function si(n,e){let{halfWidth:t,normal:i}=n,a=_o(t),s=Lr(i).multiply(t);return Dr(a.multiply(t.subtract(s)).divide(e.add(a).subtract(new m$1(1))),new m$1(0),new m$1(1))}function rr(n,e){let{id:t,halfWidth:i,referenceHalfWidth:a}=e;if(_a(n)){let l=Lt(n,t,new m$1(2).multiply(a)),u=new m$1(c),c$1=Dt$1(Er(i,u),i.divide(Hr(a,u)),new m$1(1));return new m$1(.5).multiply(c$1).multiply(l)}return i}function li(n,e){let{id:t,offset:i,pos:a,normal:s,zoomRange:l}=e,{displayViewScreenMat3:u,displayViewMat3:c}=n.view,f=pt(n,t,e.color),m=dt(n,t),v=rr(n,e),S=new m$1(.5).multiply(n.antialiasingControls.antialiasing),x=Hr(v.add(S),new m$1(.45)).add(new m$1(.1).multiply(S)),T=_o(x).multiply(x).multiply(i).multiply(n.view.scaleFactor),F=c.multiply(new W(T,new m$1(0))),C=u.multiply(new W(a,new m$1(1))).add(F),D=new m$1(2).multiply(nn(v,new m$1(0))).add(n.clip(t,l)),z=new F$1(C.xy,D,1);return{color:f,opacity:m,halfWidth:x,normal:s,scaledOffset:T,scaledHalfWidth:v,glPosition:new F$1(z.xy,D,1)}}function ui(n,e){let{opacity:t,color:i}=n,a=si(n,e);return t.multiply(i).multiply(a)}y$1([st$1(m$1)],Ht.prototype,`antialiasing`,void 0),y$1([st$1(m$1)],Ht.prototype,`blur`,void 0);var Oe=class extends re{constructor(){super(...arguments),this.type=`LineShader`,this.computeAttributes={pos:[`nextPos1`,`nextPos2`]}}vertex(e,t){let i=li(this,e);return B(B({},i),this.maybeRunHittest(e,t,i.halfWidth))}fragment(e){let t=ui(e,this.antialiasingControls.blur);return this.getFragmentOutput(t,e)}hittest(e,t,i){let{pos0:a,pos1:s,pos2:l}=this.computeHittestTriangle(e,t,null),u=Ve(this.hittestRequest),{distance:c,smallSymbolDistance:f,smallSymbolSizeThreshold:m,tlbr:v}=this.hittestRequest,S=nn(i,m.multiply(.5)).multiply(c.subtract(f)),x=this.hittestRequest.position,T=Xr(Et(x,a,s),Et(x,a,l)).subtract(i).add(S);return Dt$1(u,Me(a,s,l,v),Dt$1(Er(T,c),new m$1(0),new m$1(2)))}};y$1([st$1(Ht)],Oe.prototype,`antialiasingControls`,void 0),y$1([ss(De)],Oe.prototype,`visualVariableColor`,void 0),y$1([ss(Ae)],Oe.prototype,`visualVariableOpacity`,void 0),y$1([ss(et)],Oe.prototype,`visualVariableSizeMinMaxValue`,void 0),y$1([ss(Ye)],Oe.prototype,`visualVariableSizeScaleStops`,void 0),y$1([ss(We)],Oe.prototype,`visualVariableSizeStops`,void 0),y$1([ss(tt)],Oe.prototype,`visualVariableSizeUnitValue`,void 0),y$1([h(0,nt(it)),h(1,nt(ce))],Oe.prototype,`vertex`,null),y$1([h(0,nt(ri))],Oe.prototype,`fragment`,null);var zi=class extends Zt{};y$1([_t$2(10,m$1)],zi.prototype,`accumulatedDistance`,void 0),y$1([_t$2(11,L)],zi.prototype,`normal`,void 0),y$1([_t$2(12,L)],zi.prototype,`segmentDirection`,void 0);var wa=class extends Fi{};var ci=class extends Ii{constructor(){super(...arguments),this.type=`AnimatedLineShader`}vertex(e,t){let{animationPointerAndBaseSizeAndReferenceSize:i}=e,a=i.xy,{distanceToPx:s,ndc:l,z:u,color:c,isOutline:f,strokeWidth:m,isSDF:v,baseSize:S,scale:x,scaleSymbolsProportionally:T,evalParams:F}=this._vertexPoly(e),C=e.sizing.xy,D=C.x.multiply(S).divide(C.y),z=Pe(a,6,F).a.multiply(this.animationInfo.scaleAdjustment),R=e.accumulatedDistance.subtract(z),{normal:N}=e,P=e.normal.y,L$2=R.divide(this.view.displayZoomFactor).add(jr(e.segmentDirection,e.offset)).divide(D),k=P.add(1).divide(2),Y=new L(L$2,k),A=e.tlbr.divide(this.mosaicInfo.size.xyxy),de=S.divide(2),ze=new m$1(.5).multiply(this.antialiasingControls.antialiasing),nt=Hr(de.add(ze),new m$1(.45)).add(new m$1(.1).multiply(ze));return B({glPosition:new F$1(l,u,1),tlbr:A,uv:Y,color:c.multiply(new m$1(1).subtract(f)),outlineColor:c.multiply(f),distanceToPx:s,strokeWidth:m.multiply(Yr(new m$1(1),x,T)),isOutline:f,isSDF:v,halfWidth:nt,normal:N},this.maybeRunHittest(e,t,nt))}fragment(e){let t=this._fragmentPoly(e),i=si(e,this.antialiasingControls.blur),{halfWidth:a,normal:s}=e,l=_o(a),u=Lr(s).multiply(a),c=Dr(l.multiply(a.subtract(u)).divide(l.subtract(new m$1(1))),new m$1(0),new m$1(1));return this.getFragmentOutput(t.multiply(c).multiply(i),e)}hittest(e,t,i){let{pos0:a,pos1:s,pos2:l}=this.computeHittestTriangle(e,t,null),u=Ve(this.hittestRequest),{distance:c,smallSymbolDistance:f,smallSymbolSizeThreshold:m,tlbr:v}=this.hittestRequest,S=nn(i,m.multiply(.5)).multiply(c.subtract(f)),x=this.hittestRequest.position,T=Xr(Et(x,a,s),Et(x,a,l)).subtract(i).add(S);return Dt$1(u,Me(a,s,l,v),Dt$1(Er(T,c),new m$1(0),new m$1(2)))}};y$1([st$1(Ht)],ci.prototype,`antialiasingControls`,void 0),y$1([h(0,nt(zi)),h(1,nt(jt))],ci.prototype,`vertex`,null),y$1([h(0,nt(wa))],ci.prototype,`fragment`,null);var Bi=class extends mt{};y$1([_t$2(9,L)],Bi.prototype,`uv`,void 0),y$1([_t$2(10,m$1)],Bi.prototype,`angle`,void 0);var pi=class extends $t$1{};y$1([_t$2(11,L)],pi.prototype,`offsetNextVertex1`,void 0),y$1([_t$2(12,L)],pi.prototype,`offsetNextVertex2`,void 0),y$1([_t$2(13,L)],pi.prototype,`textureUVNextVertex1`,void 0),y$1([_t$2(14,L)],pi.prototype,`textureUVNextVertex2`,void 0);var Va=class extends Vi{};function Bt(n,e,t,i){return e.multiply(n.x).add(t.multiply(n.y)).add(i.multiply(n.z))}var di=class extends we{constructor(){super(...arguments),this.type=`AnimatedMarkerShader`,this.computeAttributes={offset:[`offsetNextVertex1`,`offsetNextVertex2`],uv:[`textureUVNextVertex1`,`textureUVNextVertex2`]}}vertex(e,t){let i=e.uv.divide(this.mosaicInfo.size),{position:a,animationPointer:s,evalParams:l,isOutline:u,unscaledDistanceToPx:c,vvScale:f,strokeWidth:m,scaleSymbolsProportionally:v,scale:S,isSDF:x,baseSize:T,clip:F}=this._vertexPreamble(e,e.angle,e.lineLength||new m$1(0)),C=this._toNdc(a),D=Pe(s,1,l);D=new F$1(D.rgb.multiply(D.a),D.a);let z=Dt$1(I(e.bitset,O$1.bitset.colorLocked),D,Pe(s,2,l));z=new F$1(z.rgb.multiply(z.a),z.a);let R=Pe(s,3,l);R=new F$1(R.rgb.multiply(R.a),R.a);let N=Pe(s,4,l).a,P=Pe(s,5,l).a,L=pt(this,e.id,D,Bt$1(I(e.bitset,O$1.bitset.colorLocked),new E$1(u))),k=Yr(L,z,R),Y=dt(this,e.id),A=Yr(Y,N,P),de=k.multiply(A),ze=this.clip(e.id,e.zoomRange).add(F.multiply(2)),nt=c.multiply(f);return B({glPosition:new F$1(C,ze,1),uv:i,color:de.multiply(new m$1(1).subtract(u)),outlineColor:de.multiply(u),distanceToPx:nt,strokeWidth:m.multiply(Yr(new m$1(1),S,v)),isOutline:u,isSDF:x},this.maybeRunHittest(e,t,{pos:e.pos,size:T,sizeCorrection:new m$1(1),isMapAligned:new m$1(1),vvRotationMat3:new te(1,0,0,0,1,0,0,0,1),placementMat3:new te(1,0,0,0,1,0,0,0,1),outlineSize:new m$1(1),distanceToPx:nt,isSDF:x}))}fragment(e){let t=this._getColor(e.uv,{color:e.color,distanceToPx:e.distanceToPx,isSDF:e.isSDF,outlineColor:e.outlineColor,outlineSize:e.strokeWidth});return bi.spotlightAnimatedSymbols&&(t=t.add(new F$1(0,.3,0,.3))),this.getFragmentOutput(t,e)}hittest(e,t,i){let{pos0:a,pos1:s,pos2:l}=this.computeHittestTriangle(e,t,i),u=Ve(this.hittestRequest);return Dt$1(u,()=>{let{tlbr:c}=this.hittestRequest;return ho(a,s,l,c)},()=>Dt$1(_r$1(i.size,this.hittestRequest.smallSymbolSizeThreshold),this._hittestSmallMarker(e,t,i),this._hittestMarker(e,t,i)))}_hittestSmallMarker(e,t,i){let{position:a,distance:s,smallSymbolDistance:l}=this.hittestRequest,u=s.subtract(l),{viewMat3:c,tileMat3:f}=this.view,m=c.multiply(f).multiply(new W(i.pos,1)).xy,v=i.size.multiply(.5),S=Or$1(m,a).subtract(v).add(u);return Dt$1(Er(S,this.hittestRequest.distance),new m$1(0),new m$1(2))}_hittestMarker(e,t,i){let a=this._vertexPreamble(B({},e),e.angle,new m$1(0)).position,s=this._vertexPreamble(C(B({},e),{offset:t.offsetNextVertex1}),e.angle,new m$1(0)).position,l=this._vertexPreamble(C(B({},e),{offset:t.offsetNextVertex2}),e.angle,new m$1(0)).position,u=this.hittestRequest.position,c=this.hittestRequest.distance,f=ni(u,a,s,l);return Dt$1(Er(f,c),new m$1(0),this._hittestSamples(a,s,l,e,t,i))}_hittestSamples(e,t,i,a,s,l){let{outlineSize:u,isSDF:c,distanceToPx:f}=l,m=this.hittestRequest.position,v=this.hittestRequest.distance,S=le(m.add(new L(Ut$1(v),Ut$1(v))),e,t,i),x=le(m.add(new L(0,Ut$1(v))),e,t,i),T=le(m.add(new L(v,Ut$1(v))),e,t,i),F=le(m.add(new L(Ut$1(v),0)),e,t,i),C=le(m,e,t,i),D=le(m.add(new L(v,0)),e,t,i),z=le(m.add(new L(Ut$1(v),v)),e,t,i),R=le(m.add(new L(0,v)),e,t,i),N=le(m.add(new L(v,v)),e,t,i),P=a.uv.divide(this.mosaicInfo.size),L$3=s.textureUVNextVertex1.divide(this.mosaicInfo.size),k=s.textureUVNextVertex2.divide(this.mosaicInfo.size),Y={color:new F$1(1,1,1,1),outlineSize:u,outlineColor:new F$1(1,1,1,1),isSDF:c,distanceToPx:f},A=new m$1(0);return A=A.add(se(S).multiply(this._getColor(Bt(S,P,L$3,k),Y).a)),A=A.add(se(x).multiply(this._getColor(Bt(x,P,L$3,k),Y).a)),A=A.add(se(T).multiply(this._getColor(Bt(T,P,L$3,k),Y).a)),A=A.add(se(F).multiply(this._getColor(Bt(F,P,L$3,k),Y).a)),A=A.add(se(C).multiply(this._getColor(Bt(C,P,L$3,k),Y).a)),A=A.add(se(D).multiply(this._getColor(Bt(D,P,L$3,k),Y).a)),A=A.add(se(z).multiply(this._getColor(Bt(z,P,L$3,k),Y).a)),A=A.add(se(R).multiply(this._getColor(Bt(R,P,L$3,k),Y).a)),A=A.add(se(N).multiply(this._getColor(Bt(N,P,L$3,k),Y).a)),Dt$1(Er(A,new m$1(.05)),new m$1(2),new m$1(0))}};y$1([h(0,nt(Bi)),h(1,nt(pi))],di.prototype,`vertex`,null),y$1([h(0,nt(Va))],di.prototype,`fragment`,null);var K=class extends de{constructor(){super(...arguments),this.symbologyPlane=0,this._input=null}};function Ze(n){let e=1/n;return{antialiasing:e,blur:0+e}}var mi=class extends K{render(e,t){let{context:i,painter:a,pixelRatio:s}=e,{target:l}=t,{freezeGlobalTime:u}=bi,f=a.textureManager.animationStore.getTexture(i,0),m=[2/e.state.size[0],0,0,0,-2/e.state.size[1],0,-1,1,1],v=Array.from(C$1(mt$1(),m)),S=Array.from(N(mt$1(),v,l.transforms.displayViewScreenMat3)),x=t.instance.getInput(),T=a.textureManager.getMosaicInfo(e,t.textureKey,!1),{optionalAttributes:F}=x,C$3=F.zoomRange,D=F.value1Position2Value2,z=`accumulatedDistance`in F&&F.accumulatedDistance,R=`segmentDirection`in F&&F.segmentDirection,N$2=`normal`in F&&F.normal,P=2**(t.target.key.level-e.displayLevel);a.setShader({shader:this.shaders.geometry,uniforms:C(B(B({},bt(e,t.target,x.uniforms)),Mt$1(e,t.target)),{antialiasingControls:Ze(s),mosaicInfo:T,animationInfo:{globalTime:e.animationsEnabled?u===!1?e.time/1e3:u:0,scaleAdjustment:P,animationTextureSize:[f.descriptor.width,f.descriptor.height],toScreen:S,toNdc:m,mapRotation:e.state.rotation,pixelRatio:e.state.pixelRatio},localTileOffset:_t$1(t.target)}),textures:C(B({},St$1(e)),{mosaicTexture:a.textureManager.getMosaicTexture(e,t.textureKey,!1),animationTexture:{unit:6,texture:f}}),defines:B({},Tt$1(e)),optionalAttributes:{zoomRange:C$3,value1Position2Value2:D,accumulatedDistance:z,segmentDirection:R,normal:N$2},useComputeBuffer:it$1(e)}),a.setPipelineState(B({},lt(e))),a.submitDraw(e,t),u===!1&&e.animationsEnabled&&l.requestRender()}};var yo=class extends mi{constructor(){super(...arguments),this.type=2,this.symbologyPlane=2,this.shaders={geometry:new di}}};var xo=class extends mi{constructor(){super(...arguments),this.type=3,this.symbologyPlane=2,this.shaders={geometry:new di}}};var So=class extends mi{constructor(){super(...arguments),this.type=0,this.symbologyPlane=0,this.shaders={geometry:new Oi}}};var To=class extends mi{constructor(){super(...arguments),this.type=1,this.symbologyPlane=1,this.shaders={geometry:new ci}}};var bo=class extends oe{};y$1([_t$2(0,L)],bo.prototype,`pos`,void 0);var Fa=class extends pe{};var wo=class extends Ie{};y$1([st$1(m$1)],wo.prototype,`dotSize`,void 0);var Gi=class extends Ie{};y$1([st$1(m$1)],Gi.prototype,`pixelRatio`,void 0),y$1([st$1(m$1)],Gi.prototype,`tileZoomFactor`,void 0);var sr=1e-6;var Ot=class extends Te$1{constructor(){super(...arguments),this.type=`DotDensityPointShader`}vertex(e){let t=new te(1,0,0,0,-1,0,0,1,1).multiply(new W(e.pos.xy.divide(512),1)),i=cn(this.drawLocations,t.xy),a=Hr(this.instance.dotSize.divide(2),new m$1(1)),s=new m$1(0);s=s.add(nn(i.a,new m$1(sr)).multiply(2));let l=a.add(this.instance.dotSize),u=this.view.displayViewScreenMat3.multiply(new W(e.pos.add(.5),1)),c=new F$1(u.xy,s,1),f=this.instance.dotSize.divide(l),m=new m$1(-1).divide(a.divide(l));return l=l.multiply(this.draw.pixelRatio.multiply(this.draw.tileZoomFactor)),{glPosition:c,glPointSize:l,color:i,ratio:f,invEdgeRatio:m}}fragment(e){let t=Lr(e.glPointCoord.subtract(.5)).multiply(2),i=tn(new m$1(0),new m$1(1),e.invEdgeRatio.multiply(t.subtract(e.ratio)).add(1)),a=new ae;return a.fragColor=e.color.multiply(i),a}};y$1([st$1(wo)],Ot.prototype,`instance`,void 0),y$1([st$1(Gi)],Ot.prototype,`draw`,void 0),y$1([st$1(Se)],Ot.prototype,`view`,void 0),y$1([ns(ee$1)],Ot.prototype,`drawLocations`,void 0),y$1([h(0,nt(bo))],Ot.prototype,`vertex`,null),y$1([h(0,nt(Fa))],Ot.prototype,`fragment`,null);var Vo=class extends me{};y$1([_t$2(3,m$1)],Vo.prototype,`inverseArea`,void 0);var Ci=class extends Ie{};y$1([st$1(ze.ofType(F$1,2))],Ci.prototype,`isActive`,void 0),y$1([st$1(ze.ofType(F$1,8))],Ci.prototype,`colors`,void 0),y$1([st$1(m$1)],Ci.prototype,`dotValue`,void 0);var Di=class extends Ie{};y$1([st$1(m$1)],Di.prototype,`tileZoomFactor`,void 0),y$1([st$1(m$1)],Di.prototype,`pixelRatio`,void 0),y$1([st$1(m$1)],Di.prototype,`tileDotsOverArea`,void 0);var Ui=class extends St$2{};y$1([ns(ee$1)],Ui.prototype,`dotTexture0`,void 0),y$1([ns(ee$1)],Ui.prototype,`dotTexture1`,void 0);var zt=class extends re{constructor(){super(...arguments),this.type=`DotDensityPolygonShader`}_dotThreshold(e,t,i){return e.divide(t).divide(i)}vertex(e){let t=new te(2/512,0,0,0,-2/512,0,-1,1,1).multiply(new W(e.pos,1)),i=this.clip(e.id),a=new F$1(t.xy,i,1),s=this.getVVData(e.id).multiply(this.instance.isActive.get(0)).multiply(e.inverseArea),l=this.storageTextures.getDataDrivenData0(this.getAttributeDataCoords(e.id)).multiply(this.instance.isActive.get(1)).multiply(e.inverseArea),u=this.draw.tileZoomFactor.multiply(512).divide(this.draw.pixelRatio),c=this._dotThreshold(s,this.instance.dotValue,this.draw.tileDotsOverArea),f=this._dotThreshold(l,this.instance.dotValue,this.draw.tileDotsOverArea),m=e.pos.add(.5).divide(u);return{glPosition:a,color:new F$1(0,0,0,0),textureCoords:m,thresholds0:c,thresholds1:f}}fragment(e){let t=new ae,i=cn(this.drawTextures.dotTexture0,e.textureCoords),a=cn(this.drawTextures.dotTexture1,e.textureCoords),s=e.thresholds0.subtract(i),l=e.thresholds1.subtract(a),u,c=xt$1.fromColumns(this.instance.colors.get(0),this.instance.colors.get(1),this.instance.colors.get(2),this.instance.colors.get(3)),f=xt$1.fromColumns(this.instance.colors.get(4),this.instance.colors.get(5),this.instance.colors.get(6),this.instance.colors.get(7));if(this.blending){let m=nn(new m$1(0),s),v=nn(new m$1(0),l),S=jr(m,s).add(jr(v,l)),x=nn(S,new m$1(0)),T=new m$1(1).subtract(x),F=S.add(x),C=s.multiply(m).divide(F),D=l.multiply(v).divide(F),z=c.multiply(C).add(f.multiply(D));u=T.multiply(z)}else{let m=Hr(A(s),A(l)),v=nn(m,new m$1(0)),S=new m$1(1).subtract(v),x=nn(m,s),T=nn(m,l),F=c.multiply(x).add(f.multiply(T));u=S.multiply(F)}return t.fragColor=u,t}hittest(e){return new m$1(0)}};y$1([is],zt.prototype,`blending`,void 0),y$1([st$1(Ci)],zt.prototype,`instance`,void 0),y$1([st$1(Di)],zt.prototype,`draw`,void 0),y$1([ns(Ui)],zt.prototype,`drawTextures`,void 0),y$1([h(0,nt(Vo))],zt.prototype,`vertex`,null),y$1([h(0,nt(pe))],zt.prototype,`fragment`,null);var lr={pos:{count:2,type:_.UNSIGNED_SHORT}};var Fo=class{constructor(){this._dotTextureSize=0,this._dotTextures=null,this._dotMesh=null}destroy(){this._disposeTextures(),this._dotFBO?.dispose(),this._dotMesh?.destroy()}getFBO(e){if(this._dotFBO==null){let t$1=512,i=512,a=new G(t$1,i);a.samplingMode=9728,a.wrapMode=33071;let s=new B$1(e,new Ae$1(t.DEPTH24_STENCIL8,t$1,i));this._dotFBO=new Ne$1(e,a,s)}return this._dotFBO}getDotDensityMesh(e){if(this._dotMesh==null){let t=512,i=t*t,a=2,s=new Int16Array(i*a);for(let l=0;l<t;l++)for(let u=0;u<t;u++)s[a*(u+l*t)]=u,s[a*(u+l*t)+1]=l;this._dotMesh=J.create(e,{primitive:E.POINTS,vertex:s,count:i,layout:lr})}return this._dotMesh}getDotDensityTextures(e,t,i){if(this._dotTextureSize===t&&this._seed===i||(this._disposeTextures(),this._dotTextureSize=t,this._seed=i),this._dotTextures===null){let a=new f(i);this._dotTextures=[this._allocDotDensityTexture(e,t,a),this._allocDotDensityTexture(e,t,a)]}return this._dotTextures}_disposeTextures(){if(this._dotTextures){for(let e=0;e<this._dotTextures.length;e++)this._dotTextures[e].dispose();this._dotTextures=null}}_allocDotDensityTexture(e$2,t,i){let a=new Float32Array(t*t*4);for(let l=0;l<a.length;l++)a[l]=i.getFloat();let s=new G(t);return s.dataType=e.FLOAT,s.samplingMode=9728,new ee(e$2,s,a)}};var Io=class extends K{constructor(){super(...arguments),this.type=12,this.shaders={polygon:new zt,point:new Ot,fill:new Re},this._resources=new Map}render(e,t){ot$1(e)||it$1(e)?this._renderPolygons(e,t):this._renderDotDensity(e,t)}_renderPolygons(e,t){let{painter:i}=e;i.setShader({shader:this.shaders.fill,uniforms:C(B({},Mt$1(e,t.target)),{visualVariableColor:null,visualVariableOpacity:null}),textures:St$1(e),defines:B({},Tt$1(e)),optionalAttributes:{zoomRange:!1},useComputeBuffer:it$1(e)}),i.setPipelineState(lt(e)),i.submitDraw(e,t)}_renderDotDensity(e,t){let{context:i,painter:a,requiredLevel:s}=e,l=t.instance.getInput().uniforms,u=this._getOrCreateResourcesRecord(i),c=u.getDotDensityTextures(i,512,l.seed),f=1/2**(s-t.target.key.level),m=512,v=m*window.devicePixelRatio*m*window.devicePixelRatio,S=1/f*(1/f),x=l.dotScale?e.state.scale/l.dotScale:1,T=l.dotValue*x*S;a.setShader({shader:this.shaders.polygon,uniforms:C(B({},Mt$1(e,t.target)),{instance:{isActive:l.isActive,colors:l.colors,dotValue:Math.max(1,T)},draw:{tileZoomFactor:f,pixelRatio:window.devicePixelRatio,tileDotsOverArea:v/(512*window.devicePixelRatio*512*window.devicePixelRatio)}}),textures:C(B({},St$1(e)),{drawTextures:{dotTexture0:{unit:5,texture:c[0]},dotTexture1:{unit:6,texture:c[1]}}}),defines:C(B({},Tt$1(e)),{blending:l.blending}),optionalAttributes:{},useComputeBuffer:!1});let F=i.getViewport();i.setViewport(0,0,512,512);let C$4=i.boundFramebuffer,D=u.getFBO(i);i.bindFramebuffer(D),i.setClearColor(0,0,0,0),i.clear(16384),a.setPipelineState({color:{write:[!0,!0,!0,!0],blendMode:`composite`},depth:!1,stencil:!1}),a.updatePipelineState(i),a.submitDraw(e,t),i.bindFramebuffer(C$4),i.setViewport(F.x,F.y,F.width,F.height);let z=u.getFBO(i).colorTexture,R={shader:this.shaders.point,uniforms:{view:st(e,t.target),instance:{dotSize:l.dotSize},draw:{tileZoomFactor:1,pixelRatio:window.devicePixelRatio}},textures:{drawLocations:{unit:5,texture:z}},defines:B({},Tt$1(e)),optionalAttributes:{},useComputeBuffer:!1};a.setPipelineState(lt(e)),a.submitDrawMesh(i,R,u.getDotDensityMesh(i),{stencilRef:t.getStencilReference()})}shutdown(e){super.shutdown(e),this._resources.get(e)?.destroy(),this._resources.delete(e)}_getOrCreateResourcesRecord(e){let t=this._resources.get(e);return t??(t=new Fo,this._resources.set(e,t)),t}};var Oo=class extends K{constructor(){super(...arguments),this.type=10,this.shaders={geometry:new Nt}}render(e,t){let{painter:i}=e,a=t.instance.getInput();i.setShader({shader:this.shaders.geometry,uniforms:C(B(B({},bt(e,t.target,a.uniforms)),Mt$1(e,t.target)),{mosaicInfo:i.textureManager.getMosaicInfo(e,t.textureKey),localTileOffset:_t$1(t.target)}),textures:C(B({},St$1(e)),{mosaicTexture:i.textureManager.getMosaicTexture(e,t.textureKey)}),defines:B({},Tt$1(e)),optionalAttributes:a.optionalAttributes,useComputeBuffer:it$1(e)}),i.setPipelineState(lt(e)),i.submitDraw(e,t)}};var xt=class extends me{};y$1([_t$2(3,L)],xt.prototype,`offset`,void 0),y$1([_t$2(4,F$1)],xt.prototype,`color`,void 0),y$1([_t$2(5,L)],xt.prototype,`normal`,void 0),y$1([_t$2(6,m$1)],xt.prototype,`halfWidth`,void 0),y$1([_t$2(7,m$1)],xt.prototype,`referenceHalfWidth`,void 0),y$1([_t$2(8,L)],xt.prototype,`zoomRange`,void 0);var ki=class extends ri{};function qi(n,e,t){let{id:i,bitset:a}=e,s=l$1(a,0),l=Er(s,new m$1(.5)),u=li(n,e),c=Dt$1(l,u.halfWidth,new m$1(0)),f=dt(n,i),m=pt(n,i,e.color),v=Dt$1(l,Dt$1(I(a,1),m,e.color),m.multiply(f)),S=n.view.displayViewScreenMat3.multiply(new W(e.pos.xy,1)),x=n.clip(e.id),T=new F$1(S.xy,x,1),F=Dt$1(l,u.glPosition,T),C=t&&n.maybeRunHittest(e,t,l);return B({isOutline:s,color:v,opacity:new m$1(1),halfWidth:c,normal:u.normal,glPosition:F},C)}var gt=class extends re{constructor(){super(...arguments),this.computeAttributes={pos:[`nextPos1`,`nextPos2`]}}};y$1([st$1(Ht)],gt.prototype,`antialiasingControls`,void 0),y$1([ss(De)],gt.prototype,`visualVariableColor`,void 0),y$1([ss(Ae)],gt.prototype,`visualVariableOpacity`,void 0),y$1([ss(et)],gt.prototype,`visualVariableSizeMinMaxValue`,void 0),y$1([ss(Ye)],gt.prototype,`visualVariableSizeScaleStops`,void 0),y$1([ss(We)],gt.prototype,`visualVariableSizeStops`,void 0),y$1([ss(tt)],gt.prototype,`visualVariableSizeUnitValue`,void 0);var Xt=class extends gt{constructor(){super(...arguments),this.type=`OutlineFillShader`}vertex(e,t){return qi(this,e,t)}fragment(e){let{color:t,isOutline:i}=e,a=Er(i,new m$1(.5)),s=ui(e,this.antialiasingControls.blur),l=Dt$1(a,s,t),u=Dt$1(a,new m$1(1/255),new m$1(0));return this.getFragmentOutput(l,e,u)}hittest(e,t,i){let{pos0:a,pos1:s,pos2:l}=this.computeHittestTriangle(e,t,null),u=Ve(this.hittestRequest);return Dt$1(u,()=>{let{tlbr:c}=this.hittestRequest;return Me(a,s,l,c)},()=>{let c=Kt(this,e,t);return Dt$1(Bt$1(i,Er(c,this.hittestRequest.distance)),new m$1(0),new m$1(2))})}};y$1([h(0,nt(xt)),h(1,nt(ce))],Xt.prototype,`vertex`,null),y$1([h(0,nt(ki))],Xt.prototype,`fragment`,null);var Yi=class extends yt{};y$1([_t$2(5,F$1)],Yi.prototype,`tlbr`,void 0),y$1([_t$2(6,m$1)],Yi.prototype,`inverseRasterizationScale`,void 0);var Ia=class extends pe{};function ur(n){let e=new m$1(1),t=new m$1(0);return new te(e.divide(n.x),t.divide(n.y),0,Ut$1(t.divide(n.x)),e.divide(n.y),0,0,0,1)}function Oa(n,e){let t=e.tlbr.xy,i=e.tlbr.zw,a=i.x.subtract(t.x),s=t.y.subtract(i.y),l=new L(a,s).multiply(e.inverseRasterizationScale),u=l.multiply(n.view.requiredZoomFactor),c=ur(u),f=n.localTileOffset.getPatternOffsetAtTileOrigin(l).divide(u),m=new W(e.pos,1);return{tileTextureCoord:c.multiply(m).xy.subtract(f),tlbr:e.tlbr.divide(n.mosaicInfo.size.xyxy)}}function za(n,e){let t=we$1(n.tileTextureCoord,new m$1(1)),i=Yr(n.tlbr.xy,n.tlbr.zw,t),a=cn(e.mosaicTexture,i);return n.color.multiply(a)}var Gt=class extends Re{constructor(){super(...arguments),this.type=`PatternFillShader`}vertex(e,t){return B(B({},super.vertex(e,t)),Oa(this,e))}fragment(e){let t=za(e,this);return this.getFragmentOutput(t,e,new m$1(0))}};y$1([st$1(fe)],Gt.prototype,`mosaicInfo`,void 0),y$1([ns(ee$1)],Gt.prototype,`mosaicTexture`,void 0),y$1([st$1(qe)],Gt.prototype,`localTileOffset`,void 0),y$1([h(0,nt(Yi)),h(1,nt(ce))],Gt.prototype,`vertex`,null),y$1([h(0,nt(Ia))],Gt.prototype,`fragment`,null);var Wi=class extends xt{};y$1([_t$2(9,F$1)],Wi.prototype,`tlbr`,void 0),y$1([_t$2(10,m$1)],Wi.prototype,`inverseRasterizationScale`,void 0);var Zi=class extends ki{};var Ut=class extends Xt{constructor(){super(...arguments),this.type=`PatternOutlineFillShader`}vertex(e,t){return B(B({},qi(this,e,t)),Oa(this,e))}fragment(e){let{isOutline:t}=e,i=Er(t,new m$1(.5)),a=ui(e,this.antialiasingControls.blur),s=za(e,this),l=Dt$1(i,a,s),u=Dt$1(i,new m$1(1/255),new m$1(0));return this.getFragmentOutput(l,e,u)}};y$1([st$1(fe)],Ut.prototype,`mosaicInfo`,void 0),y$1([ns(ee$1)],Ut.prototype,`mosaicTexture`,void 0),y$1([st$1(qe)],Ut.prototype,`localTileOffset`,void 0),y$1([h(0,nt(Wi)),h(1,nt(ce))],Ut.prototype,`vertex`,null),y$1([h(0,nt(Zi))],Ut.prototype,`fragment`,null);var Gn=1/16;var St=class extends me{};y$1([_t$2(3,F$1)],St.prototype,`color`,void 0),y$1([_t$2(4,F$1)],St.prototype,`tlbr`,void 0),y$1([_t$2(5,m$1)],St.prototype,`angle`,void 0),y$1([_t$2(6,m$1)],St.prototype,`aux1`,void 0),y$1([_t$2(7,m$1)],St.prototype,`aux2`,void 0),y$1([_t$2(8,L)],St.prototype,`aux3`,void 0),y$1([_t$2(9,L)],St.prototype,`aux4`,void 0),y$1([_t$2(10,L)],St.prototype,`zoomRange`,void 0);var Ca=class extends Zi{};var kt=class extends gt{constructor(){super(...arguments),this.type=`ComplexOutlineFillShader`}vertex(e,t){let{aux1:i,aux2:a,aux3:s,aux4:l}=e,u=C(B({},e),{width:i,height:a,offset:s,scale:l.multiply(Gn)}),c=C(B({},e),{halfWidth:i,referenceHalfWidth:a,offset:s,normal:l.subtract(128).multiply(Gn)}),f=qi(this,c),m=Ta(this,u),v=Er(f.isOutline,new m$1(.5));return B(B(B({},f),m),Object.assign({},this.maybeRunHittest(e,t,v)))}fragment(e){let{isOutline:t}=e,i=Er(t,new m$1(.5)),a=ui(e,this.antialiasingControls.blur),s=ba(this,e),l=Dt$1(i,a,s),u=Dt$1(i,new m$1(1/255),new m$1(0));return this.getFragmentOutput(l,e,u)}hittest(e,t,i){let{pos0:a,pos1:s,pos2:l}=this.computeHittestTriangle(e,t,null),u=Ve(this.hittestRequest);return Dt$1(u,()=>{let{tlbr:c}=this.hittestRequest;return Me(a,s,l,c)},()=>{let c=Kt(this,e,t);return Dt$1(Bt$1(i,Er(c,this.hittestRequest.distance)),new m$1(0),new m$1(2))})}};y$1([st$1(fe)],kt.prototype,`mosaicInfo`,void 0),y$1([ns(ee$1)],kt.prototype,`mosaicTexture`,void 0),y$1([st$1(qe)],kt.prototype,`localTileOffset`,void 0),y$1([h(0,nt(St)),h(1,nt(ce))],kt.prototype,`vertex`,null),y$1([h(0,nt(Ca))],kt.prototype,`fragment`,null);var zo=class extends K{constructor(){super(...arguments),this.type=11,this.shaders={geometry:new kt}}render(e,t){let{painter:i,pixelRatio:a}=e,s=t.instance.getInput();i.setShader({shader:this.shaders.geometry,uniforms:C(B(B({},bt(e,t.target,s.uniforms)),Mt$1(e,t.target)),{antialiasingControls:Ze(a),mosaicInfo:i.textureManager.getMosaicInfo(e,t.textureKey),localTileOffset:_t$1(t.target)}),textures:C(B({},St$1(e)),{mosaicTexture:i.textureManager.getMosaicTexture(e,t.textureKey)}),defines:B({},Tt$1(e)),optionalAttributes:s.optionalAttributes,useComputeBuffer:it$1(e)}),i.setPipelineState(lt(e)),i.submitDraw(e,t)}};var Co=class extends K{constructor(){super(...arguments),this.type=15,this.shaders={geometry:new Re}}render(e,t){let{painter:i}=e,a=t.instance.getInput();i.setShader({shader:this.shaders.geometry,uniforms:B(B({},bt(e,t.target,a.uniforms)),Mt$1(e,t.target)),textures:St$1(e),defines:Tt$1(e),optionalAttributes:a.optionalAttributes,useComputeBuffer:it$1(e)}),i.setPipelineState(lt(e)),i.submitDraw(e,t)}};var fi=class extends yt{};y$1([_t$2(5,F$1)],fi.prototype,`tlbr`,void 0),y$1([_t$2(6,L)],fi.prototype,`relativePosition`,void 0),y$1([_t$2(7,m$1)],fi.prototype,`gradientMethod`,void 0),y$1([_t$2(8,L)],fi.prototype,`relativeGradientSize`,void 0);var Da=class extends pe{};var $t=class extends Re{constructor(){super(...arguments),this.type=`GradientFillShader`}vertex(e,t){let{tlbr:i,relativePosition:a,gradientMethod:s,relativeGradientSize:l}=e,u=Dt$1(I(e.bitset,$.isAbsolute),this.view.displayZoomFactor,new m$1(1));return C(B({},super.vertex(e,t)),{tlbr:i,relativePosition:a,gradientMethod:s,gradientSize:l.multiply(u),isDiscrete:l$1(e.bitset,$.isDiscrete)})}fragment(e){let{tlbr:t,relativePosition:i,gradientMethod:a,gradientSize:s,isDiscrete:l}=e,u=Dt$1(Er(l,new m$1(.5)),s.subtract(1),new L(0)),c=mr$1([$r(a,new m$1(w.rectangular)),()=>{let x=Fr$1(i).add(u).divide(s);return E$2(Hr(x.x,x.y))}],[$r(a,new m$1(w.circular)),E$2(rn(jr(i,i)).add(u.x).divide(s.x))],[!0,E$2(i.x.add(u.x).divide(s.x))]),f=new L(Dr(c,new m$1(0),new m$1(1)),.5),m=Yr(t.xy,t.zw,f).divide(this.mosaicInfo.size),v=cn(this.mosaicTexture,m),S=e.color.a;return this.getFragmentOutput(v.multiply(S),e,new m$1(0))}};y$1([st$1(fe)],$t.prototype,`mosaicInfo`,void 0),y$1([ns(ee$1)],$t.prototype,`mosaicTexture`,void 0),y$1([h(0,nt(fi)),h(1,nt(ce))],$t.prototype,`vertex`,null),y$1([h(0,nt(Da))],$t.prototype,`fragment`,null);var Do=class extends K{constructor(){super(...arguments),this.type=16,this.shaders={geometry:new $t},this.symbologyPlane=0}render(e,t){let{painter:i}=e,a=t.instance.getInput();i.setShader({shader:this.shaders.geometry,uniforms:C(B(B({},bt(e,t.target,a.uniforms)),Mt$1(e,t.target)),{mosaicInfo:i.textureManager.getMosaicInfo(e,t.textureKey)}),textures:C(B({},St$1(e)),{mosaicTexture:i.textureManager.getMosaicTexture(e,t.textureKey)}),defines:B({},Tt$1(e)),optionalAttributes:a.optionalAttributes,useComputeBuffer:it$1(e)}),i.setPipelineState(lt(e)),i.submitDraw(e,t)}};var Ao=class extends K{constructor(){super(...arguments),this.type=26,this.shaders={geometry:new Xt}}render(e,t){let{painter:i,pixelRatio:a}=e,s=t.instance.getInput();i.setShader({shader:this.shaders.geometry,uniforms:C(B(B({},bt(e,t.target,s.uniforms)),Mt$1(e,t.target)),{antialiasingControls:Ze(a)}),textures:St$1(e),defines:B({},Tt$1(e)),optionalAttributes:s.optionalAttributes,useComputeBuffer:it$1(e)}),i.setPipelineState(lt(e)),i.submitDraw(e,t)}};var Po=class extends K{constructor(){super(...arguments),this.type=28,this.shaders={geometry:new Gt}}render(e,t){let{painter:i}=e,a=t.instance.getInput();i.setShader({shader:this.shaders.geometry,uniforms:C(B(B({},bt(e,t.target,a.uniforms)),Mt$1(e,t.target)),{mosaicInfo:i.textureManager.getMosaicInfo(e,t.textureKey),localTileOffset:_t$1(t.target)}),textures:C(B({},St$1(e)),{mosaicTexture:i.textureManager.getMosaicTexture(e,t.textureKey)}),defines:B({},Tt$1(e)),optionalAttributes:a.optionalAttributes,useComputeBuffer:it$1(e)}),i.setPipelineState(lt(e)),i.submitDraw(e,t)}};var Ro=class extends K{constructor(){super(...arguments),this.type=29,this.shaders={geometry:new Ut}}render(e,t){let{painter:i,pixelRatio:a}=e,s=t.instance.getInput();i.setShader({shader:this.shaders.geometry,uniforms:C(B(B({},bt(e,t.target,s.uniforms)),Mt$1(e,t.target)),{antialiasingControls:Ze(a),mosaicInfo:i.textureManager.getMosaicInfo(e,t.textureKey),localTileOffset:_t$1(t.target)}),textures:C(B({},St$1(e)),{mosaicTexture:i.textureManager.getMosaicTexture(e,t.textureKey)}),defines:B({},Tt$1(e)),optionalAttributes:s.optionalAttributes,useComputeBuffer:it$1(e)}),i.setPipelineState(lt(e)),i.submitDraw(e,t)}};var Aa=class{constructor(e,t,i,a){this.startTime=e,this.startValue=t,this.endTime=i,this.endValue=a}getValue(e){if(e<=this.startTime)return this.startValue;if(e>=this.endTime)return this.endValue;let t=(e-this.startTime)/(this.endTime-this.startTime);return this.startValue+t*(this.endValue-this.startValue)}isForeverZero(e){return this.startValue===0&&this.endValue===0||this.endValue===0&&e>=this.endTime}};function Pa(n,e){return typeof n==`number`?n:n.getValue(e)}function Un(n){return typeof n==`number`?n:n.endValue}function Md(n,e){return typeof n==`number`?n===0:n.isForeverZero(e)}function cr(n,e,t,i){return n===t?n:new Aa(n,e,t,i)}function Nd(n,e,t){let i=Pa(n,t),a=i*e;return a===0?0:cr(t,i,t+a,0)}function kn(n,e){let t=!0;return t=t&&n.collisions===e.collisions,t=t&&n.density===e.density,t=t&&n.interpolate===e.interpolate,t=t&&n.lineCollisionWidth===e.lineCollisionWidth,t=t&&n.lineSpacing===e.lineSpacing,t=t&&n.maxTurnAngle===e.maxTurnAngle,t=t&&n.minSpeedThreshold===e.minSpeedThreshold,t=t&&n.segmentLength===e.segmentLength,t=t&&n.smoothing===e.smoothing,t=t&&n.velocityScale===e.velocityScale,t=t&&n.verticesPerLine===e.verticesPerLine,t=t&&n.onlyForwardTracing===e.onlyForwardTracing,t=t&&n.continuous===e.continuous,t=t&&n.maxNumberOfStreamlines===e.maxNumberOfStreamlines,t=t&&pr(n.perturb,e.perturb),t}function pr(n,e){return!n&&!e||!(n&&!e||!n&&e)&&n?.rotation===e?.rotation&&n?.scale===e?.scale}function qd(n){let e=fr(mr(n)),t=e,i=!0,a=Math.max(e/2,5),s=Math.round(m(n.maxPathLength)/a)+1,l=10,{density:u}=n,c=m(n.smoothing),f=n.flowRepresentation===`flow-from`?1:-1,m$2=.001,v=1,S=!0,x=!1,{continuous:T,perturb:F}=n;return{smoothing:c,interpolate:S,velocityScale:f,verticesPerLine:s,minSpeedThreshold:m$2,segmentLength:a,maxTurnAngle:v,collisions:i,lineCollisionWidth:t,lineSpacing:l,density:u,onlyForwardTracing:x,continuous:T,perturb:F,wrapAround:!1,maxNumberOfStreamlines:1/0}}function Yd(n,e,t,i){if(n.length===0)return[];let a=[],s=t.time-e.time,l=W$1(n),u=l?V(n[0].hasMagnitude):1,c=l?({vertices:f},m)=>{let v=f,S=m*u;return{x:v[S],y:v[S+1],time:v[S+2],speed:0}}:({vertices:f},m)=>f[m];for(let f of n){let{stage:m,vertices:v}=f;if(m===2)continue;let S=v.length/u,x=c(f,0),T=x.time,F=(s*i-T)%(c(f,S-1).time-T)+T,C=x.x,D=x.y,z=x.time;for(let R=1;R<S&&z<F;R++){let N=c(f,R),P=Math.min(N.time,F)-z,L=N.time-z;C+=(N.x-C)*(P/L),D+=(N.y-D)*(P/L),z=z+P}a.push(dr(C,D,e,t))}return a}function dr(n,e,t,i){return n/=t.size[0],e=1-(e/=t.size[1]),n*=t.extent.xmax-t.extent.xmin,e*=t.extent.ymax-t.extent.ymin,n+=t.extent.xmin,e+=t.extent.ymin,n-=i.extent.xmin,e-=i.extent.ymin,n/=i.extent.xmax-i.extent.xmin,e=1-(e/=i.extent.ymax-i.extent.ymin),{x:n*=i.size[0],y:e*=i.size[1]}}function mr(n){if(!n.hasVisualVariables(`size`))return{kind:`constant`,value:[m(n.trailWidth)]};let e=n.getVisualVariablesForType(`size`)[0],t=[],i=[],a;if(e.stops){for(let s of e.stops)t.push(s.value),i.push(m(s.size));a=e.stops.length}else t.push(e.minDataValue,e.maxDataValue),i.push(m(e.minSize),m(e.maxSize)),a=2;return{kind:`ramp`,stops:t,values:i,count:a}}function fr(n){return n.kind===`constant`?n.value[0]:n.values[n.values.length-1]}function qn(n){let e=n.toRgba();return[e[0]/255,e[1]/255,e[2]/255,e[3]]}function jd(n){return{kind:`constant`,value:[.1,.1,.1,1]}}function Kd(n){if(!n.hasVisualVariables(`color`))return{kind:`constant`,value:qn(n.color)};let e=n.getVisualVariablesForType(`color`)[0],t=[],i=[];for(let a of e.stops)t.push(a.value),Array.prototype.push.apply(i,qn(a.color));return{kind:`ramp`,stops:t,values:i,count:e.stops.length}}function Xd(n){if(!n.hasVisualVariables(`opacity`))return{kind:`constant`,value:[1]};let e=n.getVisualVariablesForType(`opacity`)[0],t=[],i=[];for(let a of e.stops)t.push(a.value),i.push(a.opacity);return{kind:`ramp`,stops:t,values:i,count:e.stops.length}}var Ct=8;function $d(n){if(n.kind===`constant`)return{constant:n.value,count:1,stops:new Array(Ct).fill(0),values:new Array(Ct).fill(n.value)};let e=Math.min(n.count,Ct),t=new Array(Ct).fill(n.stops[e-1]),i=new Array(Ct).fill(null).map((a,s)=>{let l=4*Math.min(s,e-1);return n.values.slice(l,l+4)});for(let a=0;a<e;a++)t[a]=n.stops[a];return{constant:[0,0,0,0],count:e,stops:t,values:i}}function Jd(n){if(n.kind===`constant`)return{constant:n.value[0],count:1,stops:new Array(Ct).fill(0),values:new Array(Ct).fill(n.value[0])};let e=Math.min(n.count,Ct),t=new Array(Ct).fill(n.stops[e-1]),i=new Array(Ct).fill(n.values[e-1]);for(let a=0;a<e;a++)t[a]=n.stops[a],i[a]=n.values[a];return{constant:0,count:e,stops:t,values:i}}function gr(n,e){return n===e||n!=null&&e!=null&&n.equals(e)}function Qd(n,e){if(!kn(n.simulationSettings,e.simulationSettings)||!gr(n.timeExtent,e.timeExtent))return!1;let t=!0;return t=t&&n.loadImagery===e.loadImagery,t=t&&n.createFlowMesh===e.createFlowMesh,t=t&&n.color.kind===e.color.kind,t=t&&n.opacity.kind===e.opacity.kind,t=t&&n.size.kind===e.size.kind,t}var Yn=36e5;var em=3600;var je=class extends Ie{};y$1([st$1(m$1)],je.prototype,`time`,void 0),y$1([st$1(te)],je.prototype,`dvsMat3`,void 0),y$1([st$1(te)],je.prototype,`displayViewMat3`,void 0),y$1([st$1(m$1)],je.prototype,`displayOpacity`,void 0),y$1([st$1(m$1)],je.prototype,`startTime`,void 0),y$1([st$1(m$1)],je.prototype,`endTime`,void 0);var ot=class extends Ie{};y$1([st$1(m$1)],ot.prototype,`trailLength`,void 0),y$1([st$1(m$1)],ot.prototype,`flowSpeed`,void 0),y$1([st$1(m$1)],ot.prototype,`featheringSize`,void 0),y$1([st$1(m$1)],ot.prototype,`featheringOffset`,void 0),y$1([st$1(m$1)],ot.prototype,`introFade`,void 0),y$1([st$1(m$1)],ot.prototype,`fadeToZero`,void 0),y$1([st$1(m$1)],ot.prototype,`decayRate`,void 0);var Ai=class extends Ie{};y$1([st$1(m$1)],Ai.prototype,`min`,void 0),y$1([st$1(m$1)],Ai.prototype,`max`,void 0);var vt=class extends Ie{getValue(e,t){return t?mr$1([Nr(e,this.stops.first()),this.values.first()],[Mr(e,this.stops.get(this.count.subtract(1))),this.values.get(this.count.subtract(1))],[!0,()=>{let i=this.stops.findIndex(c=>Er(c,e)),a=this.stops.get(i),s=i.subtract(1),l=this.stops.get(s),u=e.subtract(l).divide(a.subtract(l));return Yr(this.values.get(s),this.values.get(i),u)}]):this.constant}};y$1([st$1(F$1)],vt.prototype,`constant`,void 0),y$1([st$1(ze.ofType(m$1,8))],vt.prototype,`stops`,void 0),y$1([st$1(ze.ofType(F$1,8))],vt.prototype,`values`,void 0),y$1([st$1(f$1)],vt.prototype,`count`,void 0);var Ke=class extends Ie{getValue(e,t){return t?mr$1([Nr(e,this.stops.first()),this.values.first()],[Mr(e,this.stops.get(this.count.subtract(1))),this.values.get(this.count.subtract(1))],[!0,()=>{let i=this.stops.findIndex(c=>Er(c,e)),a=this.stops.get(i),s=i.subtract(1),l=this.stops.get(s),u=e.subtract(l).divide(a.subtract(l));return Yr(this.values.get(s),this.values.get(i),u)}]):this.constant}};function Lo(n,e,t){return n.add(e.multiply(new m$1(2)).multiply(t))}function Eo(n,e,t,i){return n.dvsMat3.multiply(new W(e,1)).add(n.displayViewMat3.multiply(new W(t.multiply(i),0))).xy}function Pi(n,e,t){let i=Yr(new m$1(0),zr(e.multiply(new m$1(-1))),t);return zr(e.multiply(n).multiply(new m$1(-1))).subtract(i).divide(new m$1(1).subtract(i))}function Mo(n,e,t,i){let a=Dr(new m$1(.5).subtract(i.divide(t)),new m$1(0),new m$1(.5)),s=Dt$1(Er(e,a),new m$1(1).subtract(e.subtract(a).divide(new m$1(.5).subtract(a))),new m$1(1));return n.multiply(s)}function Ri(n,e){return new F$1(n.rgb.multiply(e),e)}function Wn(n,e){return we$1(n.multiply(3.634).add(e.multiply(5.153)).add(7.381),new m$1(1))}y$1([st$1(m$1)],Ke.prototype,`constant`,void 0),y$1([st$1(ze.ofType(m$1,8))],Ke.prototype,`stops`,void 0),y$1([st$1(ze.ofType(m$1,8))],Ke.prototype,`values`,void 0),y$1([st$1(f$1)],Ke.prototype,`count`,void 0);var ji=class extends oe{};y$1([_t$2(0,L)],ji.prototype,`position`,void 0),y$1([_t$2(1,L)],ji.prototype,`texcoord`,void 0);var Ra=class extends H$1{};var at=class extends Te$1{constructor(){super(...arguments),this.type=`FlowImageryShader`,this.vvColor=null,this.vvOpacity=null}vertex(e){let t=this.state.dvsMat3.multiply(new W(e.position,1)).xy;return{glPosition:new F$1(t,0,1),texcoord:e.texcoord}}fragment(e){let t=cn(this.texture,e.texcoord),i=this.config.min.add(t.r.multiply(this.config.max.subtract(this.config.min))),a=this.color.getValue(i,this.vvColor),s=a.a.multiply(this.opacity.getValue(t.r,this.vvOpacity)).multiply(t.a),l=new ae;return l.fragColor=Ri(a,s),l}};y$1([is],at.prototype,`vvColor`,void 0),y$1([is],at.prototype,`vvOpacity`,void 0),y$1([st$1(je)],at.prototype,`state`,void 0),y$1([st$1(Ai)],at.prototype,`config`,void 0),y$1([ns(ee$1)],at.prototype,`texture`,void 0),y$1([st$1(vt)],at.prototype,`color`,void 0),y$1([st$1(Ke)],at.prototype,`opacity`,void 0),y$1([h(0,nt(ji))],at.prototype,`vertex`,null),y$1([h(0,nt(Ra))],at.prototype,`fragment`,null);var gi=class extends oe{};y$1([_t$2(0,F$1)],gi.prototype,`xyts0`,void 0),y$1([_t$2(1,F$1)],gi.prototype,`xyts1`,void 0),y$1([_t$2(2,F$1)],gi.prototype,`typeIdFirstTimeLastTime`,void 0),y$1([_t$2(3,F$1)],gi.prototype,`extrudeInfo`,void 0);var La=class extends H$1{};var Xe=class extends Te$1{constructor(){super(...arguments),this.type=`FlowParticlesShader`,this.vvColor=null,this.vvOpacity=null,this.vvSize=null}vertex(e){let t=e.typeIdFirstTimeLastTime.z,i=e.typeIdFirstTimeLastTime.w.subtract(t),a=e.xyts0.xy,s=e.xyts0.z.subtract(t),l=e.xyts0.w,u=e.xyts1.xy,c=e.xyts1.z.subtract(t),f=e.xyts1.w,m=e.typeIdFirstTimeLastTime.x,v=e.typeIdFirstTimeLastTime.y,S=new m$1(2),x=new m$1(1),T=new m$1(2),F=new m$1(3),C=e.extrudeInfo.xy,D=e.extrudeInfo.zw,z=i.add(this.config.trailLength),R=we$1(this.state.time.multiply(this.config.flowSpeed),z),N=R.subtract(s).divide(c.subtract(s)),P=Dr(N,new m$1(0),new m$1(1)),L$4=Yr(s,c,P),k=Yr(l,f,P),Y=Yr(C,D,P),A=Wr(u.subtract(a)).multiply(new m$1(.5)),de=$r(m,S),ze=Bt$1($r(v,x),$r(v,T)),nt=Dt$1(de,Bt$1(_r$1(N,new m$1(0)),qt$1(Er(N,new m$1(1)),Sr$1(c,i))),_r$1(N,new m$1(0))),Qi=Dt$1(de,mr$1([$r(v,x),Y],[$r(v,T),Y.multiply(new m$1(-1))],[$r(v,F),Y.add(A)],[!0,Y.multiply(new m$1(-1)).add(A)]),mr$1([$r(v,x),C],[$r(v,T),C.multiply(new m$1(-1))],[$r(v,F),Y],[!0,Y.multiply(new m$1(-1))])),ta=Dt$1(de,mr$1([$r(v,x),new L(.5,0)],[$r(v,T),new L(.5,1)],[$r(v,F),new L(1,0)],[!0,new L(1,1)]),mr$1([$r(v,x),new L(.5,0)],[$r(v,T),new L(.5,1)],[$r(v,F),new L(.5,0)],[!0,new L(.5,1)])),Li=Dt$1(de,L$4,Dt$1(ze,s,L$4)),ia=Dt$1(de,k,Dt$1(ze,l,k)),Qn=Dt$1(de,Pi(R.subtract(L$4).divide(this.config.trailLength),this.config.decayRate,this.config.fadeToZero),Dt$1(ze,Pi(R.subtract(s).divide(this.config.trailLength),this.config.decayRate,this.config.fadeToZero),Pi(R.subtract(L$4).divide(this.config.trailLength),this.config.decayRate,this.config.fadeToZero))),er=new m$1(1).subtract(zr(Li.multiply(new m$1(-1)))),ka=Lo(this.size.getValue(ia,this.vvSize),this.config.featheringSize,this.config.featheringOffset),qa=this.color.getValue(ia,this.vvColor),tr=qa.a.multiply(this.opacity.getValue(ia,this.vvOpacity)).multiply(Qn).multiply(Yr(new m$1(1),er,this.config.introFade)).multiply(this.state.displayOpacity),ir=Dt$1(de,Yr(a,u,P),Dt$1(ze,a,Yr(a,u,P))),or=Eo(this.state,ir,Qi,ka);return{glPosition:Dt$1(nt,new F$1(0,0,-2,1),new F$1(or,0,1)),color:Ri(qa,tr),texcoord:ta,size:ka}}fragment(e){let t=new ae;return t.fragColor=Mo(e.color,Lr(e.texcoord.subtract(new L(.5))),e.size,this.config.featheringSize),t}};y$1([is],Xe.prototype,`vvColor`,void 0),y$1([is],Xe.prototype,`vvOpacity`,void 0),y$1([is],Xe.prototype,`vvSize`,void 0),y$1([st$1(je)],Xe.prototype,`state`,void 0),y$1([st$1(ot)],Xe.prototype,`config`,void 0),y$1([st$1(vt)],Xe.prototype,`color`,void 0),y$1([st$1(Ke)],Xe.prototype,`opacity`,void 0),y$1([st$1(Ke)],Xe.prototype,`size`,void 0),y$1([h(0,nt(gi))],Xe.prototype,`vertex`,null),y$1([h(0,nt(La))],Xe.prototype,`fragment`,null);var vi=class extends oe{};y$1([_t$2(0,W)],vi.prototype,`positionAndSide`,void 0),y$1([_t$2(1,W)],vi.prototype,`timeInfo`,void 0),y$1([_t$2(2,L)],vi.prototype,`extrude`,void 0),y$1([_t$2(3,m$1)],vi.prototype,`speed`,void 0);var Ea=class extends H$1{};var $e=class extends Te$1{constructor(){super(...arguments),this.type=`FlowStreamlinesShader`,this.vvColor=null,this.vvOpacity=null,this.vvSize=null}vertex(e){let t=e.positionAndSide.xy,i=this.color.getValue(e.speed,this.vvColor),a=this.opacity.getValue(e.speed,this.vvOpacity),s=Lo(this.size.getValue(e.speed,this.vvSize),this.config.featheringSize,this.config.featheringOffset),l=Eo(this.state,t,e.extrude,s),u=i.a.multiply(a);return{glPosition:new F$1(l,0,1),side:e.positionAndSide.z,timeInfo:e.timeInfo,color:Ri(i,u),size:s}}fragment(e){let t=e.timeInfo.z.subtract(e.timeInfo.y).add(this.config.trailLength),i=Wn(e.timeInfo.y,e.timeInfo.z),a=we$1(i.multiply(t).add(this.state.time.multiply(this.config.flowSpeed)),t).add(e.timeInfo.y).subtract(e.timeInfo.x).divide(this.config.trailLength),s=e.color.multiply(this.state.displayOpacity).multiply(Dt$1(_r$1(a,new m$1(0)),new m$1(0),Pi(a,this.config.decayRate,this.config.fadeToZero))),l=new ae;return l.fragColor=Mo(s,Fr$1(e.side).divide(new m$1(2)),e.size,this.config.featheringSize),l}};y$1([is],$e.prototype,`vvColor`,void 0),y$1([is],$e.prototype,`vvOpacity`,void 0),y$1([is],$e.prototype,`vvSize`,void 0),y$1([st$1(je)],$e.prototype,`state`,void 0),y$1([st$1(ot)],$e.prototype,`config`,void 0),y$1([st$1(vt)],$e.prototype,`color`,void 0),y$1([st$1(Ke)],$e.prototype,`opacity`,void 0),y$1([st$1(Ke)],$e.prototype,`size`,void 0),y$1([h(0,nt(vi))],$e.prototype,`vertex`,null),y$1([h(0,nt(Ea))],$e.prototype,`fragment`,null);var No=class extends de{constructor(){super(...arguments),this.type=14,this.drawPhase=1,this.shaders={imagery:new at,particles:new Xe,streamlines:new $e}}render(e,t){let{painter:i}=e;i.setPipelineState({depth:!1,color:{write:[!0,!0,!0,!0],blendMode:`composite`},stencil:{write:!1,test:{compare:514,op:{fail:7680,zFail:7680,zPass:7680},mask:255}}}),this._renderResource(e,t.item.resources,this._createVisualState(e,t))}_renderResource(e,t,i){switch(t.kind){case`stack`:this._renderStackResources(e,t,i);return;case`imagery`:this._renderImageryResources(e,t,i);return;case`particles`:this._renderParticlesResources(e,t,i);return;case`streamlines`:this._renderStreamlinesResources(e,t,i);return}}_createVisualState(e,t){let{item:i,dvsMat3:a}=t,s=e.time/1e3;return{time:e.animationsEnabled?s:Yn,dvsMat3:a,displayViewMat3:e.state.displayViewMat3,displayOpacity:e.animationsEnabled?Pa(i.displayOpacity,s):Un(i.displayOpacity),startTime:i.startTime,endTime:i.endTime}}_renderStackResources(e,t,i){for(let a of t.resources)this._renderResource(e,a,i)}_renderImageryResources({context:e,painter:t},i,a){let s=i.getProgramSpec(a);t.submitDrawMeshUntyped(e,{shader:this.shaders.imagery,uniforms:s.uniforms,textures:s.textures,defines:s.defines,optionalAttributes:s.optionalAttributes,useComputeBuffer:!1},i.mesh,{stencilRef:0})}_renderParticlesResources({context:e,painter:t},i,a){let s=i.getProgramSpec(a);t.submitDrawMeshUntyped(e,{shader:this.shaders.particles,uniforms:s.uniforms,textures:s.textures,defines:s.defines,optionalAttributes:s.optionalAttributes,useComputeBuffer:!1},i.mesh,{stencilRef:0})}_renderStreamlinesResources({context:e,painter:t},i,a){let s=i.getProgramSpec(a);t.submitDrawMeshUntyped(e,{shader:this.shaders.streamlines,uniforms:s.uniforms,textures:s.textures,defines:s.defines,optionalAttributes:s.optionalAttributes,useComputeBuffer:!1},i.mesh,{stencilRef:0})}};var Ki=class{constructor(e,t,i,a){this.dataType=e,this.samplingMode=t,this.pixelFormat=i,this.internalFormat=a}};function Zn(n,e$3){let{textureFloatLinear:t,colorBufferFloat:i}=n.capabilities,a=i?.textureFloat,s=i?.textureHalfFloat,l=i?.floatBlend,u=n.driverTest.floatBufferBlend.result;if(!a&&!s)throw new H(`heatmap:missing-color-buffer-float`,`HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.`);if(!(l&&u||s))throw new H(`heatmap:missing-float-blend`,`HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float.`+(u?``:` This device claims support for EXT_float_blend, but does not actually support it.`));let c=a&&l&&u,f=s,m=t,v=!!i?.R32F,S=!!i?.R16F;if(c&&m)return m||e$3.warnOnce(`Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced.`),new Ki(e.FLOAT,m?9729:9728,v?6403:6408,v?R.R32F:6408);if(f)return new Ki(e.HALF_FLOAT,9729,S?6403:6408,S?R.R16F:6408);throw new H(`heatmap:missing-hardware-support`,`HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.`)}new Ki(e.HALF_FLOAT,9728,6408,6408);var vr=()=>y.getLogger(`esri.views.2d.engine.webgl.shaderGraph.techniques.heatmap.HeatmapResources`);var Ho=class{destroy(){this._accumulateFramebuffer=F(this._accumulateFramebuffer),this._resolveGradientTexture=F(this._resolveGradientTexture),this._prevGradientHash=null,this._qualityProfile=null}get initialized(){return this._accumulateFramebuffer!=null&&this._resolveGradientTexture!=null}get accumulateFramebuffer(){return this._accumulateFramebuffer}get resolveGradientTexture(){return this._resolveGradientTexture}loadQualityProfile(e$4){if(this._qualityProfile==null){let t=Zn(e$4,vr());this._qualityProfile=C(B({},t),{defines:{usesHalfFloatPrecision:t.dataType!==e.FLOAT}})}return this._qualityProfile}ensureAccumulateFBO(e,t$2,i){if(this._accumulateFramebuffer==null){let{dataType:a,samplingMode:s,pixelFormat:l,internalFormat:u}=this.loadQualityProfile(e),c=new G(t$2,i);c.pixelFormat=l,c.internalFormat=u,c.dataType=a,c.samplingMode=s,c.wrapMode=33071;let f=new Ae$1(t.DEPTH24_STENCIL8,t$2,i);this._accumulateFramebuffer=new Ne$1(e,c,f)}else{let{width:a,height:s}=this._accumulateFramebuffer;a===t$2&&s===i||this._accumulateFramebuffer.resize(t$2,i)}return this._accumulateFramebuffer}ensureResolveGradientTexture(e,t,i){if(this._resolveGradientTexture==null){let a=new G;a.wrapMode=33071,this._resolveGradientTexture=new ee(e,a),this._prevGradientHash=null}return this._prevGradientHash!==t&&(this._resolveGradientTexture.resize(i.length/4,1),this._resolveGradientTexture.setData(i),this._prevGradientHash=t),this._resolveGradientTexture}};function Bo(n){return n?.25:1}var Go=class extends me{};y$1([_t$2(5,L)],Go.prototype,`offset`,void 0);var Ma=class extends pe{};var Xi=class extends Ie{};y$1([st$1(m$1)],Xi.prototype,`radius`,void 0),y$1([st$1(m$1)],Xi.prototype,`isFieldActive`,void 0);var Jt=class extends re{constructor(){super(...arguments),this.type=`HeatmapAccumulateShader`,this.usesHalfFloatPrecision=!1}vertex(e){let{radius:t,isFieldActive:i}=this.kernelControls,a=e.offset,s=i.multiply(this.getVVData(e.id).x).add(new m$1(1).subtract(i)),l=this.view.displayViewScreenMat3.multiply(new W(e.pos,1)).add(this.view.displayViewMat3.multiply(new W(a,0)).multiply(t)),u=this.clip(e.id);return B({glPosition:new F$1(l.xy,u,1),offset:a,fieldValue:s,color:new F$1(0)},this.maybeRunHittest(e,{},null))}fragment(e){let{offset:t,fieldValue:i}=e,a=Lr(t),s=nn(a,new m$1(1)),l=new m$1(1).subtract(a.multiply(a)),u=l.multiply(l),c=s.multiply(u).multiply(i).multiply(new m$1(Bo(this.usesHalfFloatPrecision)));return this.getFragmentOutput(new F$1(c),e)}hittest(e){let{viewMat3:t,tileMat3:i}=this.view,s=Hn(t.multiply(i).multiply(new W(e.pos,1)).xy,this.kernelControls.radius,this.hittestRequest.position);return Dt$1(Er(s,this.hittestRequest.distance),new m$1(0),new m$1(2))}};y$1([is],Jt.prototype,`usesHalfFloatPrecision`,void 0),y$1([st$1(Xi)],Jt.prototype,`kernelControls`,void 0),y$1([h(0,nt(Go))],Jt.prototype,`vertex`,null),y$1([h(0,nt(Ma))],Jt.prototype,`fragment`,null);var Uo=class extends oe{};y$1([_t$2(0,L)],Uo.prototype,`position`,void 0);var Na=class extends H$1{};var $i=class extends Ie{};y$1([st$1(L)],$i.prototype,`minAndInvRange`,void 0),y$1([st$1(m$1)],$i.prototype,`normalization`,void 0);var Dt=class extends Te$1{constructor(){super(...arguments),this.type=`HeatmapResolveShader`,this.usesHalfFloatPrecision=!1}vertex(e){return{glPosition:new F$1(e.position.multiply(2).subtract(1),1,1),uv:e.position}}fragment(e){let{accumulatedDensity:t}=this,i=cn(this.densityTexture,e.uv).r.divide(new m$1(Bo(this.usesHalfFloatPrecision)));i=i.multiply(t.normalization),i=i.subtract(t.minAndInvRange.x).multiply(t.minAndInvRange.y);let a=cn(this.gradientTexture,new L(i,.5)),s=new ae;return s.fragColor=new F$1(a.rgb.multiply(a.a),a.a),s}};y$1([is],Dt.prototype,`usesHalfFloatPrecision`,void 0),y$1([st$1($i)],Dt.prototype,`accumulatedDensity`,void 0),y$1([ns(ee$1)],Dt.prototype,`densityTexture`,void 0),y$1([ns(ee$1)],Dt.prototype,`gradientTexture`,void 0),y$1([h(0,nt(Uo))],Dt.prototype,`vertex`,null),y$1([h(0,nt(Na))],Dt.prototype,`fragment`,null);var ko=class extends K{constructor(){super(...arguments),this.type=19,this.drawPhase=73,this.shaders={accumulate:new Jt,resolve:new Dt},this._isBound=!1,this._resources=new Map}shutdown(e){super.shutdown(e),this._resources.get(e)?.destroy(),this._resources.delete(e),this._prevFBO=null,this._unbind()}render(e,t){let{context:i,painter:a,state:s}=e,l=t.instance.getInput(),{isFieldActive:u}=l.uniforms,c=this._getOrCreateResourcesRecord(i),f=c.loadQualityProfile(i);it$1(e)||this._bind(e,c,l),a.setShader({shader:this.shaders.accumulate,uniforms:C(B({},Mt$1(e,t.target)),{kernelControls:{radius:jn(l,s),isFieldActive:u?1:0}}),textures:St$1(e),defines:B(B({},Tt$1(e)),f.defines),optionalAttributes:{},useComputeBuffer:it$1(e)});let m=it$1(e)?yr:Kn;a.setPipelineState(m),a.submitDraw(e,t)}getStencilReference(e){return _r(e)}renderResolvePass(e,t){if(it$1(e))return;let{context:i,painter:a}=e,s=this._resources.get(i);if(this._prevFBO==null||this._prevViewport==null||!s?.initialized)return;let{defines:l}=s.loadQualityProfile(i),{minDensity:u,maxDensity:c,radius:f}=t.getInput().uniforms,m=8,v=9,S=s.accumulateFramebuffer,x=s.resolveGradientTexture,T={shader:this.shaders.resolve,uniforms:{accumulatedDensity:{minAndInvRange:[u,1/(c-u)],normalization:3/(f*f*Math.PI)}},textures:{densityTexture:{unit:m,texture:S.colorTexture},gradientTexture:{unit:v,texture:x}},defines:l,optionalAttributes:{},useComputeBuffer:!1};i.bindFramebuffer(this._prevFBO),i.setViewport(0,0,this._prevViewport.width,this._prevViewport.height),i.bindTexture(S.colorTexture,m),i.bindTexture(x,v),a.setPipelineState(xr),a.submitDrawMesh(i,T,a.quadMesh),this._unbind()}_getOrCreateResourcesRecord(e){let t=this._resources.get(e);return t??(t=new Ho,this._resources.set(e,t)),t}_unbind(){this._prevFBO=null,this._prevViewport=null,this._isBound=!1}_bind(e,t,i){let{context:a,state:s,pixelRatio:l}=e,u=a.boundFramebuffer;if(this._isBound||u==null)return;let c=a.getViewport();this._prevFBO=u,this._prevViewport=c;let{gradient:f,gradientHash:m}=i.uniforms;t.ensureResolveGradientTexture(a,m,f);let{width:v,height:S}=c,x=hr(jn(i,s),l),T=v*x,F=S*x,C=t.ensureAccumulateFBO(a,T,F);a.blitFramebuffer(u,C,1024),a.bindFramebuffer(C),a.setViewport(0,0,C.width,C.height),a.setColorMask(!0,!0,!0,!0),a.setClearColor(0,0,0,0),a.clear(16384),this._isBound=!0}};function hr(n,e){let t=e>1.5?.25:.5;return n<1/(2*t)?1:t}function _r(n){return n.key.level+1}var Kn={color:{write:[!0,!0,!0,!0],blendMode:`additive`},depth:!1,stencil:{write:!1,test:{compare:518,mask:255,op:{fail:7680,zFail:7680,zPass:7681}}}};var yr=C(B({},Kn),{stencil:!1});var xr={color:{write:[!0,!0,!0,!0],blendMode:`composite`},depth:!1,stencil:!1};function jn(n,e){let{referenceScale:t,radius:i}=n.uniforms;return i*(t!==0?t/e.scale:1)}var Sr=1/l;var Je=class extends me{};y$1([_t$2(3,F$1)],Je.prototype,`color`,void 0),y$1([_t$2(4,L)],Je.prototype,`offset`,void 0),y$1([_t$2(5,L)],Je.prototype,`textureUV`,void 0),y$1([_t$2(6,F$1)],Je.prototype,`fontAndReferenceSize`,void 0),y$1([_t$2(7,F$1)],Je.prototype,`outlineColor`,void 0),y$1([_t$2(8,F$1)],Je.prototype,`haloColor`,void 0),y$1([_t$2(9,L)],Je.prototype,`outlineAndHaloSize`,void 0),y$1([_t$2(10,L)],Je.prototype,`zoomRange`,void 0),y$1([_t$2(11,m$1)],Je.prototype,`clipAngle`,void 0),y$1([_t$2(12,F$1)],Je.prototype,`referenceSymbol`,void 0),y$1([_t$2(15,m$1)],Je.prototype,`visibility`,void 0);var Ji=class extends $t$1{};y$1([_t$2(13,L)],Ji.prototype,`offsetNextVertex1`,void 0),y$1([_t$2(14,L)],Ji.prototype,`offsetNextVertex2`,void 0);var Ha=class extends pe{};var Te=class extends re{constructor(){super(...arguments),this.type=`TextShader`,this.computeAttributes={offset:[`offsetNextVertex1`,`offsetNextVertex2`]},this.textRenderPassType=0,this.isBackgroundPass=!1,this.isLabel=!1}clipLabel(e,t){let{clipAngle:i,zoomRange:a,visibility:s}=e,l=i.multiply(Sr),u=we$1(l.subtract(this.view.rotation),new m$1(360)),c=new m$1(0),f=10,m=be(this.view.currentZoom.multiply(f)).divide(f),v=a.x,S=a.y,x=new m$1(1).subtract(nn(v,m)).multiply(2),T=new m$1(qt$1(Mr(u,new m$1(90)),_r$1(u,new m$1(270)))).multiply(2),F=new m$1(2).multiply(new m$1(1).subtract(nn(m,S)));return c=c.add(t.multiply(x)),c=c.add(t.multiply(T)),c=c.add(F),s&&(c=c.add(s)),c}vertex(e,t){let i=l$1(e.bitset,0),a=new m$1(1).subtract(i),s=e.fontAndReferenceSize[0],l=e.fontAndReferenceSize[1],u=e.fontAndReferenceSize[2],c=e.fontAndReferenceSize[3],f=s.divide(u),m=this.textRenderPassType===1?e.outlineColor:this.textRenderPassType===2?e.haloColor:this._getVertexColor(e),v=this.view.displayViewScreenMat3.multiply(new W(e.pos,1)),S=e.offset,x=new m$1(1),T=te.identity(),F=new L(0);if(this.isLabel){if(!e.referenceSymbol)throw new Error(`InternalError: Optional attribute 'referenceSymbol' expected for labels`);let P=e.referenceSymbol,L=P.xy,k=P.z,Y=this._unpackDirection(P.w),A=Lt(this,e.id,k).divide(2),de=Y.multiply(A.add(4));F=L.add(de),S=S.add(F)}else x=Lt(this,e.id,l).divide(l),s=s.multiply(x),f=f.multiply(x),S=S.multiply(x),T=vo(this,e.id),S=T.multiply(new W(S,0)).xy;let C=l$1(e.bitset,3),D=this._getViewRotationMatrix(C).multiply(new W(S,0)).multiply(this.view.scaleFactor),z=this.isLabel?this.clipLabel(e,C):this.clip(e.id,e.zoomRange);z=this.isBackgroundPass?z.add(a.multiply(2)):z.add(i.multiply(2));let R=new m$1(0);if(this.textRenderPassType===1&&(z=z.add(Dt$1($r(e.outlineAndHaloSize.x,new m$1(0)),new m$1(2),new m$1(0))),R=new m$1(e.outlineAndHaloSize.x).divide(f).divide(c)),this.textRenderPassType===2){let P=e.outlineAndHaloSize.x,L=new m$1(e.outlineAndHaloSize.y);z=z.add(Dt$1($r(L,new m$1(0)),new m$1(2),new m$1(0))),R=L.add(P).divide(f).divide(c)}let N=this.isLabel?Er(z,new m$1(1)):new E$1(!1);return B({glPosition:new F$1(v.xy.add(D.xy),z,1),color:m,size:f,textureUV:e.textureUV.divide(this.mosaicInfo.size),antialiasingWidth:new m$1(.105).multiply(u).divide(s).divide(this.view.pixelRatio),outlineDistanceOffset:R},this.maybeRunHittest(e,t,{vvSizeAdjustment:x,vvRotation:T,labelOffset:F,labelClipped:N,scaleFactor:this.view.scaleFactor}))}_getViewRotationMatrix(e){let t=this.view.displayViewMat3,i=this.view.displayMat3,a=new m$1(1).subtract(e);return t.multiply(e).add(i.multiply(a))}_getHittestAlignmentMatrix(e){let t=this.view.viewMat3.multiply(this.view.tileMat3),i=this.view.tileMat3,a=new m$1(1).subtract(e);return t.multiply(e).add(i.multiply(a))}fragment(e){let t=new m$1(.25),i=new m$1(1).subtract(t),a=cn(this.mosaicTexture,e.textureUV).a,s=i.subtract(e.outlineDistanceOffset);this.highlight&&(s=s.divide(2));let l=e.antialiasingWidth,u=tn(s.subtract(l),s.add(l),a);return this.getFragmentOutput(e.color.multiply(u),e)}computeHittestTriangle(e,t,{vvSizeAdjustment:i,vvRotation:a,labelOffset:s,scaleFactor:l}){let u,c,f;this.isLabel?(u=new W(e.offset.multiply(l).add(s),0),c=new W(t.offsetNextVertex1.multiply(l).add(s),0),f=new W(t.offsetNextVertex2.multiply(l).add(s),0)):(u=a.multiply(new W(e.offset.multiply(l).multiply(i),0)),c=a.multiply(new W(t.offsetNextVertex1.multiply(l).multiply(i),0)),f=a.multiply(new W(t.offsetNextVertex2.multiply(l).multiply(i),0)));let{viewMat3:m,tileMat3:v}=this.view,S=m.multiply(v).multiply(new W(e.pos,1)),x=l$1(e.bitset,3),T=this._getHittestAlignmentMatrix(x);return{pos0:S.add(T.multiply(u)).xy,pos1:S.add(T.multiply(c)).xy,pos2:S.add(T.multiply(f)).xy}}hittest(e,t,i){let{vvSizeAdjustment:a,vvRotation:s,labelOffset:l,labelClipped:u,scaleFactor:c}=i,f=Ve(this.hittestRequest),{pos0:m,pos1:v,pos2:S}=this.computeHittestTriangle(e,t,{vvSizeAdjustment:a,vvRotation:s,labelOffset:l,scaleFactor:c});return Dt$1(f,()=>{let{tlbr:x}=this.hittestRequest;return this.isLabel?Dt$1(u,new m$1(0),Me(m,v,S,x)):Me(m,v,S,x)},()=>{let x=ni(this.hittestRequest.position,m,v,S),T=this.isLabel?u:new E$1(!1);return Dt$1(T,new m$1(0),Dt$1(Er(x,this.hittestRequest.distance),new m$1(0),new m$1(2)))})}_unpackDirection(e){let t=new f$1(e),i=wr$1(t,new f$1(2)),a=xr$1(t,new f$1(3));return new L(new m$1(i).subtract(1),new m$1(a).subtract(1))}_getVertexColor(e){let t=e.color;if(this.visualVariableColor){let i=this.getColorValue(e.id);t=this.visualVariableColor.getColor(i,e.color,new E$1(!1))}if(this.visualVariableOpacity){let i=this.getOpacityValue(e.id),a=this.visualVariableOpacity.getOpacity(i);t=t.multiply(a)}return t}};y$1([ss(De)],Te.prototype,`visualVariableColor`,void 0),y$1([ss(Ae)],Te.prototype,`visualVariableOpacity`,void 0),y$1([ss(Rt)],Te.prototype,`visualVariableRotation`,void 0),y$1([ss(et)],Te.prototype,`visualVariableSizeMinMaxValue`,void 0),y$1([ss(Ye)],Te.prototype,`visualVariableSizeScaleStops`,void 0),y$1([ss(We)],Te.prototype,`visualVariableSizeStops`,void 0),y$1([ss(tt)],Te.prototype,`visualVariableSizeUnitValue`,void 0),y$1([st$1(fe)],Te.prototype,`mosaicInfo`,void 0),y$1([ns(ee$1)],Te.prototype,`mosaicTexture`,void 0),y$1([is],Te.prototype,`textRenderPassType`,void 0),y$1([is],Te.prototype,`isBackgroundPass`,void 0),y$1([is],Te.prototype,`isLabel`,void 0),y$1([h(0,nt(Je)),h(1,nt(Ji))],Te.prototype,`vertex`,null),y$1([h(0,nt(Ha))],Te.prototype,`fragment`,null);var qo=class extends K{constructor(){super(...arguments),this.type=20,this.shaders={geometry:new Te},this.drawPhase=14,this.symbologyPlane=3}render(e,t){let{painter:i}=e,a=Tt$1(e),s=C(B({},lt(e)),{stencil:{write:!1,test:{compare:516,mask:255,op:{fail:7680,zFail:7680,zPass:7680}}}}),l=t.instance.getInput(),u={shader:this.shaders.geometry,uniforms:C(B(B({},bt(e,t.target,l.uniforms)),Mt$1(e,t.target)),{mosaicInfo:i.textureManager.getMosaicInfo(e,t.textureKey)}),textures:C(B({},St$1(e)),{mosaicTexture:i.textureManager.getMosaicTexture(e,t.textureKey)}),defines:C(B({},a),{textRenderPassType:0,isBackgroundPass:!0,isLabel:!0}),optionalAttributes:l.optionalAttributes,useComputeBuffer:it$1(e)};i.setPipelineState(s),i.setShader(u),i.submitDraw(e,t,{stencilRef:255}),i.setShader(C(B({},u),{defines:C(B({},a),{textRenderPassType:2,isBackgroundPass:!1,isLabel:!0})})),i.submitDraw(e,t,{stencilRef:255}),i.setShader(C(B({},u),{defines:C(B({},a),{textRenderPassType:0,isBackgroundPass:!1,isLabel:!0})})),i.submitDraw(e,t,{stencilRef:255})}};function Tr(n){return nn(new m$1(0),n).multiply(2).subtract(1)}var Qt=class extends it{};y$1([_t$2(9,m$1)],Qt.prototype,`accumulatedDistance`,void 0),y$1([_t$2(10,m$1)],Qt.prototype,`totalLength`,void 0),y$1([_t$2(11,m$1)],Qt.prototype,`gradientSize`,void 0),y$1([_t$2(12,L)],Qt.prototype,`segmentDirection`,void 0),y$1([_t$2(13,F$1)],Qt.prototype,`tlbr`,void 0);var Yo=class extends Ie{};y$1([st$1(m$1)],Yo.prototype,`isColorPass`,void 0);var ei=class extends Oe{constructor(){super(...arguments),this.type=`GradientStrokeShader`}vertex(e,t){let{totalLength:i,gradientSize:a,segmentDirection:s,tlbr:l}=e,u=li(this,e),c=l$1(e.bitset,z.isAlongLine),f=i.divide(this.view.displayZoomFactor),m=Dt$1(I(e.bitset,z.isAbsoluteSize),()=>{let x=Dt$1(Er(c,new m$1(.5)),f,u.halfWidth);return a.divide(x)},a),v=e.accumulatedDistance.add(jr(s,u.scaledOffset).divide(f)),S=l.divide(this.mosaicInfo.size.xyxy);return B(C(B({},u),{tlbr:S,relativePositionAlongLine:v,relativeGradientSize:m,isAlongLine:l$1(e.bitset,z.isAlongLine),isDiscrete:l$1(e.bitset,z.isDiscrete)}),this.maybeRunHittest(e,t,u.halfWidth))}fragment(e){let{isAlongLine:t,isDiscrete:i,relativePositionAlongLine:a$2,relativeGradientSize:s,normal:l,tlbr:u}=e,c=si(e,this.antialiasingControls.blur),f=Tr(l.y).multiply(Xr(Lr(l),new m$1(1))),m=new m$1(.5).multiply(f).add(new m$1(.5)),v=Dt$1(Er(t,new m$1(.5)),a$2,m),S=Dt$1(Er(i,new m$1(.5)),s.subtract(1),new m$1(0)),x=v.add(S).divide(s);x=Dt$1(Er(t,new m$1(.5)),x,E$2(x));let T=Yr(u.xy,u.zw,new L(Dr(x,new m$1(0),new m$1(1)),.5)),F=cn(this.mosaicTexture,T),C=e.opacity.multiply(c),D=this.getFragmentOutput(F.multiply(C),e),z=nn(new m$1(.5),this.technique.isColorPass).multiply(a(`gradient-depth-epsilon`)),R=nn(new m$1(0),l.y).multiply(new m$1(a(`gradient-depth-bias`)).subtract(z));return D.glFragDepth=Dr(Lr(l).add(R),new m$1(0),new m$1(1)),D}};y$1([st$1(fe)],ei.prototype,`mosaicInfo`,void 0),y$1([ns(ee$1)],ei.prototype,`mosaicTexture`,void 0),y$1([st$1(Yo)],ei.prototype,`technique`,void 0),y$1([h(0,nt(Qt)),h(1,nt(ce))],ei.prototype,`vertex`,null);var Wo=class extends K{constructor(){super(...arguments),this.type=17,this.shaders={geometry:new ei},this.symbologyPlane=1}_getShaderOptions(e,t,i){let{painter:a,pixelRatio:s}=e,l=t.instance.getInput();return{shader:this.shaders.geometry,uniforms:C(B(B({},bt(e,t.target,l.uniforms)),Mt$1(e,t.target)),{antialiasingControls:Ze(s),mosaicInfo:a.textureManager.getMosaicInfo(e,t.textureKey),technique:{isColorPass:i}}),textures:C(B({},St$1(e)),{mosaicTexture:a.textureManager.getMosaicTexture(e,t.textureKey)}),defines:B({},Tt$1(e)),optionalAttributes:l.optionalAttributes,useComputeBuffer:it$1(e)}}render(e,t){let{painter:i}=e;if(it$1(e)||ot$1(e)){let l=lt(e);i.setPipelineState(l),i.setShader(this._getShaderOptions(e,t,1)),i.submitDraw(e,t);return}e.context.setClearDepth(1),e.context.clear(256);i.setShader(this._getShaderOptions(e,t,0)),i.setPipelineState({color:!1,depth:{write:{zNear:0,zFar:1},test:513},stencil:{write:!1,test:{compare:514,mask:255,op:{fail:7680,zFail:7680,zPass:7680}}}}),i.submitDraw(e,t);i.setShader(this._getShaderOptions(e,t,1)),i.setPipelineState({color:{write:[!0,!0,!0,!0],blendMode:`composite`},depth:{write:!1,test:515},stencil:{write:!1,test:{compare:514,mask:255,op:{fail:7680,zFail:7680,zPass:7680}}}}),i.submitDraw(e,t)}};var Zo=class extends K{constructor(){super(...arguments),this.type=21,this.shaders={geometry:new Oe},this.symbologyPlane=1}render(e,t){let{painter:i,pixelRatio:a}=e,s=t.instance.getInput();i.setShader({shader:this.shaders.geometry,uniforms:C(B(B({},bt(e,t.target,s.uniforms)),Mt$1(e,t.target)),{antialiasingControls:Ze(a)}),textures:St$1(e),defines:B({},Tt$1(e)),optionalAttributes:s.optionalAttributes,useComputeBuffer:it$1(e)}),i.setPipelineState(lt(e)),i.submitDraw(e,t)}};var ti=class extends it{};y$1([_t$2(9,m$1)],ti.prototype,`accumulatedDistance`,void 0),y$1([_t$2(10,L)],ti.prototype,`segmentDirection`,void 0),y$1([_t$2(11,m$1)],ti.prototype,`offsetAlongLine`,void 0),y$1([_t$2(12,m$1)],ti.prototype,`capType`,void 0),y$1([_t$2(13,F$1)],ti.prototype,`tlbr`,void 0);var hi=class extends Oe{constructor(){super(...arguments),this.type=`TexturedLineShader`}_getDistanceRatio(e,t){let i=l$1(e.bitset,2);return i.multiply(Hr(t,new m$1(.25)).multiply(new m$1(2))).add(new m$1(1).subtract(i).multiply(m(1)))}_getSDFAlpha(e){let{halfWidth:t,normal:i,tlbr:a,patternSize:s,accumulatedDistance:l,offsetAlongLine:u,dashToPx:c,capType:f}=e,m=s.x.divide(4).multiply(c),v=qr(l.add(u).divide(m)),S=Yr(a.xy,a.zw,new L(v,.5)),x=j(cn(this.mosaicTexture,S)).multiply(2).subtract(1).multiply(64).multiply(c),T=i.y.multiply(t),F=mr$1([$r(f,new m$1(1)),x.subtract(t)],[$r(f,new m$1(2)),rn(Gt$1(Hr(x,new m$1(0)),new m$1(2)).add(T.multiply(T))).subtract(t)],[!0,x]),C=Dr(new m$1(.25).subtract(F),new m$1(0),new m$1(1));return new F$1(C)}_getPatternColor(e){let{halfWidth:t,normal:i,color:a,accumulatedDistance:s,patternSize:l,sampleAlphaOnly:u,tlbr:c}=e,f=l.y.multiply(new m$1(2).multiply(t).divide(l.x)),m=qr(s.divide(f)),v=new m$1(.5).multiply(i.y).add(new m$1(.5)),S=Yr(c.xy,c.zw,new L(v,m)),x=cn(this.mosaicTexture,S);return this.visualVariableColor!=null&&(x=Dt$1(Er(u,new m$1(.5)),new F$1(a.a),a)),x}vertex(e,t){let{segmentDirection:i,tlbr:a,bitset:s}=e,l=li(this,e),u=e.accumulatedDistance.divide(this.view.displayZoomFactor).add(jr(i,l.scaledOffset)),c=new L(a.z.subtract(a.x),a.w.subtract(a.y)),f=a.divide(this.mosaicInfo.size.xyxy),m=l$1(s,3),v=l$1(s,4),S=Dt$1(Er(m,new m$1(.5)),this._getDistanceRatio(e,l.scaledHalfWidth),new m$1(1));return B(C(B({},l),{tlbr:f,patternSize:c,accumulatedDistance:u,isSDF:m,sampleAlphaOnly:v,dashToPx:S,offsetAlongLine:e.offsetAlongLine,capType:e.capType}),this.maybeRunHittest(e,t,l.halfWidth))}fragment(e){let{color:t,opacity:i,isSDF:a}=e,s=si(e,this.antialiasingControls.blur),l=Dt$1(Er(a,new m$1(.5)),this._getSDFAlpha(e),this._getPatternColor(e)),u=t.multiply(i).multiply(s).multiply(l);return this.getFragmentOutput(u,e)}};y$1([st$1(fe)],hi.prototype,`mosaicInfo`,void 0),y$1([ns(ee$1)],hi.prototype,`mosaicTexture`,void 0),y$1([h(0,nt(ti)),h(1,nt(ce))],hi.prototype,`vertex`,null);var jo=class extends K{constructor(){super(...arguments),this.type=33,this.shaders={geometry:new hi},this.symbologyPlane=1}render(e,t){let{painter:i,pixelRatio:a}=e,s=t.instance.getInput();i.setShader({shader:this.shaders.geometry,uniforms:C(B(B({},bt(e,t.target,s.uniforms)),Mt$1(e,t.target)),{antialiasingControls:Ze(a),mosaicInfo:i.textureManager.getMosaicInfo(e,t.textureKey)}),textures:C(B({},St$1(e)),{mosaicTexture:i.textureManager.getMosaicTexture(e,t.textureKey)}),defines:B({},Tt$1(e)),optionalAttributes:s.optionalAttributes,useComputeBuffer:it$1(e)}),i.setPipelineState(lt(e)),i.submitDraw(e,t)}};var Tt=class extends me{};y$1([_t$2(3,F$1)],Tt.prototype,`color`,void 0),y$1([_t$2(4,F$1)],Tt.prototype,`outlineColor`,void 0),y$1([_t$2(5,L)],Tt.prototype,`offset`,void 0),y$1([_t$2(6,L)],Tt.prototype,`textureUV`,void 0),y$1([_t$2(7,F$1)],Tt.prototype,`sizing`,void 0),y$1([_t$2(8,m$1)],Tt.prototype,`placementAngle`,void 0),y$1([_t$2(9,m$1)],Tt.prototype,`sdfDecodeCoeff`,void 0),y$1([_t$2(10,L)],Tt.prototype,`zoomRange`,void 0);var _i=class extends $t$1{};y$1([_t$2(11,L)],_i.prototype,`offsetNextVertex1`,void 0),y$1([_t$2(12,L)],_i.prototype,`offsetNextVertex2`,void 0),y$1([_t$2(13,L)],_i.prototype,`textureUVNextVertex1`,void 0),y$1([_t$2(14,L)],_i.prototype,`textureUVNextVertex2`,void 0);var Ga=class extends pe{};function qt(n,e,t,i){return e.multiply(n.x).add(t.multiply(n.y)).add(i.multiply(n.z))}function Ba(n){return n.multiply(n).divide(128)}var Ne=class extends re{constructor(){super(...arguments),this.type=`MarkerShader`,this.computeAttributes={offset:[`offsetNextVertex1`,`offsetNextVertex2`],textureUV:[`textureUVNextVertex1`,`textureUVNextVertex2`]}}vertex(e,t){let i=Ba(e.sizing.x),a=Ba(e.sizing.y),s=Ba(e.sizing.z),l=e.placementAngle,u=l$1(e.bitset,O$1.bitset.isSDF),c=l$1(e.bitset,O$1.bitset.isMapAligned),f=l$1(e.bitset,O$1.bitset.scaleSymbolsProportionally),m=I(e.bitset,O$1.bitset.colorLocked),v=dt(this,e.id),S=pt(this,e.id,e.color,m).multiply(v),x=this.view.displayViewScreenMat3.multiply(new W(e.pos.xy,1)),T=Lt(this,e.id,s).divide(s),F=i.multiply(T),C=e.offset.xy.multiply(T),D=a.multiply(f.multiply(T.subtract(1)).add(1));D=Xr(D,Hr(F.subtract(.99),new m$1(0)));let z=Hr(D,new m$1(1)),R=Xr(D,new m$1(1)),N=te.fromRotation(l.multiply(e$1)),P=vo(this,e.id),L=this._getViewRotationMatrix(c).multiply(P).multiply(N).multiply(new W(C.xy,0)).multiply(this.view.scaleFactor),k=this.clip(e.id,e.zoomRange),Y=new F$1(x.xy.add(L.xy),k,1),A=e.textureUV.divide(this.mosaicInfo.size),de=e.outlineColor.multiply(R),ze=l$1(e.bitset,O$1.bitset.overrideOutlineColor),nt=e.sdfDecodeCoeff.multiply(F);return B({glPosition:Y,color:S,textureUV:A,outlineColor:de,outlineSize:z,distanceToPx:nt,isSDF:u,overrideOutlineColor:ze},this.maybeRunHittest(e,t,{pos:e.pos,size:F,sizeCorrection:T,scaleFactor:this.view.scaleFactor,isMapAligned:c,vvRotationMat3:P,placementMat3:N,outlineSize:z,distanceToPx:nt,isSDF:u}))}fragment(e){let t=this._getColor(e.textureUV,e);return this.getFragmentOutput(t,e)}hittest(e,t,i){let{pos0:a,pos1:s,pos2:l}=this.computeHittestTriangle(e,t,i),u=Ve(this.hittestRequest);return Dt$1(u,()=>{let{tlbr:c}=this.hittestRequest;return ho(a,s,l,c)},()=>Dt$1(_r$1(i.size,this.hittestRequest.smallSymbolSizeThreshold),this._hittestSmallMarker(e,t,i),this._hittestMarker(e,t,i)))}_getViewRotationMatrix(e){let t=this.view.displayViewMat3,i=this.view.displayMat3,a=new m$1(1).subtract(e);return t.multiply(e).add(i.multiply(a))}_getViewScreenMatrix(e){let t=this.view.viewMat3.multiply(this.view.tileMat3),i=this.view.tileMat3,a=new m$1(1).subtract(e);return t.multiply(e).add(i.multiply(a))}_getColor(e,t){return Dt$1($r(t.isSDF,new m$1(1)),this._getSDFColor(e,t),this._getSpriteColor(e,t))}_getSpriteColor(e,t){return cn(this.mosaicTexture,e).multiply(t.color)}_getSDFColor(e,t){let i=cn(this.mosaicTexture,e),a=new m$1(.5).subtract(j(i)).multiply(t.distanceToPx).multiply(1),s=Dr(new m$1(.5).subtract(a),new m$1(0),new m$1(1)),l=t.color.multiply(s),u=t.outlineSize;this.highlight&&(u=Hr(u,t.overrideOutlineColor.multiply(4)));let c=u.multiply(.5),f=Fr$1(a).subtract(c),m=Dr(new m$1(.5).subtract(f),new m$1(0),new m$1(1)),v=Yr(t.outlineColor,t.color,t.overrideOutlineColor).multiply(m);return new m$1(1).subtract(v.a).multiply(l).add(v)}_hittestSmallMarker(e,t,i){let{position:a,distance:s,smallSymbolDistance:l}=this.hittestRequest,u=s.subtract(l),{viewMat3:c,tileMat3:f}=this.view,m=c.multiply(f).multiply(new W(i.pos,1)).xy,v=i.size.multiply(.5),S=Or$1(m,a).subtract(v).add(u);return Dt$1(Er(S,this.hittestRequest.distance),new m$1(0),new m$1(2))}_hittestMarker(e,t,i){let{pos0:a,pos1:s,pos2:l}=this.computeHittestTriangle(e,t,i),u=this.hittestRequest.position,c=this.hittestRequest.distance,f=ni(u,a,s,l);return Dt$1(Er(f,c),new m$1(0),this._hittestSamples(a,s,l,e,t,i))}computeHittestTriangle(e,t,i){let{pos:a,sizeCorrection:s,scaleFactor:l,isMapAligned:u}=i,c=new W(e.offset.multiply(s).multiply(l),0),f=new W(t.offsetNextVertex1.multiply(s).multiply(l),0),m=new W(t.offsetNextVertex2.multiply(s).multiply(l),0),{viewMat3:v,tileMat3:S}=this.view,x=v.multiply(S).multiply(new W(a,1)),T=this._getViewScreenMatrix(u).multiply(i.vvRotationMat3).multiply(i.placementMat3);return{pos0:x.add(T.multiply(c)).xy,pos1:x.add(T.multiply(f)).xy,pos2:x.add(T.multiply(m)).xy}}_hittestSamples(e,t,i,a,s,l){let{outlineSize:u,isSDF:c,distanceToPx:f}=l,m=this.hittestRequest.position,v=this.hittestRequest.distance,S=le(m.add(new L(Ut$1(v),Ut$1(v))),e,t,i),x=le(m.add(new L(0,Ut$1(v))),e,t,i),T=le(m.add(new L(v,Ut$1(v))),e,t,i),F=le(m.add(new L(Ut$1(v),0)),e,t,i),C=le(m,e,t,i),D=le(m.add(new L(v,0)),e,t,i),z=le(m.add(new L(Ut$1(v),v)),e,t,i),R=le(m.add(new L(0,v)),e,t,i),N=le(m.add(new L(v,v)),e,t,i),P=a.textureUV.divide(this.mosaicInfo.size),L$5=s.textureUVNextVertex1.divide(this.mosaicInfo.size),k=s.textureUVNextVertex2.divide(this.mosaicInfo.size),Y={color:new F$1(1),outlineColor:new F$1(1),overrideOutlineColor:new m$1(1),outlineSize:u,distanceToPx:f,isSDF:c},A=new m$1(0);return A=A.add(se(S).multiply(this._getColor(qt(S,P,L$5,k),Y).a)),A=A.add(se(x).multiply(this._getColor(qt(x,P,L$5,k),Y).a)),A=A.add(se(T).multiply(this._getColor(qt(T,P,L$5,k),Y).a)),A=A.add(se(F).multiply(this._getColor(qt(F,P,L$5,k),Y).a)),A=A.add(se(C).multiply(this._getColor(qt(C,P,L$5,k),Y).a)),A=A.add(se(D).multiply(this._getColor(qt(D,P,L$5,k),Y).a)),A=A.add(se(z).multiply(this._getColor(qt(z,P,L$5,k),Y).a)),A=A.add(se(R).multiply(this._getColor(qt(R,P,L$5,k),Y).a)),A=A.add(se(N).multiply(this._getColor(qt(N,P,L$5,k),Y).a)),Dt$1(Er(A,new m$1(.05)),new m$1(2),new m$1(0))}};y$1([ss(De)],Ne.prototype,`visualVariableColor`,void 0),y$1([ss(Ae)],Ne.prototype,`visualVariableOpacity`,void 0),y$1([ss(Rt)],Ne.prototype,`visualVariableRotation`,void 0),y$1([ss(et)],Ne.prototype,`visualVariableSizeMinMaxValue`,void 0),y$1([ss(Ye)],Ne.prototype,`visualVariableSizeScaleStops`,void 0),y$1([ss(We)],Ne.prototype,`visualVariableSizeStops`,void 0),y$1([ss(tt)],Ne.prototype,`visualVariableSizeUnitValue`,void 0),y$1([st$1(fe)],Ne.prototype,`mosaicInfo`,void 0),y$1([ns(ee$1)],Ne.prototype,`mosaicTexture`,void 0),y$1([h(0,nt(Tt)),h(1,nt(_i))],Ne.prototype,`vertex`,null),y$1([h(0,nt(Ga))],Ne.prototype,`fragment`,null);var Ko=class extends K{constructor(){super(...arguments),this.type=23,this.shaders={geometry:new Ne},this.symbologyPlane=2}render(e,t){let{painter:i}=e,a=t.instance.getInput();i.setShader({shader:this.shaders.geometry,uniforms:C(B(B({},bt(e,t.target,a.uniforms)),Mt$1(e,t.target)),{mosaicInfo:i.textureManager.getMosaicInfo(e,t.textureKey,!0)}),textures:C(B({},St$1(e)),{mosaicTexture:i.textureManager.getMosaicTexture(e,t.textureKey,!0)}),defines:B({},Tt$1(e)),optionalAttributes:a.optionalAttributes,useComputeBuffer:it$1(e)}),i.setPipelineState(lt(e)),i.submitDraw(e,t)}};var Xo=class{constructor(){this.computeAttributes={}}get locationsMap(){let e=new Map;for(let t in this.locations)e.set(t,this.locations[t].index);return e}get optionPropertyKeys(){if(!this._optionPropertyKeys){let e=new Set(Object.keys(this.options));this._optionPropertyKeys=e}return this._optionPropertyKeys}get _transformFeedbackBindings(){return[]}get locationInfo(){if(!this._locationInfo){let e=this.locationsMap,t=Array.from(e.entries()).map(([i,a])=>`${i}.${a}`).join(`.`);this._locationInfo={stringHash:t,locations:e,computeAttributeMap:this.computeAttributes}}return this._locationInfo}get renamedLocationsMap(){let e=new Map;for(let[t,i]of this.locationsMap.entries())e.set(`a_`+t,i);return e}getShaderKey(e,t,i,a,s){return`${Object.keys(e).map(l=>`${l}.${e[l]}`).join(`.`)}.${Object.keys(a).filter(l=>a[l]).map(l=>`${l}_${a[l].toString()}`).join(`.`)}.${Object.keys(t).filter(l=>this.optionPropertyKeys.has(l)).join(`.`)}.${Object.keys(i).filter(l=>i[l]).join(`.`)}`}getProgram(e,t,i,a){let s=``,l=``;for(let u in i)if(i[u]){let c=typeof i[u]==`boolean`?`#define ${u}
`:`#define ${u} ${i[u]}
`;s+=c,l+=c}return s+=this.vertexShader,l+=this.fragmentShader,new ie(`glslShaderModule`,s,l,this.renamedLocationsMap,this._getUniformBindings(t),this._getTextureBindings(),this._transformFeedbackBindings)}_getUniformBindings(e){let t=[];for(let i in this.required){let a=this.required[i];t.push({uniformHydrated:null,shaderModulePath:i,uniformName:i,uniformType:a.type,uniformArrayElementType:Xn(a),uniformArrayLength:$n(a)})}for(let i in e){let a=this.options[i];if(e[i])for(let s in a){let l=a[s];t.push({uniformHydrated:null,shaderModulePath:`${i}.${s}`,uniformName:s,uniformType:l.type,uniformArrayElementType:Xn(l),uniformArrayLength:$n(l)})}}return t}_getTextureBindings(){let e=[];for(let t in this.textures)e.push({textureHydrated:null,shaderModulePath:t,textureName:t});return e}};var Xn=n=>n.type===`array`?n.elementType?.type:void 0;var $n=n=>n.type===`array`?n.size:void 0;var Jn={bitBlit:{"bitBlit.vert":`attribute vec2 a_pos;
attribute vec2 a_tex;
varying mediump vec2 v_uv;
void main(void) {
gl_Position = vec4(a_pos , 0.0, 1.0);
v_uv = a_tex;
}`,"bitBlit.frag":`uniform lowp sampler2D u_tex;
uniform lowp float u_opacity;
varying mediump vec2 v_uv;
void main() {
lowp vec4 color = texture2D(u_tex, v_uv);
gl_FragColor = color * u_opacity;
}`},debug:{overlay:{"overlay.frag":`precision mediump float;
varying vec4 v_color;
void main(void) {
gl_FragColor = v_color;
}`,"overlay.vert":`attribute vec3 a_PositionAndFlags;
uniform mat3 u_dvsMat3;
uniform vec4 u_colors[4];
uniform float u_opacities[4];
varying vec4 v_color;
void main(void) {
vec2 position = a_PositionAndFlags.xy;
float flags = a_PositionAndFlags.z;
int colorIndex = int(mod(flags, 4.0));
vec4 color;
for (int i = 0; i < 4; i++) {
color = u_colors[i];
if (i == colorIndex) {
break;
}
}
int opacityIndex = int(mod(floor(flags / 4.0), 4.0));
float opacity;
for (int i = 0; i < 4; i++) {
opacity = u_opacities[i];
if (i == opacityIndex) {
break;
}
}
v_color = color * opacity;
gl_Position = vec4((u_dvsMat3 * vec3(position, 1.0)).xy, 0.0, 1.0);
}`}},dot:{dot:{"dot.vert":`precision highp float;
attribute vec2 a_pos;
uniform sampler2D u_texture;
uniform highp mat3 u_dvsMat3;
uniform highp float u_tileZoomFactor;
uniform highp float u_dotSize;
uniform highp float u_pixelRatio;
varying vec2 v_pos;
varying vec4 v_color;
varying float v_dotRatio;
varying float v_invEdgeRatio;
const float EPSILON = 0.000001;
void main()
{
mat3 tileToTileTexture = mat3(  1., 0., 0.,
0., -1., 0.,
0., 1., 1.  );
vec3 texCoords = tileToTileTexture * vec3(a_pos.xy / 512., 1.);
v_color = texture2D(u_texture, texCoords.xy);
float smoothEdgeWidth = max(u_dotSize / 2., 1.) ;
float z = 0.;
z += 2.0 * step(v_color.a, EPSILON);
gl_PointSize = (smoothEdgeWidth + u_dotSize);
gl_Position = vec4((u_dvsMat3 * vec3(a_pos + .5, 1.)).xy, z, 1.);
v_dotRatio = u_dotSize / gl_PointSize;
v_invEdgeRatio = -1. / ( smoothEdgeWidth / gl_PointSize );
gl_PointSize  *= (u_pixelRatio * u_tileZoomFactor);
}`,"dot.frag":`precision mediump float;
varying vec4 v_color;
varying float v_dotRatio;
varying float v_invEdgeRatio;
uniform highp float u_tileZoomFactor;
void main()
{
float dist = length(gl_PointCoord - vec2(.5, .5)) * 2.;
float alpha = smoothstep(0., 1., v_invEdgeRatio * (dist - v_dotRatio) + 1.);
gl_FragColor = v_color * alpha;
}`}},filtering:{"bicubic.glsl":`vec4 computeWeights(float v) {
float b = 1.0 / 6.0;
float v2 = v * v;
float v3 = v2 * v;
float w0 = b * (-v3 + 3.0 * v2 - 3.0 * v + 1.0);
float w1 = b * (3.0 * v3  - 6.0 * v2 + 4.0);
float w2 = b * (-3.0 * v3 + 3.0 * v2 + 3.0 * v + 1.0);
float w3 = b * v3;
return vec4(w0, w1, w2, w3);
}
vec4 bicubicOffsetsAndWeights(float v) {
vec4 w = computeWeights(v);
float g0 = w.x + w.y;
float g1 = w.z + w.w;
float h0 = 1.0 - (w.y / g0) + v;
float h1 = 1.0 + (w.w / g1) - v;
return vec4(h0, h1, g0, g1);
}
vec4 sampleBicubicBSpline(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 eX = vec2(1.0 / texSize.x, 0.0);
vec2 eY = vec2(0.0, 1.0 / texSize.y);
vec2 texel = coords * texSize - 0.5;
vec3 hgX = bicubicOffsetsAndWeights(fract(texel).x).xyz;
vec3 hgY = bicubicOffsetsAndWeights(fract(texel).y).xyz;
vec2 coords10 = coords + hgX.x * eX;
vec2 coords00 = coords - hgX.y * eX;
vec2 coords11 = coords10 + hgY.x * eY;
vec2 coords01 = coords00 + hgY.x * eY;
coords10 = coords10 - hgY.y * eY;
coords00 = coords00 - hgY.y * eY;
vec4 color00 = texture2D(sampler, coords00);
vec4 color10 = texture2D(sampler, coords10);
vec4 color01 = texture2D(sampler, coords01);
vec4 color11 = texture2D(sampler, coords11);
color00 = mix(color00, color01, hgY.z);
color10 = mix(color10, color11, hgY.z);
color00 = mix(color00, color10, hgX.z);
return color00;
}`,"bilinear.glsl":`vec4 sampleBilinear(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 texelStart = floor(coords * texSize);
vec2 coord0 = texelStart / texSize;
vec2 coord1 = (texelStart +  vec2(1.0, 0.0)) / texSize;
vec2 coord2 = (texelStart +  vec2(0.0, 1.0)) / texSize;
vec2 coord3 = (texelStart +  vec2(1.0, 1.0)) / texSize;
vec4 color0 = texture2D(sampler, coord0);
vec4 color1 = texture2D(sampler, coord1);
vec4 color2 = texture2D(sampler, coord2);
vec4 color3 = texture2D(sampler, coord3);
vec2 blend = fract(coords * texSize);
vec4 color01 = mix(color0, color1, blend.x);
vec4 color23 = mix(color2, color3, blend.x);
vec4 color = mix(color01, color23, blend.y);
#ifdef NNEDGE
float alpha = floor(color0.a * color1.a * color2.a * color3.a + 0.5);
color = color * alpha + (1.0 - alpha) * texture2D(sampler, coords);
#endif
return color;
}`,"epx.glsl":`vec4 sampleEPX(sampler2D sampler, float size, vec2 coords, vec2 texSize) {
vec2 invSize = 1.0 / texSize;
vec2 texel = coords * texSize;
vec2 texel_i = floor(texel);
vec2 texel_frac = fract(texel);
vec4 colorP = texture2D(sampler, texel_i * invSize);
vec4 colorP1 = vec4(colorP);
vec4 colorP2 = vec4(colorP);
vec4 colorP3 = vec4(colorP);
vec4 colorP4 = vec4(colorP);
vec4 colorA = texture2D(sampler, (texel_i - vec2(0.0, 1.0)) * invSize);
vec4 colorB = texture2D(sampler, (texel_i + vec2(1.0, 0.0)) * invSize);
vec4 colorC = texture2D(sampler, (texel_i - vec2(1.0, 0.0)) * invSize);
vec4 colorD = texture2D(sampler, (texel_i + vec2(0.0, 1.0)) * invSize);
if (colorC == colorA && colorC != colorD && colorA != colorB) {
colorP1 = colorA;
}
if (colorA == colorB && colorA != colorC && colorB != colorD) {
colorP2 = colorB;
}
if (colorD == colorC && colorD != colorB && colorC != colorA) {
colorP3 = colorC;
}
if (colorB == colorD && colorB != colorA && colorD != colorC) {
colorP4 = colorD;
}
vec4 colorP12 = mix(colorP1, colorP2, texel_frac.x);
vec4 colorP34 = mix(colorP1, colorP2, texel_frac.x);
return mix(colorP12, colorP34, texel_frac.y);
}`},heatmap:{heatmapResolve:{"heatmapResolve.frag":`precision highp float;
#ifdef HEATMAP_PRECISION_HALF_FLOAT
#define COMPRESSION_FACTOR 4.0
#else
#define COMPRESSION_FACTOR 1.0
#endif
uniform sampler2D u_texture;
uniform sampler2D u_gradient;
uniform vec2 u_densityMinAndInvRange;
uniform float u_densityNormalization;
varying vec2 v_uv;
void main() {
vec4 data = texture2D(u_texture, v_uv);
float density = data.r * COMPRESSION_FACTOR;
density *= u_densityNormalization;
density = (density - u_densityMinAndInvRange.x) * u_densityMinAndInvRange.y;
vec4 color = texture2D(u_gradient, vec2(density, 0.5));
gl_FragColor = vec4(color.rgb * color.a, color.a);
}`,"heatmapResolve.vert":`precision highp float;
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
v_uv = a_pos;
gl_Position = vec4(a_pos * 2.0 - 1.0, 1., 1.);
}`}},highlight:{"blur.frag":`varying mediump vec2 v_texcoord;
uniform mediump vec4 u_direction;
uniform mediump mat4 u_channelSelector;
uniform mediump float u_sigma;
uniform sampler2D u_texture;
mediump float gauss1(mediump vec2 dir) {
return exp(-dot(dir, dir) / (2.0 * u_sigma * u_sigma));
}
mediump vec4 selectChannel(mediump vec4 sample) {
return u_channelSelector * sample;
}
void accumGauss1(mediump float i, inout mediump float tot, inout mediump float weight) {
mediump float w = gauss1(i * u_direction.xy);
tot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw))[3] * w;
weight += w;
}
void main(void) {
mediump float tot = 0.0;
mediump float weight = 0.0;
accumGauss1(-5.0, tot, weight);
accumGauss1(-4.0, tot, weight);
accumGauss1(-3.0, tot, weight);
accumGauss1(-2.0, tot, weight);
accumGauss1(-1.0, tot, weight);
accumGauss1(0.0, tot, weight);
accumGauss1(1.0, tot, weight);
accumGauss1(2.0, tot, weight);
accumGauss1(3.0, tot, weight);
accumGauss1(4.0, tot, weight);
accumGauss1(5.0, tot, weight);
gl_FragColor = vec4(0.0, 0.0, 0.0, tot / weight);
}`,"highlight.frag":`varying mediump vec2 v_texcoord;
uniform sampler2D u_texture;
uniform mediump float u_sigma;
uniform sampler2D u_shade;
uniform mediump vec2 u_minMaxDistance;
mediump float estimateDistance() {
mediump float y = texture2D(u_texture, v_texcoord)[3];
const mediump float y0 = 0.5;
mediump float m0 = 1.0 / (sqrt(2.0 * 3.1415) * u_sigma);
mediump float d = (y - y0) / m0;
return d;
}
mediump vec4 shade(mediump float d) {
mediump float mappedDistance = (d - u_minMaxDistance.x) / (u_minMaxDistance.y - u_minMaxDistance.x);
mappedDistance = clamp(mappedDistance, 0.0, 1.0);
return texture2D(u_shade, vec2(mappedDistance, 0.5));
}
void main(void) {
mediump float d = estimateDistance();
gl_FragColor = shade(d);
}`,"textured.vert":`attribute mediump vec2 a_position;
attribute mediump vec2 a_texcoord;
varying mediump vec2 v_texcoord;
void main(void) {
gl_Position = vec4(a_position, 0.0, 1.0);
v_texcoord = a_texcoord;
}`},materials:{"barycentric.glsl":`float inTriangle(vec3 bary) {
vec3 absBary = abs(bary);
return step((absBary.x + absBary.y + absBary.z), 1.05);
}
vec3 xyToBarycentric(in vec2 pos, in vec2 v0,  in vec2 v1, in vec2 v2) {
mat3 xyToBarycentricMat3 = mat3(
v1.x * v2.y - v2.x * v1.y, v2.x * v0.y - v0.x * v2.y, v0.x * v1.y - v1.x * v0.y,
v1.y - v2.y, v2.y - v0.y, v0.y - v1.y,
v2.x - v1.x, v0.x - v2.x, v1.x - v0.x
);
float A2 = v0.x * (v1.y - v2.y) + v1.x * (v2.y - v0.y) + v2.x * (v0.y - v1.y);
return (1. / A2) * xyToBarycentricMat3 * vec3(1., pos);
}`,"attributeData.glsl":`uniform highp sampler2D filterFlags;
uniform highp sampler2D animation;
uniform highp sampler2D gpgpu;
uniform highp sampler2D visualVariableData;
uniform highp sampler2D dataDriven0;
uniform highp sampler2D dataDriven1;
uniform highp sampler2D dataDriven2;
uniform float size;
highp vec2 getAttributeDataCoords(in highp vec3 id) {
highp vec3  texel = unpackDisplayIdTexel(id);
highp float u32 = float(int(texel.r) + int(texel.g) * 256 + int(texel.b) * 256 * 256);
highp float col = mod(u32, size);
highp float row = (u32 - col) / size;
highp float u = col / size;
highp float v = row / size;
return vec2(u, v);
}
highp vec2 getAttributeDataTextureCoords(in highp vec3 id) {
return (getAttributeDataCoords(id) * 2.0) - 1.0 + (.5 / vec2(size));
}
highp vec4 getFilterData(in highp vec3 id) {
vec2 coords = getAttributeDataCoords(id);
return texture2D(filterFlags, coords);
}
highp vec4 getAnimation(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(animation, coords);
}
highp vec4 getVisualVariableData(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(visualVariableData, coords);
}
highp vec4 getDataDriven0(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(dataDriven0, coords);
}
highp vec4 getDataDriven1(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(dataDriven1, coords);
}
highp vec4 getGPGPU(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(gpgpu, coords);
}
highp vec4 getDataDriven2(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(dataDriven2, coords);
}
float u88VVToFloat(in vec2 v) {
bool isMagic = v.x == 255.0 && v.y == 255.0;
if (isMagic) {
return NAN_MAGIC_NUMBER;
}
return (v.x + v.y * float(0x100)) - 32768.0;
}`,"constants.glsl":`const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_RAD_TO_DEG = 180.0 / 3.141592654;
const float POSITION_PRECISION = 1.0 / 8.0;
const float FILL_POSITION_PRECISION = 1.0 / 1.0;
const float SOFT_EDGE_RATIO = 1.0;
const float THIN_LINE_WIDTH_FACTOR = 1.1;
const float THIN_LINE_HALF_WIDTH = 1.0;
const float EXTRUDE_SCALE_PLACEMENT_PADDING = 1.0 / 4.0;
const float OFFSET_PRECISION = 1.0 / 8.0;
const float OUTLINE_SCALE = 1.0 / 5.0;
const float SDF_FONT_SIZE = 24.0;
const float MAX_SDF_DISTANCE = 8.0;
const float PLACEMENT_PADDING = 8.0;
const float EPSILON = 0.00001;
const float EPSILON_HITTEST = 0.05;
const int MAX_FILTER_COUNT = 2;
const int ATTR_VV_SIZE = 0;
const int ATTR_VV_COLOR = 1;
const int ATTR_VV_OPACITY = 2;
const int ATTR_VV_ROTATION = 3;
const highp float NAN_MAGIC_NUMBER = 1e-30;
const int BITSET_GENERIC_LOCK_COLOR = 1;
const int BITSET_GENERIC_CONSIDER_ALPHA_ONLY = 4;
const int BITSET_MARKER_ALIGNMENT_MAP = 0;
const int BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE = 2;
const int BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY = 3;
const int BITSET_TYPE_FILL_OUTLINE = 0;
const int BITSET_FILL_RANDOM_PATTERN_OFFSET = 2;
const int BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR = 3;
const int BITSET_FILL_HAS_PATTERN_HEIGHT_PRECISION_FACTOR = 5;
const int BITSET_FILL_HAS_PATTERN_WIDTH_PRECISION_FACTOR = 6;
const int BITSET_LINE_SCALE_DASH = 2;`,fill:{"common.glsl":`#include <materials/symbologyTypeUtils.glsl>
#ifdef PATTERN
uniform mediump vec2 u_mosaicSize;
varying mediump float v_sampleAlphaOnly;
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
uniform lowp vec4 u_isActive[ 2 ];
uniform highp float u_dotValue;
uniform highp float u_tileDotsOverArea;
uniform highp float u_dotTextureDotCount;
uniform mediump float u_tileZoomFactor;
#endif
varying highp vec3 v_id;
varying lowp vec4 v_color;
varying lowp float v_opacity;
varying mediump vec4 v_aux1;
#ifdef PATTERN
varying mediump vec2 v_tileTextureCoord;
#endif
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
varying lowp float v_isOutline;
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
varying highp vec2 v_dotTextureCoords;
varying highp vec4 v_dotThresholds[ 2 ];
#endif`,"fill.frag":`precision highp float;
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/fill/common.glsl>
#ifdef PATTERN
uniform lowp sampler2D u_texture;
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
uniform mediump mat4 u_dotColors[ 2 ];
uniform sampler2D u_dotTextures[ 2 ];
uniform vec4 u_dotBackgroundColor;
#endif
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.frag>
lowp vec4 drawLine() {
float v_lineWidth = v_aux1.x;
vec2  v_normal    = v_aux1.yz;
LineData inputs = LineData(
v_color,
v_normal,
v_lineWidth,
v_opacity,
v_id
);
return shadeLine(inputs);
}
#endif
lowp vec4 drawFill() {
lowp vec4 out_color = vec4(0.);
#ifdef HITTEST
out_color = v_color;
#elif defined(PATTERN)
mediump vec4 v_tlbr = v_aux1;
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
if (v_sampleAlphaOnly > 0.5) {
color.rgb = vec3(color.a);
}
out_color = v_opacity * v_color * color;
#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY && !defined(HIGHLIGHT)
vec4 textureThresholds0 = texture2D(u_dotTextures[0], v_dotTextureCoords);
vec4 textureThresholds1 = texture2D(u_dotTextures[1], v_dotTextureCoords);
vec4 difference0 = v_dotThresholds[0] - textureThresholds0;
vec4 difference1 = v_dotThresholds[1] - textureThresholds1;
#ifdef DD_DOT_BLENDING
vec4 isPositive0 = step(0.0, difference0);
vec4 isPositive1 = step(0.0, difference1);
float weightSum = dot(isPositive0, difference0) + dot(isPositive1, difference1);
float lessThanEqZero = step(weightSum, 0.0);
float greaterThanZero = 1.0 - lessThanEqZero ;
float divisor = (weightSum + lessThanEqZero);
vec4 weights0 = difference0 * isPositive0 / divisor;
vec4 weights1 = difference1 * isPositive1 / divisor;
vec4 dotColor = u_dotColors[0] * weights0 + u_dotColors[1] * weights1;
vec4 preEffectColor = greaterThanZero * dotColor + lessThanEqZero * u_dotBackgroundColor;
#else
float diffMax = max(max4(difference0), max4(difference1));
float lessThanZero = step(diffMax, 0.0);
float greaterOrEqZero = 1.0 - lessThanZero;
vec4 isMax0 = step(diffMax, difference0);
vec4 isMax1 = step(diffMax, difference1);
vec4 dotColor = u_dotColors[0] * isMax0 + u_dotColors[1] * isMax1;
vec4 preEffectColor = greaterOrEqZero * dotColor + lessThanZero * u_dotBackgroundColor;
#endif
out_color = preEffectColor;
#else
out_color = v_opacity * v_color;
#endif
#ifdef HIGHLIGHT
out_color.a = 1.0;
#endif
return out_color;
}
void main() {
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
if (v_isOutline > 0.5) {
gl_FragColor = drawLine();
} else {
gl_FragColor = drawFill();
}
#else
gl_FragColor = drawFill();
#endif
}`,"fill.vert":`#include <materials/symbologyTypeUtils.glsl>
#define PACKED_LINE
precision highp float;
attribute float a_bitset;
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
attribute float a_inverseArea;
vec4 a_color = vec4(0.0, 0.0, 0.0, 1.0);
vec2 a_zoomRange = vec2(0.0, 10000.0);
#else
attribute vec4 a_color;
attribute vec4 a_aux2;
attribute vec4 a_aux3;
#ifndef SYMBOLOGY_TYPE_IS_SIMPLE_LIKE
attribute vec4 a_aux1;
attribute vec2 a_zoomRange;
#else
vec2 a_zoomRange = vec2(0.0, 10000.0);
#endif
#endif
uniform vec2 u_tileOffset;
uniform vec2 u_maxIntNumOfCrossing;
#include <util/encoding.glsl>
#include <materials/vcommon.glsl>
#include <materials/fill/common.glsl>
#include <materials/fill/hittest.glsl>
const float INV_SCALE_COMPRESSION_FACTOR = 1.0 / 128.0;
const float MAX_REPRESENTABLE_INT = 16777216.0;
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
vec4 dotThreshold(vec4 featureAttrOverFeatureArea, float dotValue, float tileDotsOverArea) {
return featureAttrOverFeatureArea * (1.0 / dotValue)  * (1.0 / tileDotsOverArea);
}
#endif
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.vert>
void drawLine(out lowp vec4 out_color, out highp vec3 out_pos) {
LineData outputs = buildLine(
out_pos,
a_id,
a_pos,
a_color,
(a_aux3.xy - 128.) / 16.,
(a_aux3.zw - 128.) / 16.,
0.,
a_aux2.z / 16.,
a_bitset,
vec4(0.),
vec2(0.),
a_aux2.w / 16.
);
v_id      = outputs.id;
v_opacity = outputs.opacity;
v_aux1    = vec4(outputs.lineHalfWidth, outputs.normal, 0.);
out_color = outputs.color;
}
#endif
void drawFill(out lowp vec4 out_color, out highp vec3 out_pos) {
float a_bitSet = a_bitset;
out_color = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);
v_opacity = getOpacity();
v_id      = norm(a_id);
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
mat3 tileToTileNormalized = mat3(  2. / 512.,  0.,  0.,
0., -2. / 512.,  0.,
-1.,  1.,  1.  );
out_pos   = tileToTileNormalized * vec3((a_pos * FILL_POSITION_PRECISION), 1.);
#else
out_pos   = u_dvsMat3 * vec3(a_pos * FILL_POSITION_PRECISION, 1.);
#endif
#ifdef PATTERN
vec4  a_tlbr   = a_aux1;
float a_width  = a_aux2.x;
float a_height = a_aux2.y;
vec2  a_offset = a_aux2.zw;
vec2  a_scale  = a_aux3.xy;
float a_angle  = a_aux3.z;
if (getBit(a_bitset, BITSET_FILL_HAS_PATTERN_WIDTH_PRECISION_FACTOR) > 0.5) {
a_width *= INV_SCALE_COMPRESSION_FACTOR;
}
if (getBit(a_bitset, BITSET_FILL_HAS_PATTERN_HEIGHT_PRECISION_FACTOR) > 0.5) {
a_height *= INV_SCALE_COMPRESSION_FACTOR;
}
vec2 scale = INV_SCALE_COMPRESSION_FACTOR * a_scale;
float width = u_zoomFactor * a_width * scale.x;
float height = u_zoomFactor * a_height * scale.y;
float angle = C_256_TO_RAD * a_angle;
float sinA = sin(angle);
float cosA = cos(angle);
float dx = 0.0;
float dy = 0.0;
if (getBit(a_bitset, BITSET_FILL_RANDOM_PATTERN_OFFSET) > 0.5) {
float id = rgba2float(vec4(a_id, 0.0));
dx = rand(vec2(id, 0.0));
dy = rand(vec2(0.0, id));
}
mat3 patternMatrix = mat3(cosA / width, sinA / height, 0,
-sinA / width, cosA / height, 0,
dx,            dy,           1);
vec2 patternSize = vec2(a_width, a_height);
vec2 numPatternsPerMaxInt = vec2(MAX_REPRESENTABLE_INT) / patternSize;
vec2 maxIntCrossingOffsetCorrection = patternSize * fract(u_maxIntNumOfCrossing * numPatternsPerMaxInt);
vec2 tileOffset = u_tileOffset + maxIntCrossingOffsetCorrection - 0.5 * patternSize;
tileOffset = vec2(tileOffset.x * cosA - tileOffset.y * sinA, tileOffset.x * sinA + tileOffset.y * cosA);
tileOffset = mod(tileOffset, patternSize);
vec2 symbolOffset = u_zoomFactor * scale * vec2(a_offset - tileOffset) / vec2(width, height);
v_tileTextureCoord = (patternMatrix * vec3(a_pos * FILL_POSITION_PRECISION, 1.0)).xy - symbolOffset;
v_aux1 = a_tlbr / u_mosaicSize.xyxy;
v_sampleAlphaOnly = getBit(a_bitset, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);
if (getBit(a_bitSet, BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR) > 0.5) {
#ifdef VV_COLOR
v_sampleAlphaOnly *= (1.0 - float(isNan(VV_ADATA[ATTR_VV_COLOR]))) * (1.0 - getBit(a_bitSet, BITSET_GENERIC_LOCK_COLOR));
#else
v_sampleAlphaOnly = 0.0;
#endif
}
#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
vec4 ddAttributeData0 = getAttributeData2(a_id) * u_isActive[0] * a_inverseArea;
vec4 ddAttributeData1 = getAttributeData3(a_id) * u_isActive[1] * a_inverseArea;
float size = u_tileZoomFactor * 512.0 * 1.0 / u_pixelRatio;
v_dotThresholds[0] = dotThreshold(ddAttributeData0, u_dotValue, u_tileDotsOverArea);
v_dotThresholds[1] = dotThreshold(ddAttributeData1, u_dotValue, u_tileDotsOverArea);
v_dotTextureCoords = (a_pos * FILL_POSITION_PRECISION + 0.5) / size;
#endif
}
#ifdef HITTEST
void draw(out lowp vec4 out_color, out highp vec3 out_pos) {
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
if (getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE) > 0.5) {
out_pos = vec3(0., 0., 2.);
return;
}
#endif
hittestFill(out_color, out_pos);
gl_PointSize = 1.0;
}
#elif defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)
void draw(out lowp vec4 out_color, out highp vec3 out_pos) {
v_isOutline = getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE);
if (v_isOutline > 0.5) {
drawLine(out_color, out_pos);
} else {
drawFill(out_color, out_pos);
}
}
#else
#define draw drawFill
#endif
void main()
{
INIT;
highp vec3 pos  = vec3(0.);
highp vec4 color  = vec4(0.);
draw(color, pos);
v_color = color;
gl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);
}`,"hittest.glsl":`#ifdef HITTEST
#include <materials/hittest/common.glsl>
attribute vec2 a_pos1;
attribute vec2 a_pos2;
void hittestFill(
out lowp vec4 out_color,
out highp vec3 out_pos
) {
vec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * FILL_POSITION_PRECISION, 1.);
vec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * FILL_POSITION_PRECISION, 1.);
vec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * FILL_POSITION_PRECISION, 1.);
float hittestDist = u_hittestDist;
float dist = distPointTriangle(u_hittestPos, pos.xy, pos1.xy, pos2.xy);
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
if (dist < 0. || dist >= hittestDist) {
out_pos.z += 2.0;
}
out_color = vec4(1. / 255., 0, 0, dist == 0. ? (1. / 255.) : 0.);
}
#endif`},hittest:{"common.glsl":`#ifdef HITTEST
uniform float hittestDist;
uniform highp vec2 hittestPos;
float projectScalar(vec2 a, vec2 b) {
return dot(a, normalize(b));
}
float distPointSegment(vec2 p0, vec2 p1, vec2 p2) {
vec2 L = p2 - p1;
vec2 A = p0 - p1;
float projAL = projectScalar(A, L);
float t = clamp(projAL / length(L), 0., 1.);
return distance(p0, p1 + t * (p2 - p1));
}
void hittestMarker(out lowp vec4 out_color, out highp vec3 out_pos, in highp vec3 pos, float size) {
float dist = distance(pos, vec3(hittestPos, 1.));
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
if ((dist - size) > hittestDist) {
out_pos.z += 2.0;
}
out_color = vec4(1. / 255., 0, 0, (dist - size) < 0. ? (1. / 255.) : 0.);
}
float intersectPointTriangleBary(vec2 p, vec2 a, vec2 b, vec2 c) {
return inTriangle(xyToBarycentric(p, a, b, c));
}
float distPointTriangle(vec2 p, vec2 a, vec2 b, vec2 c) {
vec2 ba = b - a;
vec2 ca = c - a;
float crossProduct = ba.x * ca.y - ca.x * ba.y;
bool isParallel = crossProduct < EPSILON_HITTEST && crossProduct > -EPSILON_HITTEST;
if (isParallel) {
return -1.;
}
if (intersectPointTriangleBary(p.xy, a, b, c) == 1.) {
return 0.;
}
float distAB = distPointSegment(p, a, b);
float distBC = distPointSegment(p, b, c);
float distCA = distPointSegment(p, c, a);
return min(min(distAB, distBC), distCA);
}
#endif`},icon:{"common.glsl":`#include <util/encoding.glsl>
uniform lowp vec2 u_mosaicSize;
varying lowp vec4 v_color;
varying highp vec3 v_id;
varying highp vec4 v_sizeTex;
varying mediump vec3 v_pos;
varying lowp float v_opacity;
uniform lowp sampler2D u_texture;
#ifdef SDF
varying lowp vec4 v_outlineColor;
varying mediump float v_outlineWidth;
varying mediump float v_distRatio;
varying mediump float v_overridingOutlineColor;
varying mediump float v_isThin;
#endif
#ifdef SDF
vec4 getColor(vec2 v_size, vec2 v_tex) {
#ifdef HITTEST
lowp vec4 fillPixelColor = vec4(1.0);
#else
lowp vec4 fillPixelColor = v_color;
#endif
float d = 0.5 - rgba2float(texture2D(u_texture, v_tex));
float size = max(v_size.x, v_size.y);
float dist = d * size * SOFT_EDGE_RATIO * v_distRatio;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
float outlineWidth = v_outlineWidth;
#ifdef HIGHLIGHT
outlineWidth = max(outlineWidth, 4.0 * v_isThin);
#endif
if (outlineWidth > 0.25) {
lowp vec4 outlinePixelColor = v_overridingOutlineColor * v_color + (1.0 - v_overridingOutlineColor) * v_outlineColor;
float clampedOutlineSize = min(outlineWidth, size);
outlinePixelColor *= clamp(0.5 - abs(dist) + clampedOutlineSize * 0.5, 0.0, 1.0);
return v_opacity * ((1.0 - outlinePixelColor.a) * fillPixelColor + outlinePixelColor);
}
return v_opacity * fillPixelColor;
}
#else
vec4 getColor(vec2 _v_size, vec2 v_tex) {
lowp vec4 texColor = texture2D(u_texture, v_tex);
return v_opacity * texColor * v_color;
}
#endif`,heatmapAccumulate:{"heatmapAccumulate.frag":`precision mediump float;
#include <materials/icon/heatmapAccumulate/common.glsl>
#ifdef HEATMAP_PRECISION_HALF_FLOAT
#define COMPRESSION_FACTOR 0.25
#else
#define COMPRESSION_FACTOR 1.0
#endif
uniform lowp sampler2D u_texture;
void main() {
#ifdef HITTEST
gl_FragColor = v_hittestResult;
#else
float radius = length(v_offsetFromCenter);
float shapeWeight = step(radius, 1.0);
float oneMinusRadiusSquared = 1.0 - radius * radius;
float kernelWeight = oneMinusRadiusSquared * oneMinusRadiusSquared;
gl_FragColor = vec4(shapeWeight * kernelWeight * v_fieldValue * COMPRESSION_FACTOR);
#endif
}`,"common.glsl":`varying lowp vec4 v_hittestResult;
varying mediump vec2 v_offsetFromCenter;
varying highp float v_fieldValue;`,"heatmapAccumulate.vert":`precision highp float;
attribute vec2 a_vertexOffset;
vec4 a_color = vec4(0.0);
vec2 a_zoomRange = vec2(0.0, 10000.0);
uniform float u_radius;
uniform float u_isFieldActive;
#include <materials/vcommon.glsl>
#include <materials/hittest/common.glsl>
#include <materials/icon/heatmapAccumulate/common.glsl>
void main() {
float filterFlags = getFilterFlags();
#ifdef HITTEST
highp vec4 out_hittestResult = vec4(0.);
highp vec3 out_pos = vec3(0.);
vec3 pos = u_viewMat3 * u_tileMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);
hittestMarker(out_hittestResult, out_pos, pos, u_radius);
v_hittestResult = out_hittestResult;
gl_PointSize = 1.;
gl_Position = vec4(clip(a_color, out_pos, filterFlags, a_zoomRange), 1.0);
#else
v_offsetFromCenter = sign(a_vertexOffset);
v_fieldValue = getAttributeData2(a_id).x * u_isFieldActive + 1.0 - u_isFieldActive;
vec3 centerPos = u_dvsMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);
vec3 vertexPos = centerPos + u_displayViewMat3 * vec3(v_offsetFromCenter, 0.0) * u_radius;
gl_Position = vec4(clip(a_color, vertexPos, filterFlags, a_zoomRange), 1.0);
#endif
}`},"hittest.glsl":`#ifdef HITTEST
#include <materials/hittest/common.glsl>
attribute vec2 a_vertexOffset1;
attribute vec2 a_vertexOffset2;
attribute vec2 a_texCoords1;
attribute vec2 a_texCoords2;
vec2 getTextureCoords(in vec3 bary, in vec2 texCoords0, in vec2 texCoords1, in vec2 texCoords2) {
return texCoords0 * bary.x + texCoords1 * bary.y + texCoords2 * bary.z;
}
void hittestIcon(
inout lowp vec4 out_color,
out highp vec3 out_pos,
in vec3 pos,
in vec3 offset,
in vec2 size,
in float scaleFactor,
in float isMapAligned
) {
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
vec3 posBase = u_viewMat3 * u_tileMat3  * pos;
vec3 offset1 = scaleFactor * vec3(a_vertexOffset1 / 16.0, 0.);
vec3 offset2 = scaleFactor * vec3(a_vertexOffset2 / 16.0, 0.);
vec2 pos0    = (posBase + getMatrixNoDisplay(isMapAligned) * offset).xy;
vec2 pos1    = (posBase + getMatrixNoDisplay(isMapAligned) * offset1).xy;
vec2 pos2    = (posBase + getMatrixNoDisplay(isMapAligned) * offset2).xy;
vec3 bary0 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, -u_hittestDist), pos0, pos1, pos2);
vec3 bary1 = xyToBarycentric(u_hittestPos + vec2(0., -u_hittestDist), pos0, pos1, pos2);
vec3 bary2 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, -u_hittestDist), pos0, pos1, pos2);
vec3 bary3 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, 0.), pos0, pos1, pos2);
vec3 bary4 = xyToBarycentric(u_hittestPos, pos0, pos1, pos2);
vec3 bary5 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, 0.), pos0, pos1, pos2);
vec3 bary6 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, u_hittestDist), pos0, pos1, pos2);
vec3 bary7 = xyToBarycentric(u_hittestPos + vec2(0., u_hittestDist), pos0, pos1, pos2);
vec3 bary8 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, u_hittestDist), pos0, pos1, pos2);
vec2 tex0 = a_texCoords  / u_mosaicSize;
vec2 tex1 = a_texCoords1 / u_mosaicSize;
vec2 tex2 = a_texCoords2 / u_mosaicSize;
float alphaSum = 0.;
alphaSum += inTriangle(bary0) * getColor(size, getTextureCoords(bary0, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary1) * getColor(size, getTextureCoords(bary1, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary2) * getColor(size, getTextureCoords(bary2, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary3) * getColor(size, getTextureCoords(bary3, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary4) * getColor(size, getTextureCoords(bary4, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary5) * getColor(size, getTextureCoords(bary5, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary6) * getColor(size, getTextureCoords(bary6, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary7) * getColor(size, getTextureCoords(bary7, tex0, tex1, tex2)).a;
out_pos.z += step(alphaSum, .05) * 2.0;
out_color = vec4(1. / 255., 0., 0., alphaSum / 255.);
}
#endif`,"icon.frag":`precision mediump float;
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/icon/common.glsl>
void main()
{
#ifdef HITTEST
vec4 color = v_color;
#else
vec4 color = getColor(v_sizeTex.xy, v_sizeTex.zw);
#endif
#ifdef HIGHLIGHT
color.a = step(1.0 / 255.0, color.a);
#endif
gl_FragColor = color;
}`,"icon.vert":`precision highp float;
attribute vec4 a_color;
attribute vec4 a_outlineColor;
attribute vec4 a_sizeAndOutlineWidth;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
attribute vec2 a_bitSetAndDistRatio;
attribute vec2 a_zoomRange;
#include <materials/vcommon.glsl>
#include <materials/icon/common.glsl>
#include <materials/icon/hittest.glsl>
float getMarkerScaleFactor(inout vec2 size, in float referenceSize) {
#ifdef VV_SIZE
float f = getSize(size.y) / size.y;
float sizeFactor = size.y / referenceSize;
return getSize(referenceSize) / referenceSize;
#else
return 1.;
#endif
}
void main()
{
INIT;
float a_bitSet = a_bitSetAndDistRatio.x;
vec3  pos           = vec3(a_pos * POSITION_PRECISION, 1.0);
vec2  size          = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 128.0;
vec3  offset        = vec3(a_vertexOffset / 16.0, 0.);
float outlineSize   = a_sizeAndOutlineWidth.z * a_sizeAndOutlineWidth.z / 128.0;
float isMapAligned  = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);
float referenceSize = a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 128.0;
float scaleSymbolProportionally = getBit(a_bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);
float scaleFactor               = getMarkerScaleFactor(size, referenceSize);
size.xy     *= scaleFactor;
offset.xy   *= scaleFactor;
outlineSize *= scaleSymbolProportionally * (scaleFactor - 1.0) + 1.0;
vec2 v_tex   = a_texCoords / u_mosaicSize;
float filterFlags = getFilterFlags();
v_color    = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);
v_opacity  = getOpacity();
v_id       = norm(a_id);
v_pos      = u_dvsMat3 * pos + getMatrix(isMapAligned) * getRotation()  * offset;
v_sizeTex  = vec4(size.xy, v_tex.xy);
#ifdef SDF
v_isThin   = getBit(a_bitSet, BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE);
#ifdef VV_COLOR
v_overridingOutlineColor = v_isThin;
#else
v_overridingOutlineColor = 0.0;
#endif
v_outlineWidth = min(outlineSize, max(max(size.x, size.y) - 0.99, 0.0));
v_outlineColor = a_outlineColor;
v_distRatio = a_bitSetAndDistRatio.y / 128.0;
#endif
#ifdef HITTEST
highp vec4 out_color = vec4(0.);
highp vec3 out_pos   = vec3(0.);
hittestIcon(out_color, out_pos, pos, offset, size, scaleFactor, isMapAligned);
v_color = out_color;
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);
#else
gl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);
#endif
}`},label:{"common.glsl":`uniform mediump float u_zoomLevel;
uniform mediump float u_mapRotation;
uniform mediump float u_mapAligned;
uniform mediump vec2 u_mosaicSize;
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying mediump vec2 v_tex;
varying mediump vec4 v_color;
varying lowp vec4 v_animation;`,"label.frag":`#include <materials/text/text.frag>`,"label.vert":`precision highp float;
#include <materials/vcommon.glsl>
#include <materials/text/common.glsl>
attribute vec4 a_color;
attribute vec4 a_haloColor;
attribute vec4 a_texAndSize;
attribute vec4 a_refSymbolAndPlacementOffset;
attribute vec4 a_glyphData;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
uniform float u_isHaloPass;
uniform float u_isBackgroundPass;
uniform float u_mapRotation;
uniform float u_mapAligned;
float getZ(in float minZoom, in float maxZoom, in float angle) {
float glyphAngle = angle * 360.0 / 254.0;
float mapAngle = u_mapRotation * 360.0 / 254.0;
float diffAngle = min(360.0 - abs(mapAngle - glyphAngle), abs(mapAngle - glyphAngle));
float z = 0.0;
z += u_mapAligned * (2.0 * (1.0 - step(minZoom, u_currentZoom)));
z += u_mapAligned * 2.0 * step(90.0, diffAngle);
z += 2.0 * (1.0 - step(u_currentZoom, maxZoom));
return z;
}
void main()
{
INIT;
float groupMinZoom    = getMinZoom();
float glyphMinZoom    = a_glyphData.x;
float glyphMaxZoom    = a_glyphData.y;
float glyphAngle      = a_glyphData.z;
float a_isBackground  = a_glyphData.w;
float a_minZoom          = max(groupMinZoom, glyphMinZoom);
float a_placementPadding = a_refSymbolAndPlacementOffset.x * EXTRUDE_SCALE_PLACEMENT_PADDING;
vec2  a_placementDir     = unpack_u8_nf32(a_refSymbolAndPlacementOffset.zw);
float a_refSymbolSize    = a_refSymbolAndPlacementOffset.y;
float fontSize           = a_texAndSize.z;
float haloSize           = a_texAndSize.w * OUTLINE_SCALE;
vec2  vertexOffset = a_vertexOffset * OFFSET_PRECISION;
vec3  pos          = vec3(a_pos * POSITION_PRECISION, 1.0);
float z            = getZ(a_minZoom, glyphMaxZoom, glyphAngle);
float fontScale    = fontSize / SDF_FONT_SIZE;
float halfSize     = getSize(a_refSymbolSize) / 2.0;
float animation    = pow(getAnimationState(), vec4(2.0)).r;
float isText = 1.0 - a_isBackground;
float isBackground = u_isBackgroundPass * a_isBackground;
vec4  nonHaloColor = (isBackground + isText) * a_color;
v_color     = animation * ((1.0 - u_isHaloPass) * nonHaloColor + (u_isHaloPass * a_haloColor));
v_opacity   = 1.0;
v_tex       = a_texCoords / u_mosaicSize;
v_edgeDistanceOffset = u_isHaloPass * haloSize / fontScale / MAX_SDF_DISTANCE;
v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;
vec2 placementOffset = a_placementDir * (halfSize + a_placementPadding);
vec3 glyphOffset     = u_displayMat3 * vec3(vertexOffset + placementOffset, 0.0);
vec3 v_pos           = vec3((u_dvsMat3 * pos + glyphOffset).xy, z);
float isHidden = u_isBackgroundPass * isText + (1.0 - u_isBackgroundPass) * a_isBackground;
v_pos.z += 2.0 * isHidden;
gl_Position = vec4(v_pos, 1.0);
#ifdef DEBUG
v_color = vec4(a_color.rgb, z == 0.0 ? 1.0 : 0.645);
#endif
}`},line:{"hittest.glsl":`#include <materials/hittest/common.glsl>
#ifdef HITTEST
attribute vec2 a_pos1;
attribute vec2 a_pos2;
void hittestLine(out lowp vec4 out_color, out highp vec3 out_pos, float halfWidth) {
vec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * POSITION_PRECISION, 1.);
vec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * POSITION_PRECISION, 1.);
vec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * POSITION_PRECISION, 1.);
vec3 outTextureCoords = vec3(getAttributeDataTextureCoords(a_id), 0.0);
float dist = min(distPointSegment(u_hittestPos, pos.xy, pos1.xy),
distPointSegment(u_hittestPos, pos.xy, pos2.xy)) - halfWidth;
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
if (dist >= u_hittestDist) {
out_pos.z += 2.0;
}
out_color = vec4(1. / 255., 0, 0, dist <= 0. ? (1. / 255.) : 0.);
}
#endif`,"common.glsl":`varying lowp vec4 v_color;
varying highp vec3 v_id;
varying mediump vec2 v_normal;
varying mediump float v_lineHalfWidth;
varying lowp float v_opacity;
#ifdef PATTERN
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
#endif
#if defined(PATTERN) || defined(SDF)
varying highp float v_accumulatedDistance;
#endif
#ifdef SDF
varying mediump float v_lineWidthRatio;
#endif`,"line.frag":`precision lowp float;
#include <util/encoding.glsl>
#include <materials/constants.glsl>
#include <materials/symbologyTypeUtils.glsl>
#include <materials/line/common.glsl>
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.frag>
#ifdef HITTEST
void main() {
gl_FragColor = v_color;
}
#else
void main() {
LineData inputs = LineData(
v_color,
v_normal,
v_lineHalfWidth,
v_opacity,
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
v_tlbr,
v_patternSize,
#endif
#ifdef SDF
v_lineWidthRatio,
#endif
#if defined(PATTERN) || defined(SDF)
v_accumulatedDistance,
#endif
#endif
v_id
);
gl_FragColor = shadeLine(inputs);
}
#endif`,"line.vert":`precision highp float;
attribute vec4 a_color;
attribute vec4 a_offsetAndNormal;
attribute vec2 a_accumulatedDistanceAndHalfWidth;
attribute vec4 a_tlbr;
attribute vec4 a_segmentDirection;
attribute vec2 a_aux;
attribute vec2 a_zoomRange;
#include <materials/vcommon.glsl>
#include <materials/symbologyTypeUtils.glsl>
#include <materials/line/common.glsl>
#include <materials/line/hittest.glsl>
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.vert>
#ifdef HITTEST
void draw() {
float aa        = 0.5 * u_antialiasing;
float a_halfWidth = a_accumulatedDistanceAndHalfWidth.y / 16.;
float a_cimHalfWidth = a_aux.x / 16. ;
vec2  a_offset = a_offsetAndNormal.xy / 16.;
float baseWidth = getBaseLineHalfWidth(a_halfWidth, a_cimHalfWidth);
float halfWidth = getLineHalfWidth(baseWidth, aa);
highp vec3 pos  = vec3(0.);
v_color = vec4(0.);
hittestLine(v_color, pos, halfWidth);
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);
}
#else
void draw()
{
highp vec3 pos = vec3(0.);
LineData outputs = buildLine(
pos,
a_id,
a_pos,
a_color,
a_offsetAndNormal.xy / 16.,
a_offsetAndNormal.zw / 16.,
a_accumulatedDistanceAndHalfWidth.x,
a_accumulatedDistanceAndHalfWidth.y / 16.,
a_segmentDirection.w,
a_tlbr,
a_segmentDirection.xy / 16.,
a_aux.x / 16.
);
v_id              = outputs.id;
v_color           = outputs.color;
v_normal          = outputs.normal;
v_lineHalfWidth   = outputs.lineHalfWidth;
v_opacity         = outputs.opacity;
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
v_tlbr          = outputs.tlbr;
v_patternSize   = outputs.patternSize;
#endif
#ifdef SDF
v_lineWidthRatio = outputs.lineWidthRatio;
#endif
#if defined(PATTERN) || defined(SDF)
v_accumulatedDistance = outputs.accumulatedDistance;
#endif
#endif
gl_Position = vec4(clip(outputs.color, pos, getFilterFlags(), a_zoomRange), 1.0);
}
#endif
void main() {
INIT;
draw();
}`},pie:{"pie.common.glsl":`uniform float outlineWidth;
uniform mediump float sectorThreshold;
varying vec3  v_id;
varying vec3  v_pos;
varying vec2  v_offset;
varying vec4  v_color;
varying float v_size;
varying float v_numOfEntries;
varying float v_maxSectorAngle;
varying vec2  v_filteredSectorToColorId[numberOfFields];
varying vec2  v_texCoords;
varying float v_outlineWidth;
varying float v_opacity;
struct FilteredChartInfo {
float endSectorAngle;
int colorId;
};`,"pie.frag":`precision highp float;
#include <util/atan2.glsl>
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/pie/pie.common.glsl>
uniform lowp vec4 colors[numberOfFields];
uniform lowp vec4 defaultColor;
uniform lowp vec4 othersColor;
uniform lowp vec4 outlineColor;
uniform float donutRatio;
lowp vec4 getSectorColor(in int index, in vec2 filteredSectorToColorId[numberOfFields]) {
mediump int colorIndex = int(filteredSectorToColorId[index].y);
return colors[colorIndex];
}
const int OTHER_SECTOR_ID = 255;
#ifdef HITTEST
vec4 getColor() {
float distanceSize = length(v_offset) * v_size;
float donutSize = donutRatio * v_size;
float alpha = step(donutSize, distanceSize) * (1.0 - step(v_size, distanceSize));
return v_color;
}
#else
vec4 getColor() {
float angle = mod(90.0 - C_RAD_TO_DEG * atan2(v_offset.y, v_offset.x), 360.0);
int numOfEntries = int(v_numOfEntries);
float maxSectorAngle = v_maxSectorAngle;
lowp vec4 fillColor = (maxSectorAngle > 0.0 || sectorThreshold > 0.0) ? othersColor : defaultColor;
lowp vec4 prevColor = vec4(0.0);
lowp vec4 nextColor = vec4(0.0);
float startSectorAngle = 0.0;
float endSectorAngle = 0.0;
if (angle < maxSectorAngle) {
for (int index = 0; index < numberOfFields; ++index) {
startSectorAngle = endSectorAngle;
endSectorAngle = v_filteredSectorToColorId[index].x;
if (endSectorAngle > angle) {
fillColor = getSectorColor(index, v_filteredSectorToColorId);
prevColor = sectorThreshold != 0.0 && index == 0 && maxSectorAngle + EPSILON < 360. ? othersColor :
getSectorColor(index > 0 ? index - 1 : numOfEntries - 1, v_filteredSectorToColorId);
nextColor = sectorThreshold != 0.0 && abs(endSectorAngle - maxSectorAngle) < EPSILON && maxSectorAngle + EPSILON < 360. ? othersColor :
getSectorColor(index < numOfEntries - 1 ? index + 1 : 0, v_filteredSectorToColorId);
break;
}
if (index == numOfEntries - 1) {
break;
}
}
} else if (numOfEntries <= 0) {
prevColor = nextColor = fillColor;
} else {
prevColor = getSectorColor(numOfEntries - 1, v_filteredSectorToColorId);
nextColor = getSectorColor(0, v_filteredSectorToColorId);
startSectorAngle = maxSectorAngle;
endSectorAngle = 360.0;
}
lowp vec4 outlineColor = outlineColor;
float offset = length(v_offset);
float distanceSize = offset * v_size;
float distanceToStartSector = (angle - startSectorAngle);
float distanceToEndSector = (endSectorAngle - angle);
float sectorThreshold = 0.75;
float beginSectorAlpha = smoothstep(-sectorThreshold, sectorThreshold, distanceToStartSector * offset);
float endSectorAlpha = smoothstep(-sectorThreshold, sectorThreshold, distanceToEndSector * offset);
fillColor = mix(prevColor, fillColor, beginSectorAlpha) + mix(nextColor, fillColor, endSectorAlpha) - fillColor;
float aaThreshold = 0.75;
float startOfOutline = v_size - v_outlineWidth - aaThreshold;
float donutSize = donutRatio * startOfOutline;
float endOfDonut = donutSize - v_outlineWidth;
float innerCircleAlpha = endOfDonut > aaThreshold ? smoothstep(endOfDonut - aaThreshold, endOfDonut + aaThreshold, distanceSize) : 1.0;
float outerCircleAlpha = 1.0 - smoothstep(v_size - 2.0 * aaThreshold, v_size, distanceSize);
float circleAlpha = innerCircleAlpha * outerCircleAlpha;
if (startOfOutline > 0.0 && v_outlineWidth > 0.25) {
float outlineFactor = smoothstep(startOfOutline - aaThreshold, startOfOutline + aaThreshold, distanceSize);
float innerLineFactor = donutSize - aaThreshold > 0.0 ? 1.0 - smoothstep(donutSize - aaThreshold, donutSize + aaThreshold , distanceSize) : 0.0;
fillColor = mix(fillColor, outlineColor, innerLineFactor + outlineFactor);
}
return v_opacity * circleAlpha * fillColor;
}
#endif
void main()
{
vec4 color = getColor();
#ifdef highlight
color.a = step(1.0 / 255.0, color.a);
#endif
gl_FragColor = color;
}`,"pie.vert":`#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/barycentric.glsl>
#include <materials/vcommon.glsl>
#include <materials/vv.glsl>
#include <materials/attributeData.glsl>
#include <materials/pie/pie.common.glsl>
#include <materials/hittest/common.glsl>
attribute float a_bitSet;
attribute vec2  a_offset;
attribute vec2  a_texCoords;
attribute float a_referenceSize;
attribute vec2  a_zoomRange;
int filterValue(in float sectorAngle,
in int currentIndex,
inout FilteredChartInfo filteredInfo,
inout vec2 filteredSectorToColorId[numberOfFields]) {
if (sectorAngle > sectorThreshold * 360.0) {
filteredInfo.endSectorAngle += sectorAngle;
filteredSectorToColorId[filteredInfo.colorId] = vec2(filteredInfo.endSectorAngle, currentIndex);
++filteredInfo.colorId;
}
return 0;
}
int filterValues(inout vec2 filteredSectorToColorId[numberOfFields],
inout FilteredChartInfo filteredInfo,
in float sectorAngles[numberOfFields]) {
for (int index = 0; index < numberOfFields; ++index) {
float sectorValue = sectorAngles[index];
filterValue(sectorValue, index, filteredInfo, filteredSectorToColorId);
}
return filteredInfo.colorId;
}
float getMarkerSize(inout vec2 offset, inout float outlineSize, in float referenceSize, in float bitSet) {
float outSize = referenceSize * 0.5;
#ifdef VV_SIZE
float r = getSize(referenceSize, currentScale) / referenceSize;
outSize *= r;
offset.xy *= r;
float scaleSymbolProportionally = getBit(bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);
outlineSize *= scaleSymbolProportionally * (r - 1.0) + 1.0;
#endif
return outSize;
}
vec3 getOffset(in vec2 in_offset, float a_bitSet) {
float isMapAligned = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);
vec3  offset       = vec3(in_offset, 0.0);
return getMatrix(isMapAligned) * offset;
}
float filterNaNValues(in float value) {
return value != NAN_MAGIC_NUMBER && value > 0.0 ? value : 0.0;
}
void main()
{
INIT;
vec2  a_offset = a_offset / 16.0;
float outlineSize = outlineWidth;
float a_bitSet = a_bitSet;
float a_referenceSize = a_referenceSize;
vec2 a_texCoords = a_texCoords / 4.0;
float markerSize = getMarkerSize(a_offset, outlineSize, a_referenceSize, a_bitSet);
float filterFlags = getFilterFlags();
vec3  pos         = vec3(a_pos / 10.0, 1.0);
v_opacity      = getOpacity();
v_pos          = displayViewScreenMat3 * pos + getOffset(a_offset, a_bitSet);
v_offset       = sign(a_texCoords - 0.5);
v_size         = markerSize;
v_outlineWidth = outlineSize;
float attributeData[10];
vec4 attributeData3 = getDataDriven0(a_id);
attributeData[0] = filterNaNValues(attributeData3.x);
attributeData[1] = filterNaNValues(attributeData3.y);
attributeData[2] = filterNaNValues(attributeData3.z);
attributeData[3] = filterNaNValues(attributeData3.w);
#if (numberOfFields > 4)
vec4 attributeData4 = getDataDriven1(a_id);
attributeData[4] = filterNaNValues(attributeData4.x);
attributeData[5] = filterNaNValues(attributeData4.y);
attributeData[6] = filterNaNValues(attributeData4.z);
attributeData[7] = filterNaNValues(attributeData4.w);
#endif
#if (numberOfFields > 8)
vec4 attributeData5 = getDataDriven2(a_id);
attributeData[8] = filterNaNValues(attributeData5.x);
attributeData[9] = filterNaNValues(attributeData5.y);
#endif
float sum = 0.0;
for (int i = 0; i < numberOfFields; ++i) {
sum += attributeData[i];
}
float sectorAngles[numberOfFields];
for (int i = 0; i < numberOfFields; ++i) {
sectorAngles[i] = 360.0 * attributeData[i] / sum;
}
vec2 filteredSectorToColorId[numberOfFields];
FilteredChartInfo filteredInfo = FilteredChartInfo(0.0, 0);
int numOfEntries = filterValues(filteredSectorToColorId, filteredInfo, sectorAngles);
v_numOfEntries = float(numOfEntries);
v_maxSectorAngle = filteredInfo.endSectorAngle;
v_filteredSectorToColorId = filteredSectorToColorId;
#ifdef HITTEST
highp vec3 out_pos = vec3(0.0);
v_color            = vec4(0.0);
hittestMarker(v_color, out_pos, viewMat3 * tileMat3 *  pos, v_size);
gl_PointSize = 1.0;
gl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);
#else
gl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);
#endif
}`},shared:{line:{"common.glsl":`#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)
uniform mediump vec2 u_mosaicSize;
varying mediump float v_sampleAlphaOnly;
#endif
struct LineData {
lowp vec4 color;
mediump vec2 normal;
mediump float lineHalfWidth;
lowp float opacity;
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
mediump vec4 tlbr;
mediump vec2 patternSize;
#endif
#ifdef SDF
mediump float lineWidthRatio;
#endif
#if defined(PATTERN) || defined(SDF)
highp float accumulatedDistance;
#endif
#endif
highp vec3 id;
};`,"line.frag":`uniform lowp float u_blur;
#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && !defined(HIGHLIGHT)
#if defined(PATTERN) || defined(SDF)
uniform sampler2D u_texture;
uniform highp float u_pixelRatio;
#endif
#endif
#if defined(SDF) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)
lowp vec4 getLineColor(LineData line) {
mediump float adjustedPatternWidth = line.patternSize.x * 2.0 * line.lineWidthRatio;
mediump float relativeTexX = fract(line.accumulatedDistance / adjustedPatternWidth);
mediump float relativeTexY = 0.5 + 0.25 * line.normal.y;
mediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * line.lineHalfWidth;
return line.opacity * clamp(0.5 - dist, 0.0, 1.0) * line.color;
}
#elif defined(PATTERN) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)
lowp vec4 getLineColor(LineData line) {
mediump float lineHalfWidth = line.lineHalfWidth;
mediump float adjustedPatternHeight = line.patternSize.y * 2.0 * lineHalfWidth / line.patternSize.x;
mediump float relativeTexY = fract(line.accumulatedDistance / adjustedPatternHeight);
mediump float relativeTexX = 0.5 + 0.5 * line.normal.y;
mediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
#ifdef VV_COLOR
if (v_sampleAlphaOnly > 0.5) {
color.rgb = vec3(color.a);
}
#endif
return line.opacity * line.color * color;
}
#else
lowp vec4 getLineColor(LineData line) {
return line.opacity * line.color;
}
#endif
vec4 shadeLine(LineData line)
{
mediump float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(line.lineHalfWidth, THIN_LINE_HALF_WIDTH), 1.0);
mediump float fragDist = length(line.normal) * line.lineHalfWidth;
lowp float alpha = clamp(thinLineFactor * (line.lineHalfWidth - fragDist) / (u_blur + thinLineFactor - 1.0), 0.0, 1.0);
lowp vec4 out_color = getLineColor(line) * alpha;
#ifdef HIGHLIGHT
out_color.a = step(1.0 / 255.0, out_color.a);
#endif
#ifdef ID
if (out_color.a < 1.0 / 255.0) {
discard;
}
out_color = vec4(line.id, 0.0);
#endif
return out_color;
}`,"line.vert":`float getBaseLineHalfWidth(in float lineHalfWidth, in float referenceHalfWidth) {
#ifdef VV_SIZE
float refLineWidth = 2.0 * referenceHalfWidth;
return 0.5 * (lineHalfWidth / max(referenceHalfWidth, EPSILON)) * getSize(refLineWidth);
#else
return lineHalfWidth;
#endif
}
float getLineHalfWidth(in float baseWidth, in float aa) {
float halfWidth = max(baseWidth + aa, 0.45) + 0.1 * aa;
#ifdef HIGHLIGHT
halfWidth = max(halfWidth, 2.0);
#endif
return halfWidth;
}
vec2 getDist(in vec2 offset, in float halfWidth) {
float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(halfWidth, THIN_LINE_HALF_WIDTH), 1.0);
return thinLineFactor * halfWidth * offset;
}
LineData buildLine(
out vec3 out_pos,
in vec3 in_id,
in vec2 in_pos,
in vec4 in_color,
in vec2 in_offset,
in vec2 in_normal,
in float in_accumulatedDist,
in float in_lineHalfWidth,
in float in_bitSet,
in vec4 in_tlbr,
in vec2 in_segmentDirection,
in float in_referenceHalfWidth
)
{
float aa        = 0.5 * u_antialiasing;
float baseWidth = getBaseLineHalfWidth(in_lineHalfWidth, in_referenceHalfWidth);
float halfWidth = getLineHalfWidth(baseWidth, aa);
float z         = 2.0 * step(baseWidth, 0.0);
vec2  dist      = getDist(in_offset, halfWidth);
vec3  offset    = u_displayViewMat3 * vec3(dist, 0.0);
vec3  pos       = u_dvsMat3 * vec3(in_pos * POSITION_PRECISION, 1.0) + offset;
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
vec4  color     = in_color;
float opacity   = 1.0;
#else
vec4  color     = getColor(in_color, in_bitSet, BITSET_GENERIC_LOCK_COLOR);
float opacity   = getOpacity();
#ifdef SDF
const float SDF_PATTERN_HALF_WIDTH = 15.5;
float scaleDash = getBit(in_bitSet, BITSET_LINE_SCALE_DASH);
float lineWidthRatio = (scaleDash * max(halfWidth - 0.55 * u_antialiasing, 0.25) + (1.0 - scaleDash)) / SDF_PATTERN_HALF_WIDTH;
#endif
#endif
#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)
v_sampleAlphaOnly = getBit(in_bitSet, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);
#endif
out_pos = vec3(pos.xy, z);
return LineData(
color,
in_normal,
halfWidth,
opacity,
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
in_tlbr / u_mosaicSize.xyxy,
vec2(in_tlbr.z - in_tlbr.x, in_tlbr.w - in_tlbr.y),
#endif
#ifdef SDF
lineWidthRatio,
#endif
#if defined(PATTERN) || defined(SDF)
in_accumulatedDist * u_zoomFactor + dot(in_segmentDirection, dist),
#endif
#endif
norm(in_id)
);
}`}},text:{"common.glsl":`uniform highp vec2 u_mosaicSize;
varying highp vec3 v_id;
varying mediump vec3 v_pos;
varying lowp float v_opacity;
varying lowp vec4 v_color;
varying highp vec2 v_tex;
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying lowp float v_transparency;`,"hittest.glsl":`#include <materials/hittest/common.glsl>`,"text.frag":`precision mediump float;
#include <materials/text/common.glsl>
uniform lowp sampler2D u_texture;
#ifdef HITTEST
vec4 getColor() {
return v_color;
}
#else
vec4 getColor()
{
float SDF_CUTOFF = (2.0 / 8.0);
float SDF_BASE_EDGE_DIST = 1.0 - SDF_CUTOFF;
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float edge = SDF_BASE_EDGE_DIST - v_edgeDistanceOffset;
#ifdef HIGHLIGHT
edge /= 2.0;
#endif
lowp float aa = v_antialiasingWidth;
lowp float alpha = smoothstep(edge - aa, edge + aa, dist);
return alpha * v_color * v_opacity;
}
#endif
void main()
{
gl_FragColor = getColor();
}`,"text.vert":`precision highp float;
#include <materials/utils.glsl>
#include <materials/vcommon.glsl>
#include <materials/text/common.glsl>
#include <materials/text/hittest.glsl>
attribute vec4 a_color;
attribute vec4 a_haloColor;
attribute vec4 a_texFontSize;
attribute vec4 a_aux;
attribute vec2 a_zoomRange;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
uniform float u_isHaloPass;
uniform float u_isBackgroundPass;
float getTextSize(inout vec2 offset, inout float baseSize, in float referenceSize) {
#ifdef VV_SIZE
float r = getSize(referenceSize) / referenceSize;
baseSize *= r;
offset.xy *= r;
return baseSize;
#endif
return baseSize;
}
void main()
{
INIT;
float a_isBackground  = a_aux.y;
float a_referenceSize = a_aux.z * a_aux.z / 256.0;
float a_bitSet        = a_aux.w;
float a_fontSize      = a_texFontSize.z;
vec2  a_offset        = a_vertexOffset * OFFSET_PRECISION;
vec3  in_pos        = vec3(a_pos * POSITION_PRECISION, 1.0);
float fontSize      = getTextSize(a_offset, a_fontSize, a_referenceSize);
float fontScale     = fontSize / SDF_FONT_SIZE;
vec3  offset        = getRotation() * vec3(a_offset, 0.0);
mat3  extrudeMatrix = getBit(a_bitSet, 0) == 1.0 ? u_displayViewMat3 : u_displayMat3;
float isText = 1.0 - a_isBackground;
float isBackground = u_isBackgroundPass * a_isBackground;
vec4  nonHaloColor  = (isBackground * a_color) + (isText * getColor(a_color, a_bitSet, 1));
v_color   = u_isHaloPass * a_haloColor + (1.0 - u_isHaloPass) * nonHaloColor;
v_opacity = getOpacity();
v_id      = norm(a_id);
v_tex     = a_texCoords / u_mosaicSize;
v_pos     = u_dvsMat3 * in_pos + extrudeMatrix * offset;
float isHidden = u_isBackgroundPass * isText + (1.0 - u_isBackgroundPass) * a_isBackground;
v_pos.z += 2.0 * isHidden;
v_edgeDistanceOffset = u_isHaloPass * OUTLINE_SCALE * a_texFontSize.w / fontScale / MAX_SDF_DISTANCE;
v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;
#ifdef HITTEST
highp vec3 out_pos  = vec3(0.);
v_color = vec4(0.);
hittestMarker(v_color, out_pos, u_viewMat3 * u_tileMat3 *  vec3(a_pos * POSITION_PRECISION, 1.0)
+ u_tileMat3 * offset, fontSize / 2.);
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, out_pos, getFilterFlags(), a_zoomRange), 1.0);
#else
gl_Position =  vec4(clip(v_color, v_pos, getFilterFlags(), a_zoomRange), 1.0);
#endif
}`},"symbologyTypeUtils.glsl":`#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE
#define SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_SIMPLE || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE
#define SYMBOLOGY_TYPE_IS_SIMPLE_LIKE
#endif`,"vv.glsl":`#if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)
#define VV_SIZE
#endif
#if defined(VV_COLOR) || defined(VV_SIZE) || defined(VV_OPACITY) || defined(VV_ROTATION)
#define VV
#endif
#ifdef VV_COLOR
uniform highp float colorValues[8];
uniform vec4 colors[8];
#endif
#ifdef VV_SIZE_MIN_MAX_VALUE
uniform highp vec4 minMaxValueAndSize;
#endif
#ifdef VV_SIZE_SCALE_STOPS
uniform highp float values[8];
uniform float sizes[8];
#endif
#ifdef VV_SIZE_FIELD_STOPS
uniform highp float values[8];
uniform float sizes[8];
#endif
#ifdef VV_SIZE_UNIT_VALUE
uniform highp float unitMeterRatio;
#endif
#ifdef VV_OPACITY
uniform highp float opacityValues[8];
uniform float opacities[8];
#endif
#ifdef VV_ROTATION
uniform lowp float rotationType;
#endif
bool isNan(float val) {
return (val == NAN_MAGIC_NUMBER);
}
#ifdef VV_SIZE_MIN_MAX_VALUE
float getVVMinMaxSize(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
float interpolationRatio = (sizeValue  - minMaxValueAndSize.x) / (minMaxValueAndSize.y - minMaxValueAndSize.x);
interpolationRatio = clamp(interpolationRatio, 0.0, 1.0);
return minMaxValueAndSize.z + interpolationRatio * (minMaxValueAndSize.w - minMaxValueAndSize.z);
}
#endif
#ifdef VV_SIZE_SCALE_STOPS
float getVVScaleStopsSize(float currentScale) {
float outSize;
if (currentScale <= values[0]) {
outSize = sizes[0];
} else {
if (currentScale >= values[7]) {
outSize = sizes[7];
} else {
int index;
index = -1;
for (int i = 0; i < 8; i++) {
if (values[i] > currentScale) {
index = i;
break;
}
}
int prevIndex = index - 1;
float a = currentScale - values[prevIndex];
float b = values[index] - values[prevIndex];
outSize = mix(sizes[prevIndex], sizes[index], a / b);
}
}
return outSize;
}
#endif
#ifdef VV_SIZE_FIELD_STOPS
const int VV_SIZE_N = 8;
float getVVStopsSize(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
if (sizeValue <= values[0]) {
return sizes[0];
}
if (sizeValue >= values[VV_SIZE_N - 1]) {
return sizes[VV_SIZE_N - 1];
}
for (int i = 1; i < VV_SIZE_N; ++i) {
if (values[i] >= sizeValue) {
float f = (sizeValue - values[i-1]) / (values[i] - values[i-1]);
return mix(sizes[i-1], sizes[i], f);
}
}
return sizes[VV_SIZE_N - 1];
}
#endif
#ifdef VV_SIZE_UNIT_VALUE
float getVVUnitValue(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
return sizeValue * (metersPerSRUnit / unitMeterRatio);
}
#endif
#ifdef VV_OPACITY
const int VV_OPACITY_N = 8;
float getVVOpacity(float opacityValue) {
if (isNan(opacityValue)) {
return 1.0;
}
if (opacityValue <= opacityValues[0]) {
return opacities[0];
}
for (int i = 1; i < VV_OPACITY_N; ++i) {
if (opacityValues[i] >= opacityValue) {
float f = (opacityValue - opacityValues[i-1]) / (opacityValues[i] - opacityValues[i-1]);
return mix(opacities[i-1], opacities[i], f);
}
}
return opacities[VV_OPACITY_N - 1];
}
#endif
#ifdef VV_ROTATION
mat4 getVVRotation(float rotationValue) {
if (isNan(rotationValue)) {
return mat4(1, 0, 0, 0,
0, 1, 0, 0,
0, 0, 1, 0,
0, 0, 0, 1);
}
float rotation = rotationValue;
if (rotationType == 1.0) {
rotation = 90.0 - rotation;
}
float angle = C_DEG_TO_RAD * rotation;
float sinA = sin(angle);
float cosA = cos(angle);
return mat4(cosA, sinA, 0, 0,
-sinA,  cosA, 0, 0,
0,     0, 1, 0,
0,     0, 0, 1);
}
mat3 getVVRotationMat3(float rotationValue) {
if (isNan(rotationValue)) {
return mat3(1, 0, 0,
0, 1, 0,
0, 0, 1);
}
float rotation = rotationValue;
if (rotationType == 1.0) {
rotation = 90.0 - rotation;
}
float angle = C_DEG_TO_RAD * -rotation;
float sinA = sin(angle);
float cosA = cos(angle);
return mat3(cosA, -sinA, 0,
sinA, cosA, 0,
0,    0,    1);
}
#endif
#ifdef VV_COLOR
const int VV_COLOR_N = 8;
vec4 getVVColor(float colorValue, vec4 fallback, float isColorLocked) {
if (isNan(colorValue) || isColorLocked == 1.0) {
return fallback;
}
if (colorValue <= colorValues[0]) {
return colors[0];
}
for (int i = 1; i < VV_COLOR_N; ++i) {
if (colorValues[i] >= colorValue) {
float f = (colorValue - colorValues[i-1]) / (colorValues[i] - colorValues[i-1]);
return mix(colors[i-1], colors[i], f);
}
}
return colors[VV_COLOR_N - 1];
}
#endif
float getVVSize(in float size, in float vvSize, in float currentScale)  {
#ifdef VV_SIZE_MIN_MAX_VALUE
return getVVMinMaxSize(vvSize, size);
#elif defined(VV_SIZE_SCALE_STOPS)
float outSize = getVVScaleStopsSize(currentScale);
return isNan(outSize) ? size : outSize;
#elif defined(VV_SIZE_FIELD_STOPS)
float outSize = getVVStopsSize(vvSize, size);
return isNan(outSize) ? size : outSize;
#elif defined(VV_SIZE_UNIT_VALUE)
return getVVUnitValue(vvSize, size);
#else
return size;
#endif
}`,"utils.glsl":`float rshift(in float u32, in int amount) {
return floor(u32 / pow(2.0, float(amount)));
}
float getBit(in float bitset, in int bitIndex) {
float offset = pow(2.0, float(bitIndex));
return mod(floor(bitset / offset), 2.0);
}
const int maxHighlightReasons = 6;
float getFilterBit(in float bitset, in int bitIndex) {
return getBit(bitset, bitIndex + maxHighlightReasons);
}
float getHighlightBit(in float bitset, in int bitIndex) {
return getBit(bitset, bitIndex);
}
highp vec3 unpackDisplayIdTexel(in highp vec3 bitset) {
float isAggregate = getBit(bitset.b, 7);
return (1.0 - isAggregate) * bitset + isAggregate * (vec3(bitset.rgb) - vec3(0.0, 0.0, float(0x80)));
}
vec4 unpack(in float u32) {
float r = mod(rshift(u32, 0), 255.0);
float g = mod(rshift(u32, 8), 255.0);
float b = mod(rshift(u32, 16), 255.0);
float a = mod(rshift(u32, 24), 255.0);
return vec4(r, g, b, a);
}
vec3 norm(in vec3 v) {
return v /= 255.0;
}
vec4 norm(in vec4 v) {
return v /= 255.0;
}
float max4(vec4 target) {
return max(max(max(target.x, target.y), target.z), target.w);
}
vec2 unpack_u8_nf32(vec2 bytes) {
return (bytes - 127.0) / 127.0;
}
highp float rand(in vec2 co) {
highp float a = 12.9898;
highp float b = 78.233;
highp float c = 43758.5453;
highp float dt = dot(co, vec2(a,b));
highp float sn = mod(dt, 3.14);
return fract(sin(sn) * c);
}`,"vcommon.glsl":`#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/attributeData.glsl>
#include <materials/vv.glsl>
#include <materials/barycentric.glsl>
attribute vec2 a_pos;
attribute highp vec3 a_id;
uniform highp mat3 displayViewScreenMat3;
uniform highp mat3 displayViewMat3;
uniform highp mat3 displayMat3;
uniform highp mat3 tileMat3;
uniform highp mat3 viewMat3;
uniform highp float pixelRatio;
uniform mediump float zoomFactor;
uniform mediump float antialiasing;
uniform mediump float currentScale;
uniform mediump float currentZoom;
uniform mediump float metersPerSRUnit;
uniform mediump float activeReasons;
uniform mediump float highlightAll;
vec4 VV_ADATA = vec4(0.0);
void loadVisualVariableData(inout vec4 target) {
target.rgba = getVisualVariableData(a_id);
}
#ifdef VV
#define INIT loadVisualVariableData(VV_ADATA)
#else
#define INIT
#endif
vec4 getColor(in vec4 a_color, in float a_bitSet, int index) {
#ifdef VV_COLOR
float isColorLocked   = getBit(a_bitSet, index);
return getVVColor(VV_ADATA[ATTR_VV_COLOR], a_color, isColorLocked);
#else
return a_color;
#endif
}
float getOpacity() {
#ifdef VV_OPACITY
return getVVOpacity(VV_ADATA[ATTR_VV_OPACITY]);
#else
return 1.0;
#endif
}
float getSize(in float in_size, in float currentScale) {
#ifdef VV_SIZE
return getVVSize(in_size, VV_ADATA[ATTR_VV_SIZE], currentScale);
#else
return in_size;
#endif
}
mat3 getRotation() {
#ifdef VV_ROTATION
return getVVRotationMat3(mod(VV_ADATA[ATTR_VV_ROTATION], 360.0));
#else
return mat3(1.0);
#endif
}
float getFilterFlags() {
#ifdef IGNORES_SAMPLER_PRECISION
return ceil(getFilterData(a_id).x * 255.0);
#else
return getFilterData(a_id).x * 255.0;
#endif
}
vec4 getAnimationState() {
return getAnimation(a_id);
}
float getMinZoom() {
vec4 data0 = getFilterData(a_id) * 255.0;
return data0.g;
}
mat3 getMatrixNoDisplay(float isMapAligned) {
return isMapAligned * viewMat3 * tileMat3 + (1.0 - isMapAligned) * tileMat3;
}
mat3 getMatrix(float isMapAligned) {
return isMapAligned * displayViewMat3 + (1.0 - isMapAligned) * displayMat3;
}
float checkHighlightBit(float filterFlags, int index) {
return getHighlightBit(filterFlags, index) * getBit(activeReasons, index);
}
float checkHighlight(float filterFlags) {
float result = checkHighlightBit(filterFlags, 0);
for (int i = 1; i < maxHighlightReasons; i++) {
result = result + checkHighlightBit(filterFlags, i);
}
return step(0.1, result + highlightAll);
}
vec3 clip(inout vec4 color, inout vec3 pos, in float filterFlags, in vec2 minMaxZoom) {
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 0));
#ifdef inside
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 1));
#elif defined(outside)
pos.z += 2.0 * getFilterBit(filterFlags, 1);
#elif defined(highlight)
pos.z += 2.0 * (1.0 - checkHighlight(filterFlags));
#endif
pos.z += 2.0 * (step(minMaxZoom.y, currentZoom) + (1.0 - step(minMaxZoom.x, currentZoom)));
return pos;
}`},"post-processing":{dra:{"dra.frag":`precision mediump float;
uniform sampler2D u_minColor;
uniform sampler2D u_maxColor;
uniform sampler2D u_texture;
varying vec2 v_uv;
void main() {
vec4 minColor = texture2D(u_minColor, vec2(0.5));
vec4 maxColor = texture2D(u_maxColor, vec2(0.5));
vec4 color = texture2D(u_texture, v_uv);
vec3 minColorUnpremultiply = minColor.rgb / minColor.a;
vec3 maxColorUnpremultiply = maxColor.rgb / maxColor.a;
vec3 colorUnpremultiply = color.rgb / color.a;
vec3 range = maxColorUnpremultiply - minColorUnpremultiply;
gl_FragColor = vec4(color.a * (colorUnpremultiply - minColorUnpremultiply) / range, color.a);
}`,"min-max":{"min-max.frag":`#extension GL_EXT_draw_buffers : require
precision mediump float;
#define CELL_SIZE 2
uniform sampler2D u_minTexture;
uniform sampler2D u_maxTexture;
uniform vec2 u_srcResolution;
uniform vec2 u_dstResolution;
varying vec2 v_uv;
void main() {
vec2 srcPixel = floor(gl_FragCoord.xy) * float(CELL_SIZE);
vec2 onePixel = vec2(1.0) / u_srcResolution;
vec2 uv = (srcPixel + 0.5) / u_srcResolution;
vec4 minColor = vec4(1.0);
vec4 maxColor = vec4(0.0);
for (int y = 0; y < CELL_SIZE; ++y) {
for (int x = 0; x < CELL_SIZE; ++x) {
vec2 offset = uv + vec2(x, y) * onePixel;
minColor = min(minColor, texture2D(u_minTexture, offset));
maxColor = max(maxColor, texture2D(u_maxTexture, offset));
}
}
gl_FragData[0] = minColor;
gl_FragData[1] = maxColor;
}`}},"edge-detect":{"frei-chen":{"frei-chen.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform vec2 u_texSize;
varying vec2 v_uv;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[9];
const mat3 g0 = mat3( 0.3535533845424652, 0, -0.3535533845424652, 0.5, 0, -0.5, 0.3535533845424652, 0, -0.3535533845424652 );
const mat3 g1 = mat3( 0.3535533845424652, 0.5, 0.3535533845424652, 0, 0, 0, -0.3535533845424652, -0.5, -0.3535533845424652 );
const mat3 g2 = mat3( 0, 0.3535533845424652, -0.5, -0.3535533845424652, 0, 0.3535533845424652, 0.5, -0.3535533845424652, 0 );
const mat3 g3 = mat3( 0.5, -0.3535533845424652, 0, -0.3535533845424652, 0, 0.3535533845424652, 0, 0.3535533845424652, -0.5 );
const mat3 g4 = mat3( 0, -0.5, 0, 0.5, 0, 0.5, 0, -0.5, 0 );
const mat3 g5 = mat3( -0.5, 0, 0.5, 0, 0, 0, 0.5, 0, -0.5 );
const mat3 g6 = mat3( 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.6666666865348816, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204 );
const mat3 g7 = mat3( -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, 0.6666666865348816, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408 );
const mat3 g8 = mat3( 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408 );
void main() {
G[0] = g0,
G[1] = g1,
G[2] = g2,
G[3] = g3,
G[4] = g4,
G[5] = g5,
G[6] = g6,
G[7] = g7,
G[8] = g8;
mat3 I;
float cnv[9];
vec3 sample;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D(u_colorTexture, v_uv + texel * vec2(i - 1.0,j - 1.0)).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 9; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
float M = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]);
float S = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + (cnv[8] + M);
gl_FragColor = vec4(vec3(sqrt(M / S)), texture2D(u_colorTexture, v_uv).a);
}`},sobel:{"sobel.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
uniform vec2 u_texSize;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[2];
const mat3 g0 = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );
const mat3 g1 = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );
void main() {
mat3 I;
float cnv[2];
vec3 sample;
G[0] = g0;
G[1] = g1;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 2; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
gl_FragColor = vec4(vec3(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1])), texture2D(u_colorTexture, v_uv).a);
}`}},"edge-enhance":{"edge-enhance.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
uniform vec2 u_texSize;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[2];
const mat3 g0 = mat3( 1.0, 0.0, -1.0, 1.0, 0.0, -1.0, 1.0, 0.0, -1.0 );
const mat3 g1 = mat3( 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, -1.0, -1.0, -1.0 );
void main() {
mat3 I;
float cnv[2];
vec3 sample;
G[0] = g0;
G[1] = g1;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 2; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
vec4 color = texture2D(u_colorTexture, v_uv);
gl_FragColor = vec4(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1]) * color);
}`},filterEffect:{"filterEffect.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform mat4 u_coefficients;
varying vec2 v_uv;
void main() {
vec4 color = texture2D(u_colorTexture, v_uv);
vec4 rgbw = u_coefficients * vec4(color.a > 0.0 ? color.rgb / color.a : vec3(0.0), 1.0);
float a = color.a;
gl_FragColor = vec4(a * rgbw.rgb, a);
}`},pp:{"pp.vert":`precision mediump float;
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
gl_Position = vec4(a_position, 0.0, 1.0);
v_uv = (a_position + 1.0) / 2.0;
}`}},raster:{common:{"projection.glsl":`uniform sampler2D u_transformGrid;
uniform vec2 u_transformSpacing;
uniform vec2 u_transformGridSize;
uniform vec2 u_targetImageSize;
vec2 projectPixelLocation(vec2 coords) {
#ifdef LOOKUP_PROJECTION
vec4 pv = texture2D(u_transformGrid, coords);
return vec2(pv.r, pv.g);
#endif
vec2 index_image = floor(coords * u_targetImageSize);
vec2 oneTransformPixel = vec2(0.25 / u_transformGridSize.s, 1.0 / u_transformGridSize.t);
vec2 index_transform = floor(index_image / u_transformSpacing) / u_transformGridSize;
vec2 pos = fract((index_image + vec2(0.5, 0.5)) / u_transformSpacing);
vec2 srcLocation;
vec2 transform_location = index_transform + oneTransformPixel * 0.5;
if (pos.s <= pos.t) {
vec4 ll_abc = texture2D(u_transformGrid, vec2(transform_location.s, transform_location.t));
vec4 ll_def = texture2D(u_transformGrid, vec2(transform_location.s + oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ll_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ll_def.rgb, vec3(pos, 1.0));
} else {
vec4 ur_abc = texture2D(u_transformGrid, vec2(transform_location.s + 2.0 * oneTransformPixel.s, transform_location.t));
vec4 ur_def = texture2D(u_transformGrid, vec2(transform_location.s + 3.0 * oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ur_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ur_def.rgb, vec3(pos, 1.0));
}
return srcLocation;
}`,"common.glsl":`uniform sampler2D u_image;
uniform int u_bandCount;
uniform bool u_flipY;
uniform float u_opacity;
uniform int u_resampling;
uniform vec2 u_srcImageSize;
#ifdef APPLY_PROJECTION
#include <raster/common/projection.glsl>
#endif
#ifdef BICUBIC
#include <filtering/bicubic.glsl>
#endif
#ifdef BILINEAR
#include <filtering/bilinear.glsl>
#endif
vec2 getPixelLocation(vec2 coords) {
vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;
#ifdef APPLY_PROJECTION
targetLocation = projectPixelLocation(targetLocation);
#endif
return targetLocation;
}
bool isOutside(vec2 coords){
if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {
return true;
} else {
return false;
}
}
vec4 getPixel(vec2 pixelLocation) {
#ifdef BICUBIC
vec4 color = sampleBicubicBSpline(u_image, pixelLocation, u_srcImageSize);
#elif defined(BILINEAR)
vec4 color = sampleBilinear(u_image, pixelLocation, u_srcImageSize);
#else
vec4 color = texture2D(u_image, pixelLocation);
#endif
return color;
}`},flow:{"getDisplayOpacity.glsl":`uniform float u_displayOpacity;
float getDisplayOpacity() {
return u_displayOpacity;
}`,"getFadeOpacity.glsl":`uniform float u_decayRate;
uniform float u_fadeToZero;
float getFadeOpacity(float x) {
float cutOff = mix(0.0, exp(-u_decayRate), u_fadeToZero);
return (exp(-u_decayRate * x) - cutOff) / (1.0 - cutOff);
}`,"getFragmentColor.glsl":`vec4 getFragmentColor(vec4 color, float dist, float size, float featheringSize) {
float featheringStart = clamp(0.5 - featheringSize / size, 0.0, 0.5);
if (dist > featheringStart) {
color *= 1.0 - (dist - featheringStart) / (0.5 - featheringStart);
}
return color;
}`,"getRangeOpacity.glsl":`uniform float u_startTime;
uniform float u_endTime;
float getRangeOpacity(float vertexTime, float cycle, float totalTime, float flowSpeed) {
float vTime = (vertexTime + cycle * totalTime) / flowSpeed;
if (vTime < u_startTime) {
return 0.0;
}
if (vTime > u_endTime) {
return 0.0;
}
return 1.0;
}`,"getTimeSeed.glsl":`float getTimeSeed(float firstTime, float lastTime) {
return mod(firstTime * 3.634f + lastTime * 5.153f + 7.381f, 1.0f);
}`,imagery:{"imagery.frag":`precision highp float;
varying vec2 v_texcoord;
uniform sampler2D u_texture;
uniform float u_Min;
uniform float u_Max;
uniform float u_featheringSize;
#include <raster/flow/vv.glsl>
float getIntensity(float v) {
return u_Min + v * (u_Max - u_Min);
}
void main(void) {
vec4 sampled = texture2D(u_texture, v_texcoord);
float intensity = getIntensity(sampled.r);
gl_FragColor = getColor(intensity);
gl_FragColor.a *= getOpacity(sampled.r);
gl_FragColor.a *= sampled.a;
gl_FragColor.rgb *= gl_FragColor.a;
}`,"imagery.vert":`attribute vec2 a_position;
attribute vec2 a_texcoord;
uniform mat3 u_dvsMat3;
varying vec2 v_texcoord;
void main(void) {
vec2 xy = (u_dvsMat3 * vec3(a_position, 1.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_texcoord = a_texcoord;
}`},particles:{"particles.frag":`precision highp float;
varying vec4 v_color;
varying vec2 v_texcoord;
varying float v_size;
uniform float u_featheringSize;
#include <raster/flow/getFragmentColor.glsl>
void main(void) {
gl_FragColor = getFragmentColor(v_color, length(v_texcoord - 0.5), v_size, u_featheringSize);
}`,"particles.vert":`attribute vec4 a_xyts0;
attribute vec4 a_xyts1;
attribute vec4 a_typeIdFirstTimeLastTime;
attribute vec4 a_extrudeInfo;
uniform mat3 u_dvsMat3;
uniform mat3 u_displayViewMat3;
uniform float u_time;
uniform float u_trailLength;
uniform float u_flowSpeed;
varying vec4 v_color;
varying vec2 v_texcoord;
varying float v_size;
uniform float u_featheringSize;
uniform float u_introFade;
#include <raster/flow/vv.glsl>
#include <raster/flow/getFadeOpacity.glsl>
#include <raster/flow/getDisplayOpacity.glsl>
#include <raster/flow/getTimeSeed.glsl>
void main(void) {
float firstTime = a_typeIdFirstTimeLastTime.z;
float lastTime = a_typeIdFirstTimeLastTime.w;
float duration = lastTime - firstTime;
vec2 position0 = a_xyts0.xy;
float t0 = a_xyts0.z - firstTime;
float speed0 = a_xyts0.w;
vec2 position1 = a_xyts1.xy;
float t1 = a_xyts1.z - firstTime;
float speed1 = a_xyts1.w;
float type = a_typeIdFirstTimeLastTime.x;
float id = a_typeIdFirstTimeLastTime.y;
float seed = getTimeSeed(firstTime, lastTime);
vec2 e0 = a_extrudeInfo.xy;
vec2 e1 = a_extrudeInfo.zw;
float animationPeriod = duration + u_trailLength;
float scaledTime = u_time * u_flowSpeed;
float t = mod(scaledTime, animationPeriod);
float fUnclamped = (t - t0) / (t1 - t0);
float f = clamp(fUnclamped, 0.0, 1.0);
float clampedTime = mix(t0, t1, f);
float speed = mix(speed0, speed1, f);
vec2 extrude;
vec2 position;
float fadeOpacity;
float introOpacity;
if (type == 2.0) {
if (fUnclamped < 0.0 || (fUnclamped > 1.0 && t1 != duration)) {
gl_Position = vec4(0.0, 0.0, -2.0, 1.0);
return;
}
vec2 ortho = mix(e0, e1, f);
vec2 parallel;
parallel = normalize(position1 - position0) * 0.5;
if (id == 1.0) {
extrude = ortho;
v_texcoord = vec2(0.5, 0.0);
} else if (id == 2.0) {
extrude = -ortho;
v_texcoord = vec2(0.5, 1.0);
} else if (id == 3.0) {
extrude = ortho + parallel;
v_texcoord = vec2(1.0, 0.0);
} else if (id == 4.0) {
extrude = -ortho + parallel;
v_texcoord = vec2(1.0, 1.0);
}
fadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);
introOpacity = 1.0 - exp(-clampedTime);
v_size = getSize(speed);
v_color = getColor(speed);
v_color.a *= getOpacity(speed);
position = mix(position0, position1, f);
} else {
if (fUnclamped < 0.0) {
gl_Position = vec4(0.0, 0.0, -2.0, 1.0);
return;
}
if (id == 1.0) {
extrude = e0;
v_texcoord = vec2(0.5, 0.0);
fadeOpacity = getFadeOpacity((t - t0) / u_trailLength);
introOpacity = 1.0 - exp(-t0);
v_size = getSize(speed0);
v_color = getColor(speed0);
v_color.a *= getOpacity(speed0);
position = position0;
} else if (id == 2.0) {
extrude = -e0;
v_texcoord = vec2(0.5, 1.0);
fadeOpacity = getFadeOpacity((t - t0) / u_trailLength);
introOpacity = 1.0 - exp(-t0);
v_size = getSize(speed0);
v_color = getColor(speed0);
v_color.a *= getOpacity(speed0);
position = position0;
} else if (id == 3.0) {
extrude = mix(e0, e1, f);
v_texcoord = vec2(0.5, 0.0);
fadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);
introOpacity = 1.0 - exp(-clampedTime);
v_size = getSize(speed);
v_color = getColor(speed);
v_color.a *= getOpacity(speed);
position = mix(position0, position1, f);
} else if (id == 4.0) {
extrude = -mix(e0, e1, f);
v_texcoord = vec2(0.5, 1.0);
fadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);
introOpacity = 1.0 - exp(-clampedTime);
v_size = getSize(speed);
v_color = getColor(speed);
v_color.a *= getOpacity(speed);
position = mix(position0, position1, f);
}
}
vec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(extrude * v_size, 0.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_color.a *= fadeOpacity;
v_color.a *= mix(1.0, introOpacity, u_introFade);
v_color.a *= getDisplayOpacity();
v_color.rgb *= v_color.a;
}`},streamlines:{"streamlines.frag":`precision highp float;
varying float v_side;
varying float v_time;
varying float v_firstTime;
varying float v_lastTime;
varying vec4 v_color;
varying float v_size;
uniform float u_time;
uniform float u_trailLength;
uniform float u_flowSpeed;
uniform float u_featheringSize;
uniform float u_introFade;
#include <raster/flow/getFragmentColor.glsl>
#include <raster/flow/getFadeOpacity.glsl>
#include <raster/flow/getRangeOpacity.glsl>
#include <raster/flow/getDisplayOpacity.glsl>
#include <raster/flow/getTimeSeed.glsl>
void main(void) {
float totalTime = v_lastTime - v_firstTime;
float trailLength = u_trailLength;
float period = totalTime + trailLength;
float seed = getTimeSeed(v_firstTime, v_lastTime);
float t = mod(seed * period + u_time * u_flowSpeed, period) + v_firstTime - v_time;
float fading = t / trailLength;
vec4 color = v_color;
color *= getDisplayOpacity();
color *= fading < 0.0 ? 0.0 : getFadeOpacity(fading);
gl_FragColor = getFragmentColor(color, length((v_side + 1.0) / 2.0 - 0.5), v_size, u_featheringSize);
}`,"streamlines.vert":`attribute vec3 a_positionAndSide;
attribute vec3 a_timeInfo;
attribute vec2 a_extrude;
attribute float a_speed;
uniform mat3 u_dvsMat3;
uniform mat3 u_displayViewMat3;
varying float v_time;
varying float v_firstTime;
varying float v_lastTime;
varying vec4 v_color;
varying float v_side;
varying float v_size;
uniform float u_featheringSize;
#include <raster/flow/vv.glsl>
void main(void) {
vec4 lineColor = getColor(a_speed);
float lineOpacity = getOpacity(a_speed);
float lineSize = getSize(a_speed);
vec2 position = a_positionAndSide.xy;
v_side = a_positionAndSide.z;
vec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(a_extrude * lineSize, 0.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_time = a_timeInfo.x;
v_firstTime = a_timeInfo.y;
v_lastTime = a_timeInfo.z;
v_color = lineColor;
v_color.a *= lineOpacity;
v_color.rgb *= v_color.a;
v_size = lineSize;
}`},"vv.glsl":`#define MAX_STOPS 8
#ifdef VV_COLOR
uniform float u_color_stops[MAX_STOPS];
uniform vec4 u_color_values[MAX_STOPS];
uniform int u_color_count;
#else
uniform vec4 u_color;
#endif
#ifdef VV_OPACITY
uniform float u_opacity_stops[MAX_STOPS];
uniform float u_opacity_values[MAX_STOPS];
uniform int u_opacity_count;
#else
uniform float u_opacity;
#endif
#ifdef VV_SIZE
uniform float u_size_stops[MAX_STOPS];
uniform float u_size_values[MAX_STOPS];
uniform int u_size_count;
#else
uniform float u_size;
#endif
uniform float u_featheringOffset;
vec4 getColor(float x) {
#ifdef VV_COLOR
vec4 color = u_color_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_color_count) {
break;
}
float x1 = u_color_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_color_stops[i];
vec4 y2 = u_color_values[i];
if (x < x2) {
vec4 y1 = u_color_values[i - 1];
color = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
color = y2;
}
}
}
#else
vec4 color = u_color;
#endif
return color;
}
float getOpacity(float x) {
#ifdef VV_OPACITY
float opacity = u_opacity_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_opacity_count) {
break;
}
float x1 = u_opacity_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_opacity_stops[i];
float y2 = u_opacity_values[i];
if (x < x2) {
float y1 = u_opacity_values[i - 1];
opacity = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
opacity = y2;
}
}
}
#else
float opacity = u_opacity;
#endif
return opacity;
}
float getSize(float x) {
#ifdef VV_SIZE
float size = u_size_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_size_count) {
break;
}
float x1 = u_size_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_size_stops[i];
float y2 = u_size_values[i];
if (x < x2) {
float y1 = u_size_values[i - 1];
size = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
size = y2;
}
}
}
#else
float size = u_size;
#endif
return size + 2.0 * u_featheringSize * u_featheringOffset;
}`},reproject:{"reproject.frag":`precision mediump float;
varying vec2 v_texcoord;
#include <raster/common/common.glsl>
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
gl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;
}`,"reproject.vert":`precision mediump float;
attribute vec2 a_position;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_position;
gl_Position = vec4(2.0 * (a_position - 0.5), 0.0, 1.0);
}`}},stencil:{"stencil.frag":`void main() {
gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}`,"stencil.vert":`attribute vec2 a_pos;
uniform mat3 u_worldExtent;
void main() {
gl_Position = vec4(u_worldExtent * vec3(a_pos, 1.0), 1.0);
}`},test:{"TestShader.frag":`precision highp float;
#include <test/TestShader.common.glsl>
void main() {
if (v_offset.x > -.5 && v_offset.y > -.5 && v_offset.x < .5 && v_offset.y < .5) {
discard;
}
#ifdef RETURN_RED
gl_FragColor = vec4(1., 0., 0., 1.);
#else
gl_FragColor = v_color;
#endif
}`,"TestShader.common.glsl":`#ifndef RETURN_RED
varying    vec4      v_color;
#endif
varying    vec2      v_offset;`,"TestShader.vert":`const float POS_PRECISION_FACTOR = 10.;
const float OFFSET_PRECISION_FACTOR = 10.;
const float SIZE_PRECISION_FACTOR = 10.;
attribute  vec2      a_pos_packed;
attribute  vec2      a_offset_packed;
attribute  float     a_size_packed;
#ifdef DATA_DRIVEN_COLOR
const float u_dataDrivenColor_validValues[4] = float[4](0., 0., 1., 0.);
uniform    vec4      u_dataDrivenColor_colorFallback;
uniform    vec4      u_dataDrivenColor_color;
#endif
uniform    float     u_view_zoomLevel;
#include <test/TestShader.common.glsl>
#ifdef DATA_DRIVEN_COLOR
vec4 getColor(float value) {
int index = -1;
for (int i = 0; i < 4; i++) {
if (u_dataDrivenColor_validValues[i] == value) {
index = i;
break;
}
}
if (index == -1) {
return u_dataDrivenColor_colorFallback;
}
return u_dataDrivenColor_color;
}
#endif
void main() {
vec2  a_pos = a_pos_packed / POS_PRECISION_FACTOR;
vec2  a_offset = a_offset_packed / OFFSET_PRECISION_FACTOR;
float a_size = a_size_packed / SIZE_PRECISION_FACTOR;
vec4 color = vec4(1., 0., 0., 1.);
#ifdef DATA_DRIVEN_COLOR
color = getColor(1.);
#endif
vec2 offsetScaled = a_offset * a_size;
vec4 pos = vec4(a_pos.xy + offsetScaled, 0., 1.);
gl_Position = pos;
#ifndef RETURN_RED
v_color = color;
#endif
v_offset = a_offset;
}`},util:{"atan2.glsl":`float atan2(in float y, in float x) {
float t0, t1, t2, t3, t4;
t3 = abs(x);
t1 = abs(y);
t0 = max(t3, t1);
t1 = min(t3, t1);
t3 = 1.0 / t0;
t3 = t1 * t3;
t4 = t3 * t3;
t0 =         - 0.013480470;
t0 = t0 * t4 + 0.057477314;
t0 = t0 * t4 - 0.121239071;
t0 = t0 * t4 + 0.195635925;
t0 = t0 * t4 - 0.332994597;
t0 = t0 * t4 + 0.999995630;
t3 = t0 * t3;
t3 = (abs(y) > abs(x)) ? 1.570796327 - t3 : t3;
t3 = x < 0.0 ?  3.141592654 - t3 : t3;
t3 = y < 0.0 ? -t3 : t3;
return t3;
}`,"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`}};function br(n){return function(e){let t=n;return e.split(`/`).forEach(i=>{t&&(t=t[i])}),t}}var wr=new o(br(Jn));function Ua(n){return wr.resolveIncludes(n)}var Vr={hittestDist:m$1,hittestPos:L};var Fr={size:m$1};var Ir={filterFlags:ee$1,animation:ee$1,visualVariableData:ee$1,dataDriven0:ee$1,dataDriven1:ee$1,dataDriven2:ee$1,gpgpu:ee$1};var Or={displayViewScreenMat3:te,displayViewMat3:te,displayMat3:te,viewMat3:te,tileMat3:te,displayZoomFactor:m$1,requiredZoomFactor:m$1,tileOffset:L,currentScale:m$1,currentZoom:m$1,metersPerSRUnit:m$1};var $o=class extends Xo{constructor(){super(...arguments),this.vertexShader=Ua(`materials/pie/pie.vert`),this.fragmentShader=Ua(`materials/pie/pie.frag`),this.required=C(B(B({},Or),Fr),{outlineWidth:m$1,colors:ze,defaultColor:F$1,othersColor:F$1,outlineColor:F$1,donutRatio:m$1,sectorThreshold:m$1}),this.textures=Ir,this.options={hittestUniforms:Vr,visualVariableSizeMinMaxValue:{minMaxValueAndSize:F$1},visualVariableSizeScaleStops:{sizes:{type:`array`,elementType:m$1,size:8},values:{type:`array`,elementType:m$1,size:8}},visualVariableSizeStops:{sizes:{type:`array`,elementType:m$1,size:8},values:{type:`array`,elementType:m$1,size:8}},visualVariableSizeUnitValue:{unitValueToPixelsRatio:m$1},visualVariableOpacity:{opacities:{type:`array`,elementType:m$1,size:8},opacityValues:{type:`array`,elementType:m$1,size:8}},highlightUniforms:{highlightAll:m$1,activeReasons:m$1}},this.locations={pos:{index:0,type:L},id:{index:1,type:W},bitset:{index:2,type:m$1},offset:{index:3,type:L},texCoords:{index:4,type:L},referenceSize:{index:5,type:m$1},zoomRange:{index:6,type:L}},this.defines={VV_SIZE_MIN_MAX_VALUE:`boolean`,VV_SIZE_SCALE_STOPS:`boolean`,VV_SIZE_FIELD_STOPS:`boolean`,VV_SIZE_UNIT_VALUE:`boolean`,VV_OPACITY:`boolean`,HITTEST:`boolean`,numberOfFields:`number`,highlight:`boolean`,inside:`boolean`,outside:`boolean`}}setNumberOfFields(e){this.required.colors={type:`array`,elementType:F$1,size:e}}};var Jo=class extends K{constructor(){super(...arguments),this.type=30,this.shaders={geometry:new $o},this.symbologyPlane=2}render(e,t){let{painter:i}=e,{instance:a,target:s}=t,l=this.shaders.geometry,u=a.getInput(),c=u.uniforms.numberOfFields,f=it$1(e),m=Mt$1(e,s),v=Tt$1(e);l.setNumberOfFields(c),i.setShader({shader:l,uniforms:C(B(B(B(B({},bt(e,t.target,u.uniforms.shader)),m.storage),m.view),m.highlight),{highlightUniforms:m.highlight,hittestUniforms:m.hittestRequest?{hittestDist:m.hittestRequest?.distance,hittestPos:m.hittestRequest?.position}:null}),textures:ut(e),defines:C(B({VV_SIZE_MIN_MAX_VALUE:!!u.uniforms.shader.visualVariableSizeMinMaxValue,VV_SIZE_SCALE_STOPS:!!u.uniforms.shader.visualVariableSizeScaleStops,VV_SIZE_FIELD_STOPS:!!u.uniforms.shader.visualVariableSizeStops,VV_SIZE_UNIT_VALUE:!!u.uniforms.shader.visualVariableSizeUnitValue,VV_OPACITY:!!u.uniforms.shader.visualVariableOpacity,HITTEST:f,highlight:m.highlight?1:0},v),{numberOfFields:c}),optionalAttributes:{},useComputeBuffer:f}),i.setPipelineState(lt(e)),i.submitDraw(e,t)}};var Qo=class extends K{constructor(){super(...arguments),this.type=32,this.shaders={geometry:new Te},this.symbologyPlane=3}render(e,t){let{painter:i}=e,a=Tt$1(e),s=t.instance.getInput(),l={shader:this.shaders.geometry,uniforms:C(B(B({},bt(e,t.target,s.uniforms)),Mt$1(e,t.target)),{mosaicInfo:i.textureManager.getMosaicInfo(e,t.textureKey)}),textures:C(B({},St$1(e)),{mosaicTexture:i.textureManager.getMosaicTexture(e,t.textureKey)}),defines:C(B({},a),{isBackgroundPass:!0,isLabel:!1,textRenderPassType:0}),optionalAttributes:s.optionalAttributes,useComputeBuffer:it$1(e)};i.setShader(l),i.setPipelineState(lt(e)),i.submitDraw(e,t),i.setShader(C(B({},l),{defines:C(B({},a),{isBackgroundPass:!1,isLabel:!1,textRenderPassType:2})})),i.submitDraw(e,t),i.setShader(C(B({},l),{defines:C(B({},a),{isBackgroundPass:!1,isLabel:!1,textRenderPassType:1})})),i.submitDraw(e,t),i.setShader(C(B({},l),{defines:C(B({},a),{isBackgroundPass:!1,isLabel:!1,textRenderPassType:0})})),i.submitDraw(e,t)}};var ea={fill:new Co,patternFill:new Po,complexFill:new Oo,gradientFill:new Do,outlineFill:new Ao,patternOutlineFill:new Ro,complexOutlineFill:new zo,marker:new Ko,pieChart:new Jo,line:new Zo,texturedLine:new jo,gradientStroke:new Wo,text:new Qo,label:new qo,heatmap:new ko,dotDensity:new Io,flow:new No,animatedMarker:new yo,animatedMarkerShift:new xo,animatedFill:new So,animatedLine:new To};function Dv(){for(let n in ea)ea[n].startup()}function Av(n){for(let e in ea)ea[e].shutdown(n)}export{jd as C,gr as S,qd as T,bi as _,Jd as a,em as b,Nd as c,Un as d,Xd as f,at as g,Yn as h,Dv as i,Qd as l,Yd as m,$e as n,Kd as o,Xe as p,Av as r,Md as s,$d as t,Ua as u,cr as v,mr as w,fr as x,ea as y};