
const SceneManager = (function() {
    const $window = $(window);
    const $app = $("#app");
    let currentScene = new Scene($app);

    $window.keydown(function(e) {
        console.log(e.key);
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
