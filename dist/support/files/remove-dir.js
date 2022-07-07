"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDir = void 0;
const fs = require('fs');
const removeDir = (dir) => {
    if (fs.existsSync(dir)) {
        fs.rmSync(dir, { recursive: true });
    }
};
exports.removeDir = removeDir;
//# sourceMappingURL=remove-dir.js.map