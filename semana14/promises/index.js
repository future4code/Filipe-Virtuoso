"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var text1 = new Promise(function (resolve, reject) {
    var handleFileRead = function (err, data) {
        try {
            var content = data.toString();
            resolve(content);
        }
        catch (e) {
            reject(err);
        }
    };
    fs_1.readFile("./textos/1.txt", handleFileRead);
});
var text2 = new Promise(function (resolve, reject) {
    var handleFileRead = function (err, data) {
        try {
            var content = data.toString();
            resolve(content);
        }
        catch (e) {
            reject(err);
        }
    };
    fs_1.readFile("./textos/2.txt", handleFileRead);
});
var text3 = new Promise(function (resolve, reject) {
    var handleFileRead = function (err, data) {
        try {
            var content = data.toString();
            resolve(content);
        }
        catch (e) {
            reject(err);
        }
    };
    fs_1.readFile("./textos/3.txt", handleFileRead);
});
var text4 = new Promise(function (resolve, reject) {
    var handleFileRead = function (err, data) {
        try {
            var content = data.toString();
            resolve(content);
        }
        catch (e) {
            reject(err);
        }
    };
    fs_1.readFile("./textos/4.txt", handleFileRead);
});
var text5 = new Promise(function (resolve, reject) {
    var handleFileRead = function (err, data) {
        try {
            var content = data.toString();
            resolve(content);
        }
        catch (e) {
            reject(err);
        }
    };
    fs_1.readFile("./textos/5.txt", handleFileRead);
});
Promise.all([text1, text2, text3, text4, text5])
    .then(function (values) {
    console.log(values.join(' '));
})["catch"](function (err) {
    console.log(err);
});
