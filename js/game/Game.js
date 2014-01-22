
function Game() {

}

Game.prototype =  {
    constructor: Game,

    start: function() {


        var kiwiGame = new Kiwi.Game();

        kiwiGame.states.addState(chickenState);
        // kiwiGame.states.State(pigState);
        kiwiGame.states.addState(loadingState,true);
        this.gameScale = 1;

    }
};
