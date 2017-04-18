(() => {
    let canvas: HTMLElement;
    let canvasWidth: number;
    let canvasHeight: number;

    let stage: createjs.Stage;

    let textLabel: AnimationParts.Label;
    let Button: AnimationParts.Button;
    let loader: createjs.LoadQueue;
    let starLoader: createjs.LoadQueue;
    let starStage: createjs.Stage;
    let star: AnimationParts.Star;
    function Init(): void {
        loader = new createjs.LoadQueue();
        loader.on('complete', StartAnimation);
        loader.loadManifest([
            { id: "Button", src: "./../../Assets/Images/Button.png" }
        ]);
    }
    function StartAnimation() {
        canvas = $('canvas')[0];//Getting HTML instead of jQuery object
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);

        Main();
    }
    function Update(event: createjs.Event): void {
        textLabel.x -= 2;
        if (textLabel.x < -canvasWidth) {
            textLabel.x = canvasWidth;
        }
        stage.update();
    }
    function Main(): void {
        canvasHeight = $('canvas').height();
        canvasWidth = $('canvas').width();
        textLabel = new AnimationParts.Label
            ("Check out my projects",
            "24px",
            "Roboto",
            'black',
            100,
            130,
            true);
        Button = new AnimationParts.Button
            (loader,
            "Button",
            240,
            40,
            true);
        stage.addChild(Button);
        stage.addChild(textLabel);
        console.debug(canvasWidth);
    }
    window.onload = Init;
})()
