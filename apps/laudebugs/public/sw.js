if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,t,c)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const i={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return n;case"module":return i;default:return e(s)}}))).then((e=>{const s=c(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-manifest.json",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/chunks/162-103291975705ed4a.js",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/chunks/28064ca8-89a81ee36c0960a3.js",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/chunks/569-1a4fb8b35f21ecb8.js",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/chunks/framework-0a4a94d6e5ad76e1.js",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/chunks/main-f112b5542adf707e.js",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/chunks/pages/404-51bc685fdc492bd4.js",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/chunks/pages/_app-bd556e5d9b9f46cd.js",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/chunks/pages/_error-9ec226e1e9b3ed2c.js",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/chunks/pages/about-eaca2fe656751a47.js",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/chunks/pages/changelog-93c7b17b12cc4aa3.js",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/chunks/pages/dev-90c9a724c233d6ad.js",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/chunks/pages/dev/%5Bslug%5D-9c9629d1b37e866c.js",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/chunks/pages/index-186b07b39ecca03f.js",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/chunks/pages/journal-0ff928977e1fa389.js",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/chunks/pages/journal/%5Bslug%5D-22378b40550044ed.js",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/chunks/pages/stats-a68331e243fb244a.js",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/chunks/webpack-27593bf8d60abcde.js",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/css/03248073d403dfa3.css",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/css/175afdb9f0900ed8.css",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/css/3fa25e85dc90dfcc.css",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/css/49914067db2c8b29.css",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/css/6553106ae9564cb7.css",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/css/8eac4ecdb404adef.css",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/css/df0d89547014c500.css",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/vPg_y_mSXu7VJgDcevP5b/_buildManifest.js",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/vPg_y_mSXu7VJgDcevP5b/_middlewareManifest.js",revision:"vPg_y_mSXu7VJgDcevP5b"},{url:"/_next/static/vPg_y_mSXu7VJgDcevP5b/_ssgManifest.js",revision:"vPg_y_mSXu7VJgDcevP5b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));