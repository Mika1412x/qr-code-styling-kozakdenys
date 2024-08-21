/// <reference types="node" />
import QRCanvas from "./QRCanvas";
import QRSVG from "./QRSVG";
import { RequiredOptions } from "./QROptions";
import { Extension, QRCode, Options, DownloadOptions, ExtensionFunction } from "../types";
export default class QRCodeStyling {
    _options: RequiredOptions;
    _container?: HTMLElement;
    _canvas?: QRCanvas;
    _svg?: QRSVG;
    _qr?: QRCode;
    _extension?: ExtensionFunction;
    _canvasDrawingPromise?: Promise<void>;
    _svgDrawingPromise?: Promise<void>;
    constructor(options?: Partial<Options>);
    static _clearContainer(container?: HTMLElement): void;
    _getQRStylingElement(extension?: Extension): Promise<QRCanvas | QRSVG>;
    update(options?: Partial<Options>): Promise<void>;
    append(container?: HTMLElement): void;
    applyExtension(extension: ExtensionFunction): void;
    getRawData(extension?: Extension): Promise<Blob | Buffer | null>;
    download(downloadOptions?: Partial<DownloadOptions> | string): Promise<void>;
}
