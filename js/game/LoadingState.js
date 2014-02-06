var loadingState = new Kiwi.State('LoadingState');

loadingState.init = function() {

    Kiwi.Stage.DEFAULT_HEIGHT = 800;
    Kiwi.Stage.DEFAULT_WIDTH = 1000;

    this.game.stage._width = 1200;
    this.game.stage._height = 800;
};

loadingState.preload = function(){

    Kiwi.State.prototype.preload.call(this);

    // Static images
    this.addImage('sky', 'img/sky.png');
    this.addImage('ground', 'img/ground.png');
    this.addImage('henHouse', 'img/inkscape/hen_house.svg');
    this.addImage('flower', 'img/inkscape/flower.svg');
    this.addImage('button', 'img/inkscape/button.svg');
    this.addImage('pigGround', 'img/pig_background.svg');
    this.addImage('fence', 'img/fence.svg');
    this.addImage('smile', 'img/inkscape/smile.svg');
    this.addImage('cloud', 'img/inkscape/cloud_sprite.svg');
    this.addImage('drop', 'img/inkscape/drop.svg');

    // Texture atlases
    this.addTextureAtlas('chickenAtlas', 'img/chicken_sprite.png', 'chickenJsonId', 'img/chicken_atlas.json');
    this.addTextureAtlas('sunAtlas', 'img/sun_sprite.png', 'sunJsonId', 'img/sun_atlas.json');
    this.addTextureAtlas('henAtlas', 'img/hen_sprite.png', 'henJsonId', 'img/hen_atlas.json');
    this.addTextureAtlas('pigAtlas', 'img/pig_sprite.png', 'pigJsonId', 'img/pig_atlas.json');
    this.addTextureAtlas('roosterAtlas', 'img/inkscape/rooster_sprite.svg', 'roosterJsonId', 'img/rooster_atlas.json');
    this.addTextureAtlas('tractorAtlas', 'img/tractor_sprite.svg', 'tractorJsonId', 'img/tractor_atlas.json');
    this.addTextureAtlas('fenceAtlas', 'img/fence_sprite.svg', 'fenceJsonId', 'img/fence_atlas.json');
    this.addTextureAtlas('cloudAtlas', 'img/inkscape/cloud_sprite.svg', 'cloudJsonId', 'img/cloud_atlas.json');

    // Sound
    this.addAudio('clucking', 'assets/sound/clucking.mp3');
    this.addAudio('layEgg', 'assets/sound/lay_egg.mp3');
    this.addAudio('chicksPeeping', 'assets/sound/chicks_peeping.mp3');
    this.addAudio('rooster', 'assets/sound/rooster.mp3');
    this.addAudio('highpitchedPeep', 'assets/sound/highpitched_peep.mp3');
    this.addAudio('pigSnort', 'assets/sound/pigsnort.mp3');
}

loadingState.create = function() {

    this.game.stage._width = 1200;

    Kiwi.State.prototype.create.call(this);
    // this.game.states.switchState('ChickenState');
    this.game.states.switchState('ChickenState');
}
