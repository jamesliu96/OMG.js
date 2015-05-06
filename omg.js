/*!
 * OMG.js
 * https://github.com/jamesliu96/OMG.js
 *
 * Copyright (c) 2015 James Liu
 * Released under the MIT license
 */
(function() {
    var __extend = function(a, b) {
        for (var i in b) {
            a[i] = b[i];
        }
    };

    __extend(Object.prototype, {
        isObject: function() {
            return Object.prototype.toString.call(this) === "[object Object]";
        },
        isFunction: function() {
            return "function" === typeof this;
        },
        isNumber: function() {
            return "number" === typeof this;
        },
        isString: function() {
            return "string" === typeof this;
        },
        isArray: function() {
            return Object.prototype.toString.call(this) === "[object Array]";
        },
        isBoolean: function() {
            return "boolean" === typeof this;
        },
        isNull: function() {
            return Object.prototype.toString.call(this) === "[object Null]";
        },
        isUndefined: function() {
            return "undefined" === typeof this;
        }
    });

    __extend(Number.prototype, {
        abs: function() {
            return Math.abs(this);
        },
        ceil: function() {
            return Math.ceil(this);
        },
        floor: function() {
            return Math.floor(this);
        },
        round: function() {
            return Math.round(this);
        },
        toChar: function() {
            return String.fromCharCode(this);
        },
        isZero: function() {
            return this === 0;
        },
        isInteger: function() {
            return this == Math.floor(this);
        },
        pow: function(a) {
            return Math.pow(this, a);
        },
        times: function(a) {
            if (this.isInteger) {
                if (a.isFunction) {
                    for (var i = 0; i < this; i++) {
                        a.call(this);
                    }
                }
            }
        }
    });

    __extend(String.prototype, {
        reverse: function() {
            return this.split('').reverse().join('');
        }
    });

    __extend(Array.prototype, {
        each: function(a) {
            if (a.isFunction) {
                for (var i = 0; i < this.length; i++) {
                    a(this[i]);
                }
            }
        },
        at: function(a) {
            if (a >= 0) {
                return this[a];
            } else {
                return this[this.length + a];
            }
        },
        isEmpty: function() {
            return this.length === 0;
        }
    });
})();