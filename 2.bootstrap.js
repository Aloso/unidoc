(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,function(t,e,n){"use strict";n.r(e);var r=n(8);Object(r.main)()},function(t,e,n){"use strict";(function(t){n.d(e,"n",(function(){return w})),n.d(e,"k",(function(){return y})),n.d(e,"d",(function(){return _})),n.d(e,"i",(function(){return T})),n.d(e,"f",(function(){return E})),n.d(e,"l",(function(){return L})),n.d(e,"j",(function(){return H})),n.d(e,"b",(function(){return M})),n.d(e,"e",(function(){return x})),n.d(e,"c",(function(){return B})),n.d(e,"g",(function(){return S})),n.d(e,"a",(function(){return A})),n.d(e,"h",(function(){return k})),n.d(e,"m",(function(){return j}));var r=n(7);const i=new Array(32).fill(void 0);function o(t){return i[t]}i.push(void 0,null,!0,!1);let u=i.length;function c(t){const e=o(t);return function(t){t<36||(i[t]=u,u=t)}(t),e}function a(t){u===i.length&&i.push(i.length+1);const e=u;return u=i[e],i[e]=t,e}let l=new("undefined"==typeof TextDecoder?(0,t.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});l.decode();let s=null;function d(){return null!==s&&s.buffer===r.e.buffer||(s=new Uint8Array(r.e.buffer)),s}function f(t,e){return l.decode(d().subarray(t,t+e))}let h=0;let g=new("undefined"==typeof TextEncoder?(0,t.require)("util").TextEncoder:TextEncoder)("utf-8");const p="function"==typeof g.encodeInto?function(t,e){return g.encodeInto(t,e)}:function(t,e){const n=g.encode(t);return e.set(n),{read:t.length,written:n.length}};function m(t,e,n){if(void 0===n){const n=g.encode(t),r=e(n.length);return d().subarray(r,r+n.length).set(n),h=n.length,r}let r=t.length,i=e(r);const o=d();let u=0;for(;u<r;u++){const e=t.charCodeAt(u);if(e>127)break;o[i+u]=e}if(u!==r){0!==u&&(t=t.slice(u)),i=n(i,r,r=u+3*t.length);const e=d().subarray(i+u,i+r);u+=p(t,e).written}return h=u,i}let v=null;function b(){return null!==v&&v.buffer===r.e.buffer||(v=new Int32Array(r.e.buffer)),v}function w(t,e){var n=m(t,r.b,r.c),i=h;return c(r.d(n,i,null==e?16777215:e?1:0))}function y(t){c(t)}function _(){return a(new Object)}function T(t){return a(t)}function E(t,e,n){o(t)[c(e)]=c(n)}function L(t,e){return a(f(t,e))}function H(t){return a(o(t))}function M(){return a(new Array)}function x(t,e){return o(t).push(o(e))}function B(){return a(new Error)}function S(t,e){var n=m(o(e).stack,r.b,r.c),i=h;b()[t/4+1]=i,b()[t/4+0]=n}function A(t,e){try{console.error(f(t,e))}finally{r.a(t,e)}}function k(t,e){var n=m(function t(e){const n=typeof e;if("number"==n||"boolean"==n||null==e)return""+e;if("string"==n)return`"${e}"`;if("symbol"==n){const t=e.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==n){const t=e.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(e)){const n=e.length;let r="[";n>0&&(r+=t(e[0]));for(let i=1;i<n;i++)r+=", "+t(e[i]);return r+="]",r}const r=/\[object ([^\]]+)\]/.exec(toString.call(e));let i;if(!(r.length>1))return toString.call(e);if(i=r[1],"Object"==i)try{return"Object("+JSON.stringify(e)+")"}catch(t){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:i}(o(e)),r.b,r.c),i=h;b()[t/4+1]=i,b()[t/4+0]=n}function j(t,e){throw new Error(f(t,e))}}).call(this,n(11)(t))},,,,,function(t,e,n){"use strict";var r=n.w[t.i];t.exports=r;n(2);r.f()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.main=void 0;var r=n(9),i=function(){function t(t,e){this.content=t,this.contentLoading=e,this.openButton=null,this.rand=Math.floor(+new Date/6e4)}return Object.defineProperty(t.prototype,"isTabOpened",{get:function(){return null!=this.openButton},enumerable:!1,configurable:!0}),t.prototype.openTab=function(t){var e=this;null!=this.openButton&&this.openButton.classList.remove("open"),this.openButton=t,this.openButton.classList.add("open");var n="Unidok - "+t.innerText;document.title=n;var i="?"+t.getAttribute("data-cls");i!==window.location.search&&history.replaceState({},n,i);var o=!1;setTimeout((function(){o||(e.content.innerHTML=e.contentLoading)}),1e3);var u=t.getAttribute("data-file");fetch("./sections/"+u+"?"+this.rand).then((function(t){if(200===t.status)return t.text();throw o=!0,new Error(t.status+" "+t.statusText)})).then((function(n){var i;e.content.className=null!==(i=t.getAttribute("data-cls"))&&void 0!==i?i:"",r.convertToHtml(n,e.content,!0,!1),o=!0;for(var u=document.getElementsByClassName("playground"),c=0,a=Array.from(u);c<a.length;c++){var l=a[c];l instanceof HTMLElement&&new r.Playground(l).render()}})).catch((function(t){o=!0,e.content.innerHTML='<div style="text-align: center; color: #ff7777; margin: 1.5em 0">\n                Error loading the content: '+t.message+"\n            </div>",console.error(t)}))},t}();e.main=function(){var t,e,n;(null!==(t=document.getElementById("open-playground"))&&void 0!==t?t:r.error("#open-playground is null")).addEventListener("click",r.addBigPlayground);for(var o=null!==(e=document.getElementById("content"))&&void 0!==e?e:r.error("#content is null"),u=o.innerHTML,c=null!==(n=document.getElementById("main-nav"))&&void 0!==n?n:r.error("#main-nav is null"),a=[],l=new i(o,u),s=function(t){"BUTTON"===t.tagName&&t instanceof HTMLElement&&(a.push(t),t.addEventListener("click",(function(){l.openTab(t)})),"?"+t.getAttribute("data-cls")===window.location.search&&l.openTab(t))},d=0,f=Array.from(c.children);d<f.length;d++){s(f[d])}l.isTabOpened||l.openTab(a[0])}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.error=e.convertToHtml=e.addBigPlayground=e.Playground=void 0;var r=n(10),i=n(5),o=n(3),u=n(12),c=n(13),a=function(){function t(t){var e;this.lastRenderTime=0,this.lastRenderValue=null,this.isHtml=!1,this.changeListeners=[],this.renderListeners=[],this.value=(null!==(e=t.textContent)&&void 0!==e?e:"").replace(/^\n/,"").replace(/\n[ \t]*$/,""),this.input=document.createElement("div"),this.input.className="input",this.toggleButton=this.initToggleButton(),this.editorView=this.initEditorView(),this.preview=this.initPreview();var n=document.createElement("div");n.className="playground initialized",function(t,e){var n=t.getAttribute("style");null!=n&&e.setAttribute("style",n);var r=t.id;null!=r&&(e.id=r)}(t,n),n.append(this.input,this.preview,this.toggleButton),t.replaceWith(n)}return t.prototype.initEditorView=function(){var t=this,e=u.defaultKeymap.slice();return e.push({key:"Tab",preventDefault:!0,run:function(t){return t.state.selection.main.empty?u.insertTab(t):u.indentMore(t)},shift:function(t){return u.indentLess(t)}}),new i.EditorView({state:o.EditorState.create({doc:this.value,extensions:[i.EditorView.lineWrapping,o.EditorState.allowMultipleSelections.of(!0),i.drawSelection(),i.highlightActiveLine(),c.highlightSelectionMatches({minSelectionLength:3}),o.EditorState.tabSize.of(4),i.EditorView.updateListener.of((function(e){e.docChanged&&(t.value=t.getValue(),t.render(),t.changeListeners.forEach((function(t){return t()})))})),i.keymap.of(e)]}),parent:this.input})},t.prototype.initPreview=function(){var t=document.createElement("div");return t.className="preview",t},t.prototype.initToggleButton=function(){var t=this,e=document.createElement("button");return e.innerHTML="Show HTML",e.className="show-html",e.addEventListener("click",(function(){return t.toggleHtml()})),e},t.prototype.getValue=function(){return this.editorView.state.doc.sliceString(0)},t.prototype.render=function(){var t=this,e=this.value,n=performance.now();if(e!==this.lastRenderValue)if(n-this.lastRenderTime<150)setTimeout((function(){return t.render()}),170);else{this.lastRenderValue=e,this.lastRenderTime=n;try{if(this.isHtml){var i=r.compile(e);this.preview.innerText=i.text,i.spans}else l(e,this.preview,!1,!0)}catch(t){console.warn("Input:"),console.log(e),console.error(t.message),this.preview.innerHTML='<p style="color:#ff4444"><strong>Fatal error</strong></p>'}this.renderListeners.forEach((function(t){return t()}))}},t.prototype.toggleHtml=function(){this.isHtml=!this.isHtml,this.lastRenderValue=null,this.render(),this.isHtml?(this.toggleButton.innerHTML="Hide HTML",this.preview.classList.add("html")):(this.toggleButton.innerHTML="Show HTML",this.preview.classList.remove("html"))},t.prototype.onChange=function(t){this.changeListeners.push(t)},t.prototype.onRender=function(t){this.renderListeners.push(t)},t}();function l(t,e,n,i){var o=r.compile(t,i);return o.contains_math?n?(e.innerHTML=o.text,s(e)):setTimeout((function(){e.innerHTML=o.text,s(e)}),20):e.innerHTML=o.text,o.spans}function s(t){if("MathJax"in window){for(var e=window.MathJax,n=t.getElementsByTagName("math"),r=0,i=Array.from(n);r<i.length;r++){var o=i[r],u=e.mathml2chtml(o.outerHTML);o.replaceWith(u)}e.startup.document.clear(),e.startup.document.updateDocument()}}function d(t){throw new Error(t)}e.Playground=a,e.addBigPlayground=function(){var t=document.createElement("pre");t.className="playground",t.id="big-playground",document.body.append(t),document.body.style.overflow="hidden";var e=localStorage.getItem("big-playground-text");null!=e&&(t.textContent=e);var n=new a(t);n.onChange((function(){localStorage.setItem("big-playground-text",n.value)})),n.render();var r=document.createElement("button");r.innerHTML="✖",r.title="Close playground (Escape)",r.id="close-big-playground";var i=document.createElement("span");i.id="big-playground-title",i.innerHTML="Unidoc playground";var o=document.createElement("div");o.id="big-playground-toolbar",o.append(i,r),document.body.append(o),setTimeout((function(){var t,e=null!==(t=document.getElementById("big-playground"))&&void 0!==t?t:d("newElem is null");function n(){e.remove(),r.remove(),document.body.style.overflow=""}e.addEventListener("keydown",(function(t){"Escape"===t.code&&n()})),r.addEventListener("click",n)}))},e.convertToHtml=l,e.error=d},function(t,e,n){"use strict";n.r(e);var r=n(2);n.d(e,"compile",(function(){return r.n})),n.d(e,"__wbindgen_object_drop_ref",(function(){return r.k})),n.d(e,"__wbg_new_e38d545834ee2e5f",(function(){return r.d})),n.d(e,"__wbindgen_number_new",(function(){return r.i})),n.d(e,"__wbg_set_327f76e14f96ef0e",(function(){return r.f})),n.d(e,"__wbindgen_string_new",(function(){return r.l})),n.d(e,"__wbindgen_object_clone_ref",(function(){return r.j})),n.d(e,"__wbg_new_515b65a8e7699d00",(function(){return r.b})),n.d(e,"__wbg_push_b7f68478f81d358b",(function(){return r.e})),n.d(e,"__wbg_new_59cb74e423758ede",(function(){return r.c})),n.d(e,"__wbg_stack_558ba5917b466edd",(function(){return r.g})),n.d(e,"__wbg_error_4bb6c2a97407129a",(function(){return r.a})),n.d(e,"__wbindgen_debug_string",(function(){return r.h})),n.d(e,"__wbindgen_throw",(function(){return r.m}))}]]);
//# sourceMappingURL=2.bootstrap.js.map