!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r=r||self).LZMA={})}(this,(function(r){"use strict";var n="function"==typeof setImmediate?setImmediate:setTimeout,t=[4294967295,-4294967296],u=[0,0],f=[1,0];function e(r){var n=[];return n[r-1]=void 0,n}function o(r,n){return c(r[0]+n[0],r[1]+n[1])}function i(r,n){var t,u;return r[0]==n[0]&&r[1]==n[1]?0:(u=0>n[1],(t=0>r[1])&&!u?-1:!t&&u?1:0>function(r,n){return c(r[0]-n[0],r[1]-n[1])}(r,n)[1]?-1:1)}function c(r,n){var t,u;for(n=(n%=0x10000000000000000)-(t=n%4294967296)+(u=4294967296*Math.floor((r%=0x10000000000000000)/4294967296)),r=r-u+t;0>r;)r+=4294967296,n-=4294967296;for(;r>4294967295;)r-=4294967296,n+=4294967296;for(n%=0x10000000000000000;n>0x7fffffff00000000;)n-=0x10000000000000000;for(;-0x8000000000000000>n;)n+=0x10000000000000000;return[r,n]}function a(r){return 0>r?[r+4294967296,-4294967296]:[r,0]}function v(r){return 2147483648>r[0]?~~Math.max(Math.min(r[0],2147483647),-2147483648):~~Math.max(Math.min(r[0]-4294967296,2147483647),-2147483648)}function s(r){return r.count>r.t?255&r.u[r.t++]:-1}function l(r){var n=r.u;return n.length=r.count,n}function d(r,n,f){var o,i,c,v,l="",d=[];for(i=0;5>i;++i){if(-1==(c=s(n)))throw Error("truncated input");d[i]=c<<24>>24}if(!function(r,n){var t,u,f,o,i,c,a;if(5>n.length)return 0;for(f=(a=255&n[0])%9,o=(c=~~(a/9))%5,i=~~(c/5),t=0,u=0;4>u;++u)t+=(255&n[1+u])<<8*u;if(t>99999999||!function(r,n,t,u){if(n>8||t>4||u>4)return 0;!function(r,n,t){var u,f;if(null!=r.o&&r.i==t&&r.v==n)return;for(r.v=n,r.s=(1<<n)-1,r.i=t,r.o=e(f=1<<r.i+r.v),u=0;f>u;++u)r.o[u]=b({})}(r.l,t,n);var f=1<<u;return g(r.p,f),g(r.h,f),r.M=f-1,1}(r,f,o,i))return 0;return function(r,n){if(0>n)return 0;r.g!=n&&(r.g=n,r.m=Math.max(r.g,1),function(r,n){null!=r.S&&r.I==n||(r.S=e(n));r.I=n,r.j=0,r.D=0}(r.$,Math.max(r.m,4096)));return 1}(r,t)}(o=function(r){r.$={},r._={},r.k=e(192),r.L=e(12),r.N=e(12),r.O=e(12),r.T=e(12),r.q=e(192),r.A=e(4),r.B=e(114),r.C=S({},4),r.p=y({}),r.h=y({}),r.l={};for(var n=0;4>n;++n)r.A[n]=S({},6);return r}({}),d))throw Error("corrupted input");for(i=0;64>i;i+=8){if(-1==(c=s(n)))throw Error("truncated input");1==(c=c.toString(16)).length&&(c="0"+c),l=c+""+l}r.F=/^0+$|^f+$/i.test(l)?t:(v=parseInt(l,16))>4294967295?t:a(v),r.G=function(r,n,t,f){return r._.H=n,x(r.$),r.$.J=t,function(r){r.$.D=0,r.$.j=0,D(r.k),D(r.q),D(r.L),D(r.N),D(r.O),D(r.T),D(r.B),function(r){var n,t;for(t=1<<r.i+r.v,n=0;t>n;++n)D(r.o[n].K)}(r.l);for(var n=0;4>n;++n)D(r.A[n].P);E(r.p),E(r.h),D(r.C.P),function(r){r.R=0,r.Range=-1;for(var n=0;5>n;++n)r.R=r.R<<8|s(r.H)}(r._)}(r),r.state=0,r.U=0,r.V=0,r.W=0,r.X=0,r.Y=f,r.Z=u,r.rr=0,function(r,n){return r.nr=n,r.tr=null,r.ur=1,r}({},r)}(o,n,f,r.F)}function p(r,n){return r.er=function(r){return r.u=e(32),r.count=0,r}({}),d(r,function(r,n){return r.u=n,r.t=0,r.count=n.length,r}({},n),r.er),r}function h(r){var n=r.j-r.D;n&&(!function(r,n,t,u){!function(r,n,t,u,f){for(var e=0;f>e;++e)t[u+e]=r[n+e]}(n,t,r.u,r.count,u),r.count+=u}(r.J,r.S,r.D,n),r.I>r.j||(r.j=0),r.D=r.j)}function w(r,n){var t=r.j-n-1;return 0>t&&(t+=r.I),r.S[t]}function x(r){h(r),r.J=null}function M(r){if(!r.ur)throw Error("bad state");if(r.tr)throw Error("No encoding");return function(r){var n=function(r){var n,t,u,e,c,l;if(l=v(r.Z)&r.M,j(r._,r.k,(r.state<<4)+l)){if(j(r._,r.L,r.state))u=0,j(r._,r.N,r.state)?(j(r._,r.O,r.state)?(j(r._,r.T,r.state)?(t=r.X,r.X=r.W):t=r.W,r.W=r.V):t=r.V,r.V=r.U,r.U=t):j(r._,r.q,(r.state<<4)+l)||(r.state=7>r.state?9:11,u=1),u||(u=m(r.h,r._,l)+2,r.state=7>r.state?8:11);else if(r.X=r.W,r.W=r.V,r.V=r.U,u=2+m(r.p,r._,l),r.state=7>r.state?7:10,4>(c=I(r.A[function(r){return 4>(r-=2)?r:3}(u)],r._)))r.U=c;else if(r.U=(2|1&c)<<(e=(c>>1)-1),14>c)r.U+=function(r,n,t,u){var f,e,o=1,i=0;for(e=0;u>e;++e)f=j(t,r,n+o),o<<=1,o+=f,i|=f<<e;return i}(r.B,r.U-c-1,r._,e);else if(r.U+=function(r,n){var t,u,f=0;for(t=n;0!=t;t-=1)r.Range>>>=1,r.R-=r.Range&(u=r.R-r.Range>>>31)-1,f=f<<1|1-u,-16777216&r.Range||(r.R=r.R<<8|s(r.H),r.Range<<=8);return f}(r._,e-4)<<4,r.U+=function(r,n){var t,u,f=1,e=0;for(u=0;r.or>u;++u)t=j(n,r.P,f),f<<=1,f+=t,e|=t<<u;return e}(r.C,r._),0>r.U)return-1==r.U?1:-1;if(i(a(r.U),r.Z)>=0||r.U>=r.m)return-1;!function(r,n,t){var u=r.j-n-1;for(0>u&&(u+=r.I);0!=t;t-=1)r.I>u||(u=0),r.S[r.j]=r.S[u],r.j+=1,u+=1,r.I>r.j||h(r)}(r.$,r.U,u),r.Z=o(r.Z,a(u)),r.rr=w(r.$,0)}else n=function(r,n,t){return r.o[((n&r.s)<<r.i)+((255&t)>>>8-r.i)]}(r.l,v(r.Z),r.rr),r.rr=7>r.state?function(r,n){var t=1;do{t=t<<1|j(n,r.K,t)}while(256>t);return t<<24>>24}(n,r._):function(r,n,t){var u,f,e=1;do{if(f=t>>7&1,t<<=1,u=j(n,r.K,(1+f<<8)+e),e=e<<1|u,f!=u){for(;256>e;)e=e<<1|j(n,r.K,e);break}}while(256>e);return e<<24>>24}(n,r._,w(r.$,r.U)),function(r,n){r.S[r.j]=n,r.j+=1,r.I>r.j||h(r)}(r.$,r.rr),r.state=4>(d=r.state)?0:10>d?d-3:d-6,r.Z=o(r.Z,f);var d;return 0}(r.nr);if(-1==n)throw Error("corrupted input");r.ir=t,r.cr=r.nr.Z,(n||i(r.nr.Y,u)>=0&&i(r.nr.Z,r.nr.Y)>=0)&&(h(r.nr.$),x(r.nr.$),r.nr._.H=null,r.ur=0)}(r),r.ur}function g(r,n){for(;n>r.ar;r.ar+=1)r.vr[r.ar]=S({},3),r.sr[r.ar]=S({},3)}function m(r,n,t){if(!j(n,r.lr,0))return I(r.vr[t],n);var u=8;return j(n,r.lr,1)?u+=8+I(r.dr,n):u+=I(r.sr[t],n),u}function y(r){return r.lr=e(2),r.vr=e(16),r.sr=e(16),r.dr=S({},8),r.ar=0,r}function E(r){D(r.lr);for(var n=0;r.ar>n;++n)D(r.vr[n].P),D(r.sr[n].P);D(r.dr.P)}function b(r){return r.K=e(768),r}function S(r,n){return r.or=n,r.P=e(1<<n),r}function I(r,n){var t,u=1;for(t=r.or;0!=t;t-=1)u=(u<<1)+j(n,r.P,u);return u-(1<<r.or)}function j(r,n,t){var u,f=n[t];return(-2147483648^(u=(r.Range>>>11)*f))>(-2147483648^r.R)?(r.Range=u,n[t]=f+(2048-f>>>5)<<16>>16,-16777216&r.Range||(r.R=r.R<<8|s(r.H),r.Range<<=8),0):(r.Range-=u,r.R-=u,n[t]=f-(f>>>5)<<16>>16,-16777216&r.Range||(r.R=r.R<<8|s(r.H),r.Range<<=8),1)}function D(r){for(var n=r.length-1;n>=0;--n)r[n]=1024}function $(r){for(var n,t,u,f=0,e=0,o=r.length,i=[],c=[];o>f;++f,++e){if(128&(n=255&r[f]))if(192==(224&n)){if(f+1>=o)return r;if(128!=(192&(t=255&r[++f])))return r;c[e]=(31&n)<<6|63&t}else{if(224!=(240&n))return r;if(f+2>=o)return r;if(128!=(192&(t=255&r[++f])))return r;if(128!=(192&(u=255&r[++f])))return r;c[e]=(15&n)<<12|(63&t)<<6|63&u}else{if(!n)return r;c[e]=n}16383==e&&(i.push(String.fromCharCode.apply(String,c)),e=-1)}return e>0&&(c.length=e,i.push(String.fromCharCode.apply(String,c))),i.join("")}function _(r){return r[1]+r[0]}function decompress(r,t,u){var f,e,o,i,c={},a=void 0===t&&void 0===u;if("function"!=typeof t&&(e=t,t=u=0),u=u||function(r){if(void 0!==e)return function(r,n){postMessage({action:3,cbn:n,result:r})}(o?r:-1,e)},t=t||function(r,n){if(void 0!==e)return postMessage({action:2,cbn:e,result:r,error:n})},a){for(c.d=p({},r);M(c.d.G););return $(l(c.d.er))}try{c.d=p({},r),i=_(c.d.F),o=i>-1,u(0)}catch(r){return t(null,r)}n((function r(){try{for(var e,a=0,v=(new Date).getTime();M(c.d.G);)if(++a%1e3==0&&(new Date).getTime()-v>200)return o&&(f=_(c.d.G.nr.Z)/i,u(f)),n(r,0),0;u(1),e=$(l(c.d.er)),n(t.bind(null,e),0)}catch(r){t(null,r)}}),0)}function LZMA(){}LZMA.decompress=decompress,LZMA.prototype.decompress=decompress;var LZMA_WORKER=LZMA;"undefined"!=typeof self&&"importScripts"in self&&addEventListener("message",(function(r){2==r.data.action&&decompress(r.data.data,r.data.cbn)})),r.LZMA=LZMA,r.LZMA_WORKER=LZMA_WORKER,r.decompress=decompress,Object.defineProperty(r,"pr",{value:!0})}));var LZMA=this.LZMA.LZMA,LZMA_WORKER=LZMA;
//# sourceMappingURL=lzma-d-min.js.map
