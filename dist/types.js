"use strict";
// src/types.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genre = void 0;
// Enum for book genres
var Genre;
(function (Genre) {
    Genre[Genre["Fiction"] = 0] = "Fiction";
    Genre[Genre["NonFiction"] = 1] = "NonFiction";
    Genre[Genre["Mystery"] = 2] = "Mystery";
    Genre[Genre["SciFi"] = 3] = "SciFi";
    Genre[Genre["Biography"] = 4] = "Biography";
})(Genre || (exports.Genre = Genre = {}));
