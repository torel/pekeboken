
var kiwiGame = new Kiwi.Game();

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
