import { RequiredOptions } from "./QROptions";
import { QRCode, FilterFunction, Gradient, Window, Canvas } from "../types";
export default class QRSVG {
    _canvas?: Canvas;
    _window: Window;
    _element: SVGElement;
    _defs: SVGElement;
    _dotsClipPath?: SVGElement;
    _cornersSquareClipPath?: SVGElement;
    _cornersDotClipPath?: SVGElement;
    _options: RequiredOptions;
    _qr?: QRCode;
    _image?: HTMLImageElement;
    _imageUri?: string;
    constructor(options: RequiredOptions);
    get width(): number;
    get height(): number;
    getElement(): SVGElement;
    clear(): void;
    drawQR(qr: QRCode): Promise<void>;
    drawBackground(): void;
    drawDots(filter?: FilterFunction): void;
    drawCorners(): void;
    imageToBlob(): void;
    loadImage(): Promise<void>;
    drawImage({ width, height, count, dotSize }: {
        width: number;
        height: number;
        count: number;
        dotSize: number;
    }): void;
    _createColor({ options, color, additionalRotation, x, y, height, width, name }: {
        options?: Gradient;
        color?: string;
        additionalRotation: number;
        x: number;
        y: number;
        height: number;
        width: number;
        name: string;
    }): void;
}
