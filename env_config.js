"use strict";
exports.__esModule = true;
function Config() {
    this.production = false;
    this.server = function () {
        var port = 3001;
        var host = '0.0.0.0';
    };
}
exports.env = new Config();
