"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var player_board_1 = __importDefault(require("./player_board"));
var computer_board_1 = __importDefault(require("./computer_board"));
document.addEventListener("DOMContentLoaded", function (event) {
    var p_b_f = new player_board_1.default();
    var c_b_f = new computer_board_1.default();
});
