var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AnimationParts;
(function (AnimationParts) {
    var Star = (function (_super) {
        __extends(Star, _super);
        function Star(loader, _imagePath, x, y) {
            var _this = 
            // send the result of the preload queue to the superclass constructor
            _super.call(this, loader.getResult(_imagePath)) || this;
            _this._imagePath = _imagePath;
            // check to see if the user requires the button's pivot to be centered
            _this.regX = 0;
            _this.regY = 0;
            _this.x = x;
            _this.y = y;
            return _this;
        }
        return Star;
    }(createjs.Bitmap));
    AnimationParts.Star = Star;
})(AnimationParts || (AnimationParts = {}));
