"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dragAndDropFromLocation = void 0;
const timeouts_config_1 = require("../configs/timeouts-config");
const dragAndDropFromLocation = async (location, direction, duration = timeouts_config_1.timeouts.smallest) => {
    await browser.performActions([
        {
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'mouse' },
            actions: [
                { type: 'pointerMove', duration: 0, x: Math.round(location.x), y: Math.round(location.y) },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 10 },
                {
                    type: 'pointerMove',
                    duration: duration,
                    origin: 'pointer',
                    x: Math.round(direction.x),
                    y: Math.round(direction.y),
                },
                { type: 'pointerUp', button: 0 },
            ],
        },
    ]);
};
exports.dragAndDropFromLocation = dragAndDropFromLocation;
//# sourceMappingURL=drag-and-drop-from-location.js.map