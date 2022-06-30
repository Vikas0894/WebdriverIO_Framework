import { timeouts } from "../configs/timeouts-config";

export const dragAndDropFromLocation = async (
    location: { x: number; y: number },
    direction: { x: number; y: number },
    duration: number = timeouts.smallest,

): Promise<void> => {
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