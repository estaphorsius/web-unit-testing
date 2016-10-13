"use strict";
var App = (function () {
    function App() {
    }
    App.prototype.action = function () {
        console.log('Hello, World!');
    };
    return App;
}());
exports.App = App;
