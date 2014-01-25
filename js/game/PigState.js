var pigState = new Kiwi.State('PigState');

pigState.create = function() {
    Kiwi.State.prototype.create.call(this);

    // Create background
    this.sky = new Kiwi.GameObjects.StaticImage(this, this.textures['sky'], 0, 0);

    this.sun = new Sun(this, 450, 30, 1.5);

    this.ground = new Kiwi.GameObjects.StaticImage(this, this.textures['pigGround'], 0, 200);

    this.buttonLeft = new Kiwi.GameObjects.Sprite(this, this.textures['button'], -410, -170);
    this.buttonLeft.transform.scaleX = 0.5;
    this.buttonLeft.transform.scaleY = 0.5;

    // this.flower1 = new Kiwi.GameObjects.StaticImage(this, this.textures['flower'], 700, 398);
    // this.flower2 = new Kiwi.GameObjects.StaticImage(this, this.textures['flower'], 720, 400);
    // this.flower3 = new Kiwi.GameObjects.StaticImage(this, this.textures['flower'], 705, 412);

    this.addChild(this.sky);
    this.addChild(this.sun.get());
    this.addChild(this.ground);

    this.pig = new Pig(this, 300, 310, 0.7);
    this.addChild(this.pig.get());

    this.addChild(this.buttonLeft);
    this.buttonLeft.input.onUp.add(this.switchState,this)

    // this.addChild(this.flower1);
    // this.addChild(this.flower2);
    // this.addChild(this.flower3);

   
};

pigState.update = function() {
    Kiwi.State.prototype.update.call(this);

    this.pig.update();

    this.sun.update();
};

pigState.switchState = function(){
    this.game.states.switchState('ChickenState');
}