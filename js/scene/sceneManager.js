
const SceneManager = (function() {
    const $window = $(window);
    const $app = $("#app");
    let currentScene = new Scene();

    $window.keydown(function(e) {
        return currentScene.keydown(e.key);
    });

    return {
        start(SceneClass) {
            currentScene = new SceneClass();
            currentScene.$app = $app;
            currentScene.start();
        }
    }
})();
