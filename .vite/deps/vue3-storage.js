import {
  __commonJS
} from "./chunk-76J2PTFD.js";

// node_modules/vue3-storage/node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/global.js"(exports, module) {
    var check = function(it) {
      return it && it.Math == Math && it;
    };
    module.exports = // eslint-disable-next-line es-x/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
    function() {
      return this;
    }() || Function("return this")();
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/fails.js"(exports, module) {
    module.exports = function(exec3) {
      try {
        return !!exec3();
      } catch (error) {
        return true;
      }
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/descriptors.js"(exports, module) {
    var fails4 = require_fails();
    module.exports = !fails4(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] != 7;
    });
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/function-bind-native.js"(exports, module) {
    var fails4 = require_fails();
    module.exports = !fails4(function() {
      var test = (function() {
      }).bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/function-call.js"(exports, module) {
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/create-property-descriptor.js"(exports, module) {
    module.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/function-uncurry-this.js"(exports, module) {
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var bind = FunctionPrototype.bind;
    var call = FunctionPrototype.call;
    var uncurryThis3 = NATIVE_BIND && bind.bind(call, call);
    module.exports = NATIVE_BIND ? function(fn) {
      return fn && uncurryThis3(fn);
    } : function(fn) {
      return fn && function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/classof-raw.js"(exports, module) {
    var uncurryThis3 = require_function_uncurry_this();
    var toString3 = uncurryThis3({}.toString);
    var stringSlice2 = uncurryThis3("".slice);
    module.exports = function(it) {
      return stringSlice2(toString3(it), 8, -1);
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/indexed-object.js"(exports, module) {
    var global3 = require_global();
    var uncurryThis3 = require_function_uncurry_this();
    var fails4 = require_fails();
    var classof = require_classof_raw();
    var Object2 = global3.Object;
    var split = uncurryThis3("".split);
    module.exports = fails4(function() {
      return !Object2("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) == "String" ? split(it, "") : Object2(it);
    } : Object2;
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/require-object-coercible.js"(exports, module) {
    var global3 = require_global();
    var TypeError2 = global3.TypeError;
    module.exports = function(it) {
      if (it == void 0)
        throw TypeError2("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/to-indexed-object.js"(exports, module) {
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/is-callable.js"(exports, module) {
    module.exports = function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/is-object.js"(exports, module) {
    var isCallable = require_is_callable();
    module.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/get-built-in.js"(exports, module) {
    var global3 = require_global();
    var isCallable = require_is_callable();
    var aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(global3[namespace]) : global3[namespace] && global3[namespace][method];
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module) {
    var uncurryThis3 = require_function_uncurry_this();
    module.exports = uncurryThis3({}.isPrototypeOf);
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/engine-user-agent.js"(exports, module) {
    var getBuiltIn = require_get_built_in();
    module.exports = getBuiltIn("navigator", "userAgent") || "";
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/engine-v8-version.js"(exports, module) {
    var global3 = require_global();
    var userAgent = require_engine_user_agent();
    var process = global3.process;
    var Deno = global3.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match;
    var version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match)
          version = +match[1];
      }
    }
    module.exports = version;
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/native-symbol.js
var require_native_symbol = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/native-symbol.js"(exports, module) {
    var V8_VERSION = require_engine_v8_version();
    var fails4 = require_fails();
    module.exports = !!Object.getOwnPropertySymbols && !fails4(function() {
      var symbol = Symbol();
      return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module) {
    var NATIVE_SYMBOL = require_native_symbol();
    module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/is-symbol.js"(exports, module) {
    var global3 = require_global();
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var isPrototypeOf3 = require_object_is_prototype_of();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var Object2 = global3.Object;
    module.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf3($Symbol.prototype, Object2(it));
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/try-to-string.js"(exports, module) {
    var global3 = require_global();
    var String2 = global3.String;
    module.exports = function(argument) {
      try {
        return String2(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/a-callable.js"(exports, module) {
    var global3 = require_global();
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var TypeError2 = global3.TypeError;
    module.exports = function(argument) {
      if (isCallable(argument))
        return argument;
      throw TypeError2(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/get-method.js"(exports, module) {
    var aCallable = require_a_callable();
    module.exports = function(V, P) {
      var func = V[P];
      return func == null ? void 0 : aCallable(func);
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module) {
    var global3 = require_global();
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var TypeError2 = global3.TypeError;
    module.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
        return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input)))
        return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
        return val;
      throw TypeError2("Can't convert object to primitive value");
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/is-pure.js"(exports, module) {
    module.exports = false;
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/set-global.js
var require_set_global = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/set-global.js"(exports, module) {
    var global3 = require_global();
    var defineProperty = Object.defineProperty;
    module.exports = function(key, value) {
      try {
        defineProperty(global3, key, { value, configurable: true, writable: true });
      } catch (error) {
        global3[key] = value;
      }
      return value;
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/shared-store.js"(exports, module) {
    var global3 = require_global();
    var setGlobal = require_set_global();
    var SHARED = "__core-js_shared__";
    var store = global3[SHARED] || setGlobal(SHARED, {});
    module.exports = store;
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/shared.js"(exports, module) {
    var IS_PURE = require_is_pure();
    var store = require_shared_store();
    (module.exports = function(key, value) {
      return store[key] || (store[key] = value !== void 0 ? value : {});
    })("versions", []).push({
      version: "3.22.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.22.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/to-object.js"(exports, module) {
    var global3 = require_global();
    var requireObjectCoercible = require_require_object_coercible();
    var Object2 = global3.Object;
    module.exports = function(argument) {
      return Object2(requireObjectCoercible(argument));
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/has-own-property.js"(exports, module) {
    var uncurryThis3 = require_function_uncurry_this();
    var toObject2 = require_to_object();
    var hasOwnProperty = uncurryThis3({}.hasOwnProperty);
    module.exports = Object.hasOwn || function hasOwn2(it, key) {
      return hasOwnProperty(toObject2(it), key);
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/uid.js"(exports, module) {
    var uncurryThis3 = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString3 = uncurryThis3(1 .toString);
    module.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString3(++id + postfix, 36);
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/well-known-symbol.js"(exports, module) {
    var global3 = require_global();
    var shared = require_shared();
    var hasOwn2 = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_native_symbol();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var WellKnownSymbolsStore = shared("wks");
    var Symbol2 = global3.Symbol;
    var symbolFor = Symbol2 && Symbol2["for"];
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module.exports = function(name) {
      if (!hasOwn2(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
        var description = "Symbol." + name;
        if (NATIVE_SYMBOL && hasOwn2(Symbol2, name)) {
          WellKnownSymbolsStore[name] = Symbol2[name];
        } else if (USE_SYMBOL_AS_UID && symbolFor) {
          WellKnownSymbolsStore[name] = symbolFor(description);
        } else {
          WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
        }
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/to-primitive.js"(exports, module) {
    var global3 = require_global();
    var call = require_function_call();
    var isObject = require_is_object();
    var isSymbol = require_is_symbol();
    var getMethod = require_get_method();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var wellKnownSymbol2 = require_well_known_symbol();
    var TypeError2 = global3.TypeError;
    var TO_PRIMITIVE = wellKnownSymbol2("toPrimitive");
    module.exports = function(input, pref) {
      if (!isObject(input) || isSymbol(input))
        return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0)
          pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result))
          return result;
        throw TypeError2("Can't convert object to primitive value");
      }
      if (pref === void 0)
        pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/to-property-key.js"(exports, module) {
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/document-create-element.js"(exports, module) {
    var global3 = require_global();
    var isObject = require_is_object();
    var document2 = global3.document;
    var EXISTS = isObject(document2) && isObject(document2.createElement);
    module.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/ie8-dom-define.js"(exports, module) {
    var DESCRIPTORS2 = require_descriptors();
    var fails4 = require_fails();
    var createElement = require_document_create_element();
    module.exports = !DESCRIPTORS2 && !fails4(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a != 7;
    });
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
    var DESCRIPTORS2 = require_descriptors();
    var call = require_function_call();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var createPropertyDescriptor = require_create_property_descriptor();
    var toIndexedObject = require_to_indexed_object();
    var toPropertyKey = require_to_property_key();
    var hasOwn2 = require_has_own_property();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS2 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (IE8_DOM_DEFINE)
        try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
        }
      if (hasOwn2(O, P))
        return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module) {
    var DESCRIPTORS2 = require_descriptors();
    var fails4 = require_fails();
    module.exports = DESCRIPTORS2 && fails4(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype != 42;
    });
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/an-object.js"(exports, module) {
    var global3 = require_global();
    var isObject = require_is_object();
    var String2 = global3.String;
    var TypeError2 = global3.TypeError;
    module.exports = function(argument) {
      if (isObject(argument))
        return argument;
      throw TypeError2(String2(argument) + " is not an object");
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/object-define-property.js"(exports) {
    var global3 = require_global();
    var DESCRIPTORS2 = require_descriptors();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var anObject2 = require_an_object();
    var toPropertyKey = require_to_property_key();
    var TypeError2 = global3.TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports.f = DESCRIPTORS2 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
      anObject2(O);
      P = toPropertyKey(P);
      anObject2(Attributes);
      if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
      anObject2(O);
      P = toPropertyKey(P);
      anObject2(Attributes);
      if (IE8_DOM_DEFINE)
        try {
          return $defineProperty(O, P, Attributes);
        } catch (error) {
        }
      if ("get" in Attributes || "set" in Attributes)
        throw TypeError2("Accessors not supported");
      if ("value" in Attributes)
        O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module) {
    var DESCRIPTORS2 = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module.exports = DESCRIPTORS2 ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/inspect-source.js"(exports, module) {
    var uncurryThis3 = require_function_uncurry_this();
    var isCallable = require_is_callable();
    var store = require_shared_store();
    var functionToString = uncurryThis3(Function.toString);
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function(it) {
        return functionToString(it);
      };
    }
    module.exports = store.inspectSource;
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/native-weak-map.js
var require_native_weak_map = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/native-weak-map.js"(exports, module) {
    var global3 = require_global();
    var isCallable = require_is_callable();
    var inspectSource = require_inspect_source();
    var WeakMap = global3.WeakMap;
    module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/shared-key.js"(exports, module) {
    var shared = require_shared();
    var uid = require_uid();
    var keys2 = shared("keys");
    module.exports = function(key) {
      return keys2[key] || (keys2[key] = uid(key));
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/hidden-keys.js"(exports, module) {
    module.exports = {};
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/internal-state.js"(exports, module) {
    var NATIVE_WEAK_MAP = require_native_weak_map();
    var global3 = require_global();
    var uncurryThis3 = require_function_uncurry_this();
    var isObject = require_is_object();
    var createNonEnumerableProperty2 = require_create_non_enumerable_property();
    var hasOwn2 = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = global3.TypeError;
    var WeakMap = global3.WeakMap;
    var set;
    var get;
    var has;
    var enforce = function(it) {
      return has(it) ? get(it) : set(it, {});
    };
    var getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw TypeError2("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    };
    if (NATIVE_WEAK_MAP || shared.state) {
      store = shared.state || (shared.state = new WeakMap());
      wmget = uncurryThis3(store.get);
      wmhas = uncurryThis3(store.has);
      wmset = uncurryThis3(store.set);
      set = function(it, metadata) {
        if (wmhas(store, it))
          throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        wmset(store, it, metadata);
        return metadata;
      };
      get = function(it) {
        return wmget(store, it) || {};
      };
      has = function(it) {
        return wmhas(store, it);
      };
    } else {
      STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set = function(it, metadata) {
        if (hasOwn2(it, STATE))
          throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty2(it, STATE, metadata);
        return metadata;
      };
      get = function(it) {
        return hasOwn2(it, STATE) ? it[STATE] : {};
      };
      has = function(it) {
        return hasOwn2(it, STATE);
      };
    }
    var store;
    var wmget;
    var wmhas;
    var wmset;
    var STATE;
    module.exports = {
      set,
      get,
      has,
      enforce,
      getterFor
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/function-name.js"(exports, module) {
    var DESCRIPTORS2 = require_descriptors();
    var hasOwn2 = require_has_own_property();
    var FunctionPrototype = Function.prototype;
    var getDescriptor = DESCRIPTORS2 && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn2(FunctionPrototype, "name");
    var PROPER = EXISTS && (function something() {
    }).name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS2 || DESCRIPTORS2 && getDescriptor(FunctionPrototype, "name").configurable);
    module.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/redefine.js
var require_redefine = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/redefine.js"(exports, module) {
    var global3 = require_global();
    var isCallable = require_is_callable();
    var hasOwn2 = require_has_own_property();
    var createNonEnumerableProperty2 = require_create_non_enumerable_property();
    var setGlobal = require_set_global();
    var inspectSource = require_inspect_source();
    var InternalStateModule = require_internal_state();
    var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
    var getInternalState = InternalStateModule.get;
    var enforceInternalState2 = InternalStateModule.enforce;
    var TEMPLATE = String(String).split("String");
    (module.exports = function(O, key, value, options) {
      var unsafe = options ? !!options.unsafe : false;
      var simple = options ? !!options.enumerable : false;
      var noTargetGet = options ? !!options.noTargetGet : false;
      var name = options && options.name !== void 0 ? options.name : key;
      var state;
      if (isCallable(value)) {
        if (String(name).slice(0, 7) === "Symbol(") {
          name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
        }
        if (!hasOwn2(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
          createNonEnumerableProperty2(value, "name", name);
        }
        state = enforceInternalState2(value);
        if (!state.source) {
          state.source = TEMPLATE.join(typeof name == "string" ? name : "");
        }
      }
      if (O === global3) {
        if (simple)
          O[key] = value;
        else
          setGlobal(key, value);
        return;
      } else if (!unsafe) {
        delete O[key];
      } else if (!noTargetGet && O[key]) {
        simple = true;
      }
      if (simple)
        O[key] = value;
      else
        createNonEnumerableProperty2(O, key, value);
    })(Function.prototype, "toString", function toString3() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    });
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module) {
    var ceil = Math.ceil;
    var floor = Math.floor;
    module.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/to-absolute-index.js"(exports, module) {
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var max = Math.max;
    var min = Math.min;
    module.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/to-length.js"(exports, module) {
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module.exports = function(argument) {
      return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/length-of-array-like.js"(exports, module) {
    var toLength = require_to_length();
    module.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/array-includes.js"(exports, module) {
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el != el)
          while (length > index) {
            value = O[index++];
            if (value != value)
              return true;
          }
        else
          for (; length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el)
              return IS_INCLUDES || index || 0;
          }
        return !IS_INCLUDES && -1;
      };
    };
    module.exports = {
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/object-keys-internal.js"(exports, module) {
    var uncurryThis3 = require_function_uncurry_this();
    var hasOwn2 = require_has_own_property();
    var toIndexedObject = require_to_indexed_object();
    var indexOf = require_array_includes().indexOf;
    var hiddenKeys = require_hidden_keys();
    var push = uncurryThis3([].push);
    module.exports = function(object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O)
        !hasOwn2(hiddenKeys, key) && hasOwn2(O, key) && push(result, key);
      while (names.length > i)
        if (hasOwn2(O, key = names[i++])) {
          ~indexOf(result, key) || push(result, key);
        }
      return result;
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/enum-bug-keys.js"(exports, module) {
    module.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf"
    ];
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames2(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/own-keys.js"(exports, module) {
    var getBuiltIn = require_get_built_in();
    var uncurryThis3 = require_function_uncurry_this();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var anObject2 = require_an_object();
    var concat = uncurryThis3([].concat);
    module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
      var keys2 = getOwnPropertyNamesModule.f(anObject2(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys2, getOwnPropertySymbols(it)) : keys2;
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/copy-constructor-properties.js"(exports, module) {
    var hasOwn2 = require_has_own_property();
    var ownKeys = require_own_keys();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var definePropertyModule = require_object_define_property();
    module.exports = function(target, source, exceptions) {
      var keys2 = ownKeys(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      for (var i = 0; i < keys2.length; i++) {
        var key = keys2[i];
        if (!hasOwn2(target, key) && !(exceptions && hasOwn2(exceptions, key))) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      }
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/is-forced.js"(exports, module) {
    var fails4 = require_fails();
    var isCallable = require_is_callable();
    var replacement = /#|\.prototype\./;
    var isForced2 = function(feature, detection) {
      var value = data[normalize(feature)];
      return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails4(detection) : !!detection;
    };
    var normalize = isForced2.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    };
    var data = isForced2.data = {};
    var NATIVE = isForced2.NATIVE = "N";
    var POLYFILL = isForced2.POLYFILL = "P";
    module.exports = isForced2;
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/export.js"(exports, module) {
    var global3 = require_global();
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var createNonEnumerableProperty2 = require_create_non_enumerable_property();
    var redefine4 = require_redefine();
    var setGlobal = require_set_global();
    var copyConstructorProperties = require_copy_constructor_properties();
    var isForced2 = require_is_forced();
    module.exports = function(options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target = global3;
      } else if (STATIC) {
        target = global3[TARGET] || setGlobal(TARGET, {});
      } else {
        target = (global3[TARGET] || {}).prototype;
      }
      if (target)
        for (key in source) {
          sourceProperty = source[key];
          if (options.noTargetGet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
          } else
            targetProperty = target[key];
          FORCED = isForced2(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
          if (!FORCED && targetProperty !== void 0) {
            if (typeof sourceProperty == typeof targetProperty)
              continue;
            copyConstructorProperties(sourceProperty, targetProperty);
          }
          if (options.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty2(sourceProperty, "sham", true);
          }
          redefine4(target, key, sourceProperty, options);
        }
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/object-keys.js
var require_object_keys = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/object-keys.js"(exports, module) {
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module.exports = Object.keys || function keys2(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/to-string-tag-support.js"(exports, module) {
    var wellKnownSymbol2 = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol2("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module.exports = String(test) === "[object z]";
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/classof.js"(exports, module) {
    var global3 = require_global();
    var TO_STRING_TAG_SUPPORT2 = require_to_string_tag_support();
    var isCallable = require_is_callable();
    var classofRaw = require_classof_raw();
    var wellKnownSymbol2 = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol2("toStringTag");
    var Object2 = global3.Object;
    var CORRECT_ARGUMENTS = classofRaw(function() {
      return arguments;
    }()) == "Arguments";
    var tryGet = function(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    module.exports = TO_STRING_TAG_SUPPORT2 ? classofRaw : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = Object2(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/object-to-string.js
var require_object_to_string = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/object-to-string.js"(exports, module) {
    "use strict";
    var TO_STRING_TAG_SUPPORT2 = require_to_string_tag_support();
    var classof = require_classof();
    module.exports = TO_STRING_TAG_SUPPORT2 ? {}.toString : function toString3() {
      return "[object " + classof(this) + "]";
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/a-possible-prototype.js
var require_a_possible_prototype = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/a-possible-prototype.js"(exports, module) {
    var global3 = require_global();
    var isCallable = require_is_callable();
    var String2 = global3.String;
    var TypeError2 = global3.TypeError;
    module.exports = function(argument) {
      if (typeof argument == "object" || isCallable(argument))
        return argument;
      throw TypeError2("Can't set " + String2(argument) + " as a prototype");
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/object-set-prototype-of.js
var require_object_set_prototype_of = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/object-set-prototype-of.js"(exports, module) {
    var uncurryThis3 = require_function_uncurry_this();
    var anObject2 = require_an_object();
    var aPossiblePrototype = require_a_possible_prototype();
    module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
      var CORRECT_SETTER = false;
      var test = {};
      var setter;
      try {
        setter = uncurryThis3(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set);
        setter(test, []);
        CORRECT_SETTER = test instanceof Array;
      } catch (error) {
      }
      return function setPrototypeOf(O, proto) {
        anObject2(O);
        aPossiblePrototype(proto);
        if (CORRECT_SETTER)
          setter(O, proto);
        else
          O.__proto__ = proto;
        return O;
      };
    }() : void 0);
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/inherit-if-required.js
var require_inherit_if_required = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/inherit-if-required.js"(exports, module) {
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var setPrototypeOf = require_object_set_prototype_of();
    module.exports = function($this, dummy, Wrapper) {
      var NewTarget, NewTargetPrototype;
      if (
        // it can work only with native `setPrototypeOf`
        setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
        isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype
      )
        setPrototypeOf($this, NewTargetPrototype);
      return $this;
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/is-regexp.js
var require_is_regexp = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/is-regexp.js"(exports, module) {
    var isObject = require_is_object();
    var classof = require_classof_raw();
    var wellKnownSymbol2 = require_well_known_symbol();
    var MATCH2 = wellKnownSymbol2("match");
    module.exports = function(it) {
      var isRegExp2;
      return isObject(it) && ((isRegExp2 = it[MATCH2]) !== void 0 ? !!isRegExp2 : classof(it) == "RegExp");
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/to-string.js
var require_to_string = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/to-string.js"(exports, module) {
    var global3 = require_global();
    var classof = require_classof();
    var String2 = global3.String;
    module.exports = function(argument) {
      if (classof(argument) === "Symbol")
        throw TypeError("Cannot convert a Symbol value to a string");
      return String2(argument);
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/regexp-flags.js
var require_regexp_flags = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/regexp-flags.js"(exports, module) {
    "use strict";
    var anObject2 = require_an_object();
    module.exports = function() {
      var that = anObject2(this);
      var result = "";
      if (that.global)
        result += "g";
      if (that.ignoreCase)
        result += "i";
      if (that.multiline)
        result += "m";
      if (that.dotAll)
        result += "s";
      if (that.unicode)
        result += "u";
      if (that.sticky)
        result += "y";
      return result;
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/regexp-sticky-helpers.js
var require_regexp_sticky_helpers = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/regexp-sticky-helpers.js"(exports, module) {
    var fails4 = require_fails();
    var global3 = require_global();
    var $RegExp = global3.RegExp;
    var UNSUPPORTED_Y2 = fails4(function() {
      var re = $RegExp("a", "y");
      re.lastIndex = 2;
      return re.exec("abcd") != null;
    });
    var MISSED_STICKY2 = UNSUPPORTED_Y2 || fails4(function() {
      return !$RegExp("a", "y").sticky;
    });
    var BROKEN_CARET = UNSUPPORTED_Y2 || fails4(function() {
      var re = $RegExp("^r", "gy");
      re.lastIndex = 2;
      return re.exec("str") != null;
    });
    module.exports = {
      BROKEN_CARET,
      MISSED_STICKY: MISSED_STICKY2,
      UNSUPPORTED_Y: UNSUPPORTED_Y2
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/proxy-accessor.js
var require_proxy_accessor = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/proxy-accessor.js"(exports, module) {
    var defineProperty = require_object_define_property().f;
    module.exports = function(Target, Source, key) {
      key in Target || defineProperty(Target, key, {
        configurable: true,
        get: function() {
          return Source[key];
        },
        set: function(it) {
          Source[key] = it;
        }
      });
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/set-species.js
var require_set_species = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/set-species.js"(exports, module) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var definePropertyModule = require_object_define_property();
    var wellKnownSymbol2 = require_well_known_symbol();
    var DESCRIPTORS2 = require_descriptors();
    var SPECIES = wellKnownSymbol2("species");
    module.exports = function(CONSTRUCTOR_NAME) {
      var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
      var defineProperty = definePropertyModule.f;
      if (DESCRIPTORS2 && Constructor && !Constructor[SPECIES]) {
        defineProperty(Constructor, SPECIES, {
          configurable: true,
          get: function() {
            return this;
          }
        });
      }
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/regexp-unsupported-dot-all.js
var require_regexp_unsupported_dot_all = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/regexp-unsupported-dot-all.js"(exports, module) {
    var fails4 = require_fails();
    var global3 = require_global();
    var $RegExp = global3.RegExp;
    module.exports = fails4(function() {
      var re = $RegExp(".", "s");
      return !(re.dotAll && re.exec("\n") && re.flags === "s");
    });
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/regexp-unsupported-ncg.js
var require_regexp_unsupported_ncg = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/regexp-unsupported-ncg.js"(exports, module) {
    var fails4 = require_fails();
    var global3 = require_global();
    var $RegExp = global3.RegExp;
    module.exports = fails4(function() {
      var re = $RegExp("(?<a>b)", "g");
      return re.exec("b").groups.a !== "b" || "b".replace(re, "$<a>c") !== "bc";
    });
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/object-define-properties.js"(exports) {
    var DESCRIPTORS2 = require_descriptors();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var definePropertyModule = require_object_define_property();
    var anObject2 = require_an_object();
    var toIndexedObject = require_to_indexed_object();
    var objectKeys = require_object_keys();
    exports.f = DESCRIPTORS2 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject2(O);
      var props = toIndexedObject(Properties);
      var keys2 = objectKeys(Properties);
      var length = keys2.length;
      var index = 0;
      var key;
      while (length > index)
        definePropertyModule.f(O, key = keys2[index++], props[key]);
      return O;
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/html.js"(exports, module) {
    var getBuiltIn = require_get_built_in();
    module.exports = getBuiltIn("document", "documentElement");
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/object-create.js"(exports, module) {
    var anObject2 = require_an_object();
    var definePropertiesModule = require_object_define_properties();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = require_hidden_keys();
    var html = require_html();
    var documentCreateElement = require_document_create_element();
    var sharedKey = require_shared_key();
    var GT = ">";
    var LT = "<";
    var PROTOTYPE = "prototype";
    var SCRIPT = "script";
    var IE_PROTO = sharedKey("IE_PROTO");
    var EmptyConstructor = function() {
    };
    var scriptTag = function(content) {
      return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
    };
    var NullProtoObjectViaActiveX = function(activeXDocument2) {
      activeXDocument2.write(scriptTag(""));
      activeXDocument2.close();
      var temp = activeXDocument2.parentWindow.Object;
      activeXDocument2 = null;
      return temp;
    };
    var NullProtoObjectViaIFrame = function() {
      var iframe = documentCreateElement("iframe");
      var JS = "java" + SCRIPT + ":";
      var iframeDocument;
      iframe.style.display = "none";
      html.appendChild(iframe);
      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag("document.F=Object"));
      iframeDocument.close();
      return iframeDocument.F;
    };
    var activeXDocument;
    var NullProtoObject = function() {
      try {
        activeXDocument = new ActiveXObject("htmlfile");
      } catch (error) {
      }
      NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      var length = enumBugKeys.length;
      while (length--)
        delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return NullProtoObject();
    };
    hiddenKeys[IE_PROTO] = true;
    module.exports = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject2(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        result[IE_PROTO] = O;
      } else
        result = NullProtoObject();
      return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
  }
});

// node_modules/vue3-storage/node_modules/core-js/internals/regexp-exec.js
var require_regexp_exec = __commonJS({
  "node_modules/vue3-storage/node_modules/core-js/internals/regexp-exec.js"(exports, module) {
    "use strict";
    var call = require_function_call();
    var uncurryThis3 = require_function_uncurry_this();
    var toString3 = require_to_string();
    var regexpFlags = require_regexp_flags();
    var stickyHelpers2 = require_regexp_sticky_helpers();
    var shared = require_shared();
    var create = require_object_create();
    var getInternalState = require_internal_state().get;
    var UNSUPPORTED_DOT_ALL2 = require_regexp_unsupported_dot_all();
    var UNSUPPORTED_NCG2 = require_regexp_unsupported_ncg();
    var nativeReplace = shared("native-string-replace", String.prototype.replace);
    var nativeExec = RegExp.prototype.exec;
    var patchedExec = nativeExec;
    var charAt2 = uncurryThis3("".charAt);
    var indexOf = uncurryThis3("".indexOf);
    var replace2 = uncurryThis3("".replace);
    var stringSlice2 = uncurryThis3("".slice);
    var UPDATES_LAST_INDEX_WRONG = function() {
      var re12 = /a/;
      var re22 = /b*/g;
      call(nativeExec, re12, "a");
      call(nativeExec, re22, "a");
      return re12.lastIndex !== 0 || re22.lastIndex !== 0;
    }();
    var UNSUPPORTED_Y2 = stickyHelpers2.BROKEN_CARET;
    var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
    var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y2 || UNSUPPORTED_DOT_ALL2 || UNSUPPORTED_NCG2;
    if (PATCH) {
      patchedExec = function exec3(string) {
        var re = this;
        var state = getInternalState(re);
        var str = toString3(string);
        var raw = state.raw;
        var result, reCopy, lastIndex, match, i, object, group;
        if (raw) {
          raw.lastIndex = re.lastIndex;
          result = call(patchedExec, raw, str);
          re.lastIndex = raw.lastIndex;
          return result;
        }
        var groups = state.groups;
        var sticky = UNSUPPORTED_Y2 && re.sticky;
        var flags = call(regexpFlags, re);
        var source = re.source;
        var charsAdded = 0;
        var strCopy = str;
        if (sticky) {
          flags = replace2(flags, "y", "");
          if (indexOf(flags, "g") === -1) {
            flags += "g";
          }
          strCopy = stringSlice2(str, re.lastIndex);
          if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt2(str, re.lastIndex - 1) !== "\n")) {
            source = "(?: " + source + ")";
            strCopy = " " + strCopy;
            charsAdded++;
          }
          reCopy = new RegExp("^(?:" + source + ")", flags);
        }
        if (NPCG_INCLUDED) {
          reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
        }
        if (UPDATES_LAST_INDEX_WRONG)
          lastIndex = re.lastIndex;
        match = call(nativeExec, sticky ? reCopy : re, strCopy);
        if (sticky) {
          if (match) {
            match.input = stringSlice2(match.input, charsAdded);
            match[0] = stringSlice2(match[0], charsAdded);
            match.index = re.lastIndex;
            re.lastIndex += match[0].length;
          } else
            re.lastIndex = 0;
        } else if (UPDATES_LAST_INDEX_WRONG && match) {
          re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
        }
        if (NPCG_INCLUDED && match && match.length > 1) {
          call(nativeReplace, match[0], reCopy, function() {
            for (i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === void 0)
                match[i] = void 0;
            }
          });
        }
        if (match && groups) {
          match.groups = object = create(null);
          for (i = 0; i < groups.length; i++) {
            group = groups[i];
            object[group[0]] = match[group[1]];
          }
        }
        return match;
      };
    }
    module.exports = patchedExec;
  }
});

// node_modules/vue3-storage/node_modules/core-js/modules/es.object.keys.js
var $ = require_export();
var toObject = require_to_object();
var nativeKeys = require_object_keys();
var fails = require_fails();
var FAILS_ON_PRIMITIVES = fails(function() {
  nativeKeys(1);
});
$({ target: "Object", stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});

// node_modules/vue3-storage/node_modules/core-js/modules/es.object.to-string.js
var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
var redefine = require_redefine();
var toString = require_object_to_string();
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, "toString", toString, { unsafe: true });
}

// node_modules/vue3-storage/node_modules/core-js/modules/es.regexp.constructor.js
var DESCRIPTORS = require_descriptors();
var global2 = require_global();
var uncurryThis = require_function_uncurry_this();
var isForced = require_is_forced();
var inheritIfRequired = require_inherit_if_required();
var createNonEnumerableProperty = require_create_non_enumerable_property();
var getOwnPropertyNames = require_object_get_own_property_names().f;
var isPrototypeOf = require_object_is_prototype_of();
var isRegExp = require_is_regexp();
var toString2 = require_to_string();
var regExpFlags = require_regexp_flags();
var stickyHelpers = require_regexp_sticky_helpers();
var proxyAccessor = require_proxy_accessor();
var redefine2 = require_redefine();
var fails2 = require_fails();
var hasOwn = require_has_own_property();
var enforceInternalState = require_internal_state().enforce;
var setSpecies = require_set_species();
var wellKnownSymbol = require_well_known_symbol();
var UNSUPPORTED_DOT_ALL = require_regexp_unsupported_dot_all();
var UNSUPPORTED_NCG = require_regexp_unsupported_ncg();
var MATCH = wellKnownSymbol("match");
var NativeRegExp = global2.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var SyntaxError = global2.SyntaxError;
var getFlags = uncurryThis(regExpFlags);
var exec = uncurryThis(RegExpPrototype.exec);
var charAt = uncurryThis("".charAt);
var replace = uncurryThis("".replace);
var stringIndexOf = uncurryThis("".indexOf);
var stringSlice = uncurryThis("".slice);
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;
var CORRECT_NEW = new NativeRegExp(re1) !== re1;
var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var BASE_FORCED = DESCRIPTORS && (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails2(function() {
  re2[MATCH] = false;
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, "i") != "/a/i";
}));
var handleDotAll = function(string) {
  var length = string.length;
  var index = 0;
  var result = "";
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === "\\") {
      result += chr + charAt(string, ++index);
      continue;
    }
    if (!brackets && chr === ".") {
      result += "[\\s\\S]";
    } else {
      if (chr === "[") {
        brackets = true;
      } else if (chr === "]") {
        brackets = false;
      }
      result += chr;
    }
  }
  return result;
};
var handleNCG = function(string) {
  var length = string.length;
  var index = 0;
  var result = "";
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = "";
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === "\\") {
      chr = chr + charAt(string, ++index);
    } else if (chr === "]") {
      brackets = false;
    } else if (!brackets)
      switch (true) {
        case chr === "[":
          brackets = true;
          break;
        case chr === "(":
          if (exec(IS_NCG, stringSlice(string, index + 1))) {
            index += 2;
            ncg = true;
          }
          result += chr;
          groupid++;
          continue;
        case (chr === ">" && ncg):
          if (groupname === "" || hasOwn(names, groupname)) {
            throw new SyntaxError("Invalid capture group name");
          }
          names[groupname] = true;
          named[named.length] = [groupname, groupid];
          ncg = false;
          groupname = "";
          continue;
      }
    if (ncg)
      groupname += chr;
    else
      result += chr;
  }
  return [result, named];
};
if (isForced("RegExp", BASE_FORCED)) {
  RegExpWrapper = function RegExp2(pattern, flags) {
    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === void 0;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;
    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }
    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined)
        flags = "flags" in rawPattern ? rawPattern.flags : getFlags(rawPattern);
    }
    pattern = pattern === void 0 ? "" : toString2(pattern);
    flags = flags === void 0 ? "" : toString2(flags);
    rawPattern = pattern;
    if (UNSUPPORTED_DOT_ALL && "dotAll" in re1) {
      dotAll = !!flags && stringIndexOf(flags, "s") > -1;
      if (dotAll)
        flags = replace(flags, /s/g, "");
    }
    rawFlags = flags;
    if (MISSED_STICKY && "sticky" in re1) {
      sticky = !!flags && stringIndexOf(flags, "y") > -1;
      if (sticky && UNSUPPORTED_Y)
        flags = replace(flags, /y/g, "");
    }
    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }
    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);
    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky)
        state.sticky = true;
      if (groups.length)
        state.groups = groups;
    }
    if (pattern !== rawPattern)
      try {
        createNonEnumerableProperty(result, "source", rawPattern === "" ? "(?:)" : rawPattern);
      } catch (error) {
      }
    return result;
  };
  for (keys2 = getOwnPropertyNames(NativeRegExp), index = 0; keys2.length > index; ) {
    proxyAccessor(RegExpWrapper, NativeRegExp, keys2[index++]);
  }
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine2(global2, "RegExp", RegExpWrapper);
}
var RegExpWrapper;
var keys2;
var index;
setSpecies("RegExp");

// node_modules/vue3-storage/node_modules/core-js/modules/es.regexp.exec.js
var $2 = require_export();
var exec2 = require_regexp_exec();
$2({ target: "RegExp", proto: true, forced: /./.exec !== exec2 }, {
  exec: exec2
});

// node_modules/vue3-storage/node_modules/core-js/modules/es.regexp.to-string.js
var uncurryThis2 = require_function_uncurry_this();
var PROPER_FUNCTION_NAME = require_function_name().PROPER;
var redefine3 = require_redefine();
var anObject = require_an_object();
var isPrototypeOf2 = require_object_is_prototype_of();
var $toString = require_to_string();
var fails3 = require_fails();
var regExpFlags2 = require_regexp_flags();
var TO_STRING = "toString";
var RegExpPrototype2 = RegExp.prototype;
var n$ToString = RegExpPrototype2[TO_STRING];
var getFlags2 = uncurryThis2(regExpFlags2);
var NOT_GENERIC = fails3(function() {
  return n$ToString.call({ source: "a", flags: "b" }) != "/a/b";
});
var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING;
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine3(RegExp.prototype, TO_STRING, function toString3() {
    var R = anObject(this);
    var p = $toString(R.source);
    var rf = R.flags;
    var f = $toString(rf === void 0 && isPrototypeOf2(RegExpPrototype2, R) && !("flags" in RegExpPrototype2) ? getFlags2(R) : rf);
    return "/" + p + "/" + f;
  }, { unsafe: true });
}

// node_modules/vue3-storage/vue3-storage.esm.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
var StorageClass = function() {
  function StorageClass2() {
    var storage = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.localStorage;
    _classCallCheck(this, StorageClass2);
    this.storage = window.localStorage;
    this.namespace = "pro_";
    this.storage = storage;
  }
  _createClass(StorageClass2, [{
    key: "config",
    value: function config(namespace) {
      if (namespace === false) {
        this.namespace = "";
        return;
      }
      if (namespace) {
        this.namespace = namespace;
      }
    }
  }, {
    key: "clearStorage",
    value: function clearStorage(option) {
      var res = {
        errMsg: "clearStorage:ok"
      };
      if (option) {
        var success = option.success, fail = option.fail, complete = option.complete;
        try {
          this.clearStorageSync();
          success && success(res);
          complete && complete(res);
        } catch (_unused) {
          var _res = {
            errMsg: "clearStorage:fail"
          };
          fail && fail(_res);
          complete && complete(_res);
          return Promise.reject(_res);
        }
      }
      return Promise.resolve(res);
    }
  }, {
    key: "clearStorageSync",
    value: function clearStorageSync() {
      var removedKeys = [];
      for (var i = 0; i < this.storage.length; i++) {
        var key = this.storage.key(i);
        if (!key) {
          continue;
        }
        var regexp = new RegExp("^".concat(this.namespace, ".+"), "i");
        if (!regexp.test(key)) {
          continue;
        }
        removedKeys.push(key);
      }
      for (var _key in removedKeys) {
        this.storage.removeItem(removedKeys[_key]);
      }
    }
  }, {
    key: "getStorage",
    value: function getStorage(option) {
      var key = option.key, success = option.success, fail = option.fail, complete = option.complete;
      var res = {
        errMsg: "getStorage:ok"
      };
      var successRes = {
        errMsg: "getStorage:ok",
        data: ""
      };
      var _this$getItem = this.getItem(key), result = _this$getItem.result, data = _this$getItem.data;
      if (result) {
        var val = data;
        successRes.data = val.value;
      } else {
        res.errMsg = "getStorage:fail data not found";
        fail && fail(res);
        complete && complete(res);
        return Promise.reject(res);
      }
      success && success(successRes);
      complete && complete(successRes);
      return Promise.resolve(successRes);
    }
  }, {
    key: "getStorageInfo",
    value: function getStorageInfo(option) {
      var res = {
        errMsg: "getStorageInfo:ok"
      };
      if (option) {
        var success = option.success, complete = option.complete, fail = option.fail;
        try {
          var info = this.getStorageInfoSync();
          success && success(info);
          complete && complete(res);
        } catch (_unused2) {
          fail && fail(res);
          complete && complete(res);
        }
      }
      return Promise.resolve(res);
    }
  }, {
    key: "getStorageInfoSync",
    value: function getStorageInfoSync() {
      return {
        keys: Object.keys(this.storage),
        limitSize: 0,
        currentSize: 0,
        keysLength: this.storage.length
      };
    }
  }, {
    key: "hasKey",
    value: function hasKey(key) {
      var res = this.getItem(key);
      return res.result;
    }
  }, {
    key: "isExpire",
    value: function isExpire(key) {
      var res = this.getItem(key);
      if (res.result) {
        var data = res.data;
        if (data.expire === null) {
          return false;
        }
        return data.expire < (/* @__PURE__ */ new Date()).getTime();
      }
      return false;
    }
  }, {
    key: "key",
    value: function key(index) {
      return this.storage.key(index);
    }
  }, {
    key: "removeStorage",
    value: function removeStorage(option) {
      var key = option.key, success = option.success, fail = option.fail, complete = option.complete;
      var res = {
        errMsg: "removeStorage:ok"
      };
      if (!this.hasKey(key)) {
        res.errMsg = "key ".concat(key, " not exists !");
        fail && fail(res);
        complete && complete(res);
        return Promise.reject(res);
      }
      this.removeStorageSync(key);
      success && success(res);
      complete && complete(res);
      return Promise.resolve(res);
    }
  }, {
    key: "removeStorageSync",
    value: function removeStorageSync(key) {
      return this.storage.removeItem(this.getItemKey(key));
    }
  }, {
    key: "setStorage",
    value: function setStorage(option) {
      var key = option.key, data = option.data, success = option.success, fail = option.fail, complete = option.complete;
      var res = {
        errMsg: "setStorage:ok"
      };
      try {
        this.setStorageSync(key, data);
        if (this.hasKey(key)) {
          success && success(res);
          complete && complete(res);
          return Promise.resolve(res);
        } else {
          res.errMsg = "key ".concat(key, " setStorage2:fail");
          fail && fail(res);
          complete && complete(res);
          return Promise.reject(res);
        }
      } catch (e) {
        res.errMsg = "key ".concat(key, " setStorage:fail");
        fail && fail(res);
        complete && complete(res);
        return Promise.reject(res);
      }
    }
  }, {
    key: "setStorageSync",
    value: function setStorageSync(key, data, expire) {
      var storeData = {
        value: data,
        expire: expire ? (/* @__PURE__ */ new Date()).getTime() + expire : null
      };
      var stringifyValue = JSON.stringify(storeData);
      this.storage.setItem(this.getItemKey(key), stringifyValue);
    }
  }, {
    key: "getItemKey",
    value: function getItemKey(key) {
      return this.namespace + key;
    }
  }, {
    key: "getItem",
    value: function getItem(key) {
      try {
        var item;
        var data = this.storage.getItem(this.getItemKey(key));
        if (data !== null) {
          item = JSON.parse(data);
        }
        if (item && _typeof(item) === "object" && "expire" in item && "value" in item) {
          return {
            result: true,
            data: item
          };
        }
      } catch (e) {
        return {
          result: false
        };
      }
      return {
        result: false
      };
    }
  }, {
    key: "getStorageSync",
    value: function getStorageSync(key) {
      var res = this.getItem(key);
      if (res.result) {
        var data = res.data;
        if (!this.isExpire(key)) {
          return data.value;
        }
      }
      return void 0;
    }
  }]);
  return StorageClass2;
}();
var StorageType;
(function(StorageType2) {
  StorageType2["Session"] = "session";
  StorageType2["Local"] = "local";
  StorageType2["WebSQL"] = "webSQL";
  StorageType2["IndexDB"] = "indexDB";
})(StorageType || (StorageType = {}));
var webStorage = new StorageClass();
var Vue3Storage = {
  install: function install(app, options) {
    var _options$namespace;
    var _options = {
      storage: (options === null || options === void 0 ? void 0 : options.storage) || StorageType.Local,
      namespace: (_options$namespace = options === null || options === void 0 ? void 0 : options.namespace) !== null && _options$namespace !== void 0 ? _options$namespace : "pro_"
    };
    if (typeof window === "undefined") {
      throw new Error('Vue3Storage: Storage "'.concat(_options.storage, '" is not supported'));
    }
    var storage;
    switch (_options.storage) {
      case StorageType.Local:
        storage = window.localStorage;
        break;
      case StorageType.Session:
        storage = window.sessionStorage;
        break;
      default:
        throw new Error('Vue3Storage: Storage "'.concat(_options.storage, '" is not supported yet'));
    }
    webStorage = new StorageClass(storage);
    webStorage.config(_options.namespace);
    app.config.globalProperties.$storage = webStorage;
  }
};
var useStorage = function useStorage2() {
  var namespace = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  webStorage.config(namespace);
  return webStorage;
};
var vue3_storage_esm_default = Vue3Storage;
export {
  StorageType,
  vue3_storage_esm_default as default,
  useStorage
};
//# sourceMappingURL=vue3-storage.js.map
