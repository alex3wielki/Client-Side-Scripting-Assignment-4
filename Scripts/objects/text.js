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
     * This creates the text used on the banner
     *
     * @export
     * @class Label
     * @extends {createjs.Text}
     */
    var Label = (function (_super) {
        __extends(Label, _super);
        /**
         * Creates an instance of Label.
         *
         * @param {string} _textContent
         * @param {string} _textFont
         * @param {string} _textSize
         * @param {string} _textColor
         * @param {number} x
         * @param {number} y
         * @param {boolean} _isCentered
         *
         * @memberOf Label
         */
        function Label(_textContent, _textSize, _textFont, _textColor, x, y, _isCentered) {
            var _this = _super.call(this, _textContent, _textSize + " " + _textFont, _textColor) || this;
            _this._textContent = _textContent;
            _this._textSize = _textSize;
            _this._textFont = _textFont;
            _this._textColor = _textColor;
            _this._isCentered = _isCentered;
            if (_this._isCentered) {
                _this.regX = _this.getMeasuredHeight() * 0.5;
                _this.regY = _this.getMeasuredWidth() * 0.5;
            }
            _this.x = x;
            _this.y = y;
            return _this;
        }
        return Label;
    }(createjs.Text));
    AnimationParts.Label = Label;
})(AnimationParts || (AnimationParts = {}));
