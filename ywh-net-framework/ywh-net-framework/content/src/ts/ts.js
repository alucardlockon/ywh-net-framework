"use strict";
var A = (function () {
    function A() {
        this.b = 1;
        this.c = 'c';
    }
    return A;
}());
var va = new A();
document.write(va.b + va.c);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = A;
