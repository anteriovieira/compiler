!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=(n.n(o),n(2));n.n(i)},function(e,t){function n(e){return e=e.replace(/\s*\n+\s*/g," "),e=e.replace(/>\s+/g,">").replace(/\s+</g,"<"),e=Vue.compile(e),e=e.staticRenderFns.toString().replace(/^function anonymous/,"function staticRenderFns")+"\n"+e.render.toString().replace(/^function anonymous/,"function render"),e=js_beautify(e,{wrap_line_length:80,break_chained_methods:!0})}Vue.component("highlight",{template:'<pre><code class="javascript"></code></pre>',props:["code"],mounted:function(){this.refresh()},watch:{code:function(){this.refresh()}},methods:{refresh:function(){var e=this.$el.querySelector("code");e.innerHTML=this.code,hljs.highlightBlock(e)}}}),Vue.component("code-mirror",{template:"<div></div>",props:["value"],mounted:function(){var e=this,t=CodeMirror(this.$el,{value:this.value,mode:"text/html",theme:"material",tabSize:2});window.addEventListener("load",function(){t.getWrapperElement().style.fontSize="16px",t.refresh()}),t.on("change",function(t){return e.$emit("input",t.getValue())}),this.editor=t},watch:{value:function(e){e!==this.editor.getValue()&&this.editor.setValue(e)}}});var o={custom:"<!-- type your html here -->","v-model":'<name-input v-model="fullName"></name-input>',"v-model_input":'<input v-model="fullName">',"v-model_textarea":'<!-- same as input -->\n<textarea v-model="fullName"></textarea>',"v-model_checkbox":'<input v-model="fullName" type="checkbox">',"v-model_radio":'<input v-model="fullName" type="radio">',"v-model_select":'<select v-model="fullName"></select>',"v-on":'<input v-on:input="update">',"v-on-event":'<input v-on:input="update($event)">',"v-on_filter":'<!-- filters does not work with v-on -->\n<input v-on:input="update | debounce(500)">',"v-bind_filter":'<textarea v-bind:value="message | truncate(140)"></textarea>',"v-bind":'<input v-bind:placeholder="inputMessage">',"v-pre":"<textarea v-pre>{{noCompilation}}</textarea>","v-cloak":"<div v-cloak></div>","v-once":"<div v-once></div>","v-text":'<span v-text="msg"></span>',"v-html":'<div v-html="html"></div>',"v-show":'<a v-show="signedIn">logout</a>',"v-if":'<a v-if="signedIn">logout</a>',"v-else":'<nav>\n  <a v-if="signedIn">logout</a>\n  <a v-else>login</a>\n</nav>\n',"v-else-if":"<div v-if=\"type === 'A'\">\n  A\n</div>\n<div v-else-if=\"type === 'B'\">\n  B\n</div>\n<div v-else-if=\"type === 'C'\">\n  C\n</div>\n<div v-else>\n  Not A/B/C\n</div>","v-for":'<ul><!-- v-for can\'t be the root element -->\n  <li v-for="todo, index in todos">\n    {{todo.label}}\n  </li>\n</ul>\n',slot:'<div>\n  <slot>\n    content\n  </slot>\n  <slot name="footer">\n    copyright\n  </slot>\n</div>',"slot-scoped":'<div class="parent">\n  <child>\n    <template scope="props">\n      <span>hello from parent</span>\n      <span>{{ props.text }}</span>\n    </template>\n  </child>\n</div>',"inline-template":"<my-component inline-template>\n  <div>\n    content\n  </div>\n</my-component>","component-is":'<component is="OtherComponent"></component>'};console.error=function(e){throw e};var i=decodeURI(location.hash.substr(1)),r=i?o[i]||atob(i):localStorage.getItem("input")||"<div></div>";new Vue({el:"#app",data:{input:r,error:"",code:"",version:Vue.version,samples:o,showMenu:!!o[i],selectedMenu:i},computed:{compiled:function(){try{this.code=n(this.input),this.error="",localStorage.setItem("input",this.input)}catch(e){this.error=e.toString()}return this.code},url:function(){return location.protocol+"//"+location.host+location.pathname},shareUrl:function(){return this.url+"#"+btoa(this.input)}},methods:{select:function(e){this.input=o[e],this.selectedMenu=e}}})},function(e,t){},function(e,t,n){e.exports=n(0)}]);