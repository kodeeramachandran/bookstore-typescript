"use strict";
// src/utilities.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.logItem = logItem;
exports.getItemProperty = getItemProperty;
function logItem(item) {
    console.log(item);
}
function getItemProperty(item, key) {
    return item[key];
}
