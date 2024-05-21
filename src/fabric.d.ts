import * as fabricNamespace from 'fabric';

declare module CustomFabric {
  export class EraserBrush extends fabricNamespace.BaseBrush {
    constructor(canvas: fabricNamespace.Canvas);
  }
  export import Canvas = fabricNamespace.Canvas;
  export import Image = fabricNamespace.Image;
  export import BaseBrush = fabricNamespace.BaseBrush;
  export import StaticCanvas = fabricNamespace.StaticCanvas;
  export import Object = fabricNamespace.Object;
  export import Point = fabricNamespace.Point;
  export import IEvent = fabricNamespace.IEvent;
  export import Gradient = fabricNamespace.Gradient;
  export import Pattern = fabricNamespace.Pattern;
  export import Shadow = fabricNamespace.Shadow;
  export import Text = fabricNamespace.Text;
  export import IText = fabricNamespace.IText;
  export import Circle = fabricNamespace.Circle;
  export import Ellipse = fabricNamespace.Ellipse;
  export import Group = fabricNamespace.Group;
  export import Polygon = fabricNamespace.Polygon;
  export import Polyline = fabricNamespace.Polyline;
  export import Rect = fabricNamespace.Rect;
  export import Triangle = fabricNamespace.Triangle;
  export import Line = fabricNamespace.Line;
  export import Path = fabricNamespace.Path;
  export import FreeDrawingBrush = fabricNamespace.FreeDrawingBrush;
  export import PencilBrush = fabricNamespace.PencilBrush;
  export import SprayBrush = fabricNamespace.SprayBrush;
  export import Color = fabricNamespace.Color;
  export import PathGroup = fabricNamespace.PathGroup;
  export import Textbox = fabricNamespace.Textbox;
  export import CharWidthsCache = fabricNamespace.CharWidthsCache;
}

export module CustomFabric{};
