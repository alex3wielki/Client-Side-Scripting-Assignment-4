module AnimationParts {
    /**
     * This creates the text used on the banner
     * 
     * @export
     * @class Label
     * @extends {createjs.Text}
     */
    export class Label extends createjs.Text {

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
        constructor(private _textContent: string,
                    private _textSize: string,
                    private _textFont: string,
                    private _textColor: string,
                    x: number,
                    y: number,
                    private _isCentered: boolean
                ) {
            super(_textContent, _textSize + " " + _textFont, _textColor);
            if (this._isCentered) {
                this.regX = this.getMeasuredHeight() * 0.5;
                this.regY = this.getMeasuredWidth() * 0.5;
            }
            this.x = x;
            this.y = y;
        }
    }
}