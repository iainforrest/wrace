// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1JEHZ":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "26170a8763aff760";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"adjPd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _randoJs = require("./assets/rando.js");
var _randoJsDefault = parcelHelpers.interopDefault(_randoJs);
var _wordsJs = require("./assets/words.js");
const keyboardLetters = [
    [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p"
    ],
    [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l"
    ],
    [
        "⌫",
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        "↲"
    ]
];
const numberOfGuesses = 6;
const timerLength = 60;
const noOfWords = 10;
const lengthOfWordsArray = (0, _wordsJs.wordArray).length;
const seedValue = Math.floor((new Date() - new Date(2022, 6, 10)) / 86400000);
const noOfHints = [
    4,
    3,
    3,
    3,
    2,
    2,
    2,
    1,
    1,
    0
];
const scoreEmojis = [
    "\uD83D\uDE22 Better luck next time.",
    "\uD83D\uDE42 Well Done.",
    "\uD83D\uDE01 You're AWESOME!"
];
const modalText = {
    start: `<p>Welcome to Wrace.</p>
  <p>The word racing game inspired by Wordle</p>
  <p>Battle the clock and see how far you can get.
  Everyone gets the same words every day, so race your friends and see who wins.</p>`,
    firstTimer: `<p>If this is your first time here, then you might want to try a Practice session first. There's only 1 daily challenge each day.</p>
  <p>Just click on the Practice tab above then on the Play button up the top</p>`,
    pause: `<p>You have paused Wrace</p>
  <p>The clock has stopped and you can come back any time today</p>`,
    gameOver: function() {
        let emojis = emojiresult();
        return `${currentState.wordsCorrect >= noOfWords ? `<p>CONGRATULATIONS, YOU WIN.</p>` : `<p>Sorry, you lose. The Final word was : ${currentState.lastWord}</p>`}
    <div id="shareScore">
    <p>${emojis}<br>
    You got ${currentState.wordsCorrect}/10 words correct.</p>
    <p>Your score today is ${currentState.finalScore}. ${currentState.finalScore < 100 ? `${scoreEmojis[0]}` : currentState.finalScore < 1000 ? `${scoreEmojis[1]}` : `${scoreEmojis[2]}`} </p>
    </div>
    <p>Your all time ${tabTxt} High Score is ${currentTab == dailyTab ? localStorage.dailyHighScore : localStorage.practiceHighScore}.</p>
    <button type="button" class="shareMe startButton"><span class="material-symbols-outlined share-icon">share</span> Share</button>`;
    },
    practice: `Coming Soon`,
    menu: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non mollis erat, non commodo est. Cras vulputate id elit id mollis. Integer sodales eros et magna posuere, sed laoreet mi dictum. Mauris semper porttitor justo. Sed vulputate nisl in nisl mattis, id eleifend nibh lacinia. Nam tincidunt lorem in lectus bibendum, nec ullamcorper orci semper. Maecenas eu sapien sagittis eros ornare vestibulum. Aliquam vel bibendum enim, eget malesuada sapien. Duis laoreet mattis tellus, eget pulvinar nibh varius a. Aliquam lacus ipsum, maximus ac ligula et, accumsan rhoncus augue. Maecenas ac elit pellentesque, mollis erat pellentesque, finibus nisi. Nunc ac quam ac est rhoncus fermentum in quis mauris. Sed tempor lorem non augue condimentum, a elementum turpis imperdiet. Maecenas magna lacus, accumsan vitae lorem sed, interdum rhoncus sem.</p>
  <p>Morbi at cursus sapien. Nulla hendrerit quam sed erat hendrerit facilisis in in quam. Suspendisse libero risus, pretium in sagittis sed, porta ut diam. Integer interdum ultrices augue et ultrices. Mauris ut tortor id tellus fringilla fermentum ut et eros. Nam ut libero rutrum, tincidunt massa eget, mattis purus. Fusce gravida elit et magna sodales, ut hendrerit velit ultrices. Aenean odio odio, elementum in nulla non, suscipit venenatis mi.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non mollis erat, non commodo est. Cras vulputate id elit id mollis. Integer sodales eros et magna posuere, sed laoreet mi dictum. Mauris semper porttitor justo. Sed vulputate nisl in nisl mattis, id eleifend nibh lacinia. Nam tincidunt lorem in lectus bibendum, nec ullamcorper orci semper. Maecenas eu sapien sagittis eros ornare vestibulum. Aliquam vel bibendum enim, eget malesuada sapien. Duis laoreet mattis tellus, eget pulvinar nibh varius a. Aliquam lacus ipsum, maximus ac ligula et, accumsan rhoncus augue. Maecenas ac elit pellentesque, mollis erat pellentesque, finibus nisi. Nunc ac quam ac est rhoncus fermentum in quis mauris. Sed tempor lorem non augue condimentum, a elementum turpis imperdiet. Maecenas magna lacus, accumsan vitae lorem sed, interdum rhoncus sem.</p>
  <p>Morbi at cursus sapien. Nulla hendrerit quam sed erat hendrerit facilisis in in quam. Suspendisse libero risus, pretium in sagittis sed, porta ut diam. Integer interdum ultrices augue et ultrices. Mauris ut tortor id tellus fringilla fermentum ut et eros. Nam ut libero rutrum, tincidunt massa eget, mattis purus. Fusce gravida elit et magna sodales, ut hendrerit velit ultrices. Aenean odio odio, elementum in nulla non, suscipit venenatis mi.</p>
  <p>Sed ligula neque, sollicitudin ac ornare vel, elementum quis purus. Quisque in ex massa. Pellentesque urna est, convallis id facilisis a, blandit eget lacus. Aenean commodo pharetra ex. Nulla semper congue sem vitae feugiat. Curabitur eget venenatis nisl, vel euismod ante. In non lorem at quam vulputate fringilla eu eu tellus. Maecenas ut congue lacus, et mollis lacus. Donec tempus metus turpis, quis blandit leo facilisis non.</p>`
};
var currentTab, pauseTab;
const practiceTab = $("#practiceTab")[0];
const dailyTab = $("#dailyTab")[0];
const menuTab = $("#menuTab")[0];
var tabTxt;
var secretWordList = [];
var secretWord;
var attempt = 0;
var currentRow;
var nextLetterBox;
var lastLetterBox = [];
var currentGuess;
var isWord = false;
var rowComplete;
var highScore;
var tabSwitch = false;
var notStarted = "notStarted", playing = "playing", paused = "paused", gameFinished = "gameFinished", leftSite = "leftSite";
var xCountdown;
var startGame = 0;
const letterBoxRowHTML = '<div class="letterBoxRow"></div>';
const letterBoxHTML = "<div class='letterBox' data-type='empty'></div>";
const keyboardRowHTML = '<div class="keyboardRow"></div>';
const buttonKeyHTML = "<button type='button' data-key='' class='keyBtn'></button>";
var currentState = {};
//if there is a currentState saved in localStorage, load it, otherwise create new
function loadCurrentState(location) {
    if (localStorage.pausedSeed != seedValue) localStorage.removeItem("dailyState");
    let savedState = localStorage.getItem(location);
    if (savedState) currentState = JSON.parse(savedState);
    else {
        let mT = new (0, _randoJsDefault.default)(currentTab == dailyTab ? seedValue : Math.floor(Math.random() * 10000));
        currentState = {
            gameState: notStarted,
            guessesOnCurrentWord: [],
            wordsCorrect: 0,
            finalScore: timerLength,
            reloadSite: "false",
            gameOver: false,
            countdown: timerLength - 1,
            randoArray: Array.from({
                length: noOfWords * 2
            }, (i)=>mT.random()),
            hintsArray: Array.from({
                length: noOfWords
            }, (x, i)=>createHints(i, mT))
        };
    }
}
// Creates the secret words lists based off the array of random numbers that is stored in the currentState
function createSecretWordsArray() {
    secretWordList = [];
    for(let i = 0; i < noOfWords; i++){
        let newWord = (0, _wordsJs.wordArray)[Math.floor(currentState.randoArray[i] * lengthOfWordsArray)];
        while(secretWordList.includes(newWord))newWord = (0, _wordsJs.wordArray)[Math.floor(currentState.randoArray[i] * lengthOfWordsArray)];
        secretWordList.push(newWord);
    }
}
function createHints(indexNo, rando) {
    let hints = [];
    for(let i = 0; i < noOfHints[indexNo]; i++){
        let hintToAdd = Math.floor(rando.random() * 5);
        while(hints.includes(hintToAdd))hintToAdd = Math.floor(rando.random() * 5);
        hints.push(hintToAdd);
    }
    return hints;
}
//create game board rows
function newGameBoard() {
    $(".wordContainer").html("");
    for(let i = 0; i < numberOfGuesses; i++){
        $(".wordContainer").append(letterBoxRowHTML); //add row
        for(let j = 0; j < 5; j++)$(".letterBoxRow").last().append(letterBoxHTML); // ad 5 boxes to each row
    }
}
//create keyboard
function createKeyboard() {
    for(let i = 0; i < 3; i++){
        $(".keyboard").append(keyboardRowHTML); //append row
        keyboardLetters[i].forEach(function(value, index, array) {
            $(".keyboardRow").last().append(buttonKeyHTML); //append button HTML
            if (value == "⌫" || value == "↲") $(".keyBtn").last().addClass("col-15").attr("data-key", value).text(value);
            else $(".keyBtn").last().addClass("col-1").attr("data-key", value).text(value); //set data-key and inner text to the letter from the array
        });
    }
}
//Load hints onto the current row
function loadGameBoardHintRow() {
    currentRow = $(".letterBoxRow").eq(0); // Top row
    for(let i = 0; i < secretWord.length; i++)if (currentState.hintsArray[currentState.wordsCorrect].includes(i)) currentRow.children().eq(i).addClass("correct").text(secretWord[i]);
    else currentRow.children().eq(i).addClass("wrong").text("*");
    nextLetterBox = $(".letterBox:empty").first();
}
//This section is for if page is loading from a saved/paused state
function loadGuessesFromPreviousState() {
    currentState.guessesOnCurrentWord.forEach(function(guess) {
        Array.from(guess).forEach(function(letter, i) {
            currentRow.children().eq(i).text(letter); // ad letter to box on row
        });
        currentGuess = guess;
        checkWord(); //run checkword to show correct colours etc`
        attempt++; //increase attempts
        loadGameBoardRow(); // load next rows
    //repeat with next word in the guesses array. or revert to normal game play
    });
}
//setup to work on the next row
function loadGameBoardRow() {
    rowComplete = 0; // reset so that enter doesn't work
    lastLetterBox = []; // clear delete list
    currentRow = $(".letterBoxRow").eq(attempt); // use "attempt" to set up the current row
    nextLetterBox = $(".letterBox:empty").first();
}
function scoreBoard() {
    //if reloading from finshed game then you want to show 10 not 11
    let scoreboardCount = currentState.wordsCorrect + (currentState.wordsCorrect == 10 ? 0 : 1);
    let score10 = Math.floor(scoreboardCount / 10);
    let score1 = scoreboardCount % 10;
    $(".score-10").text(score10);
    $(".score-1").text(score1);
}
//check if letter exists in more than one place
function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(let i1 = 0; i1 < arr.length; i1++)if (arr[i1] === val) indexes.push(i1);
    return indexes;
}
function checkRow() {
    rowComplete = 1;
    currentGuess = "";
    for(let i = 0; i < 5; i++)currentGuess += currentRow.children().eq(i).html().toUpperCase();
    isWord = (0, _wordsJs.allowedWordList).has(currentGuess) || (0, _wordsJs.wordList).has(currentGuess);
    if (!isWord) currentRow.children().addClass("wordDoesntExist");
}
function checkWord() {
    Array.from(currentGuess).forEach(function(elt, i, guess) {
        let multiLetter = getAllIndexes(secretWord, elt); //check if the letter is in secretWord if it is, it will return an array of indexes eg. l in hello returns [2,3]
        let guessMultiLetter = getAllIndexes(currentGuess, elt);
        multiLetter.forEach(function(mLElt, mLi) {
            //MLElt is the index of the letter in the secret word eg 2
            //MLi is the position of the index of the letter in the arrary eg 0
            if (mLElt == i) {
                //eg guess "lemon", secret = "hello"
                //MELt would be [2,3], i = 0 correct letter, wrong place
                //eg guess "yelow", secret = "hello"
                //MELt would be [2], i = 2 - correct letter, correct place
                currentRow.children().eq(i).addClass("correct");
                $("button[data-key='" + elt.toLowerCase() + "']").addClass("correct");
                return;
            } else if (secretWord[mLElt] == currentGuess[mLElt]) return;
            else if (multiLetter.length >= guessMultiLetter.length) {
                currentRow.children().eq(i).addClass("wrongPosition");
                $("button[data-key='" + elt.toLowerCase() + "']").addClass("wrongPosition");
                return;
            // So far, letter exists in the word, is not in the correct position but has been guessed more than once. ie. guess = hello, secret = lemon
            // loop through the guesses to ensure none of the other ones are correct,
            // if none of them do, then mark this one as wrong position and exit so that you don't do the other ones.
            } else if (guessMultiLetter.length > multiLetter.length) {
                if (i == guessMultiLetter[guessMultiLetter.length - 1]) {
                    currentRow.children().eq(i).addClass("wrongPosition");
                    $("button[data-key='" + elt.toLowerCase() + "']").addClass("wrongPosition");
                    return;
                }
            }
        });
        //if length multiLetter = 0 then it is wrong.
        currentRow.children().eq(i).addClass("wrong");
        $("button[data-key='" + elt.toLowerCase() + "']").addClass("wrong");
    });
}
function newWord() {
    isWord = false;
    rowComplete = 0;
    if (currentState.gameState == playing) currentState.countdown = timerLength - 1;
     //dont reset if loading from saved data
    secretWord = secretWordList[currentState.wordsCorrect - (currentState.wordsCorrect == 10 ? 1 : 0)];
    newGameBoard();
    scoreBoard();
    $(".keyBtn").removeClass("correct wrongPosition wrong");
    loadGameBoardHintRow();
    attempt = 1;
    loadGameBoardRow();
}
function emojiresult() {
    let x = "";
    for(let i = 0; i < noOfWords; i++)x += i < currentState.wordsCorrect ? "\uD83D\uDFE9" : i == currentState.wordsCorrect ? "\uD83D\uDFE5" : "\uD83D\uDD32";
    return x;
}
function CopyToClipboard(shareText) {
    // Create a new textarea element and give it id='temp_element'
    const textarea = document.createElement("textarea");
    textarea.id = "temp_element";
    // Optional step to make less noise on the page, if any!
    textarea.style.height = 0;
    // Now append it to your page somewhere, I chose <body>
    document.body.appendChild(textarea);
    // Give our textarea a value of whatever inside the div of id=containerid
    textarea.value = shareText;
    textarea.value += document.getElementById("shareScore").innerText;
    // Now copy whatever inside the textarea to clipboard
    const selector = document.querySelector("#temp_element");
    selector.select();
    document.execCommand("copy");
    // Remove the textarea
    document.body.removeChild(textarea);
    Toastify({
        text: "copied to clipboard",
        className: "info",
        offset: {
            x: "40vw",
            y: "80vh" // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        duration: 1000,
        stopOnFocus: false,
        style: {
            background: "#000000"
        }
    }).showToast();
}
function mobileShare(shareText) {
    shareText += $("#shareScore").text().replace(/(<([^>]+)>)/gi, "");
    let shareData = {
        title: "Wrace Score",
        text: shareText
    };
    navigator.share(shareData);
}
function checkHighScore() {
    let testHighScoreExists = localStorage.getItem(currentTab == dailyTab ? "dailyHighScore" : "practiceHighScore");
    if (!testHighScoreExists) highScore = currentState.finalScore;
    else highScore = testHighScoreExists;
    if (currentState.finalScore > highScore) highScore = currentState.finalScore;
    localStorage.setItem(currentTab == dailyTab ? "dailyHighScore" : "practiceHighScore", highScore);
}
//countdown Timer
function countdownTimer() {
    if (xCountdown) clearInterval(xCountdown);
    xCountdown = setInterval(function() {
        if (currentState.gameState == playing) {
            $("#count").text(currentState.countdown);
            currentState.countdown--;
            if (currentState.countdown <= -1) gameOver();
        }
    }, 1000);
}
function startCountdown() {
    $("#count").text(currentState.countdown + 1);
    if (currentState.gameState != gameFinished) countdownTimer();
    newWord();
}
function setUpScreenFromState() {
    createSecretWordsArray();
    startCountdown();
    loadGuessesFromPreviousState();
}
function toggleModal() {
    $(".mainModal").slideToggle(1000);
    $("#btnPlayPause").toggleClass("correct pauseGame");
// $(".mainModal").toggle("slide", {
//   direction: 'down'
// }, 1000);
}
function gamePlayPause() {
    if (localStorage.leftSite) {
        setUpScreenFromState();
        if (currentState.gameState == paused || currentState.gameState == notStarted) currentState.gameState = playing;
        localStorage.removeItem("leftSite");
    } else if (currentState.gameState == gameFinished) {
        if ($(".mainModal").is(":visible")) {
            if ((localStorage.lastPlayed == "dailyState" ? dailyTab : practiceTab) != currentTab) setUpScreenFromState();
        } else localStorage.setItem("lastPlayed", currentTab == dailyTab ? "dailyState" : "practiceState");
    } else if (currentState.gameState == playing) {
        currentState.gameState = paused;
        localStorage.setItem("lastPlayed", currentTab == dailyTab ? "dailyState" : "practiceState");
    } else if (currentState.gameState == paused || currentState.gameState == notStarted) {
        if ((localStorage.lastPlayed == "dailyState" ? dailyTab : practiceTab) != currentTab || currentState.gameState == notStarted) setUpScreenFromState();
        currentState.gameState = playing;
    }
    selectTxtOutput();
}
function gameOver() {
    if (currentState.countdown >= 0) {
        currentState.countdown = -1;
        $("#count").text(currentState.countdown + 1);
    }
    currentState.gameState = gameFinished;
    currentState.gameOver = true;
    currentState.lastWord = secretWord;
    localStorage.setItem("lastPlayed", currentTab == dailyTab ? "dailyState" : "practiceState");
    clearInterval(xCountdown);
    //$("#count").text("0");
    if (!currentState.finalScore) getScore();
    checkHighScore();
    selectTxtOutput();
}
function practiceReset() {
    localStorage.removeItem("practiceState");
    loadCurrentState("practiceState");
    gamePlayPause();
}
function selectTxtOutput() {
    tabTxt = currentTab == practiceTab ? "Practice" : "Daily";
    let txt = "";
    if (currentTab == menuTab) txt = modalText.menu;
    else switch(currentState.gameState){
        case notStarted:
            txt = modalText.start;
            if (!localStorage.dailyHighScore && currentTab == dailyTab) txt += modalText.firstTimer;
            break;
        case paused:
            txt = modalText.pause;
            break;
        case gameFinished:
            txt = modalText.gameOver();
            break;
        default:
    }
    //add practicing to if on Practice Tab
    if (currentState.gameOver) {
        if (currentTab == practiceTab) txt += `<p>Would you like to practice again?</p>
      <button type="button" class="startButton" id="btn-TryAgain">Try Again</button>`;
    }
    $("#startModal").empty().append(txt);
    $("#btn-TryAgain").click(practiceReset);
    $(".shareMe").click(function() {
        let shareText = `Wrace.me - ${currentTab == dailyTab ? "Daily " : "Practice "} #${seedValue} \n`;
        if (window.innerWidth <= 991) mobileShare(shareText);
        else CopyToClipboard(shareText);
    });
    tabSwitch ? tabSwitch = false : toggleModal();
}
function tabSwitching() {
    tabSwitch = true;
    $(currentTab).toggleClass("wrong correct black-bottom-border");
    $(this).toggleClass("wrong correct black-bottom-border");
    if (currentTab != menuTab) saveCurrentStateToLocalStorage(currentTab == dailyTab ? "dailyState" : "practiceState");
    currentTab = $(this)[0];
    if (currentTab != menuTab) // $('.menu-list').hide();
    loadCurrentStateText();
    else // $('.menu-list').show();
    selectTxtOutput();
}
function saveCurrentStateToLocalStorage(location) {
    localStorage.setItem(location, JSON.stringify(currentState));
    localStorage.setItem("pausedSeed", seedValue);
}
function userLeavingPage() {
    if (document.visibilityState === "hidden") {
        if (currentState.gameState == playing) gamePlayPause();
        clearInterval(xCountdown);
        saveCurrentStateToLocalStorage(currentTab == dailyTab ? "dailyState" : "practiceState");
        localStorage.setItem("leftSite", "true");
    }
}
//delete button
function deleteButtonPressed() {
    let delBox = lastLetterBox.pop(); // get last item from letterbox list
    if (delBox != null) {
        delBox.text(""); //delete it`
        nextLetterBox = $(".letterBox:empty").first(); // reset next letterbox
        if (rowComplete == 1) {
            currentRow.children().removeClass("wordDoesntExist");
            rowComplete = 0;
        }
    }
}
function KeyboardPressed(keyPressed) {
    if (currentState.gameState == playing) //get the key
    //case statement del, enter, other letter
    switch(keyPressed){
        case "⌫":
        case "Backspace":
            deleteButtonPressed();
            break;
        case "↲":
        case "Enter":
            if (rowComplete == 1 && isWord) {
                checkWord();
                currentState.guessesOnCurrentWord.push(currentGuess);
                if (currentGuess == secretWord) {
                    // minus time taken
                    currentState.finalScore -= timerLength - currentState.countdown;
                    // add 100 for a correct word
                    currentState.finalScore += 100;
                    // add 10 for guesses taken 5 gueses = 0, 1 guess = 50
                    currentState.finalScore += (numberOfGuesses - attempt) * 10;
                    currentState.wordsCorrect++;
                    if (currentState.wordsCorrect == noOfWords) gameOver();
                    else {
                        currentState.guessesOnCurrentWord = []; //remove gueses from current state
                        newWord();
                    }
                } else {
                    attempt++;
                    if (attempt == numberOfGuesses) gameOver();
                    else loadGameBoardRow();
                }
            }
            break;
        default:
            if (nextLetterBox.parent()[0] == currentRow[0]) {
                nextLetterBox.text(keyPressed);
                lastLetterBox.push(nextLetterBox); // add letterbox reference to last letter box for deleteing if needed
                nextLetterBox = $(".letterBox:empty").first();
                if (nextLetterBox.parent()[0] != currentRow[0]) checkRow();
            }
    }
}
function setListeners() {
    //event listner for tap/click on keyboard
    $(document).keydown(function(e) {
        if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode == 13 || e.keyCode == 8) KeyboardPressed(e.key);
    });
    //event listner for keyboard presss then take action
    $(".keyBtn").click(function() {
        KeyboardPressed($(this).attr("data-key"));
    });
    //pause and unpause
    $("#btnPlayPause").click(gamePlayPause);
    //switching between daily and practice tabs
    $(".modalTab").click(tabSwitching);
    //save current state if the user leaves the screen
    document.addEventListener("visibilitychange", userLeavingPage);
}
function loadCurrentStateText() {
    loadCurrentState(currentTab == dailyTab ? "dailyState" : "practiceState");
    selectTxtOutput();
}
function gameStartSetup() {
    createKeyboard();
    setListeners(); //Set play/pause and Tab switching listeners
    //If reloading after the player has left the site.
    //currentTab = the lastPlayed tabs
    //remove left site trigger
    //else create new current state on Daily
    if (localStorage.leftSite) {
        currentTab = localStorage.lastPlayed == "dailyState" ? dailyTab : practiceTab;
        if (currentTab != dailyTab) {
            $(dailyTab).toggleClass("wrong correct black-bottom-border");
            $(currentTab).toggleClass("wrong correct black-bottom-border");
        }
    } else {
        currentTab = dailyTab;
        localStorage.setItem("lastPlayed", "dailyState");
    }
    tabSwitch = true; // to keep modal up
    loadCurrentStateText();
}
gameStartSetup();

},{"./assets/rando.js":"gXPc3","./assets/words.js":"ahnyy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gXPc3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
  I've wrapped Makoto Matsumoto and Takuji Nishimura's code in a namespace
  so it's better encapsulated. Now you can have multiple random number generators
  and they won't stomp all over eachother's state.

  If you want to use this as a substitute for Math.random(), use the random()
  method like so:

  var m = new MersenneTwister();
  var randomNumber = m.random();

  You can also call the other genrand_{foo}() methods on the instance.

  If you want to use a specific seed in order to get a repeatable random
  sequence, pass an integer into the constructor:

  var m = new MersenneTwister(123);

  and that will always produce the same random sequence.

  Sean McCullough (banksean@gmail.com)
*/ /*
   A C-program for MT19937, with initialization improved 2002/1/26.
   Coded by Takuji Nishimura and Makoto Matsumoto.

   Before using, initialize the state by using init_genrand(seed)
   or init_by_array(init_key, key_length).

   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:

     1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.

     2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.

     3. The names of its contributors may not be used to endorse or promote
        products derived from this software without specific prior written
        permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


   Any feedback is very welcome.
   http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html
   email: m-mat @ math.sci.hiroshima-u.ac.jp (remove space)
*/ var MersenneTwister = function(seed) {
    if (seed == undefined) seed = new Date().getTime();
    /* Period parameters */ this.N = 624;
    this.M = 397;
    this.MATRIX_A = 0x9908b0df; /* constant vector a */ 
    this.UPPER_MASK = 0x80000000; /* most significant w-r bits */ 
    this.LOWER_MASK = 0x7fffffff; /* least significant r bits */ 
    this.mt = new Array(this.N); /* the array for the state vector */ 
    this.mti = this.N + 1; /* mti==N+1 means mt[N] is not initialized */ 
    this.init_genrand(seed);
};
/* initializes mt[N] with a seed */ MersenneTwister.prototype.init_genrand = function(s) {
    this.mt[0] = s >>> 0;
    for(this.mti = 1; this.mti < this.N; this.mti++){
        var s = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30;
        this.mt[this.mti] = (((s & 0xffff0000) >>> 16) * 1812433253 << 16) + (s & 0x0000ffff) * 1812433253 + this.mti;
        /* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */ /* In the previous versions, MSBs of the seed affect   */ /* only MSBs of the array mt[].                        */ /* 2002/01/09 modified by Makoto Matsumoto             */ this.mt[this.mti] >>>= 0;
    /* for >32 bit machines */ }
};
/* initialize by an array with array-length */ /* init_key is the array for initializing keys */ /* key_length is its length */ /* slight change for C++, 2004/2/26 */ MersenneTwister.prototype.init_by_array = function(init_key, key_length) {
    var i, j, k;
    this.init_genrand(19650218);
    i = 1;
    j = 0;
    k = this.N > key_length ? this.N : key_length;
    for(; k; k--){
        var s = this.mt[i - 1] ^ this.mt[i - 1] >>> 30;
        this.mt[i] = (this.mt[i] ^ (((s & 0xffff0000) >>> 16) * 1664525 << 16) + (s & 0x0000ffff) * 1664525) + init_key[j] + j; /* non linear */ 
        this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */ 
        i++;
        j++;
        if (i >= this.N) {
            this.mt[0] = this.mt[this.N - 1];
            i = 1;
        }
        if (j >= key_length) j = 0;
    }
    for(k = this.N - 1; k; k--){
        var s = this.mt[i - 1] ^ this.mt[i - 1] >>> 30;
        this.mt[i] = (this.mt[i] ^ (((s & 0xffff0000) >>> 16) * 1566083941 << 16) + (s & 0x0000ffff) * 1566083941) - i; /* non linear */ 
        this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */ 
        i++;
        if (i >= this.N) {
            this.mt[0] = this.mt[this.N - 1];
            i = 1;
        }
    }
    this.mt[0] = 0x80000000; /* MSB is 1; assuring non-zero initial array */ 
};
/* generates a random number on [0,0xffffffff]-interval */ MersenneTwister.prototype.genrand_int32 = function() {
    var y;
    var mag01 = new Array(0x0, this.MATRIX_A);
    /* mag01[x] = x * MATRIX_A  for x=0,1 */ if (this.mti >= this.N) {
        var kk;
        if (this.mti == this.N + 1) /* if init_genrand() has not been called, */ this.init_genrand(5489); /* a default initial seed is used */ 
        for(kk = 0; kk < this.N - this.M; kk++){
            y = this.mt[kk] & this.UPPER_MASK | this.mt[kk + 1] & this.LOWER_MASK;
            this.mt[kk] = this.mt[kk + this.M] ^ y >>> 1 ^ mag01[y & 0x1];
        }
        for(; kk < this.N - 1; kk++){
            y = this.mt[kk] & this.UPPER_MASK | this.mt[kk + 1] & this.LOWER_MASK;
            this.mt[kk] = this.mt[kk + (this.M - this.N)] ^ y >>> 1 ^ mag01[y & 0x1];
        }
        y = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK;
        this.mt[this.N - 1] = this.mt[this.M - 1] ^ y >>> 1 ^ mag01[y & 0x1];
        this.mti = 0;
    }
    y = this.mt[this.mti++];
    /* Tempering */ y ^= y >>> 11;
    y ^= y << 7 & 0x9d2c5680;
    y ^= y << 15 & 0xefc60000;
    y ^= y >>> 18;
    return y >>> 0;
};
/* generates a random number on [0,0x7fffffff]-interval */ MersenneTwister.prototype.genrand_int31 = function() {
    return this.genrand_int32() >>> 1;
};
/* generates a random number on [0,1]-real-interval */ MersenneTwister.prototype.genrand_real1 = function() {
    return this.genrand_int32() * (1.0 / 4294967295.0);
/* divided by 2^32-1 */ };
/* generates a random number on [0,1)-real-interval */ MersenneTwister.prototype.random = function() {
    return this.genrand_int32() * (1.0 / 4294967296.0);
/* divided by 2^32 */ };
/* generates a random number on (0,1)-real-interval */ MersenneTwister.prototype.genrand_real3 = function() {
    return (this.genrand_int32() + 0.5) * (1.0 / 4294967296.0);
/* divided by 2^32 */ };
/* generates a random number on [0,1) with 53-bit resolution*/ MersenneTwister.prototype.genrand_res53 = function() {
    var a = this.genrand_int32() >>> 5, b = this.genrand_int32() >>> 6;
    return (a * 67108864.0 + b) * (1.0 / 9007199254740992.0);
};
exports.default = MersenneTwister; /* These real versions are due to Isaku Wada, 2002/01/09 added */ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ahnyy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wordArray", ()=>wordArray);
parcelHelpers.export(exports, "wordList", ()=>wordList);
parcelHelpers.export(exports, "allowedWordList", ()=>allowedWordList);
var allWords = "ABACK ABASE ABATE ABBEY ABBOT ABHOR ABIDE ABLED ABODE ABORT ABOUT ABOVE ABUSE ABYSS ACORN ACRID ACTOR ACUTE ADAGE ADAPT ADEPT ADMIN ADMIT ADOBE ADOPT ADORE ADORN ADULT AFFIX AFIRE AFOOT AFOUL AFTER AGAIN AGAPE AGATE AGENT AGILE AGING AGLOW AGONY AGORA AGREE AHEAD AIDER AISLE ALARM ALBUM ALERT ALGAE ALIBI ALIEN ALIGN ALIKE ALIVE ALLAY ALLEY ALLOT ALLOW ALLOY ALOFT ALONE ALONG ALOOF ALOUD ALPHA ALTAR ALTER AMASS AMAZE AMBER AMBLE AMEND AMISS AMITY AMONG AMPLE AMPLY AMUSE ANGEL ANGER ANGLE ANGRY ANGST ANIME ANKLE ANNEX ANNOY ANNUL ANODE ANTIC ANVIL AORTA APART APHID APING APNEA APPLE APPLY APRON APTLY ARBOR ARDOR ARENA ARGUE ARISE ARMOR AROMA AROSE ARRAY ARROW ARSON ARTSY ASCOT ASHEN ASIDE ASKEW ASSAY ASSET ATOLL ATONE ATTIC AUDIO AUDIT AUGUR AUNTY AVAIL AVERT AVIAN AVOID AWAIT AWAKE AWARD AWARE AWASH AWFUL AWOKE AXIAL AXIOM AXION AZURE BACON BADGE BADLY BAGEL BAGGY BAKER BALER BALMY BANAL BANJO BARGE BARON BASAL BASIC BASIL BASIN BASIS BASTE BATCH BATHE BATON BATTY BAWDY BAYOU BEACH BEADY BEARD BEAST BEECH BEEFY BEFIT BEGAN BEGAT BEGET BEGIN BEGUN BEING BELCH BELIE BELLE BELLY BELOW BENCH BERET BERRY BERTH BESET BETEL BEVEL BEZEL BIBLE BICEP BIDDY BIGOT BILGE BILLY BINGE BINGO BIOME BIRCH BIRTH BISON BITTY BLACK BLADE BLAME BLAND BLANK BLARE BLAST BLAZE BLEAK BLEAT BLEED BLEEP BLEND BLESS BLIMP BLIND BLINK BLISS BLITZ BLOAT BLOCK BLOKE BLOND BLOOD BLOOM BLOWN BLUER BLUFF BLUNT BLURB BLURT BLUSH BOARD BOAST BOBBY BONEY BONGO BONUS BOOBY BOOST BOOTH BOOTY BOOZE BOOZY BORAX BORNE BOSOM BOSSY BOTCH BOUGH BOULE BOUND BOWEL BOXER BRACE BRAID BRAIN BRAKE BRAND BRASH BRASS BRAVE BRAVO BRAWL BRAWN BREAD BREAK BREED BRIAR BRIBE BRICK BRIDE BRIEF BRINE BRING BRINK BRINY BRISK BROAD BROIL BROKE BROOD BROOK BROOM BROTH BROWN BRUNT BRUSH BRUTE BUDDY BUDGE BUGGY BUGLE BUILD BUILT BULGE BULKY BULLY BUNCH BUNNY BURLY BURNT BURST BUSED BUSHY BUTCH BUTTE BUXOM BUYER BYLAW CABAL CABBY CABIN CABLE CACAO CACHE CACTI CADDY CADET CAGEY CAIRN CAMEL CAMEO CANAL CANDY CANNY CANOE CANON CAPER KAPUT CARAT CARGO CAROL CARRY CARVE CASTE CATCH CATER CATTY CAULK CAUSE CAVIL CEASE CEDAR CELLO CHAFE CHAFF CHAIN CHAIR CHALK CHAMP CHANT CHAOS CHARD CHARM CHART CHASE CHASM CHEAP CHEAT CHECK CHEEK CHEER CHESS CHEST CHICK CHIDE CHIEF CHILD CHILI CHILL CHIME CHINA CHIRP CHOCK CHOIR CHOKE CHORD CHORE CHOSE CHUCK CHUMP CHUNK CHURN CHUTE CIDER CIGAR CINCH CIRCA CIVIC CIVIL CLACK CLAIM CLAMP CLANG CLANK CLASH CLASP CLASS CLEAN CLEAR CLEAT CLEFT CLERK CLICK CLIFF CLIMB CLING CLINK CLOAK CLOCK CLONE CLOSE CLOTH CLOUD CLOUT CLOVE CLOWN CLUCK CLUED CLUMP CLUNG COACH COAST COBRA COCOA COLON COLOR COMET COMFY COMIC COMMA CONCH CONDO CONIC COPSE CORAL CORER CORNY COUCH COUGH COULD COUNT COUPE COURT COVEN COVER COVET COVEY COWER COYLY CRACK CRAFT CRAMP CRANE CRANK CRASH CRASS CRATE CRAVE CRAWL CRAZE CRAZY CREAK CREAM CREDO CREED CREEK CREEP CREME CREPE CREPT CRESS CREST CRICK CRIED CRIER CRIME CRIMP CRISP CROAK CROCK CRONE CRONY CROOK CROSS CROUP CROWD CROWN CRUDE CRUEL CRUMB CRUMP CRUSH CRUST CRYPT CUBIC CUMIN CURIO CURLY CURRY CURSE CURVE CURVY CUTIE CYBER CYCLE CYNIC DADDY DAILY DAIRY DAISY DALLY DANCE DANDY DATUM DAUNT DEALT DEATH DEBAR DEBIT DEBUG DEBUT DECAL DECAY DECOR DECOY DECRY DEFER DEIGN DEITY DELAY DELTA DELVE DEMON DEMUR DENIM DENSE DEPOT DEPTH DERBY DETER DETOX DEUCE DEVIL DIARY DICEY DIGIT DILLY DIMLY DINER DINGO DINGY DIODE DIRGE DIRTY DISCO DITCH DITTO DITTY DIVER DIZZY DODGE DODGY DOGMA DOING DOLLY DONOR DONUT DOPEY DOUBT DOUGH DOWDY DOWEL DOWNY DOWRY DOZEN DRAFT DRAIN DRAKE DRAMA DRANK DRAPE DRAWL DRAWN DREAD DREAM DRESS DRIED DRIER DRIFT DRILL DRINK DRIVE DROIT DROLL DRONE DROOL DROOP DROSS DROVE DROWN DRUID DRUNK DRYER DRYLY DUCHY DULLY DUMMY DUMPY DUNCE DUSKY DUSTY DUTCH DUVET DWARF DWELL DWELT DYING EAGER EAGLE EARLY EARTH EASEL EATEN EATER EBONY ECLAT EDICT EDIFY EERIE EGRET EIGHT EJECT EKING ELATE ELBOW ELDER ELECT ELEGY ELFIN ELIDE ELITE ELOPE ELUDE EMAIL EMBED EMBER EMCEE EMPTY ENACT ENDOW ENEMA ENEMY ENJOY ENNUI ENSUE ENTER ENTRY ENVOY EPOCH EPOXY EQUAL EQUIP ERASE ERECT ERODE ERROR ERUPT ESSAY ESTER ETHER ETHIC ETHOS ETUDE EVADE EVENT EVERY EVICT EVOKE EXACT EXALT EXCEL EXERT EXILE EXIST EXPEL EXTOL EXTRA EXULT EYING FABLE FACET FAINT FAIRY FAITH FALSE FANCY FANNY FARCE FATAL FATTY FAULT FAUNA FAVOR FEAST FECAL FEIGN FELLA FELON FEMME FEMUR FENCE FERAL FERRY FETAL FETCH FETID FETUS FEVER FEWER FIBER FIBRE FICUS FIELD FIEND FIERY FIFTH FIFTY FIGHT FILER FILET FILLY FILMY FILTH FINAL FINCH FINER FIRST FISHY FIXER FIZZY FJORD FLACK FLAIL FLAIR FLAKE FLAKY FLAME FLANK FLARE FLASH FLASK FLECK FLEET FLESH FLICK FLIER FLING FLINT FLIRT FLOAT FLOCK FLOOD FLOOR FLORA FLOSS FLOUR FLOUT FLOWN FLUFF FLUID FLUKE FLUME FLUNG FLUNK FLUSH FLUTE FLYER FOAMY FOCAL FOCUS FOGGY FOIST FOLIO FOLLY FORAY FORCE FORGE FORGO FORTE FORTH FORTY FORUM FOUND FOYER FRAIL FRAME FRANK FRAUD FREAK FREED FREER FRESH FRIAR FRIED FRILL FRISK FRITZ FROCK FROND FRONT FROST FROTH FROWN FROZE FRUIT FUDGE FUGUE FULLY FUNGI FUNKY FUNNY FUROR FURRY FUSSY FUZZY GAFFE GAILY GAMER GAMMA GAMUT GASSY GAUDY GAUGE GAUNT GAUZE GAVEL GAWKY GAYER GAYLY GAZER GECKO GEEKY GEESE GENIE GENRE GHOST GHOUL GIANT GIDDY GIPSY GIRLY GIRTH GIVEN GIVER GLADE GLAND GLARE GLASS GLAZE GLEAM GLEAN GLIDE GLINT GLOAT GLOBE GLOOM GLORY GLOSS GLOVE GLYPH GNASH GNOME GODLY GOING GOLEM GOLLY GONAD GONER GOODY GOOEY GOOFY GOOSE GORGE GOUGE GOURD GRACE GRADE GRAFT GRAIL GRAIN GRAND GRANT GRAPE GRAPH GRASP GRASS GRATE GRAVE GRAVY GRAZE GREAT GREED GREEN GREET GRIEF GRILL GRIME GRIMY GRIND GRIPE GROAN GROIN GROOM GROPE GROSS GROUP GROUT GROVE GROWL GROWN GRUEL GRUFF GRUNT GUARD GUAVA GUESS GUEST GUIDE GUILD GUILE GUILT GUISE GULCH GULLY GUMBO GUMMY GUPPY GUSTO GUSTY GYPSY HABIT HAIRY HALVE HANDY HAPPY HARDY HAREM HARPY HARRY HARSH HASTE HASTY HATCH HATER HAUNT HAUTE HAVEN HAVOC HAZEL HEADY HEARD HEART HEATH HEAVE HEAVY HEDGE HEFTY HEIST HELIX HELLO HENCE HERON HILLY HINGE HIPPO HIPPY HITCH HOARD HOBBY HOIST HOLLY HOMER HONEY HONOR HORDE HORNY HORSE HOTEL HOTLY HOUND HOUSE HOVEL HOVER HOWDY HUMAN HUMID HUMOR HUMPH HUMUS HUNCH HUNKY HURRY HUSKY HUSSY HUTCH HYDRO HYENA HYMEN HYPER ICILY ICING IDEAL IDIOM IDIOT IDLER IDYLL IGLOO ILIAC IMAGE IMBUE IMPEL IMPLY INANE INBOX INCUR INDEX INEPT INERT INFER INGOT INLAY INLET INNER INPUT INTER INTRO IONIC IRATE IRONY ISLET ISSUE ITCHY IVORY JAUNT JAZZY JELLY JERKY JETTY JEWEL JIFFY JOINT JOIST JOKER JOLLY JOUST JUDGE JUICE JUICY JUMBO JUMPY JUNTA JUNTO JUROR KAPPA KARMA KAYAK KEBAB KHAKI KINKY KIOSK KITTY KNACK KNAVE KNEAD KNEED KNEEL KNELT KNIFE KNOCK KNOLL KNOWN KOALA KRILL LABEL LABOR LADEN LADLE LAGER LANCE LANKY LAPEL LAPSE LARGE LARVA LASSO LATCH LATER LATHE LATTE LAUGH LAYER LEACH LEAFY LEAKY LEANT LEAPT LEARN LEASE LEASH LEAST LEAVE LEDGE LEECH LEERY LEFTY LEGAL LEGGY LEMON LEMUR LEPER LEVEL LEVER LIBEL LIEGE LIGHT LIKEN LILAC LIMBO LIMIT LINEN LINER LINGO LIPID LITHE LIVER LIVID LLAMA LOAMY LOATH LOBBY LOCAL LOCUS LODGE LOFTY LOGIC LOGIN LOOPY LOOSE LORRY LOSER LOUSE LOUSY LOVER LOWER LOWLY LOYAL LUCID LUCKY LUMEN LUMPY LUNAR LUNCH LUNGE LUPUS LURCH LURID LUSTY LYING LYMPH LYNCH LYRIC MACAW MACHO MACRO MADAM MADLY MAFIA MAGIC MAGMA MAIZE MAJOR MAKER MAMBO MAMMA MAMMY MANGA MANGE MANGO MANGY MANIA MANIC MANLY MANOR MAPLE MARCH MARRY MARSH MASON MASSE MATCH MATEY MAUVE MAXIM MAYBE MAYOR MEALY MEANT MEATY MECCA MEDAL MEDIA MEDIC MELEE MELON MERCY MERGE MERIT MERRY METAL METER METRO MICRO MIDGE MIDST MIGHT MILKY MIMIC MINCE MINER MINIM MINOR MINTY MINUS MIRTH MISER MISSY MOCHA MODAL MODEL MODEM MOGUL MOIST MOLAR MOLDY MONEY MONTH MOODY MOOSE MORAL MORON MORPH MOSSY MOTEL MOTIF MOTOR MOTTO MOULT MOUND MOUNT MOURN MOUSE MOUTH MOVER MOVIE MOWER MUCKY MUCUS MUDDY MULCH MUMMY MUNCH MURAL MURKY MUSHY MUSIC MUSKY MUSTY MYRRH NADIR NAIVE NANNY NASAL NASTY NATAL NAVAL NAVEL NEEDY NEIGH NERDY NERVE NEVER NEWER NEWLY NICER NICHE NIECE NIGHT NINJA NINNY NINTH NOBLE NOBLY NOISE NOISY NOMAD NOOSE NORTH NOSEY NOTCH NOVEL NUDGE NURSE NUTTY NYLON NYMPH OAKEN OBESE OCCUR OCEAN OCTAL OCTET ODDER ODDLY OFFAL OFFER OFTEN OLDEN OLDER OLIVE OMBRE OMEGA ONION ONSET OPERA OPINE OPIUM OPTIC ORBIT ORDER ORGAN OTHER OTTER OUGHT OUNCE OUTDO OUTER OUTGO OVARY OVATE OVERT OVINE OVOID OWING OWNER OXIDE OZONE PADDY PAGAN PAINT PALER PALSY PANEL PANIC PANSY PAPAL PAPER PARER PARKA PARRY PARSE PARTY PASTA PASTE PASTY PATCH PATIO PATSY PATTY PAUSE PAYEE PAYER PEACE PEACH PEARL PECAN PEDAL PENAL PENCE PENNE PENNY PERCH PERIL PERKY PESKY PESTO PETAL PETTY PHASE PHONE PHONY PHOTO PIANO PICKY PIECE PIETY PIGGY PILOT PINCH PINEY PINKY PINTO PIPER PIQUE PITCH PITHY PIVOT PIXEL PIXIE PIZZA PLACE PLAID PLAIN PLAIT PLANE PLANK PLANT PLATE PLAZA PLEAD PLEAT PLIED PLIER PLUCK PLUMB PLUME PLUMP PLUNK PLUSH POESY POINT POISE POKER POLAR POLKA POLYP POOCH POPPY PORCH POSER POSIT POSSE POUCH POUND POUTY POWER PRANK PRAWN PREEN PRESS PRICE PRICK PRIDE PRIED PRIME PRIMO PRINT PRIOR PRISM PRIVY PRIZE PROBE PRONE PRONG PROOF PROSE PROUD PROVE PROWL PROXY PRUDE PRUNE PSALM PUBIC PUDGY PUFFY PULPY PULSE PUNCH PUPAL PUPIL PUPPY PUREE PURER PURGE PURSE PUSHY PUTTY PYGMY QUACK QUAIL QUAKE QUALM QUARK QUART QUASH QUASI QUEEN QUEER QUELL QUERY QUEST QUEUE QUICK QUIET QUILL QUILT QUIRK QUITE QUOTA QUOTE QUOTH RABBI RABID RACER RADAR RADII RADIO RAINY RAISE RAJAH RALLY RALPH RAMEN RANCH RANDY RANGE RAPID RARER RASPY RATIO RATTY RAVEN RAYON RAZOR REACH REACT READY REALM REARM REBAR REBEL REBUS REBUT RECAP RECUR RECUT REEDY REFER REFIT REGAL REHAB REIGN RELAX RELAY RELIC REMIT RENAL RENEW REPAY REPEL REPLY RERUN RESET RESIN RETCH RETRO RETRY REUSE REVEL REVUE RHINO RHYME RIDER RIDGE RIFLE RIGHT RIGID RIGOR RINSE RIPEN RIPER RISEN RISER RISKY RIVAL RIVER RIVET ROACH ROAST ROBIN ROBOT ROCKY RODEO ROGER ROGUE ROOMY ROOST ROTOR ROUGE ROUGH ROUND ROUSE ROUTE ROVER ROWDY ROWER ROYAL RUDDY RUDER RUGBY RULER RUMBA RUMOR RUPEE RURAL RUSTY SADLY SAFER SAINT SALAD SALLY SALON SALSA SALTY SALVE SALVO SANDY SANER SAPPY SASSY SATIN SATYR SAUCE SAUCY SAUNA SAUTE SAVOR SAVOY SAVVY SCALD SCALE SCALP SCALY SCAMP SCANT SCARE SCARF SCARY SCENE SCENT SCION SCOFF SCOLD SCONE SCOOP SCOPE SCORE SCORN SCOUR SCOUT SCOWL SCRAM SCRAP SCREE SCREW SCRUB SCRUM SCUBA SEDAN SEEDY SEGUE SEIZE SEMEN SENSE SEPIA SERIF SERUM SERVE SETUP SEVEN SEVER SEWER SHACK SHADE SHADY SHAFT SHAKE SHAKY SHALE SHALL SHALT SHAME SHANK SHAPE SHARD SHARE SHARK SHARP SHAVE SHAWL SHEAR SHEEN SHEEP SHEER SHEET SHEIK SHELF SHELL SHIED SHIFT SHINE SHINY SHIRE SHIRK SHIRT SHOAL SHOCK SHONE SHOOK SHOOT SHORE SHORN SHORT SHOUT SHOVE SHOWN SHOWY SHREW SHRUB SHRUG SHUCK SHUNT SHUSH SHYLY SIEGE SIEVE SIGHT SIGMA SILKY SILLY SINCE SINEW SINGE SIREN SISSY SIXTH SIXTY SKATE SKIER SKIFF SKILL SKIMP SKIRT SKULK SKULL SKUNK SLACK SLAIN SLANG SLANT SLASH SLATE SLAVE SLEEK SLEEP SLEET SLEPT SLICE SLICK SLIDE SLIME SLIMY SLING SLINK SLOOP SLOPE SLOSH SLOTH SLUMP SLUNG SLUNK SLURP SLUSH SLYLY SMACK SMALL SMART SMASH SMEAR SMELL SMELT SMILE SMIRK SMITE SMITH SMOCK SMOKE SMOKY SMOTE SNACK SNAIL SNAKE SNAKY SNARE SNARL SNEAK SNEER SNIDE SNIFF SNIPE SNOOP SNORE SNORT SNOUT SNOWY SNUCK SNUFF SOAPY SOBER SOGGY SOLAR SOLID SOLVE SONAR SONIC SOOTH SOOTY SORRY SOUND SOUTH SOWER SPACE SPADE SPANK SPARE SPARK SPASM SPAWN SPEAK SPEAR SPECK SPEED SPELL SPELT SPEND SPENT SPERM SPICE SPICY SPIED SPIEL SPIKE SPIKY SPILL SPILT SPINE SPINY SPIRE SPITE SPLAT SPLIT SPOIL SPOKE SPOOF SPOOK SPOOL SPOON SPORE SPORT SPOUT SPRAY SPREE SPRIG SPUNK SPURN SPURT SQUAD SQUAT SQUIB STACK STAFF STAGE STAID STAIN STAIR STAKE STALE STALK STALL STAMP STAND STANK STARE STARK START STASH STATE STAVE STEAD STEAK STEAL STEAM STEED STEEL STEEP STEER STEIN STERN STICK STIFF STILL STILT STING STINK STINT STOCK STOIC STOKE STOLE STOMP STONE STONY STOOD STOOL STOOP STORE STORK STORM STORY STOUT STOVE STRAP STRAW STRAY STRIP STRUT STUCK STUDY STUFF STUMP STUNG STUNK STUNT STYLE SUAVE SUGAR SUING SUITE SULKY SULLY SUMAC SUNNY SUPER SURER SURGE SURLY SUSHI SWAMI SWAMP SWARM SWASH SWATH SWEAR SWEAT SWEEP SWEET SWELL SWEPT SWIFT SWILL SWINE SWING SWIRL SWISH SWOON SWOOP SWORD SWORE SWORN SWUNG SYNOD SYRUP TABBY TABLE TABOO TACIT TACKY TAFFY TAINT TAKEN TAKER TALLY TALON TAMER TANGO TANGY TAPER TAPIR TARDY TAROT TASTE TASTY TATTY TAUNT TAWNY TEACH TEARY TEASE TEDDY TEETH TEMPO TENET TENOR TENSE TENTH TEPEE TEPID TERRA TERSE TESTY THANK THEFT THEIR THEME THERE THESE THETA THICK THIEF THIGH THING THINK THIRD THONG THORN THOSE THREE THREW THROB THROW THRUM THUMB THUMP THYME TIARA TIBIA TIDAL TIGER TIGHT TILDE TIMER TIMID TIPSY TITAN TITHE TITLE TOAST TODAY TODDY TOKEN TONAL TONGA TONIC TOOTH TOPAZ TOPIC TORCH TORSO TORUS TOTAL TOTEM TOUCH TOUGH TOWEL TOWER TOXIC TOXIN TRACE TRACK TRACT TRADE TRAIL TRAIN TRAIT TRAMP TRASH TRAWL TREAD TREAT TREND TRIAD TRIAL TRIBE TRICE TRICK TRIED TRIPE TRITE TROLL TROOP TROPE TROUT TROVE TRUCE TRUCK TRUER TRULY TRUMP TRUNK TRUSS TRUST TRUTH TRYST TUBAL TUBER TULIP TULLE TUMOR TUNIC TURBO TUTOR TWANG TWEAK TWEED TWEET TWICE TWINE TWIRL TWIST TWIXT TYING UDDER ULCER ULTRA UMBRA UNCLE UNCUT UNDER UNDID UNDUE UNFED UNFIT UNIFY UNION UNITE UNITY UNLIT UNMET UNSET UNTIE UNTIL UNWED UNZIP UPPER UPSET URBAN URINE USAGE USHER USING USUAL USURP UTILE UTTER VAGUE VALET VALID VALOR VALUE VALVE VAPID VAPOR VAULT VAUNT VEGAN VENOM VENUE VERGE VERSE VERSO VERVE VICAR VIDEO VIGIL VIGOR VILLA VINYL VIOLA VIPER VIRAL VIRUS VISIT VISOR VISTA VITAL VIVID VIXEN VOCAL VODKA VOGUE VOICE VOILA VOMIT VOTER VOUCH VOWEL VYING WACKY WAFER WAGER WAGON WAIST WAIVE WALTZ WARTY WASTE WATCH WATER WAVER WAXEN WEARY WEAVE WEDGE WEEDY WEIGH WEIRD WELCH WELSH WENCH WHACK WHALE WHARF WHEAT WHEEL WHELP WHERE WHICH WHIFF WHILE WHINE WHINY WHIRL WHISK WHITE WHOLE WHOOP WHOSE WIDEN WIDER WIDOW WIDTH WIELD WIGHT WILLY WIMPY WINCE WINCH WINDY WISER WISPY WITCH WITTY WOKEN WOMAN WOMEN WOODY WOOER WOOLY WOOZY WORDY WORLD WORRY WORSE WORST WORTH WOULD WOUND WOVEN WRACK WRATH WREAK WRECK WREST WRING WRIST WRITE WRONG WROTE WRUNG WRYLY YACHT YEARN YEAST YIELD YOUNG YOUTH ZEBRA ZESTY ZONAL";
var allowedWords = "AAHED AALII AARGH AARTI ABACA ABACI ABACS ABAFT ABAKA ABAMP ABAND ABASH ABASK ABAYA ABBAS ABBED ABBES ABCEE ABEAM ABEAR ABELE ABERS ABETS ABIES ABLER ABLES ABLET ABLOW ABMHO ABOHM ABOIL ABOMA ABOON ABORD ABORE ABRAM ABRAY ABRIM ABRIN ABRIS ABSEY ABSIT ABUNA ABUNE ABUTS ABUZZ ABYES ABYSM ACAIS ACARI ACCAS ACCOY ACERB ACERS ACETA ACHAR ACHED ACHES ACHOO ACIDS ACIDY ACING ACINI ACKEE ACKER ACMES ACMIC ACNED ACNES ACOCK ACOLD ACRED ACRES ACROS ACTED ACTIN ACTON ACYLS ADAWS ADAYS ADBOT ADDAX ADDED ADDER ADDIO ADDLE ADEEM ADHAN ADIEU ADIOS ADITS ADMAN ADMEN ADMIX ADOBO ADOWN ADOZE ADRAD ADRED ADSUM ADUKI ADUNC ADUST ADVEW ADYTA ADZED ADZES AECIA AEDES AEGIS AEONS AERIE AEROS AESIR AFALD AFARA AFARS AFEAR AFLAJ AFORE AFRIT AFROS AGAMA AGAMI AGARS AGAST AGAVE AGAZE AGENE AGERS AGGER AGGIE AGGRI AGGRO AGGRY AGHAS AGILA AGIOS AGISM AGIST AGITA AGLEE AGLET AGLEY AGLOO AGLUS AGMAS AGOGE AGONE AGONS AGOOD AGRIA AGRIN AGROS AGUED AGUES AGUNA AGUTI AHEAP AHENT AHIGH AHIND AHING AHINT AHOLD AHULL AHURU AIDAS AIDED AIDES AIDOI AIDOS AIERY AIGAS AIGHT AILED AIMED AIMER AINEE AINGA AIOLI AIRED AIRER AIRNS AIRTH AIRTS AITCH AITUS AIVER AIYEE AIZLE AJIES AJIVA AJUGA AJWAN AKEES AKELA AKENE AKING AKITA AKKAS ALAAP ALACK ALAMO ALAND ALANE ALANG ALANS ALANT ALAPA ALAPS ALARY ALATE ALAYS ALBAS ALBEE ALCID ALCOS ALDEA ALDER ALDOL ALECK ALECS ALEFS ALEFT ALEPH ALEWS ALEYE ALFAS ALGAL ALGAS ALGID ALGIN ALGOR ALGUM ALIAS ALIFS ALINE ALIST ALIYA ALKIE ALKOS ALKYD ALKYL ALLEE ALLEL ALLIS ALLOD ALLYL ALMAH ALMAS ALMEH ALMES ALMUD ALMUG ALODS ALOED ALOES ALOHA ALOIN ALOOS ALOWE ALTHO ALTOS ALULA ALUMS ALURE ALVAR ALWAY AMAHS AMAIN AMATE AMAUT AMBAN AMBIT AMBOS AMBRY AMEBA AMEER AMENE AMENS AMENT AMIAS AMICE AMICI AMIDE AMIDO AMIDS AMIES AMIGA AMIGO AMINE AMINO AMINS AMIRS AMLAS AMMAN AMMON AMMOS AMNIA AMNIC AMNIO AMOKS AMOLE AMORT AMOUR AMOVE AMOWT AMPED AMPUL AMRIT AMUCK AMYLS ANANA ANATA ANCHO ANCLE ANCON ANDRO ANEAR ANELE ANENT ANGAS ANGLO ANIGH ANILE ANILS ANIMA ANIMI ANION ANISE ANKER ANKHS ANKUS ANLAS ANNAL ANNAS ANNAT ANOAS ANOLE ANOMY ANSAE ANTAE ANTAR ANTAS ANTED ANTES ANTIS ANTRA ANTRE ANTSY ANURA ANYON APACE APAGE APAID APAYD APAYS APEAK APEEK APERS APERT APERY APGAR APHIS APIAN APIOL APISH APISM APODE APODS APOOP APORT APPAL APPAY APPEL APPRO APPUI APPUY APRES APSES APSIS APSOS APTED APTER AQUAE AQUAS ARABA ARAKS ARAME ARARS ARBAS ARCED ARCHI ARCOS ARCUS ARDEB ARDRI AREAD AREAE AREAL AREAR AREAS ARECA AREDD AREDE AREFY AREIC ARENE AREPA ARERE ARETE ARETS ARETT ARGAL ARGAN ARGIL ARGLE ARGOL ARGON ARGOT ARGUS ARHAT ARIAS ARIEL ARIKI ARILS ARIOT ARISH ARKED ARLED ARLES ARMED ARMER ARMET ARMIL ARNAS ARNUT AROBA AROHA AROID ARPAS ARPEN ARRAH ARRAS ARRET ARRIS ARROZ ARSED ARSES ARSEY ARSIS ARTAL ARTEL ARTIC ARTIS ARUHE ARUMS ARVAL ARVEE ARVOS ARYLS ASANA ASCON ASCUS ASDIC ASHED ASHES ASHET ASKED ASKER ASKOI ASKOS ASPEN ASPER ASPIC ASPIE ASPIS ASPRO ASSAI ASSAM ASSES ASSEZ ASSOT ASTER ASTIR ASTUN ASURA ASWAY ASWIM ASYLA ATAPS ATAXY ATIGI ATILT ATIMY ATLAS ATMAN ATMAS ATMOS ATOCS ATOKE ATOKS ATOMS ATOMY ATONY ATOPY ATRIA ATRIP ATTAP ATTAR ATUAS AUDAD AUGER AUGHT AULAS AULIC AULOI AULOS AUMIL AUNES AUNTS AURAE AURAL AURAR AURAS AUREI AURES AURIC AURIS AURUM AUTOS AUXIN AVALE AVANT AVAST AVELS AVENS AVERS AVGAS AVINE AVION AVISE AVISO AVIZE AVOWS AVYZE AWARN AWATO AWAVE AWAYS AWDLS AWEEL AWETO AWING AWMRY AWNED AWNER AWOLS AWORK AXELS AXILE AXILS AXING AXITE AXLED AXLES AXMAN AXMEN AXOID AXONE AXONS AYAHS AYAYA AYELP AYGRE AYINS AYONT AYRES AYRIE AZANS AZIDE AZIDO AZINE AZLON AZOIC AZOLE AZONS AZOTE AZOTH AZUKI AZURN AZURY AZYGY AZYME AZYMS BAAED BAALS BABAS BABEL BABES BABKA BABOO BABUL BABUS BACCA BACCO BACCY BACHA BACHS BACKS BADDY BAELS BAFFS BAFFY BAFTS BAGHS BAGIE BAHTS BAHUS BAHUT BAILS BAIRN BAISA BAITH BAITS BAIZA BAIZE BAJAN BAJRA BAJRI BAJUS BAKED BAKEN BAKES BAKRA BALAS BALDS BALDY BALED BALES BALKS BALKY BALLS BALLY BALMS BALOO BALSA BALTI BALUN BALUS BAMBI BANAK BANCO BANCS BANDA BANDH BANDS BANDY BANED BANES BANGS BANIA BANKS BANNS BANTS BANTU BANTY BANYA BAPUS BARBE BARBS BARBY BARCA BARDE BARDO BARDS BARDY BARED BARER BARES BARFI BARFS BARIC BARKS BARKY BARMS BARMY BARNS BARNY BARPS BARRA BARRE BARRO BARRY BARYE BASAN BASED BASEN BASER BASES BASHO BASIJ BASKS BASON BASSE BASSI BASSO BASSY BASTA BASTI BASTO BASTS BATED BATES BATHS BATIK BATTA BATTS BATTU BAUDS BAUKS BAULK BAURS BAVIN BAWDS BAWKS BAWLS BAWNS BAWRS BAWTY BAYED BAYER BAYES BAYLE BAYTS BAZAR BAZOO BEADS BEAKS BEAKY BEALS BEAMS BEAMY BEANO BEANS BEANY BEARE BEARS BEATH BEATS BEATY BEAUS BEAUT BEAUX BEBOP BECAP BECKE BECKS BEDAD BEDEL BEDES BEDEW BEDIM BEDYE BEEDI BEEFS BEEPS BEERS BEERY BEETS BEFOG BEGAD BEGAR BEGEM BEGOT BEGUM BEIGE BEIGY BEINS BEKAH BELAH BELAR BELAY BELEE BELGA BELLS BELON BELTS BEMAD BEMAS BEMIX BEMUD BENDS BENDY BENES BENET BENGA BENIS BENNE BENNI BENNY BENTO BENTS BENTY BEPAT BERAY BERES BERGS BERKO BERKS BERME BERMS BEROB BERYL BESAT BESAW BESEE BESES BESIT BESOM BESOT BESTI BESTS BETAS BETED BETES BETHS BETID BETON BETTA BETTY BEVER BEVOR BEVUE BEVVY BEWET BEWIG BEZES BEZIL BEZZY BHAIS BHAJI BHANG BHATS BHELS BHOOT BHUNA BHUTS BIACH BIALI BIALY BIBBS BIBES BICCY BICES BIDED BIDER BIDES BIDET BIDIS BIDON BIELD BIERS BIFFO BIFFS BIFFY BIFID BIGAE BIGGS BIGGY BIGHA BIGHT BIGLY BIGOS BIJOU BIKED BIKER BIKES BIKIE BILBO BILBY BILED BILES BILGY BILKS BILLS BIMAH BIMAS BIMBO BINAL BINDI BINDS BINER BINES BINGS BINGY BINIT BINKS BINTS BIOGS BIONT BIOTA BIPED BIPOD BIRDS BIRKS BIRLE BIRLS BIROS BIRRS BIRSE BIRSY BISES BISKS BISOM BITCH BITER BITES BITOS BITOU BITSY BITTE BITTS BIVIA BIVVY BIZES BIZZO BIZZY BLABS BLADS BLADY BLAER BLAES BLAFF BLAGS BLAHS BLAIN BLAMS BLART BLASE BLASH BLATE BLATS BLATT BLAUD BLAWN BLAWS BLAYS BLEAR BLEBS BLECH BLEES BLENT BLERT BLEST BLETS BLEYS BLIMY BLING BLINI BLINS BLINY BLIPS BLIST BLITE BLITS BLIVE BLOBS BLOCS BLOGS BLOOK BLOOP BLORE BLOTS BLOWS BLOWY BLUBS BLUDE BLUDS BLUDY BLUED BLUES BLUET BLUEY BLUID BLUME BLUNK BLURS BLYPE BOABS BOAKS BOARS BOART BOATS BOBAC BOBAK BOBAS BOBOL BOBOS BOCCA BOCCE BOCCI BOCHE BOCKS BODED BODES BODGE BODHI BODLE BOEPS BOETS BOEUF BOFFO BOFFS BOGAN BOGEY BOGGY BOGIE BOGLE BOGUE BOGUS BOHEA BOHOS BOILS BOING BOINK BOITE BOKED BOKEH BOKES BOKOS BOLAR BOLAS BOLDS BOLES BOLIX BOLLS BOLOS BOLTS BOLUS BOMAS BOMBE BOMBO BOMBS BONCE BONDS BONED BONER BONES BONGS BONIE BONKS BONNE BONNY BONZA BONZE BOOAI BOOAY BOOBS BOODY BOOED BOOFY BOOGY BOOHS BOOKS BOOKY BOOLS BOOMS BOOMY BOONG BOONS BOORD BOORS BOOSE BOOTS BOPPY BORAK BORAL BORAS BORDE BORDS BORED BOREE BOREL BORER BORES BORGO BORIC BORKS BORMS BORNA BORON BORTS BORTY BORTZ BOSIE BOSKS BOSKY BOSON BOSUN BOTAS BOTEL BOTES BOTHY BOTTE BOTTS BOTTY BOUGE BOUKS BOULT BOUNS BOURD BOURG BOURN BOUSE BOUSY BOUTS BOVID BOWAT BOWED BOWER BOWES BOWET BOWIE BOWLS BOWNE BOWRS BOWSE BOXED BOXEN BOXES BOXLA BOXTY BOYAR BOYAU BOYED BOYFS BOYGS BOYLA BOYOS BOYSY BOZOS BRAAI BRACH BRACK BRACT BRADS BRAES BRAGS BRAIL BRAKS BRAKY BRAME BRANE BRANK BRANS BRANT BRAST BRATS BRAVA BRAVI BRAWS BRAXY BRAYS BRAZA BRAZE BREAM BREDE BREDS BREEM BREER BREES BREID BREIS BREME BRENS BRENT BRERE BRERS BREVE BREWS BREYS BRIER BRIES BRIGS BRIKI BRIKS BRILL BRIMS BRINS BRIOS BRISE BRISS BRITH BRITS BRITT BRIZE BROCH BROCK BRODS BROGH BROGS BROME BROMO BRONC BROND BROOL BROOS BROSE BROSY BROWS BRUGH BRUIN BRUIT BRULE BRUME BRUNG BRUSK BRUST BRUTS BUATS BUAZE BUBAL BUBAS BUBBA BUBBE BUBBY BUBUS BUCHU BUCKO BUCKS BUCKU BUDAS BUDIS BUDOS BUFFA BUFFE BUFFI BUFFO BUFFS BUFFY BUFOS BUFTY BUHLS BUHRS BUIKS BUIST BUKES BULBS BULGY BULKS BULLA BULLS BULSE BUMBO BUMFS BUMPH BUMPS BUMPY BUNAS BUNCE BUNCO BUNDE BUNDH BUNDS BUNDT BUNDU BUNDY BUNGS BUNGY BUNIA BUNJE BUNJY BUNKO BUNKS BUNNS BUNTS BUNTY BUNYA BUOYS BUPPY BURAN BURAS BURBS BURDS BURET BURFI BURGH BURGS BURIN BURKA BURKE BURKS BURLS BURNS BUROO BURPS BURQA BURRO BURRS BURRY BURSA BURSE BUSBY BUSES BUSKS BUSKY BUSSU BUSTI BUSTS BUSTY BUTEO BUTES BUTLE BUTOH BUTTS BUTTY BUTUT BUTYL BUZZY BWANA BWAZI BYDED BYDES BYKED BYKES BYRES BYRLS BYSSI BYTES BYWAY CAAED CABAS CABER CABOB CABOC CABRE CACAS CACKS CACKY CADEE CADES CADGE CADGY CADIE CADIS CADRE CAECA CAESE CAFES CAFFS CAGED CAGER CAGES CAGOT CAHOW CAIDS CAINS CAIRD CAJON CAJUN CAKED CAKES CAKEY CALFS CALID CALIF CALIX CALKS CALLA CALLS CALMS CALMY CALOS CALPA CALPS CALVE CALYX CAMAN CAMAS CAMES CAMIS CAMOS CAMPI CAMPO CAMPS CAMPY CAMUS CANED CANEH CANER CANES CANGS CANID CANNA CANNS CANSO CANST CANTO CANTS CANTY CAPAS CAPED CAPES CAPEX CAPHS CAPIZ CAPLE CAPON CAPOS CAPOT CAPRI CAPUL CARAP CARBO CARBS CARBY CARDI CARDS CARDY CARED CARER CARES CARET CAREX CARKS CARLE CARLS CARNS CARNY CAROB CAROM CARON CARPI CARPS CARRS CARSE CARTA CARTE CARTS CARVY CASAS CASCO CASED CASES CASKS CASKY CASTS CASUS CATES CAUDA CAUKS CAULD CAULS CAUMS CAUPS CAURI CAUSA CAVAS CAVED CAVEL CAVER CAVES CAVIE CAWED CAWKS CAXON CEAZE CEBID CECAL CECUM CEDED CEDER CEDES CEDIS CEIBA CEILI CEILS CELEB CELLA CELLI CELLS CELOM CELTS CENSE CENTO CENTS CENTU CEORL CEPES CERCI CERED CERES CERGE CERIA CERIC CERNE CEROC CEROS CERTS CERTY CESSE CESTA CESTI CETES CETYL CEZVE CHACE CHACK CHACO CHADO CHADS CHAFT CHAIS CHALS CHAMS CHANA CHANG CHANK CHAPE CHAPS CHAPT CHARA CHARE CHARK CHARR CHARS CHARY CHATS CHAVE CHAVS CHAWK CHAWS CHAYA CHAYS CHEEP CHEFS CHEKA CHELA CHELP CHEMO CHEMS CHERE CHERT CHETH CHEVY CHEWS CHEWY CHIAO CHIAS CHIBS CHICA CHICH CHICO CHICS CHIEL CHIKS CHILE CHIMB CHIMO CHIMP CHINE CHING CHINK CHINO CHINS CHIPS CHIRK CHIRL CHIRM CHIRO CHIRR CHIRT CHIRU CHITS CHIVE CHIVS CHIVY CHIZZ CHOCO CHOCS CHODE CHOGS CHOIL CHOKO CHOKY CHOLA CHOLI CHOLO CHOMP CHONS CHOOF CHOOK CHOOM CHOON CHOPS CHOTA CHOTT CHOUT CHOUX CHOWK CHOWS CHUBS CHUFA CHUFF CHUGS CHUMS CHURL CHURR CHUSE CHUTS CHYLE CHYME CHYND CIBOL CIDED CIDES CIELS CIGGY CILIA CILLS CIMAR CIMEX CINCT CINES CINQS CIONS CIPPI CIRCS CIRES CIRLS CIRRI CISCO CISSY CISTS CITAL CITED CITER CITES CIVES CIVET CIVIE CIVVY CLACH CLADE CLADS CLAES CLAGS CLAME CLAMS CLANS CLAPS CLAPT CLARO CLART CLARY CLAST CLATS CLAUT CLAVE CLAVI CLAWS CLAYS CLECK CLEEK CLEEP CLEFS CLEGS CLEIK CLEMS CLEPE CLEPT CLEVE CLEWS CLIED CLIES CLIFT CLIME CLINE CLINT CLIPE CLIPS CLIPT CLITS CLOAM CLODS CLOFF CLOGS CLOKE CLOMB CLOMP CLONK CLONS CLOOP CLOOT CLOPS CLOTE CLOTS CLOUR CLOUS CLOWS CLOYE CLOYS CLOZE CLUBS CLUES CLUEY CLUNK CLYPE CNIDA COACT COADY COALA COALS COALY COAPT COARB COATE COATI COATS COBBS COBBY COBIA COBLE COBZA COCAS COCCI COCCO COCKS COCKY COCOS CODAS CODEC CODED CODEN CODER CODES CODEX CODON COEDS COFFS COGIE COGON COGUE COHAB COHEN COHOE COHOG COHOS COIFS COIGN COILS COINS COIRS COITS COKED COKES COLAS COLBY COLDS COLED COLES COLEY COLIC COLIN COLLS COLLY COLOG COLTS COLZA COMAE COMAL COMAS COMBE COMBI COMBO COMBS COMBY COMER COMES COMIX COMMO COMMS COMMY COMPO COMPS COMPT COMTE COMUS CONED CONES CONEY CONFS CONGA CONGE CONGO CONIA CONIN CONKS CONKY CONNE CONNS CONTE CONTO CONUS CONVO COOCH COOED COOEE COOER COOEY COOFS COOKS COOKY COOLS COOLY COOMB COOMS COOMY COONS COOPS COOPT COOST COOTS COOZE COPAL COPAY COPED COPEN COPER COPES COPPY COPRA COPSY COQUI CORAM CORBE CORBY CORDS CORED CORES COREY CORGI CORIA CORKS CORKY CORMS CORNI CORNO CORNS CORNU CORPS CORSE CORSO COSEC COSED COSES COSET COSEY COSIE COSTA COSTE COSTS COTAN COTED COTES COTHS COTTA COTTS COUDE COUPS COURB COURD COURE COURS COUTA COUTH COVED COVES COVIN COWAL COWAN COWED COWKS COWLS COWPS COWRY COXAE COXAL COXED COXES COXIB COYAU COYED COYER COYPU COZED COZEN COZES COZEY COZIE CRAAL CRABS CRAGS CRAIC CRAIG CRAKE CRAME CRAMS CRANS CRAPE CRAPS CRAPY CRARE CRAWS CRAYS CREDS CREEL CREES CREMS CRENA CREPS CREPY CREWE CREWS CRIAS CRIBS CRIES CRIMS CRINE CRIOS CRIPE CRIPS CRISE CRITH CRITS CROCI CROCS CROFT CROGS CROMB CROME CRONK CRONS CROOL CROON CROPS CRORE CROST CROUT CROWS CROZE CRUCK CRUDO CRUDS CRUDY CRUES CRUET CRUFT CRUNK CRUOR CRURA CRUSE CRUSY CRUVE CRWTH CRYER CTENE CUBBY CUBEB CUBED CUBER CUBES CUBIT CUDDY CUFFO CUFFS CUIFS CUING CUISH CUITS CUKES CULCH CULET CULEX CULLS CULLY CULMS CULPA CULTI CULTS CULTY CUMEC CUNDY CUNEI CUNIT CUNTS CUPEL CUPID CUPPA CUPPY CURAT CURBS CURCH CURDS CURDY CURED CURER CURES CURET CURFS CURIA CURIE CURLI CURLS CURNS CURNY CURRS CURSI CURST CUSEC CUSHY CUSKS CUSPS CUSPY CUSSO CUSUM CUTCH CUTER CUTES CUTEY CUTIN CUTIS CUTTO CUTTY CUTUP CUVEE CUZES CWTCH CYANO CYANS CYCAD CYCAS CYCLO CYDER CYLIX CYMAE CYMAR CYMAS CYMES CYMOL CYSTS CYTES CYTON CZARS DAALS DABBA DACES DACHA DACKS DADAH DADAS DADOS DAFFS DAFFY DAGGA DAGGY DAGOS DAHLS DAIKO DAINE DAINT DAKER DALED DALES DALIS DALLE DALTS DAMAN DAMAR DAMES DAMME DAMNS DAMPS DAMPY DANCY DANGS DANIO DANKS DANNY DANTS DARAF DARBS DARCY DARED DARER DARES DARGA DARGS DARIC DARIS DARKS DARKY DARNS DARRE DARTS DARZI DASHI DASHY DATAL DATED DATER DATES DATOS DATTO DAUBE DAUBS DAUBY DAUDS DAULT DAURS DAUTS DAVEN DAVIT DAWAH DAWDS DAWED DAWEN DAWKS DAWNS DAWTS DAYAN DAYCH DAYNT DAZED DAZER DAZES DEADS DEAIR DEALS DEANS DEARE DEARN DEARS DEARY DEASH DEAVE DEAWS DEAWY DEBAG DEBBY DEBEL DEBES DEBTS DEBUD DEBUR DEBUS DEBYE DECAD DECAF DECAN DECKO DECKS DECOS DEDAL DEEDS DEEDY DEELY DEEMS DEENS DEEPS DEERE DEERS DEETS DEEVE DEEVS DEFAT DEFFO DEFIS DEFOG DEGAS DEGUM DEGUS DEICE DEIDS DEIFY DEILS DEISM DEIST DEKED DEKES DEKKO DELED DELES DELFS DELFT DELIS DELLS DELLY DELOS DELPH DELTS DEMAN DEMES DEMIC DEMIT DEMOB DEMOI DEMOS DEMPT DENAR DENAY DENCH DENES DENET DENIS DENTS DEOXY DERAT DERAY DERED DERES DERIG DERMA DERMS DERNS DERNY DEROS DERRO DERRY DERTH DERVS DESEX DESHI DESIS DESKS DESSE DEVAS DEVEL DEVIS DEVON DEVOS DEVOT DEWAN DEWAR DEWAX DEWED DEXES DEXIE DHABA DHAKS DHALS DHIKR DHOBI DHOLE DHOLL DHOLS DHOTI DHOWS DHUTI DIACT DIALS DIANE DIAZO DIBBS DICED DICER DICES DICHT DICKS DICKY DICOT DICTA DICTS DICTY DIDDY DIDIE DIDOS DIDST DIEBS DIELS DIENE DIETS DIFFS DIGHT DIKAS DIKED DIKER DIKES DIKEY DILDO DILLI DILLS DIMBO DIMER DIMES DIMPS DINAR DINED DINES DINGE DINGS DINIC DINKS DINKY DINNA DINOS DINTS DIOLS DIOTA DIPPY DIPSO DIRAM DIRER DIRKE DIRKS DIRLS DIRTS DISAS DISCI DISCS DISHY DISKS DISME DITAL DITAS DITED DITES DITSY DITTS DITZY DIVAN DIVAS DIVED DIVES DIVIS DIVNA DIVOS DIVOT DIVVY DIWAN DIXIE DIXIT DIYAS DIZEN DJINN DJINS DOABS DOATS DOBBY DOBES DOBIE DOBLA DOBRA DOBRO DOCHT DOCKS DOCOS DOCUS DODDY DODOS DOEKS DOERS DOEST DOETH DOFFS DOGAN DOGES DOGEY DOGGO DOGGY DOGIE DOHYO DOILT DOILY DOITS DOJOS DOLCE DOLCI DOLED DOLES DOLIA DOLLS DOLMA DOLOR DOLOS DOLTS DOMAL DOMED DOMES DOMIC DONAH DONAS DONEE DONER DONGA DONGS DONKO DONNA DONNE DONNY DONSY DOOBS DOOCE DOODY DOOKS DOOLE DOOLS DOOLY DOOMS DOOMY DOONA DOORN DOORS DOOZY DOPAS DOPED DOPER DOPES DORAD DORBA DORBS DOREE DORES DORIC DORIS DORKS DORKY DORMS DORMY DORPS DORRS DORSA DORSE DORTS DORTY DOSAI DOSAS DOSED DOSEH DOSER DOSES DOSHA DOTAL DOTED DOTER DOTES DOTTY DOUAR DOUCE DOUCS DOUKS DOULA DOUMA DOUMS DOUPS DOURA DOUSE DOUTS DOVED DOVEN DOVER DOVES DOVIE DOWAR DOWDS DOWED DOWER DOWIE DOWLE DOWLS DOWLY DOWNA DOWNS DOWPS DOWSE DOWTS DOXED DOXES DOXIE DOYEN DOYLY DOZED DOZER DOZES DRABS DRACK DRACO DRAFF DRAGS DRAIL DRAMS DRANT DRAPS DRATS DRAVE DRAWS DRAYS DREAR DRECK DREED DREER DREES DREGS DREKS DRENT DRERE DREST DREYS DRIBS DRICE DRIES DRILY DRIPS DRIPT DROID DROIL DROKE DROLE DROME DRONY DROOB DROOG DROOK DROPS DROPT DROUK DROWS DRUBS DRUGS DRUMS DRUPE DRUSE DRUSY DRUXY DRYAD DRYAS DSOBO DSOMO DUADS DUALS DUANS DUARS DUBBO DUCAL DUCAT DUCES DUCKS DUCKY DUCTS DUDDY DUDED DUDES DUELS DUETS DUETT DUFFS DUFUS DUING DUITS DUKAS DUKED DUKES DUKKA DULCE DULES DULIA DULLS DULSE DUMAS DUMBO DUMBS DUMKA DUMKY DUMPS DUNAM DUNCH DUNES DUNGS DUNGY DUNKS DUNNO DUNNY DUNSH DUNTS DUOMI DUOMO DUPED DUPER DUPES DUPLE DUPLY DUPPY DURAL DURAS DURED DURES DURGY DURNS DUROC DUROS DUROY DURRA DURRS DURRY DURST DURUM DURZI DUSKS DUSTS DUXES DWAAL DWALE DWALM DWAMS DWANG DWAUM DWEEB DWILE DWINE DYADS DYERS DYKED DYKES DYKEY DYKON DYNEL DYNES DZHOS EAGRE EALED EALES EANED EARDS EARED EARLS EARNS EARNT EARST EASED EASER EASES EASLE EASTS EATHE EAVED EAVES EBBED EBBET EBONS EBOOK ECADS ECHED ECHES ECHOS ECRUS EDEMA EDGED EDGER EDGES EDILE EDITS EDUCE EDUCT EEJIT EENSY EEVEN EEVNS EFFED EGADS EGERS EGEST EGGAR EGGED EGGER EGMAS EHING EIDER EIDOS EIGNE EIKED EIKON EILDS EISEL EJIDO EKKAS ELAIN ELAND ELANS ELCHI ELDIN ELEMI ELFED ELIAD ELINT ELMEN ELOGE ELOGY ELOIN ELOPS ELPEE ELSIN ELUTE ELVAN ELVEN ELVER ELVES EMACS EMBAR EMBAY EMBOG EMBOW EMBOX EMBUS EMEER EMEND EMERG EMERY EMEUS EMICS EMIRS EMITS EMMAS EMMER EMMET EMMEW EMMYS EMOJI EMONG EMOTE EMOVE EMPTS EMULE EMURE EMYDE EMYDS ENARM ENATE ENDED ENDER ENDEW ENDUE ENEWS ENFIX ENIAC ENLIT ENMEW ENNOG ENOKI ENOLS ENORM ENOWS ENROL ENSEW ENSKY ENTIA ENURE ENURN ENVOI ENZYM EORLS EOSIN EPACT EPEES EPHAH EPHAS EPHOD EPHOR EPICS EPODE EPOPT EPRIS EQUES EQUID ERBIA EREVS ERGON ERGOS ERGOT ERHUS ERICA ERICK ERICS ERING ERNED ERNES EROSE ERRED ERSES ERUCT ERUGO ERUVS ERVEN ERVIL ESCAR ESCOT ESILE ESKAR ESKER ESNES ESSES ESTOC ESTOP ESTRO ETAGE ETAPE ETATS ETENS ETHAL ETHNE ETHYL ETICS ETNAS ETTIN ETTLE ETUIS ETWEE ETYMA EUGHS EUKED EUPAD EUROS EUSOL EVENS EVERT EVETS EVHOE EVILS EVITE EVOHE EWERS EWEST EWHOW EWKED EXAMS EXEAT EXECS EXEEM EXEME EXFIL EXIES EXINE EXING EXITS EXODE EXOME EXONS EXPAT EXPOS EXUDE EXULS EXURB EYASS EYERS EYOTS EYRAS EYRES EYRIE EYRIR EZINE FABBY FACED FACER FACES FACIA FACTA FACTS FADDY FADED FADER FADES FADGE FADOS FAENA FAERY FAFFS FAFFY FAGGY FAGIN FAGOT FAIKS FAILS FAINE FAINS FAIRS FAKED FAKER FAKES FAKEY FAKIE FAKIR FALAJ FALLS FAMED FAMES FANAL FANDS FANES FANGA FANGO FANGS FANKS FANON FANOS FANUM FAQIR FARAD FARCI FARCY FARDS FARED FARER FARES FARLE FARLS FARMS FAROS FARRO FARSE FARTS FASCI FASTI FASTS FATED FATES FATLY FATSO FATWA FAUGH FAULD FAUNS FAURD FAUTS FAUVE FAVAS FAVEL FAVER FAVES FAVUS FAWNS FAWNY FAXED FAXES FAYED FAYER FAYNE FAYRE FAZED FAZES FEALS FEARE FEARS FEART FEASE FEATS FEAZE FECES FECHT FECIT FECKS FEDEX FEEBS FEEDS FEELS FEENS FEERS FEESE FEEZE FEHME FEINT FEIST FELCH FELID FELLS FELLY FELTS FELTY FEMAL FEMES FEMMY FENDS FENDY FENIS FENKS FENNY FENTS FEODS FEOFF FERER FERES FERIA FERLY FERMI FERMS FERNS FERNY FESSE FESTA FESTS FESTY FETAS FETED FETES FETOR FETTA FETTS FETWA FEUAR FEUDS FEUED FEYED FEYER FEYLY FEZES FEZZY FIARS FIATS FIBRO FICES FICHE FICHU FICIN FICOS FIDES FIDGE FIDOS FIEFS FIENT FIERE FIERS FIEST FIFED FIFER FIFES FIFIS FIGGY FIGOS FIKED FIKES FILAR FILCH FILED FILES FILII FILKS FILLE FILLO FILLS FILMI FILMS FILOS FILUM FINCA FINDS FINED FINES FINIS FINKS FINNY FINOS FIORD FIQHS FIQUE FIRED FIRER FIRES FIRIE FIRKS FIRMS FIRNS FIRRY FIRTH FISCS FISKS FISTS FISTY FITCH FITLY FITNA FITTE FITTS FIVER FIVES FIXED FIXES FIXIT FJELD FLABS FLAFF FLAGS FLAKS FLAMM FLAMS FLAMY FLANE FLANS FLAPS FLARY FLATS FLAVA FLAWN FLAWS FLAWY FLAXY FLAYS FLEAM FLEAS FLEEK FLEER FLEES FLEGS FLEME FLEUR FLEWS FLEXI FLEXO FLEYS FLICS FLIED FLIES FLIMP FLIMS FLIPS FLIRS FLISK FLITE FLITS FLITT FLOBS FLOCS FLOES FLOGS FLONG FLOPS FLORS FLORY FLOSH FLOTA FLOTE FLOWS FLUBS FLUED FLUES FLUEY FLUKY FLUMP FLUOR FLURR FLUTY FLUYT FLYBY FLYPE FLYTE FOALS FOAMS FOEHN FOGEY FOGIE FOGLE FOGOU FOHNS FOIDS FOILS FOINS FOLDS FOLEY FOLIA FOLIC FOLIE FOLKS FOLKY FOMES FONDA FONDS FONDU FONES FONLY FONTS FOODS FOODY FOOLS FOOTS FOOTY FORAM FORBS FORBY FORDO FORDS FOREL FORES FOREX FORKS FORKY FORME FORMS FORTS FORZA FORZE FOSSA FOSSE FOUAT FOUDS FOUER FOUET FOULE FOULS FOUNT FOURS FOUTH FOVEA FOWLS FOWTH FOXED FOXES FOXIE FOYLE FOYNE FRABS FRACK FRACT FRAGS FRAIM FRANC FRAPE FRAPS FRASS FRATE FRATI FRATS FRAUS FRAYS FREES FREET FREIT FREMD FRENA FREON FRERE FRETS FRIBS FRIER FRIES FRIGS FRISE FRIST FRITH FRITS FRITT FRIZE FRIZZ FROES FROGS FRONS FRORE FRORN FRORY FROSH FROWS FROWY FRUGS FRUMP FRUSH FRUST FRYER FUBAR FUBBY FUBSY FUCKS FUCUS FUDDY FUDGY FUELS FUERO FUFFS FUFFY FUGAL FUGGY FUGIE FUGIO FUGLE FUGLY FUGUS FUJIS FULLS FUMED FUMER FUMES FUMET FUNDI FUNDS FUNDY FUNGO FUNGS FUNKS FURAL FURAN FURCA FURLS FUROL FURRS FURTH FURZE FURZY FUSED FUSEE FUSEL FUSES FUSIL FUSKS FUSTS FUSTY FUTON FUZED FUZEE FUZES FUZIL FYCES FYKED FYKES FYLES FYRDS FYTTE GABBA GABBY GABLE GADDI GADES GADGE GADID GADIS GADJE GADJO GADSO GAFFS GAGED GAGER GAGES GAIDS GAINS GAIRS GAITA GAITS GAITT GAJOS GALAH GALAS GALAX GALEA GALED GALES GALLS GALLY GALOP GALUT GALVO GAMAS GAMAY GAMBA GAMBE GAMBO GAMBS GAMED GAMES GAMEY GAMIC GAMIN GAMME GAMMY GAMPS GANCH GANDY GANEF GANEV GANGS GANJA GANOF GANTS GAOLS GAPED GAPER GAPES GAPOS GAPPY GARBE GARBO GARBS GARDA GARES GARIS GARMS GARNI GARRE GARTH GARUM GASES GASPS GASPY GASTS GATCH GATED GATER GATES GATHS GATOR GAUCH GAUCY GAUDS GAUJE GAULT GAUMS GAUMY GAUPS GAURS GAUSS GAUZY GAVOT GAWCY GAWDS GAWKS GAWPS GAWSY GAYAL GAZAL GAZAR GAZED GAZES GAZON GAZOO GEALS GEANS GEARE GEARS GEATS GEBUR GECKS GEEKS GEEPS GEEST GEIST GEITS GELDS GELEE GELID GELLY GELTS GEMEL GEMMA GEMMY GEMOT GENAL GENAS GENES GENET GENIC GENII GENIP GENNY GENOA GENOM GENRO GENTS GENTY GENUA GENUS GEODE GEOID GERAH GERBE GERES GERLE GERMS GERMY GERNE GESSE GESSO GESTE GESTS GETAS GETUP GEUMS GEYAN GEYER GHAST GHATS GHAUT GHAZI GHEES GHEST GHYLL GIBED GIBEL GIBER GIBES GIBLI GIBUS GIFTS GIGAS GIGHE GIGOT GIGUE GILAS GILDS GILET GILLS GILLY GILPY GILTS GIMEL GIMME GIMPS GIMPY GINCH GINGE GINGS GINKS GINNY GINZO GIPON GIPPO GIPPY GIRDS GIRLS GIRNS GIRON GIROS GIRRS GIRSH GIRTS GISMO GISMS GISTS GITCH GITES GIUST GIVED GIVES GIZMO GLACE GLADS GLADY GLAIK GLAIR GLAMS GLANS GLARY GLAUM GLAUR GLAZY GLEBA GLEBE GLEBY GLEDE GLEDS GLEED GLEEK GLEES GLEET GLEIS GLENS GLENT GLEYS GLIAL GLIAS GLIBS GLIFF GLIFT GLIKE GLIME GLIMS GLISK GLITS GLITZ GLOAM GLOBI GLOBS GLOBY GLODE GLOGG GLOMS GLOOP GLOPS GLOST GLOUT GLOWS GLOZE GLUED GLUER GLUES GLUEY GLUGS GLUME GLUMS GLUON GLUTE GLUTS GNARL GNARR GNARS GNATS GNAWN GNAWS GNOWS GOADS GOAFS GOALS GOARY GOATS GOATY GOBAN GOBAR GOBBI GOBBO GOBBY GOBIS GOBOS GODET GODSO GOELS GOERS GOEST GOETH GOETY GOFER GOFFS GOGGA GOGOS GOIER GOJIS GOLDS GOLDY GOLES GOLFS GOLPE GOLPS GOMBO GOMER GOMPA GONCH GONEF GONGS GONIA GONIF GONKS GONNA GONOF GONYS GONZO GOOBY GOODS GOOFS GOOGS GOOKS GOOKY GOOLD GOOLS GOOLY GOONS GOONY GOOPS GOOPY GOORS GOORY GOOSY GOPAK GOPIK GORAL GORAS GORED GORES GORIS GORMS GORMY GORPS GORSE GORSY GOSHT GOSSE GOTCH GOTHS GOTHY GOTTA GOUCH GOUKS GOURA GOUTS GOUTY GOWAN GOWDS GOWFS GOWKS GOWLS GOWNS GOXES GOYIM GOYLE GRAAL GRABS GRADS GRAFF GRAIP GRAMA GRAME GRAMP GRAMS GRANA GRANS GRAPY GRAVS GRAYS GREBE GREBO GRECE GREEK GREES GREGE GREGO GREIN GRENS GRESE GREVE GREWS GREYS GRICE GRIDE GRIDS GRIFF GRIFT GRIGS GRIKE GRINS GRIOT GRIPS GRIPT GRIPY GRISE GRIST GRISY GRITH GRITS GRIZE GROAT GRODY GROGS GROKS GROMA GRONE GROOF GROSZ GROTS GROUF GROVY GROWS GRRLS GRRRL GRUBS GRUED GRUES GRUFE GRUME GRUMP GRUND GRYCE GRYDE GRYKE GRYPE GRYPT GUACO GUANA GUANO GUANS GUARS GUCKS GUCKY GUDES GUFFS GUGAS GUIDS GUIMP GUIRO GULAG GULAR GULAS GULES GULET GULFS GULFY GULLS GULPH GULPS GULPY GUMMA GUMMI GUMPS GUNDY GUNGE GUNGY GUNKS GUNKY GUNNY GUQIN GURDY GURGE GURLS GURLY GURNS GURRY GURSH GURUS GUSHY GUSLA GUSLE GUSLI GUSSY GUSTS GUTSY GUTTA GUTTY GUYED GUYLE GUYOT GUYSE GWINE GYALS GYANS GYBED GYBES GYELD GYMPS GYNAE GYNIE GYNNY GYNOS GYOZA GYPOS GYPPO GYPPY GYRAL GYRED GYRES GYRON GYROS GYRUS GYTES GYVED GYVES HAAFS HAARS HABLE HABUS HACEK HACKS HADAL HADED HADES HADJI HADST HAEMS HAETS HAFFS HAFIZ HAFTS HAGGS HAHAS HAICK HAIKA HAIKS HAIKU HAILS HAILY HAINS HAINT HAIRS HAITH HAJES HAJIS HAJJI HAKAM HAKAS HAKEA HAKES HAKIM HAKUS HALAL HALED HALER HALES HALFA HALFS HALID HALLO HALLS HALMA HALMS HALON HALOS HALSE HALTS HALVA HALWA HAMAL HAMBA HAMED HAMES HAMMY HAMZA HANAP HANCE HANCH HANDS HANGI HANGS HANKS HANKY HANSA HANSE HANTS HAOLE HAOMA HAPAX HAPLY HAPPI HAPUS HARAM HARDS HARED HARES HARIM HARKS HARLS HARMS HARNS HAROS HARPS HARTS HASHY HASKS HASPS HASTA HATED HATES HATHA HAUDS HAUFS HAUGH HAULD HAULM HAULS HAULT HAUNS HAUSE HAVER HAVES HAWED HAWKS HAWMS HAWSE HAYED HAYER HAYEY HAYLE HAZAN HAZED HAZER HAZES HEADS HEALD HEALS HEAME HEAPS HEAPY HEARE HEARS HEAST HEATS HEBEN HEBES HECHT HECKS HEDER HEDGY HEEDS HEEDY HEELS HEEZE HEFTE HEFTS HEIDS HEIGH HEILS HEIRS HEJAB HEJRA HELED HELES HELIO HELLS HELMS HELOS HELOT HELPS HELVE HEMAL HEMES HEMIC HEMIN HEMPS HEMPY HENCH HENDS HENGE HENNA HENNY HENRY HENTS HEPAR HERBS HERBY HERDS HERES HERLS HERMA HERMS HERNS HEROS HERRY HERSE HERTZ HERYE HESPS HESTS HETES HETHS HEUCH HEUGH HEVEA HEWED HEWER HEWGH HEXAD HEXED HEXER HEXES HEXYL HEYED HIANT HICKS HIDED HIDER HIDES HIEMS HIGHS HIGHT HIJAB HIJRA HIKED HIKER HIKES HIKOI HILAR HILCH HILLO HILLS HILTS HILUM HILUS HIMBO HINAU HINDS HINGS HINKY HINNY HINTS HIOIS HIPLY HIRED HIREE HIRER HIRES HISSY HISTS HITHE HIVED HIVER HIVES HIZEN HOAED HOAGY HOARS HOARY HOAST HOBOS HOCKS HOCUS HODAD HODJA HOERS HOGAN HOGEN HOGGS HOGHS HOHED HOICK HOIED HOIKS HOING HOISE HOKAS HOKED HOKES HOKEY HOKIS HOKKU HOKUM HOLDS HOLED HOLES HOLEY HOLKS HOLLA HOLLO HOLME HOLMS HOLON HOLOS HOLTS HOMAS HOMED HOMES HOMEY HOMIE HOMME HOMOS HONAN HONDA HONDS HONED HONER HONES HONGI HONGS HONKS HONKY HOOCH HOODS HOODY HOOEY HOOFS HOOKA HOOKS HOOKY HOOLY HOONS HOOPS HOORD HOORS HOOSH HOOTS HOOTY HOOVE HOPAK HOPED HOPER HOPES HOPPY HORAH HORAL HORAS HORIS HORKS HORME HORNS HORST HORSY HOSED HOSEL HOSEN HOSER HOSES HOSEY HOSTA HOSTS HOTCH HOTEN HOTTY HOUFF HOUFS HOUGH HOURI HOURS HOUTS HOVEA HOVED HOVEN HOVES HOWBE HOWES HOWFF HOWFS HOWKS HOWLS HOWRE HOWSO HOXED HOXES HOYAS HOYED HOYLE HUBBY HUCKS HUDNA HUDUD HUERS HUFFS HUFFY HUGER HUGGY HUHUS HUIAS HULAS HULES HULKS HULKY HULLO HULLS HULLY HUMAS HUMFS HUMIC HUMPS HUMPY HUNKS HUNTS HURDS HURLS HURLY HURRA HURST HURTS HUSHY HUSKS HUSOS HUTIA HUZZA HUZZY HWYLS HYDRA HYENS HYGGE HYING HYKES HYLAS HYLEG HYLES HYLIC HYMNS HYNDE HYOID HYPED HYPES HYPHA HYPHY HYPOS HYRAX HYSON HYTHE IAMBI IAMBS IBRIK ICERS ICHED ICHES ICHOR ICIER ICKER ICKLE ICONS ICTAL ICTIC ICTUS IDANT IDEAS IDEES IDENT IDLED IDLES IDOLA IDOLS IDYLS IFTAR IGAPO IGGED IGLUS IHRAM IKANS IKATS IKONS ILEAC ILEAL ILEUM ILEUS ILIAD ILIAL ILIUM ILLER ILLTH IMAGO IMAMS IMARI IMAUM IMBAR IMBED IMIDE IMIDO IMIDS IMINE IMINO IMMEW IMMIT IMMIX IMPED IMPIS IMPOT IMPRO IMSHI IMSHY INAPT INARM INBYE INCEL INCLE INCOG INCUS INCUT INDEW INDIA INDIE INDOL INDOW INDRI INDUE INERM INFIX INFOS INFRA INGAN INGLE INION INKED INKER INKLE INNED INNIT INORB INRUN INSET INSPO INTEL INTIL INTIS INTRA INULA INURE INURN INUST INVAR INWIT IODIC IODID IODIN IOTAS IPPON IRADE IRIDS IRING IRKED IROKO IRONE IRONS ISBAS ISHES ISLED ISLES ISNAE ISSEI ISTLE ITEMS ITHER IVIED IVIES IXIAS IXNAY IXORA IXTLE IZARD IZARS IZZAT JAAPS JABOT JACAL JACKS JACKY JADED JADES JAFAS JAFFA JAGAS JAGER JAGGS JAGGY JAGIR JAGRA JAILS JAKER JAKES JAKEY JALAP JALOP JAMBE JAMBO JAMBS JAMBU JAMES JAMMY JAMON JANES JANNS JANNY JANTY JAPAN JAPED JAPER JAPES JARKS JARLS JARPS JARTA JARUL JASEY JASPE JASPS JATOS JAUKS JAUPS JAVAS JAVEL JAWAN JAWED JAXIE JEANS JEATS JEBEL JEDIS JEELS JEELY JEEPS JEERS JEEZE JEFES JEFFS JEHAD JEHUS JELAB JELLO JELLS JEMBE JEMMY JENNY JEONS JERID JERKS JERRY JESSE JESTS JESUS JETES JETON JEUNE JEWED JEWIE JHALA JIAOS JIBBA JIBBS JIBED JIBER JIBES JIFFS JIGGY JIGOT JIHAD JILLS JILTS JIMMY JIMPY JINGO JINKS JINNE JINNI JINNS JIRDS JIRGA JIRRE JISMS JIVED JIVER JIVES JIVEY JNANA JOBED JOBES JOCKO JOCKS JOCKY JOCOS JODEL JOEYS JOHNS JOINS JOKED JOKES JOKEY JOKOL JOLED JOLES JOLLS JOLTS JOLTY JOMON JOMOS JONES JONGS JONTY JOOKS JORAM JORUM JOTAS JOTTY JOTUN JOUAL JOUGS JOUKS JOULE JOURS JOWAR JOWED JOWLS JOWLY JOYED JUBAS JUBES JUCOS JUDAS JUDGY JUDOS JUGAL JUGUM JUJUS JUKED JUKES JUKUS JULEP JUMAR JUMBY JUMPS JUNCO JUNKS JUNKY JUPES JUPON JURAL JURAT JUREL JURES JUSTS JUTES JUTTY JUVES JUVIE KAAMA KABAB KABAR KABOB KACHA KACKS KADAI KADES KADIS KAFIR KAGOS KAGUS KAHAL KAIAK KAIDS KAIES KAIFS KAIKA KAIKS KAILS KAIMS KAING KAINS KAKAS KAKIS KALAM KALES KALIF KALIS KALPA KAMAS KAMES KAMIK KAMIS KAMME KANAE KANAS KANDY KANEH KANES KANGA KANGS KANJI KANTS KANZU KAONS KAPAS KAPHS KAPOK KAPOW KAPUS CAPUT KARAS KARAT KARKS KARNS KAROO KAROS KARRI KARST KARSY KARTS KARZY KASHA KASME KATAL KATAS KATIS KATTI KAUGH KAURI KAURU KAURY KAVAL KAVAS KAWAS KAWAU KAWED KAYLE KAYOS KAZIS KAZOO KBARS KEBAR KEBOB KECKS KEDGE KEDGY KEECH KEEFS KEEKS KEELS KEEMA KEENO KEENS KEEPS KEETS KEEVE KEFIR KEHUA KEIRS KELEP KELIM KELLS KELLY KELPS KELPY KELTS KELTY KEMBO KEMBS KEMPS KEMPT KEMPY KENAF KENCH KENDO KENOS KENTE KENTS KEPIS KERBS KEREL KERFS KERKY KERMA KERNE KERNS KEROS KERRY KERVE KESAR KESTS KETAS KETCH KETES KETOL KEVEL KEVIL KEXES KEYED KEYER KHADI KHAFS KHANS KHAPH KHATS KHAYA KHAZI KHEDA KHETH KHETS KHOJA KHORS KHOUM KHUDS KIAAT KIACK KIANG KIBBE KIBBI KIBEI KIBES KIBLA KICKS KICKY KIDDO KIDDY KIDEL KIDGE KIEFS KIERS KIEVE KIEVS KIGHT KIKES KIKOI KILEY KILIM KILLS KILNS KILOS KILPS KILTS KILTY KIMBO KINAS KINDA KINDS KINDY KINES KINGS KININ KINKS KINOS KIORE KIPES KIPPA KIPPS KIRBY KIRKS KIRNS KIRRI KISAN KISSY KISTS KITED KITER KITES KITHE KITHS KITUL KIVAS KIWIS KLANG KLAPS KLETT KLICK KLIEG KLIKS KLONG KLOOF KLUGE KLUTZ KNAGS KNAPS KNARL KNARS KNAUR KNAWE KNEES KNELL KNISH KNITS KNIVE KNOBS KNOPS KNOSP KNOTS KNOUT KNOWE KNOWS KNUBS KNURL KNURR KNURS KNUTS KOANS KOAPS KOBAN KOBOS KOELS KOFFS KOFTA KOGAL KOHAS KOHEN KOHLS KOINE KOJIS KOKAM KOKAS KOKER KOKRA KOKUM KOLAS KOLOS KOMBU KONBU KONDO KONKS KOOKS KOOKY KOORI KOPEK KOPHS KOPJE KOPPA KORAI KORAS KORAT KORES KORMA KOROS KORUN KORUS KOSES KOTCH KOTOS KOTOW KOURA KRAAL KRABS KRAFT KRAIS KRAIT KRANG KRANS KRANZ KRAUT KRAYS KREEP KRENG KREWE KRONA KRONE KROON KRUBI KRUNK KSARS KUBIE KUDOS KUDUS KUDZU KUFIS KUGEL KUIAS KUKRI KUKUS KULAK KULAN KULAS KULFI KUMIS KUMYS KURIS KURRE KURTA KURUS KUSSO KUTAS KUTCH KUTIS KUTUS KUZUS KVASS KVELL KWELA KYACK KYAKS KYANG KYARS KYATS KYBOS KYDST KYLES KYLIE KYLIN KYLIX KYLOE KYNDE KYNDS KYPES KYRIE KYTES KYTHE LAARI LABDA LABIA LABIS LABRA LACED LACER LACES LACET LACEY LACKS LADDY LADED LADER LADES LAERS LAEVO LAGAN LAHAL LAHAR LAICH LAICS LAIDS LAIGH LAIKA LAIKS LAIRD LAIRS LAIRY LAITH LAITY LAKED LAKER LAKES LAKHS LAKIN LAKSA LALDY LALLS LAMAS LAMBS LAMBY LAMED LAMER LAMES LAMIA LAMMY LAMPS LANAI LANAS LANCH LANDE LANDS LANES LANKS LANTS LAPIN LAPIS LAPJE LARCH LARDS LARDY LAREE LARES LARGO LARIS LARKS LARKY LARNS LARNT LARUM LASED LASER LASES LASSI LASSU LASSY LASTS LATAH LATED LATEN LATEX LATHI LATHS LATHY LATKE LATUS LAUAN LAUCH LAUDS LAUFS LAUND LAURA LAVAL LAVAS LAVED LAVER LAVES LAVRA LAVVY LAWED LAWER LAWIN LAWKS LAWNS LAWNY LAXED LAXER LAXES LAXLY LAYED LAYIN LAYUP LAZAR LAZED LAZES LAZOS LAZZI LAZZO LEADS LEADY LEAFS LEAKS LEAMS LEANS LEANY LEAPS LEARE LEARS LEARY LEATS LEAVY LEAZE LEBEN LECCY LEDES LEDGY LEDUM LEEAR LEEKS LEEPS LEERS LEESE LEETS LEEZE LEFTE LEFTS LEGER LEGES LEGGE LEGGO LEGIT LEHRS LEHUA LEIRS LEISH LEMAN LEMED LEMEL LEMES LEMMA LEMME LENDS LENES LENGS LENIS LENOS LENSE LENTI LENTO LEONE LEPID LEPRA LEPTA LERED LERES LERPS LESBO LESES LESTS LETCH LETHE LETUP LEUCH LEUCO LEUDS LEUGH LEVAS LEVEE LEVES LEVIN LEVIS LEWIS LEXES LEXIS LEZES LEZZA LEZZY LIANA LIANE LIANG LIARD LIARS LIART LIBER LIBRA LIBRI LICHI LICHT LICIT LICKS LIDAR LIDOS LIEFS LIENS LIERS LIEUS LIEVE LIFER LIFES LIFTS LIGAN LIGER LIGGE LIGNE LIKED LIKER LIKES LIKIN LILLS LILOS LILTS LIMAN LIMAS LIMAX LIMBA LIMBI LIMBS LIMBY LIMED LIMEN LIMES LIMEY LIMMA LIMNS LIMOS LIMPA LIMPS LINAC LINCH LINDS LINDY LINED LINES LINEY LINGA LINGS LINGY LININ LINKS LINKY LINNS LINNY LINOS LINTS LINTY LINUM LINUX LIONS LIPAS LIPES LIPIN LIPOS LIPPY LIRAS LIRKS LIROT LISKS LISLE LISPS LISTS LITAI LITAS LITED LITER LITES LITHO LITHS LITRE LIVED LIVEN LIVES LIVOR LIVRE LLANO LOACH LOADS LOAFS LOAMS LOANS LOAST LOAVE LOBAR LOBED LOBES LOBOS LOBUS LOCHE LOCHS LOCIE LOCIS LOCKS LOCOS LOCUM LODEN LODES LOESS LOFTS LOGAN LOGES LOGGY LOGIA LOGIE LOGOI LOGON LOGOS LOHAN LOIDS LOINS LOIPE LOIRS LOKES LOLLS LOLLY LOLOG LOMAS LOMED LOMES LONER LONGA LONGE LONGS LOOBY LOOED LOOEY LOOFA LOOFS LOOIE LOOKS LOOKY LOOMS LOONS LOONY LOOPS LOORD LOOTS LOPED LOPER LOPES LOPPY LORAL LORAN LORDS LORDY LOREL LORES LORIC LORIS LOSED LOSEL LOSEN LOSES LOSSY LOTAH LOTAS LOTES LOTIC LOTOS LOTSA LOTTA LOTTE LOTTO LOTUS LOUED LOUGH LOUIE LOUIS LOUMA LOUND LOUNS LOUPE LOUPS LOURE LOURS LOURY LOUTS LOVAT LOVED LOVES LOVEY LOVIE LOWAN LOWED LOWES LOWND LOWNE LOWNS LOWPS LOWRY LOWSE LOWTS LOXED LOXES LOZEN LUACH LUAUS LUBED LUBES LUBRA LUCES LUCKS LUCRE LUDES LUDIC LUDOS LUFFA LUFFS LUGED LUGER LUGES LULLS LULUS LUMAS LUMBI LUMME LUMMY LUMPS LUNAS LUNES LUNET LUNGI LUNGS LUNKS LUNTS LUPIN LURED LURER LURES LUREX LURGI LURGY LURKS LURRY LURVE LUSER LUSHY LUSKS LUSTS LUSUS LUTEA LUTED LUTER LUTES LUVVY LUXED LUXER LUXES LWEIS LYAMS LYARD LYART LYASE LYCEA LYCEE LYCRA LYMES LYNES LYRES LYSED LYSES LYSIN LYSIS LYSOL LYSSA LYTED LYTES LYTHE LYTIC LYTTA MAAED MAARE MAARS MABES MACAS MACED MACER MACES MACHE MACHI MACHS MACKS MACLE MACON MADGE MADID MADRE MAERL MAFIC MAGES MAGGS MAGOT MAGUS MAHOE MAHUA MAHWA MAIDS MAIKO MAIKS MAILE MAILL MAILS MAIMS MAINS MAIRE MAIRS MAISE MAIST MAKAR MAKES MAKIS MAKOS MALAM MALAR MALAS MALAX MALES MALIC MALIK MALIS MALLS MALMS MALMY MALTS MALTY MALUS MALVA MALWA MAMAS MAMBA MAMEE MAMEY MAMIE MANAS MANAT MANDI MANEB MANED MANEH MANES MANET MANGS MANIS MANKY MANNA MANOS MANSE MANTA MANTO MANTY MANUL MANUS MAPAU MAQUI MARAE MARAH MARAS MARCS MARDY MARES MARGE MARGS MARIA MARID MARKA MARKS MARLE MARLS MARLY MARMS MARON MAROR MARRA MARRI MARSE MARTS MARVY MASAS MASED MASER MASES MASHY MASKS MASSA MASSY MASTS MASTY MASUS MATAI MATED MATER MATES MATHS MATIN MATLO MATTE MATTS MATZA MATZO MAUBY MAUDS MAULS MAUND MAURI MAUSY MAUTS MAUZY MAVEN MAVIE MAVIN MAVIS MAWED MAWKS MAWKY MAWNS MAWRS MAXED MAXES MAXIS MAYAN MAYAS MAYED MAYOS MAYST MAZED MAZER MAZES MAZEY MAZUT MBIRA MEADS MEALS MEANE MEANS MEANY MEARE MEASE MEATH MEATS MEBOS MECHS MECKS MEDII MEDLE MEEDS MEERS MEETS MEFFS MEINS MEINT MEINY MEITH MEKKA MELAS MELBA MELDS MELIC MELIK MELLS MELTS MELTY MEMES MEMOS MENAD MENDS MENED MENES MENGE MENGS MENSA MENSE MENSH MENTA MENTO MENUS MEOUS MEOWS MERCH MERCS MERDE MERED MEREL MERER MERES MERIL MERIS MERKS MERLE MERLS MERSE MESAL MESAS MESEL MESES MESHY MESIC MESNE MESON MESSY MESTO METED METES METHO METHS METIC METIF METIS METOL METRE MEUSE MEVED MEVES MEWED MEWLS MEYNT MEZES MEZZE MEZZO MHORR MIAOU MIAOW MIASM MIAUL MICAS MICHE MICHT MICKS MICKY MICOS MICRA MIDDY MIDGY MIDIS MIENS MIEVE MIFFS MIFFY MIFTY MIGGS MIHAS MIHIS MIKED MIKES MIKRA MIKVA MILCH MILDS MILER MILES MILFS MILIA MILKO MILKS MILLE MILLS MILOR MILOS MILPA MILTS MILTY MILTZ MIMED MIMEO MIMER MIMES MIMSY MINAE MINAR MINAS MINCY MINDS MINED MINES MINGE MINGS MINGY MINIS MINKE MINKS MINNY MINOS MINTS MIRED MIRES MIREX MIRID MIRIN MIRKS MIRKY MIRLY MIROS MIRVS MIRZA MISCH MISDO MISES MISGO MISOS MISSA MISTS MISTY MITCH MITER MITES MITIS MITRE MITTS MIXED MIXEN MIXER MIXES MIXTE MIXUP MIZEN MIZZY MNEME MOANS MOATS MOBBY MOBES MOBEY MOBIE MOBLE MOCHI MOCHS MOCHY MOCKS MODER MODES MODGE MODII MODUS MOERS MOFOS MOGGY MOHEL MOHOS MOHRS MOHUA MOHUR MOILE MOILS MOIRA MOIRE MOITS MOJOS MOKES MOKIS MOKOS MOLAL MOLAS MOLDS MOLED MOLES MOLLA MOLLS MOLLY MOLTO MOLTS MOLYS MOMES MOMMA MOMMY MOMUS MONAD MONAL MONAS MONDE MONDO MONER MONGO MONGS MONIC MONIE MONKS MONOS MONTE MONTY MOOBS MOOCH MOODS MOOED MOOKS MOOLA MOOLI MOOLS MOOLY MOONG MOONS MOONY MOOPS MOORS MOORY MOOTS MOOVE MOPED MOPER MOPES MOPEY MOPPY MOPSY MOPUS MORAE MORAS MORAT MORAY MOREL MORES MORIA MORNE MORNS MORRA MORRO MORSE MORTS MOSED MOSES MOSEY MOSKS MOSSO MOSTE MOSTS MOTED MOTEN MOTES MOTET MOTEY MOTHS MOTHY MOTIS MOTTE MOTTS MOTTY MOTUS MOTZA MOUCH MOUES MOULD MOULS MOUPS MOUST MOUSY MOVED MOVES MOWAS MOWED MOWRA MOXAS MOXIE MOYAS MOYLE MOYLS MOZED MOZES MOZOS MPRET MUCHO MUCIC MUCID MUCIN MUCKS MUCOR MUCRO MUDGE MUDIR MUDRA MUFFS MUFTI MUGGA MUGGS MUGGY MUHLY MUIDS MUILS MUIRS MUIST MUJIK MULCT MULED MULES MULEY MULGA MULIE MULLA MULLS MULSE MULSH MUMMS MUMPS MUMSY MUMUS MUNGA MUNGE MUNGO MUNGS MUNIS MUNTS MUNTU MUONS MURAS MURED MURES MUREX MURID MURKS MURLS MURLY MURRA MURRE MURRI MURRS MURRY MURTI MURVA MUSAR MUSCA MUSED MUSER MUSES MUSET MUSHA MUSIT MUSKS MUSOS MUSSE MUSSY MUSTH MUSTS MUTCH MUTED MUTER MUTES MUTHA MUTIS MUTON MUTTS MUXED MUXES MUZAK MUZZY MVULE MYALL MYLAR MYNAH MYNAS MYOID MYOMA MYOPE MYOPS MYOPY MYSID MYTHI MYTHS MYTHY MYXOS MZEES NAAMS NAANS NABES NABIS NABKS NABLA NABOB NACHE NACHO NACRE NADAS NAEVE NAEVI NAFFS NAGAS NAGGY NAGOR NAHAL NAIAD NAIFS NAIKS NAILS NAIRA NAIRU NAKED NAKER NAKFA NALAS NALED NALLA NAMED NAMER NAMES NAMMA NAMUS NANAS NANCE NANCY NANDU NANNA NANOS NANUA NAPAS NAPED NAPES NAPOO NAPPA NAPPE NAPPY NARAS NARCO NARCS NARDS NARES NARIC NARIS NARKS NARKY NARRE NASHI NATCH NATES NATIS NATTY NAUCH NAUNT NAVAR NAVES NAVEW NAVVY NAWAB NAZES NAZIR NAZIS NDUJA NEAFE NEALS NEAPS NEARS NEATH NEATS NEBEK NEBEL NECKS NEDDY NEEDS NEELD NEELE NEEMB NEEMS NEEPS NEESE NEEZE NEGRO NEGUS NEIFS NEIST NEIVE NELIS NELLY NEMAS NEMNS NEMPT NENES NEONS NEPER NEPIT NERAL NERDS NERKA NERKS NEROL NERTS NERTZ NERVY NESTS NETES NETOP NETTS NETTY NEUKS NEUME NEUMS NEVEL NEVES NEVUS NEWBS NEWED NEWEL NEWIE NEWSY NEWTS NEXTS NEXUS NGAIO NGANA NGATI NGOMA NGWEE NICAD NICHT NICKS NICOL NIDAL NIDED NIDES NIDOR NIDUS NIEFS NIEVE NIFES NIFFS NIFFY NIFTY NIGER NIGHS NIHIL NIKAB NIKAH NIKAU NILLS NIMBI NIMBS NIMPS NINER NINES NINON NIPAS NIPPY NIQAB NIRLS NIRLY NISEI NISSE NISUS NITER NITES NITID NITON NITRE NITRO NITRY NITTY NIVAL NIXED NIXER NIXES NIXIE NIZAM NKOSI NOAHS NOBBY NOCKS NODAL NODDY NODES NODUS NOELS NOGGS NOHOW NOILS NOILY NOINT NOIRS NOLES NOLLS NOLOS NOMAS NOMEN NOMES NOMIC NOMOI NOMOS NONAS NONCE NONES NONET NONGS NONIS NONNY NONYL NOOBS NOOIT NOOKS NOOKY NOONS NOOPS NOPAL NORIA NORIS NORKS NORMA NORMS NOSED NOSER NOSES NOTAL NOTED NOTER NOTES NOTUM NOULD NOULE NOULS NOUNS NOUNY NOUPS NOVAE NOVAS NOVUM NOWAY NOWED NOWLS NOWTS NOWTY NOXAL NOXES NOYAU NOYED NOYES NUBBY NUBIA NUCHA NUDDY NUDER NUDES NUDIE NUDZH NUFFS NUGAE NUKED NUKES NULLA NULLS NUMBS NUMEN NUMMY NUNNY NURDS NURDY NURLS NURRS NUTSO NUTSY NYAFF NYALA NYING NYSSA OAKED OAKER OAKUM OARED OASES OASIS OASTS OATEN OATER OATHS OAVES OBANG OBEAH OBELI OBEYS OBIAS OBIED OBIIT OBITS OBJET OBOES OBOLE OBOLI OBOLS OCCAM OCHER OCHES OCHRE OCHRY OCKER OCREA OCTAD OCTAN OCTAS OCTYL OCULI ODAHS ODALS ODEON ODEUM ODISM ODIST ODIUM ODORS ODOUR ODYLE ODYLS OFAYS OFFED OFFIE OFLAG OFTER OGAMS OGEED OGEES OGGIN OGHAM OGIVE OGLED OGLER OGLES OGMIC OGRES OHIAS OHING OHMIC OHONE OIDIA OILED OILER OINKS OINTS OJIME OKAPI OKAYS OKEHS OKRAS OKTAS OLDIE OLEIC OLEIN OLENT OLEOS OLEUM OLIOS OLLAS OLLAV OLLER OLLIE OLOGY OLPAE OLPES OMASA OMBER OMBUS OMENS OMERS OMITS OMLAH OMOVS OMRAH ONCER ONCES ONCET ONCUS ONELY ONERS ONERY ONIUM ONKUS ONLAY ONNED ONTIC OOBIT OOHED OOMPH OONTS OOPED OORIE OOSES OOTID OOZED OOZES OPAHS OPALS OPENS OPEPE OPING OPPOS OPSIN OPTED OPTER ORACH ORACY ORALS ORANG ORANT ORATE ORBED ORCAS ORCIN ORDOS OREAD ORFES ORGIA ORGIC ORGUE ORIBI ORIEL ORIXA ORLES ORLON ORLOP ORMER ORNIS ORPIN ORRIS ORTHO ORVAL ORZOS OSCAR OSHAC OSIER OSMIC OSMOL OSSIA OSTIA OTAKU OTARY OTTAR OTTOS OUBIT OUCHT OUENS OUIJA OULKS OUMAS OUNDY OUPAS OUPED OUPHE OUPHS OURIE OUSEL OUSTS OUTBY OUTED OUTRE OUTRO OUTTA OUZEL OUZOS OVALS OVELS OVENS OVERS OVIST OVOLI OVOLO OVULE OWCHE OWIES OWLED OWLER OWLET OWNED OWRES OWRIE OWSEN OXBOW OXERS OXEYE OXIDS OXIES OXIME OXIMS OXLIP OXTER OYERS OZEKI OZZIE PAALS PAANS PACAS PACED PACER PACES PACEY PACHA PACKS PACOS PACTA PACTS PADIS PADLE PADMA PADRE PADRI PAEAN PAEDO PAEON PAGED PAGER PAGES PAGLE PAGOD PAGRI PAIKS PAILS PAINS PAIRE PAIRS PAISA PAISE PAKKA PALAS PALAY PALEA PALED PALES PALET PALIS PALKI PALLA PALLS PALLY PALMS PALMY PALPI PALPS PALSA PAMPA PANAX PANCE PANDA PANDS PANDY PANED PANES PANGA PANGS PANIM PANKO PANNE PANNI PANTO PANTS PANTY PAOLI PAOLO PAPAS PAPAW PAPES PAPPI PAPPY PARAE PARAS PARCH PARDI PARDS PARDY PARED PAREN PAREO PARES PAREU PAREV PARGE PARGO PARIS PARKI PARKS PARKY PARLE PARLY PARMA PAROL PARPS PARRA PARRS PARTI PARTS PARVE PARVO PASEO PASES PASHA PASHM PASKA PASPY PASSE PASTS PATED PATEN PATER PATES PATHS PATIN PATKA PATLY PATTE PATUS PAUAS PAULS PAVAN PAVED PAVEN PAVER PAVES PAVID PAVIN PAVIS PAWAS PAWAW PAWED PAWER PAWKS PAWKY PAWLS PAWNS PAXES PAYED PAYOR PAYSD PEAGE PEAGS PEAKS PEAKY PEALS PEANS PEARE PEARS PEART PEASE PEATS PEATY PEAVY PEAZE PEBAS PECHS PECKE PECKS PECKY PEDES PEDIS PEDRO PEECE PEEKS PEELS PEENS PEEOY PEEPE PEEPS PEERS PEERY PEEVE PEGGY PEGHS PEINS PEISE PEIZE PEKAN PEKES PEKIN PEKOE PELAS PELAU PELES PELFS PELLS PELMA PELON PELTA PELTS PENDS PENDU PENED PENES PENGO PENIE PENIS PENKS PENNA PENNI PENTS PEONS PEONY PEPLA PEPOS PEPPY PEPSI PERAI PERCE PERCS PERDU PERDY PEREA PERES PERIS PERKS PERMS PERNS PEROG PERPS PERRY PERSE PERST PERTS PERVE PERVO PERVS PERVY PESOS PESTS PESTY PETAR PETER PETIT PETRE PETRI PETTI PETTO PEWEE PEWIT PEYSE PHAGE PHANG PHARE PHARM PHEER PHENE PHEON PHESE PHIAL PHISH PHIZZ PHLOX PHOCA PHONO PHONS PHOTS PHPHT PHUTS PHYLA PHYLE PIANI PIANS PIBAL PICAL PICAS PICCY PICKS PICOT PICRA PICUL PIEND PIERS PIERT PIETA PIETS PIEZO PIGHT PIGMY PIING PIKAS PIKAU PIKED PIKER PIKES PIKEY PIKIS PIKUL PILAE PILAF PILAO PILAR PILAU PILAW PILCH PILEA PILED PILEI PILER PILES PILIS PILLS PILOW PILUM PILUS PIMAS PIMPS PINAS PINED PINES PINGO PINGS PINKO PINKS PINNA PINNY PINON PINOT PINTA PINTS PINUP PIONS PIONY PIOUS PIOYE PIOYS PIPAL PIPAS PIPED PIPES PIPET PIPIS PIPIT PIPPY PIPUL PIRAI PIRLS PIRNS PIROG PISCO PISES PISKY PISOS PISSY PISTE PITAS PITHS PITON PITOT PITTA PIUMS PIXES PIZED PIZES PLAAS PLACK PLAGE PLANS PLAPS PLASH PLASM PLAST PLATS PLATT PLATY PLAYA PLAYS PLEAS PLEBE PLEBS PLENA PLEON PLESH PLEWS PLICA PLIES PLIMS PLING PLINK PLOAT PLODS PLONG PLONK PLOOK PLOPS PLOTS PLOTZ PLOUK PLOWS PLOYE PLOYS PLUES PLUFF PLUGS PLUMS PLUMY PLUOT PLUTO PLYER POACH POAKA POAKE POBOY POCKS POCKY PODAL PODDY PODEX PODGE PODGY PODIA POEMS POEPS POETS POGEY POGGE POGOS POHED POILU POIND POKAL POKED POKES POKEY POKIE POLED POLER POLES POLEY POLIO POLIS POLJE POLKS POLLS POLLY POLOS POLTS POLYS POMBE POMES POMMY POMOS POMPS PONCE PONCY PONDS PONES PONEY PONGA PONGO PONGS PONGY PONKS PONTS PONTY PONZU POODS POOED POOFS POOFY POOHS POOJA POOKA POOKS POOLS POONS POOPS POOPY POORI POORT POOTS POOVE POOVY POPES POPPA POPSY PORAE PORAL PORED PORER PORES PORGE PORGY PORIN PORKS PORKY PORNO PORNS PORNY PORTA PORTS PORTY POSED POSES POSEY POSHO POSTS POTAE POTCH POTED POTES POTIN POTOO POTSY POTTO POTTS POTTY POUFF POUFS POUKE POUKS POULE POULP POULT POUPE POUPT POURS POUTS POWAN POWIN POWND POWNS POWNY POWRE POXED POXES POYNT POYOU POYSE POZZY PRAAM PRADS PRAHU PRAMS PRANA PRANG PRAOS PRASE PRATE PRATS PRATT PRATY PRAUS PRAYS PREDY PREED PREES PREIF PREMS PREMY PRENT PREON PREOP PREPS PRESA PRESE PREST PREVE PREXY PREYS PRIAL PRICY PRIEF PRIER PRIES PRIGS PRILL PRIMA PRIMI PRIMP PRIMS PRIMY PRINK PRION PRISE PRISS PROAS PROBS PRODS PROEM PROFS PROGS PROIN PROKE PROLE PROLL PROMO PROMS PRONK PROPS PRORE PROSO PROSS PROST PROSY PROTO PROUL PROWS PROYN PRUNT PRUTA PRYER PRYSE PSEUD PSHAW PSION PSOAE PSOAI PSOAS PSORA PSYCH PSYOP PUBCO PUBES PUBIS PUCAN PUCER PUCES PUCKA PUCKS PUDDY PUDGE PUDIC PUDOR PUDSY PUDUS PUERS PUFFA PUFFS PUGGY PUGIL PUHAS PUJAH PUJAS PUKAS PUKED PUKER PUKES PUKEY PUKKA PUKUS PULAO PULAS PULED PULER PULES PULIK PULIS PULKA PULKS PULLI PULLS PULLY PULMO PULPS PULUS PUMAS PUMIE PUMPS PUNAS PUNCE PUNGA PUNGS PUNJI PUNKA PUNKS PUNKY PUNNY PUNTO PUNTS PUNTY PUPAE PUPAS PUPUS PURDA PURED PURES PURIN PURIS PURLS PURPY PURRS PURSY PURTY PUSES PUSLE PUSSY PUTID PUTON PUTTI PUTTO PUTTS PUZEL PWNED PYATS PYETS PYGAL PYINS PYLON PYNED PYNES PYOID PYOTS PYRAL PYRAN PYRES PYREX PYRIC PYROS PYXED PYXES PYXIE PYXIS PZAZZ QADIS QAIDS QAJAQ QANAT QAPIK QIBLA QOPHS QORMA QUADS QUAFF QUAGS QUAIR QUAIS QUAKY QUALE QUANT QUARE QUASS QUATE QUATS QUAYD QUAYS QUBIT QUEAN QUEME QUENA QUERN QUEYN QUEYS QUICH QUIDS QUIFF QUIMS QUINA QUINE QUINO QUINS QUINT QUIPO QUIPS QUIPU QUIRE QUIRT QUIST QUITS QUOAD QUODS QUOIF QUOIN QUOIT QUOLL QUONK QUOPS QURSH QUYTE RABAT RABIC RABIS RACED RACES RACHE RACKS RACON RADGE RADIX RADON RAFFS RAFTS RAGAS RAGDE RAGED RAGEE RAGER RAGES RAGGA RAGGS RAGGY RAGIS RAGUS RAHED RAHUI RAIAS RAIDS RAIKS RAILE RAILS RAINE RAINS RAIRD RAITA RAITS RAJAS RAJES RAKED RAKEE RAKER RAKES RAKIA RAKIS RAKUS RALES RAMAL RAMEE RAMET RAMIE RAMIN RAMIS RAMMY RAMPS RAMUS RANAS RANCE RANDS RANEE RANGA RANGI RANGS RANGY RANID RANIS RANKE RANKS RANTS RAPED RAPER RAPES RAPHE RAPPE RARED RAREE RARES RARKS RASED RASER RASES RASPS RASSE RASTA RATAL RATAN RATAS RATCH RATED RATEL RATER RATES RATHA RATHE RATHS RATOO RATOS RATUS RAUNS RAUPO RAVED RAVEL RAVER RAVES RAVEY RAVIN RAWER RAWIN RAWLY RAWNS RAXED RAXES RAYAH RAYAS RAYED RAYLE RAYNE RAZED RAZEE RAZER RAZES RAZOO READD READS REAIS REAKS REALO REALS REAME REAMS REAMY REANS REAPS REARS REAST REATA REATE REAVE REBBE REBEC REBID REBIT REBOP REBUY RECAL RECCE RECCO RECCY RECIT RECKS RECON RECTA RECTI RECTO REDAN REDDS REDDY REDED REDES REDIA REDID REDIP REDLY REDON REDOS REDOX REDRY REDUB REDUX REDYE REECH REEDE REEDS REEFS REEFY REEKS REEKY REELS REENS REEST REEVE REFED REFEL REFFO REFIS REFIX REFLY REFRY REGAR REGES REGGO REGIE REGMA REGNA REGOS REGUR REHEM REIFS REIFY REIKI REIKS REINK REINS REIRD REIST REIVE REJIG REJON REKED REKES REKEY RELET RELIE RELIT RELLO REMAN REMAP REMEN REMET REMEX REMIX RENAY RENDS RENEY RENGA RENIG RENIN RENNE RENOS RENTE RENTS REOIL REORG REPEG REPIN REPLA REPOS REPOT REPPS REPRO RERAN RERIG RESAT RESAW RESAY RESEE RESES RESEW RESID RESIT RESOD RESOW RESTO RESTS RESTY RESUS RETAG RETAX RETEM RETIA RETIE RETOX REVET REVIE REWAN REWAX REWED REWET REWIN REWON REWTH REXES REZES RHEAS RHEME RHEUM RHIES RHIME RHINE RHODY RHOMB RHONE RHUMB RHYNE RHYTA RIADS RIALS RIANT RIATA RIBAS RIBBY RIBES RICED RICER RICES RICEY RICHT RICIN RICKS RIDES RIDGY RIDIC RIELS RIEMS RIEVE RIFER RIFFS RIFTE RIFTS RIFTY RIGGS RIGOL RILED RILES RILEY RILLE RILLS RIMAE RIMED RIMER RIMES RIMUS RINDS RINDY RINES RINGS RINKS RIOJA RIOTS RIPED RIPES RIPPS RISES RISHI RISKS RISPS RISUS RITES RITTS RITZY RIVAS RIVED RIVEL RIVEN RIVES RIYAL RIZAS ROADS ROAMS ROANS ROARS ROARY ROATE ROBED ROBES ROBLE ROCKS RODED RODES ROGUY ROHES ROIDS ROILS ROILY ROINS ROIST ROJAK ROJIS ROKED ROKER ROKES ROLAG ROLES ROLFS ROLLS ROMAL ROMAN ROMEO ROMPS RONDE RONDO RONEO RONES RONIN RONNE RONTE RONTS ROODS ROOFS ROOFY ROOKS ROOKY ROOMS ROONS ROOPS ROOPY ROOSA ROOSE ROOTS ROOTY ROPED ROPER ROPES ROPEY ROQUE RORAL RORES RORIC RORID RORIE RORTS RORTY ROSED ROSES ROSET ROSHI ROSIN ROSIT ROSTI ROSTS ROTAL ROTAN ROTAS ROTCH ROTED ROTES ROTIS ROTLS ROTON ROTOS ROTTE ROUEN ROUES ROULE ROULS ROUMS ROUPS ROUPY ROUST ROUTH ROUTS ROVED ROVEN ROVES ROWAN ROWED ROWEL ROWEN ROWIE ROWME ROWND ROWTH ROWTS ROYNE ROYST ROZET ROZIT RUANA RUBAI RUBBY RUBEL RUBES RUBIN RUBLE RUBLI RUBUS RUCHE RUCKS RUDAS RUDDS RUDES RUDIE RUDIS RUEDA RUERS RUFFE RUFFS RUGAE RUGAL RUGGY RUING RUINS RUKHS RULED RULES RUMAL RUMBO RUMEN RUMES RUMLY RUMMY RUMPO RUMPS RUMPY RUNCH RUNDS RUNED RUNES RUNGS RUNIC RUNNY RUNTS RUNTY RUPIA RURPS RURUS RUSAS RUSES RUSHY RUSKS RUSMA RUSSE RUSTS RUTHS RUTIN RUTTY RYALS RYBAT RYKED RYKES RYMME RYNDS RYOTS RYPER SAAGS SABAL SABED SABER SABES SABHA SABIN SABIR SABLE SABOT SABRA SABRE SACKS SACRA SADDO SADES SADHE SADHU SADIS SADOS SADZA SAFED SAFES SAGAS SAGER SAGES SAGGY SAGOS SAGUM SAHEB SAHIB SAICE SAICK SAICS SAIDS SAIGA SAILS SAIMS SAINE SAINS SAIRS SAIST SAITH SAJOU SAKAI SAKER SAKES SAKIA SAKIS SAKTI SALAL SALAT SALEP SALES SALET SALIC SALIX SALLE SALMI SALOL SALOP SALPA SALPS SALSE SALTO SALTS SALUE SALUT SAMAN SAMAS SAMBA SAMBO SAMEK SAMEL SAMEN SAMES SAMEY SAMFU SAMMY SAMPI SAMPS SANDS SANED SANES SANGA SANGH SANGO SANGS SANKO SANSA SANTO SANTS SAOLA SAPAN SAPID SAPOR SARAN SARDS SARED SAREE SARGE SARGO SARIN SARIS SARKS SARKY SAROD SAROS SARUS SASER SASIN SASSE SATAI SATAY SATED SATEM SATES SATIS SAUBA SAUCH SAUGH SAULS SAULT SAUNT SAURY SAUTS SAVED SAVER SAVES SAVEY SAVIN SAWAH SAWED SAWER SAXES SAYED SAYER SAYID SAYNE SAYON SAYST SAZES SCABS SCADS SCAFF SCAGS SCAIL SCALA SCALL SCAMS SCAND SCANS SCAPA SCAPE SCAPI SCARP SCARS SCART SCATH SCATS SCATT SCAUD SCAUP SCAUR SCAWS SCEAT SCENA SCEND SCHAV SCHMO SCHUL SCHWA SCLIM SCODY SCOGS SCOOG SCOOT SCOPA SCOPS SCOTS SCOUG SCOUP SCOWP SCOWS SCRAB SCRAE SCRAG SCRAN SCRAT SCRAW SCRAY SCRIM SCRIP SCROB SCROD SCROG SCROW SCUDI SCUDO SCUDS SCUFF SCUFT SCUGS SCULK SCULL SCULP SCULS SCUMS SCUPS SCURF SCURS SCUSE SCUTA SCUTE SCUTS SCUZZ SCYES SDAYN SDEIN SEALS SEAME SEAMS SEAMY SEANS SEARE SEARS SEASE SEATS SEAZE SEBUM SECCO SECHS SECTS SEDER SEDES SEDGE SEDGY SEDUM SEEDS SEEKS SEELD SEELS SEELY SEEMS SEEPS SEEPY SEERS SEFER SEGAR SEGNI SEGNO SEGOL SEGOS SEHRI SEIFS SEILS SEINE SEIRS SEISE SEISM SEITY SEIZA SEKOS SEKTS SELAH SELES SELFS SELLA SELLE SELLS SELVA SEMEE SEMES SEMIE SEMIS SENAS SENDS SENES SENGI SENNA SENOR SENSA SENSI SENTE SENTI SENTS SENVY SENZA SEPAD SEPAL SEPIC SEPOY SEPTA SEPTS SERAC SERAI SERAL SERED SERER SERES SERFS SERGE SERIC SERIN SERKS SERON SEROW SERRA SERRE SERRS SERRY SERVO SESEY SESSA SETAE SETAL SETON SETTS SEWAN SEWAR SEWED SEWEL SEWEN SEWIN SEXED SEXER SEXES SEXTO SEXTS SEYEN SHADS SHAGS SHAHS SHAKO SHAKT SHALM SHALY SHAMA SHAMS SHAND SHANS SHAPS SHARN SHASH SHAUL SHAWM SHAWN SHAWS SHAYA SHAYS SHCHI SHEAF SHEAL SHEAS SHEDS SHEEL SHEND SHENT SHEOL SHERD SHERE SHERO SHETS SHEVA SHEWN SHEWS SHIAI SHIEL SHIER SHIES SHILL SHILY SHIMS SHINS SHIPS SHIRR SHIRS SHISH SHISO SHIST SHITE SHITS SHIUR SHIVA SHIVE SHIVS SHLEP SHLUB SHMEK SHMOE SHOAT SHOED SHOER SHOES SHOGI SHOGS SHOJI SHOJO SHOLA SHOOL SHOON SHOOS SHOPE SHOPS SHORL SHOTE SHOTS SHOTT SHOWD SHOWS SHOYU SHRED SHRIS SHROW SHTIK SHTUM SHTUP SHULE SHULN SHULS SHUNS SHURA SHUTE SHUTS SHWAS SHYER SIALS SIBBS SIBYL SICES SICHT SICKO SICKS SICKY SIDAS SIDED SIDER SIDES SIDHA SIDHE SIDLE SIELD SIENS SIENT SIETH SIEUR SIFTS SIGHS SIGIL SIGLA SIGNA SIGNS SIJOS SIKAS SIKER SIKES SILDS SILED SILEN SILER SILES SILEX SILKS SILLS SILOS SILTS SILTY SILVA SIMAR SIMAS SIMBA SIMIS SIMPS SIMUL SINDS SINED SINES SINGS SINHS SINKS SINKY SINUS SIPED SIPES SIPPY SIRED SIREE SIRES SIRIH SIRIS SIROC SIRRA SIRUP SISAL SISES SISTA SISTS SITAR SITED SITES SITHE SITKA SITUP SITUS SIVER SIXER SIXES SIXMO SIXTE SIZAR SIZED SIZEL SIZER SIZES SKAGS SKAIL SKALD SKANK SKART SKATS SKATT SKAWS SKEAN SKEAR SKEDS SKEED SKEEF SKEEN SKEER SKEES SKEET SKEGG SKEGS SKEIN SKELF SKELL SKELM SKELP SKENE SKENS SKEOS SKEPS SKERS SKETS SKEWS SKIDS SKIED SKIES SKIEY SKIMO SKIMS SKINK SKINS SKINT SKIOS SKIPS SKIRL SKIRR SKITE SKITS SKIVE SKIVY SKLIM SKOAL SKODY SKOFF SKOGS SKOLS SKOOL SKORT SKOSH SKRAN SKRIK SKUAS SKUGS SKYED SKYER SKYEY SKYFS SKYRE SKYRS SKYTE SLABS SLADE SLAES SLAGS SLAID SLAKE SLAMS SLANE SLANK SLAPS SLART SLATS SLATY SLAWS SLAYS SLEBS SLEDS SLEER SLEWS SLEYS SLIER SLILY SLIMS SLIPE SLIPS SLIPT SLISH SLITS SLIVE SLOAN SLOBS SLOES SLOGS SLOID SLOJD SLOMO SLOOM SLOOT SLOPS SLOPY SLORM SLOTS SLOVE SLOWS SLOYD SLUBB SLUBS SLUED SLUES SLUFF SLUGS SLUIT SLUMS SLURB SLURS SLUSE SLUTS SLYER SLYPE SMAAK SMAIK SMALM SMALT SMARM SMAZE SMEEK SMEES SMEIK SMEKE SMERK SMEWS SMIRR SMIRS SMITS SMOGS SMOKO SMOLT SMOOR SMOOT SMORE SMORG SMOUT SMOWT SMUGS SMURS SMUSH SMUTS SNABS SNAFU SNAGS SNAPS SNARF SNARK SNARS SNARY SNASH SNATH SNAWS SNEAD SNEAP SNEBS SNECK SNEDS SNEED SNEES SNELL SNIBS SNICK SNIES SNIFT SNIGS SNIPS SNIPY SNIRT SNITS SNOBS SNODS SNOEK SNOEP SNOGS SNOKE SNOOD SNOOK SNOOL SNOOT SNOTS SNOWK SNOWS SNUBS SNUGS SNUSH SNYES SOAKS SOAPS SOARE SOARS SOAVE SOBAS SOCAS SOCES SOCKO SOCKS SOCLE SODAS SODDY SODIC SODOM SOFAR SOFAS SOFTA SOFTS SOFTY SOGER SOHUR SOILS SOILY SOJAS SOJUS SOKAH SOKEN SOKES SOKOL SOLAH SOLAN SOLAS SOLDE SOLDI SOLDO SOLDS SOLED SOLEI SOLER SOLES SOLON SOLOS SOLUM SOLUS SOMAN SOMAS SONCE SONDE SONES SONGS SONLY SONNE SONNY SONSE SONSY SOOEY SOOKS SOOKY SOOLE SOOLS SOOMS SOOPS SOOTE SOOTS SOPHS SOPHY SOPOR SOPPY SOPRA SORAL SORAS SORBO SORBS SORDA SORDO SORDS SORED SOREE SOREL SORER SORES SOREX SORGO SORNS SORRA SORTA SORTS SORUS SOTHS SOTOL SOUCE SOUCT SOUGH SOUKS SOULS SOUMS SOUPS SOUPY SOURS SOUSE SOUTS SOWAR SOWCE SOWED SOWFF SOWFS SOWLE SOWLS SOWMS SOWND SOWNE SOWPS SOWSE SOWTH SOYAS SOYLE SOYUZ SOZIN SPACY SPADO SPAED SPAER SPAES SPAGS SPAHI SPAIL SPAIN SPAIT SPAKE SPALD SPALE SPALL SPALT SPAMS SPANE SPANG SPANS SPARD SPARS SPART SPATE SPATS SPAUL SPAWL SPAWS SPAYD SPAYS SPAZA SPAZZ SPEAL SPEAN SPEAT SPECS SPECT SPEEL SPEER SPEIL SPEIR SPEKS SPELD SPELK SPEOS SPETS SPEUG SPEWS SPEWY SPIAL SPICA SPICK SPICS SPIDE SPIER SPIES SPIFF SPIFS SPIKS SPILE SPIMS SPINA SPINK SPINS SPIRT SPIRY SPITS SPITZ SPIVS SPLAY SPLOG SPODE SPODS SPOOM SPOOR SPOOT SPORK SPOSH SPOTS SPRAD SPRAG SPRAT SPRED SPREW SPRIT SPROD SPROG SPRUE SPRUG SPUDS SPUED SPUER SPUES SPUGS SPULE SPUME SPUMY SPURS SPUTA SPYAL SPYRE SQUAB SQUAW SQUEG SQUID SQUIT SQUIZ STABS STADE STAGS STAGY STAIG STANE STANG STAPH STAPS STARN STARR STARS STATS STAUN STAWS STAYS STEAN STEAR STEDD STEDE STEDS STEEK STEEM STEEN STEIL STELA STELE STELL STEME STEMS STEND STENO STENS STENT STEPS STEPT STERE STETS STEWS STEWY STEYS STICH STIED STIES STILB STILE STIME STIMS STIMY STIPA STIPE STIRE STIRK STIRP STIRS STIVE STIVY STOAE STOAI STOAS STOAT STOBS STOEP STOGY STOIT STOLN STOMA STOND STONG STONK STONN STOOK STOOR STOPE STOPS STOPT STOSS STOTS STOTT STOUN STOUP STOUR STOWN STOWP STOWS STRAD STRAE STRAG STRAK STREP STREW STRIA STRIG STRIM STROP STROW STROY STRUM STUBS STUDE STUDS STULL STULM STUMM STUMS STUNS STUPA STUPE STURE STURT STYED STYES STYLI STYLO STYME STYMY STYRE STYTE SUBAH SUBAS SUBBY SUBER SUBHA SUCCI SUCKS SUCKY SUCRE SUDDS SUDOR SUDSY SUEDE SUENT SUERS SUETE SUETS SUETY SUGAN SUGHS SUGOS SUHUR SUIDS SUINT SUITS SUJEE SUKHS SUKUK SULCI SULFA SULFO SULKS SULPH SULUS SUMIS SUMMA SUMOS SUMPH SUMPS SUNIS SUNKS SUNNA SUNNS SUNUP SUPES SUPRA SURAH SURAL SURAS SURAT SURDS SURED SURES SURFS SURFY SURGY SURRA SUSED SUSES SUSUS SUTOR SUTRA SUTTA SWABS SWACK SWADS SWAGE SWAGS SWAIL SWAIN SWALE SWALY SWAMY SWANG SWANK SWANS SWAPS SWAPT SWARD SWARE SWARF SWART SWATS SWAYL SWAYS SWEAL SWEDE SWEED SWEEL SWEER SWEES SWEIR SWELT SWERF SWEYS SWIES SWIGS SWILE SWIMS SWINK SWIPE SWIRE SWISS SWITH SWITS SWIVE SWIZZ SWOBS SWOLE SWOLN SWOPS SWOPT SWOTS SWOUN SYBBE SYBIL SYBOE SYBOW SYCEE SYCES SYCON SYENS SYKER SYKES SYLIS SYLPH SYLVA SYMAR SYNCH SYNCS SYNDS SYNED SYNES SYNTH SYPED SYPES SYPHS SYRAH SYREN SYSOP SYTHE SYVER TAALS TAATA TABER TABES TABID TABIS TABLA TABOR TABUN TABUS TACAN TACES TACET TACHE TACHO TACHS TACKS TACOS TACTS TAELS TAFIA TAGGY TAGMA TAHAS TAHRS TAIGA TAIGS TAIKO TAILS TAINS TAIRA TAISH TAITS TAJES TAKAS TAKES TAKHI TAKIN TAKIS TAKKY TALAK TALAQ TALAR TALAS TALCS TALCY TALEA TALER TALES TALKS TALKY TALLS TALMA TALPA TALUK TALUS TAMAL TAMED TAMES TAMIN TAMIS TAMMY TAMPS TANAS TANGA TANGI TANGS TANHS TANKA TANKS TANKY TANNA TANSY TANTI TANTO TANTY TAPAS TAPED TAPEN TAPES TAPET TAPIS TAPPA TAPUS TARAS TARDO TARED TARES TARGA TARGE TARNS TAROC TAROK TAROS TARPS TARRE TARRY TARSI TARTS TARTY TASAR TASED TASER TASES TASKS TASSA TASSE TASSO TATAR TATER TATES TATHS TATIE TATOU TATTS TATUS TAUBE TAULD TAUON TAUPE TAUTS TAVAH TAVAS TAVER TAWAI TAWAS TAWED TAWER TAWIE TAWSE TAWTS TAXED TAXER TAXES TAXIS TAXOL TAXON TAXOR TAXUS TAYRA TAZZA TAZZE TEADE TEADS TEAED TEAKS TEALS TEAMS TEARS TEATS TEAZE TECHS TECHY TECTA TEELS TEEMS TEEND TEENE TEENS TEENY TEERS TEFFS TEGGS TEGUA TEGUS TEHRS TEIID TEILS TEIND TEINS TELAE TELCO TELES TELEX TELIA TELIC TELLS TELLY TELOI TELOS TEMED TEMES TEMPI TEMPS TEMPT TEMSE TENCH TENDS TENDU TENES TENGE TENIA TENNE TENNO TENNY TENON TENTS TENTY TENUE TEPAL TEPAS TEPOY TERAI TERAS TERCE TEREK TERES TERFE TERFS TERGA TERMS TERNE TERNS TERRY TERTS TESLA TESTA TESTE TESTS TETES TETHS TETRA TETRI TEUCH TEUGH TEWED TEWEL TEWIT TEXAS TEXES TEXTS THACK THAGI THAIM THALE THALI THANA THANE THANG THANS THANX THARM THARS THAWS THAWY THEBE THECA THEED THEEK THEES THEGN THEIC THEIN THELF THEMA THENS THEOW THERM THESP THETE THEWS THEWY THIGS THILK THILL THINE THINS THIOL THIRL THOFT THOLE THOLI THORO THORP THOUS THOWL THRAE THRAW THRID THRIP THROE THUDS THUGS THUJA THUNK THURL THUYA THYMI THYMY TIANS TIARS TICAL TICCA TICED TICES TICHY TICKS TICKY TIDDY TIDED TIDES TIERS TIFFS TIFOS TIFTS TIGES TIGON TIKAS TIKES TIKIS TIKKA TILAK TILED TILER TILES TILLS TILLY TILTH TILTS TIMBO TIMED TIMES TIMON TIMPS TINAS TINCT TINDS TINEA TINED TINES TINGE TINGS TINKS TINNY TINTS TINTY TIPIS TIPPY TIRED TIRES TIRLS TIROS TIRRS TITCH TITER TITIS TITRE TITTY TITUP TIYIN TIYNS TIZES TIZZY TOADS TOADY TOAZE TOCKS TOCKY TOCOS TODDE TOEAS TOFFS TOFFY TOFTS TOFUS TOGAE TOGAS TOGED TOGES TOGUE TOHOS TOILE TOILS TOING TOISE TOITS TOKAY TOKED TOKER TOKES TOKOS TOLAN TOLAR TOLAS TOLED TOLES TOLLS TOLLY TOLTS TOLUS TOLYL TOMAN TOMBS TOMES TOMIA TOMMY TOMOS TONDI TONDO TONED TONER TONES TONEY TONGS TONKA TONKS TONNE TONUS TOOLS TOOMS TOONS TOOTS TOPED TOPEE TOPEK TOPER TOPES TOPHE TOPHI TOPHS TOPIS TOPOI TOPOS TOPPY TOQUE TORAH TORAN TORAS TORCS TORES TORIC TORII TOROS TOROT TORRS TORSE TORSI TORSK TORTA TORTE TORTS TOSAS TOSED TOSES TOSHY TOSSY TOTED TOTER TOTES TOTTY TOUKS TOUNS TOURS TOUSE TOUSY TOUTS TOUZE TOUZY TOWED TOWIE TOWNS TOWNY TOWSE TOWSY TOWTS TOWZE TOWZY TOYED TOYER TOYON TOYOS TOZED TOZES TOZIE TRABS TRADS TRAGI TRAIK TRAMS TRANK TRANQ TRANS TRANT TRAPE TRAPS TRAPT TRASS TRATS TRATT TRAVE TRAYF TRAYS TRECK TREED TREEN TREES TREFA TREIF TREKS TREMA TREMS TRESS TREST TRETS TREWS TREYF TREYS TRIAC TRIDE TRIER TRIES TRIFF TRIGO TRIGS TRIKE TRILD TRILL TRIMS TRINE TRINS TRIOL TRIOR TRIOS TRIPS TRIPY TRIST TROAD TROAK TROAT TROCK TRODE TRODS TROGS TROIS TROKE TROMP TRONA TRONC TRONE TRONK TRONS TROOZ TROTH TROTS TROWS TROYS TRUED TRUES TRUGO TRUGS TRULL TRYER TRYKE TRYMA TRYPS TSADE TSADI TSARS TSKED TSUBA TSUBO TUANS TUART TUATH TUBAE TUBAR TUBAS TUBBY TUBED TUBES TUCKS TUFAS TUFFE TUFFS TUFTS TUFTY TUGRA TUILE TUINA TUISM TUKTU TULES TULPA TULSI TUMID TUMMY TUMPS TUMPY TUNAS TUNDS TUNED TUNER TUNES TUNGS TUNNY TUPEK TUPIK TUPLE TUQUE TURDS TURFS TURFY TURKS TURME TURMS TURNS TURNT TURPS TURRS TUSHY TUSKS TUSKY TUTEE TUTTI TUTTY TUTUS TUXES TUYER TWAES TWAIN TWALS TWANK TWATS TWAYS TWEEL TWEEN TWEEP TWEER TWERK TWERP TWIER TWIGS TWILL TWILT TWINK TWINS TWINY TWIRE TWIRP TWITE TWITS TWOER TWYER TYEES TYERS TYIYN TYKES TYLER TYMPS TYNDE TYNED TYNES TYPAL TYPED TYPES TYPEY TYPIC TYPOS TYPPS TYPTO TYRAN TYRED TYRES TYROS TYTHE TZARS UDALS UDONS UGALI UGGED UHLAN UHURU UKASE ULAMA ULANS ULEMA ULMIN ULNAD ULNAE ULNAR ULNAS ULPAN ULVAS ULYIE ULZIE UMAMI UMBEL UMBER UMBLE UMBOS UMBRE UMIAC UMIAK UMIAQ UMMAH UMMAS UMMED UMPED UMPHS UMPIE UMPTY UMRAH UMRAS UNAIS UNAPT UNARM UNARY UNAUS UNBAG UNBAN UNBAR UNBED UNBID UNBOX UNCAP UNCES UNCIA UNCOS UNCOY UNCUS UNDAM UNDEE UNDOS UNDUG UNETH UNFIX UNGAG UNGET UNGOD UNGOT UNGUM UNHAT UNHIP UNICA UNITS UNJAM UNKED UNKET UNKID UNLAW UNLAY UNLED UNLET UNLID UNMAN UNMEW UNMIX UNPAY UNPEG UNPEN UNPIN UNRED UNRID UNRIG UNRIP UNSAW UNSAY UNSEE UNSEW UNSEX UNSOD UNTAX UNTIN UNWET UNWIT UNWON UPBOW UPBYE UPDOS UPDRY UPEND UPJET UPLAY UPLED UPLIT UPPED UPRAN UPRUN UPSEE UPSEY UPTAK UPTER UPTIE URAEI URALI URAOS URARE URARI URASE URATE URBEX URBIA URDEE UREAL UREAS UREDO UREIC URENA URENT URGED URGER URGES URIAL URITE URMAN URNAL URNED URPED URSAE URSID URSON URUBU URVAS USERS USNEA USQUE USURE USURY UTERI UVEAL UVEAS UVULA VACUA VADED VADES VAGAL VAGUS VAILS VAIRE VAIRS VAIRY VAKAS VAKIL VALES VALIS VALSE VAMPS VAMPY VANDA VANED VANES VANGS VANTS VAPED VAPER VAPES VARAN VARAS VARDY VAREC VARES VARIA VARIX VARNA VARUS VARVE VASAL VASES VASTS VASTY VATIC VATUS VAUCH VAUTE VAUTS VAWTE VAXES VEALE VEALS VEALY VEENA VEEPS VEERS VEERY VEGAS VEGES VEGIE VEGOS VEHME VEILS VEILY VEINS VEINY VELAR VELDS VELDT VELES VELLS VELUM VENAE VENAL VENDS VENDU VENEY VENGE VENIN VENTS VENUS VERBS VERRA VERRY VERST VERTS VERTU VESPA VESTA VESTS VETCH VEXED VEXER VEXES VEXIL VEZIR VIALS VIAND VIBES VIBEX VIBEY VICED VICES VICHY VIERS VIEWS VIEWY VIFDA VIFFS VIGAS VIGIA VILDE VILER VILLI VILLS VIMEN VINAL VINAS VINCA VINED VINER VINES VINEW VINIC VINOS VINTS VIOLD VIOLS VIRED VIREO VIRES VIRGA VIRGE VIRID VIRLS VIRTU VISAS VISED VISES VISIE VISNE VISON VISTO VITAE VITAS VITEX VITRO VITTA VIVAS VIVAT VIVDA VIVER VIVES VIZIR VIZOR VLEIS VLIES VLOGS VOARS VOCAB VOCES VODDY VODOU VODUN VOEMA VOGIE VOIDS VOILE VOIPS VOLAE VOLAR VOLED VOLES VOLET VOLKS VOLTA VOLTE VOLTI VOLTS VOLVA VOLVE VOMER VOTED VOTES VOUGE VOULU VOWED VOWER VOXEL VOZHD VRAIC VRILS VROOM VROUS VROUW VROWS VUGGS VUGGY VUGHS VUGHY VULGO VULNS VULVA VUTTY WAACS WACKE WACKO WACKS WADDS WADDY WADED WADER WADES WADGE WADIS WADTS WAFFS WAFTS WAGED WAGES WAGGA WAGYU WAHOO WAIDE WAIFS WAIFT WAILS WAINS WAIRS WAITE WAITS WAKAS WAKED WAKEN WAKER WAKES WAKFS WALDO WALDS WALED WALER WALES WALIE WALIS WALKS WALLA WALLS WALLY WALTY WAMED WAMES WAMUS WANDS WANED WANES WANEY WANGS WANKS WANKY WANLE WANLY WANNA WANTS WANTY WANZE WAQFS WARBS WARBY WARDS WARED WARES WAREZ WARKS WARMS WARNS WARPS WARRE WARST WARTS WASES WASHY WASMS WASPS WASPY WASTS WATAP WATTS WAUFF WAUGH WAUKS WAULK WAULS WAURS WAVED WAVES WAVEY WAWAS WAWES WAWLS WAXED WAXER WAXES WAYED WAZIR WAZOO WEALD WEALS WEAMB WEANS WEARS WEBBY WEBER WECHT WEDEL WEDGY WEEDS WEEKE WEEKS WEELS WEEMS WEENS WEENY WEEPS WEEPY WEEST WEETE WEETS WEFTE WEFTS WEIDS WEILS WEIRS WEISE WEIZE WEKAS WELDS WELKE WELKS WELKT WELLS WELLY WELTS WEMBS WENDS WENGE WENNY WENTS WEROS WERSH WESTS WETAS WETLY WEXED WEXES WHAMO WHAMS WHANG WHAPS WHARE WHATA WHATS WHAUP WHAUR WHEAL WHEAR WHEEN WHEEP WHEFT WHELK WHELM WHENS WHETS WHEWS WHEYS WHIDS WHIFT WHIGS WHILK WHIMS WHINS WHIOS WHIPS WHIPT WHIRR WHIRS WHISH WHISS WHIST WHITS WHITY WHIZZ WHOMP WHOOF WHOOT WHOPS WHORE WHORL WHORT WHOSO WHOWS WHUMP WHUPS WHYDA WICCA WICKS WICKY WIDDY WIDES WIELS WIFED WIFES WIFEY WIFIE WIFTY WIGAN WIGGA WIGGY WIKIS WILCO WILDS WILED WILES WILGA WILIS WILJA WILLS WILTS WIMPS WINDS WINED WINES WINEY WINGE WINGS WINGY WINKS WINNA WINNS WINOS WINZE WIPED WIPER WIPES WIRED WIRER WIRES WIRRA WISED WISES WISHA WISHT WISPS WISTS WITAN WITED WITES WITHE WITHS WITHY WIVED WIVER WIVES WIZEN WIZES WOADS WOALD WOCKS WODGE WOFUL WOJUS WOKER WOKKA WOLDS WOLFS WOLLY WOLVE WOMBS WOMBY WOMYN WONGA WONGI WONKS WONKY WONTS WOODS WOOED WOOFS WOOFY WOOLD WOOLS WOONS WOOPS WOOPY WOOSE WOOSH WOOTZ WORDS WORKS WORMS WORMY WORTS WOWED WOWEE WOXEN WRANG WRAPS WRAPT WRAST WRATE WRAWL WRENS WRICK WRIED WRIER WRIES WRITS WROKE WROOT WROTH WRYER WUDDY WUDUS WULLS WURST WUSES WUSHU WUSSY WUXIA WYLED WYLES WYNDS WYNNS WYTED WYTES XEBEC XENIA XENIC XENON XERIC XEROX XERUS XOANA XRAYS XYLAN XYLEM XYLIC XYLOL XYLYL XYSTI XYSTS YAARS YABAS YABBA YABBY YACCA YACKA YACKS YAFFS YAGER YAGES YAGIS YAHOO YAIRD YAKKA YAKOW YALES YAMEN YAMPY YAMUN YANGS YANKS YAPOK YAPON YAPPS YAPPY YARAK YARCO YARDS YARER YARFA YARKS YARNS YARRS YARTA YARTO YATES YAUDS YAULD YAUPS YAWED YAWEY YAWLS YAWNS YAWNY YAWPS YBORE YCLAD YCLED YCOND YDRAD YDRED YEADS YEAHS YEALM YEANS YEARD YEARS YECCH YECHS YECHY YEDES YEEDS YEESH YEGGS YELKS YELLS YELMS YELPS YELTS YENTA YENTE YERBA YERDS YERKS YESES YESKS YESTS YESTY YETIS YETTS YEUKS YEUKY YEVEN YEVES YEWEN YEXED YEXES YFERE YIKED YIKES YILLS YINCE YIPES YIPPY YIRDS YIRKS YIRRS YIRTH YITES YITIE YLEMS YLIKE YLKES YMOLT YMPES YOBBO YOBBY YOCKS YODEL YODHS YODLE YOGAS YOGEE YOGHS YOGIC YOGIN YOGIS YOICK YOJAN YOKED YOKEL YOKER YOKES YOKUL YOLKS YOLKY YOMIM YOMPS YONIC YONIS YONKS YOOFS YOOPS YORES YORKS YORPS YOUKS YOURN YOURS YOURT YOUSE YOWED YOWES YOWIE YOWLS YOWZA YRAPT YRENT YRIVD YRNEH YSAME YTOST YUANS YUCAS YUCCA YUCCH YUCKO YUCKS YUCKY YUFTS YUGAS YUKED YUKES YUKKY YUKOS YULAN YULES YUMMO YUMMY YUMPS YUPON YUPPY YURTA YURTS YUZUS ZABRA ZACKS ZAIDA ZAIDY ZAIRE ZAKAT ZAMAN ZAMBO ZAMIA ZANJA ZANTE ZANZA ZANZE ZAPPY ZARFS ZARIS ZATIS ZAXES ZAYIN ZAZEN ZEALS ZEBEC ZEBUB ZEBUS ZEDAS ZEINS ZENDO ZERDA ZERKS ZEROS ZESTS ZETAS ZEXES ZEZES ZHOMO ZIBET ZIFFS ZIGAN ZILAS ZILCH ZILLA ZILLS ZIMBI ZIMBS ZINCO ZINCS ZINCY ZINEB ZINES ZINGS ZINGY ZINKE ZINKY ZIPPO ZIPPY ZIRAM ZITIS ZIZEL ZIZIT ZLOTE ZLOTY ZOAEA ZOBOS ZOBUS ZOCCO ZOEAE ZOEAL ZOEAS ZOISM ZOIST ZOMBI ZONAE ZONDA ZONED ZONER ZONES ZONKS ZOOEA ZOOEY ZOOID ZOOKS ZOOMS ZOONS ZOOTY ZOPPA ZOPPO ZORIL ZORIS ZORRO ZOUKS ZOWEE ZOWIE ZULUS ZUPAN ZUPAS ZUPPA ZURFS ZUZIM ZYGAL ZYGON ZYMES ZYMIC";
const wordArray = allWords.split(" ");
const wordList = new Set(wordArray);
const allowedWordList = new Set(allowedWords.split(" "));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1JEHZ","adjPd"], "adjPd", "parcelRequiref661")

//# sourceMappingURL=index.63aff760.js.map
