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
    /**
     * A Button class
     *
     * @export
     * @class Button
     * @extends {createjs.Bitmap}
     */
    var Button = (function (_super) {
        __extends(Button, _super);
        /**
         * Creates an instance of button.
         * @param {createjs.LoadQueue} loader
         * @param {string} _imageString
         * @param {number} x
         * @param {number} y
         * @param {boolean} _isCentered
         *
         * @memberOf button
         */
        function Button(loader, _imageString, x, y, _isCentered) {
            var _this = _super.call(this, loader.getResult(_imageString)) || this;
            _this._imageString = _imageString;
            _this._isCentered = _isCentered;
            if (_isCentered) {
                _this.regX = _this.getBounds().width * 0.5;
                _this.regY = _this.getBounds().height / 2;
            }
            _this.x = x;
            _this.y = y;
            _this.on('mouseover', _this._mouseOver);
            _this.on('mouseout', _this._mouseOut);
            _this.on('click', _this._mouseClick);
            return _this;
        }
        Button.prototype._mouseOver = function (event) {
            this.alpha = 0.7;
            // this.scaleX = 1.2;
            // this.scaleY = 1.2;
        };
        Button.prototype._mouseOut = function (event) {
            this.alpha = 1.0;
            // this.scaleX = 1.0;
            // this.scaleY = 1.0;
        };
        Button.prototype._mouseClick = function (event) {
            $('html, body').animate({
                scrollTop: $('#portfolio').offset().top
            }, 1000);
        };
        return Button;
    }(createjs.Bitmap));
    AnimationParts.Button = Button;
})(AnimationParts || (AnimationParts = {}));
