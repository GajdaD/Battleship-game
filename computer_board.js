"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ships = /** @class */ (function () {
    function Ships() {
        var _this = this;
        this.cords_comp = [];
        this.htmlTable = function () {
            var main = document.getElementById('right');
            if (main) {
                var table = document.createElement("table");
                main.appendChild(table);
                for (var i = 1; i < 11; i++) {
                    var tr = document.createElement("tr");
                    table.appendChild(tr);
                    for (var ii = 1; ii < 11; ii++) {
                        var td = document.createElement("td");
                        tr.appendChild(td);
                        if (_this.cords_comp[i][ii] == 1) {
                            td.style.backgroundColor = "purple";
                        }
                    }
                }
            }
        };
        this.cords_comp_table();
        this.random_cords();
        this.htmlTable();
    }
    Ships.prototype.cords_comp_table = function () {
        for (var i = 0; i < 12; i++) {
            this.cords_comp[i] = [];
            for (var ii = 0; ii < 12; ii++) {
                this.cords_comp[i][ii] = 0;
            }
        }
    };
    Ships.prototype.random_cords = function () {
        var _this = this;
        var order = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
        var _loop_1 = function (i) {
            switch (order[i]) {
                case 4:
                    //console.log(4)
                    var direction4 = Math.round(Math.random());
                    switch (direction4) {
                        case 0: // horizontal
                            var random_1 = function () {
                                var x = Math.floor(Math.random() * 10) + 1;
                                var y = Math.floor(Math.random() * 10) + 1;
                                if (x + 3 <= 10 && _this.cords_comp[y][x] == 0 && _this.cords_comp[y][x + 1] == 0 && _this.cords_comp[y][x + 2] == 0 && _this.cords_comp[y][x + 3] == 0 && _this.cords_comp[y + 1][x] == 0 && _this.cords_comp[y + 1][x + 1] == 0 && _this.cords_comp[y + 1][x + 2] == 0 && _this.cords_comp[y + 1][x + 3] == 0 && _this.cords_comp[y + 1][x - 1] == 0 && _this.cords_comp[y + 1][x + 4] == 0 && _this.cords_comp[y][x - 1] == 0 && _this.cords_comp[y][x + 4] == 0 && _this.cords_comp[y - 1][x - 1] == 0 && _this.cords_comp[y - 1][x + 4] == 0 && _this.cords_comp[y - 1][x] == 0 && _this.cords_comp[y - 1][x + 1] == 0 && _this.cords_comp[y - 1][x + 2] == 0 && _this.cords_comp[y - 1][x + 3] == 0) {
                                    _this.cords_comp[y][x] = 1;
                                    _this.cords_comp[y][x + 1] = 1;
                                    _this.cords_comp[y][x + 2] = 1;
                                    _this.cords_comp[y][x + 3] = 1;
                                }
                                else {
                                    random_1();
                                }
                            };
                            random_1();
                            break;
                        case 1: // vertical
                            var random2_1 = function () {
                                var x = Math.floor(Math.random() * 10) + 1;
                                var y = Math.floor(Math.random() * 10) + 1;
                                if (y + 3 <= 10 && _this.cords_comp[y][x] == 0 && _this.cords_comp[y + 1][x] == 0 && _this.cords_comp[y + 2][x] == 0 && _this.cords_comp[y + 3][x] == 0 && _this.cords_comp[y - 1][x] == 0 && _this.cords_comp[y + 4][x] == 0 && _this.cords_comp[y - 1][x - 1] == 0 && _this.cords_comp[y - 1][x + 1] == 0 && _this.cords_comp[y][x - 1] == 0 && _this.cords_comp[y][x + 1] == 0 && _this.cords_comp[y + 1][x - 1] == 0 && _this.cords_comp[y + 1][x + 1] == 0 && _this.cords_comp[y + 2][x - 1] == 0 && _this.cords_comp[y + 2][x + 1] == 0 && _this.cords_comp[y + 3][x - 1] == 0 && _this.cords_comp[y + 3][x + 1] == 0 && _this.cords_comp[y + 4][x - 1] == 0 && _this.cords_comp[y + 4][x + 1] == 0) {
                                    _this.cords_comp[y][x] = 1;
                                    _this.cords_comp[y + 1][x] = 1;
                                    _this.cords_comp[y + 2][x] = 1;
                                    _this.cords_comp[y + 3][x] = 1;
                                }
                                else {
                                    random2_1();
                                }
                            };
                            random2_1();
                            break;
                    }
                    break;
                case 3:
                    //console.log(3)
                    var direction3 = Math.round(Math.random());
                    switch (direction3) {
                        case 0: // horizontal
                            var random_2 = function () {
                                var x = Math.floor(Math.random() * 10) + 1;
                                var y = Math.floor(Math.random() * 10) + 1;
                                if (x + 2 <= 10 && _this.cords_comp[y][x] == 0 && _this.cords_comp[y][x + 1] == 0 && _this.cords_comp[y][x + 2] == 0 && _this.cords_comp[y + 1][x] == 0 && _this.cords_comp[y + 1][x + 1] == 0 && _this.cords_comp[y + 1][x + 2] == 0 && _this.cords_comp[y + 1][x - 1] == 0 && _this.cords_comp[y + 1][x + 3] == 0 && _this.cords_comp[y][x - 1] == 0 && _this.cords_comp[y][x + 3] == 0 && _this.cords_comp[y - 1][x - 1] == 0 && _this.cords_comp[y - 1][x + 3] == 0 && _this.cords_comp[y - 1][x] == 0 && _this.cords_comp[y - 1][x + 1] == 0 && _this.cords_comp[y - 1][x + 2] == 0) {
                                    _this.cords_comp[y][x] = 1;
                                    _this.cords_comp[y][x + 1] = 1;
                                    _this.cords_comp[y][x + 2] = 1;
                                }
                                else {
                                    random_2();
                                }
                            };
                            random_2();
                            break;
                        case 1: // vertical
                            var random2_2 = function () {
                                var x = Math.floor(Math.random() * 10) + 1;
                                var y = Math.floor(Math.random() * 10) + 1;
                                if (y + 2 <= 10 && _this.cords_comp[y][x] == 0 && _this.cords_comp[y + 1][x] == 0 && _this.cords_comp[y + 2][x] == 0 && _this.cords_comp[y - 1][x] == 0 && _this.cords_comp[y + 3][x] == 0 && _this.cords_comp[y - 1][x - 1] == 0 && _this.cords_comp[y - 1][x + 1] == 0 && _this.cords_comp[y][x - 1] == 0 && _this.cords_comp[y][x + 1] == 0 && _this.cords_comp[y + 1][x - 1] == 0 && _this.cords_comp[y + 1][x + 1] == 0 && _this.cords_comp[y + 2][x - 1] == 0 && _this.cords_comp[y + 2][x + 1] == 0 && _this.cords_comp[y + 3][x - 1] == 0 && _this.cords_comp[y + 3][x + 1] == 0) {
                                    _this.cords_comp[y][x] = 1;
                                    _this.cords_comp[y + 1][x] = 1;
                                    _this.cords_comp[y + 2][x] = 1;
                                }
                                else {
                                    random2_2();
                                }
                            };
                            random2_2();
                            break;
                    }
                    break;
                case 2:
                    //console.log(2)
                    var direction = Math.round(Math.random());
                    switch (direction) {
                        case 0: // horizontal
                            var random_3 = function () {
                                var x = Math.floor(Math.random() * 10) + 1;
                                var y = Math.floor(Math.random() * 10) + 1;
                                if (x + 1 <= 10 && _this.cords_comp[y][x] == 0 && _this.cords_comp[y][x + 1] == 0 && _this.cords_comp[y + 1][x] == 0 && _this.cords_comp[y + 1][x + 1] == 0 && _this.cords_comp[y + 1][x - 1] == 0 && _this.cords_comp[y + 1][x + 2] == 0 && _this.cords_comp[y][x - 1] == 0 && _this.cords_comp[y][x + 2] == 0 && _this.cords_comp[y - 1][x - 1] == 0 && _this.cords_comp[y - 1][x + 2] == 0 && _this.cords_comp[y - 1][x] == 0 && _this.cords_comp[y - 1][x + 1] == 0) {
                                    _this.cords_comp[y][x] = 1;
                                    _this.cords_comp[y][x + 1] = 1;
                                }
                                else {
                                    random_3();
                                }
                            };
                            random_3();
                            break;
                        case 1: // vertical
                            var random2_3 = function () {
                                var x = Math.floor(Math.random() * 10) + 1;
                                var y = Math.floor(Math.random() * 10) + 1;
                                if (y + 1 <= 10 && _this.cords_comp[y][x] == 0 && _this.cords_comp[y + 1][x] == 0 && _this.cords_comp[y - 1][x] == 0 && _this.cords_comp[y + 2][x] == 0 && _this.cords_comp[y - 1][x - 1] == 0 && _this.cords_comp[y - 1][x + 1] == 0 && _this.cords_comp[y][x - 1] == 0 && _this.cords_comp[y][x + 1] == 0 && _this.cords_comp[y + 1][x - 1] == 0 && _this.cords_comp[y + 1][x + 1] == 0 && _this.cords_comp[y + 2][x - 1] == 0 && _this.cords_comp[y + 2][x + 1] == 0) {
                                    _this.cords_comp[y][x] = 1;
                                    _this.cords_comp[y + 1][x] = 1;
                                }
                                else {
                                    random2_3();
                                }
                            };
                            random2_3();
                            break;
                    }
                    break;
                case 1:
                    var random_4 = function () {
                        var x = Math.floor(Math.random() * 10) + 1;
                        var y = Math.floor(Math.random() * 10) + 1;
                        if (_this.cords_comp[y][x] == 0 && _this.cords_comp[y - 1][x] == 0 && _this.cords_comp[y - 1][x + 1] == 0 && _this.cords_comp[y][x + 1] == 0 && _this.cords_comp[y + 1][x + 1] == 0 && _this.cords_comp[y + 1][x] == 0 && _this.cords_comp[y + 1][x - 1] == 0 && _this.cords_comp[y][x - 1] == 0 && _this.cords_comp[y - 1][x - 1] == 0) {
                            _this.cords_comp[y][x] = 1;
                        }
                        else {
                            random_4();
                        }
                    };
                    random_4();
                    break;
            }
        };
        for (var i = 0; i < order.length; i++) {
            _loop_1(i);
        }
    };
    return Ships;
}());
exports.default = Ships;
