var chickenState = new Kiwi.State('ChickenState');

chickenState.create = function() {
    Kiwi.State.prototype.create.call(this);

    // Create background
    this.sky = new Kiwi.GameObjects.StaticImage(this, this.textures['sky'], 0, 0);

    this.sun = new Sun(this, 250, 230, 1.5);

    this.ground = new Kiwi.GameObjects.StaticImage(this, this.textures['ground'], 0, 300);

    this.henHouse = new Kiwi.GameObjects.StaticImage(this, this.textures['henHouse'], 0, 200);
    this.henHouse.transform.scaleX = -0.4;
    this.henHouse.transform.scaleY = 0.4;

    this.addChild(this.sky);
    this.addChild(this.sun.get());
    this.addChild(this.ground);
    this.addChild(this.henHouse);

    this.chicken1 = new Chicken(this, 50, 400, 0.5, this.gameScale);
    this.addChild(this.chicken1.getCharacter());

    this.chicken2 = new Chicken(this, 550, 420, 0.55, this.gameScale);
    this.addChild(this.chicken2.getCharacter());

    this.chicken3 = new Chicken(this, 250, 440, 0.6, this.gameScale);
    this.addChild(this.chicken3.getCharacter());

    this.chicken4 = new Chicken(this, 650, 460, 0.65, this.gameScale);
    this.addChild(this.chicken4.getCharacter());
};

chickenState.update = function() {
    Kiwi.State.prototype.update.call(this);

    this.chicken1.update();
    this.chicken2.update();
    this.chicken3.update();
    this.chicken4.update();

    this.sun.update();
};