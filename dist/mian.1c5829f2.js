// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css/style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var style = "\n@media screen and (min-width: 400px){\n    .bingdundun{\n        transform: scale(0.5);\n    }\n}\nbody{\n    background-color: antiquewhite;\n    min-width: 100%;\n    min-height: 100vh;\n}\n.bingdundun{\n    width: 500px;\n    height: 800px;\n    position: absolute;\n    top: 25vh;\n    left: 50%;\n    margin-left: -250px;\n}\n.ear{\n    z-index: 1;\n    width: 70px;\n    height: 70px;\n    background-color: black;\n}\n.ear.left{\n    border-radius: 80% 50%;\n    position: relative;\n    top:130px;\n    left: 46px;\n    transform: rotate(-46deg);\n\n}\n.ear.right{\n    border-radius: 80% 50%;  \n    position: relative;\n    top:65px;\n    right: -314px;\n    transform: rotate(98deg);\n}\n.binbody{\n    position: relative;\n    z-index: 2;\n    width: 430px;\n    height: 500px;\n    border: 8px solid black;\n    border-radius: 43% 44%;\n    background-color: #fff;\n}\n.xian1{\n    border: 5px solid green;\n    width: 360px;\n    height: 280px;\n    position: relative;\n    top: 42px;\n    left: 50%;\n    margin-left: -180px;\n    border-radius: 67% 45%/69%;\n}\n.xian2{\n    border: 5px solid yellow;\n    width: 350px;\n    height: 270px;\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    border-radius: 67% 45%/69%;\n}\n.xian3{\n    border: 5px solid black;\n    width: 340px;\n    height: 260px;\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    border-radius: 67% 47%/69%;\n}\n.xian4{\n    border: 5px solid red;\n    width: 332px;\n    height: 252px;\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    border-radius: 67% 47%/69%;\n}\n.xian5{\n    border: 5px solid blue;\n    width: 323px;\n    height: 242px;\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    border-radius: 67% 47%/69%;\n}\n.eye{\n    width: 100px;\n    height: 100px;\n    background-color: black;\n}\n.eye.left{\n    border-radius: 93% 50%;\n    position: absolute;\n    top: 22px;\n    left: 40px;\n}\n.eye.right{\n    border-radius: 50% 93%;\n    position: absolute;\n    top: 17px;\n    left: 193px;\n}\n.eyeye{\n    border: 5px solid #fff;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n}\n.eye.left > .eyeye{\n    position: absolute;\n    top: 16px;\n    left: 39px;\n\n}\n.eye.right > .eyeye{\n    position: absolute;\n    top: 19px;\n    left: 19px;\n}\n.eye.left > .eyeye::before{\n    content: '';\n    display: block;\n    width: 15px;\n    height:15px;\n    background-color: #fff;\n    border-radius:50% ;\n    position: relative;\n    top: 6px;\n    left: 16px;\n}\n.eye.right > .eyeye::before{\n    content: '';\n    display: block;\n    width: 15px;\n    height:15px;\n    background-color: #fff;\n    border-radius:50% ;\n    position: relative;\n    top: 7px;\n    left: 10px\n}\n.nose{\n    width: 50px;\n    height: 40px;\n    position: relative;\n    top: 80px;\n    left: 50%;\n    margin-left: -20px;\n    border-radius: 30px 30px 46px 46px;\n    background-color: black;\n}\n.mouth{\n    border: 2px solid;\n    width: 76px;\n    height: 20px;\n    border-bottom: 6px solid black;\n    position: relative;\n    top: 97px;\n    left: 137px;\n    border-radius: 0px 0px 20px 23px;\n    background: #fff;\n}\n.hand{\n    background-color: black;\n    width: 160px;\n    height: 80px;\n\n}\n.hand.left{\n position: relative;\n transform: rotate(-50deg);\n bottom: 256px;\n right: 66px;\n}\n.hand.left::before{\n    background-color: black;\n    content: '';\n    display: block;\n    width: 80px;\n    height: 80px;\n    border-radius: 50%;\n    position: absolute;\n    top: -1px;\n    left: -38px;\n}\n.hand.right{\n    border-radius: 72px 58px 66px 33px;\n    position: absolute;\n    bottom: 388px;\n    right: -23px;\n    transform: rotate(-49deg);\n}\n.foot{\n    background-color: black;\n    width: 95px;\n    height: 100px;\n}\n.foot.left{\n    z-index: 2;\n    position: relative;\n    bottom: 127px;\n    left: 85px;\n    border-radius: 23px 45px 30px 29px;\n}\n.foot.right{\n    z-index: 2;\n    position: relative;\n    bottom: 225px;\n    left: 247px;\n    border-radius: 39px 12px 48px 16px;\n}\n.love{\n    position: relative;\n    height: 40px;\n    width: 40px;\n    top: 20px;\n    left: 92px;\n    animation: 3s linear 1s infinite running loveScore;\n}\n.love >div:nth-child(1){\n    position: absolute;\n    background-color: red;\n    width: 20px;\n    height: 20px;\n    top: 8px;\n    left: 0px;\n    transform: rotate(22deg);\n}\n.love >div:nth-child(2){\n    position: absolute;\n    background-color: red;\n    width: 20px;\n    height: 20px;\n    top: 15px;\n    left: 17px;\n    border-radius: 0px 17px 20px 0px;\n    transform: rotate(24deg);\n}\n.love >div:nth-child(3){\n    position: absolute;\n    background-color: red;\n    width: 19px;\n    height: 20px;\n    top: -9px;\n    left: 7px;\n    border-radius: 0px 17px 18px 0px;\n    transform: rotate(-69deg);\n}\n@keyframes loveScore{\n    0%{transform: scale(1);}\n    50%{transform: scale(0.5);}\n    80%{transform: scale(0.8);}\n    100%{transform: scale(1);}\n}\n";

var _default = style = style;

exports.default = _default;
},{}],"js/mian.js":[function(require,module,exports) {
"use strict";

var _style = _interopRequireDefault(require("../css/style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalStyle = document.querySelector('.player');

function WriteDiv(obj, string) {
  this.i = 0, this.TextDiv = obj, this.string = string, this.id = '';
}

WriteDiv.prototype.play = function (speed) {
  var _this = this;

  this.id = setInterval(function () {
    if (_this.i > _style.default.length) {
      window.clearInterval(_this.id);
      return;
    }

    _this.TextDiv.scrollTop = _this.TextDiv.scrollHeight;
    _this.TextDiv.innerText = _style.default.slice(0, _this.i);
    _this.i++;
  }, speed || 500);
};

WriteDiv.prototype.stop = function () {
  window.clearInterval(this.id);
};

WriteDiv.prototype.speed = function (speed) {
  window.clearInterval(this.id);
  this.play(speed);
};

var player = new WriteDiv(globalStyle, _style.default);
player.play();
plystop.addEventListener('click', function () {
  player.stop();
});
plyplay.addEventListener('click', function () {
  player.play();
});
plyspeed2x.addEventListener('click', function () {
  player.speed(100);
});
},{"../css/style":"css/style.js"}],"C:/Users/Admin/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58654" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Admin/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/mian.js"], null)
//# sourceMappingURL=/mian.1c5829f2.js.map