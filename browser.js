// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function S(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function I(r,e,t){var n=e-r.length;return n<0?r:r=t?r+S(n):S(n)+r}var A=String.fromCharCode,_=isNaN,N=Array.isArray;function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,o,a,f,l,s,p;if(!N(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,_(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=I(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function j(r){var e,t,n,i;for(t=[],i=0,n=U.exec(r);n;)(e=r.slice(i,U.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),i=U.lastIndex,n=U.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function x(r){return"string"==typeof r}function k(r){var e,t;if(!x(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[j(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return T.apply(null,e)}var O=Object.prototype,V=O.toString,G=O.__defineGetter__,$=O.__defineSetter__,P=O.__lookupGetter__,H=O.__lookupSetter__,W=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(r,e)||H.call(r,e)?(n=r.__proto__,r.__proto__=O,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,e,t.get),a&&$&&$.call(r,e,t.set),r};function C(r,e,t){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r){return r!=r}var R=Math.floor;function Y(r){return R(r)===r}function Z(r){return Y(r/2)}function M(r){return Z(r>0?r-1:r+1)}var q=Number.POSITIVE_INFINITY,X=Number.NEGATIVE_INFINITY;function z(r){return r===q||r===X}var B=Math.sqrt;function D(r){return Math.abs(r)}function J(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var K=J(),Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty;function er(r,e){return null!=r&&rr.call(r,e)}var tr,nr="function"==typeof Symbol?Symbol:void 0,ir="function"==typeof nr?nr.toStringTag:"",or=K&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return Q.call(r);t=r[ir],e=er(r,ir);try{r[ir]=void 0}catch(e){return Q.call(r)}return n=Q.call(r),e?r[ir]=t:delete r[ir],n}:function(r){return Q.call(r)},ar="function"==typeof Uint32Array,ur="function"==typeof Uint32Array?Uint32Array:null,cr="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,e,t;if("function"!=typeof ur)return!1;try{e=new ur(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ar&&t instanceof Uint32Array||"[object Uint32Array]"===or(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr,lr=tr,sr=J(),pr=Object.prototype.toString,yr="function"==typeof Symbol?Symbol:void 0,gr="function"==typeof yr?yr.toStringTag:"",dr=sr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return pr.call(r);t=r[gr],e=er(r,gr);try{r[gr]=void 0}catch(e){return pr.call(r)}return n=pr.call(r),e?r[gr]=t:delete r[gr],n}:function(r){return pr.call(r)},br="function"==typeof Float64Array,vr="function"==typeof Float64Array?Float64Array:null,hr="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,e,t;if("function"!=typeof vr)return!1;try{e=new vr([1,3.14,-3.14,NaN]),t=e,r=(br&&t instanceof Float64Array||"[object Float64Array]"===dr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var wr,mr=fr,Sr=J(),Ir=Object.prototype.toString,Ar="function"==typeof Symbol?Symbol:void 0,_r="function"==typeof Ar?Ar.toStringTag:"",Nr=Sr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return Ir.call(r);t=r[_r],e=er(r,_r);try{r[_r]=void 0}catch(e){return Ir.call(r)}return n=Ir.call(r),e?r[_r]=t:delete r[_r],n}:function(r){return Ir.call(r)},Er="function"==typeof Uint8Array,Tr="function"==typeof Uint8Array?Uint8Array:null,Ur="function"==typeof Uint8Array?Uint8Array:void 0;wr=function(){var r,e,t;if("function"!=typeof Tr)return!1;try{e=new Tr(e=[1,3.14,-3.14,256,257]),t=e,r=(Er&&t instanceof Uint8Array||"[object Uint8Array]"===Nr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var Fr,jr=wr,xr=J(),kr=Object.prototype.toString,Or="function"==typeof Symbol?Symbol:void 0,Vr="function"==typeof Or?Or.toStringTag:"",Gr=xr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return kr.call(r);t=r[Vr],e=er(r,Vr);try{r[Vr]=void 0}catch(e){return kr.call(r)}return n=kr.call(r),e?r[Vr]=t:delete r[Vr],n}:function(r){return kr.call(r)},$r="function"==typeof Uint16Array,Pr="function"==typeof Uint16Array?Uint16Array:null,Hr="function"==typeof Uint16Array?Uint16Array:void 0;Fr=function(){var r,e,t;if("function"!=typeof Pr)return!1;try{e=new Pr(e=[1,3.14,-3.14,65536,65537]),t=e,r=($r&&t instanceof Uint16Array||"[object Uint16Array]"===Gr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Hr:function(){throw new Error("not implemented")};var Wr,Cr={uint16:Fr,uint8:jr};(Wr=new Cr.uint16(1))[0]=4660;var Lr,Rr,Yr=52===new Cr.uint8(Wr.buffer)[0];!0===Yr?(Lr=1,Rr=0):(Lr=0,Rr=1);var Zr={HIGH:Lr,LOW:Rr},Mr=new mr(1),qr=new lr(Mr.buffer),Xr=Zr.HIGH,zr=Zr.LOW;function Br(r,e,t,n){return Mr[0]=r,e[n]=qr[Xr],e[n+t]=qr[zr],e}function Dr(r){return Br(r,[0,0],1,0)}C(Dr,"assign",Br);var Jr=!0===Yr?0:1,Kr=new mr(1),Qr=new lr(Kr.buffer);function re(r,e){return Kr[0]=r,Qr[Jr]=e>>>0,Kr[0]}function ee(r){return 0|r}var te,ne,ie=Number.NEGATIVE_INFINITY,oe=Number.POSITIVE_INFINITY,ae=2147483647,ue=!0===Yr?1:0,ce=new mr(1),fe=new lr(ce.buffer);function le(r){return ce[0]=r,fe[ue]}!0===Yr?(te=1,ne=0):(te=0,ne=1);var se={HIGH:te,LOW:ne},pe=new mr(1),ye=new lr(pe.buffer),ge=se.HIGH,de=se.LOW;function be(r,e){return ye[ge]=r,ye[de]=e,pe[0]}var ve=[0,0];function he(r,e){var t,n;return Dr.assign(r,ve,1,0),t=ve[0],t&=ae,n=le(e),be(t|=n&=2147483648,ve[1])}var we=!0===Yr?1:0,me=new mr(1),Se=new lr(me.buffer);function Ie(r,e){return me[0]=r,Se[we]=e>>>0,me[0]}var Ae=1023,_e=1048576,Ne=[1,1.5],Ee=[0,.5849624872207642],Te=[0,1.350039202129749e-8],Ue=Number.POSITIVE_INFINITY,Fe=Number.NEGATIVE_INFINITY;function je(r,e,t,n){return L(r)||z(r)?(e[n]=r,e[n+t]=0,e):0!==r&&D(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}C((function(r){return je(r,[0,0],1,0)}),"assign",je);var xe=[0,0],ke=[0,0];function Oe(r,e){var t,n;return 0===e||0===r||L(r)||z(r)?r:(je(r,xe,1,0),e+=xe[1],e+=function(r){var e=le(r);return(e=(2146435072&e)>>>20)-Ae|0}(r=xe[0]),e<-1074?he(0,r):e>1023?r<0?Fe:Ue:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Dr.assign(r,ke,1,0),t=ke[0],t&=2148532223,n*be(t|=e+Ae<<20,ke[1])))}var Ve=1048575,Ge=1048576,$e=1083179008,Pe=1e300,He=1e-300,We=[0,0],Ce=[0,0];function Le(r,e){var t,n,i,o,a,u,c,f,l,s,p,y,g,d;if(L(r)||L(e))return NaN;if(Dr.assign(e,We,1,0),a=We[0],0===We[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return B(r);if(-.5===e)return 1/B(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(z(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:D(r)<1==(e===oe)?0:oe}(r,e)}if(Dr.assign(r,We,1,0),o=We[0],0===We[1]){if(0===o)return function(r,e){return e===ie?oe:e===oe?0:e>0?M(e)?r:0:M(e)?he(oe,r):oe}(r,e);if(1===r)return 1;if(-1===r&&M(e))return-1;if(z(r))return r===ie?Le(-0,-e):e<0?0:oe}if(r<0&&!1===Y(e))return(r-r)/(r-r);if(i=D(r),t=o&ae|0,n=a&ae|0,c=a>>>31|0,u=(u=o>>>31|0)&&M(e)?-1:1,n>1105199104){if(n>1139802112)return function(r,e){return(le(r)&ae)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(t<1072693247)return 1===c?u*Pe*Pe:u*He*He;if(t>1072693248)return 0===c?u*Pe*Pe:u*He*He;p=function(r,e){var t,n,i,o,a,u;return t=(a=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((n=re(n=(o=1.4426950216293335*i)+a,0))-o),r[0]=n,r[1]=t,r}(Ce,i)}else p=function(r,e,t){var n,i,o,a,u,c,f,l,s,p,y,g,d,b,v,h,w,m,S,I,A;return m=0,t<_e&&(m-=53,t=le(e*=9007199254740992)),m+=(t>>20)-Ae|0,t=1072693248|(S=1048575&t|0),S<=235662?I=0:S<767610?I=1:(I=0,m+=1,t-=_e),a=re(i=(h=(e=Ie(e,t))-(f=Ne[I]))*(w=1/(e+f)),0),n=524288+(t>>1|536870912),c=Ie(0,n+=I<<18),v=(o=i*i)*o*(0===(A=o)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),c=re(c=3+(o=a*a)+(v+=(u=w*(h-a*c-a*(e-(c-f))))*(a+i)),0),d=(y=-7.028461650952758e-9*(s=re(s=(h=a*c)+(w=u*c+(v-(c-3-o))*i),0))+.9617966939259756*(w-(s-h))+Te[I])-((g=re(g=(p=.9617967009544373*s)+y+(l=Ee[I])+(b=m),0))-b-l-p),r[0]=g,r[1]=d,r}(Ce,i,t);if(y=(s=(e-(f=re(e,0)))*p[0]+e*p[1])+(l=f*p[0]),Dr.assign(y,We,1,0),g=ee(We[0]),d=ee(We[1]),g>=$e){if(0!=(g-$e|d))return u*Pe*Pe;if(s+8008566259537294e-32>y-l)return u*Pe*Pe}else if((g&ae)>=1083231232){if(0!=(g-3230714880|d))return u*He*He;if(s<=y-l)return u*He*He}return y=function(r,e,t){var n,i,o,a,u,c,f,l,s,p;return s=((l=r&ae|0)>>20)-Ae|0,f=0,l>1071644672&&(i=Ie(0,((f=r+(Ge>>s+1)>>>0)&~(Ve>>(s=((f&ae)>>20)-Ae|0)))>>>0),f=(f&Ve|Ge)>>20-s>>>0,r<0&&(f=-f),e-=i),r=ee(r=le(c=1-((c=(o=.6931471824645996*(i=re(i=t+e,0)))+(a=.6931471805599453*(t-(i-e))+-1.904654299957768e-9*i))*(n=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=a-(c-o))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?Oe(c,f):Ie(c,r)}(g,l,s),u*y}function Re(r,e,t){return L(r)||L(e)||L(t)||e<=0||t<=0||r<0||r>1?NaN:Le(1-Le(1-r,1/t),1/e)}return C(Re,"factory",(function(r,e){return L(r)||L(e)||r<=0||e<=0?(t=NaN,function(){return t}):function(t){return L(t)||t<0||t>1?NaN:Le(1-Le(1-t,1/e),1/r)};var t})),Re},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).quantile=e();
//# sourceMappingURL=browser.js.map
