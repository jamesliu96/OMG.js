/*!
 * OMG.js
 * https://github.com/jamesliu96/OMG.js
 *
 * Copyright (c) 2015 James Liu
 * Released under the MIT license
 */
;(function() {
    Object.prototype.extend = function(a) {
        for (var i in a) {
            if (!(i in this)) {
                this[i] = a[i];
            }
        }
    };

    Object.prototype.extend({
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
        },
        each: function(a) {
            if (a.isFunction()) {
                for (var i in this) {
                    a.call(this[i]);
                }
            }
        }
    });

    Number.prototype.extend({
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
            if (this.isInteger()) {
                if (a.isFunction()) {
                    for (var i = 0; i < this; i++) {
                        a.call(this);
                    }
                }
            }
        }
    });

    String.prototype.extend({
        reverse: function() {
            return this.split('').reverse().join('');
        },
        safe: function(a) {
            return this.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }
    });

    Array.prototype.extend({
        each: function(a) {
            if (a.isFunction()) {
                for (var i = 0; i < this.length; i++) {
                    a.call(this[i]);
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
        remove: function(a) {
            this.splice(a, 1);
            return this;
        },
        delete: function(a) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] == a) {
                    this.remove(i);
                    i--;
                }
            }
            return this;
        },
        isEmpty: function() {
            return this.length === 0;
        }
    });
}).call(this);