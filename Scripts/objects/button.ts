module AnimationParts {
    /**
     * A Button class
     * 
     * @export
     * @class Button
     * @extends {createjs.Bitmap}
     */
    export class Button extends createjs.Bitmap {
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
        constructor(
            loader: createjs.LoadQueue,
            private _imageString: string,
            x: number,
            y: number,
            private _isCentered: boolean) {
            super(loader.getResult(_imageString));
            if (_isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height / 2;
            }
            this.x = x;
            this.y = y;
            this.on('mouseover', this._mouseOver);
            this.on('mouseout', this._mouseOut);
            this.on('click', this._mouseClick);
        }
        private _mouseOver(event: createjs.MouseEvent) {
            this.alpha = 0.7;
            // this.scaleX = 1.2;
            // this.scaleY = 1.2;
        }
        private _mouseOut(event: createjs.MouseEvent) {
            this.alpha = 1.0;
            // this.scaleX = 1.0;
            // this.scaleY = 1.0;
        }
        private _mouseClick(event: createjs.MouseEvent) {
            $('html, body').animate({
                scrollTop: $('#portfolio').offset().top
            }, 1000);
        }
    }
}