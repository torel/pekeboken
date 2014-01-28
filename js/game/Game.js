var gameOptions = {
                    deviceTarget:   Kiwi.TARGET_COCOON,     // Kiwi.TARGET_COCOON eller Kiwi.TARGET_BROWSER
                    renderer:       Kiwi.RENDERER_CANVAS,   // Kiwi.RENDERER_WEBGL eller Kiwi.RENDERER_CANVAS
                    debug:          Kiwi.DEBUG_ON           // Kiwi.DEBUG_ON eller Kiwi.DEBUG_OFF
                }


var kiwiGame = new Kiwi.Game('', 'kiwiGame', null ,  gameOptions);

function Game() {

   
}

Game.prototype =  {
    constructor: Game,

    start: function() {

        kiwiGame.states.addState(chickenState);
        kiwiGame.states.addState(pigState);
        kiwiGame.states.addState(loadingState, true);
        this.gameScale = 1;

    }
};
