/// <reference path="fourslash.ts" />

// @allowNonTsExtensions: true
// @Filename: file.js
//// "use strict";
////
//// class Something {
////
////     /**
////      * @param {number} a
////      */
////     constructor(a, b) {
////         a/*body*/
////     }
////
////     /**
////      * @param {number} a
////      */
////     method(a) {
////         a/*method*/
////     }
//// }
//// let x = new Something(/*sig*/);

goTo.marker('body');
edit.insert('.');
verify.completions({ includes: { name: "toFixed", kind: "method" } });
edit.backspace();

verify.signatureHelp({
    marker: "sig",
    text: "Something(a: number, b: any): Something",
    tags: [{ name: "param", text: "a" }],
});

goTo.marker('method');
edit.insert('.');
verify.completions({ includes: { name: "toFixed", kind: "method" } });
