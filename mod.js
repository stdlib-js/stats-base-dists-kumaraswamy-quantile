// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,a=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(u.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,f.get),v&&i&&i.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y=Math.floor;function v(r){return y(r)===r}function p(r){return v(r/2)}function b(r){return p(r>0?r-1:r+1)}var s=Number.POSITIVE_INFINITY,w=Number.NEGATIVE_INFINITY;function A(r){return r===s||r===w}var _=Math.sqrt;function m(r){return Math.abs(r)}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var U=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;var h="function"==typeof Symbol?Symbol.toStringTag:"";var N=d&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,i;if(null==r)return U.call(r);t=r[h],i=h,n=null!=(o=r)&&g.call(o,i);try{r[h]=void 0}catch(n){return U.call(r)}return e=U.call(r),n?r[h]=t:delete r[h],e}:function(r){return U.call(r)},j="function"==typeof Uint32Array;var I="function"==typeof Uint32Array?Uint32Array:null;var O,S="function"==typeof Uint32Array?Uint32Array:void 0;O=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(j&&t instanceof Uint32Array||"[object Uint32Array]"===N(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E=O,F="function"==typeof Float64Array;var H="function"==typeof Float64Array?Float64Array:null;var T,G="function"==typeof Float64Array?Float64Array:void 0;T=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H([1,3.14,-3.14,NaN]),t=n,r=(F&&t instanceof Float64Array||"[object Float64Array]"===N(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P=T,L="function"==typeof Uint8Array;var V="function"==typeof Uint8Array?Uint8Array:null;var W,M="function"==typeof Uint8Array?Uint8Array:void 0;W=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,256,257]),t=n,r=(L&&t instanceof Uint8Array||"[object Uint8Array]"===N(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var k=W,x="function"==typeof Uint16Array;var Y="function"==typeof Uint16Array?Uint16Array:null;var q,C="function"==typeof Uint16Array?Uint16Array:void 0;q=function(){var r,n,t;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,65536,65537]),t=n,r=(x&&t instanceof Uint16Array||"[object Uint16Array]"===N(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var z,B={uint16:q,uint8:k};(z=new B.uint16(1))[0]=4660;var D,J,K=52===new B.uint8(z.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},R=new P(1),X=new E(R.buffer),Z=Q.HIGH,$=Q.LOW;function rr(r,n,t,e){return R[0]=r,n[e]=X[Z],n[e+t]=X[$],n}function nr(r){return rr(r,[0,0],1,0)}c(nr,"assign",rr);var tr=!0===K?0:1,er=new P(1),or=new E(er.buffer);function ir(r,n){return er[0]=r,or[tr]=n>>>0,er[0]}function ur(r){return 0|r}var ar,fr,cr=!0===K?1:0,lr=new P(1),yr=new E(lr.buffer);function vr(r){return lr[0]=r,yr[cr]}!0===K?(ar=1,fr=0):(ar=0,fr=1);var pr={HIGH:ar,LOW:fr},br=new P(1),sr=new E(br.buffer),wr=pr.HIGH,Ar=pr.LOW;function _r(r,n){return sr[wr]=r,sr[Ar]=n,br[0]}var mr=[0,0];function dr(r,n){var t,e;return nr.assign(r,mr,1,0),t=mr[0],t&=2147483647,e=vr(n),_r(t|=e&=2147483648,mr[1])}var Ur=!0===K?1:0,gr=new P(1),hr=new E(gr.buffer);function Nr(r,n){return gr[0]=r,hr[Ur]=n>>>0,gr[0]}var jr=[1,1.5],Ir=[0,.5849624872207642],Or=[0,1.350039202129749e-8];function Sr(r,n,t,e){return l(r)||A(r)?(n[e]=r,n[e+t]=0,n):0!==r&&m(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Sr(r,[0,0],1,0)}),"assign",Sr);var Er=[0,0],Fr=[0,0];function Hr(r,n){var t,e;return 0===n||0===r||l(r)||A(r)?r:(Sr(r,Er,1,0),n+=Er[1],n+=function(r){var n=vr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Er[0]),n<-1074?dr(0,r):n>1023?r<0?w:s:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,nr.assign(r,Fr,1,0),t=Fr[0],t&=2148532223,e*_r(t|=n+1023<<20,Fr[1])))}var Tr=1e300,Gr=1e-300,Pr=[0,0],Lr=[0,0];function Vr(r,n){var t,e,o,i,u,a,f,c,y,p,d,U,g,h;if(l(r)||l(n))return NaN;if(nr.assign(n,Pr,1,0),u=Pr[0],0===Pr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return _(r);if(-.5===n)return 1/_(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(A(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:m(r)<1==(n===s)?0:s}(r,n)}if(nr.assign(r,Pr,1,0),i=Pr[0],0===Pr[1]){if(0===i)return function(r,n){return n===w?s:n===s?0:n>0?b(n)?r:0:b(n)?dr(s,r):s}(r,n);if(1===r)return 1;if(-1===r&&b(n))return-1;if(A(r))return r===w?Vr(-0,-n):n<0?0:s}if(r<0&&!1===v(n))return(r-r)/(r-r);if(o=m(r),t=2147483647&i|0,e=2147483647&u|0,f=u>>>31|0,a=(a=i>>>31|0)&&b(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&vr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?a*Tr*Tr:a*Gr*Gr;if(t>1072693248)return 0===f?a*Tr*Tr:a*Gr*Gr;d=function(r,n){var t,e,o,i,u,a;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(a=o)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=ir(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(Lr,o)}else d=function(r,n,t){var e,o,i,u,a,f,c,l,y,v,p,b,s,w,A,_,m,d,U,g,h;return d=0,t<1048576&&(d-=53,t=vr(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(U=1048575&t|0),U<=235662?g=0:U<767610?g=1:(g=0,d+=1,t-=1048576),u=ir(o=(_=(n=Nr(n,t))-(c=jr[g]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),f=Nr(0,e+=g<<18),A=(i=o*o)*i*(0===(h=i)?.5999999999999946:.5999999999999946+h*(.4285714285785502+h*(.33333332981837743+h*(.272728123808534+h*(.23066074577556175+.20697501780033842*h))))),f=ir(f=3+(i=u*u)+(A+=(a=m*(_-u*f-u*(n-(f-c))))*(u+o)),0),s=(p=-7.028461650952758e-9*(y=ir(y=(_=u*f)+(m=a*f+(A-(f-3-i))*o),0))+.9617966939259756*(m-(y-_))+Or[g])-((b=ir(b=(v=.9617967009544373*y)+p+(l=Ir[g])+(w=d),0))-w-l-v),r[0]=b,r[1]=s,r}(Lr,o,t);if(U=(p=(n-(c=ir(n,0)))*d[0]+n*d[1])+(y=c*d[0]),nr.assign(U,Pr,1,0),g=ur(Pr[0]),h=ur(Pr[1]),g>=1083179008){if(0!=(g-1083179008|h))return a*Tr*Tr;if(p+8008566259537294e-32>U-y)return a*Tr*Tr}else if((2147483647&g)>=1083231232){if(0!=(g-3230714880|h))return a*Gr*Gr;if(p<=U-y)return a*Gr*Gr}return U=function(r,n,t){var e,o,i,u,a,f,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=i=Nr(0,e)),r=ur(r=vr(c=1-((c=(u=.6931471824645996*(i=ir(i=t+n,0)))+(a=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(o=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((f=a-(c-u))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?Hr(c,l):Nr(c,r)}(g,y,p),a*U}function Wr(r,n,t){return l(r)||l(n)||l(t)||n<=0||t<=0||r<0||r>1?NaN:Vr(1-Vr(1-r,1/t),1/n)}function Mr(r,n){return l(r)||l(n)||r<=0||n<=0?(t=NaN,function(){return t}):function(t){if(l(t)||t<0||t>1)return NaN;return Vr(1-Vr(1-t,1/n),1/r)};var t}c(Wr,"factory",Mr);export{Wr as default,Mr as factory};
//# sourceMappingURL=mod.js.map
