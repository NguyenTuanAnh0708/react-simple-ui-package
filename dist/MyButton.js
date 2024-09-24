"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var MyButton = function (_a) {
    var onClick = _a.onClick, label = _a.label;
    return react_1.default.createElement("button", { onClick: onClick }, label);
};
exports.default = MyButton;
