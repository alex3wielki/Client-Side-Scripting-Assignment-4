(function () {
    var canvas;
    var canvasWidth;
    var canvasHeight;
    var stage;
    var textLabel;
    var Button;
    var loader;
    var starLoader;
    var starStage;
    var star;
    function Init() {
        loader = new createjs.LoadQueue();
        loader.on('complete', StartAnimation);
        loader.loadManifest([
            { id: "Button", src: "./../../Assets/Images/Button.png" }
        ]);
    }
    function StartAnimation() {
        canvas = $('canvas')[0]; //Getting HTML instead of jQuery object
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        Main();
    }
    function Update(event) {
        textLabel.x -= 2;
        if (textLabel.x < -canvasWidth) {
            textLabel.x = canvasWidth;
        }
        stage.update();
    }
    function Main() {
        canvasHeight = $('canvas').height();
        canvasWidth = $('canvas').width();
        textLabel = new AnimationParts.Label("Check out my projects", "24px", "Roboto", 'black', 100, 130, true);
        Button = new AnimationParts.Button(loader, "Button", 240, 40, true);
        stage.addChild(Button);
        stage.addChild(textLabel);
        console.debug(canvasWidth);
    }
    window.onload = Init;
})();
