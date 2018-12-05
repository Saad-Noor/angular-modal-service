!function(e){var n={};function o(t){if(n[t])return n[t].exports;var l=n[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var l in e)o.d(t,l,function(n){return e[n]}.bind(null,l));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0)}([function(e,n,o){"use strict";angular.module("angularModalService",[]).provider("ModalService",function(){var e={closeDelay:0};this.configureOptions=function(n){angular.extend(e,n)},this.$get=["$animate","$document","$compile","$controller","$http","$rootScope","$q","$templateRequest","$timeout",function(n,o,t,l,r,c,a,i,s){return new function(e){var r=this;r.configOptions=e,r.openModals=[],r.closeModals=function(e,n){for(n=n||r.configOptions.closeDelay;r.openModals.length;)r.openModals[0].close(e,n),r.openModals.splice(0,1)},r.showModal=function(e){var u=angular.element(o[0].body),p=a.defer();return e.controller?(function(e,n){var o=a.defer();return e?o.resolve(e):n?i(n,!0).then(function(e){o.resolve(e)},function(e){o.reject(e)}):o.reject("No template or templateUrl has been specified."),o.promise}(e.template,e.templateUrl).then(function(i){var f={},d=(e.scope||c).$new(),m=null,g=e.locationChangeSuccess;!1===g?m=angular.noop:angular.isNumber(g)&&g>=0?s(function(){m=c.$on("$locationChangeSuccess",j)},g):s(function(){m=c.$on("$locationChangeSuccess",j)},r.configOptions.closeDelay);var v=a.defer(),y=a.defer(),b=!1,h={$scope:d,close:function(n,o){o=o||r.configOptions.closeDelay,"function"==typeof e.preClose&&e.preClose(f,n,o),void 0!==o&&null!==o||(o=0),b||(b=!0,s(function(){j(n)},o))}};e.inputs&&angular.extend(h,e.inputs);var $=t(i)(d);h.$element=$;var M=d[e.controllerAs],S=l(e.controller,h,!1,e.controllerAs);e.controllerAs&&M&&angular.extend(S,M);var O=u;function j(o){v.resolve(o),e.bodyClass&&u[0].classList.remove(e.bodyClass),n.leave($).then(function(){if($){y.resolve(o),d.$destroy();for(var e=0;e<r.openModals.length;e++)if(r.openModals[e].modal===f){r.openModals.splice(e,1);break}h.close=null,p=null,v=null,f=null,h=null,$=null,d=null}}),m&&m()}angular.isString(e.appendElement)?O=angular.element(o[0].querySelector(e.appendElement)):e.appendElement&&(O=e.appendElement),function(e,o){var t=e.children();t.length>0?n.enter(o,e,t[t.length-1]):n.enter(o,e)}(O,$),e.bodyClass&&u[0].classList.add(e.bodyClass),f.controller=S,f.scope=d,f.element=$,f.close=v.promise,f.closed=y.promise,angular.isFunction(f.controller.$onInit)&&f.controller.$onInit(),p.resolve(f),document.activeElement.blur(),r.openModals.push({modal:f,close:h.close})}).then(null,function(e){p.reject(e)}),p.promise):(p.reject("No controller has been specified."),p.promise)}}(e)}]})}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuZ3VsYXItbW9kYWwtc2VydmljZS5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImFuZ3VsYXIiLCJwcm92aWRlciIsIl9vcHRpb25zIiwiY2xvc2VEZWxheSIsInRoaXMiLCJjb25maWd1cmVPcHRpb25zIiwiY29uZmlnIiwiZXh0ZW5kIiwiJGdldCIsIiRhbmltYXRlIiwiJGRvY3VtZW50IiwiJGNvbXBpbGUiLCIkY29udHJvbGxlciIsIiRodHRwIiwiJHJvb3RTY29wZSIsIiRxIiwiJHRlbXBsYXRlUmVxdWVzdCIsIiR0aW1lb3V0IiwiY29uZmlnT3B0aW9ucyIsInNlbGYiLCJvcGVuTW9kYWxzIiwiY2xvc2VNb2RhbHMiLCJyZXN1bHQiLCJkZWxheSIsImxlbmd0aCIsImNsb3NlIiwic3BsaWNlIiwic2hvd01vZGFsIiwib3B0aW9ucyIsImJvZHkiLCJlbGVtZW50IiwiZGVmZXJyZWQiLCJkZWZlciIsImNvbnRyb2xsZXIiLCJ0ZW1wbGF0ZSIsInRlbXBsYXRlVXJsIiwicmVzb2x2ZSIsInRoZW4iLCJlcnJvciIsInJlamVjdCIsInByb21pc2UiLCJnZXRUZW1wbGF0ZSIsIm1vZGFsIiwibW9kYWxTY29wZSIsInNjb3BlIiwiJG5ldyIsInJvb3RTY29wZU9uQ2xvc2UiLCJsb2NhdGlvbkNoYW5nZVN1Y2Nlc3MiLCJub29wIiwiaXNOdW1iZXIiLCIkb24iLCJjbGVhblVwQ2xvc2UiLCJjbG9zZURlZmVycmVkIiwiY2xvc2VkRGVmZXJyZWQiLCJoYXNBbHJlYWR5QmVlbkNsb3NlZCIsImlucHV0cyIsIiRzY29wZSIsInByZUNsb3NlIiwidW5kZWZpbmVkIiwibW9kYWxFbGVtZW50IiwibGlua0ZuIiwiJGVsZW1lbnQiLCJjb250cm9sbGVyT2JqQmVmb3JlIiwiY29udHJvbGxlckFzIiwibW9kYWxDb250cm9sbGVyIiwiYXBwZW5kVGFyZ2V0IiwiYm9keUNsYXNzIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibGVhdmUiLCIkZGVzdHJveSIsImlzU3RyaW5nIiwiYXBwZW5kRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnQiLCJjaGlsZCIsImNoaWxkcmVuIiwiZW50ZXIiLCJhcHBlbmRDaGlsZCIsImFkZCIsImNsb3NlZCIsImlzRnVuY3Rpb24iLCIkb25Jbml0IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiYmx1ciIsInB1c2giXSwibWFwcGluZ3MiOiJhQUNBLElBQUFBLEtBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsSUFDQUcsRUFBQUgsRUFDQUksR0FBQSxFQUNBSCxZQVVBLE9BTkFJLEVBQUFMLEdBQUFNLEtBQUFKLEVBQUFELFFBQUFDLElBQUFELFFBQUFGLEdBR0FHLEVBQUFFLEdBQUEsRUFHQUYsRUFBQUQsUUFLQUYsRUFBQVEsRUFBQUYsRUFHQU4sRUFBQVMsRUFBQVYsRUFHQUMsRUFBQVUsRUFBQSxTQUFBUixFQUFBUyxFQUFBQyxHQUNBWixFQUFBYSxFQUFBWCxFQUFBUyxJQUNBRyxPQUFBQyxlQUFBYixFQUFBUyxHQUEwQ0ssWUFBQSxFQUFBQyxJQUFBTCxLQUsxQ1osRUFBQWtCLEVBQUEsU0FB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QVEsS0FDUmEsRUFBUyxLQUNUSSxFQUFlLEtBQ2ZoQixFQUFhLFFBSXJCRyxHQUFvQkEsSUF0RnBCOUMsUUFBUXVFLFNBQVMzQyxFQUFRNEMsZUFHekJQLEVBQWVqRSxRQUFROEIsUUFBUXBCLEVBQVUsR0FBRytELGNBQWM3QyxFQUFRNEMsZ0JBRTNENUMsRUFBUTRDLGdCQUVmUCxFQUFlckMsRUFBUTRDLGVBeEhyQixTQUFVRSxFQUFRQyxHQUNoQyxJQUFJQyxFQUFXRixFQUFPRSxXQUNsQkEsRUFBU3BELE9BQVMsRUFDWGYsRUFBU29FLE1BQU1GLEVBQU9ELEVBQVFFLEVBQVNBLEVBQVNwRCxPQUFTLElBRTdEZixFQUFTb0UsTUFBTUYsRUFBT0QsR0FzSHJCSSxDQUFZYixFQUFjTixHQUd0Qi9CLEVBQVFzQyxXQUNSckMsRUFBSyxHQUFHc0MsVUFBVVksSUFBSW5ELEVBQVFzQyxXQUlsQ3hCLEVBQU1ULFdBQWErQixFQUNuQnRCLEVBQU1FLE1BQVFELEVBQ2RELEVBQU1aLFFBQVU2QixFQUNoQmpCLEVBQU1qQixNQUFRMkIsRUFBY1osUUFDNUJFLEVBQU1zQyxPQUFTM0IsRUFBZWIsUUFNMUJ4QyxRQUFRaUYsV0FBV3ZDLEVBQU1ULFdBQVdpRCxVQUNwQ3hDLEVBQU1ULFdBQVdpRCxVQUlyQm5ELEVBQVNLLFFBQVFNLEdBR2pCeUMsU0FBU0MsY0FBY0MsT0FHdkJsRSxFQUFLQyxXQUFXa0UsTUFBTTVDLE1BQU9BLEVBQU9qQixNQUFPOEIsRUFBTzlCLFVBbURyRFksS0FBSyxLQUFNLFNBQVVDLEdBQ2xCUCxFQUFTUSxPQUFPRCxLQUdqQlAsRUFBU1MsVUFuTFpULEVBQVNRLE9BQU8scUNBQ1RSLEVBQVNTLFVBdUxyQixDQUFpQnRDIiwiZmlsZSI6ImFuZ3VsYXItbW9kYWwtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdhbmd1bGFyTW9kYWxTZXJ2aWNlJywgW10pO1xuXG5tb2R1bGUucHJvdmlkZXIoJ01vZGFsU2VydmljZScsIGZ1bmN0aW9uIE1vZGFsU2VydmljZVByb3ZpZGVyKCkge1xuICAgIHZhciBfb3B0aW9ucyA9IHtcbiAgICAgICAgY2xvc2VEZWxheTogMFxuICAgIH07XG5cbiAgICB0aGlzLmNvbmZpZ3VyZU9wdGlvbnMgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIGFuZ3VsYXIuZXh0ZW5kKF9vcHRpb25zLCBjb25maWcpO1xuICAgIH07XG4gICAgdGhpcy4kZ2V0ID0gWyckYW5pbWF0ZScsICckZG9jdW1lbnQnLCAnJGNvbXBpbGUnLCAnJGNvbnRyb2xsZXInLCAnJGh0dHAnLCAnJHJvb3RTY29wZScsICckcScsICckdGVtcGxhdGVSZXF1ZXN0JywgJyR0aW1lb3V0JyxcbiAgICAgICAgZnVuY3Rpb24gKCRhbmltYXRlLCAkZG9jdW1lbnQsICRjb21waWxlLCAkY29udHJvbGxlciwgJGh0dHAsICRyb290U2NvcGUsICRxLCAkdGVtcGxhdGVSZXF1ZXN0LCAkdGltZW91dCkge1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBNb2RhbFNlcnZpY2UoY29uZmlnT3B0aW9ucykge1xuXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgLy9zdGFzaCBjb25maWdPcHRpb25zXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWdPcHRpb25zID0gY29uZmlnT3B0aW9ucztcblxuICAgICAgICAgICAgICAgIC8vICBUcmFjayBvcGVuIG1vZGFscy5cbiAgICAgICAgICAgICAgICBzZWxmLm9wZW5Nb2RhbHMgPSBbXTtcblxuICAgICAgICAgICAgICAgIC8vICBSZXR1cm5zIGEgcHJvbWlzZSB3aGljaCBnZXRzIHRoZSB0ZW1wbGF0ZSwgZWl0aGVyXG4gICAgICAgICAgICAgICAgLy8gIGZyb20gdGhlIHRlbXBsYXRlIHBhcmFtZXRlciBvciB2aWEgYSByZXF1ZXN0IHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vICB0ZW1wbGF0ZSB1cmwgcGFyYW1ldGVyLlxuICAgICAgICAgICAgICAgIHZhciBnZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSwgdGVtcGxhdGVVcmwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0ZW1wbGF0ZVVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRlbXBsYXRlUmVxdWVzdCh0ZW1wbGF0ZVVybCwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0ZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoXCJObyB0ZW1wbGF0ZSBvciB0ZW1wbGF0ZVVybCBoYXMgYmVlbiBzcGVjaWZpZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyAgQWRkcyBhbiBlbGVtZW50IHRvIHRoZSBET00gYXMgdGhlIGxhc3QgY2hpbGQgb2YgaXRzIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIC8vICBsaWtlIGFwcGVuZCwgYnV0IHVzZXMgJGFuaW1hdGUgdG8gaGFuZGxlIGFuaW1hdGlvbnMuIFJldHVybnMgYVxuICAgICAgICAgICAgICAgIC8vICBwcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgb25jZSBhbGwgYW5pbWF0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAgICAgICAgICAgIHZhciBhcHBlbmRDaGlsZCA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRhbmltYXRlLmVudGVyKGNoaWxkLCBwYXJlbnQsIGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGFuaW1hdGUuZW50ZXIoY2hpbGQsIHBhcmVudCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vICBDbG9zZSBhbGwgbW9kYWxzLCBwcm92aWRpbmcgdGhlIGdpdmVuIHJlc3VsdCB0byB0aGUgY2xvc2UgcHJvbWlzZS5cbiAgICAgICAgICAgICAgICBzZWxmLmNsb3NlTW9kYWxzID0gZnVuY3Rpb24gKHJlc3VsdCwgZGVsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsYXkgPSBkZWxheSB8fCBzZWxmLmNvbmZpZ09wdGlvbnMuY2xvc2VEZWxheTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHNlbGYub3Blbk1vZGFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub3Blbk1vZGFsc1swXS5jbG9zZShyZXN1bHQsIGRlbGF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub3Blbk1vZGFscy5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgc2VsZi5zaG93TW9kYWwgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICBHZXQgdGhlIGJvZHkgb2YgdGhlIGRvY3VtZW50LCB3ZSdsbCBhZGQgdGhlIG1vZGFsIHRvIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHZhciBib2R5ID0gYW5ndWxhci5lbGVtZW50KCRkb2N1bWVudFswXS5ib2R5KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgQ3JlYXRlIGEgZGVmZXJyZWQgd2UnbGwgcmVzb2x2ZSB3aGVuIHRoZSBtb2RhbCBpcyByZWFkeS5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgVmFsaWRhdGUgdGhlIGlucHV0IHBhcmFtZXRlcnMuXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250cm9sbGVyTmFtZSA9IG9wdGlvbnMuY29udHJvbGxlcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250cm9sbGVyTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KFwiTm8gY29udHJvbGxlciBoYXMgYmVlbiBzcGVjaWZpZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyAgR2V0IHRoZSBhY3R1YWwgaHRtbCBvZiB0aGUgdGVtcGxhdGUuXG4gICAgICAgICAgICAgICAgICAgIGdldFRlbXBsYXRlKG9wdGlvbnMudGVtcGxhdGUsIG9wdGlvbnMudGVtcGxhdGVVcmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodGVtcGxhdGUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBUaGUgbWFpbiBtb2RhbCBvYmplY3Qgd2Ugd2lsbCBidWlsZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kYWwgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBDcmVhdGUgYSBuZXcgc2NvcGUgZm9yIHRoZSBtb2RhbC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kYWxTY29wZSA9IChvcHRpb25zLnNjb3BlIHx8ICRyb290U2NvcGUpLiRuZXcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdFNjb3BlT25DbG9zZSA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uQ2hhbmdlU3VjY2VzcyA9IG9wdGlvbnMubG9jYXRpb25DaGFuZ2VTdWNjZXNzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIEFsbG93IGxvY2F0aW9uQ2hhbmdlU3VjY2VzcyBldmVudCByZWdpc3RyYXRpb24gdG8gYmUgY29uZmlndXJhYmxlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBUcnVlIChkZWZhdWx0KSA9IGV2ZW50IHJlZ2lzdGVyZWQgd2l0aCBkZWZhdWx0Q2xvc2VEZWxheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAjIChncmVhdGVyIHRoYW4gMCkgPSBldmVudCByZWdpc3RlcmVkIHdpdGggZGVsYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgRmFsc2UgPSBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbkNoYW5nZVN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RTY29wZU9uQ2xvc2UgPSBhbmd1bGFyLm5vb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFuZ3VsYXIuaXNOdW1iZXIobG9jYXRpb25DaGFuZ2VTdWNjZXNzKSAmJiBsb2NhdGlvbkNoYW5nZVN1Y2Nlc3MgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290U2NvcGVPbkNsb3NlID0gJHJvb3RTY29wZS4kb24oJyRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3MnLCBjbGVhblVwQ2xvc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBsb2NhdGlvbkNoYW5nZVN1Y2Nlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdFNjb3BlT25DbG9zZSA9ICRyb290U2NvcGUuJG9uKCckbG9jYXRpb25DaGFuZ2VTdWNjZXNzJywgY2xlYW5VcENsb3NlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgc2VsZi5jb25maWdPcHRpb25zLmNsb3NlRGVsYXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIENyZWF0ZSB0aGUgaW5wdXRzIG9iamVjdCB0byB0aGUgY29udHJvbGxlciAtIHRoaXMgd2lsbCBpbmNsdWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIHRoZSBzY29wZSwgYXMgd2VsbCBhcyBhbGwgaW5wdXRzIHByb3ZpZGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBXZSB3aWxsIGFsc28gY3JlYXRlIGEgZGVmZXJyZWQgdGhhdCBpcyByZXNvbHZlZCB3aXRoIGEgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2xvc2UgZnVuY3Rpb24uIFRoZSBjb250cm9sbGVyIGNhbiB0aGVuIGNhbGwgJ2Nsb3NlKHJlc3VsdCknLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBUaGUgY29udHJvbGxlciBjYW4gYWxzbyBwcm92aWRlIGEgZGVsYXkgZm9yIGNsb3NpbmcgLSB0aGlzIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGhlbHBmdWwgaWYgdGhlcmUgYXJlIGNsb3NpbmcgYW5pbWF0aW9ucyB3aGljaCBtdXN0IGZpbmlzaCBmaXJzdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2xvc2VEZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNsb3NlZERlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFzQWxyZWFkeUJlZW5DbG9zZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZTogbW9kYWxTY29wZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uIChyZXN1bHQsIGRlbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheSA9IGRlbGF5IHx8IHNlbGYuY29uZmlnT3B0aW9ucy5jbG9zZURlbGF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIElmIHdlIGhhdmUgYSBwcmUtY2xvc2UgZnVuY3Rpb24sIGNhbGwgaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMucHJlQ2xvc2UgPT09ICdmdW5jdGlvbicpIG9wdGlvbnMucHJlQ2xvc2UobW9kYWwsIHJlc3VsdCwgZGVsYXkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVsYXkgPT09IHVuZGVmaW5lZCB8fCBkZWxheSA9PT0gbnVsbCkgZGVsYXkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0FscmVhZHlCZWVuQ2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQWxyZWFkeUJlZW5DbG9zZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhblVwQ2xvc2UocmVzdWx0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBJZiB3ZSBoYXZlIHByb3ZpZGVkIGFueSBpbnB1dHMsIHBhc3MgdGhlbSB0byB0aGUgY29udHJvbGxlci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5pbnB1dHMpIGFuZ3VsYXIuZXh0ZW5kKGlucHV0cywgb3B0aW9ucy5pbnB1dHMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIENvbXBpbGUgdGhlbiBsaW5rIHRoZSB0ZW1wbGF0ZSBlbGVtZW50LCBidWlsZGluZyB0aGUgYWN0dWFsIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIFNldCB0aGUgJGVsZW1lbnQgb24gdGhlIGlucHV0cyBzbyB0aGF0IGl0IGNhbiBiZSBpbmplY3RlZCBpZiByZXF1aXJlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlua0ZuID0gJGNvbXBpbGUodGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2RhbEVsZW1lbnQgPSBsaW5rRm4obW9kYWxTY29wZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRzLiRlbGVtZW50ID0gbW9kYWxFbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIENyZWF0ZSB0aGUgY29udHJvbGxlciwgZXhwbGljaXRseSBzcGVjaWZ5aW5nIHRoZSBzY29wZSB0byB1c2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRyb2xsZXJPYmpCZWZvcmUgPSBtb2RhbFNjb3BlW29wdGlvbnMuY29udHJvbGxlckFzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kYWxDb250cm9sbGVyID0gJGNvbnRyb2xsZXIob3B0aW9ucy5jb250cm9sbGVyLCBpbnB1dHMsIGZhbHNlLCBvcHRpb25zLmNvbnRyb2xsZXJBcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5jb250cm9sbGVyQXMgJiYgY29udHJvbGxlck9iakJlZm9yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmV4dGVuZChtb2RhbENvbnRyb2xsZXIsIGNvbnRyb2xsZXJPYmpCZWZvcmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBUaGVuLCBhcHBlbmQgdGhlIG1vZGFsIHRvIHRoZSBkb20uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFwcGVuZFRhcmdldCA9IGJvZHk7IC8vIGFwcGVuZCB0byBib2R5IHdoZW4gbm8gY3VzdG9tIGFwcGVuZCBlbGVtZW50IGlzIHNwZWNpZmllZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzU3RyaW5nKG9wdGlvbnMuYXBwZW5kRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcXVlcnkgdGhlIGRvY3VtZW50IGZvciB0aGUgZmlyc3QgZWxlbWVudCB0aGF0IG1hdGNoZXMgdGhlIHNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGNyZWF0ZSBhbiBhbmd1bGFyIGVsZW1lbnQgb3V0IG9mIGl0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRUYXJnZXQgPSBhbmd1bGFyLmVsZW1lbnQoJGRvY3VtZW50WzBdLnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5hcHBlbmRFbGVtZW50KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuYXBwZW5kRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhcHBlbmQgdG8gY3VzdG9tIGFwcGVuZCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFRhcmdldCA9IG9wdGlvbnMuYXBwZW5kRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRDaGlsZChhcHBlbmRUYXJnZXQsIG1vZGFsRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5hbGx5LCBhcHBlbmQgYW55IGN1c3RvbSBjbGFzc2VzIHRvIHRoZSBib2R5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYm9keUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlbMF0uY2xhc3NMaXN0LmFkZChvcHRpb25zLmJvZHlDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIFBvcHVsYXRlIHRoZSBtb2RhbCBvYmplY3QuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbC5jb250cm9sbGVyID0gbW9kYWxDb250cm9sbGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsLnNjb3BlID0gbW9kYWxTY29wZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbC5lbGVtZW50ID0gbW9kYWxFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlID0gY2xvc2VEZWZlcnJlZC5wcm9taXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlZCA9IGNsb3NlZERlZmVycmVkLnByb21pc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAkb25Jbml0IGlzIHBhcnQgb2YgdGhlIGNvbXBvbmVudCBsaWZlY3ljbGUgaW50cm9kdWNlZCBpbiBBbmd1bGFySlMgMS43LnhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCZWNhdXNlIGl0IG1heSBub3QgYmUgZGVmaW5lZCBvbiBhbGwgY29udHJvbGxlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgbXVzdCBjaGVjayBmb3IgaXQgYmVmb3JlIGF0dGVtcHRpbmcgdG8gaW52b2tlIGl0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZG9jcy5hbmd1bGFyanMub3JnL2d1aWRlL2NvbXBvbmVudCNjb21wb25lbnQtYmFzZWQtYXBwbGljYXRpb24tYXJjaGl0ZWN0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNGdW5jdGlvbihtb2RhbC5jb250cm9sbGVyLiRvbkluaXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsLmNvbnRyb2xsZXIuJG9uSW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAuLi53aGljaCBpcyBwYXNzZWQgdG8gdGhlIGNhbGxlciB2aWEgdGhlIHByb21pc2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShtb2RhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbGVhciBwcmV2aW91cyBpbnB1dCBmb2N1cyB0byBhdm9pZCBvcGVuIG11bHRpcGxlIG1vZGFscyBvbiBlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIFdlIGNhbiB0cmFjayB0aGlzIG1vZGFsIGluIG91ciBvcGVuIG1vZGFscy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9wZW5Nb2RhbHMucHVzaCh7bW9kYWw6IG1vZGFsLCBjbG9zZTogaW5wdXRzLmNsb3NlfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjbGVhblVwQ2xvc2UocmVzdWx0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIFJlc29sdmUgdGhlICdjbG9zZScgcHJvbWlzZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VEZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIFJlbW92ZSB0aGUgY3VzdG9tIGNsYXNzIGZyb20gdGhlIGJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYm9keUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5WzBdLmNsYXNzTGlzdC5yZW1vdmUob3B0aW9ucy5ib2R5Q2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIExldCBhbmd1bGFyIHJlbW92ZSB0aGUgZWxlbWVudCBhbmQgd2FpdCBmb3IgYW5pbWF0aW9ucyB0byBmaW5pc2guXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRhbmltYXRlLmxlYXZlKG1vZGFsRWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IGVycm9yIGlmIG1vZGFsIGlzIGFscmVhZHkgZGVzdHJveWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtb2RhbEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBSZXNvbHZlIHRoZSAnY2xvc2VkJyBwcm9taXNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlZERlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBXZSBjYW4gbm93IGNsZWFuIHVwIHRoZSBzY29wZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsU2NvcGUuJGRlc3Ryb3koKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBSZW1vdmUgdGhlIG1vZGFsIGZyb20gdGhlIHNldCBvZiBvcGVuIG1vZGFscy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYub3Blbk1vZGFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vcGVuTW9kYWxzW2ldLm1vZGFsID09PSBtb2RhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vcGVuTW9kYWxzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIFVubGVzcyB3ZSBudWxsIG91dCBhbGwgb2YgdGhlc2Ugb2JqZWN0cyB3ZSBzZWVtIHRvIHN1ZmZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBmcm9tIG1lbW9yeSBsZWFrcywgaWYgYW55b25lIGNhbiBleHBsYWluIHdoeSB0aGVuIEknZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBiZSB2ZXJ5IGludGVyZXN0ZWQgdG8ga25vdy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHMuY2xvc2UgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZURlZmVycmVkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRzID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsU2NvcGUgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGV2ZW50IHdhdGNoZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdFNjb3BlT25DbG9zZSAmJiByb290U2NvcGVPbkNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4obnVsbCwgZnVuY3Rpb24gKGVycm9yKSB7IC8vICdjYXRjaCcgZG9lc24ndCB3b3JrIGluIElFOC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vZGFsU2VydmljZShfb3B0aW9ucyk7XG4gICAgICAgIH1dO1xuICAgIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==