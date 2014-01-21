var loadingState = new Kiwi.State('LoadingState');



loadingState.init = function() {
    this.game.stage.width = 1200;
    this.game.stage.height = 800;
};

loadingState.preload = function(){

    Kiwi.State.prototype.preload.call(this);
    this.addImage('sky', 'img/sky.png');
    this.addImage('ground', 'img/ground.png');
    this.addImage('henHouse', 'img/hen_house_with_chicken.png');

    this.addTextureAtlas('chickenAtlas', 'img/chicken_sprite.png', 'chickenJsonId', 'img/chicken_atlas.json');
    this.addTextureAtlas('sunAtlas', 'img/sun_sprite.png', 'sunJsonId', 'img/sun_atlas.json');
    // this.addTextureAtlas('pigAtlas', 'img/pig_sprite.png', 'pigJsonId', 'img/pig_atlas.json');
    

}

loadingState.create = function(){
    Kiwi.State.prototype.create.call(this);
    this.game.states.switchState('ChickenState');
}