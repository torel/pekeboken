var loadingState = new Kiwi.State('LoadingState');

loadingState.init = function() {
    this.game.stage.width = 1200;
    this.game.stage.height = 800;
};

loadingState.preload = function(){

    Kiwi.State.prototype.preload.call(this);
    
    this.game.stage.width = 1200;
    this.game.stage.height = 800;

    // Static images
    this.addImage('sky', 'img/sky.png');
    this.addImage('ground', 'img/ground.png');
    this.addImage('henHouse', 'img/hen_house_with_chicken.png');
    this.addImage('flower', 'img/flower.png');

    // Texture atlases
    this.addTextureAtlas('chickenAtlas', 'img/chicken_sprite.png', 'chickenJsonId', 'img/chicken_atlas.json');
    this.addTextureAtlas('sunAtlas', 'img/sun_sprite.png', 'sunJsonId', 'img/sun_atlas.json');
    this.addTextureAtlas('henAtlas', 'img/hen_sprite.png', 'henJsonId', 'img/hen_atlas.json');
    this.addTextureAtlas('pigAtlas', 'img/pig_sprite.png', 'pigJsonId', 'img/pig_atlas.json');
    this.addImage('pigGround', 'img/pig_ground.png');

    // Sound
    this.addAudio('duck', 'assets/sound/and.mp3');

}

loadingState.create = function(){
    Kiwi.State.prototype.create.call(this);
    this.game.states.switchState('ChickenState');
}
