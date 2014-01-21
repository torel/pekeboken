
function Game() {

}

Game.prototype =  {
    constructor: Game,

    start: function() {


        var kiwiGame = new Kiwi.Game();
        
        kiwiGame.states.addState(ChickenState);
        // kiwiGame.states.State(pigState);
        kiwiGame.states.addState(LoadingState,true);
        this.gameScale = 1;

    }
};
