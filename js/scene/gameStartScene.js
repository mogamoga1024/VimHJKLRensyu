
class GameStartScene extends Scene {
    start() {
        this.$app.empty();
        this.$app.append("<div>Press The I Key</div>");
    }

    keydown(key) {
        if (key === "i") {
            SceneManager.start(GamePlayScene);
        }
    }
}
