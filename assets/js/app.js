const game = (function () {
    var rond = {},
        stage, keys = {},
        left, right, up, down,
        KEYCODE_LEFT = 37,
        KEYCODE_RIGHT = 39,
        KEYCODE_UP = 38,
        KEYCODE_DOWN = 40;

    function keyPressed(event) {
        if (!event) {
            var event = window.event;
        }
        switch (event.keyCode) {
            case KEYCODE_LEFT:
                console.log("left held");
                left = true;
                break;
            case KEYCODE_RIGHT:
                console.log("right held");
                right = true;
                break;
            case KEYCODE_UP:
                console.log("up held");
                up = true;
                break;
            case KEYCODE_DOWN:
                console.log("down held");
                down = true;
                break;
        }
    }

    function keyReleased(event) {
        if (!event) {
            var event = window.event;
        }
        switch (event.keyCode) {
            case KEYCODE_LEFT:
                console.log("left released");
                left = false;
                break;
            case KEYCODE_RIGHT:
                console.log("right released");
                right = false;
                break;
            case KEYCODE_UP:
                console.log("up released");
                up = false;
                break;
            case KEYCODE_DOWN:
                console.log("down released");
                down = false;
                break;
        }
    }

    function handleTick(event) {
        if (left) {
            rond.x -= 10;
        } else if (right) {
            rond.x += 10;
        }

        if (up) {
            rond.y -= 10;
        } else if (down) {
            rond.y += 10;
        }

        if (rond.x > stage.canvas.width) {
            rond.x = stage.canvas.width;
        }
        stage.update();
        console.log("update");
    }

    function init() {
        stage = new createjs.Stage("demoCanvas");
        rond = new createjs.Shape();
        rond.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
        rond.x = 250;
        rond.y = 100;
        stage.addChild(rond);
        createjs.Ticker.addEventListener("tick", handleTick);
        this.document.onkeydown = keyPressed;
        this.document.onkeyup = keyReleased;
    };

    window.onload = function () {
        init();
    };
}());