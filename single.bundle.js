!function(e){function t(t){for(var n,r,u=t[0],a=t[1],i=0,l=[];i<u.length;i++)r=u[i],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&l.push(o[r][0]),o[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(c&&c(t);l.length;)l.shift()()}var n={},r={4:0},o={4:0};function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{5:1}[e]&&t.push(r[e]=new Promise((function(t,n){for(var o=({5:"single-lazy"}[e]||e)+".bundle.css",a=u.p+o,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var c=(f=i[l]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(c===o||c===a))return t()}var s=document.getElementsByTagName("style");for(l=0;l<s.length;l++){var f;if((c=(f=s[l]).getAttribute("data-href"))===o||c===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete r[e],p.parentNode.removeChild(p),n(u)},p.href=a,document.getElementsByTagName("head")[0].appendChild(p)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=function(e){return u.p+""+({5:"single-lazy"}[e]||e)+".bundle.js"}(e);var c=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",c.name="ChunkLoadError",c.type=r,c.request=u,n[1](c)}o[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/wp-content/themes/hamidev-wordpress-100/resources/dist/",u.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var c=i;u(u.s=4)}({4:function(e,t,n){"use strict";n.r(t);n(5);var r=function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function a(e){try{l(r.next(e))}catch(e){u(e)}}function i(e){try{l(r.throw(e))}catch(e){u(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))},o=function(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}};console.log("this is the eager module for the single pages."),setTimeout((function(){return r(void 0,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,n.e(5).then(n.bind(null,8))];case 1:return e.sent(),[2]}}))}))}),5e3)},5:function(e,t,n){}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3NpbmdsZS9lYWdlci1sb2FkL3NpbmdsZS50cyJdLCJuYW1lcyI6WyJ3ZWJwYWNrSnNvbnBDYWxsYmFjayIsImRhdGEiLCJtb2R1bGVJZCIsImNodW5rSWQiLCJjaHVua0lkcyIsIm1vcmVNb2R1bGVzIiwiaSIsInJlc29sdmVzIiwibGVuZ3RoIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW5zdGFsbGVkQ2h1bmtzIiwicHVzaCIsIm1vZHVsZXMiLCJwYXJlbnRKc29ucEZ1bmN0aW9uIiwic2hpZnQiLCJpbnN0YWxsZWRNb2R1bGVzIiwiaW5zdGFsbGVkQ3NzQ2h1bmtzIiwiNCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJleHBvcnRzIiwibW9kdWxlIiwibCIsImUiLCJwcm9taXNlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaHJlZiIsImZ1bGxocmVmIiwicCIsImV4aXN0aW5nTGlua1RhZ3MiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZGF0YUhyZWYiLCJ0YWciLCJnZXRBdHRyaWJ1dGUiLCJyZWwiLCJleGlzdGluZ1N0eWxlVGFncyIsImxpbmtUYWciLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJldmVudCIsInJlcXVlc3QiLCJ0YXJnZXQiLCJzcmMiLCJlcnIiLCJFcnJvciIsImNvZGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsInRoZW4iLCJpbnN0YWxsZWRDaHVua0RhdGEiLCJwcm9taXNlIiwib25TY3JpcHRDb21wbGV0ZSIsInNjcmlwdCIsImNoYXJzZXQiLCJ0aW1lb3V0IiwibmMiLCJzZXRBdHRyaWJ1dGUiLCJqc29ucFNjcmlwdFNyYyIsImVycm9yIiwiY2xlYXJUaW1lb3V0IiwiY2h1bmsiLCJlcnJvclR5cGUiLCJyZWFsU3JjIiwibWVzc2FnZSIsIm5hbWUiLCJ1bmRlZmluZWQiLCJzZXRUaW1lb3V0IiwiaGVhZCIsImFsbCIsIm0iLCJjIiwiZCIsImdldHRlciIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsIm9lIiwiY29uc29sZSIsImpzb25wQXJyYXkiLCJ3aW5kb3ciLCJvbGRKc29ucEZ1bmN0aW9uIiwic2xpY2UiLCJzIiwibG9nIl0sIm1hcHBpbmdzIjoiYUFDRSxTQUFTQSxFQUFxQkMsR0FRN0IsSUFQQSxJQU1JQyxFQUFVQyxFQU5WQyxFQUFXSCxFQUFLLEdBQ2hCSSxFQUFjSixFQUFLLEdBS0FLLEVBQUksRUFBR0MsRUFBVyxHQUNwQ0QsRUFBSUYsRUFBU0ksT0FBUUYsSUFDekJILEVBQVVDLEVBQVNFLEdBQ2hCRyxPQUFPQyxVQUFVQyxlQUFlQyxLQUFLQyxFQUFpQlYsSUFBWVUsRUFBZ0JWLElBQ3BGSSxFQUFTTyxLQUFLRCxFQUFnQlYsR0FBUyxJQUV4Q1UsRUFBZ0JWLEdBQVcsRUFFNUIsSUFBSUQsS0FBWUcsRUFDWkksT0FBT0MsVUFBVUMsZUFBZUMsS0FBS1AsRUFBYUgsS0FDcERhLEVBQVFiLEdBQVlHLEVBQVlILElBS2xDLElBRkdjLEdBQXFCQSxFQUFvQmYsR0FFdENNLEVBQVNDLFFBQ2RELEVBQVNVLE9BQVRWLEdBT0YsSUFBSVcsRUFBbUIsR0FHbkJDLEVBQXFCLENBQ3hCQyxFQUFHLEdBTUFQLEVBQWtCLENBQ3JCTyxFQUFHLEdBV0osU0FBU0MsRUFBb0JuQixHQUc1QixHQUFHZ0IsRUFBaUJoQixHQUNuQixPQUFPZ0IsRUFBaUJoQixHQUFVb0IsUUFHbkMsSUFBSUMsRUFBU0wsRUFBaUJoQixHQUFZLENBQ3pDSSxFQUFHSixFQUNIc0IsR0FBRyxFQUNI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QixpQkFBVEYsRUFBbUIsSUFBSSxJQUFJTSxLQUFPTixFQUFPbkUsRUFBb0IwRCxFQUFFYSxFQUFJRSxFQUFLLFNBQVNBLEdBQU8sT0FBT04sRUFBTU0sSUFBUUMsS0FBSyxLQUFNRCxJQUM5SSxPQUFPRixHQUlSdkUsRUFBb0IyRSxFQUFJLFNBQVN6RSxHQUNoQyxJQUFJeUQsRUFBU3pELEdBQVVBLEVBQU9vRSxXQUM3QixXQUF3QixPQUFPcEUsRUFBZ0IsU0FDL0MsV0FBOEIsT0FBT0EsR0FFdEMsT0FEQUYsRUFBb0IwRCxFQUFFQyxFQUFRLElBQUtBLEdBQzVCQSxHQUlSM0QsRUFBb0I0RCxFQUFJLFNBQVNnQixFQUFRQyxHQUFZLE9BQU96RixPQUFPQyxVQUFVQyxlQUFlQyxLQUFLcUYsRUFBUUMsSUFHekc3RSxFQUFvQlcsRUFBSSwyREFHeEJYLEVBQW9COEUsR0FBSyxTQUFTakQsR0FBMkIsTUFBcEJrRCxRQUFRbEMsTUFBTWhCLEdBQVlBLEdBRW5FLElBQUltRCxFQUFhQyxPQUFxQixhQUFJQSxPQUFxQixjQUFLLEdBQ2hFQyxFQUFtQkYsRUFBV3ZGLEtBQUtpRixLQUFLTSxHQUM1Q0EsRUFBV3ZGLEtBQU9kLEVBQ2xCcUcsRUFBYUEsRUFBV0csUUFDeEIsSUFBSSxJQUFJbEcsRUFBSSxFQUFHQSxFQUFJK0YsRUFBVzdGLE9BQVFGLElBQUtOLEVBQXFCcUcsRUFBVy9GLElBQzNFLElBQUlVLEVBQXNCdUYsRUFJbkJsRixFQUFvQkEsRUFBb0JvRixFQUFJLEcsODNDQ2pQckRMLFFBQVFNLElBQUksa0RBRVpoQyxZQUFXLHFELGtEQUNQLFNBQU0sNkIsY0FBTixTLGFBQ0QsTSIsImZpbGUiOiJzaW5nbGUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIENTUyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDc3NDaHVua3MgPSB7XG4gXHRcdDQ6IDBcbiBcdH1cblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDQ6IDBcbiBcdH07XG5cblxuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7XCI1XCI6XCJzaW5nbGUtbGF6eVwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5idW5kbGUuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4gQ1NTIGxvYWRpbmdcbiBcdFx0dmFyIGNzc0NodW5rcyA9IHtcIjVcIjoxfTtcbiBcdFx0aWYoaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdKSBwcm9taXNlcy5wdXNoKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSk7XG4gXHRcdGVsc2UgaWYoaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdICE9PSAwICYmIGNzc0NodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHR2YXIgaHJlZiA9IFwiXCIgKyAoe1wiNVwiOlwic2luZ2xlLWxhenlcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuYnVuZGxlLmNzc1wiO1xuIFx0XHRcdFx0dmFyIGZ1bGxocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgaHJlZjtcbiBcdFx0XHRcdHZhciBleGlzdGluZ0xpbmtUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xuIFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nTGlua1RhZ3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHRhZyA9IGV4aXN0aW5nTGlua1RhZ3NbaV07XG4gXHRcdFx0XHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIikgfHwgdGFnLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gXHRcdFx0XHRcdGlmKHRhZy5yZWwgPT09IFwic3R5bGVzaGVldFwiICYmIChkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpKSByZXR1cm4gcmVzb2x2ZSgpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0dmFyIGV4aXN0aW5nU3R5bGVUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdHlsZVwiKTtcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1N0eWxlVGFncy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgdGFnID0gZXhpc3RpbmdTdHlsZVRhZ3NbaV07XG4gXHRcdFx0XHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik7XG4gXHRcdFx0XHRcdGlmKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikgcmV0dXJuIHJlc29sdmUoKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHZhciBsaW5rVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gXHRcdFx0XHRsaW5rVGFnLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuIFx0XHRcdFx0bGlua1RhZy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuIFx0XHRcdFx0bGlua1RhZy5vbmxvYWQgPSByZXNvbHZlO1xuIFx0XHRcdFx0bGlua1RhZy5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcbiBcdFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYyB8fCBmdWxsaHJlZjtcbiBcdFx0XHRcdFx0dmFyIGVyciA9IG5ldyBFcnJvcihcIkxvYWRpbmcgQ1NTIGNodW5rIFwiICsgY2h1bmtJZCArIFwiIGZhaWxlZC5cXG4oXCIgKyByZXF1ZXN0ICsgXCIpXCIpO1xuIFx0XHRcdFx0XHRlcnIuY29kZSA9IFwiQ1NTX0NIVU5LX0xPQURfRkFJTEVEXCI7XG4gXHRcdFx0XHRcdGVyci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiBcdFx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXVxuIFx0XHRcdFx0XHRsaW5rVGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGlua1RhZylcbiBcdFx0XHRcdFx0cmVqZWN0KGVycik7XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0bGlua1RhZy5ocmVmID0gZnVsbGhyZWY7XG5cbiBcdFx0XHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuIFx0XHRcdFx0aGVhZC5hcHBlbmRDaGlsZChsaW5rVGFnKTtcbiBcdFx0XHR9KS50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0XHR9KSk7XG4gXHRcdH1cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuIFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvd3AtY29udGVudC90aGVtZXMvaGFtaWRldi13b3JkcHJlc3MtMTAwL3Jlc291cmNlcy9kaXN0L1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvc2luZ2xlL2VhZ2VyLWxvYWQvc2luZ2xlLnNjc3NcIjtcblxuY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBlYWdlciBtb2R1bGUgZm9yIHRoZSBzaW5nbGUgcGFnZXMuXCIpO1xuXG5zZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJzaW5nbGUtbGF6eVwiICovICcuLi9sYXp5LWxvYWQvc2luZ2xlJyk7XG59LCA1MDAwKTsiXSwic291cmNlUm9vdCI6IiJ9