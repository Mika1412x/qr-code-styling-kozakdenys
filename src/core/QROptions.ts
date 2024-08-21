import qrTypes from "../constants/qrTypes";
import drawTypes from "../constants/drawTypes";
import shapeTypes from "../constants/shapeTypes";
import backgroundShapeTypes from "../constants/backgroundShapeTypes";
import errorCorrectionLevels from "../constants/errorCorrectionLevels";
import {
  BackgroundShape,
  ShapeType,
  DotType,
  Options,
  TypeNumber,
  ErrorCorrectionLevel,
  Mode,
  DrawType,
  Gradient
} from "../types";

export interface RequiredOptions extends Options {
  type: DrawType;
  shape: ShapeType;
  width: number;
  height: number;
  margin: number;
  data: string;
  qrOptions: {
    typeNumber: TypeNumber;
    mode?: Mode;
    errorCorrectionLevel: ErrorCorrectionLevel;
  };
  imageOptions: {
    saveAsBlob: boolean;
    hideBackgroundDots: boolean;
    imageSize: number;
    crossOrigin?: string;
    margin: number;
  };
  dotsOptions: {
    type: DotType;
    color: string;
    gradient?: Gradient;
  };
  backgroundOptions: {
    shape: BackgroundShape;
    color: string;
    gradient?: Gradient;
  };
}

const defaultOptions: RequiredOptions = {
  type: drawTypes.canvas,
  shape: shapeTypes.square,
  width: 300,
  height: 300,
  data: "",
  margin: 0,
  qrOptions: {
    typeNumber: qrTypes[0],
    mode: undefined,
    errorCorrectionLevel: errorCorrectionLevels.Q
  },
  imageOptions: {
    saveAsBlob: false,
    hideBackgroundDots: true,
    imageSize: 0.4,
    crossOrigin: undefined,
    margin: 0
  },
  dotsOptions: {
    type: "square",
    color: "#000"
  },
  backgroundOptions: {
    shape: backgroundShapeTypes.square,
    color: "#fff"
  }
};

export default defaultOptions;
