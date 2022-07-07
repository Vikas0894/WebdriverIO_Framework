"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFile = void 0;
const fs_1 = __importDefault(require("fs"));
const writeFile = (filePath, data) => {
    fs_1.default.writeFileSync(filePath, data);
};
exports.writeFile = writeFile;
//# sourceMappingURL=write-file.js.map