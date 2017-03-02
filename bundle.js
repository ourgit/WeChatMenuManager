!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=33)}([function(e,t){e.exports=React},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=p[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(l(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(l(r.parts[a],t));p[r.id]={id:r.id,refs:1,parts:i}}}}function r(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],a=o[0],i=o[1],s=o[2],l=o[3],c={css:i,media:s,sourceMap:l};n[a]?n[a].parts.push(c):t.push(n[a]={id:a,parts:[c]})}return t}function o(e,t){var n=b(),r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function i(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function l(e,t){var n,r,o;if(t.singleton){var l=_++;n=m||(m=i(t)),r=c.bind(null,n,l,!1),o=c.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=f.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=i(t),r=u.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function c(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function u(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var p={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=d(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,_=0,y=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=r(e);return n(o,t),function(e){for(var a=[],i=0;i<o.length;i++){var s=o[i],l=p[s.id];l.refs--,a.push(l)}if(e){var c=r(e);n(c,t)}for(var i=0;i<a.length;i++){var l=a[i];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete p[l.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=(n.n(i),n(4)),l=(n.n(s),n(30)),c=n.n(l),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=document.createElement("div");document.body.appendChild(f);var p=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={isVisible:!0},e.close=function(){e.setState({isVisible:!1})},e}return a(t,e),u(t,[{key:"render",value:function(){return this.state.isVisible?i.createElement("div",{className:c.a.mask,onClick:this.close},i.createElement("div",{className:[c.a.modal,c.a[this.props.type||""]].join(" "),onClick:function(e){return e.stopPropagation()}},i.createElement("h1",null,this.props.title),i.createElement("p",null,this.props.body),i.createElement("div",{className:c.a.buttons},i.createElement("button",{onClickCapture:this.close,onClick:this.props.onConfirm,className:c.a.confirm},"确定"),this.props.onConfirm&&i.createElement("button",{onClick:this.close},"取消")))):null}}],[{key:"confirm",value:function(e){s.render(i.createElement(t,Object.assign({},e,{key:t.key++})),f)}}]),t}(i.PureComponent);p.key=0,t.a=p},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=(n.n(r),n(4)),a=(n.n(o),n(22)),i=(n.n(a),n(8)),s=document.getElementById("root"),l=function(){o.render(r.createElement(a.AppContainer,null,r.createElement(i.a,null)),s)};l()},function(e,t,n){e.exports=n.p+"index.html"},function(e,t,n){e.exports=n.p+"sample.json"},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=(n.n(i),n(26)),l=n.n(s),c=n(12),u=n(11),f=n(9),p=n(13),d=n(10),h=n(3),b=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));e.save=function(){return e.state.createURL?(e.setState({isBusy:!0}),void fetch(e.state.createURL,{method:"POST",body:JSON.stringify({button:e.state.buttons})}).then(function(e){return e.text()}).then(function(t){e.setState({isBusy:!1});try{var n=JSON.parse(t);"ok"===n.errmsg?h.a.confirm({type:"good",title:"提交成功",body:"请稍等片刻，等待菜单生效。"}):h.a.confirm({type:"error",title:"提交失败...",body:i.createElement("pre",null,t)})}catch(e){h.a.confirm({title:"未知的返回格式",body:i.createElement("pre",null,t)})}}).catch(function(t){e.setState({isBusy:!1}),h.a.confirm({type:"error",title:"可能是接口异常...",body:"详情为 "+t.toString()+"，请打开网络面板查看。"})})):e.setState({isSettingsVisible:!0})},e.confirmSave=function(){h.a.confirm({type:"info",title:"请确认检查无误...",body:i.createElement("div",null,"将提交",i.createElement("pre",null,JSON.stringify({button:e.state.buttons})),"至 ",i.createElement("code",null,e.state.createURL)),onConfirm:e.save})};var n=location.hash.slice(1),a="",s="";try{var l=JSON.parse(atob(n)),c=b(l,2);a=c[0],s=c[1]}catch(e){}return e.state={buttons:[],path:[],mode:"update",getURL:a,createURL:s,isSettingsVisible:!0,isBusy:!1},e.setState=e.setState.bind(e),e}return a(t,e),m(t,[{key:"render",value:function(){return i.createElement("div",null,i.createElement(c.a,{isSettingsVisible:this.state.isSettingsVisible,setState:this.setState}),i.createElement(p.a,{getURL:this.state.getURL,createURL:this.state.createURL,isVisible:!this.state.getURL||this.state.isSettingsVisible,setState:this.setState}),i.createElement("div",{className:l.a.container},i.createElement("div",{className:l.a.phone},i.createElement(u.a,{buttons:this.state.buttons,setState:this.setState})),i.createElement("div",{className:l.a.panel},i.createElement(f.a,{key:this.state.mode+this.state.path,buttons:this.state.buttons,path:this.state.path,mode:this.state.mode,setState:this.setState}))),i.createElement("button",{className:l.a.save,onClick:this.confirmSave,disabled:this.state.isBusy},this.state.createURL?this.state.isBusy?"提交中，请稍等...":"保存所有更改并提交":"请先填写用来创建菜单的 URL"),i.createElement(d.a,null))}}]),t}(i.PureComponent);t.a=_},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=(n.n(i),n(27)),l=n.n(s),c=n(3),u=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.remove=function(){var t=e.props,n=t.buttons,r=t.path,o=u(r,2),a=o[0],i=o[1],s=[];1===r.length?s=n.filter(function(e,t){return t!==a}):2===r.length&&(s=n.slice(),s[a].sub_button=s[a].sub_button.filter(function(e,t){return t!==i})),e.props.setState({buttons:s,path:[]})},e.confirmRemove=function(){var t=e.props,n=t.buttons,r=t.path,o=u(r,2),a=o[0],i=o[1],s=1===r.length?n[a].name:n[a].sub_button[i].name;c.a.confirm({type:"warning",title:"确认删除“"+s+"”？",body:"此操作不可撤销！",onConfirm:e.remove})},e.update=function(t){if(t.preventDefault(),"add"===e.props.mode)return e.add();if(t.currentTarget.checkValidity()){var n=e.props,r=n.buttons,o=n.path,a=u(o,2),i=a[0],s=a[1],l=r.slice();if(1===o.length)l[i].name=e.nameInput.value;else if(2===o.length){var c=l[i].sub_button[s];c.name=e.nameInput.value,c.url=e.urlInput.value}e.props.setState({buttons:l,path:[]})}},e.add=function(){if(e.nameInput.value){var t=e.props,n=t.buttons,r=t.path,o=u(r,2),a=o[0],i=o[1],s=n.slice();1===r.length?s.splice(a,0,{name:e.nameInput.value,sub_button:[]}):2===r.length&&s[a].sub_button.splice(i,0,{type:"view",name:e.nameInput.value,url:e.urlInput.value,sub_button:[]}),e.props.setState({buttons:s,path:[]})}},e}return a(t,e),f(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.buttons,r=t.path,o=t.mode,a=u(r,2),s=a[0],c=a[1],f="add"===o,p=i.createElement("div",null,f||i.createElement("button",{type:"button",onClick:this.confirmRemove,className:l.a.del},"删除"),i.createElement("button",{type:"submit",className:f?l.a.add:l.a.save},f?"新增":"保存"));switch(r.length){case 1:return i.createElement("form",{className:l.a.editor,onSubmit:this.update},i.createElement("label",{htmlFor:"name"},"名称"),i.createElement("input",{name:"name",ref:function(t){e.nameInput=t},required:!0,defaultValue:f?"":n[s].name}),p);case 2:return i.createElement("form",{className:l.a.editor,onSubmit:this.update},i.createElement("label",{htmlFor:"name"},"名称"),i.createElement("input",{name:"name",ref:function(t){e.nameInput=t},required:!0,defaultValue:f?"":n[s].sub_button[c].name}),i.createElement("label",{htmlFor:"url"},"URL"),i.createElement("input",{type:"url",name:"url",ref:function(t){e.urlInput=t},required:!0,defaultValue:f?"":n[s].sub_button[c].url}),p);default:return i.createElement("p",{className:l.a.default},"请在左侧面板中选择一个菜单项。")}}}]),t}(i.PureComponent);t.a=p},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=(n.n(i),n(28)),l=n.n(s),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"render",value:function(){return i.createElement("footer",{className:l.a.footer},i.createElement("span",null,"©2017 ",i.createElement("a",{href:"https://HandsomeOne.github.io/",target:"_blank"},"HandsomeOne")),i.createElement("span",{className:l.a.badge},i.createElement("a",{href:"https://github.com/HandsomeOne/WeChatMenuManager",target:"_blank"},"Fork me on GitHub")))}}]),t}(i.PureComponent);t.a=u},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=(n.n(i),n(29)),l=n.n(s),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"render",value:function(){var e=this;return i.createElement("ul",{className:l.a.menu},this.props.buttons.map(function(n,r){return i.createElement("li",null,i.createElement("ul",{className:l.a.subMenu},n.sub_button.map(function(n,o){return i.createElement("li",{onClick:function(n){t.highlight(n.currentTarget),e.props.setState({mode:"update",path:[r,o]})}},n.name)}),n.sub_button.length<5&&i.createElement("li",{className:l.a.add,onClick:function(o){t.highlight(o.currentTarget),e.props.setState({mode:"add",path:[r,n.sub_button.length]})}},"+")),i.createElement("h5",{onClick:function(n){t.highlight(n.currentTarget),e.props.setState({mode:"update",path:[r]})}},n.name))}),this.props.buttons.length<3&&i.createElement("li",{className:l.a.add,onClick:function(n){t.highlight(n.currentTarget),e.props.setState({mode:"add",path:[e.props.buttons.length]})}},i.createElement("b",null,"+")))}}],[{key:"highlight",value:function(e){var t=document.querySelector("."+l.a.highlight);t&&(t.className=Array.from(t.classList).filter(function(e){return e!==l.a.highlight}).join(" ")),e.className+=" "+l.a.highlight}}]),t}(i.PureComponent);t.a=u},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=(n.n(i),n(31)),l=n.n(s),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.toggleSettings=function(){e.props.setState({isSettingsVisible:!e.props.isSettingsVisible})},e}return a(t,e),c(t,[{key:"render",value:function(){return i.createElement("nav",{className:l.a.nav},i.createElement("a",{onClick:this.toggleSettings,className:l.a.rotate},i.createElement("svg",{viewBox:"0 0 100 100"},i.createElement("path",{d:"M87.687 45.077c-.313-2.433-.816-4.807-1.542-7.079l8.145-11.73-5.827-7.515-.094-.123-5.824-7.514-12.955 5.577c-2.041-1.265-4.192-2.362-6.459-3.219L59.42 0H40.586l-3.709 13.474c-2.27.857-4.421 1.955-6.463 3.222l-12.957-5.577-5.825 7.514-.097.124-5.822 7.517 8.146 11.731a39.832 39.832 0 0 0-1.544 7.079L0 52.032l2.08 9.375.033.15 2.08 9.375 14.001.761a39.157 39.157 0 0 0 4.4 5.668l-2.396 14.227 8.416 4.173.138.067L37.169 100l9.309-10.796c1.161.109 2.335.173 3.524.173s2.358-.074 3.52-.184l9.317 10.804 8.415-4.173.141-.066 8.413-4.172-2.396-14.228a39.06 39.06 0 0 0 4.4-5.672l14-.759 2.078-9.375.035-.154L100 52.025l-12.313-6.948zM50.003 34.51c8.435 0 15.272 7.035 15.272 15.719 0 8.679-6.839 15.717-15.272 15.717-8.436 0-15.272-7.038-15.272-15.717 0-8.684 6.838-15.719 15.272-15.719z"}))),i.createElement("a",{href:"https://github.com/HandsomeOne/WeChatMenuManager#readme",target:"_blank",className:l.a.help},i.createElement("svg",{viewBox:"0 0 100 100"},i.createElement("path",{d:"M75 0H25C11.19 0 0 11.193 0 25v50c0 13.802 11.19 25 25 25h50c13.811 0 25-11.198 25-25V25c0-13.807-11.189-25-25-25zM57.203 85.067H41.504V72.542h15.699v12.525zm16.154-43.026c-.84 2.066-1.873 3.834-3.102 5.298a20.59 20.59 0 0 1-4.101 3.751 91.479 91.479 0 0 0-4.249 3.101c-1.333 1.034-1.553 2.214-2.596 3.547-1.025 1.335-.977 3.004-.977 5.006v3.924H41.668v-4.623c0-2.864 1.366-5.265 2.27-7.202.896-1.935 2.255-3.581 3.459-4.947 1.196-1.367 2.62-2.556 3.955-3.557 1.327-.993 2.637-1.993 3.776-2.995 1.123-1.001 2.083-2.1 2.783-3.304.7-1.197 1.043-2.694.977-4.5 0-3.06-.74-5.33-2.245-6.795-1.498-1.465-3.582-2.206-6.25-2.206-1.8 0-3.337.351-4.639 1.05a9.172 9.172 0 0 0-3.199 2.808c-.837 1.163-1.448 3.593-1.847 5.156-.407 1.57-.602 6.115-.602 6.115H25.399c.073-8.333.684-7.963 1.855-10.965 1.164-2.995 2.8-6.132 4.899-8.33 2.099-2.197 4.63-4.179 7.601-5.417a25.782 25.782 0 0 1 9.945-1.977c4.736 0 8.683.581 11.856 1.876 3.167 1.302 5.713 2.889 7.65 4.817 1.929 1.937 3.312 4.004 4.149 6.234.831 2.237 1.245 4.313 1.245 6.242.002 3.206-.412 5.827-1.242 7.893z"}))))}}]),t}(i.PureComponent);t.a=u},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=(n.n(i),n(32)),l=n.n(s),c=n(14),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={error:"",errorId:0,isBusy:!1},e.finish=function(t){location.hash=btoa(JSON.stringify([e.getURLInput.value,e.createURLInput.value])),e.setState({error:"",isBusy:!1});var n={getURL:e.getURLInput.value,createURL:e.createURLInput.value,isSettingsVisible:!1};t&&(n.buttons=t),e.props.setState(n)},e.check=function(){e.setState({isBusy:!0}),fetch(e.getURLInput.value).then(function(e){return e.json()}).then(function(t){n.i(c.a)(t),e.finish(t.menu.button)}).catch(function(t){e.setState({errorId:e.state.errorId+1,error:t.toString(),isBusy:!1})})},e.submit=function(t){t.preventDefault(),e.getURLInput.value&&t.currentTarget.checkValidity()&&(e.state.error||e.getURLInput.value!==e.props.getURL?e.check():e.finish())},e}return a(t,e),u(t,[{key:"componentDidMount",value:function(){this.check()}},{key:"render",value:function(){var e=this;return i.createElement("div",{className:l.a.settings,style:{display:this.props.isVisible?"block":"none"}},i.createElement("form",{className:l.a.main,onSubmit:this.submit},i.createElement("label",{htmlFor:"getURL"},"用于获取菜单的 URL"),i.createElement("input",{name:"getURL",type:"url",required:!0,defaultValue:this.props.getURL,ref:function(t){e.getURLInput=t}}),i.createElement("label",{htmlFor:"createURL"},"用于创建菜单的 URL",i.createElement("small",null,"(可稍后填写)")),i.createElement("input",{name:"createURL",type:"url",defaultValue:this.props.createURL,ref:function(t){e.createURLInput=t}}),i.createElement("button",{type:"submit",disabled:this.state.isBusy},this.state.isBusy?"请求中...":"保存"),i.createElement("p",{className:l.a.error,key:this.state.errorId},this.state.error)))}}]),t}(i.PureComponent);t.a=f},function(e,t,n){"use strict";function r(e){if(!("menu"in e))throw new Error("没有 menu 字段，请检查菜单的返回体");if(!("button"in e.menu))throw new Error("menu 中没有 button 字段，请检查菜单的返回体");if(!Array.isArray(e.menu.button))throw new Error("menu.button 不是数组，请检查菜单的返回体")}t.a=r},function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"@import url(https://fonts.proxy.ustclug.org/css?family=Lato:400);",""]),t.push([e.i,"*{margin:0;padding:0;box-sizing:border-box}body,button,input{font-family:Lato}body{background-color:#191919;color:#fff;line-height:1.5;font-size:15px;font-weight:400;width:800px;margin:0 auto}a{text-decoration:none;color:#76daff}a:active,a:focus,a:hover{cursor:pointer;color:#fff}pre{white-space:pre-line;background-color:#343436;color:#fff;font-size:80%;padding:.5em;margin:.5em 0}label{font-weight:400;display:block;margin:0 0 3px;text-transform:uppercase;letter-spacing:.5px}input{margin-bottom:24px;width:100%;font-size:13px;padding:4px 5px;outline:0;border:3px solid #ccc;border-radius:2px;-webkit-transition:border-color .2s;transition:border-color .2s}input:focus{border-color:#555}button{font-size:1rem;text-shadow:none;display:inline-block;border:0;outline:0;padding:10px 16px;margin:0 10px 0 0;position:relative;border-radius:3px;border:3px solid transparent;background:#ccc;color:#111;white-space:nowrap;text-overflow:ellipsis;text-decoration:none;cursor:pointer;text-align:center;font-weight:400}button:hover{background:#999}button:disabled{opacity:.5;cursor:default;pointer-events:none}.container___2O0vq{margin:80px auto 0;height:560px;display:-webkit-box;display:-ms-flexbox;display:flex}.phone___1IRxz{background-color:#28282b;width:320px;position:relative}.panel___2AoIb{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-left:40px}.save___2eQlb{display:block;width:100%;margin:40px 0 80px;background-color:#343436;color:#999}.save___2eQlb:hover{background:#0ebeff;color:#111}",""]),t.locals={container:"container___2O0vq",phone:"phone___1IRxz",panel:"panel___2AoIb",save:"save___2eQlb"}},function(e,t,n){t=e.exports=n(1)(),t.push([e.i,".del___3U21W{background:#ff3c41;color:#fff}.del___3U21W:hover{background:#ff090f}.default___ILU9T{color:#999}",""]),t.locals={del:"del___3U21W",default:"default___ILU9T"}},function(e,t,n){t=e.exports=n(1)(),t.push([e.i,".footer___e2DcI{height:40px;line-height:1;position:fixed;width:100%;bottom:0;left:0;padding:0 5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;color:#999;background:#343436;border-top:1px solid #3e3e3f}.badge___1nUtu{font-size:70%;font-weight:700;text-transform:uppercase;padding:1px 3px;background:#fcd000;border-radius:3px}.badge___1nUtu a{color:#000!important}",""]),t.locals={footer:"footer___e2DcI",badge:"badge___1nUtu"}},function(e,t,n){t=e.exports=n(1)(),t.push([e.i,".menu___aA3-t{margin:0;padding:0;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;bottom:0}.menu___aA3-t>li{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center;list-style:none;position:relative;background-color:#111}.menu___aA3-t>li h5{margin:0;padding:0;font-weight:400;line-height:30px;cursor:pointer}.menu___aA3-t .highlight___1n1Wm{background-color:#76daff;color:#111}.subMenu___2tTKT{margin:0;padding:0;position:absolute;width:100%;left:0;bottom:40px;color:#999}.subMenu___2tTKT>li{list-style:none;cursor:pointer}.add___15JXJ{color:#0ebeff}",""]),t.locals={menu:"menu___aA3-t",highlight:"highlight___1n1Wm",subMenu:"subMenu___2tTKT",add:"add___15JXJ"}},function(e,t,n){t=e.exports=n(1)(),t.push([e.i,".mask___LOG8h{width:100%;height:100%;position:fixed;top:0;left:0;z-index:100;background-color:rgba(0,0,0,.5)}.modal___1qzxf{border:10px solid #343436;position:fixed;width:600px;left:calc(50% - 300px);top:50px;padding:20px;background:#000;z-index:101}.modal___1qzxf h1{line-height:1.1;font-size:3rem;margin:0 0 10px}.modal___1qzxf p{color:#999;margin:0 0 25px}.modal___1qzxf button{background:#343436;color:#fff}.modal___1qzxf button:hover{background:#4d4d50}.modal___1qzxf.good___2dE0G{border-color:#47cf73}.modal___1qzxf.good___2dE0G .confirm___KrmEo{background-color:#47cf73}.modal___1qzxf.good___2dE0G .confirm___KrmEo:hover{background-color:#2fb45a}.modal___1qzxf.error___22JZl{border-color:#fcd000}.modal___1qzxf.error___22JZl .confirm___KrmEo{background-color:#fcd000;color:#111}.modal___1qzxf.error___22JZl .confirm___KrmEo:hover{background-color:#c9a600}.modal___1qzxf.warning___3kbqh{border-color:#ff3c41}.modal___1qzxf.warning___3kbqh .confirm___KrmEo{background-color:#ff3c41}.modal___1qzxf.warning___3kbqh .confirm___KrmEo:hover{background-color:#ff090f}.modal___1qzxf.info___1ApBx{border-color:#76daff}.modal___1qzxf.info___1ApBx .confirm___KrmEo{background-color:#0ebeff}.modal___1qzxf.info___1ApBx .confirm___KrmEo:hover{background-color:#009fda}",""]),t.locals={mask:"mask___LOG8h",modal:"modal___1qzxf",good:"good___2dE0G",confirm:"confirm___KrmEo",error:"error___22JZl",warning:"warning___3kbqh",info:"info___1ApBx"}},function(e,t,n){t=e.exports=n(1)(),t.push([e.i,".nav___YLvja{position:fixed;z-index:20;width:800px;top:0;left:calc(50% - 400px);padding-top:16px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.nav___YLvja a{display:inline-block;height:48px;width:48px;line-height:48px;margin:0;padding:0;border-radius:50%;background:#343436;text-align:center}.nav___YLvja a svg{width:16px;height:16px;fill:#fff}.nav___YLvja a:hover{background:#4d4d50}.nav___YLvja a.help___3hoCB svg{fill:#ae63e4}.rotate___2Zzro:hover svg{-webkit-animation:rotate___2Zzro 1s linear infinite;animation:rotate___2Zzro 1s linear infinite}@-webkit-keyframes rotate___2Zzro{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes rotate___2Zzro{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}",""]),t.locals={nav:"nav___YLvja",help:"help___3hoCB",rotate:"rotate___2Zzro"}},function(e,t,n){t=e.exports=n(1)(),t.push([e.i,".settings___362yd{width:100%;position:fixed;z-index:10;top:0;left:0;background:-webkit-linear-gradient(top,rgba(0,0,0,.95) 20%,rgba(0,0,0,.75) 60%,transparent);background:linear-gradient(180deg,rgba(0,0,0,.95) 20%,rgba(0,0,0,.75) 60%,transparent);height:100%}.main___2nAjs{width:800px;margin:80px auto}.main___2nAjs small{color:#999;margin:0 .5em}.main___2nAjs button{float:left}.error___1-XTy{line-height:50px;color:#ff3c41;-webkit-animation:fadein___2CVYw .2s;animation:fadein___2CVYw .2s}@-webkit-keyframes fadein___2CVYw{0%{opacity:0}to{opacity:1}}@keyframes fadein___2CVYw{0%{opacity:0}to{opacity:1}}",""]),t.locals={settings:"settings___362yd",main:"main___2nAjs",error:"error___1-XTy",fadein:"fadein___2CVYw"}},function(e,t,n){e.exports=n(25)},function(e,t,n){"use strict";e.exports=n(24)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=s.Component,c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return this.props.component?s.createElement(this.props.component,this.props.props):s.Children.only(this.props.children)}}]),t}(l);e.exports=c},function(e,t,n){"use strict";var r=n(23);e.exports=function(e){throw this&&this.callback?new Error('React Hot Loader: The Webpack loader is now exported separately. If you use Babel, we recommend that you remove "react-hot-loader" from the "loaders" section of your Webpack configuration altogether, and instead add "react-hot-loader/babel" to the "plugins" section of your .babelrc file. If you prefer not to use Babel, replace "react-hot-loader" or "react-hot" with "react-hot-loader/webpack" in the "loaders" section of your Webpack configuration.'):e&&e.types&&e.types.IfStatement?new Error('React Hot Loader: The Babel plugin is exported separately. Replace "react-hot-loader" with "react-hot-loader/babel" in the "plugins" section of your .babelrc file. While we recommend the above, if you prefer not to use Babel, you may remove "react-hot-loader" from the "plugins" section of your .babelrc file altogether, and instead add "react-hot-loader/webpack" to the "loaders" section of your Webpack configuration.'):new Error('React Hot Loader does not have a default export. If you use the import statement, make sure to include the curly braces: import { AppContainer } from "react-hot-loader". If you use CommonJS, make sure to read the named export: require("react-hot-loader").AppContainer.');
},e.exports.AppContainer=r},function(e,t,n){var r=n(15);"string"==typeof r&&(r=[[e.i,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(16);"string"==typeof r&&(r=[[e.i,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(17);"string"==typeof r&&(r=[[e.i,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(18);"string"==typeof r&&(r=[[e.i,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(19);"string"==typeof r&&(r=[[e.i,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(20);"string"==typeof r&&(r=[[e.i,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(21);"string"==typeof r&&(r=[[e.i,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){n(7),n(6),e.exports=n(5)}]);