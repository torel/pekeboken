var pigState = new Kiwi.State('PigState');

// pigState.init = function() {
//     this.game.stage.width = 1200;
//     this.game.stage.height = 800;
// }


pigState.create = function() {
    Kiwi.State.prototype.create.call(this);
    this.game.stage.width = 1200;
    this.game.stage.height = 800;

    // Create background
    this.sky = new Kiwi.GameObjects.StaticImage(this, this.textures['sky'], 0, 0);

    this.sun = new Sun(this, 450, 30, 1.5);

    this.fence = new Kiwi.GameObjects.StaticImage(this, this.textures['fence'], 0, 290);
    this.fence2 = new Kiwi.GameObjects.StaticImage(this, this.textures['fence'], 257, 290)
    this.fence3 = new Kiwi.GameObjects.StaticImage(this, this.textures['fence'], 514, 290)

    this.ground = new Kiwi.GameObjects.StaticImage(this, this.textures['pigGround'], 0, 0);
    // var xscale = 1
    // var yscale = 740/1200
    this.ground.scaleX = (8/12);
    this.ground.scaleY = 0.6;

    this.buttonLeft = new Kiwi.GameObjects.Sprite(this, this.textures['button'], -20, 290);
    this.buttonLeft.transform.scaleX = -0.5;
    this.buttonLeft.transform.scaleY = -0.5;

    this.mouse = this.game.input.mouse;

   

    //IDEER:
    //Legge inn gjerde som går på tvers av hele pluss rett opp, ha en låve inngjerdet på ene siden og en åker på andre siden. traktor skal kjøre frem og tilbake på veien
    //Ha me noen silo baller eller en høystakk også. grisen skal gå foran i en sølepytt
    //Om jeg gidder legge inn dobbel sprite av grisen, en med søle på kroppen som han får etter at han har sølt seg til (hoppet i søla)
    //Og ha en kran på siden som man kan trykke på for å sprute på grisen for å vaske den
    //Må ha noen animasjoner i bakgrunnen med låven/åkern... kanskje fugler som står i åkern og flyr opp om man trykker på dem

    // Legg også inn peker console.log på musepeker og koordinater samt alle koordinatene til grisen, skjønner ikke hvordan den beveger seg



    // this.flower1 = new Kiwi.GameObjects.StaticImage(this, this.textures['flower'], 700, 398);
    // this.flower2 = new Kiwi.GameObjects.StaticImage(this, this.textures['flower'], 720, 400);
    // this.flower3 = new Kiwi.GameObjects.StaticImage(this, this.textures['flower'], 705, 412);

    this.addChild(this.sky);
    this.addChild(this.sun.get());
    this.addChild(this.ground);

    this.tractor = new Tractor(this, 500, 70, 0.2);
    this.addChild(this.tractor.get());

    this.addChild(this.fence);
    this.addChild(this.fence2);
    this.addChild(this.fence3);

    this.pig = new Pig(this, 300, 310, 0.4);
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
    this.tractor.update();

    this.sun.update();
     if (this.mouse.isDown) {
        console.log(this.mouse.x, this.mouse.y)
    }
};

pigState.switchState = function(){
    this.game.states.switchState('ChickenState');
}