"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ships = /** @class */ (function() {
    function Ships() {
        this.cords_pl = [];
        this.htmlTable = function() {
            var main = document.getElementById('left');
            if (main) {
                var table = document.createElement("table");
                main.appendChild(table);
                for (var i = 1; i < 11; i++) {
                    var tr = document.createElement("tr");
                    table.appendChild(tr);
                    for (var ii = 1; ii < 11; ii++) {
                        var td = document.createElement("td");
                        tr.appendChild(td);
                    }
                }
            }
        };
        this.htmlTable();
        this.shipsHtml();
    }
    Ships.prototype.shipsHtml = function() {
        var order = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
        var main = document.getElementById('left');
        if (main) {
            for (var i = 0; i < order.length; i++) {
                var table = document.createElement("table");
                table.style.margin = 10 + 'px';
                main.appendChild(table);
                var tr = document.createElement("tr");
                table.appendChild(tr);
                for (var ii = 0; ii < order[i]; ii++) {
                    var td = document.createElement("td");
                    tr.appendChild(td);
                }
            }
        }
    };
    return Ships;
}());
exports.default = Ships;