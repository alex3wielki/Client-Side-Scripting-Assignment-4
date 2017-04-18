module AnimationParts {
    export class Star extends createjs.Bitmap {
        constructor(
            loader: createjs.LoadQueue,
            private _imagePath: string,
            x: number, y: number) {
            // send the result of the preload queue to the superclass constructor
            super(loader.getResult(_imagePath));

            // check to see if the user requires the button's pivot to be centered
            this.regX = 0;
            this.regY = 0;
            this.x = x;
            this.y = y;
        }
    }
}