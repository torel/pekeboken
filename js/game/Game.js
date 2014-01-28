// var kiwiGame = new Kiwi.Game();
var kiwiGame = new Kiwi.Game('', 'KiwiGame', null ,  Kiwi.TARGET_COCOON);

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
