var chickenState = new Kiwi.State('ChickenState');

chickenState.create = function() {
    Kiwi.State.prototype.create.call(this);


    // Create background
    this.sky = new Kiwi.GameObjects.StaticImage(this, this.textures['sky'], 0, 0);

    this.sun = new Sun(this, 250, 230, 1.5);
    this.cloud = new Cloud(this, 0, 0, 1);

    this.ground = new Kiwi.GameObjects.StaticImage(this, this.textures['ground'], 0, 300);

    this.henHouse = new Kiwi.GameObjects.StaticImage(this, this.textures['henHouse'], 0, 200);
    this.henHouse.transform.scaleX = 0.4;
    this.henHouse.transform.scaleY = 0.4;

    this.rooster = new Rooster(this, 100, 145, 0.6);

    this.flower1 = new Kiwi.GameObjects.StaticImage(this, this.textures['flower'], 700, 398);
    this.flower2 = new Kiwi.GameObjects.StaticImage(this, this.textures['flower'], 720, 400);
    this.flower3 = new Kiwi.GameObjects.StaticImage(this, this.textures['flower'], 705, 412);

    this.flower4 = new Kiwi.GameObjects.StaticImage(this, this.textures['flower'], 50, 343);
    this.flower5 = new Kiwi.GameObjects.StaticImage(this, this.textures['flower'], 66, 352);
    this.flower6 = new Kiwi.GameObjects.StaticImage(this, this.textures['flower'], 53, 362);

    this.flower7 = new Kiwi.GameObjects.StaticImage(this, this.textures['flower'], 304, 397);
    this.flower8 = new Kiwi.GameObjects.StaticImage(this, this.textures['flower'], 322, 400);

    this.buttonRight = new Kiwi.GameObjects.Sprite(this, this.textures['button'], 720, 290);
    this.buttonRight.transform.scaleX = 0.5;
    this.buttonRight.transform.scaleY = 0.5;

    this.smile = new Kiwi.GameObjects.StaticImage(this, this.textures['smile'], 307, 285);

    this.addChild(this.sky);
    this.addChild(this.sun);
    this.addChild(this.cloud);
    this.addChild(this.ground);


    this.addChild(this.henHouse);
    this.addChild(this.rooster);

    this.addChild(this.flower1);
    this.addChild(this.flower2);
    this.addChild(this.flower3);

    this.addChild(this.flower4);
    this.addChild(this.flower5);
    this.addChild(this.flower6);

    this.addChild(this.flower7);
    this.addChild(this.flower8);
    
    this.addChild(this.smile);
    this.smile.visibility = false;

    this.chicken1 = new Chicken(this, 50, 380, 0.45, this.gameScale * 0.6);
    this.addChild(this.chicken1.get());

    this.chicken2 = new Chicken(this, 550, 400, 0.5, this.gameScale * 0.7);
    this.addChild(this.chicken2.get());

    this.hen = new Hen(this, 300, 310, 0.7);
    this.addChild(this.hen);

    this.chicken3 = new Chicken(this, 250, 440, 0.6, this.gameScale * 0.9);
    this.addChild(this.chicken3.get());

    this.chicken4 = new Chicken(this, 650, 460, 0.65, this.gameScale);
    this.addChild(this.chicken4.get());

    // Sound
    this.chicksPeepingSound = new Kiwi.Sound.Audio(kiwiGame, 'chicksPeeping', 0.2, true);

    this.playBackgroundSound();

    this.addChild(this.buttonRight);
    this.buttonRight.input.onUp.add(this.switchState,this)

    this.mouse = this.game.input.mouse;

};

chickenState.switchState = function(){
    this.stopBackgroundSound();
    this.game.states.switchState('PigState');
}


chickenState.update = function() {
    Kiwi.State.prototype.update.call(this);

    this.chicken1.update();
    this.chicken2.update();
    this.chicken3.update();
    this.chicken4.update();

    this.sun.update();
    this.cloud.update();

    if (this.mouse.isDown) {
        console.log(this.mouse.x, this.mouse.y)
        console.log(this.game.stage.name)
    }

};

chickenState.stopBackgroundSound = function() {
    this.chicksPeepingSound.pause();
};

chickenState.playBackgroundSound = function() {
    this.chicksPeepingSound.play();
};

chickenState.displaySmile = function() {
    chickenState.smile.visibility = true;
};