!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((r=r||self).reactSuspenseFetch={})}(this,(function(r){function e(r,e){try{var t=r()}catch(r){return e(r)}return t&&t.then?t.then(void 0,e):t}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var t=Symbol("RUN_FETCH"),n=function(r,n){var o={started:!1};o.promise=new Promise((function(r){o.resolve=r}));var i=function(t){o.started||(o.promise=function(t){try{return o.started=!0,Promise.resolve(function(i,u){try{var f=e((function(){var i=n?Promise.resolve(function r(t,n){try{var o=!1;return Promise.resolve(e((function(){return t(n)}),(function(e){function i(r){if(o)return r;throw e}var u=function(){if((i=e)&&"function"==typeof i.then)return Promise.resolve(e).then((function(){return o=!0,r(t,n)}));var i}();return u&&u.then?u.then(i):i(u)})))}catch(r){return Promise.reject(r)}}(n,t)).then((function(e){return Promise.resolve(r(e)).then((function(r){o.data=r}))})):Promise.resolve(r(t)).then((function(r){o.data=r}));if(i&&i.then)return i.then((function(){}))}),(function(r){o.error=r}))}catch(r){return u(!0,r)}return f&&f.then?f.then(u.bind(null,!1),u.bind(null,!0)):u(!1,f)}(0,(function(r,e){if(delete o.promise,o.resolve&&(o.resolve(),delete o.resolve),r)throw e;return e})))}catch(r){return Promise.reject(r)}}(t))};return new Proxy({},{get:function(r,e){if(e===t)return i;if(o.promise)throw o.promise;if(o.error)throw o.error;var n=o.data[e];return"function"==typeof n?n.bind(o.data):n},has:function(r,e){if(o.promise)throw o.promise;if(o.error)throw o.error;return e in o.data},ownKeys:function(){if(o.promise)throw o.promise;if(o.error)throw o.error;return Reflect.ownKeys(o.data)}})},o=function(r,e){return r[t](e)};r.prefetch=function(r,e,t){var i=n(r,t);return o(i,e),i},r.prepare=n,r.run=o}));
//# sourceMappingURL=index.umd.js.map