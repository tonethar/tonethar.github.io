(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,n(r.key),r)}}function n(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,"string");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}var i,r,o=function(){return t=function t(e,n,i,r,o,c){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.n=0,this.centerX=e,this.centerY=n,this.divergence=i,this.petalSize=o,this.drawPetalFunction=c,this.c=r},n=[{key:"update",value:function(t){var e=this.n*(this.divergence*(Math.PI/180)),n=this.c*Math.sqrt(this.n),i=n*Math.cos(e)+this.centerX,r=n*Math.sin(e)+this.centerY,o="hsl(".concat(this.n/5%361,",100%,50%)");this.drawPetalFunction(t,i,r,this.petalSize,o),this.n++,this.c+=.005,this.petalSize+=.01}}],n&&e(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n}(),c=new o(320,240,137.5,4,2,(function(t,e,n,i,r){t.save(),t.fillStyle=r,t.beginPath(),t.arc(e,n,i,0,2*Math.PI),t.closePath(),t.fill(),t.restore()})),a=function t(){window.setTimeout(t,1e3/60),c.update(r)};!function(){i=document.querySelector("#canvas"),r=i.getContext("2d"),i.width=640,i.height=480,r.fillRect(0,0,640,480),document.querySelector("#btn-restart").onclick=function(){!function(t,e,n,i,r,o){t.save(),t.fillStyle="black",t.fillRect(0,0,640,480),t.restore()}(r),c.n=0,c.c=4,c.petalSize=2};var t=document.querySelector("#ctrl-divergence");t.onchange=function(){c.divergence=+t.value},a()}()})();