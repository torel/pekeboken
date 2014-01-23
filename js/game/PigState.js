var pigState = new Kiwi.State('PigState');

pigState.create = function() {
    Kiwi.State.prototype.create.call(this);

    // Create background
    this.sky = new Kiwi.GameObjects.StaticImage(this, this.textures['sky'], 0, 0);

    this.sun = new Sun(this, 250, 230, 1.5);

    this.ground = new Kiwi.GameObjects.StaticImage(this, this.textures['pigGround'], 0, 300);

    // this.flower1 = new Kiwi.GameObjects.StaticImage(this, this.textures['flower'], 700, 398);
    // this.flower2 = new Kiwi.GameObjects.StaticImage(this, this.textures['flower'], 720, 400);
    // this.flower3 = new Kiwi.GameObjects.StaticImage(this, this.textures['flower'], 705, 412);

    this.addChild(this.sky);
    this.addChild(this.sun.get());
    this.addChild(this.ground);

    // this.addChild(this.flower1);
    // this.addChild(this.flower2);
    // this.addChild(this.flower3);

    // this.chicken1 = new Chicken(this, 50, 380, 0.45, this.gameScale * 0.6);
    // this.addChild(this.chicken1.get());

    // this.chicken2 = new Chicken(this, 550, 400, 0.5, this.gameScale * 0.7);
    // this.addChild(this.chicken2.get());

    // this.hen = new Hen(this, 300, 310, 0.7);
    // this.addChild(this.hen.get());

    // this.chicken3 = new Chicken(this, 250, 440, 0.6, this.gameScale * 0.9);
    // this.addChild(this.chicken3.get());

    // this.chicken4 = new Chicken(this, 650, 460, 0.65, this.gameScale);
    // this.addChild(this.chicken4.get());

};

pigState.update = function() {
    Kiwi.State.prototype.update.call(this);

    // this.chicken1.update();
    // this.chicken2.update();
    // this.chicken3.update();
    // this.chicken4.update();

    this.sun.update();
};